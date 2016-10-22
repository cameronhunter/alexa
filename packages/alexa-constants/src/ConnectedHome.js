export default {
  Control: 'Alexa.ConnectedHome.Control',
  Discovery: 'Alexa.ConnectedHome.Discovery',
  System: 'Alexa.ConnectedHome.System',

  Request: {
    DecrementPercentage: 'DecrementPercentageRequest',
    DecrementTargetTemperature: 'DecrementTargetTemperatureRequest',
    DiscoverAppliances: 'DiscoverAppliancesRequest',
    HealthCheck: 'HealthCheckRequest',
    IncrementPercentage: 'IncrementPercentageRequest',
    IncrementTargetTemperature: 'IncrementTargetTemperatureRequest',
    SetPercentage: 'SetPercentageRequest',
    SetTargetTemperature: 'SetTargetTemperatureRequest',
    TurnOff: 'TurnOffRequest',
    TurnOn: 'TurnOnRequest'
  },

  Response: {
    DiscoverAppliances: 'DiscoverAppliancesResponse',
    HealthCheck: 'HealthCheckResponse'
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
