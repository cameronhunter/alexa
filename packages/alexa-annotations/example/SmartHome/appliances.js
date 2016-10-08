const Appliances = [
    {
        brightness: 0,
        device: {
            applianceId: 'living-room',
            manufacturerName: 'Philips',
            modelName: 'Hue',
            version: 'v1.0',
            friendlyName: 'Living Room',
            friendlyDescription: 'Philips Hue light bulb',
            isReachable: true,
            actions: ['turnOn', 'turnOff', 'setPercentage', 'incrementPercentage', 'decrementPercentage'],
        },
    },
    {
        brightness: 100,
        device: {
            applianceId: 'bedroom',
            manufacturerName: 'Philips',
            modelName: 'Hue',
            version: 'v1.0',
            friendlyName: 'Bedroom',
            friendlyDescription: 'Philips Hue light bulb',
            isReachable: true,
            actions: ['turnOn', 'turnOff', 'setPercentage', 'incrementPercentage', 'decrementPercentage'],
        }
    }
];

export const devices = () => {
    return Promise.resolve(Appliances.map(_ => _.device));
};

export const brightness = (applianceId, value) => {
    // Get
    if (value == null) {
        return new Promise((resolve, reject) => {
            const [value] = Appliances.filter(_ => _.device.applianceId === applianceId).map(_ => _.brightness);
            value !== undefined ? resolve(value) : reject();
        });
    }

    // Set
    return new Promise((resolve, reject) => {
        const [appliance] = state.filter(_ => _.device.applianceId === applianceId);
        appliance ? resolve({ ...state, [applianceId]: { ...state[applianceId], brightness: value } }) : reject();
    }).then(updatedState => {
        Appliances = updatedState;
        return value;
    });
};
