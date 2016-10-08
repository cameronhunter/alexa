import { Skill, Intent, Launch } from '../..';
import Response from 'alexa-response';
import wikipedia from './wikipedia';

const { ask, say } = Response;

const PaginationSize = 3;
const MonthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const IntroText = 'With History Buff, you can get historical events for any day of the year. For example, you could say today, or August thirtieth. Now, which day do you want?';

@Skill
export default class HistoryBuff {

  constructor(attributes = {}) {
    this.result = attributes.result;
    this.index = attributes.index;
  }

  @Launch
  launch() {
    return ask('<speak><p>History buff.</p> <p>What day do you want events for?</p></speak>', 'SSML')
            .card({ title: 'This Day in History', content: 'History Buff. What day do you want events for?' })
            .reprompt(IntroText);
  }

  @Intent('GetFirstEventIntent')
  firstEvent({ day }) {
    const date = day ? new Date(day) : new Date();
    const monthName = MonthNames[date.getMonth()];
    const cardTitle = `Events on ${monthName} ${date.getDate()}`;

    return wikipedia(monthName, date.getDate()).then(result => {
      const events = result.slice(0, PaginationSize);
      const speechText = events.reduce((state, event) => `<p>${state}${event}</p>`, '');

      return ask(`<speak><p>For ${monthName} ${date.getDate()}, </p> ${speechText} <p>Wanna go deeper in history?</p></speak>`, 'SSML')
              .card({ title: cardTitle, content: `For ${monthName} ${date.getDate()}, ${events.join(' ')}` })
              .reprompt(IntroText)
              .attributes({ result, index: PaginationSize });
    }).catch(error => {
      return say(error).card(cardTitle, error);
    });
  }

  @Intent('GetNextEventIntent')
  nextEvent() {
    const cardTitle = 'More events on this day in history';
    const repromptText = 'Do you want to know more about what happened on this date?';

    if (!this.result) {
      return ask(IntroText).card({ title: cardTitle, content: IntroText }).reprompt(repromptText);
    }

    if (this.index >= this.result.length) {
      return ask('There are no more events for this date. Try another date by saying <break time="0.3s"/> get events for august thirtieth.', 'SSML')
              .card({ title: cardTitle, content: 'There are no more events for this date. Try another date by saying, get events for august thirtieth.' })
              .reprompt(repromptText);
    }

    const index = this.index + PaginationSize;
    const events = this.result.slice(this.index, index);
    const moreContent = index < this.result.length;
    const speechText = events.reduce((state, event) => `<p>${state}${event}</p>`, '');
    const cardContent = events.join(' ');

    return ask('<speak>' + speechText + (moreContent ? ' Wanna go deeper in history?' : '') + '</speak>', 'SSML')
            .card({ title: cardTitle, content: cardContent + (moreContent ? ' Wanna go deeper in history?' : '') })
            .reprompt(repromptText)
            .attributes({ result, index });
  }

  @Intent('AMAZON.CancelIntent', 'AMAZON.StopIntent')
  stop() {
    return say('Goodbye');
  }

  @Intent('AMAZON.HelpIntent')
  help() {
    return ask(IntroText).reprompt('Which day do you want?');
  }

}
