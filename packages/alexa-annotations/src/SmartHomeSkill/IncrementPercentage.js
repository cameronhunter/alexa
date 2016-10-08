import { ControlRequest } from './Control';

const name = 'IncrementPercentageRequest';

const requestTransform = ({ payload = {} }) => {
    const { appliance = {}, deltaPercentage = {} } = payload;
    return [appliance.applianceId, deltaPercentage.value, payload];
};

const responseTransform = (response) => Promise.resolve(response).then(() => ({
    header: {
        messageId: '26fa11a8-accb-4f66-a272-8b1ff7abd722',
        name: 'IncrementPercentageConfirmation',
        namespace: 'Alexa.ConnectedHome.Control',
        payloadVersion: '2'
    },
    payload: {}
}));

export default ControlRequest(name, requestTransform, responseTransform);
