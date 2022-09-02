import { load } from 'js-yaml';

const parsers = (content, type) => {
  switch (type) {
    case 'json':
      return JSON.parse(content);
    case 'yml':
    case 'yaml':
      return load(content);
    default:
      throw new Error(`Unknown type: ${type}`);
  }
};

export default parsers;
