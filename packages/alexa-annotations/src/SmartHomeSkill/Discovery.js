import annotation from '../annotation';

export default annotation(({ header = {} }) => {
    const { namespace, name } = header;
    return namespace === 'Alexa.ConnectedHome.Discovery' && name === 'DiscoverAppliancesRequest';
});
