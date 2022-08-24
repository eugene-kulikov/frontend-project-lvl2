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

test('testing JSON file comparison', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const stylishResult = genDiff(file1, file2);
  const plainResult = genDiff(file1, file2, 'plain');
  const jsonResult = genDiff(file1, file2, 'json');
  expect(stylishResult).toEqual(expectedStylishResult);
  expect(plainResult).toEqual(expectedPlainResult);
  expect(jsonResult).toEqual(expectedJsonResult);
});

test('testing YAML file comparison', () => {
  const file1 = getFixturePath('file1.yml');
  const file2 = getFixturePath('file2.yml');
  const stylishResult = genDiff(file1, file2);
  const plainResult = genDiff(file1, file2, 'plain');
  const jsonResult = genDiff(file1, file2, 'json');
  expect(stylishResult).toEqual(expectedStylishResult);
  expect(plainResult).toEqual(expectedPlainResult);
  expect(jsonResult).toEqual(expectedJsonResult);
});
