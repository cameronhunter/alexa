import { ControlRequest } from './Control';

const name = 'SetTargetTemperatureRequest';

const requestTransform = ({ payload = {} }) => {
    const { appliance = {}, targetTemperature = {} } = payload;
    return [appliance.applianceId, targetTemperature.value, payload];
};

const responseTransform = (response) => Promise.resolve(response).then(state => ({
    header: {
        messageId: '26fa11a8-accb-4f66-a272-8b1ff7abd722',
        name: 'SetTargetTemperatureConfirmation',
        namespace: 'Alexa.ConnectedHome.Control',
        payloadVersion: '2'
    },
    payload: {
        ...state.current,
        previousState: {
            ...state.previous
        }
    }
}));

export default ControlRequest(name, requestTransform, responseTransform);
