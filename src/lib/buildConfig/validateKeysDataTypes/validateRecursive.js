import { RECURSIVE_KEY } from 'src/constants';
import { InvalidOptionError } from 'src/errors';

/**
 * Validates recursive is proper data type.
 * @param   {object} config Remediator config object
 * @returns {object}        Remediator config object
 * @throws  {InvalidOptionError}
 */
export default function validateRecursive(config) {
  if (typeof config[RECURSIVE_KEY] !== typeof true) {
    throw new InvalidOptionError(RECURSIVE_KEY);
  }

  return {
    ...config,
  };
}
