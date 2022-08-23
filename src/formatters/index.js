import getStylish from './stylish.js';
import getPlain from './plain.js';

export default function getOutputFormat(tree, format) {
  switch (format) {
    case 'stylish':
      return getStylish(tree);
    case 'plain':
      return getPlain(tree);
    default:
      throw new Error('Unknown format!');
  }
}
