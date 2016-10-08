export default (month, date) => (
  fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&explaintext=&exsectionformat=plain&redirects=&titles=${month}_${date}`)
    .then(response => response.json())
    .then(response => {
      const [{ extract }] = Object.values(response.query.pages);
      return parseWikiText(extract).map(cleanupEventText);
    })
    .then(events => events.length ? Promise.resolve(events) : Promise.reject())
    .catch(() => Promise.reject('There is a problem connecting to Wikipedia at this time. Please try again later.'))
);

const parseWikiText = (text) => {
  const start = '\nEvents\n';
  const end = '\n\n\nBirths';
  const events = text.substring(text.indexOf(start) + start.length, text.indexOf(end));
  return events.split('\n');
};

const cleanupEventText = (event) => {
  return 'In ' + event.replace(/\u2013\s*/g, '').replace(/(^\d+(\s(BC|AD))?)/, '$1,');
};
