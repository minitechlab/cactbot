const phases = {
  '9CFF': 'p2-dd',
  '9CF3': 'p2-mm',
  '9D14': 'p2-lr',
  '9D49': 'p3-ur',
  '9D4D': 'p3-apoc',
  '9D36': 'p4-dld',
  '9D6A': 'p4-ct',
  '9D72': 'p5', // Fulgent Blade
};
const centerX = 100;
const centerY = 100;
const isCardinalDir = (dir) => {
  return Directions.outputCardinalDir.includes(dir);
};
const getRelativeClockPos = (start, compare) => {
  if (start === 'unknown' || compare === 'unknown')
    return 'unknown';
  const startIdx = Directions.output8Dir.indexOf(start);
  const compareIdx = Directions.output8Dir.indexOf(compare);
  const delta = (compareIdx - startIdx + 8) % 8;
  if (delta === 0)
    return 'same';
  else if (delta < 4)
    return 'clockwise';
  else if (delta === 4)
    return 'opposite';
  return 'counterclockwise';
};
// Ordering here matters - the "G1" directions are first, followed by "G2" directions.
// Maybe add a config for this? But for now, assume that N->CCW is G1 and NE->CW is G2.
const p2KnockbackDirs = [
  'dirN',
  'dirNW',
  'dirW',
  'dirSW',
  'dirS',
  'dirSE',
  'dirE',
  'dirNE',
];
const newRoleMap = () => ({
  support: {
    hasIce: false,
    shortFire: '',
    mediumFire: '',
    longFire: [],
  },
  dps: {
    hasIce: false,
    shortFire: [],
    mediumFire: '',
    longFire: '',
  },
  ice: '',
});
// Helper for Ultimate Relativity that finds relative North based on the yellow-tethered lights
// It takes an array of dir nums (e.g. 0-8), finds the two dir nums that have a single gap
// between them (e.g. 1 and 3) -- the apex of the "Y" -- and returns the dir num of the gap.
const findURNorthDirNum = (dirs) => {
  for (let i = 0; i < dirs.length; i++) {
    for (let j = i + 1; j < dirs.length; j++) {
      const [dir1, dir2] = [dirs[i], dirs[j]];
      if (dir1 === undefined || dir2 === undefined)
        return -1;
      const diff = Math.abs(dir1 - dir2);
      if (diff === 2)
        return Math.min(dir1, dir2) + 1;
      else if (diff === 6) // wrap around
        return (Math.max(dir1, dir2) + 1) % 8;
    }
  }
  return -1;
};
const ctCollectDebuffs = ['red', 'blue', 'ice', 'wind'];
const isCTCollectDebuff = (debuff) => {
  return ctCollectDebuffs.includes(debuff);
};
const ctDebuffMap = {
  'CBF': 'red',
  'CC0': 'blue',
  '99E': 'ice',
  '99F': 'wind',
  '99D': 'water',
  '996': 'unholy',
  '99C': 'eruption', // Spell-in-Waiting: Dark Eruption
};
const p3UROutputStrings = {
  yNorthStrat: {
    en: '${debuff} (${dir})',
    cn: '${debuff} (${dir})',
  },
  dirCombo: {
    en: '${inOut} + ${dir}',
    cn: '${inOut} + ${dir}',
  },
  fireSpread: {
    en: 'Fire - Spread',
    cn: '火分散',
  },
  dropRewind: {
    en: 'Drop Rewind',
    cn: '放置回返',
  },
  baitStoplight: {
    en: 'Bait Stoplight',
    cn: '引导激光',
  },
  avoidStoplights: {
    en: 'Avoid stoplights',
    cn: '远离激光',
  },
  stack: Outputs.stackMarker,
  middle: Outputs.middle,
  out: Outputs.out,
};
Options.Triggers.push({
  id: 'FuturesRewrittenUltimate',
  zoneId: ZoneId.FuturesRewrittenUltimate,
  comments: {
    en: 'Triggers: P1-3 / Timeline: P1-5',
    cn: '触发器: P1-3 / 时间轴: P1-5',
  },
  config: [
    {
      id: 'sinboundRotate',
      comment: {
        en:
          `Always Away, Cursed Clockwise: <a href="https://pastebin.com/ue7w9jJH" target="_blank">LesBin<a>`,
      },
      name: {
        en: 'P2 Diamond Dust / Sinbound Holy',
      },
      type: 'select',
      options: {
        en: {
          'Always Away, Cursed Clockwise': 'aacc',
          'Call Add Position Only': 'addposonly',
        },
      },
      default: 'aacc', // `addposonly` is not super helpful, and 'aacc' seems to be predominant
    },
    {
      id: 'ultimateRel',
      comment: {
        en:
          `Y North, DPS E-SW, Supp W-NE: <a href="https://pastebin.com/ue7w9jJH" target="_blank">LesBin<a>.
          Directional output is true north (i.e., "east" means actual east,
          not wherever is east of the "Y" north spot).`,
      },
      name: {
        en: 'P3 Ultimate Relativity',
      },
      type: 'select',
      options: {
        en: {
          'Y North, DPS E-SW, Supp W-NE': 'yNorthDPSEast',
          'Call Debuffs w/ No Positions': 'none',
        },
      },
      default: 'yNorthDPSEast',
    },
    {
      id: 'apoc',
      comment: {
        en:
          `DPS NE->S, Support SW->N: <a href="https://pastebin.com/ue7w9jJH" target="_blank">LesBin<a>`,
      },
      name: {
        en: 'P3 Apocalypse',
      },
      type: 'select',
      options: {
        en: {
          'DPS NE->S, Support SW->N': 'dpsNE-CW',
          'Call All Safe': 'none',
        },
      },
      default: 'dpsNE-CW',
    },
    {
      id: 'darklit',
      comment: {
        en:
          `Role Quadrants, Healer Plant NW: <a href="https://pastebin.com/ue7w9jJH" target="_blank">LesBin<a>`,
      },
      name: {
        en: 'P4 Darklit Dragonsong',
      },
      type: 'select',
      options: {
        en: {
          'Role Quads, Healer Plant NW': 'healerPlantNW',
          'Call Tower/Cone Only': 'none',
        },
      },
      default: 'healerPlantNW',
    },
    {
      id: 'ct',
      comment: {
        en:
          `Early Pop, Winds South: <a href="https://pastebin.com/ue7w9jJH" target="_blank">LesBin<a>`,
      },
      name: {
        en: 'P4 Crystallize Time',
      },
      type: 'select',
      options: {
        en: {
          'Early Pop, Winds South': 'earlyPopSouth',
          'Call Initial Debuffs Only': 'none',
        },
      },
      default: 'earlyPopSouth',
    },
  ],
  timelineFile: 'futures_rewritten.txt',
  initData: () => {
    return {
      phase: 'p1',
      actorSetPosTracker: {},
      p1ConcealSafeDirs: [...Directions.output8Dir],
      p1SeenBurnishedGlory: false,
      p1FallOfFaithTethers: [],
      p2QuadrupleFirstTarget: '',
      p2QuadrupleDebuffApplied: false,
      p2IcicleImpactStart: [],
      p2FrigidStoneTargets: [],
      p2LightsteepedCount: 0,
      p2LightRampantPuddles: [],
      p2SeenFirstHolyLight: false,
      p3RelativityRoleCount: 0,
      p3RelativityRoleMap: newRoleMap(),
      p3RelativityStoplights: {},
      p3RelativityYellowDirNums: [],
      p3RelativityMyDirStr: '',
      p3ApocDebuffCount: 0,
      p3ApocDebuffs: {
        short: [],
        medium: [],
        long: [],
        none: [],
      },
      p4DarklitTetherCount: 0,
      p4DarklitTethers: {},
      p4DarklitCleaves: [],
      p4DarklitStacks: [],
      p4CTDebuffs: {
        blue: [],
        red: [],
        ice: [],
        wind: [],
      },
      p4CTStoplights: {},
      p4CTTidalDirs: [],
    };
  },
  timelineTriggers: [],
  triggers: [
    // ************************
    // General triggers
    // ************************
    {
      id: 'FRU Phase Tracker',
      type: 'StartsUsing',
      netRegex: { id: Object.keys(phases) },
      run: (data, matches) => data.phase = phases[matches.id] ?? 'unknown',
    },
    // ************************
    // P1-- Fatebreaker
    // ************************
    {
      id: 'FRU ActorSetPos Collector',
      type: 'ActorSetPos',
      netRegex: { id: '4[0-9A-F]{7}', capture: true },
      condition: (data) => data.phase === 'p1',
      run: (data, matches) => {
        data.actorSetPosTracker[matches.id] = matches;
      },
    },
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
          de: 'Himmelsrichtungen => Paare',
          ja: '八方向 => ペア',
          cn: '八方 => 两人分摊',
          ko: '8방향 => 쉐어',
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
          de: 'Himmelsrichtungen => Verteilen',
          ja: '八方向 => 散開',
          cn: '八方 => 分散',
          ko: '8방향 => 산개',
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
          de: '${dir1} / ${dir2} => ${mech}',
          ja: '${dir1} / ${dir2} => ${mech}',
          cn: '${dir1} / ${dir2} => ${mech}',
          ko: '${dir1} / ${dir2} => ${mech}',
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
      run: (data) => data.p1SeenBurnishedGlory = true,
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
          de: 'Blitz Sicher',
          ja: '雷安置',
          cn: '雷安全',
          ko: '번개 안전',
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
          de: 'Feuer Sicher',
          ja: '炎安置',
          cn: '火安全',
          ko: '불 안전',
        },
      },
    },
    {
      id: 'FRU P1 Fall of Faith Collector',
      type: 'Tether',
      netRegex: {
        id: ['00F9', '011F'],
        source: ['Fatebreaker', 'Fatebreaker\'s Image'],
        capture: true,
      },
      // Only collect after Burnished Glory, since '00F9' tethers are used during TotH.
      condition: (data) => data.phase === 'p1' && data.p1SeenBurnishedGlory,
      durationSeconds: (data) => data.p1FallOfFaithTethers.length >= 3 ? 12.2 : 3,
      response: (data, matches, output) => {
        // cactbot-builtin-response
        output.responseOutputStrings = {
          fire: {
            en: 'Fire',
            de: 'Feuer',
            ja: '炎',
            cn: '火',
            ko: '불',
          },
          lightning: {
            en: 'Lightning',
            de: 'Blitz',
            ja: '雷',
            cn: '雷',
            ko: '번개',
          },
          one: {
            en: '1',
            de: '1',
            ja: '1',
            cn: '1',
            ko: '1',
          },
          two: {
            en: '2',
            de: '2',
            ja: '2',
            cn: '2',
            ko: '2',
          },
          three: {
            en: '3',
            de: '3',
            ja: '3',
            cn: '3',
            ko: '3',
          },
          onYou: {
            en: 'On YOU',
          },
          tether: {
            en: '${num}: ${elem} (${target})',
            de: '${num}: ${elem} (${target})',
            ja: '${num}: ${elem} (${target})',
            cn: '${num}: ${elem} (${target})',
            ko: '${num}: ${elem} (${target})',
          },
          all: {
            en: '${e1} => ${e2} => ${e3} => ${e4}',
            de: '${e1} => ${e2} => ${e3} => ${e4}',
            ja: '${e1} => ${e2} => ${e3} => ${e4}',
            cn: '${e1} => ${e2} => ${e3} => ${e4}',
            ko: '${e1} => ${e2} => ${e3} => ${e4}',
          },
        };
        const curTether = matches.id === '00F9' ? 'fire' : 'lightning';
        data.p1FallOfFaithTethers.push(curTether);
        if (data.p1FallOfFaithTethers.length < 4) {
          const num = data.p1FallOfFaithTethers.length === 1
            ? 'one'
            : (data.p1FallOfFaithTethers.length === 2 ? 'two' : 'three');
          if (data.me === matches.target)
            return {
              alertText: output.tether({
                num: output[num](),
                elem: output[curTether](),
                target: output.onYou(),
              }),
            };
          return {
            infoText: output.tether({
              num: output[num](),
              elem: output[curTether](),
              target: data.party.member(matches.target).nick,
            }),
          };
        }
        const [e1, e2, e3, e4] = data.p1FallOfFaithTethers;
        if (e1 === undefined || e2 === undefined || e3 === undefined || e4 === undefined)
          return;
        return {
          infoText: output.all({
            e1: output[e1](),
            e2: output[e2](),
            e3: output[e3](),
            e4: output[e4](),
          }),
        };
      },
    },
    // ************************
    // P2 -- Usurper Of Frost
    // ************************
    {
      id: 'FRU P2 Quadruple Slap First',
      type: 'StartsUsing',
      netRegex: { id: '9CFF', source: 'Usurper of Frost' },
      response: Responses.tankBuster(),
      run: (data, matches) => data.p2QuadrupleFirstTarget = matches.target,
    },
    {
      // Cleansable debuff may be applied with first cast (9CFF)
      // although there are ways to avoid appplication (e.g. Warden's Paean)
      id: 'FRU P2 Quadruple Slap Debuff Gain',
      type: 'GainsEffect',
      netRegex: { effectId: '1042', source: 'Usurper of Frost', capture: false },
      run: (data) => data.p2QuadrupleDebuffApplied = true,
    },
    {
      id: 'FRU P2 Quadruple Slap Debuff Loss',
      type: 'LosesEffect',
      netRegex: { effectId: '1042', source: 'Usurper of Frost', capture: false },
      run: (data) => data.p2QuadrupleDebuffApplied = false,
    },
    {
      id: 'FRU P2 Quadruple Slap Second',
      type: 'StartsUsing',
      // short (2.2s) cast time
      netRegex: { id: '9D00', source: 'Usurper of Frost' },
      response: (data, matches, output) => {
        // cactbot-builtin-response
        output.responseOutputStrings = {
          onYou: Outputs.tankBusterOnYou,
          onTarget: Outputs.tankBusterOnPlayer,
          busterCleanse: {
            en: '${buster} (Cleanse?)',
          },
        };
        const onTarget = output.onTarget({ player: data.party.member(matches.target) });
        let busterStr;
        if (data.me === matches.target)
          busterStr = output.onYou();
        else if (
          data.p2QuadrupleFirstTarget === matches.target &&
          data.p2QuadrupleDebuffApplied &&
          data.CanCleanse()
        ) {
          busterStr = output.busterCleanse({ buster: onTarget });
        } else
          busterStr = onTarget;
        if (data.me === matches.target || data.role === 'healer')
          return { alertText: busterStr };
        return { infoText: busterStr };
      },
    },
    // ***** Diamond Dust *****
    {
      id: 'FRU P2 Diamond Dust',
      type: 'StartsUsing',
      netRegex: { id: '9D05', source: 'Usurper of Frost', capture: false },
      response: Responses.bigAoe(),
    },
    {
      id: 'FRU P2 Axe/Scythe Kick Collect',
      type: 'StartsUsing',
      // 9D0A - Axe Kick (be out), 9D0B - Scythe Kick (be in)
      netRegex: { id: ['9D0A', '9D0B'], source: 'Oracle\'s Reflection' },
      // Only fire during Diamond Dust (same ids used during Mirror Mirror)
      condition: (data) => data.phase === 'p2-dd',
      run: (data, matches) => data.p2AxeScytheSafe = matches.id === '9D0A' ? 'out' : 'in',
    },
    {
      id: 'FRU P2 Icicle Impact Initial Collect',
      type: 'StartsUsingExtra',
      netRegex: { id: '9D06' },
      condition: (data) => data.p2IcicleImpactStart.length < 2,
      run: (data, matches) => {
        const x = parseFloat(matches.x);
        const y = parseFloat(matches.y);
        const dir = Directions.xyTo8DirOutput(x, y, centerX, centerY);
        data.p2IcicleImpactStart.push(dir);
        // Once we have both, reorder the array and make sure the two dirs are opposites
        if (data.p2IcicleImpactStart.length === 2) {
          data.p2IcicleImpactStart.sort((a, b) =>
            p2KnockbackDirs.indexOf(a) - p2KnockbackDirs.indexOf(b)
          );
          const [dir1 = 'unknown', dir2 = 'unknown'] = data.p2IcicleImpactStart;
          if (getRelativeClockPos(dir1, dir2) !== 'opposite') {
            console.error(`Unexpected Icicle Impact initial dirs: ${dir1}, ${dir2}`);
            data.p2IcicleImpactStart = ['unknown', 'unknown'];
          }
        }
      },
    },
    {
      id: 'FRU P2 House of Light/Frigid Stone',
      type: 'HeadMarker',
      netRegex: { id: '0159' },
      alertText: (data, matches, output) => {
        data.p2FrigidStoneTargets.push(matches.target);
        if (data.p2FrigidStoneTargets.length !== 4)
          return;
        const inOut = data.p2AxeScytheSafe ? output[data.p2AxeScytheSafe]() : output.unknown();
        const mech = data.p2FrigidStoneTargets.includes(data.me) ? 'dropPuddle' : 'baitCleave';
        const firstIcicle = data.p2IcicleImpactStart[0] ?? 'unknown';
        if (firstIcicle === 'unknown')
          return output.combo({ inOut: inOut, dir: output.unknown(), mech: output[mech]() });
        // Assumes that if first Icicle Impacts spawn on cardinals, House of Light baits will also be
        // cardinals and Frigid Stone puddle drops will be intercards, and vice versa.
        const dir = mech === 'baitCleave'
          ? (isCardinalDir(firstIcicle) ? output.cardinals() : output.intercards())
          : (isCardinalDir(firstIcicle) ? output.intercards() : output.cardinals());
        return output.combo({ inOut: inOut, dir: dir, mech: output[mech]() });
      },
      outputStrings: {
        combo: {
          en: '${inOut} + ${dir} => ${mech}',
          cn: '${inOut} + ${dir} => ${mech}',
        },
        dropPuddle: {
          en: 'Drop Puddle',
          cn: '放置冰花',
        },
        baitCleave: {
          en: 'Bait',
          cn: '引导水波',
        },
        in: Outputs.in,
        out: Outputs.out,
        cardinals: Outputs.cardinals,
        intercards: Outputs.intercards,
        unknown: Outputs.unknown,
      },
    },
    {
      id: 'FRU P2 Heavenly Strike',
      type: 'Ability',
      // use the 'star' (Frigid Stone) drops to fire this alert, as Heavenly Strike has no cast time.
      netRegex: { id: '9D07', capture: false },
      durationSeconds: 3.5,
      suppressSeconds: 1,
      alertText: (data, _matches, output) => {
        const [dir1 = 'unknown', dir2 = 'unknown'] = data.p2IcicleImpactStart;
        return output.kbDir({ kb: output.kb(), dir1: output[dir1](), dir2: output[dir2]() });
      },
      outputStrings: {
        kbDir: {
          en: '${kb} (${dir1}/${dir2})',
          cn: '${kb} (${dir1}/${dir2})',
        },
        kb: Outputs.knockback,
        ...Directions.outputStrings8Dir,
        unknown: Outputs.unknown,
      },
    },
    {
      id: 'FRU P2 Shiva Cleave Add Collect',
      type: 'StartsUsing',
      // The Shiva that will cast Twin Silence/Twin Stillness is the same actor
      // that casts Sinbound Holy (9D10).
      netRegex: { id: '9D10' },
      run: (data, matches) => {
        const x = parseFloat(matches.x);
        const y = parseFloat(matches.y);
        data.p2KBShivaDir = Directions.xyTo8DirOutput(x, y, centerX, centerY);
      },
    },
    {
      id: 'FRU P2 Sinbound Holy Rotation',
      type: 'Ability',
      // We can determine the player's knockbac dir from Heavenly Strike (9D0F).
      // It occurs after Shiva is already casting Sinbound Holy.
      netRegex: { id: '9D0F' },
      condition: Conditions.targetIsYou(),
      delaySeconds: 1,
      durationSeconds: 5,
      infoText: (data, matches, output) => {
        const x = parseFloat(matches.targetX);
        const y = parseFloat(matches.targetY);
        const playerDir = Directions.xyTo8DirOutput(x, y, centerX, centerY);
        const addDir = data.p2KBShivaDir ?? 'unknown';
        if (playerDir === 'unknown' || addDir === 'unknown')
          return;
        const relPos = getRelativeClockPos(playerDir, addDir);
        if (data.triggerSetConfig.sinboundRotate === 'aacc')
          switch (relPos) {
            case 'same':
            case 'opposite':
              return output.aaccCursed();
            case 'clockwise':
              return output.aaccRotateCCW();
            case 'counterclockwise':
              return output.aaccRotateCW();
            default:
              break;
          }
        return output[relPos]();
      },
      outputStrings: {
        aaccCursed: {
          en: 'Cursed - Fast Clockwise',
        },
        aaccRotateCCW: Outputs.counterclockwise,
        aaccRotateCW: Outputs.clockwise,
        same: {
          en: 'Cursed - Add on knockback',
        },
        opposite: {
          en: 'Cursed - Add opposite you',
        },
        clockwise: {
          en: 'Add is clockwise',
        },
        counterclockwise: {
          en: 'Add is counterclockwise',
        },
      },
    },
    {
      id: 'FRU P2 Shining Armor',
      type: 'GainsEffect',
      netRegex: { effectId: '8E1', capture: false },
      condition: (data) => data.phase === 'p2-dd',
      suppressSeconds: 1,
      countdownSeconds: 4.9,
      response: Responses.lookAway('alarm'),
    },
    {
      id: 'FRU P2 Twin Silence/Stillness First',
      type: 'StartsUsing',
      // 9D01 - Twin Stillness (back safe -> front safe)
      // 9D02 - Twin Silence (front safe -> back safe)
      netRegex: { id: ['9D01', '9D02'] },
      durationSeconds: 2.8,
      response: (data, matches, output) => {
        // cactbot-builtin-response
        output.responseOutputStrings = {
          aaccSilence: {
            en: '(stay in front)',
          },
          silence: Outputs.front,
          stillness: Outputs.back,
        };
        if (data.triggerSetConfig.sinboundRotate === 'aacc')
          return matches.id === '9D01'
            ? { alertText: output.stillness() }
            : { infoText: output.aaccSilence() };
        return matches.id === '9D01'
          ? { alertText: output.stillness() }
          : { alertText: output.silence() };
      },
    },
    {
      id: 'FRU P2 Twin Silence/Stillness Second',
      type: 'StartsUsing',
      // 9D01 - Twin Stillness (back safe -> front safe)
      // 9D02 - Twin Silence (front safe -> back safe)
      netRegex: { id: ['9D01', '9D02'] },
      delaySeconds: 2.9,
      alertText: (_data, matches, output) =>
        matches.id === '9D01' ? output.stillness() : output.silence(),
      outputStrings: {
        silence: Outputs.back,
        stillness: Outputs.front,
      },
    },
    // ***** Mirror Mirror *****
    {
      id: 'FRU P2 Mirror Mirror Initial Cleaves',
      type: 'StartsUsing',
      netRegex: { id: '9D0B', source: 'Usurper of Frost', capture: false },
      // Only fire during Mirror Mirror (same ids used during Diamond Dust)
      condition: (data) => data.phase === 'p2-mm',
      delaySeconds: 1,
      alertText: (_data, _matches, output) => output.baitCleave(),
      outputStrings: {
        baitCleave: {
          en: 'Bait cleave',
          cn: '引导水波',
        },
      },
    },
    {
      id: 'FRU P2 Mirror Mirror Reflected Cleaves',
      type: 'StartsUsing',
      // 9D0D = Reflected Scythe Kick (from Frozen Mirrors)
      netRegex: { id: '9D0D', capture: false },
      delaySeconds: 5,
      suppressSeconds: 1,
      alertText: (_data, _matches, output) => output.baitCleave(),
      outputStrings: {
        baitCleave: {
          en: 'Bait cleave',
          cn: '引导水波',
        },
      },
    },
    {
      id: 'FRU P2 Mirror Mirror Banish III',
      type: 'StartsUsing',
      // 9D1C - Banish III (partners)
      // 9D1D - Banish III (spread)
      netRegex: { id: ['9D1C', '9D1D'] },
      // Only fire during Mirror Mirror (same ids used during Light Rampant)
      condition: (data) => data.phase === 'p2-mm',
      infoText: (_data, matches, output) =>
        matches.id === '9D1C' ? output.partners() : output.spread(),
      outputStrings: {
        partners: Outputs.stackPartner,
        spread: Outputs.spread,
      },
    },
    // ***** Light Rampant *****
    {
      id: 'FRU P2 Lightsteeped Counter',
      type: 'GainsEffect',
      netRegex: { effectId: '8D1' },
      condition: Conditions.targetIsYou(),
      // can't just increment, since one puddle player gets 2 stacks on initial application
      run: (data, matches) => data.p2LightsteepedCount = parseInt(matches.count),
    },
    {
      id: 'FRU P2 Light Rampant Setup',
      type: 'HeadMarker',
      netRegex: { id: '0177' },
      alertText: (data, matches, output) => {
        data.p2LightRampantPuddles.push(matches.target);
        if (data.p2LightRampantPuddles.length < 2)
          return;
        const p1 = data.party.member(data.p2LightRampantPuddles[0]);
        const p2 = data.party.member(data.p2LightRampantPuddles[1]);
        if (data.me === matches.target)
          return output.puddle({ other: p1 });
        else if (data.p2LightRampantPuddles[0] === data.me)
          return output.puddle({ other: p2 });
        return output.tether({ p1: p1, p2: p2 });
      },
      outputStrings: {
        puddle: {
          en: 'Puddles on you (w/ ${other})',
          cn: '放置大圈 (和 ${other})',
        },
        tether: {
          en: 'Tether on you (Puddles: ${p1}, ${p2})',
          cn: '拉线踩塔 (大圈: ${p1}, ${p2})',
        },
      },
    },
    {
      id: 'FRU P2 Light Rampant Tower',
      type: 'Ability',
      // fire when the first set of Holy Light orbs explode
      netRegex: { id: '9D1B', source: 'Holy Light', capture: false },
      condition: (data) => !data.p2SeenFirstHolyLight,
      response: (data, _matches, output) => {
        // cactbot-builtin-response
        output.responseOutputStrings = {
          towerSoak: {
            en: 'Soak middle tower',
            cn: '踩塔',
          },
          towerAvoid: {
            en: 'Avoid middle tower',
            cn: '不去踩塔',
          },
        };
        return data.p2LightsteepedCount === 2
          ? { alertText: output.towerSoak() }
          : { infoText: output.towerAvoid() };
      },
      run: (data) => data.p2SeenFirstHolyLight = true,
    },
    {
      id: 'FRU P2 Light Rampant Banish III',
      type: 'StartsUsing',
      // 9D1C - Banish III (partners)
      // 9D1D - Banish III (spread)
      netRegex: { id: ['9D1C', '9D1D'], source: 'Usurper of Frost' },
      // Only fire during Light Rampant (same ids used during Mirror Mirror)
      condition: (data) => data.phase === 'p2-lr',
      delaySeconds: 0.5,
      alertText: (data, matches, output) => {
        const partnerSpread = matches.id === '9D1C' ? output.partners() : output.spread();
        if (data.p2LightsteepedCount === 2)
          return output.afterTower({ partnerSpread: partnerSpread });
        return partnerSpread;
      },
      outputStrings: {
        afterTower: {
          en: '${partnerSpread} (after tower)',
          cn: '踩塔后 + ${partnerSpread}',
        },
        partners: Outputs.stackPartner,
        spread: Outputs.spread,
      },
    },
    {
      id: 'FRU P2 The House of Light',
      type: 'StartsUsing',
      netRegex: { id: '9CFD', source: 'Usurper of Frost', capture: false },
      response: Responses.protean(),
    },
    {
      id: 'FRU P2 Absolute Zero',
      type: 'StartsUsing',
      netRegex: { id: '9D20', source: 'Usurper of Frost', capture: false },
      delaySeconds: 4,
      response: Responses.bigAoe(),
    },
    // ************************
    // Intermission / Crystals
    // ************************
    {
      id: 'FRU Intermission Target Veil',
      type: 'LosesEffect',
      // 307 - Invincibility
      netRegex: { effectId: '307', target: 'Ice Veil', capture: false },
      infoText: (_data, _matches, output) => output.targetVeil(),
      outputStrings: {
        targetVeil: {
          en: 'Target Ice Veil',
          cn: '集火永久冰晶',
        },
      },
    },
    {
      id: 'FRU Intermission Junction',
      type: 'WasDefeated',
      netRegex: { target: 'Ice Veil', capture: false },
      delaySeconds: 5,
      response: Responses.bigAoe(),
    },
    // ************************
    // P3 -- Oracle Of Darkness
    // ************************
    // ***** Ultimate Relativity *****
    {
      id: 'FRU P3 Ultimate Relativity AoE',
      type: 'StartsUsing',
      netRegex: { id: '9D4A', source: 'Oracle of Darkness', capture: false },
      delaySeconds: 4,
      response: Responses.bigAoe(),
    },
    {
      id: 'FRU P3 Ultimate Relativity Debuff Collect',
      type: 'GainsEffect',
      // 997 = Spell-in-Waiting: Dark Fire III (11s, 21s, or 31s)
      // 99E = Spell-in-Waiting: Dark Blizzard III (21s)
      netRegex: { effectId: ['997', '99E'] },
      condition: (data) => data.phase === 'p3-ur',
      run: (data, matches) => {
        data.p3RelativityRoleCount++;
        const dur = parseFloat(matches.duration);
        let debuff;
        if (matches.effectId === '99E')
          debuff = 'ice';
        else if (dur < 12)
          debuff = 'shortFire';
        else if (dur < 22)
          debuff = 'mediumFire';
        else
          debuff = 'longFire';
        const rawRole = data.party.member(matches.target).role;
        let role;
        if (rawRole === 'tank' || rawRole === 'healer')
          role = 'support';
        else if (rawRole === 'dps')
          role = 'dps';
        else
          return;
        if (debuff === 'ice') {
          data.p3RelativityRoleMap[role].hasIce = true;
          data.p3RelativityRoleMap.ice = matches.target;
        } else if (role === 'dps' && debuff === 'shortFire')
          data.p3RelativityRoleMap.dps.shortFire.push(matches.target);
        else if (role === 'support' && debuff === 'longFire')
          data.p3RelativityRoleMap.support.longFire.push(matches.target);
        else
          data.p3RelativityRoleMap[role][debuff] = matches.target;
        if (data.me === matches.target)
          data.p3RelativityDebuff = debuff;
      },
    },
    {
      id: 'FRU P3 Ultimate Relativity Initial Debuff',
      type: 'GainsEffect',
      netRegex: { effectId: ['997', '99E'], capture: false },
      condition: (data) => data.phase === 'p3-ur' && data.p3RelativityRoleCount === 8,
      durationSeconds: 8,
      infoText: (data, _matches, output) => {
        const role = data.role === 'dps' ? 'dps' : 'support';
        const debuff = data.p3RelativityDebuff;
        if (debuff === undefined)
          return;
        if (debuff === 'ice')
          return output.debuffSolo({ debuff: output.ice() });
        else if (debuff === 'mediumFire')
          return output.debuffSolo({ debuff: output.mediumFire() });
        else if (debuff === 'longFire') {
          if (role === 'dps')
            return output.debuffSolo({ debuff: output.longFire() });
          const other = data.p3RelativityRoleMap.support.longFire.find((e) => e !== data.me);
          return output.debuffShared({
            debuff: output.longFire(),
            other: data.party.member(other),
          });
        }
        if (role === 'support')
          return output.debuffSolo({ debuff: output.shortFire() });
        const other = data.p3RelativityRoleMap.dps.shortFire.find((e) => e !== data.me);
        return output.debuffShared({
          debuff: output.shortFire(),
          other: data.party.member(other),
        });
      },
      outputStrings: {
        debuffSolo: {
          en: '${debuff}',
          cn: '${debuff}',
        },
        debuffShared: {
          en: '${debuff} (w/ ${other})',
          cn: '${debuff} (和 ${other})',
        },
        shortFire: {
          en: 'Short Fire',
          cn: '短火',
        },
        mediumFire: {
          en: 'Medium Fire',
          cn: '中火',
        },
        longFire: {
          en: 'Long Fire',
          cn: '长火',
        },
        ice: {
          en: 'Ice',
          cn: '冰点名',
        },
      },
    },
    {
      id: 'FRU P3 Ultimate Relativity Stoplight Collect',
      type: 'AddedCombatant',
      netRegex: { npcBaseId: '17832' },
      condition: (data) => data.phase === 'p3-ur',
      run: (data, matches) => data.p3RelativityStoplights[matches.id] = matches,
    },
    {
      id: 'FRU P3 Ultimate Relativity Y North Spot',
      type: 'Tether',
      // boss tethers to 5 stoplights - 0085 are purple tethers, 0086 are yellow
      netRegex: { id: '0086' },
      condition: (data) => data.phase === 'p3-ur',
      run: (data, matches, output) => {
        const id = matches.sourceId;
        const stoplight = data.p3RelativityStoplights[id];
        if (stoplight === undefined)
          return;
        const x = parseFloat(stoplight.x);
        const y = parseFloat(stoplight.y);
        data.p3RelativityYellowDirNums.push(Directions.xyTo8DirNum(x, y, centerX, centerY));
        if (data.p3RelativityYellowDirNums.length !== 3)
          return;
        const northDirNum = findURNorthDirNum(data.p3RelativityYellowDirNums);
        if (northDirNum === -1 || data.p3RelativityDebuff === undefined) {
          data.p3RelativityMyDirStr = output.unknown();
          return;
        }
        const role = data.role === 'dps' ? 'dps' : 'support';
        const debuff = data.p3RelativityDebuff;
        if (role === 'dps') {
          if (debuff === 'longFire' || debuff === 'ice') {
            const myDirNum = (northDirNum + 4) % 8; // relative South
            data.p3RelativityMyDirStr = output[Directions.output8Dir[myDirNum] ?? 'unknown']();
          } else if (debuff === 'mediumFire') {
            const myDirNum = (northDirNum + 2) % 8; // relative East
            data.p3RelativityMyDirStr = output[Directions.output8Dir[myDirNum] ?? 'unknown']();
          } else if (debuff === 'shortFire') {
            const dirs = [
              Directions.output8Dir[(northDirNum + 3) % 8] ?? 'unknown',
              Directions.output8Dir[(northDirNum + 5) % 8] ?? 'unknown',
            ];
            data.p3RelativityMyDirStr = dirs.map((dir) => output[dir]()).join(output.or());
          }
        } else { // supports
          if (debuff === 'shortFire' || debuff === 'ice') {
            const myDirNum = northDirNum; // relative North
            data.p3RelativityMyDirStr = output[Directions.output8Dir[myDirNum] ?? 'unknown']();
          } else if (debuff === 'mediumFire') {
            const myDirNum = (northDirNum + 6) % 8; // relative West
            data.p3RelativityMyDirStr = output[Directions.output8Dir[myDirNum] ?? 'unknown']();
          } else if (debuff === 'longFire') {
            const dirs = [
              Directions.output8Dir[(northDirNum + 1) % 8] ?? 'unknown',
              Directions.output8Dir[(northDirNum + 7) % 8] ?? 'unknown',
            ];
            data.p3RelativityMyDirStr = dirs.map((dir) => output[dir]()).join(output.or());
          }
        }
      },
      outputStrings: {
        ...Directions.outputStrings8Dir,
        or: Outputs.or,
        unknown: Outputs.unknown,
      },
    },
    // There are six steps to the mechanic. A player's action at each step is determined by their
    // debuff combo (which is deterministic based on the initial fire/ice debuff).
    // Since every player receives a 9A0 debuff ('Spell-in-Waiting: Return) of varying lengths,
    // fire each of these triggers based on a delay from when 9A0 is applied at the start of UR.
    {
      id: 'FRU P3 Ultimate Rel 1st Fire/Stack',
      type: 'GainsEffect',
      netRegex: { effectId: '9A0' },
      condition: (data, matches) => data.phase === 'p3-ur' && data.me === matches.target,
      delaySeconds: 4,
      durationSeconds: 7,
      alertText: (data, _matches, output) => {
        const debuff = data.p3RelativityDebuff;
        if (debuff === undefined)
          return;
        if (data.triggerSetConfig.ultimateRel !== 'yNorthDPSEast')
          return output[debuff]();
        const dirStr = data.p3RelativityMyDirStr;
        if (debuff !== 'shortFire')
          return output.yNorthStrat({ debuff: output[debuff](), dir: output.middle() });
        return output.yNorthStrat({ debuff: output.shortFire(), dir: dirStr });
      },
      outputStrings: {
        yNorthStrat: p3UROutputStrings.yNorthStrat,
        shortFire: p3UROutputStrings.fireSpread,
        mediumFire: p3UROutputStrings.stack,
        longFire: p3UROutputStrings.stack,
        ice: p3UROutputStrings.stack,
        middle: p3UROutputStrings.middle,
      },
    },
    {
      id: 'FRU P3 Ultimate Rel 1st Bait/Rewind',
      type: 'GainsEffect',
      netRegex: { effectId: '9A0' },
      condition: (data, matches) => data.phase === 'p3-ur' && data.me === matches.target,
      delaySeconds: 11,
      alertText: (data, _matches, output) => {
        const role = data.role === 'dps' ? 'dps' : 'support';
        const debuff = data.p3RelativityDebuff;
        if (debuff === undefined)
          return;
        if (data.triggerSetConfig.ultimateRel !== 'yNorthDPSEast') {
          if (debuff === 'ice')
            return role === 'dps' ? output.iceDps() : output.iceSupport();
          return output[debuff]();
        }
        const dirStr = data.p3RelativityMyDirStr;
        if (debuff === 'longFire')
          return output.yNorthStrat({ debuff: output.longFire(), dir: dirStr });
        else if (debuff === 'ice') {
          // dps ice bait stoplights; support ice drops rewind (eruption - out)
          const comboDirStr = role === 'dps'
            ? dirStr
            : output.dirCombo({ inOut: output.out(), dir: dirStr });
          return role === 'dps'
            ? output.yNorthStrat({ debuff: output.iceDps(), dir: comboDirStr })
            : output.yNorthStrat({ debuff: output.iceSupport(), dir: comboDirStr });
        } else if (debuff === 'mediumFire') {
          // dps mediumFire drops rewind (dark water - stack mid); support mediumFire drops rewind (eruption - out)
          const comboDirStr = role === 'dps'
            ? output.dirCombo({ inOut: output.middle(), dir: dirStr })
            : output.dirCombo({ inOut: output.out(), dir: dirStr });
          return output.yNorthStrat({ debuff: output.mediumFire(), dir: comboDirStr });
        }
        // shortFires all drop rewinds (eruption - out)
        const comboDirStr = output.dirCombo({ inOut: output.out(), dir: dirStr });
        return output.yNorthStrat({ debuff: output.shortFire(), dir: comboDirStr });
      },
      outputStrings: {
        yNorthStrat: p3UROutputStrings.yNorthStrat,
        dirCombo: p3UROutputStrings.dirCombo,
        shortFire: p3UROutputStrings.dropRewind,
        mediumFire: p3UROutputStrings.dropRewind,
        longFire: p3UROutputStrings.baitStoplight,
        iceDps: p3UROutputStrings.baitStoplight,
        iceSupport: p3UROutputStrings.dropRewind,
        middle: p3UROutputStrings.middle,
        out: p3UROutputStrings.out,
      },
    },
    {
      id: 'FRU P3 Ultimate Rel 2nd Fire/Stack + Ice',
      type: 'GainsEffect',
      netRegex: { effectId: '9A0' },
      condition: (data, matches) => data.phase === 'p3-ur' && data.me === matches.target,
      delaySeconds: 16,
      alertText: (data, _matches, output) => {
        const debuff = data.p3RelativityDebuff;
        if (debuff === undefined)
          return;
        if (data.triggerSetConfig.ultimateRel !== 'yNorthDPSEast')
          return output[debuff]();
        const dirStr = data.p3RelativityMyDirStr;
        if (debuff !== 'mediumFire')
          return output.yNorthStrat({ debuff: output[debuff](), dir: output.middle() });
        return output.yNorthStrat({ debuff: output.mediumFire(), dir: dirStr });
      },
      outputStrings: {
        yNorthStrat: p3UROutputStrings.yNorthStrat,
        shortFire: p3UROutputStrings.stack,
        mediumFire: p3UROutputStrings.fireSpread,
        longFire: p3UROutputStrings.stack,
        ice: p3UROutputStrings.stack,
        middle: p3UROutputStrings.middle,
      },
    },
    {
      id: 'FRU P3 Ultimate Rel 2nd Bait/Rewind',
      type: 'GainsEffect',
      netRegex: { effectId: '9A0' },
      condition: (data, matches) => data.phase === 'p3-ur' && data.me === matches.target,
      delaySeconds: 21,
      alertText: (data, _matches, output) => {
        const role = data.role === 'dps' ? 'dps' : 'support';
        const debuff = data.p3RelativityDebuff;
        if (debuff === undefined)
          return;
        if (data.triggerSetConfig.ultimateRel !== 'yNorthDPSEast') {
          if (debuff === 'ice')
            return role === 'dps' ? output.iceDps() : output.iceSupport();
          return output[debuff]();
        }
        const dirStr = data.p3RelativityMyDirStr;
        if (debuff === 'shortFire')
          return output.yNorthStrat({ debuff: output.shortFire(), dir: dirStr });
        else if (debuff === 'ice') {
          // dps ice baits drops rewind (gaze - in); support ice baits stoplight
          const comboDirStr = role === 'support'
            ? dirStr
            : output.dirCombo({ inOut: output.middle(), dir: data.p3RelativityMyDirStr });
          return role === 'dps'
            ? output.yNorthStrat({ debuff: output.iceDps(), dir: comboDirStr })
            : output.yNorthStrat({ debuff: output.iceSupport(), dir: comboDirStr });
        } else if (debuff === 'mediumFire') {
          // mediumFires have nothing to do, but they'll be stacking mid next
          return output.yNorthStrat({ debuff: output.mediumFire(), dir: output.middle() });
        }
        // longFires all drop rewinds (gaze - in)
        const comboDirStr = output.dirCombo({ inOut: output.middle(), dir: dirStr });
        return output.yNorthStrat({ debuff: output.longFire(), dir: comboDirStr });
      },
      outputStrings: {
        yNorthStrat: p3UROutputStrings.yNorthStrat,
        dirCombo: p3UROutputStrings.dirCombo,
        shortFire: p3UROutputStrings.baitStoplight,
        mediumFire: p3UROutputStrings.avoidStoplights,
        longFire: p3UROutputStrings.dropRewind,
        iceDps: p3UROutputStrings.dropRewind,
        iceSupport: p3UROutputStrings.baitStoplight,
        middle: p3UROutputStrings.middle,
        out: p3UROutputStrings.out,
      },
    },
    {
      id: 'FRU P3 Ultimate Rel 3rd Fire/Stack',
      type: 'GainsEffect',
      netRegex: { effectId: '9A0' },
      condition: (data, matches) => data.phase === 'p3-ur' && data.me === matches.target,
      delaySeconds: 26,
      alertText: (data, _matches, output) => {
        const debuff = data.p3RelativityDebuff;
        if (debuff === undefined)
          return;
        if (data.triggerSetConfig.ultimateRel !== 'yNorthDPSEast')
          return output[debuff]();
        const dirStr = data.p3RelativityMyDirStr;
        if (debuff !== 'longFire')
          return output.yNorthStrat({ debuff: output[debuff](), dir: output.middle() });
        return output.yNorthStrat({ debuff: output.longFire(), dir: dirStr });
      },
      outputStrings: {
        yNorthStrat: p3UROutputStrings.yNorthStrat,
        shortFire: p3UROutputStrings.stack,
        mediumFire: p3UROutputStrings.stack,
        longFire: p3UROutputStrings.fireSpread,
        ice: p3UROutputStrings.stack,
        middle: p3UROutputStrings.middle,
      },
    },
    {
      id: 'FRU P3 Ultimate Rel 3nd Bait',
      type: 'GainsEffect',
      netRegex: { effectId: '9A0' },
      condition: (data, matches) => data.phase === 'p3-ur' && data.me === matches.target,
      delaySeconds: 31,
      alertText: (data, _matches, output) => {
        const debuff = data.p3RelativityDebuff;
        if (debuff === undefined)
          return;
        if (data.triggerSetConfig.ultimateRel !== 'yNorthDPSEast')
          return output[debuff]();
        const dirStr = data.p3RelativityMyDirStr;
        if (debuff !== 'mediumFire')
          return output.yNorthStrat({ debuff: output[debuff](), dir: output.middle() });
        return output.yNorthStrat({ debuff: output.mediumFire(), dir: dirStr });
      },
      outputStrings: {
        yNorthStrat: p3UROutputStrings.yNorthStrat,
        shortFire: p3UROutputStrings.avoidStoplights,
        mediumFire: p3UROutputStrings.baitStoplight,
        longFire: p3UROutputStrings.avoidStoplights,
        ice: p3UROutputStrings.avoidStoplights,
        middle: p3UROutputStrings.middle,
        out: p3UROutputStrings.out,
      },
    },
    {
      id: 'FRU P3 Ultimate Rel Rewind',
      type: 'GainsEffect',
      netRegex: { effectId: '994' },
      condition: (data, matches) => data.phase === 'p3-ur' && data.me === matches.target,
      delaySeconds: (_data, matches) => parseFloat(matches.duration) - 4,
      countdownSeconds: 4,
      response: Responses.lookAway('alarm'),
    },
    {
      id: 'FRU P3 Shockwave Pulsar',
      type: 'StartsUsing',
      netRegex: { id: '9D5A', source: 'Oracle of Darkness', capture: false },
      response: Responses.bigAoe(),
    },
    {
      id: 'FRU P3 Black Halo',
      type: 'StartsUsing',
      netRegex: { id: '9D62', source: 'Oracle of Darkness' },
      response: (data, matches, output) => {
        // cactbot-builtin-response
        output.responseOutputStrings = {
          onYou: {
            en: 'Shared tank cleave on YOU',
            cn: '坦克分摊点名',
          },
          share: {
            en: 'Shared tank cleave on ${target}',
            cn: '坦克分摊 (和 ${target})',
          },
          avoid: {
            en: 'Avoid tank cleave',
            cn: '远离分摊顺劈',
          },
        };
        if (data.me === matches.target)
          return { alertText: output.onYou() };
        else if (data.role === 'tank')
          return { alertText: output.share({ target: data.party.member(matches.target).nick }) };
        return { infoText: output.avoid() };
      },
    },
    // ***** Apocalypse *****
    // Get the player's cardinal dir relative to the boss when the Dark Water debuffs are applied
    // If the player takes the dark water stack on a different cardinal dir, they swapped groups
    // and will need to stay swapped throughout the mechanic.
    {
      id: 'FRU P3 Apoc Dark Water Side Collect',
      type: 'GainsEffect',
      netRegex: { effectId: '99D', capture: false },
      condition: (data) => data.phase === 'p3-apoc',
      suppressSeconds: 1,
      promise: async (data) => {
        const combatantData = await callOverlayHandler({
          call: 'getCombatants',
          names: [data.me],
        });
        const me = combatantData.combatants[0];
        if (!me)
          return;
        data.p3ApocInitialSide = me.PosX > centerX ? 'east' : 'west';
      },
    },
    {
      id: 'FRU P3 Apoc Dark Water Swap Check',
      type: 'Ability',
      netRegex: { id: '9D4F' },
      condition: (data, matches) => data.phase === 'p3-apoc' && data.me === matches.target,
      run: (data, matches) => {
        // this is set for the first dark water stack; don't overwrite it
        if (data.p3ApocGroupSwap !== undefined)
          return;
        const x = parseFloat(matches.targetX);
        const stackSide = x > centerX ? 'east' : 'west';
        // if p3ApocInitialSide isn't set for whatever reason, assume no swap (for safety)
        data.p3ApocGroupSwap = (data.p3ApocInitialSide ?? stackSide) !== stackSide;
      },
    },
    {
      id: 'FRU P3 Apoc Dark Water Debuff',
      type: 'GainsEffect',
      netRegex: { effectId: '99D' },
      condition: (data) => data.phase === 'p3-apoc',
      durationSeconds: 6,
      infoText: (data, matches, output) => {
        data.p3ApocDebuffCount++;
        const dur = parseFloat(matches.duration);
        const debuffLength = dur < 11 ? 'short' : (dur < 30 ? 'medium' : 'long');
        data.p3ApocDebuffs[debuffLength].push(matches.target);
        if (data.me === matches.target)
          data.p3ApocMyDebuff = debuffLength;
        if (data.p3ApocDebuffCount < 6)
          return;
        data.p3ApocMyDebuff ??= 'none';
        // Add the two players who didn't get a debuff
        const noDebuffs = data.party.partyNames.filter((name) =>
          !data.p3ApocDebuffs.short.includes(name) &&
          !data.p3ApocDebuffs.medium.includes(name) &&
          !data.p3ApocDebuffs.long.includes(name)
        );
        data.p3ApocDebuffs.none = [...noDebuffs];
        const [same] = data.p3ApocDebuffs[data.p3ApocMyDebuff].filter((p) => p !== data.me);
        const player = data.party.member(same).nick;
        return output.combo({ debuff: output[data.p3ApocMyDebuff](), same: player });
      },
      outputStrings: {
        combo: {
          en: 'Stack: ${debuff} (w/ ${same})',
          cn: '${debuff} 分摊 (和 ${same})',
        },
        short: {
          en: 'Short',
          cn: '短',
        },
        medium: {
          en: 'Medium',
          cn: '中',
        },
        long: {
          en: 'Long',
          cn: '长',
        },
        none: {
          en: 'No Debuff',
          cn: '无点名',
        },
        unknown: Outputs.unknown,
      },
    },
    // There are 8 combatants (one at each cardinal+intercard) that spawn with a heading indicative
    // of the mechanic rotation (i.e., all will be facing clockwise or counterclockwise).
    // There are two combatants that spawn at center with headings indicative of where the first
    // two outer combatants will explode.  These are always directly opposite, so we only need one.
    {
      id: 'FRU P3 Apoc Collect',
      type: 'CombatantMemory',
      netRegex: { change: 'Add', pair: [{ key: 'BNpcID', value: '1EB0FF' }] },
      condition: (data) => data.phase === 'p3-apoc',
      run: (data, matches) => {
        const x = parseFloat(matches.pairPosX ?? '0');
        const y = parseFloat(matches.pairPosY ?? '0');
        const isCenterActor = Math.round(x) === 100 && Math.round(y) === 100;
        const hdg = parseFloat(matches.pairHeading ?? '0');
        if (data.p3ApocFirstDirNum === undefined && isCenterActor)
          data.p3ApocFirstDirNum = Directions.hdgTo8DirNum(hdg);
        else if (data.p3ApocRotationDir === undefined && !isCenterActor) {
          const pos = Directions.xyTo8DirOutput(x, y, centerX, centerY);
          const facing = Directions.outputFrom8DirNum(Directions.hdgTo8DirNum(hdg));
          const relative = getRelativeClockPos(pos, facing);
          data.p3ApocRotationDir = relative === 'clockwise'
            ? 1
            : (relative === 'counterclockwise' ? -1 : undefined);
        }
      },
    },
    {
      // Silent early infoText with safe dirs
      id: 'FRU P3 Apoc Safe Early',
      type: 'CombatantMemory',
      netRegex: { change: 'Add', pair: [{ key: 'BNpcID', value: '1EB0FF' }], capture: false },
      condition: (data) => data.phase === 'p3-apoc',
      delaySeconds: 0.9,
      durationSeconds: 8.2,
      suppressSeconds: 1,
      soundVolume: 0,
      infoText: (data, _matches, output) => {
        const startNum = data.p3ApocFirstDirNum;
        const rotationDir = data.p3ApocRotationDir;
        if (startNum === undefined || rotationDir === undefined)
          return;
        // Safe spot(s) are 1 behind the starting dir and it's opposite (+4)
        const safe = [
          (startNum - rotationDir + 8) % 8,
          (startNum + 4 - rotationDir + 8) % 8,
        ];
        safe.sort((a, b) => a - b);
        const safeStr = safe
          .map((dir) => output[Directions.output8Dir[dir] ?? 'unknown']())
          .join(output.or());
        return output.safe({ dir1: safeStr });
      },
      tts: null,
      outputStrings: {
        safe: {
          en: '(Apoc safe later: ${dir1})',
          cn: '${dir1} 稍后安全',
        },
        ...Directions.outputStrings8Dir,
        or: Outputs.or,
      },
    },
    {
      // Displays during Spirit Taker
      id: 'FRU P3 Apoc Safe',
      type: 'CombatantMemory',
      netRegex: { change: 'Add', pair: [{ key: 'BNpcID', value: '1EB0FF' }], capture: false },
      condition: (data) => data.phase === 'p3-apoc',
      delaySeconds: 9.2,
      durationSeconds: 11,
      suppressSeconds: 1,
      infoText: (data, _matches, output) => {
        const startNum = data.p3ApocFirstDirNum;
        const rotationDir = data.p3ApocRotationDir;
        if (startNum === undefined || rotationDir === undefined)
          return;
        // Safe spot(s) are 1 behind the starting dir and it's opposite (+4)
        // Melees lean one additional dir away from the rotation direction
        const safe = [
          (startNum - rotationDir + 8) % 8,
          (startNum + 4 - rotationDir + 8) % 8,
        ];
        const toward = [
          (safe[0] - rotationDir + 8) % 8,
          (safe[1] - rotationDir + 8) % 8,
        ];
        // We shouldn't just sort safe[], and toward[], since the elements are paired
        // and sorting might impact order of just one and not both.
        if (safe[0] > safe[1]) {
          safe.reverse();
          toward.reverse();
        }
        let safeStr = output['unknown']();
        let towardStr = output['unknown']();
        if (data.triggerSetConfig.apoc === 'dpsNE-CW') {
          const dpsDirs = [1, 2, 3, 4];
          const suppDirs = [5, 6, 7, 0];
          const myDirs = data.role === 'dps' ? dpsDirs : suppDirs;
          // use the index from safe, so we can make sure we're giving the correct 'toward'.
          const idx = safe.findIndex((idx) => myDirs.includes(idx));
          if (idx === -1)
            return output.safe({ dir1: safeStr, dir2: towardStr });
          const safeDir = safe[idx];
          const towardDir = toward[idx];
          if (safeDir === undefined || towardDir === undefined)
            return output.safe({ dir1: safeStr, dir2: towardStr });
          safeStr = output[Directions.output8Dir[safeDir] ?? 'unknown']();
          towardStr = output[Directions.output8Dir[towardDir] ?? 'unknown']();
          return output.safe({ dir1: safeStr, dir2: towardStr });
        }
        safeStr = safe
          .map((dir) => output[Directions.output8Dir[dir] ?? 'unknown']())
          .join(output.or());
        towardStr = toward
          .map((dir) => output[Directions.output8Dir[dir] ?? 'unknown']())
          .join(output.or());
        return output.safe({ dir1: safeStr, dir2: towardStr });
      },
      outputStrings: {
        safe: {
          en: 'Safe: ${dir1} (lean ${dir2})',
          cn: '${dir1} 偏 ${dir2} 安全',
        },
        ...Directions.outputStrings8Dir,
        or: Outputs.or,
      },
    },
    {
      id: 'FRU P3 Apoc First Stacks',
      type: 'GainsEffect',
      netRegex: { effectId: '99D', capture: false },
      // first debuff has 10.0s duration
      condition: (data) => data.phase === 'p3-apoc',
      delaySeconds: 6,
      durationSeconds: 3.5,
      suppressSeconds: 1,
      response: Responses.stackThenSpread(),
    },
    {
      // Fire this just before the first Dark Water debuffs expire (10.0s).
      // A tiny bit early (0.2s) won't cause people to leave the stack, but the reaction
      // time on Spirit Taker is very short so the little extra helps.
      id: 'FRU P3 Apoc Spirit Taker',
      type: 'GainsEffect',
      netRegex: { effectId: '99D', capture: false },
      condition: (data) => data.phase === 'p3-apoc',
      delaySeconds: 9.8,
      durationSeconds: 2,
      suppressSeconds: 1,
      response: Responses.spread('alert'),
    },
    {
      id: 'FRU P3 Apoc Second Stacks',
      type: 'Ability',
      netRegex: { id: '9D52', source: 'Oracle of Darkness', capture: false },
      condition: (data) => data.phase === 'p3-apoc',
      delaySeconds: 1,
      suppressSeconds: 1,
      response: (data, _matches, output) => {
        // cactbot-builtin-response
        output.responseOutputStrings = {
          stacks: Outputs.stacks,
          stacksSwap: {
            en: '${stacks} (Swapped)',
          },
        };
        const stacksStr = output.stacks();
        return data.p3ApocGroupSwap
          ? { alertText: output.stacksSwap({ stacks: stacksStr }) }
          : { infoText: stacksStr };
      },
    },
    {
      id: 'FRU P3 Apoc Darkest Dance Jump Bait',
      type: 'StartsUsing',
      netRegex: { id: '9CF5', source: 'Oracle of Darkness', capture: false },
      condition: (data) => data.phase === 'p3-apoc' && data.role === 'tank',
      delaySeconds: 3,
      durationSeconds: 2,
      infoText: (data, _matches, output) => {
        const startNum = data.p3ApocFirstDirNum;
        const rotationDir = data.p3ApocRotationDir;
        if (startNum === undefined || rotationDir === undefined)
          return;
        // Safe spot(s) are 2 behind the starting dir and it's opposite (+4)
        const baitDirs = [
          (startNum - (rotationDir * 2) + 8) % 8,
          (startNum + 4 - (rotationDir * 2) + 8) % 8,
        ];
        baitDirs.sort((a, b) => a - b);
        const baitStr = baitDirs
          .map((dir) => output[Directions.output8Dir[dir] ?? 'unknown']())
          .join(output.or());
        return output.bait({ dirs: baitStr });
      },
      outputStrings: {
        bait: {
          en: 'Bait Jump (${dirs})?',
          cn: '${dirs} 引导超级跳',
        },
        ...Directions.outputStrings8Dir,
        or: Outputs.or,
      },
    },
    {
      id: 'FRU P3 Darkest Dance KB + Third Stacks',
      type: 'Ability',
      netRegex: { id: '9CF5', source: 'Oracle of Darkness', capture: false },
      durationSeconds: 7,
      alertText: (data, _matches, output) => {
        const kbStacks = output.kbStacks();
        return data.p3ApocGroupSwap ? output.kbStacksSwap({ kbStacks: kbStacks }) : kbStacks;
      },
      outputStrings: {
        kbStacks: {
          en: 'Knockback => Stacks',
          cn: '击退 => 四四分摊',
        },
        kbStacksSwap: {
          en: '${kbStacks} (Swapped)',
        },
      },
    },
    {
      id: 'FRU P3 Memory\'s End',
      type: 'StartsUsing',
      netRegex: { id: '9D6C', source: 'Oracle of Darkness', capture: false },
      delaySeconds: 5,
      response: Responses.bigAoe(),
    },
    // ************************
    // P4 -- Duo
    // ************************
    {
      id: 'FRU P4 Akh Rhai',
      // positions snapshot when hidden combatants are added, but they have unreliable names
      // we can safely base this on the timing of the vfx effect that precedes the snapshot
      type: 'GainsEffect',
      netRegex: { effectId: '8E1', capture: false },
      condition: (data) => data.phase === 'p4-dld',
      delaySeconds: 4.7,
      suppressSeconds: 1,
      response: Responses.moveAway('alert'),
    },
    {
      id: 'FRU P4 Akh Morn',
      type: 'StartsUsing',
      netRegex: { id: '9D6E', source: 'Oracle of Darkness', capture: false },
      alertText: (_data, _matches, output) => output.stacks(),
      outputStrings: {
        stacks: Outputs.stacks,
      },
    },
    {
      id: 'FRU P4 Morn Afah',
      type: 'StartsUsing',
      netRegex: { id: '9D70', source: 'Oracle of Darkness', capture: false },
      durationSeconds: 6,
      alertText: (_data, _matches, output) => output.stack(),
      outputStrings: {
        stack: Outputs.getTogether,
      },
    },
    // ***** Darklit Dragonsong *****
    {
      id: 'FRU P4 Darklit Dragonsong',
      type: 'StartsUsing',
      netRegex: { id: '9D6D', source: 'Oracle of Darkness', capture: false },
      response: Responses.bigAoe(),
    },
    {
      id: 'FRU P4 Darklit Stacks Collect',
      type: 'GainsEffect',
      netRegex: { effectId: '99D' },
      condition: (data) => data.phase === 'p4-dld',
      run: (data, matches) => data.p4DarklitStacks.push(matches.target),
    },
    {
      id: 'FRU P4 Darklit Tether + Cleave Collect',
      type: 'Tether',
      netRegex: { id: '006E' },
      condition: (data) => data.phase === 'p4-dld',
      run: (data, matches) => {
        data.p4DarklitTetherCount++;
        (data.p4DarklitTethers[matches.source] ??= []).push(matches.target);
        (data.p4DarklitTethers[matches.target] ??= []).push(matches.source);
        if (data.p4DarklitTetherCount === 4)
          data.p4DarklitCleaves = data.party.partyNames.filter((name) =>
            !(Object.keys(data.p4DarklitTethers).includes(name))
          );
      },
    },
    // The logic for tether swaps, bait swaps, and possible stack swaps is fairly concise.
    // It's not comprehensive (specifically, we can't determine which DPS need to flex
    // and when for the cone baits), but otherwise it's accurate.  See inline comments.
    {
      id: 'FRU P4 Darklit Tower / Bait',
      type: 'Tether',
      netRegex: { id: '006E', capture: false },
      condition: (data) => data.phase === 'p4-dld' && data.p4DarklitTetherCount === 4,
      durationSeconds: 9,
      response: (data, _matches, output) => {
        // cactbot-builtin-response
        output.responseOutputStrings = {
          towerNoSwap: {
            en: 'Tower (no swaps)',
          },
          towerOtherSwap: {
            en: 'Tower (${p1} + ${p2} swap)',
          },
          towerYouSwap: {
            en: 'Tower (swap w/${player})',
          },
          tower: {
            en: 'Tower',
          },
          bait: {
            en: 'Bait Cone',
          },
          baitDPS: {
            en: 'Bait Cone (w/ ${otherDps})',
          },
        };
        const isHealerPlantNW = data.triggerSetConfig.darklit === 'healerPlantNW';
        const baitPlayers = data.p4DarklitCleaves;
        const towerPlayers = Object.keys(data.p4DarklitTethers);
        const myMech = baitPlayers.includes(data.me)
          ? 'bait'
          : (towerPlayers.includes(data.me) ? 'tower' : 'none');
        if (myMech === 'none')
          return;
        else if (baitPlayers.length !== 4 || towerPlayers.length !== 4)
          return { alertText: output[myMech]() };
        else if (!isHealerPlantNW)
          return { alertText: output[myMech]() };
        // Identify the tethered player with the stack marker.
        const towerStackPlayer = data.p4DarklitStacks.filter((p) => towerPlayers.includes(p))[0];
        const defaultOutput = { alertText: output[myMech]() };
        // Map out roles and sanity check that we have 1 tank, 1 healer, and 2 dps in each group
        // (for the inevitable TankFRU, SoloHealerFRU, etc.)
        let towerTank = '';
        let towerHealer = '';
        const towerDps = [];
        for (const player of towerPlayers) {
          const role = data.party.member(player).role;
          if (role === 'tank')
            towerTank = player;
          else if (role === 'healer')
            towerHealer = player;
          else if (role === 'dps')
            towerDps.push(player);
          else
            return defaultOutput;
        }
        if (towerTank === '' || towerHealer === '' || towerDps.length !== 2)
          return defaultOutput;
        let baitTank = '';
        let baitHealer = '';
        const baitDps = [];
        for (const player of baitPlayers) {
          const role = data.party.member(player).role;
          if (role === 'tank')
            baitTank = player;
          else if (role === 'healer')
            baitHealer = player;
          else if (role === 'dps')
            baitDps.push(player);
          else
            return defaultOutput;
        }
        if (baitTank === '' || baitHealer === '' || baitDps.length !== 2)
          return defaultOutput;
        // Handle tower stuff first.
        // Figuring out the pattern (bowtie, box, hourglass) to determine who should swap would
        // (a) require knowing which DPS is which role (M1, M2, R1, R2), or (b) trying to infer
        // roles + swaps based on player positions when tethers go out. Both options are messy.
        // But we can make this simple, because tethers always connect 1 tank, 1 healer, and 2 DPS:
        //   - If a dps is tethered to both a tank & healer, it's bowtie - no swaps.
        //   - If not, the dps tethered to the tank swaps with the tank (true for hourglass + box).
        // Once we know this, we also now know whether the tower player with the stack marker
        // will be in the north or south group (for healerPlantNW).
        // Check if a dps has tank + healer tethers; if so, bowtie. Done.
        const towerDps1 = towerDps[0] ?? '';
        const towerDps1Tethers = data.p4DarklitTethers[towerDps1];
        if (towerDps1Tethers?.includes(towerTank) && towerDps1Tethers?.includes(towerHealer)) {
          if (isHealerPlantNW && [towerTank, towerHealer].includes(towerStackPlayer ?? ''))
            data.p4DarklitTowerStackLoc = 'north';
          else if (isHealerPlantNW)
            data.p4DarklitTowerStackLoc = 'south';
          if (myMech === 'tower')
            return { infoText: output.towerNoSwap() };
        } else {
          // Not bowtie, so find the DPS that's tethered to the tank.
          const dpsWithTank = towerDps.find((dps) =>
            data.p4DarklitTethers[dps]?.includes(towerTank)
          );
          if (dpsWithTank === undefined)
            return defaultOutput;
          if (isHealerPlantNW && [towerHealer, dpsWithTank].includes(towerStackPlayer ?? ''))
            data.p4DarklitTowerStackLoc = 'north';
          else if (isHealerPlantNW)
            data.p4DarklitTowerStackLoc = 'south';
          if (myMech === 'tower') {
            if (dpsWithTank === data.me)
              return {
                alertText: output.towerYouSwap({
                  player: data.party.member(towerTank).toString(),
                }),
              };
            else if (towerTank === data.me)
              return {
                alertText: output.towerYouSwap({
                  player: data.party.member(dpsWithTank).toString(),
                }),
              };
            return {
              infoText: output.towerOtherSwap({
                p1: data.party.member(dpsWithTank).toString(),
                p2: data.party.member(towerTank).toString(),
              }),
            };
          }
        }
        // Bait players last.
        // To properly figure out side-flexing (e.g. M1 and M2 are both baiting), again, we'd need
        // to know who was in what role or infer it from positions, and no clean solution.
        // So, instead, we can tell the tank and healer to bait, and we can tell the DPS
        // who the other DPS baiter is, and let them figure out if that requires a swap. /shrug
        if ([baitTank, baitHealer].includes(data.me))
          return { infoText: output.bait() };
        else if (baitDps.includes(data.me)) {
          const otherDps = baitDps.find((dps) => dps !== data.me);
          if (otherDps === undefined)
            return defaultOutput;
          return {
            alertText: output.baitDPS({
              otherDps: data.party.member(otherDps).toString(),
            }),
          };
        }
        return defaultOutput;
      },
    },
    {
      id: 'FRU P4 Darklit Cleave Stack',
      type: 'Tether',
      netRegex: { id: '006E', capture: false },
      condition: (data) => data.phase === 'p4-dld' && data.p4DarklitTetherCount === 4,
      delaySeconds: 2,
      durationSeconds: 7,
      response: (data, _matches, output) => {
        // cactbot-builtin-response
        output.responseOutputStrings = {
          stackOnYou: {
            en: '(stack on you later)',
          },
          // stack is on you
          stackOnYouNoSwap: {
            en: '(stack on you later - no swap)',
          },
          dpsStackOnYouSwap: {
            en: 'Stacks: You swap w/ Support',
          },
          healerStackOnYouSwap: {
            en: 'Stacks: You swap w/ Ranged/Flex',
          },
          tankStackOnYouSwap: {
            en: 'Stacks: You swap w/ Melee/Flex',
          },
          // stack on someone else (not your role), so you may be required to swap
          dpsStackOnHealerSwap: {
            en: 'Stacks: ${healer} swap w/ Ranged/Flex',
          },
          dpsStackOnTankSwap: {
            en: 'Stacks: ${tank} swap w/ Melee/Flex',
          },
          supportStackOnDpsSwap: {
            en: 'Stacks: ${dps} swap w/ Support',
          },
        };
        const isHealerPlantNW = data.triggerSetConfig.darklit === 'healerPlantNW';
        // Only bother with output if the player is baiting, and if we can tell which baiter has the stack
        const baitPlayers = data.p4DarklitCleaves;
        const baitStackPlayer = data.p4DarklitStacks.find((p) => baitPlayers.includes(p));
        if (baitStackPlayer === undefined || !baitPlayers.includes(data.me))
          return {};
        const stackName = data.party.member(baitStackPlayer).toString();
        const isStackOnMe = data.me === baitStackPlayer;
        const defaultOutput = isStackOnMe ? { infoText: output.stackOnYou() } : {};
        const myRole = data.role;
        const stackRole = data.party.member(baitStackPlayer).role;
        if (stackRole === undefined)
          return defaultOutput;
        // Sanity check for non-standard party comp, or this trigger won't work
        const tankCount = baitPlayers.filter((p) => data.party.member(p)?.role === 'tank').length;
        const healerCount = baitPlayers.filter((p) =>
          data.party.member(p)?.role === 'healer'
        ).length;
        const dpsCount = baitPlayers.filter((p) => data.party.member(p)?.role === 'dps').length;
        if (tankCount !== 1 || healerCount !== 1 || dpsCount !== 2)
          return defaultOutput;
        const baitStackLoc = stackRole === 'dps' ? 'south' : 'north';
        if (data.p4DarklitTowerStackLoc === undefined || !isHealerPlantNW)
          return defaultOutput;
        const towerStackLoc = data.p4DarklitTowerStackLoc;
        // if stacks are already split N/S, no swaps required
        // TODO: Could return an infoText indicating the baiter with the stack doesn't need to swap?
        if (baitStackLoc !== towerStackLoc)
          return isStackOnMe
            ? { infoText: output.stackOnYouNoSwap() }
            : defaultOutput; // could return a infoText indicating no swaps are needed?
        // stacks are together, so we need to call for a swap
        if (isStackOnMe)
          switch (myRole) {
            case 'dps':
              return { alertText: output.dpsStackOnYouSwap() };
            case 'healer':
              return { alertText: output.healerStackOnYouSwap() };
            case 'tank':
              return { alertText: output.tankStackOnYouSwap() };
            default:
              return defaultOutput;
          }
        // if the stack is on the other dps/support, player doesn't have to do anything
        // TODO: Could return an infoTexts indicating the bait with the stack needs to swap?
        if (
          (myRole === 'dps' && stackRole === 'dps') ||
          (myRole === 'healer' && stackRole === 'tank') ||
          (myRole === 'tank' && stackRole === 'healer')
        )
          return defaultOutput;
        // if the stack is on the other role, the player may have to swap
        // but we don't know which DPS is the melee (for tank swap) or ranged (for healer swap)
        // so we have to leave it up to the player to figure out
        if (myRole === 'healer' || myRole === 'tank')
          return { alertText: output.supportStackOnDpsSwap({ dps: stackName }) };
        else if (myRole === 'dps' && stackRole === 'healer')
          return { alertText: output.dpsStackOnHealerSwap({ healer: stackName }) };
        else if (myRole === 'dps' && stackRole === 'tank')
          return { alertText: output.dpsStackOnTankSwap({ tank: stackName }) };
        return defaultOutput;
      },
    },
    {
      id: 'FRU P4 Darklit Spirit Taker',
      type: 'StartsUsing',
      netRegex: { id: '9D60', source: 'Oracle of Darkness', capture: false },
      condition: (data) => data.phase === 'p4-dld',
      delaySeconds: 0.5,
      durationSeconds: 2,
      response: Responses.spread('alert'),
    },
    {
      id: 'FRU P4 Hallowed Wings',
      type: 'StartsUsing',
      netRegex: { id: ['9D23', '9D24'], source: 'Usurper of Frost' },
      condition: (data) => data.phase === 'p4-dld',
      delaySeconds: 1,
      infoText: (_data, matches, output) => {
        const dir = matches.id === '9D23' ? 'east' : 'west';
        return output.combo({ dir: output[dir](), stacks: output.stacks() });
      },
      outputStrings: {
        combo: {
          en: '${dir} => ${stacks}',
        },
        east: Outputs.east,
        west: Outputs.west,
        stacks: Outputs.stacks,
      },
    },
    // ***** Crystallize Time *****
    {
      id: 'FRU P4 Crystallize Time',
      type: 'StartsUsing',
      netRegex: { id: '9D6A', source: 'Oracle of Darkness', capture: false },
      delaySeconds: 3,
      durationSeconds: 7,
      response: Responses.bigAoe(),
    },
    // For Crystallize Time, we can determine redWind (x2), blueWater, blueUnholy, and
    // blueEruption from a single debuff. But determining redIce (x2) and blueIce requires multiple
    // debuffs. We need to collect both redIces and redWinds to name the other player.
    {
      id: 'FRU P4 Crystallize Time Debuff Collect',
      type: 'GainsEffect',
      netRegex: { effectId: Object.keys(ctDebuffMap) },
      condition: (data) => data.phase === 'p4-ct',
      run: (data, matches) => {
        const debuff = ctDebuffMap[matches.effectId];
        if (!debuff)
          return;
        if (isCTCollectDebuff(debuff))
          data.p4CTDebuffs[debuff].push(matches.target);
        // we're done collecting, so we only care about personal debuffs now
        if (data.me !== matches.target)
          return;
        if (debuff === 'wind')
          data.p4CTMyRole = 'redWind';
        else if (debuff === 'water')
          data.p4CTMyRole = 'blueWater';
        else if (debuff === 'unholy')
          data.p4CTMyRole = 'blueUnholy';
        else if (debuff === 'eruption')
          data.p4CTMyRole = 'blueEruption';
        // if redIce/blueIce, data.p4CTMyRole gets set in the Debuff trigger below.
      },
    },
    // Run once after collects are done; determine redIce/blueIce.
    {
      id: 'FRU P4 Crystallize Time Debuff',
      type: 'GainsEffect',
      netRegex: { effectId: Object.keys(ctDebuffMap), capture: false },
      condition: (data) => data.phase === 'p4-ct',
      delaySeconds: 0.4,
      durationSeconds: 8,
      suppressSeconds: 1,
      infoText: (data, _matches, output) => {
        const debuff = data.p4CTMyRole;
        if (debuff === 'redWind') {
          const partner = data.party.member(data.p4CTDebuffs.wind.filter((p) => p !== data.me)[0]);
          data.p4CTPartnerRole = partner.role;
          return output.comboText({ debuff: output.redWind(), player: partner.toString() });
        }
        // if debuff is undefined, player has redIce or blueIce, and we need to determine which.
        if (debuff === undefined) {
          if (!data.p4CTDebuffs.ice.includes(data.me))
            return output.text({ debuff: output.unknown() });
          if (data.p4CTDebuffs.blue.includes(data.me)) {
            data.p4CTMyRole = 'blueIce';
            return output.text({ debuff: output.blueIce() });
          }
          if (data.p4CTDebuffs.red.includes(data.me)) {
            data.p4CTMyRole = 'redIce';
            const partner = data.party.member(
              data.p4CTDebuffs.ice
                .filter((p) => p !== data.me)
                .filter((p) => data.p4CTDebuffs.red.includes(p))[0],
            );
            data.p4CTPartnerRole = partner.role;
            return output.comboText({ debuff: output.redIce(), player: partner.toString() });
          }
          // Fallthrough, should never happen.
          return output.text({ debuff: output.unknown() });
        }
        return output.text({ debuff: output[debuff]() });
      },
      outputStrings: {
        text: {
          en: '${debuff} on You',
        },
        comboText: {
          en: '${debuff} (w/ ${player})',
        },
        redIce: {
          en: 'Red Ice',
        },
        redWind: {
          en: 'Wind/Aero',
        },
        blueIce: {
          en: 'Blue Ice',
        },
        blueWater: {
          en: 'Water (stack)',
        },
        blueUnholy: {
          en: 'Unholy (stack)',
        },
        blueEruption: {
          en: 'Eruption (spread)',
        },
        unknown: Outputs.unknown,
      },
    },
    {
      id: 'FRU P4 Crystallize Time Stoplight Collect',
      type: 'AddedCombatant',
      netRegex: { npcBaseId: '17837' },
      condition: (data) => data.phase === 'p4-ct',
      run: (data, matches) => data.p4CTStoplights[matches.id] = matches,
    },
    {
      id: 'FRU P4 Crystallize Time Initial Position',
      type: 'Tether',
      // Boss always tethers the N/S stoplights yellow (fast), and then either
      // the NE/SW or NW/SE pair are purple (slow).  We only need the northern purple stoplight.
      netRegex: { id: '0085' },
      condition: (data) => data.phase === 'p4-ct' && data.triggerSetConfig.ct === 'earlyPopSouth',
      durationSeconds: 9,
      alertText: (data, matches, output) => {
        const id = matches.sourceId;
        const stoplight = data.p4CTStoplights[id];
        if (stoplight === undefined)
          return;
        const x = parseFloat(stoplight.x);
        const y = parseFloat(stoplight.y);
        const spreadDirNum = Directions.xyTo8DirNum(x, y, centerX, centerY);
        if (spreadDirNum !== 1 && spreadDirNum !== 7)
          return;
        const spreadDir = Directions.output8Dir[spreadDirNum] ?? 'unknown';
        const stackDir = Directions.output8Dir[(spreadDirNum + 4) % 8] ?? 'unknown';
        const debuff = data.p4CTMyRole;
        const role = data.role;
        if (!debuff)
          return;
        if (debuff.startsWith('blue')) {
          const dirStr = debuff === 'blueEruption' ? output[spreadDir]() : output[stackDir]();
          const mechStr = debuff === 'blueEruption' ? output.spread() : output.stack();
          return output.blue({ mech: mechStr, dir: dirStr });
        }
        // For redIce and redWind, we can't determine same-role swap priorities, so we can only give a
        // single directional output if we *know* no swap is required.  Otherwise, call both dirs.
        if (debuff === 'redIce') {
          const comboDirStr = `${output['dirE']()} / ${output['dirW']()}`;
          const sameDebuffRole = data.p4CTPartnerRole;
          const partyStackDirStr = output.partyStack({ dir: output[stackDir]() });
          if (sameDebuffRole === undefined || role === sameDebuffRole)
            return output.redIce({ dir: comboDirStr, followup: partyStackDirStr });
          let myDirNum;
          if (role === 'dps') // always east if T/H has other redIce
            myDirNum = 2;
          else if (role === 'healer') // always west if T/D has other redIce
            myDirNum = 6;
          else if (sameDebuffRole === 'dps') // tank stays west
            myDirNum = 6;
          // tank + healer, tank flexes east
          else
            myDirNum = 2;
          const myDirStr = output[Directions.output8Dir[myDirNum] ?? 'unknown']();
          // if the redIce player is adjacent to the eruption player, they move north after
          const followupStr = Math.abs(myDirNum - spreadDirNum) === 1
            ? output.stackNorth()
            : output.dodgeSouth();
          return output.redIce({ dir: myDirStr, followup: followupStr });
        }
        if (debuff === 'redWind') {
          const comboDirStr = `${output['dirSE']()} / ${output['dirSW']()}`;
          const sameDebuffRole = data.p4CTPartnerRole;
          if (sameDebuffRole === undefined || role === sameDebuffRole)
            return comboDirStr;
          let myDirNum;
          if (role === 'dps') // always SE if T/H has other redWind
            myDirNum = 3;
          else if (role === 'healer') // always SW if T/D has other redWind
            myDirNum = 5;
          else if (sameDebuffRole === 'dps') // tank stays SW
            myDirNum = 5;
          // tank + healer, tank flexes SE
          else
            myDirNum = 3;
          return output[Directions.output8Dir[myDirNum] ?? 'unknown']();
        }
        return output.unknown();
      },
      outputStrings: {
        blue: {
          en: '${mech} (${dir})',
        },
        redIce: {
          en: '${dir} ${followup}',
        },
        dodgeSouth: {
          en: '(dodge S after)',
        },
        stackNorth: {
          en: '(stack N after)',
        },
        // used if there is a role-flex and we don't know whether they are E or W.
        partyStack: {
          en: '(party stack is ${dir})',
        },
        spread: Outputs.spread,
        stack: Outputs.getTogether,
        unknown: Outputs.unknown,
        ...Directions.outputStrings8Dir,
      },
    },
    {
      id: 'FRU P4 Crystallize Time Blue Cleanse',
      type: 'Ability',
      netRegex: { id: '9D55', capture: false },
      condition: (data) => data.phase === 'p4-ct',
      delaySeconds: 2,
      durationSeconds: 8,
      suppressSeconds: 1,
      infoText: (data, _matches, output) => {
        const debuff = data.p4CTMyRole;
        if (!debuff)
          return;
        const isEarlyPopS = data.triggerSetConfig.ct === 'earlyPopSouth';
        if (debuff.startsWith('blue'))
          return isEarlyPopS ? output.cleanseSpot({ spot: output[debuff]() }) : output.cleanse();
        return output.avoidCleanse();
      },
      outputStrings: {
        cleanseSpot: {
          en: 'Cleanse: ${spot}',
        },
        cleanse: {
          en: 'Cleanse',
        },
        avoidCleanse: {
          en: 'Avoid cleanse puddles',
        },
        blueWater: Directions.outputStrings8Dir.dirSE,
        blueUnholy: Directions.outputStrings8Dir.dirE,
        blueEruption: Directions.outputStrings8Dir.dirW,
        blueIce: Directions.outputStrings8Dir.dirSW,
      },
    },
    {
      id: 'FRU P4 Crystallize Time Tidal Light Collect',
      type: 'StartsUsing',
      netRegex: { id: '9D3B' },
      condition: (data) => data.phase === 'p4-ct',
      run: (data, matches) => {
        const x = parseFloat(matches.x);
        const y = parseFloat(matches.y);
        const dirNum = Directions.xyTo8DirNum(x, y, centerX, centerY);
        data.p4CTTidalDirs.push(dirNum);
      },
    },
    {
      id: 'FRU P4 Crystallize Time Drop Rewind',
      type: 'GainsEffect',
      netRegex: { effectId: '1070' },
      condition: (data, matches) => data.phase === 'p4-ct' && data.me === matches.target,
      delaySeconds: (_data, matches) => parseFloat(matches.duration) - 8,
      countdownSeconds: 8,
      alertText: (data, _matches, output) => {
        const unknownStr = output.rewind({ spot: output.unknown() });
        if (data.p4CTTidalDirs.length !== 2)
          return unknownStr;
        // re-use findURNorthDirNum() to find the intercard between the two starting Tidal spots
        const intersectDirNum = findURNorthDirNum(data.p4CTTidalDirs);
        if (intersectDirNum === -1)
          return unknownStr;
        const dir = Directions.output8Dir[intersectDirNum];
        if (dir === undefined)
          return unknownStr;
        return output.rewind({ spot: output[dir]() });
      },
      outputStrings: {
        rewind: {
          en: 'Drop Rewind: ${spot}',
        },
        unknown: Outputs.unknown,
        ...Directions.outputStringsIntercardDir,
      },
    },
    {
      id: 'FRU P4 Crystallize Time Spirit Taker',
      type: 'GainsEffect',
      netRegex: { effectId: '994' },
      condition: (data, matches) => data.phase === 'p4-ct' && data.me === matches.target,
      alertText: (_data, _matches, output) => output.spreadAvoid(),
      outputStrings: {
        spreadAvoid: {
          en: 'Spread -- Avoid crystal',
        },
      },
    },
    // ************************
    // P5 -- Pandora
    // ************************
  ],
  timelineReplace: [
    {
      'locale': 'en',
      'replaceText': {
        'Axe Kick/Scythe Kick': 'Axe/Scythe Kick',
        'Shining Armor + Frost Armor': 'Shining + Frost Armor',
        'Sinbound Fire III/Sinbound Thunder III': 'Sinbound Fire/Thunder',
        'Dark Fire III/Unholy Darkness': '(spreads/stack)',
        'Dark Fire III/Dark Blizzard III/Unholy Darkness': '(spreads/donut/stack)',
        'Shadoweye/Dark Water III/Dark Eruption': '(gazes/stack/spreads)',
        'Dark Water III + Hallowed Wings': '(cleave + stacks)',
        'Dark Blizzard III + Dark Eruption + Dark Aero III': '(donut + spread + KBs)',
        'The Path of Darkness + The Path of Light': '(exa-lines)',
      },
    },
    {
      'missingTranslations': true,
      'locale': 'de',
      'replaceSync': {
        'Fatebreaker(?!\')': 'fusioniert(?:e|er|es|en) Ascian',
        'Fatebreaker\'s Image': 'Abbild des fusionierten Ascians',
        'Usurper of Frost': 'Shiva-Mitron',
        'Oracle\'s Reflection': 'Spiegelbild des Orakels',
        'Ice Veil': 'Immerfrost-Kristall',
        'Frozen Mirror': 'Eisspiegel',
        'Holy Light': 'heilig\\[a\\] Licht',
        'Crystal of Darkness': '[^\|]+',
        'Crystal of Light': 'Lichtkristall',
        'Oracle of Darkness': 'Orakel\\[p\\] der Dunkelheit',
        'Fragment of Fate': '[^\|]+',
        'Sorrow\'s Hourglass': 'Sanduhr\\[p\\] der Sorge',
        'Drachen Wanderer': 'Seele\\[p\\] des heiligen Drachen',
        'Pandora': '[^\|]+', // FIXME
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
        'the Path of Darkness': 'Pfad der Dunkelheit',
        'Cruel Path of Light': '[^\|]+',
        'Cruel Path of Darkness': 'Umbrales Prisma',
        'Icecrusher': '[^\|]+',
        'Unmitigated Explosion': 'Detonation',
        'Solemn Charge': 'Wütende Durchbohrung',
        'Bow Shock': 'Schockpatrone',
        'Brightfire': 'Lichtflamme',
        'Bound of Faith': 'Sünden-Erdstoß',
        'Edge of Oblivion': '[^\|]+',
        'Mirror, Mirror': 'Spiegelland',
        'Mirror Image': 'Spiegelbild',
        'Darkest Dance': 'Finsterer Tanz',
        'Frost Armor': 'Frostrüstung',
        'Shining Armor': 'Funkelnde Rüstung',
        'Drachen Armor': 'Drachenrüstung',
        'the Path of Light': 'Pfad des Lichts',
        'the House of Light': 'Tsunami des Lichts',
        'Quadruple Slap': 'Quadraschlag',
        'Twin Stillness': 'Zwillingsschwerter der Stille',
        'Twin Silence': 'Zwillingsschwerter der Ruhe',
        'Diamond Dust': 'Diamantenstaub',
        'Icicle Impact': 'Eiszapfen-Schlag',
        'Frigid Stone': 'Eisstein',
        'Frigid Needle': 'Eisnadel',
        'Axe Kick': 'Axttritt',
        '(?<!Reflected )Scythe Kick': 'Abwehrtritt',
        'Reflected Scythe Kick': 'Spiegelung: Abwehrtritt',
        'Heavenly Strike': 'Himmelszorn',
        'Sinbound Holy': 'Sünden-Sanctus',
        'Hallowed Ray': 'Heiliger Strahl',
        'Light Rampant': 'Überflutendes Licht',
        'Bright Hunger': 'Erosionslicht',
        'Inescapable Illumination': 'Expositionslicht',
        'Refulgent Fate': 'Fluch des Lichts',
        'Lightsteep': 'Exzessives Licht',
        'Powerful Light': 'Entladenes Licht',
        'Luminous Hammer': 'Gleißende Erosion',
        'Burst': 'Einschlag',
        'Banish III(?! )': 'Verbannga',
        'Banish III Divided': 'Geteiltes Verbannga',
        'Absolute Zero': 'Absoluter Nullpunkt',
        'Swelling Frost': 'Frostwoge',
        'Junction': 'Kopplung',
        'Hallowed Wings': 'Heilige Schwingen',
        'Wings Dark and Light': '[^\|]+',
        'Polarizing Paths': '[^\|]+',
        'Sinbound Meltdown': 'Sündenschmelze',
        'Sinbound Fire(?! )': 'Sünden-Feuer',
        'Akh Rhai': 'Akh Rhai',
        'Darklit Dragonsong': '[^\|]+',
        'Crystallize Time': '[^\|]+',
        'Longing of the Lost': 'Heiliger Drache',
        'Joyless Dragonsong': 'Drachenlied der Verzweiflung',
        'Materialization': 'Konkretion',
        'Akh Morn': 'Akh Morn',
        'Morn Afah': 'Morn Afah',
        'Tidal Light': 'Welle des Lichts',
        'Hiemal Storm': 'Hiemaler Sturm',
        'Hiemal Ray': 'Hiemaler Strahl',
        'Sinbound Blizzard III': 'Sünden-Eisga',
        'Endless Ice Age': 'Lichtflut',
        'Depths of Oblivion': '[^\|]+',
        'Memory Paradox': '[^\|]+',
        'Paradise Lost': 'Verlorenes Paradies',
        'Hell\'s Judgment': 'Höllenurteil',
        'Ultimate Relativity': 'Fatale Relativität',
        'Return': 'Rückführung',
        'Return IV': 'Giga-Rückführung',
        'Spell-in-Waiting Refrain': 'Inkantatische Verzögerung',
        'Dark Water III': 'Dunkel-Aquaga',
        'Dark Eruption': 'Dunkle Eruption',
        'Dark Fire III': 'Dunkel-Feuga',
        'Unholy Darkness': 'Unheiliges Dunkel',
        'Shadoweye': 'Schattenauge',
        'Dark Blizzard III': 'Dunkel-Eisga',
        'Dark Aero III': 'Dunkel-Windga',
        'Quietus': 'Quietus',
        'Shockwave Pulsar': 'Schockwellenpulsar',
        'Somber Dance': 'Düsterer Tanz',
        'Shell Crusher': 'Hüllenbrecher',
        'Spirit Taker': 'Geistesdieb',
        'Black Halo': 'Geschwärzter Schein',
        'Speed': 'Geschwindigkeit',
        'Quicken': 'Schnell',
        'Slow': 'Gemach',
        'Apocalypse': 'Apokalypse',
        'Maelstrom': 'Mahlstrom',
        'Memory\'s End': 'Ende der Erinnerungen',
        'Fulgent Blade': '[^\|]+',
        'Polarizing Strikes': '[^\|]+',
        'Paradise Regained': 'Wiedergewonnenes Paradies',
        'Twin Poles': '[^\|]+',
        'Pandora\'s Box': '[^\|]+',
        'Cyckonic Break': 'Zyklon-Brecher',
        'Fated Burn Mark': 'Todesmal',
      },
    },
    {
      'missingTranslations': true,
      'locale': 'fr',
      'replaceSync': {
        'Fatebreaker(?!\')': 'Sabreur de destins',
        'Fatebreaker\'s Image': 'double du Sabreur de destins',
        'Usurper of Frost': 'Shiva-Mitron',
        'Oracle\'s Reflection': 'reflet de la prêtresse',
        'Ice Veil': 'bloc de glaces éternelles',
        'Frozen Mirror': 'miroir de glace',
        'Holy Light': 'lumière sacrée',
        'Crystal of Darkness': '[^\|]+',
        'Crystal of Light': 'cristal de Lumière',
        'Oracle of Darkness': 'prêtresse des Ténèbres',
        'Fragment of Fate': '[^\|]+',
        'Sorrow\'s Hourglass': 'sablier de chagrin',
        'Drachen Wanderer': 'esprit du Dragon divin',
        'Pandora': '[^\|]+', // FIXME
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
        'the Path of Darkness': 'Voie de Ténèbres',
        'Cruel Path of Light': '[^\|]+',
        'Cruel Path of Darkness': 'Déluge de Ténèbres',
        'Icecrusher': '[^\|]+',
        'Unmitigated Explosion': 'Explosion',
        'Solemn Charge': 'Charge perçante',
        'Bow Shock': 'Arc de choc',
        'Brightfire': 'Flammes de Lumière',
        'Bound of Faith': 'Percée illuminée',
        'Edge of Oblivion': '[^\|]+',
        'Mirror, Mirror': 'Monde des miroirs',
        'Mirror Image': 'Double dans le miroir',
        'Darkest Dance': 'Danse de la nuit profonde',
        'Frost Armor': 'Armure de givre',
        'Shining Armor': 'Armure scintillante',
        'Drachen Armor': 'Armure des dragons',
        'the Path of Light': 'Voie de Lumière',
        'the House of Light': 'Raz-de-lumière',
        'Quadruple Slap': 'Frappe quadruplée',
        'Twin Stillness': 'Entaille de la quiétude',
        'Twin Silence': 'Entaille de la tranquilité',
        'Diamond Dust': 'Poussière de diamant',
        'Icicle Impact': 'Impact de stalactite',
        'Frigid Stone': 'Rocher de glace',
        'Frigid Needle': 'Dards de glace',
        'Axe Kick': 'Jambe pourfendeuse',
        '(?<!Reflected )Scythe Kick': 'Jambe faucheuse',
        'Reflected Scythe Kick': 'Réverbération : Jambe faucheuse',
        'Heavenly Strike': 'Frappe céleste',
        'Sinbound Holy': 'Miracle authentique',
        'Hallowed Ray': 'Rayon Miracle',
        'Light Rampant': 'Débordement de Lumière',
        'Bright Hunger': 'Lumière dévorante',
        'Inescapable Illumination': 'Lumière révélatrice',
        'Refulgent Fate': 'Lien de Lumière',
        'Lightsteep': 'Lumière excédentaire',
        'Powerful Light': 'Explosion sacrée',
        'Luminous Hammer': 'Érosion lumineuse',
        'Burst': 'Explosion',
        'Banish III(?! )': 'Méga Bannissement',
        'Banish III Divided': 'Méga Bannissement fractionné',
        'Absolute Zero': 'Zéro absolu',
        'Swelling Frost': 'Vague de glace',
        'Junction': 'Jonction',
        'Hallowed Wings': 'Aile sacrée',
        'Wings Dark and Light': '[^\|]+',
        'Polarizing Paths': '[^\|]+',
        'Sinbound Meltdown': 'Fusion authentique',
        'Sinbound Fire(?! )': 'Feu authentique',
        'Akh Rhai': 'Akh Rhai',
        'Darklit Dragonsong': '[^\|]+',
        'Crystallize Time': '[^\|]+',
        'Longing of the Lost': 'Esprit du Dragon divin',
        'Joyless Dragonsong': 'Chant de désespoir',
        'Materialization': 'Concrétisation',
        'Akh Morn': 'Akh Morn',
        'Morn Afah': 'Morn Afah',
        'Tidal Light': 'Grand torrent de Lumière',
        'Hiemal Storm': 'Tempête hiémale',
        'Hiemal Ray': 'Rayon hiémal',
        'Sinbound Blizzard III': 'Méga Glace authentique',
        'Endless Ice Age': 'Déluge de Lumière',
        'Depths of Oblivion': '[^\|]+',
        'Memory Paradox': '[^\|]+',
        'Paradise Lost': 'Paradis perdu',
        'Hell\'s Judgment': 'Jugement dernier',
        'Ultimate Relativity': 'Compression temporelle fatale',
        'Return': 'Retour',
        'Return IV': 'Giga Retour',
        'Spell-in-Waiting Refrain': 'Déphasage incantatoire',
        'Dark Water III': 'Méga Eau ténébreuse',
        'Dark Eruption': 'Éruption ténébreuse',
        'Dark Fire III': 'Méga Feu ténébreux',
        'Unholy Darkness': 'Miracle ténébreux',
        'Shadoweye': 'Œil de l\'ombre',
        'Dark Blizzard III': 'Méga Glace ténébreuse',
        'Dark Aero III': 'Méga Vent ténébreux',
        'Quietus': 'Quietus',
        'Shockwave Pulsar': 'Pulsar à onde de choc',
        'Somber Dance': 'Danse du crépuscule',
        'Shell Crusher': 'Broyeur de carapace',
        'Spirit Taker': 'Arracheur d\'esprit',
        'Black Halo': 'Halo de noirceur',
        'Speed': 'Vitesse',
        'Quicken': 'Accélération',
        'Slow': 'Lenteur',
        'Apocalypse': 'Apocalypse',
        'Maelstrom': 'Maelström',
        'Memory\'s End': 'Mort des souvenirs',
        'Fulgent Blade': '[^\|]+',
        'Polarizing Strikes': '[^\|]+',
        'Paradise Regained': 'Paradis retrouvé',
        'Twin Poles': '[^\|]+',
        'Pandora\'s Box': '[^\|]+',
        'Cyckonic Break': 'Brisement cyclonique',
        'Fated Burn Mark': 'Marque de mort explosive',
      },
    },
    {
      'missingTranslations': true,
      'locale': 'ja',
      'replaceSync': {
        'Fatebreaker(?!\')': 'フェイトブレイカー',
        'Fatebreaker\'s Image': 'フェイトブレイカーの幻影',
        'Usurper of Frost': 'シヴァ・ミトロン',
        'Oracle\'s Reflection': '巫女の鏡像',
        'Ice Veil': '永久氷晶',
        'Frozen Mirror': '氷面鏡',
        'Holy Light': '聖なる光',
        'Crystal of Darkness': '闇水晶',
        'Crystal of Light': '光水晶',
        'Oracle of Darkness': '闇の巫女',
        'Fragment of Fate': '未来の欠片',
        'Sorrow\'s Hourglass': '悲しみの砂時計',
        'Drachen Wanderer': '聖竜気',
        'Pandora': 'パンドラ・ミトロン',
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
        'the Path of Darkness': '闇の波動',
        'Cruel Path of Light': '光の重波動',
        'Cruel Path of Darkness': '闇の重波動',
        'Icecrusher': '削氷撃',
        'Unmitigated Explosion': '大爆発',
        'Solemn Charge': 'チャージスラスト',
        'Bow Shock': 'バウショック',
        'Brightfire': '光炎',
        'Bound of Faith': 'シンソイルスラスト',
        'Edge of Oblivion': '忘却の此方',
        'Mirror, Mirror': '鏡の国',
        'Mirror Image': '鏡写し',
        'Darkest Dance': '暗夜の舞踏技',
        'Frost Armor': 'フロストアーマー',
        'Shining Armor': 'ブライトアーマー',
        'Drachen Armor': 'ドラゴンアーマー',
        'the Path of Light': '光の波動',
        'the House of Light': '光の津波',
        'Quadruple Slap': 'クアドラストライク',
        'Twin Stillness': '静寂の双剣技',
        'Twin Silence': '閑寂の双剣技',
        'Diamond Dust': 'ダイアモンドダスト',
        'Icicle Impact': 'アイシクルインパクト',
        'Frigid Stone': 'アイスストーン',
        'Frigid Needle': 'アイスニードル',
        'Axe Kick': 'アクスキック',
        '(?<!Reflected )Scythe Kick': 'サイスキック',
        'Reflected Scythe Kick': 'ミラーリング・サイスキック',
        'Heavenly Strike': 'ヘヴンリーストライク',
        'Sinbound Holy': 'シンホーリー',
        'Hallowed Ray': 'ホーリーレイ',
        'Light Rampant': '光の暴走',
        'Bright Hunger': '浸食光',
        'Inescapable Illumination': '曝露光',
        'Refulgent Fate': '光の呪縛',
        'Lightsteep': '過剰光',
        'Powerful Light': '光爆',
        'Luminous Hammer': 'ルミナスイロード',
        'Burst': '爆発',
        'Banish III(?! )': 'バニシュガ',
        'Banish III Divided': 'ディバイデッド・バニシュガ',
        'Absolute Zero': '絶対零度',
        'Swelling Frost': '凍波',
        'Junction': 'ジャンクション',
        'Hallowed Wings': 'ホーリーウィング',
        'Wings Dark and Light': '光と闇の片翼',
        'Polarizing Paths': '星霊の剣',
        'Sinbound Meltdown': 'シンメルトン',
        'Sinbound Fire(?! )': 'シンファイア',
        'Akh Rhai': 'アク・ラーイ',
        'Darklit Dragonsong': '光と闇の竜詩',
        'Crystallize Time': '時間結晶',
        'Longing of the Lost': '聖竜気',
        'Joyless Dragonsong': '絶望の竜詩',
        'Materialization': '具象化',
        'Akh Morn': 'アク・モーン',
        'Morn Afah': 'モーン・アファー',
        'Tidal Light': '光の大波',
        'Hiemal Storm': 'ハイマルストーム',
        'Hiemal Ray': 'ハイマルレイ',
        'Sinbound Blizzard III': 'シンブリザガ',
        'Endless Ice Age': '光の氾濫',
        'Depths of Oblivion': '忘却の彼方',
        'Memory Paradox': 'メモリー·パラドックス',
        'Paradise Lost': '失楽園',
        'Hell\'s Judgment': 'ヘル・ジャッジメント',
        'Ultimate Relativity': '時間圧縮・絶',
        'Return': 'リターン',
        'Return IV': 'リタンジャ',
        'Spell-in-Waiting Refrain': 'ディレイスペル・リフレイン',
        'Dark Water III': 'ダークウォタガ',
        'Dark Eruption': 'ダークエラプション',
        'Dark Fire III': 'ダークファイガ',
        'Unholy Darkness': 'ダークホーリー',
        'Shadoweye': 'シャドウアイ',
        'Dark Blizzard III': 'ダークブリザガ',
        'Dark Aero III': 'ダークエアロガ',
        'Quietus': 'クワイタス',
        'Shockwave Pulsar': 'ショックウェーブ・パルサー',
        'Somber Dance': '宵闇の舞踏技',
        'Shell Crusher': 'シェルクラッシャー',
        'Spirit Taker': 'スピリットテイカー',
        'Black Halo': 'ブラックヘイロー',
        'Speed': 'スピード',
        'Quicken': 'クイック',
        'Slow': 'スロウ',
        'Apocalypse': 'アポカリプス',
        'Maelstrom': 'メイルシュトローム',
        'Memory\'s End': 'エンド・オブ・メモリーズ',
        'Fulgent Blade': '光塵の剣',
        'Polarizing Strikes': '星霊の剣',
        'Paradise Regained': 'パラダイスリゲイン',
        'Twin Poles': '光と闇の双剣技',
        'Pandora\'s Box': 'パンドラの櫃',
        'Cyckonic Break': 'サイクロニックブレイク',
        'Fated Burn Mark': '死爆印',
      },
    },
  ],
});
