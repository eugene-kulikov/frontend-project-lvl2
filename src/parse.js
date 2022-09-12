import { load } from 'js-yaml';

const mapping = {
  yml: (content) => load(content),
  yaml: (content) => load(content),
  json: (content) => JSON.parse(content),
};

const parse = (content, type) => {
  try {
    return mapping[type](content);
  } catch (e) {
    throw new Error(`Unknown extension: ${type}`);
  }
};

export default parse;
