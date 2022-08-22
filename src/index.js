import { readFileSync } from 'fs';
import { resolve, extname } from 'path';
import parse from './parse.js';
import buildTree from './buildTree.js';
import getOutputFormat from './formatters/index.js';

const getFormat = (filepath) => extname(filepath).substring(1);
const getPath = (filepath) => resolve(process.cwd(), filepath);
const readFile = (filepath) => readFileSync(getPath(filepath));

export default function genDiff(filepath1, filepath2, formatName = 'stylish') {
  const data1 = parse(readFile(filepath1), getFormat(filepath1));
  const data2 = parse(readFile(filepath2), getFormat(filepath2));
  const diffInfo = buildTree(data1, data2);
  return getOutputFormat(diffInfo, formatName);
}
