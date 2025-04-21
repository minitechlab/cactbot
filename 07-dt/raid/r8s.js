Options.Triggers.push({
  id: 'AacCruiserweightM4Savage',
  zoneId: ZoneId.AacCruiserweightM4Savage,
  timelineFile: 'r8s.txt',
  triggers: [
    {
      id: 'R8S Extraplanar Pursuit',
      type: 'StartsUsing',
      netRegex: { id: 'A74F', source: 'Howling Blade', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'R8S Stonefang',
      type: 'StartsUsing',
      netRegex: { id: 'A3A1', source: 'Howling Blade', capture: false },
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Out + Spread',
          de: 'Out + Spread',
          fr: 'Out + Spread',
          ja: 'Out + Spread',
          cn: 'Out + Spread',
          ko: 'Out + Spread',
        },
      },
    },
    {
      id: 'R8S Windfang',
      type: 'StartsUsing',
      netRegex: { id: 'A39E', source: 'Howling Blade', capture: false },
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'In + Pairs',
          de: 'In + Pairs',
          fr: 'In + Pairs',
          ja: 'In + Pairs',
          cn: 'In + Pairs',
          ko: 'In + Pairs',
        },
      },
    },
    {
      id: 'R8S Revolutionary Reign',
      type: 'StartsUsing',
      netRegex: { id: 'A914', source: 'Howling Blade', capture: false },
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Out + Healer Stack',
          de: 'Out + Healer Stack',
          fr: 'Out + Healer Stack',
          ja: 'Out + Healer Stack',
          cn: 'Out + Healer Stack',
          ko: 'Out + Healer Stack',
        },
      },
    },
    {
      id: 'R8S Eminent Reign',
      type: 'StartsUsing',
      netRegex: { id: 'A911', source: 'Howling Blade', capture: false },
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'In + Healer Stack',
          de: 'In + Healer Stack',
          fr: 'In + Healer Stack',
          ja: 'In + Healer Stack',
          cn: 'In + Healer Stack',
          ko: 'In + Healer Stack',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Howling Blade': 'Howling Blade',
      },
      'replaceText': {
        'Howling Blade': 'Howling Blade',
        'Extraplanar Pursuit': 'Extraplanar Pursuit',
        'Stonefang': 'Stonefang',
        'Windfang': 'Windfang',
        'Revolutionary Reign': 'Revolutionary Reign',
        'Eminent Reign': 'Eminent Reign',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Howling Blade': 'Howling Blade',
      },
      'replaceText': {
        'Howling Blade': 'Howling Blade',
        'Extraplanar Pursuit': 'Extraplanar Pursuit',
        'Stonefang': 'Stonefang',
        'Windfang': 'Windfang',
        'Revolutionary Reign': 'Revolutionary Reign',
        'Eminent Reign': 'Eminent Reign',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Howling Blade': 'Howling Blade',
      },
      'replaceText': {
        'Howling Blade': 'Howling Blade',
        'Extraplanar Pursuit': 'Extraplanar Pursuit',
        'Stonefang': 'Stonefang',
        'Windfang': 'Windfang',
        'Revolutionary Reign': 'Revolutionary Reign',
        'Eminent Reign': 'Eminent Reign',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Howling Blade': 'Howling Blade',
      },
      'replaceText': {
        'Howling Blade': 'Howling Blade',
        'Extraplanar Pursuit': 'Extraplanar Pursuit',
        'Stonefang': 'Stonefang',
        'Windfang': 'Windfang',
        'Revolutionary Reign': 'Revolutionary Reign',
        'Eminent Reign': 'Eminent Reign',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Howling Blade': 'Howling Blade',
      },
      'replaceText': {
        'Howling Blade': 'Howling Blade',
        'Extraplanar Pursuit': 'Extraplanar Pursuit',
        'Stonefang': 'Stonefang',
        'Windfang': 'Windfang',
        'Revolutionary Reign': 'Revolutionary Reign',
        'Eminent Reign': 'Eminent Reign',
      },
    },
  ],
});
