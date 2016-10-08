import { Unauthorized } from './ErrorCodes';

export default (expected = {}, actual = {}) => new Promise((resolve, reject) => {
  const isOK = !expected.applicationId || expected.applicationId === actual.applicationId;
  return isOK ? resolve() : reject(Unauthorized);
});
