import getStylish from './stylish.js';

export default function getOutputFormat(data, format) {
  switch (format) {
    case 'stylish':
      return getStylish(data);
    default:
      throw new Error('Unknown format!');
  }
}
