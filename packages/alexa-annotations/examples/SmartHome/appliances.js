const values = (obj = {}) => Object.keys(obj).map((key) => obj[key]);

const Appliances = {
  'living-room': {
    brightness: 0,
    device: {
      applianceId: 'living-room',
      manufacturerName: 'Philips',
      modelName: 'Hue',
      version: 'v1.0',
      friendlyName: 'Living Room',
      friendlyDescription: 'Philips Hue light bulb',
      isReachable: true,
      actions: ['turnOn', 'turnOff', 'setPercentage', 'incrementPercentage', 'decrementPercentage']
    }
  },
  bedroom: {
    brightness: 100,
    device: {
      applianceId: 'bedroom',
      manufacturerName: 'Philips',
      modelName: 'Hue',
      version: 'v1.0',
      friendlyName: 'Bedroom',
      friendlyDescription: 'Philips Hue light bulb',
      isReachable: true,
      actions: ['turnOn', 'turnOff', 'setPercentage', 'incrementPercentage', 'decrementPercentage']
    }
  }
};

export const devices = () => {
  return Promise.resolve(values(Appliances).map((_) => _.device));
};

export const brightness = (applianceId, value) => {
  // Get
  if (value == null) {
    const appliance = Appliances[applianceId];
    return appliance ? Promise.resolve(appliance.brightness) : Promise.reject();
  }

  // Set
  return new Promise((resolve, reject) => {
    const appliance = Appliances[applianceId];
    appliance ? resolve({ ...Appliances, [applianceId]: { ...Appliances[applianceId], brightness: value } }) : reject();
  }).then((updatedState) => {
    Appliances = updatedState;
    return value;
  });
};
