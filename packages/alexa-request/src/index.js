import Request from './Request';

export default Request;

// For commonjs compatibility
export const session = Request.session;
export const intent = Request.intent;
export const launchRequest = Request.launchRequest;
export const sessionEndedRequest = Request.sessionEndedRequest;
