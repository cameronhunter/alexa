import { Skill, Discovery, TurnOn, TurnOff, Control } from '../..';
import { devices, brightness } from './appliances';

@Skill
export default class SmartHome {

  @Discovery
  discovery() {
    return devices();
  }

  @TurnOn
  on(applianceId) {
    return brightness(applianceId, 100);
  }

  @TurnOff
  off(applianceId) {
    return brightness(applianceId, 0);
  }

  @SetPercentage
  percentage(applianceId, percentage) {
    return brightness(applianceId, percentage);
  }

  @Control('IncrementPercentageRequest', 'DecrementPercentageRequest')
  control(applianceId, name, payload = {}) {
    const { deltaPercentage = {} } = payload;
    switch (name) {
      case 'IncrementPercentageRequest':
        return brightness(applianceId).then(value => brightness(applianceId, value + deltaPercentage.value));

      case 'DecrementPercentageRequest':
        return brightness(applianceId).then(value => brightness(applianceId, value - deltaPercentage.value));

      default:
        return Promise.reject();
    }
  }

}
