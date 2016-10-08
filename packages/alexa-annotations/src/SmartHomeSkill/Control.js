import annotation from '../annotation';

const isControlRequest = (...names) => (event = {}) => {
    const { header = {} } = event;
    const { namespace, name } = header;
    return namespace === 'Alexa.ConnectedHome.Control' && (!names.length || names.indexOf(name) >= 0);
};

export const ControlRequest = (name, transform) => annotation(
    isControlRequest(name),
    (transform || (({ payload = {} }) => [payload]))
);

export default (...names) => annotation(
    isControlRequest(...names),
    ({ header = {}, payload = {} }) => {
        const { appliance = {} } = payload;
        return [appliance.applianceId, header.name, payload];
    }
);
