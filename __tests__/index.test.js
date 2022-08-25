import { test, expect } from '@jest/globals';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const expectedStylishResult = readFile('stylishResult.txt');
const expectedPlainResult = readFile('plainResult.txt');
const expectedJsonResult = readFile('jsonResult.txt');
const extensions = ['json', 'yml', 'yaml'];

describe('Testing file comparison', () => {
  test.each(extensions)('Format %s', (extension) => {
    const file1 = getFixturePath(`file1.${extension}`);
    const file2 = getFixturePath(`file2.${extension}`);

    expect(genDiff(file1, file2, 'stylish')).toEqual(expectedStylishResult);
    expect(genDiff(file1, file2, 'plain')).toEqual(expectedPlainResult);
    expect(genDiff(file1, file2, 'json')).toEqual(expectedJsonResult);
  });
});
