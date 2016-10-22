import { ControlRequest } from './Control';
import { ConnectedHome } from 'alexa-constants';
import UUID from 'uuid';

const name = ConnectedHome.Request.TurnOn;

const requestTransform = ({ payload = {} }) => {
  const { appliance = {} } = payload;
  return [appliance.applianceId, payload];
};

const responseTransform = (response) => Promise.resolve(response).then(() => ({
  header: {
    messageId: UUID.v4(),
    name: ConnectedHome.Confirmation.TurnOn,
    namespace: ConnectedHome.Control,
    payloadVersion: '2'
  },
  payload: {}
}));

export default ControlRequest(name, requestTransform, responseTransform);
