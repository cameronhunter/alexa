import { ssml, renderToString } from 'alexa-ssml';

export const CardType = {
  LinkAccount: 'LinkAccount',
  Simple: 'Simple',
  Standard: 'Standard'
};

export const SpeechType = {
  PlainText: 'PlainText',
  SSML: 'SSML'
};

export default class Response {
  static ask = (...args) => new Response().ask(...args);
  static say = (...args) => new Response().say(...args);
  static card = (...args) => new Response().card(...args);
  static reprompt = (...args) => new Response().reprompt(...args);
  static shouldEndSession = (...args) => new Response().shouldEndSession(...args);
  static build = (params) => Object.keys(params).reduce((response, action) => {
    const options = params[action];
    const text = typeof options === 'string' ? options : options;
    const type = typeof options === 'string' ? undefined : options.type;
    switch (action) {
      case 'ask': return response.ask(text, type);
      case 'say': return response.say(text, type);
      case 'reprompt': return response.reprompt(text, type);
      case 'card': return response.card(options);
      case 'attributes': return response.attributes(options);
      case 'shouldEndSession': return response.shouldEndSession(options);
    }
  }, new Response());

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

  card({ type = CardType.Simple, ...rest }) {
    return new Response({
      ...this.state,
      response: {
        ...this.state.response,
        card: {
          ...rest,
          ...(type && { type }),
        }
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

const outputSpeech = (text, type = SpeechType.PlainText) => {
  if (type === SpeechType.SSML || typeof text === 'object') {
    const speech = (typeof text === 'object') ? renderToString(text) : text;
    return { outputSpeech: { type: SpeechType.SSML, ssml: speech } };
  } else {
    return { outputSpeech: { type, text } };
  }
};

// For commonjs compatibility
export const ask = Response.ask;
export const say = Response.say;
export const card = Response.card;
export const reprompt = Response.reprompt;
export const shouldEndSession = Response.shouldEndSession;
export const build = Response.build;
