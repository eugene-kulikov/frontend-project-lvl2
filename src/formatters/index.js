import getStylish from './stylish.js';
import getPlain from './plain.js';
import getJson from './json.js';

export default function getOutputFormat(tree, format) {
  switch (format) {
    case 'stylish':
      return getStylish(tree);
    case 'plain':
      return getPlain(tree);
    case 'json':
      return getJson(tree);
    default:
      throw new Error('Unknown format!');
  }
}
