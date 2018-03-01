import { ControlRequest } from './Control';
import { ConnectedHome } from 'alexa-constants';
import UUID from 'uuid';

const name = ConnectedHome.Request.SetPercentage;

const requestTransform = ({ payload = {} }) => {
  const { appliance = {}, percentageState = {} } = payload;
  return [appliance.applianceId, percentageState.value, payload];
};

const responseTransform = (response) =>
  Promise.resolve(response).then(() => ({
    header: {
      messageId: UUID.v4(),
      name: ConnectedHome.Confirmation.SetPercentage,
      namespace: ConnectedHome.Control,
      payloadVersion: '2'
    },
    payload: {}
  }));

export default ControlRequest(name, requestTransform, responseTransform);
