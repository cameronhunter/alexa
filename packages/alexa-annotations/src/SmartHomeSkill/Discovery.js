import annotation from '../annotation';
import { ConnectedHome } from 'alexa-constants';

export default annotation(({ header = {} }) => {
  const { namespace, name } = header;
  return (
    namespace === ConnectedHome.Discovery &&
    name === ConnectedHome.Request.DiscoverAppliances
  );
});
