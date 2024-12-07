// Count words (371)

function wordCount(s) {
  return s.split(/[^A-Za-z]/).filter((e) => !e.match(/\b(a|the|on|at|of|upon|in|as)\b/gi) && e).length;
}

