// MapEffect slots 01 - 08 are for the four towers.
// MapEffect slot 09 is something to do with the referee, not important
// Including headmarker data for savage reference
const headMarkerData = {
  // Vfx Path: com_share3t
  stack: 'A1',
  // Vfx Path: d1004turning_right_c0p
  rotateClockwise: 'A7',
  // Vfx Path: d1004turning_left_c0p
  rotateCounterClockwise: 'A8',
  // Vfx Path: m0676trg_tw_d0t1p
  dualTankbuster: '103',
};
console.assert(headMarkerData);
Options.Triggers.push({
  id: 'AacLightHeavyweightM3',
  zoneId: ZoneId.AacLightHeavyweightM3,
  timelineFile: 'r3n.txt',
  triggers: [
    {
      id: 'R3N Brutal Burn',
      type: 'StartsUsing',
      netRegex: { id: '9429', source: 'Brute Bomber', capture: true },
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'R3N Brutal Impact',
      type: 'StartsUsing',
      netRegex: { id: '93D6', source: 'Brute Bomber', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'R3N Knuckle Sandwich',
      type: 'StartsUsing',
      netRegex: { id: '93D5', source: 'Brute Bomber', capture: true },
      response: Responses.tankBuster(),
    },
    {
      id: 'R3N Brutal Lariat 9AD4',
      type: 'StartsUsing',
      netRegex: { id: '9AD4', source: 'Brute Bomber', capture: false },
      response: Responses.goEast(),
    },
    {
      id: 'R3N Brutal Lariat 9AD5',
      type: 'StartsUsing',
      netRegex: { id: '9AD5', source: 'Brute Bomber', capture: false },
      response: Responses.goWest(),
    },
    {
      id: 'R3N Murderous Mist',
      type: 'StartsUsing',
      netRegex: { id: '93B5', source: 'Brute Bomber', capture: false },
      response: Responses.getBehind(),
    },
    {
      id: 'R3N Barbarous Barrage',
      type: 'StartsUsing',
      netRegex: { id: '93B2', source: 'Brute Bomber', capture: false },
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Knockback Towers',
          de: 'Rückstoß Türme',
          cn: '击退塔',
        },
      },
    },
    {
      id: 'R3N Fire Spin Clockwise',
      type: 'StartsUsing',
      netRegex: { id: '93D0', source: 'Brute Bomber', capture: false },
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: Outputs.clockwise,
      },
    },
    {
      id: 'R3N Fire Spin Counterclockwise',
      type: 'StartsUsing',
      netRegex: { id: '93D1', source: 'Brute Bomber', capture: false },
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: Outputs.counterclockwise,
      },
    },
    {
      id: 'R3N Fuses of Fury',
      type: 'StartsUsing',
      netRegex: { id: '93B6', source: 'Brute Bomber', capture: false },
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Long => Short',
          de: 'Lange => Kurz',
          cn: '长引线 => 短引线',
        },
      },
    },
    {
      id: 'R3N Lariat Combo East to West',
      type: 'StartsUsing',
      netRegex: { id: '9ADC', source: 'Brute Bomber', capture: false },
      durationSeconds: 15,
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'East, then West',
          de: 'Osten, dann Westen',
          cn: '东 => 西',
        },
      },
    },
    {
      id: 'R3N Lariat Combo East to East',
      type: 'StartsUsing',
      netRegex: { id: '9ADD', source: 'Brute Bomber', capture: false },
      durationSeconds: 15,
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'East, stay East',
          de: 'Osten, bleib Osten',
          cn: '东 => 呆在原地',
        },
      },
    },
    {
      id: 'R3N Lariat Combo West to East',
      type: 'StartsUsing',
      netRegex: { id: '9ADE', source: 'Brute Bomber', capture: false },
      durationSeconds: 15,
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'West, then East',
          de: 'Westen, dann Osten',
          cn: '西 => 东',
        },
      },
    },
    {
      id: 'R3N Lariat Combo West to West',
      type: 'StartsUsing',
      netRegex: { id: '9ADF', source: 'Brute Bomber', capture: false },
      durationSeconds: 15,
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'West, stay West',
          de: 'Westen, bleib Westen',
          cn: '西 => 呆在原地',
        },
      },
    },
    {
      id: 'R3N Infernal Spin Clockwise',
      type: 'StartsUsing',
      netRegex: { id: '9B42', source: 'Brute Bomber', capture: false },
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: Outputs.clockwise,
      },
    },
    {
      id: 'R3N Infernal Spin Counterclockwise',
      type: 'StartsUsing',
      netRegex: { id: '9B43', source: 'Brute Bomber', capture: false },
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: Outputs.counterclockwise,
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Brute Bomber': 'Brutalo Bomber',
        'Lit Fuse': 'Zündschnurbombe',
      },
      'replaceText': {
        '\\(cast\\)': '(wirken)',
        '\\(cones\\)': '(kegel)',
        '\\(damage\\)': '(Schaden)',
        '\\(long\\)': '(lange)',
        '\\(short\\)': '(kurz)',
        'Barbarous Barrage': 'Brutalo-Bomben',
        'Brutal Burn': 'Brutalo-Feuer',
        'Brutal Impact': 'Knallender Impakt',
        'Brutal Lariat': 'Brutalo-Lariat',
        'Doping Draught': 'Aufputschen',
        'Explosion': 'Explosion',
        'Explosive Rain': 'Bombenregen',
        'Fire Spin': 'Feuertornado',
        'Fuses of Fury': 'Zündschnurbomben',
        'Infernal Spin': 'Ultimativer Feuertornado',
        'Knuckle Sandwich': 'Knöchelschlag',
        'Lariat Combo': 'Lariat-Kombination',
        'Murderous Mist': 'Grüner Nebel',
        'Self-destruct': 'Selbstzerstörung',
      },
    },
    {
      'locale': 'fr',
      'missingTranslations': true,
      'replaceSync': {
        'Brute Bomber': 'Brute Bomber',
        'Lit Fuse': 'bombo à mèche',
      },
      'replaceText': {
        'Barbarous Barrage': 'Bombardement brutal',
        'Brutal Burn': 'Brûlure brutale',
        'Brutal Impact': 'Impact brutal',
        'Brutal Lariat': 'Lariat brutal',
        'Doping Draught': 'Dopage',
        'Explosion': 'Explosion',
        'Explosive Rain': 'Pluie explosive',
        'Fire Spin': 'Toupie enflammée',
        'Fuses of Fury': 'Bombos à mèche',
        'Infernal Spin': 'Toupie infernale',
        'Knuckle Sandwich': 'Sandwich de poings',
        'Lariat Combo': 'Combo de lariats',
        'Murderous Mist': 'Vapeur venimeuse',
        'Self-destruct': 'Auto-destruction',
      },
    },
    {
      'locale': 'ja',
      'missingTranslations': true,
      'replaceSync': {
        'Brute Bomber': 'ブルートボンバー',
        'Lit Fuse': 'フューズボム',
      },
      'replaceText': {
        'Barbarous Barrage': 'ボンバリアンボム',
        'Brutal Burn': 'ブルートファイヤー',
        'Brutal Impact': 'スマッシュインパクト',
        'Brutal Lariat': 'ブルートラリアット',
        'Doping Draught': 'ドーピング',
        'Explosion': '爆発',
        'Explosive Rain': 'ボムレイン',
        'Fire Spin': 'スピニングファイヤー',
        'Fuses of Fury': 'フューズボム',
        'Infernal Spin': '極盛り式スピニングファイヤー',
        'Knuckle Sandwich': 'ナックルパート',
        'Lariat Combo': 'ラリアットコンビネーション',
        'Murderous Mist': 'グリーンミスト',
        'Self-destruct': '自爆',
      },
    },
  ],
});
