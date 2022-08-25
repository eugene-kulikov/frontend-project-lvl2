import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return _.isString(value) ? `'${value}'` : value;
};

const getPlain = (tree) => {
  const generatePlain = (branch, parent) => branch.flatMap((node) => {
    const path = [...parent, node.key].join('.');

    switch (node.state) {
      case 'deleted':
        return `Property '${path}' was removed`;
      case 'added':
        return `Property '${path}' was added with value: ${stringify(node.value)}`;
      case 'unchanged':
        return [];
      case 'changed':
        return `Property '${path}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`;
      case 'nested':
        return `${generatePlain(node.value, [path]).join('\n')}`;
      default:
        throw new Error(`State: ${node.state} is unknown`);
    }
  });

  const plain = generatePlain(tree, []);
  return [...plain].join('\n');
};

export default getPlain;
