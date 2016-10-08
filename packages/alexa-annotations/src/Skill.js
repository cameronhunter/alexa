import { NotFound, InternalServer } from './ErrorCodes';
import isAuthorized from './Authorization';

const Skill = (options) => (Skill) => (event, context, callback) => {
  const { session } = event || {};
  const { application, attributes } = session || {};

  return isAuthorized(options, application).then(() => {
    return new Skill(session).route(event) || Promise.reject(NotFound);
  }).then(response => {
    return (typeof response.build === 'function') ? response.build(attributes) : response;
  }).then(response => {
    callback && callback(null, response);
    return response;
  }).catch((error = InternalServer) => {
    callback && callback(error);
    return error;
  }).then(response => {
    if (options.logging !== false) {
      console.log(`[${Skill.name}]`, JSON.stringify({ event, response }));
    }

    return response;
  });
};

/*******************************************************************************
 * This provides multiple ways of declaring an annotation, for example:
 *
 * 1. @Skill
 * 2. @Skill()
 * 3. @Skill({ applicationId: 'my-authorized-application-id' })
 ******************************************************************************/

export default (optionsOrClass = {}) => {
  const isClass = typeof optionsOrClass === 'function';
  const options = isClass ? {} : optionsOrClass;
  const handler = Skill(options);

  return isClass ? handler(optionsOrClass) : handler;
};
