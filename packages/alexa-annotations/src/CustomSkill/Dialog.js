import annotation from '../annotation';
import { Dialog } from 'alexa-constants';
import { directives } from 'alexa-response';

export default {
  Delegate: annotation(
    ({ request = {} }) => request.dialogState === Dialog.Started,
    null,
    () =>
      directives({
        type: Dialog.Delegate,
      }).shouldEndSession(false)
  ),
};
