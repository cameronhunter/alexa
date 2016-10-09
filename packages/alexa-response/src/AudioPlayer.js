export default {
  play(stream) {
    return {
      type: 'AudioPlayer.Play',
      playBehavior: 'REPLACE_ALL',
      audioItem: { stream }
    };
  },

  enqueue(stream, replaceQueue = false) {
    return {
      type: 'AudioPlayer.Play',
      playBehavior: replaceQueue ? 'REPLACE_ENQUEUED' : 'ENQUEUE',
      audioItem: { stream }
    };
  },

  stop() {
    return {
      type: 'AudioPlayer.Stop'
    };
  },

  clearQueue(stopCurrent = false) {
    return {
      type: 'AudioPlayer.ClearQueue',
      clearBehavior: stopCurrent ? 'CLEAR_ALL' : 'CLEAR_ENQUEUED'
    };
  }
};
