export const Request = {
  ExceptionEncountered: 'System.ExceptionEncountered',
  Intent: 'IntentRequest',
  Launch: 'LaunchRequest',
  SessionEnded: 'SessionEndedRequest'
};

export const Intent = {
  Cancel: 'AMAZON.CancelIntent',
  Help: 'AMAZON.HelpIntent',
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
  Stop: 'AMAZON.StopIntent',
  Yes: 'AMAZON.YesIntent'
};

export const AudioPlayer = {
  Request: {
    PlaybackFailed: 'AudioPlayer.PlaybackFailed',
    PlaybackFinished: 'AudioPlayer.PlaybackFinished',
    PlaybackNearlyFinished: 'AudioPlayer.PlaybackNearlyFinished',
    PlaybackStarted: 'AudioPlayer.PlaybackStarted',
    PlaybackStopped: 'AudioPlayer.PlaybackStopped'
  },

  Directive: {
    ClearQueue: 'AudioPlayer.ClearQueue',
    Play: 'AudioPlayer.Play',
    Stop: 'AudioPlayer.Stop'
  }
};

export const PlaybackController = {
  Request: {
    NextCommandIssued: 'PlaybackController.NextCommandIssued',
    PauseCommandIssued: 'PlaybackController.PauseCommandIssued',
    PlayCommandIssued: 'PlaybackController.PlayCommandIssued',
    PreviousCommandIssued: 'PlaybackController.PreviousCommandIssued'
  }
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

export default {
  AudioPlayer,
  ConnectedHome,
  Intent,
  PlaybackController,
  Request
};
