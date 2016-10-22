export default {
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
  },

  PlayBehavior: {
    Enqueue: 'ENQUEUE',
    ReplaceAll: 'REPLACE_ALL',
    ReplaceEnqueued: 'REPLACE_ENQUEUED'
  },

  ClearBehavior: {
    ClearAll: 'CLEAR_ALL',
    ClearEnqueued: 'CLEAR_ENQUEUED'
  }
};
