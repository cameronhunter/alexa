export const SSML = 'SSML';
export const PlainText = 'PlainText';
export const Simple = 'Simple';

export default class Response {
  static ask = (...args) => new Response().ask(...args);
  static say = (...args) => new Response().say(...args);
  static card = (...args) => new Response().card(...args);
  static reprompt = (...args) => new Response().reprompt(...args);
  static shouldEndSession = (...args) => new Response().shouldEndSession(...args);

  constructor(state = {}) {
    this.state = state;
  }

  ask(text, type) {
    return this.say(text, type).shouldEndSession(false);
  }

  say(text, type) {
    return new Response({
      ...this.state,
      response: {
        ...this.state.response,
        shouldEndSession: true,
        ...outputSpeech(text, type)
      }
    });
  }

  reprompt(text, type) {
    return new Response({
      ...this.state,
      response: {
        ...this.state.response,
        reprompt: { ...outputSpeech(text, type) }
      }
    });
  }

  card(title, content, type = Simple) {
    return new Response({
      ...this.state,
      response: {
        ...this.state.response,
        card: { type, title, content }
      }
    });
  }

  attributes(data) {
    return new Response({
      ...this.state,
      sessionAttributes: {
        ...this.state.sessionAttributes,
        ...data
      }
    });
  }

  shouldEndSession(shouldEndSession) {
    return new Response({
      ...this.state,
      response: {
        ...this.state.response,
        shouldEndSession
      }
    });
  }

  build(attributes) {
    return {
      version: '1.0',
      ...this.state,
      response: {
        shouldEndSession: true,
        ...this.state.response
      },
      ...(attributes || this.state.sessionAttributes ? { sessionAttributes: { ...attributes, ...this.state.sessionAttributes } } : null)
    };
  }
}

const outputSpeech = (text, type = PlainText) => {
  switch (type) {
    case SSML:
      return { outputSpeech: { type, ssml: `<speak>${text}</speak>` } };
    default:
      return { outputSpeech: { type, text } };
  }
};
