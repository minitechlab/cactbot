Options.Triggers.push({
  id: 'FuturesRewrittenUltimate',
  zoneId: ZoneId.FuturesRewrittenUltimate,
  timelineFile: 'futures_rewritten.txt',
  initData: () => {
    return {
      actorSetPosTracker: {},
      p1ConcealSafeDirs: [...Directions.output8Dir],
      p1FallOfFaithTethers: [],
    };
  },
  timelineTriggers: [],
  triggers: [
    // General triggers
    {
      id: 'FRU ActorSetPos Collector',
      type: 'ActorSetPos',
      netRegex: { id: '4[0-9A-F]{7}', capture: true },
      run: (data, matches) => {
        data.actorSetPosTracker[matches.id] = matches;
      },
    },
    // P1 -- Fatebreaker
    {
      id: 'FRU P1 Cyclonic Break Fire',
      type: 'StartsUsing',
      netRegex: {
        id: ['9CD0', '9D89'],
        source: ['Fatebreaker', 'Fatebreaker\'s Image'],
        capture: false,
      },
      durationSeconds: 8,
      alertText: (_data, _matches, output) => output.clockPairs(),
      outputStrings: {
        clockPairs: {
          en: 'Clock spots => Pairs',
        },
      },
    },
    {
      id: 'FRU P1 Cyclonic Break Lightning',
      type: 'StartsUsing',
      netRegex: {
        id: ['9CD4', '9D8A'],
        source: ['Fatebreaker', 'Fatebreaker\'s Image'],
        capture: false,
      },
      durationSeconds: 8,
      alertText: (_data, _matches, output) => output.clockSpread(),
      outputStrings: {
        clockSpread: {
          en: 'Clock spots => Spread',
        },
      },
    },
    {
      id: 'FRU P1 Powder Mark Trail',
      type: 'StartsUsing',
      netRegex: { id: '9CE8', source: 'Fatebreaker', capture: true },
      response: Responses.tankBusterSwap(),
    },
    {
      id: 'FRU P1 Utopian Sky Collector',
      type: 'StartsUsing',
      netRegex: { id: ['9CDA', '9CDB'], capture: true },
      run: (data, matches) => {
        data.p1StackSpread = matches.id === '9CDA' ? 'stack' : 'spread';
      },
    },
    {
      id: 'FRU Conceal Safe',
      type: 'ActorControlExtra',
      netRegex: {
        category: '003F',
        param1: '4',
        capture: true,
      },
      condition: (data) => data.p1StackSpread !== undefined,
      durationSeconds: 8,
      alertText: (data, matches, output) => {
        const clone = data.actorSetPosTracker[matches.id];
        if (clone === undefined)
          return;
        const dir1 = Directions.hdgTo8DirNum(parseFloat(clone.heading));
        const dir2 = (dir1 + 4) % 8;
        data.p1ConcealSafeDirs = data.p1ConcealSafeDirs.filter((dir) =>
          dir !== Directions.outputFrom8DirNum(dir1) && dir !== Directions.outputFrom8DirNum(dir2)
        );
        if (data.p1ConcealSafeDirs.length !== 2)
          return;
        const [dir1Out, dir2Out] = data.p1ConcealSafeDirs;
        if (dir1Out === undefined || dir2Out === undefined)
          return;
        return output.combo({
          dir1: output[dir1Out](),
          dir2: output[dir2Out](),
          mech: output[data.p1StackSpread ?? 'unknown'](),
        });
      },
      outputStrings: {
        ...Directions.outputStrings8Dir,
        combo: {
          en: '${dir1} / ${dir2} => ${mech}',
        },
        stack: Outputs.stacks,
        spread: Outputs.spread,
      },
    },
    {
      id: 'FRU P1 Burnished Glory',
      type: 'StartsUsing',
      netRegex: { id: '9CEA', source: 'Fatebreaker', capture: false },
      response: Responses.bleedAoe(),
    },
    {
      id: 'FRU P1 Burnt Strike Fire',
      type: 'StartsUsing',
      netRegex: { source: 'Fatebreaker', id: '9CC1', capture: false },
      durationSeconds: 8,
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Line Cleave => Knockback',
          de: 'Linien AoE => Rückstoß',
          fr: 'AoE en ligne => Poussée',
          ja: '直線範囲 => ノックバック',
          cn: '直线 => 击退',
          ko: '직선 장판 => 넉백',
        },
      },
    },
    {
      id: 'FRU P1 Burnt Strike Lightning',
      type: 'StartsUsing',
      netRegex: { source: 'Fatebreaker', id: '9CC5', capture: false },
      durationSeconds: 8,
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Line Cleave => Out',
          de: 'Linien AoE => Raus',
          fr: 'AoE en ligne => Extérieur',
          ja: '直線範囲 => 離れる',
          cn: '直线 => 去外侧',
          ko: '직선 장판 => 바깥으로',
        },
      },
    },
    {
      id: 'FRU P1 Turn of the Heavens Fire',
      type: 'StartsUsing',
      netRegex: { id: '9CD6', source: 'Fatebreaker\'s Image', capture: false },
      durationSeconds: 10,
      infoText: (_data, _matches, output) => output.lightningSafe(),
      outputStrings: {
        lightningSafe: {
          en: 'Lightning Safe',
        },
      },
    },
    {
      id: 'FRU P1 Turn of the Heavens Lightning',
      type: 'StartsUsing',
      netRegex: { id: '9CD7', source: 'Fatebreaker\'s Image', capture: false },
      durationSeconds: 10,
      infoText: (_data, _matches, output) => output.fireSafe(),
      outputStrings: {
        fireSafe: {
          en: 'Fire Safe',
        },
      },
    },
    {
      id: 'FRU P1 Fall of Faith Collector',
      type: 'StartsUsing',
      netRegex: {
        id: ['9CC9', '9CCC'],
        source: ['Fatebreaker', 'Fatebreaker\'s Image'],
        capture: true,
      },
      durationSeconds: (data) => data.p1FallOfFaithTethers.length >= 3 ? 8.7 : 3,
      infoText: (data, matches, output) => {
        const curTether = matches.id === '9CC9' ? 'fire' : 'lightning';
        data.p1FallOfFaithTethers.push(curTether);
        if (data.p1FallOfFaithTethers.length < 4) {
          const num = data.p1FallOfFaithTethers.length === 1
            ? 'one'
            : (data.p1FallOfFaithTethers.length === 2 ? 'two' : 'three');
          return output.tether({
            num: output[num](),
            elem: output[curTether](),
          });
        }
        const [e1, e2, e3, e4] = data.p1FallOfFaithTethers;
        if (e1 === undefined || e2 === undefined || e3 === undefined || e4 === undefined)
          return;
        return output.all({
          e1: output[e1](),
          e2: output[e2](),
          e3: output[e3](),
          e4: output[e4](),
        });
      },
      outputStrings: {
        fire: {
          en: 'Fire',
        },
        lightning: {
          en: 'Lightning',
        },
        one: {
          en: '1',
        },
        two: {
          en: '2',
        },
        three: {
          en: '3',
        },
        tether: {
          en: '${num}: ${elem}',
        },
        all: {
          en: '${e1} => ${e2} => ${e3} => ${e4}',
        },
      },
    },
    // P2 -- Usurper Of Frost
    // Crystals
    // P3 -- Oracle Of Darkness
    // P4 -- Duo
    // P5 -- Pandora
  ],
  timelineReplace: [
    {
      'locale': 'en',
      'replaceText': {
        'Sinbound Fire III/Sinbound Thunder III': 'Sinbound Fire/Thunder',
      },
    },
    {
      'locale': 'de',
      'replaceSync': {
        'Fatebreaker(?!\')': 'fusioniert(?:e|er|es|en) Ascian',
        'Fatebreaker\'s Image': 'Abbild des fusionierten Ascians',
      },
      'replaceText': {
        'Blastburn': 'Brandstoß',
        'Blasting Zone': 'Erda-Detonation',
        'Burn Mark': 'Brandmal',
        'Burnished Glory': 'Leuchtende Aureole',
        'Burnout': 'Brandentladung',
        'Burnt Strike': 'Brandschlag',
        'Cyclonic Break': 'Zyklon-Brecher',
        'Explosion': 'Explosion',
        'Fall Of Faith': 'Sünden-Erdspaltung',
        'Floating Fetters': 'Schwebende Fesseln',
        'Powder Mark Trail': 'Stetes Pulvermal',
        'Sinblaze': 'Sündenglut',
        'Sinbound Fire III': 'Sünden-Feuga',
        'Sinbound Thunder III': 'Sünden-Blitzga',
        'Sinsmite': 'Sündenblitz',
        'Sinsmoke': 'Sündenflamme',
        'Turn Of The Heavens': 'Kreislauf der Wiedergeburt',
        'Utopian Sky': 'Paradiestrennung',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Fatebreaker(?!\')': 'Sabreur de destins',
        'Fatebreaker\'s Image': 'double du Sabreur de destins',
      },
      'replaceText': {
        'Blastburn': 'Explosion brûlante',
        'Blasting Zone': 'Zone de destruction',
        'Burn Mark': 'Marque explosive',
        'Burnished Glory': 'Halo luminescent',
        'Burnout': 'Combustion totale',
        'Burnt Strike': 'Frappe brûlante',
        'Cyclonic Break': 'Brisement cyclonique',
        'Explosion': 'Explosion',
        'Fall Of Faith': 'Section illuminée',
        'Floating Fetters': 'Entraves flottantes',
        'Powder Mark Trail': 'Marquage fatal enchaîné',
        'Sinblaze': 'Embrasement authentique',
        'Sinbound Fire III': 'Méga Feu authentique',
        'Sinbound Thunder III': 'Méga Foudre authentique',
        'Sinsmite': 'Éclair du péché',
        'Sinsmoke': 'Flammes du péché',
        'Turn Of The Heavens': 'Cercles rituels',
        'Utopian Sky': 'Ultime paradis',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Fatebreaker(?!\')': 'フェイトブレイカー',
        'Fatebreaker\'s Image': 'フェイトブレイカーの幻影',
      },
      'replaceText': {
        'Blastburn': 'バーンブラスト',
        'Blasting Zone': 'ブラスティングゾーン',
        'Burn Mark': '爆印',
        'Burnished Glory': '光焔光背',
        'Burnout': 'バーンアウト',
        'Burnt Strike': 'バーンストライク',
        'Cyclonic Break': 'サイクロニックブレイク',
        'Explosion': '爆発',
        'Fall Of Faith': 'シンソイルセヴァー',
        'Floating Fetters': '浮遊拘束',
        'Powder Mark Trail': '連鎖爆印刻',
        'Sinblaze': 'シンブレイズ',
        'Sinbound Fire III': 'シンファイガ',
        'Sinbound Thunder III': 'シンサンダガ',
        'Sinsmite': 'シンボルト',
        'Sinsmoke': 'シンフレイム',
        'Turn Of The Heavens': '転輪召',
        'Utopian Sky': '楽園絶技',
      },
    },
  ],
});
