const patternDict = [{
  pattern: `\\b(?<greeting>[Hh]i|[Hh]ello|[Hh]ey)\\b`,
  intent: `Hello`,
  },{
  pattern: `\\b(?<byeing>bye|exit)\\b`,
  intent: `Exit`
},{
  pattern: `[Tt]wo [Dd]ay(s)*|2 [Dd]ay(s)|48h`,
  intent: `Two days`
},{
  pattern: `[Oo]ne [Dd]ay|24h|[tT]ommorow`,
  intent: `Tommorow`
},{
  pattern: `(?<city>(?<!^)[A-Z][a-z]*\\b( [A-Z][a-z]*\\b)*)`,
  intent: `Current Weather`
}
];

module.exports = patternDict;