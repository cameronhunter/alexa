import { AudioPlayer } from 'alexa-constants';
const { Directive, PlayBehavior, ClearBehavior } = AudioPlayer;

export default {
  play(stream) {
    return {
      type: Directive.Play,
      playBehavior: PlayBehavior.ReplaceAll,
      audioItem: { stream }
    };
  },

  enqueue(stream, replaceQueue = false) {
    return {
      type: Directive.Play,
      playBehavior: replaceQueue ? PlayBehavior.ReplaceEnqueued : PlayBehavior.Enqueue,
      audioItem: { stream }
    };
  },

  stop() {
    return {
      type: Directive.Stop
    };
  },

  clearQueue(stopCurrent = false) {
    return {
      type: Directive.ClearQueue,
      clearBehavior: stopCurrent ? ClearBehavior.ClearAll : ClearBehavior.ClearEnqueued
    };
  }
};
