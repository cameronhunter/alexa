import { ControlRequest } from './Control';
import { ConnectedHome } from 'alexa-constants';
import UUID from 'uuid';

const name = ConnectedHome.Request.DecrementPercentage;

const requestTransform = ({ payload = {} }) => {
  const { appliance = {}, deltaPercentage = {} } = payload;
  return [appliance.applianceId, deltaPercentage.value, payload];
};

const responseTransform = (response) =>
  Promise.resolve(response).then(() => ({
    header: {
      messageId: UUID.v4(),
      name: ConnectedHome.Confirmation.DecrementPercentage,
      namespace: ConnectedHome.Control,
      payloadVersion: '2'
    },
    payload: {}
  }));

export default ControlRequest(name, requestTransform, responseTransform);
