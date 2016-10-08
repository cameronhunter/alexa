import test from 'ava';
import Request from '../../src/Request';
import HistoryBuff from './index';

test('launch', t => {
  const event = Request.launchRequest().build();

  return HistoryBuff(event).then(response => {
    t.deepEqual(response, {
      version: '1.0',
      response: {
        shouldEndSession: false,
        outputSpeech: { type: 'SSML', ssml: '<speak><p>History buff.</p> <p>What day do you want events for?</p></speak>' },
        card: { type: 'Simple', title: 'This Day in History', content: 'History Buff. What day do you want events for?' },
        reprompt: { outputSpeech: { type: 'PlainText', text: 'With History Buff, you can get historical events for any day of the year. For example, you could say today, or August thirtieth. Now, which day do you want?' } }
      }
    });
  });
});

test.skip('GetFirstEventIntent', t => {
  const event = Request.intent('GetFirstEventIntent', { day: 465302909000 });

  return HistoryBuff(event).then(response => {
    t.deepEqual(response, {
      version: '1.0',
      response: {
        shouldEndSession: false,
        outputSpeech: { type: 'SSML', ssml: '<speak><p>History buff.</p> <p>What day do you want events for?</p></speak>' },
        card: { type: 'Simple', title: 'This Day in History', content: 'History Buff. What day do you want events for?' },
        reprompt: { outputSpeech: { type: 'PlainText', text: 'With History Buff, you can get historical events for any day of the year. For example, you could say today, or August thirtieth. Now, which day do you want?' } }
      }
    });
  });
});
