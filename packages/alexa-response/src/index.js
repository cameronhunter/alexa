import Response from './Response';

export AudioPlayer from './AudioPlayer';
export Response from './Response';

export default Response;

// For commonjs compatibility
export const ask = Response.ask;
export const say = Response.say;
export const card = Response.card;
export const reprompt = Response.reprompt;
export const shouldEndSession = Response.shouldEndSession;
export const directives = Response.directives;
export const build = Response.build;
