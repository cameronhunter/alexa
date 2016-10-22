import { ControlRequest } from './Control';
import { ConnectedHome } from 'alexa-constants';
import UUID from 'uuid';

const name = ConnectedHome.Request.SetTargetTemperature;

const requestTransform = ({ payload = {} }) => {
  const { appliance = {}, targetTemperature = {} } = payload;
  return [appliance.applianceId, targetTemperature.value, payload];
};

const responseTransform = (response) => Promise.resolve(response).then(state => ({
  header: {
    messageId: UUID.v4(),
    name: ConnectedHome.Confirmation.SetTargetTemperature,
    namespace: ConnectedHome.Control,
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
