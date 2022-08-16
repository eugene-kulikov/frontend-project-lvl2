import { test, expect } from '@jest/globals';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

test('testing json file comparison', () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));

  const file1 = resolve(__dirname, '..', '__fixtures__', 'file1.json');
  const file2 = resolve(__dirname, '..', '__fixtures__', 'file2.json');

  const resultTest1 = ['- follow:false', '  host:hexlet.io', '- proxy:123.234.53.22', '+ timeout:20', '- timeout:50', '+ verbose:true'];
  const resultTest2 = ['+ follow:false', '  host:hexlet.io', '+ proxy:123.234.53.22', '- timeout:20', '+ timeout:50', '- verbose:true'];

  const test1 = genDiff(file1, file2);
  const test2 = genDiff(file2, file1);

  expect(test1.split('\n')).toStrictEqual(resultTest1);
  expect(test2.split('\n')).toStrictEqual(resultTest2);
});
