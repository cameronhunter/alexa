import { ControlRequest } from './Control';
import { ConnectedHome } from 'alexa-constants';
import UUID from 'uuid';

const name = ConnectedHome.Request.IncrementTargetTemperature;

const requestTransform = ({ payload = {} }) => {
  const { appliance = {}, deltaTemperature = {} } = payload;
  return [appliance.applianceId, deltaTemperature.value, payload];
};

const responseTransform = (response) =>
  Promise.resolve(response).then((state) => ({
    header: {
      messageId: UUID.v4(),
      name: ConnectedHome.Confirmation.IncrementTargetTemperature,
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
