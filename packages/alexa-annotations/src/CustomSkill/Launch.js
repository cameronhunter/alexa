import annotation from '../annotation';

export default annotation(({ request = {} }) => request.type === 'LaunchRequest');
