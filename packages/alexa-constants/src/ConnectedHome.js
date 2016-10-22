export default {
  Control: 'Alexa.ConnectedHome.Control',
  Discovery: 'Alexa.ConnectedHome.Discovery',

  Request: {
    DecrementPercentage: 'DecrementPercentageRequest',
    DecrementTargetTemperature: 'DecrementTargetTemperatureRequest',
    DiscoverAppliances: 'DiscoverAppliancesRequest',
    IncrementPercentage: 'IncrementPercentageRequest',
    IncrementTargetTemperature: 'IncrementTargetTemperatureRequest',
    SetPercentage: 'SetPercentageRequest',
    SetTargetTemperature: 'SetTargetTemperatureRequest',
    TurnOff: 'TurnOffRequest',
    TurnOn: 'TurnOnRequest'
  },

  Confirmation: {
    DecrementPercentage: 'DecrementPercentageConfirmation',
    DecrementTargetTemperature: 'DecrementTargetTemperatureConfirmation',
    IncrementPercentage: 'IncrementPercentageConfirmation',
    IncrementTargetTemperature: 'IncrementTargetTemperatureConfirmation',
    SetPercentage: 'SetPercentageConfirmation',
    SetTargetTemperature: 'SetTargetTemperatureConfirmation',
    TurnOff: 'TurnOffConfirmation',
    TurnOn: 'TurnOnConfirmation'
  }
};
