import _ from 'lodash';
import { readFileSync } from 'fs';
import { resolve, extname } from 'path';
import { cwd } from 'node:process';
import parse from './parse.js';

export default function gendiff(filepath1, filepath2) {
  const typeFile1 = extname(filepath1).substring(1);
  const typeFile2 = extname(filepath2).substring(1);

  const data1 = parse(readFileSync(resolve(cwd(), filepath1)), typeFile1);
  const data2 = parse(readFileSync(resolve(cwd(), filepath2)), typeFile2);

  const arr1 = [];
  const arr2 = [];

  _.forIn(data1, (value, key) => {
    arr1.push(`${key}:${value}`);
  });
  _.forIn(data2, (value, key) => {
    arr2.push(`${key}:${value}`);
  });

  const commonArr = [...new Set([...arr1, ...arr2])].sort();

  const result = commonArr.map((item) => {
    if (arr1.includes(item) && arr2.includes(item)) {
      return `  ${item}`;
    }
    if (arr1.includes(item)) {
      return `- ${item}`;
    }
    return `+ ${item}`;
  });
  return result.join('\n');
}
