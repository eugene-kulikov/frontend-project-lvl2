import { test, expect } from '@jest/globals';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);
const extensions = ['json', 'yml', 'yaml'];

let expectedStylishResult;
let expectedPlainResult;
let expectedJsonResult;

beforeAll(async () => {
  expectedStylishResult = await readFile(getFixturePath('stylishResult.txt'), 'utf-8');
  expectedPlainResult = await readFile(getFixturePath('plainResult.txt'), 'utf-8');
  expectedJsonResult = await readFile(getFixturePath('jsonResult.txt'), 'utf-8');
});

describe('File comparison', () => {
  test.each(extensions)('Check input format %s', async (extension) => {
    const file1 = await getFixturePath(`file1.${extension}`);
    const file2 = await getFixturePath(`file2.${extension}`);
    expect(genDiff(file1, file2, 'stylish')).toEqual(expectedStylishResult);
    expect(genDiff(file1, file2, 'plain')).toEqual(expectedPlainResult);
    expect(genDiff(file1, file2, 'json')).toEqual(expectedJsonResult);
  });

  test('Check default output format', async () => {
    const file1 = await getFixturePath('file1.json');
    const file2 = await getFixturePath('file2.json');
    expect(genDiff(file1, file2, 'stylish')).toEqual(expectedStylishResult);
  });

  test('Check wrong format', async () => {
    const file1 = await getFixturePath('file1.json');
    const file2 = await getFixturePath('file2.json');
    expect(() => genDiff(file1, file2, 'csv')).toThrow('Unknown format: csv');
  });

  test('Check wrong extension', async () => {
    const file1 = await getFixturePath('file1.txt');
    const file2 = await getFixturePath('file2.json');
    expect(() => genDiff(file1, file2)).toThrow('Unknown extension: txt');
  });
});
