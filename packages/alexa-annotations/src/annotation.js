export default (predicate, requestTransform, responseTransform = i => i) => (skill, name) => {
  const route = skill.route || (() => false);

  skill.route = function(event = {}) {
    return route.call(this, event) || (predicate(event) && responseTransform(skill[name].apply(this, getArgs(requestTransform, event))));
  };

  return skill;
};

function getArgs(transform, event) {
  const transformed = transform ? transform(event) : [];
  const args = Array.isArray(transformed) ? transformed : [transformed];
  return [...args, event];
};
