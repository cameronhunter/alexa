import { Request as Constants } from 'alexa-constants';

function entries(input) {
  const array = input || [];
  return Object.keys(array).map(key => [key, array[key]]);
}

export default class Request {
  static session = (...args) => new Request().session(...args);
  static intent = (...args) => new Request().intent(...args);
  static launchRequest = (...args) => new Request().launchRequest(...args);
  static sessionEndedRequest = (...args) => new Request().sessionEndedRequest(...args);

  constructor(state = {}) {
    this.state = state;
  }

  session(session) {
    return new Request({
      ...this.state,
      session: {
        ...this.state.session,
        ...session
      }
    });
  }

  intent(name, slots = {}) {
    const slotData = entries(slots).reduce((state, [name, value]) => ({ ...state, [name]: { name, value } }), {});
    return new Request({
      ...this.state,
      request: {
        type: Constants.Intent,
        intent: {
          name: name,
          ...(Object.keys(slotData).length ? { slots: slotData } : null)
        }
      }
    });
  }

  launchRequest() {
    return new Request({
      ...this.state,
      request: {
        type: Constants.Launch
      }
    });
  }

  sessionEndedRequest() {
    return new Request({
      ...this.state,
      request: {
        type: Constants.SessionEnded
      }
    });
  }

  build() {
    return { ...this.state };
  }
}
