import Request from 'alexa-request';
import HistoryBuff from './index';

test('launch', () => {
  const event = Request.launchRequest().build();
  return expect(HistoryBuff(event)).resolves.toMatchSnapshot();
});

test.skip('GetFirstEventIntent', () => {
  const event = Request.intent('GetFirstEventIntent', { day: 465302909000 });
  return expect(HistoryBuff(event)).resolves.toMatchSnapshot();
});
