import _ from 'lodash';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { cwd } from 'node:process';

export default function gendiff(filepath1, filepath2) {
  const data1 = JSON.parse(readFileSync(resolve(cwd(), filepath1)));
  const data2 = JSON.parse(readFileSync(resolve(cwd(), filepath2)));

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
