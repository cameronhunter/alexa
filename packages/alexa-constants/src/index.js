export const Request = {
    Intent: 'IntentRequest',
    Launch: 'LaunchRequest',
    SessionEnded: 'SessionEndedRequest'
};

export const Intent = {
    Cancel: 'AMAZON.CancelIntent',
    Help: 'AMAZON.HelpIntent',
    Stop: 'AMAZON.StopIntent',
    LoopOff: 'AMAZON.LoopOffIntent',
    LoopOn: 'AMAZON.LoopOnIntent',
    Next: 'AMAZON.NextIntent',
    No: 'AMAZON.NoIntent',
    Pause: 'AMAZON.PauseIntent',
    Previous: 'AMAZON.PreviousIntent',
    Repeat: 'AMAZON.RepeatIntent',
    Resume: 'AMAZON.ResumeIntent',
    ShuffleOff: 'AMAZON.ShuffleOffIntent',
    ShuffleOn: 'AMAZON.ShuffleOnIntent',
    StartOver: 'AMAZON.StartOverIntent',
    Yes: 'AMAZON.YesIntent'
};

export const ConnectedHome = {
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
