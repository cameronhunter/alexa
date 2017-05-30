import annotation from '../annotation';

const values = (obj = {}) => Object.keys(obj).map((key) => obj[key]);

export default (...names) => annotation(
  ({ request = {} }) => {
    const { type, intent = {} } = request;
    return type === 'IntentRequest' && names.indexOf(intent.name) >= 0;
  },

  ({ request = {} }) => {
    const { intent = {} } = request;
    const { slots = {} } = intent;
    return values(slots).reduce((state, { name, value }) => {
      return (name && value != null) ? { ...state, [name]: value } : state;
    }, {});
  }
);
