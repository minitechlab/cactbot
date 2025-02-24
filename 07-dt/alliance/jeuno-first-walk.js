const prishePunchDelays = [
  '9FE8',
  '9FF6',
];
Options.Triggers.push({
  id: 'Jeuno: The First Walk',
  zoneId: ZoneId.JeunoTheFirstWalk,
  timelineFile: 'jeuno-first-walk.txt',
  initData: () => {
    return {
      spikeTargets: [],
      splitterTargets: [],
      burningKeepActive: false,
      burningBattlementsActive: false,
      seenNebula: false,
      rageTargets: [],
    };
  },
  triggers: [
    {
      id: 'Jeuno First Walk Prishe Banishga',
      type: 'StartsUsing',
      netRegex: { id: '9FE7', source: 'Prishe Of The Distant Chains', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'Jeuno First Walk Prishe Knuckle Sandwich',
      type: 'StartsUsing',
      netRegex: {
        id: ['9FE8', '9FE9', '9FEA'],
        source: 'Prishe Of The Distant Chains',
        capture: true,
      },
      // The player is intended to count the number of "wait for it" emotes from Prishe.
      // Delay to match how many she would call per ability.
      // (It's not necessary to delay past 6 seconds,
      // as at that point the player knows it's 2/3 emotes)
      // 9FE8: Inner circle, 1x emote
      // 9FE9: Mid circle, 2x emote
      // 9FEA: Big circle, 3x emote, but its delay is the same as
      delaySeconds: (_data, matches) => {
        const delay = prishePunchDelays.includes(matches.id) ? 4 : 6;
        return delay;
      },
      durationSeconds: (_data, matches) => {
        // The total cast time is 11.7 seconds
        const duration = prishePunchDelays.includes(matches.id) ? 7.7 : 5.7;
        return duration;
      },
      infoText: (_data, matches, output) => {
        if (matches.id === '9FE8')
          return output.smallCircle();
        if (matches.id === '9FE9')
          return output.midCircle();
        if (matches.id === '9FEA')
          return output.bigCircle();
        return output.unknownCircle();
      },
      outputStrings: {
        smallCircle: {
          en: 'Outside small circle => in',
          ja: '円内側 外から中',
          cn: '内环外 => 进',
        },
        midCircle: {
          en: 'Outside mid circle => in',
          ja: '円真ん中 外から中',
          cn: '中环外 => 进',
        },
        bigCircle: {
          en: 'Outside big circle => in',
          ja: '円外側 外から中',
          cn: '外环外 => 进',
        },
        unknownCircle: Outputs.unknown,
      },
    },
    {
      id: 'Jeuno First Walk Prishe Nullifying Dropkick',
      type: 'HeadMarker',
      netRegex: { id: '023A', capture: true },
      response: Responses.sharedTankBuster(),
    },
    {
      id: 'Jeuno First Walk Prishe Banish Storm',
      type: 'Ability',
      netRegex: { id: '9FF2', source: 'Prishe Of The Distant Chains', capture: false },
      alertText: (_data, _matches, output) => output.avoidCircles(),
      outputStrings: {
        avoidCircles: {
          en: 'Avoid radiating circles',
          ja: '放射矢印をよける',
          cn: '躲避步进圆圈',
        },
      },
    },
    {
      id: 'Jeuno First Walk Prishe Holy',
      type: 'HeadMarker',
      netRegex: { id: '00D7', capture: true },
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Jeuno First Walk Prishe Auroral Uppercut',
      type: 'StartsUsing',
      netRegex: {
        id: ['9FF6', '9FF7', '9FF8'],
        source: 'Prishe Of The Distant Chains',
        capture: true,
      },
      // The player is intended to count the number of "wait for it" emotes from Prishe.
      // Delay to match how many she would call per ability.
      // (It's not necessary to delay past 6 seconds,
      // as at that point the player knows it's 2/3 emotes)
      // 9FF6: Short knockback, 1x emote
      // 9FF7: Mid knockback, 2x emote
      // 9FF8: Big knockback, 3x emote
      delaySeconds: (_data, matches) => {
        const delay = prishePunchDelays.includes(matches.id) ? 4 : 6;
        return delay;
      },
      durationSeconds: (_data, matches) => {
        // The total cast time is 11.7 seconds
        const duration = prishePunchDelays.includes(matches.id) ? 7.7 : 5.7;
        return duration;
      },
      infoText: (_data, matches, output) => {
        if (matches.id === '9FF6')
          return output.shortKnockback();
        if (matches.id === '9FF7')
          return output.midKnockback();
        if (matches.id === '9FF8')
          return output.bigKnockback();
        return output.unknownKnockback();
      },
      outputStrings: {
        shortKnockback: {
          en: 'Knockback (short)',
          ja: '近い ノックバック',
          cn: '击退 (短距离)',
        },
        midKnockback: {
          en: 'Knockback (mid)',
          ja: '真ん中 ノックバック',
          cn: '击退 (中距离)',
        },
        bigKnockback: {
          en: 'Knockback (big)',
          ja: '遠い ノックバック',
          cn: '击退 (长距离)',
        },
        unknownKnockback: Outputs.unknown,
      },
    },
    {
      id: 'Jeuno First Walk Prishe Banishga IV',
      type: 'StartsUsing',
      netRegex: { id: '9FFA', source: 'Prishe Of The Distant Chains', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'Jeuno First Walk Prishe Banishga IV Orbs',
      type: 'Ability',
      netRegex: { id: '9FFA', source: 'Prishe Of The Distant Chains', capture: false },
      durationSeconds: 6,
      suppressSeconds: 1,
      alertText: (_data, _matches, output) => output.avoidOrbs(),
      outputStrings: {
        avoidOrbs: {
          en: 'Avoid exploding orbs',
          ja: '爆発する玉をよける',
          cn: '躲开即将爆炸的球',
        },
      },
    },
    {
      // This is self-targeted and the stack point is a tower in the center.
      id: 'Jeuno First Walk Prishe Asuran Fists',
      type: 'StartsUsing',
      netRegex: { id: '9FFC', source: 'Prishe Of The Distant Chains', capture: false },
      durationSeconds: 6,
      response: Responses.stackMarker(),
    },
    {
      id: 'Jeuno First Walk Aquarius Hundred Fists',
      type: 'StartsUsing',
      netRegex: { id: '9EC8', source: 'Aquarius', capture: true },
      response: Responses.interruptIfPossible(),
    },
    {
      id: 'Jeuno First Walk Fafnir Dark Matter Blast',
      type: 'StartsUsing',
      netRegex: { id: '9F96', source: 'Fafnir The Forgotten', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'Jeuno First Walk Fafnir Spike Flail',
      type: 'StartsUsing',
      netRegex: { id: 'A09A', source: 'Fafnir The Forgotten', capture: false },
      durationSeconds: 7,
      response: Responses.goFront(),
    },
    {
      // The cast used here is Offensive Posture.
      id: 'Jeuno First Walk Fafnir Dragon Breath Call',
      type: 'StartsUsing',
      netRegex: { id: '9F6E', source: 'Fafnir The Forgotten', capture: false },
      durationSeconds: 7,
      response: Responses.getUnder(),
    },
    {
      // The cast used here is Offensive Posture.
      // Heading data can be stale on StartsUsing lines,
      // so store off the actual cast instead.
      id: 'Jeuno First Walk Fafnir Dragon Breath Store',
      type: 'Ability',
      netRegex: { id: '9F6E', source: 'Fafnir The Forgotten', capture: true },
      run: (data, matches) => {
        const headingNumber = Directions.hdgTo8DirNum(parseFloat(matches.heading));
        data.dragonBreathFacingNumber = headingNumber;
      },
    },
    {
      id: 'Jeuno First Walk Fafnir Touchdown',
      type: 'StartsUsing',
      netRegex: { id: 'A09C', source: 'Fafnir The Forgotten', capture: false },
      durationSeconds: 7,
      alertText: (data, _matches, output) => {
        if (data.dragonBreathFacingNumber !== undefined) {
          const dirOutputIndex = Directions.outputFrom8DirNum(data.dragonBreathFacingNumber);
          return output.outAtDirection({ safeDir: output[dirOutputIndex]() });
        }
        return output.getOut();
      },
      outputStrings: {
        getOut: Outputs.out,
        outAtDirection: {
          en: 'Get out toward ${safeDir}',
          ja: '${safeDir} 安置',
          cn: '去 ${safeDir} 远离',
        },
        dirN: Outputs.north,
        dirE: Outputs.east,
        dirS: Outputs.south,
        dirW: Outputs.west,
        dirNE: Outputs.dirNE,
        dirSE: Outputs.dirSE,
        dirSW: Outputs.dirSW,
        dirNW: Outputs.dirNW,
        unknown: Outputs.unknown,
      },
    },
    {
      id: 'Jeuno First Walk Fafnir Baleful Breath',
      type: 'StartsUsing',
      netRegex: { id: '9BF2', source: 'Fafnir The Forgotten', capture: false },
      durationSeconds: 7,
      response: Responses.stackMarker(),
    },
    {
      id: 'Jeuno First Walk Fafnir Sharp Spike Collect',
      type: 'HeadMarker',
      netRegex: { id: '0156', capture: true },
      run: (data, matches) => data.spikeTargets.push(matches.target),
    },
    {
      id: 'Jeuno First Walk Fafnir Sharp Spike Call',
      type: 'StartsUsing',
      netRegex: { id: '9F97', source: 'Fafnir The Forgotten', capture: false },
      delaySeconds: 0.5,
      durationSeconds: 6.5,
      alertText: (data, _matches, output) => {
        if (data.spikeTargets?.includes(data.me))
          return output.cleaveOnYou();
        return output.avoidCleave();
      },
      run: (data) => {
        // Dragon Breath is also deleted here because Sharp Spike
        // consistently follows Dragon Breath,
        // while Touchdown does not.
        data.spikeTargets = [];
        delete data.dragonBreathFacingNumber;
      },
      outputStrings: {
        cleaveOnYou: Outputs.tankCleaveOnYou,
        avoidCleave: Outputs.avoidTankCleaves,
      },
    },
    {
      id: 'Jeuno First Walk Fafnir Horrid Roar Spread',
      type: 'HeadMarker',
      netRegex: { id: '01F3', capture: true },
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Jeuno First Walk Fafnir Absolute Terror',
      type: 'StartsUsing',
      netRegex: { id: '9F8D', source: 'Fafnir The Forgotten', capture: false },
      durationSeconds: 5,
      response: Responses.goSides(),
    },
    {
      id: 'Jeuno First Walk Fafnir Winged Terror',
      type: 'StartsUsing',
      netRegex: { id: '9F8F', source: 'Fafnir The Forgotten', capture: false },
      durationSeconds: 5,
      response: Responses.goMiddle(),
    },
    {
      id: 'Jeuno First Walk Fafnir Hurricane Wing Raidwide',
      type: 'StartsUsing',
      netRegex: { id: '9F71', source: 'Fafnir The Forgotten', capture: false },
      durationSeconds: 7,
      infoText: (_data, _matches, output) => output.outerFirst(),
      outputStrings: {
        outerFirst: {
          en: 'AoE x10',
          ja: 'AoE 10回',
          cn: 'AoE (10次)',
        },
      },
    },
    {
      id: 'Jeuno First Walk Fafnir Hurricane Wing Outer Ring',
      type: 'StartsUsing',
      netRegex: { id: '9F78', source: 'Fafnir The Forgotten', capture: false },
      durationSeconds: 5,
      infoText: (_data, _matches, output) => output.outerFirst(),
      outputStrings: {
        outerFirst: {
          en: 'Rings out to in',
          ja: 'ドーナツへ駆け込む',
          cn: '步进月环 (由外到内)',
        },
      },
    },
    {
      id: 'Jeuno First Walk Fafnir Hurricane Wing Inner Ring',
      type: 'StartsUsing',
      netRegex: { id: '9F7D', source: 'Fafnir The Forgotten', capture: false },
      durationSeconds: 5,
      infoText: (_data, _matches, output) => output.outerFirst(),
      outputStrings: {
        outerFirst: {
          en: 'Rings in to out',
          ja: 'ドーナツの外へ',
          cn: '步进月环 (由内到外)',
        },
      },
    },
    {
      id: 'Jeuno First Walk Sprinkler Mysterious Light',
      type: 'StartsUsing',
      netRegex: { id: 'A2C3', source: 'Sprinkler', capture: true },
      suppressSeconds: 1,
      response: Responses.lookAwayFromSource(),
    },
    {
      id: 'Jeuno First Walk Despot Scrapline Storm',
      type: 'StartsUsing',
      netRegex: { id: '9ECA', source: 'Despot', capture: false },
      response: Responses.getOutThenIn(),
    },
    {
      id: 'Jeuno First Walk Despot Panzerfaust',
      type: 'StartsUsing',
      netRegex: { id: 'A2E2', source: 'Despot', capture: true },
      response: Responses.interruptIfPossible(),
    },
    {
      // We could call this more easily with the Hero debuffs,
      // but those are delayed by about four seconds compared to the initial tethers.
      id: 'Jeuno First Walk Angels Decisive Battle',
      type: 'Tether',
      netRegex: { id: '012B', capture: true },
      condition: (data, matches) => {
        return matches.source === data.me || matches.target === data.me;
      },
      alertText: (_data, matches, output) => {
        if (matches.sourceId.startsWith('4'))
          return output.attackAngel({ angel: matches.source });
        if (matches.targetId.startsWith('4'))
          return output.attackAngel({ angel: matches.target });
        return output.unknownAngel();
      },
      outputStrings: {
        attackAngel: {
          en: 'Attack ${angel}',
          ja: '${angel} を殴る',
          cn: '攻击 ${angel}',
        },
        unknownAngel: {
          en: 'Attack angel with matching buff',
          ja: 'バフのついた敵を殴る',
          cn: '攻击对应Buff的Boss',
        },
      },
    },
    {
      id: 'Jeuno First Walk Angels CloudSplitter Collect',
      type: 'HeadMarker',
      netRegex: { id: '01D0', capture: true },
      run: (data, matches) => data.splitterTargets.push(matches.target),
    },
    {
      id: 'Jeuno First Walk Angels CloudSplitter Call',
      type: 'StartsUsing',
      netRegex: { id: 'A076', source: 'Ark Angel MR', capture: false },
      delaySeconds: 0.5,
      suppressSeconds: 1,
      alertText: (data, _matches, output) => {
        if (data.splitterTargets?.includes(data.me))
          return output.cleaveOnYou();
        return output.avoidCleave();
      },
      run: (data) => data.splitterTargets = [],
      outputStrings: {
        cleaveOnYou: Outputs.tankCleaveOnYou,
        avoidCleave: Outputs.avoidTankCleaves,
      },
    },
    {
      id: 'Jeuno First Walk Angels Gekko',
      type: 'StartsUsing',
      netRegex: { id: 'A07A', source: 'Ark Angel GK', capture: true },
      durationSeconds: (_data, matches) => parseFloat(matches.castTime),
      response: Responses.lookAwayFromSource(),
    },
    {
      id: 'Jeuno First Walk Angels Meteor',
      type: 'StartsUsing',
      netRegex: { id: 'A08A', source: 'Ark Angel TT', capture: true },
      durationSeconds: 5,
      response: Responses.interruptIfPossible('alarm'),
    },
    {
      id: 'Jeuno First Walk Spiral Finish',
      type: 'StartsUsing',
      netRegex: { id: 'A06C', source: 'Ark Angel MR', capture: false },
      delaySeconds: 5.5,
      response: Responses.knockback(),
    },
    {
      id: 'Jeuno First Walk Angels Havoc Spiral Clockwise',
      type: 'HeadMarker',
      netRegex: { id: '00A7', capture: false },
      durationSeconds: 5,
      infoText: (_data, _matches, output) => output.clockwise(),
      outputStrings: {
        clockwise: Outputs.clockwise,
      },
    },
    {
      id: 'Jeuno First Walk Angels Havoc Spiral Counterclockwise',
      type: 'HeadMarker',
      netRegex: { id: '00A8', capture: false },
      durationSeconds: 5,
      infoText: (_data, _matches, output) => output.counterclockwise(),
      outputStrings: {
        counterclockwise: Outputs.counterclockwise,
      },
    },
    {
      id: 'Jeuno First Walk Angels Dragonfall',
      type: 'StartsUsing',
      netRegex: { id: 'A07E', source: 'Ark Angel GK', capture: false },
      alertText: (_data, _matches, output) => output.stacks(),
      outputStrings: {
        stacks: Outputs.stacks,
      },
    },
    {
      id: 'Jeuno First Walk Angels Arrogance Incarnate',
      type: 'HeadMarker',
      netRegex: { id: '0131', capture: true },
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'Jeuno First Walk Angels Guillotine',
      type: 'StartsUsing',
      netRegex: { id: 'A067', source: 'Ark Angel TT', capture: false },
      durationSeconds: 10,
      response: Responses.getBehind(),
    },
    {
      id: 'Jeuno First Walk Angels Dominion Slash',
      type: 'StartsUsing',
      netRegex: { id: 'A085', source: 'Ark Angel EV', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'Jeuno First Walk Angels Holy',
      type: 'StartsUsing',
      netRegex: { id: 'A089', source: 'Ark Angel EV', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'Jeuno First Walk Angels Proud Palisade',
      type: 'AddedCombatant',
      netRegex: { npcBaseId: '18260', capture: false },
      alertText: (_data, _matches, output) => output.killShield(),
      outputStrings: {
        killShield: {
          en: 'Kill Ark Shield',
          ja: '盾持ちを殴る',
          cn: '击杀方舟之盾',
        },
      },
    },
    {
      id: 'Jeuno First Walk Angels Mijin Gakure',
      type: 'LosesEffect',
      netRegex: { effectId: '1140', capture: false },
      condition: (data) => data.CanSilence(),
      // We use bare text for this since the canned interruption responses
      // assume a source match rather than a target.
      alarmText: (_data, _matches, output) => output.interruptHM(),
      outputStrings: {
        interruptHM: {
          en: 'Interrupt HM',
          ja: 'HMへ中断',
          cn: '打断方舟天使HM',
        },
      },
    },
    {
      id: 'Jeuno First Walk Angels Chasing Tether',
      type: 'Tether',
      netRegex: { id: '0125', capture: true },
      // Because tether sources and targets are not 100% consistent, check both.
      condition: (data, matches) => [matches.source, matches.target].includes(data.me),
      durationSeconds: 10,
      alertText: (_data, _matches, output) => output.runFromTether(),
      outputStrings: {
        runFromTether: {
          en: 'Chasing tether -- run away!',
          ja: '線が付いた敵から逃げる',
          cn: '追踪连线 -- 快跑!',
        },
      },
    },
    {
      id: 'Jeuno First Walk Angels Critical Reaver',
      type: 'StartsUsing',
      netRegex: { id: 'A13B', source: 'Ark Angel HM', capture: true },
      durationSeconds: 5,
      response: Responses.interruptIfPossible('alarm'),
    },
    {
      // 9F3E slashes left then right. 9F3F slashes right then left.
      id: 'Jeuno First Walk Shadow Lord Giga Slash',
      type: 'StartsUsing',
      netRegex: { id: ['9F3E', '9F3F'], source: 'Shadow Lord', capture: true },
      durationSeconds: 10,
      alertText: (_data, matches, output) => {
        if (matches.id === '9F3E')
          return output.rightThenLeft();
        return output.leftThenRight();
      },
      outputStrings: {
        leftThenRight: Outputs.leftThenRight,
        rightThenLeft: Outputs.rightThenLeft,
      },
    },
    {
      // 9F3E slashes left then right. 9F3F slashes right then left.
      id: 'Jeuno First Walk Lordly Shadow Giga Slash',
      type: 'StartsUsing',
      netRegex: { id: ['9F3E', '9F3F'], source: 'Lordly Shadow', capture: true },
      durationSeconds: 10,
      alertText: (_data, matches, output) => {
        if (matches.id === '9F3E')
          return output.rightThenLeftShadow();
        return output.leftThenRightShadow();
      },
      outputStrings: {
        leftThenRightShadow: {
          en: 'Left => right of shadow',
          ja: '分身 左 => 右',
          cn: '分身 左 => 右',
        },
        rightThenLeftShadow: {
          en: 'Right => left of shadow',
          ja: '分身 右 => 左',
          cn: '分身 右 => 左',
        },
      },
    },
    {
      id: 'Jeuno First Walk Shadow Lord Umbra Smash',
      type: 'StartsUsing',
      netRegex: { id: '9F5B', source: 'Shadow Lord', capture: false },
      durationSeconds: 5,
      infoText: (_data, _matches, output) => output.avoidRadiatingLines(),
      outputStrings: {
        avoidRadiatingLines: {
          en: 'Avoid Radiating Lines',
          ja: '移動する直線をよける',
          cn: '躲避步进直线',
        },
      },
    },
    {
      id: 'Jeuno First Walk Shadow Lord Flames Of Hatred',
      type: 'StartsUsing',
      netRegex: { id: '9F69', source: 'Shadow Lord', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'Jeuno First Walk Shadow Lord Cthonic Fury',
      type: 'StartsUsing',
      netRegex: { id: ['9F4A', '9F4B'], source: 'Shadow Lord', capture: false },
      durationSeconds: 6,
      response: Responses.aoe(),
    },
    {
      id: 'Jeuno First Walk Shadow Lord Burning Battlements',
      type: 'StartsUsing',
      netRegex: { id: '9F4F', source: 'Shadow Lord', capture: false },
      run: (data) => data.burningBattlementsActive = true,
    },
    {
      id: 'Jeuno First Walk Shadow Lord Burning Keep',
      type: 'StartsUsing',
      netRegex: { id: '9F4E', source: 'Shadow Lord', capture: false },
      run: (data) => data.burningKeepActive = true,
    },
    {
      id: 'Jeuno First Walk Shadow Lord Burning Moat',
      type: 'StartsUsing',
      netRegex: { id: '9F4D', source: 'Shadow Lord', capture: false },
      delaySeconds: 0.2,
      durationSeconds: 6,
      suppressSeconds: 1,
      infoText: (data, _matches, output) => {
        if (data.burningBattlementsActive)
          return output.moatWithBattlements();
        if (data.burningKeepActive)
          return output.moatWithKeep();
        return output.getInCircles();
      },
      run: (data) => {
        data.burningBattlementsActive = false;
        data.burningKeepActive = false;
      },
      outputStrings: {
        getInCircles: {
          en: 'Get in circles',
          ja: '円の内側',
          cn: '去圆圈内',
        },
        moatWithBattlements: {
          en: 'In circles + Close to boss',
          ja: '円の内側 + ボスの近く',
          cn: '圆圈内 + 靠近Boss',
        },
        moatWithKeep: {
          en: 'In circles + Away from boss',
          ja: '円の内側 + ボスから離れて',
          cn: '圆圈内 + 远离Boss',
        },
      },
    },
    {
      id: 'Jeuno First Walk Shadow Lord Burning Court',
      type: 'StartsUsing',
      netRegex: { id: '9F4C', source: 'Shadow Lord', capture: false },
      delaySeconds: 0.2,
      durationSeconds: 6,
      suppressSeconds: 1,
      infoText: (data, _matches, output) => {
        if (data.burningBattlementsActive)
          return output.courtWithBattlements();
        if (data.burningKeepActive)
          return output.courtWithKeep();
        return output.outOfCircles();
      },
      outputStrings: {
        outOfCircles: {
          en: 'Out of circles',
          ja: '円の外側',
          cn: '去圆圈外',
        },
        courtWithBattlements: {
          en: 'Out of circles + close to boss',
          ja: '円の外側 + ボスの近く',
          cn: '圆圈外 + 靠近Boss',
        },
        courtWithKeep: {
          en: 'Out of circles + away from boss',
          ja: '円の外側 + ボスから離れて',
          cn: '圆圈外 + 远离Boss',
        },
      },
    },
    {
      id: 'Jeuno First Walk Shadow Lord Implosion',
      type: 'StartsUsing',
      netRegex: { id: ['9F44', '9F45'], source: 'Shadow Lord', capture: true },
      durationSeconds: 7,
      alertText: (_data, matches, output) => {
        if (matches.id === '9F44')
          return output.rightAndOut();
        return output.leftAndOut();
      },
      outputStrings: {
        leftAndOut: {
          en: 'Go left + get out',
          ja: '離れて 左',
          cn: '左 + 远离',
        },
        rightAndOut: {
          en: 'Go right + get out',
          ja: '離れて 右',
          cn: '右 + 远离',
        },
      },
    },
    {
      id: 'Jeuno First Walk Lordly Shadow Implosion',
      type: 'StartsUsing',
      netRegex: { id: ['9F44', '9F45'], source: 'Lordly Shadow', capture: true },
      delaySeconds: 3,
      durationSeconds: 7,
      alertText: (_data, matches, output) => {
        if (matches.id === '9F44')
          return output.rightAndOut();
        return output.leftAndOut();
      },
      outputStrings: {
        leftAndOut: {
          en: 'Left of shadow + get out',
          ja: '分身 離れて 左',
          cn: '分身 左 + 远离',
        },
        rightAndOut: {
          en: 'Right of shadow + get out',
          ja: '分身 離れて 右',
          cn: '分身 右 + 远离',
        },
      },
    },
    {
      id: 'Jeuno Firest Walk Shadow Lord Dark Nebula',
      type: 'StartsUsing',
      netRegex: { id: '9F50', source: 'Shadow Lord', capture: false },
      alertText: (data, _matches, output) => {
        if (data.seenNebula)
          return output.lineMultiKnockback();
        return output.lineSingleKnockback();
      },
      run: (data) => data.seenNebula = true,
      outputStrings: {
        lineMultiKnockback: {
          en: '4x knockback from lines',
          ja: '4連 線からノックバック',
          cn: '4x 直线击退',
        },
        lineSingleKnockback: {
          en: 'Knockback from line',
          ja: '線からノックバック',
          cn: '从直线击退',
        },
      },
    },
    {
      id: 'Jeuno First Walk Shadow Lord Echoes Of Agony',
      type: 'HeadMarker',
      netRegex: { id: '0221', capture: true },
      response: Responses.stackMarkerOn(),
    },
    // There's no castbar for Tera Slash.
    // Activate off the "Tera Slash in 10 seconds" message.
    // https://github.com/xivapi/ffxiv-datamining/blob/13aae911aee5a36623ab4922dcdb4e1b485682f0/csv/LogMessage.csv#L10840
    {
      id: 'Jeuno First Walk Shadow Lord Tera Slash',
      type: 'SystemLogMessage',
      netRegex: { id: '29AB', capture: false },
      durationSeconds: 10,
      response: Responses.bigAoe('alarm'),
    },
    {
      id: 'Jeuno First Walk Shadow Lord Unbridled Rage Collect',
      type: 'HeadMarker',
      netRegex: { id: '01D7', capture: true },
      run: (data, matches) => data.spikeTargets.push(matches.target),
    },
    {
      id: 'Jeuno First Walk Shadow Lord Unbridled Rage Call',
      type: 'StartsUsing',
      netRegex: { id: '9F67', source: 'Shadow Lord', capture: false },
      delaySeconds: 0.5,
      alertText: (data, _matches, output) => {
        if (data.rageTargets?.includes(data.me))
          return output.cleaveOnYou();
        return output.avoidCleave();
      },
      run: (data) => data.rageTargets = [],
      outputStrings: {
        cleaveOnYou: Outputs.tankCleaveOnYou,
        avoidCleave: Outputs.avoidTankCleaves,
      },
    },
    {
      id: 'Jeuno First Walk Shadow Lord Dark Nova',
      type: 'HeadMarker',
      netRegex: { id: '0137', capture: true },
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Jeuno First Walk Shadow Lord Binding Sigil',
      type: 'StartsUsing',
      netRegex: { id: '9F55', capture: false },
      durationSeconds: 10,
      infoText: (_data, _matches, output) => output.sigilDodge(),
      outputStrings: {
        sigilDodge: {
          en: 'Dodge puddles 3 to 1',
          ja: '最初の予兆へ駆け込む',
          cn: '三穿一躲避圆圈',
        },
      },
    },
    {
      id: 'Jeuno First Walk Shadow Lord Damning Strikes',
      type: 'StartsUsing',
      netRegex: { id: '9F57', capture: false },
      durationSeconds: 7,
      infoText: (_data, _matches, output) => output.towers(),
      outputStrings: {
        towers: Outputs.getTowers,
      },
    },
    {
      id: 'Jeuno First Walk Shadow Lord Nightfall Slash',
      type: 'StartsUsing',
      netRegex: { id: ['A424', 'A425', 'A426', 'A427'], source: 'Shadow Lord', capture: true },
      durationSeconds: 10,
      alertText: (_data, matches, output) => {
        if (matches.id === 'A424')
          return output.rightLeftBack();
        if (matches.id === 'A425')
          return output.rightLeftFront();
        if (matches.id === 'A426')
          return output.leftRightBack();
        return output.leftRightFront();
      },
      outputStrings: {
        rightLeftBack: {
          en: 'Start right => left => back',
          ja: '右 => 左 => 後ろ',
          cn: '右 => 左 => 后',
        },
        rightLeftFront: {
          en: 'Start right => left => front',
          ja: '右 => 左 => 前',
          cn: '右 => 左 => 前',
        },
        leftRightBack: {
          en: 'Start left => right => back',
          ja: '左 => 右 => 後ろ',
          cn: '左 => 右 => 后',
        },
        leftRightFront: {
          en: 'Start left => right => front',
          ja: '左 => 右 => 前',
          cn: '左 => 右 => 前',
        },
      },
    },
    {
      id: 'Jeuno First Walk Lordly Shadow Umbra Smash',
      type: 'StartsUsing',
      netRegex: { id: '9F53', capture: false },
      suppressSeconds: 1,
      infoText: (_data, _matches, output) => output.smashDodge(),
      outputStrings: {
        smashDodge: {
          en: 'Dodge Exalines, out => in',
          ja: '線を避ける 外から中へ',
          cn: '躲避步进直线, 远离 => 靠近',
        },
      },
    },
    {
      id: 'Jeuno First Walk Shadow Lord Doom Arc',
      type: 'StartsUsing',
      netRegex: { id: '9F66', source: 'Shadow Lord', capture: false },
      durationSeconds: 14,
      response: Responses.bleedAoe(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'en',
      'replaceText': {
        'Absolute Terror/Winged Terror': 'Absolute/Winged Terror',
        'Winged Terror/Absolute Terror': 'Winged/Absolute Terror',
        'Tachi: Yukikaze': 'Yukikaze',
        'Tachi: Gekko': 'Gekko',
        'Tachi: Kasha': 'Kasha',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Aquarius': '宝瓶蟹',
        'Ark Angel EV': '方舟天使EV',
        'Ark Angel GK': '方舟天使GK',
        'Ark Angel HM': '方舟天使HM',
        'Ark Angel MR': '方舟天使MR',
        'Ark Angel TT': '方舟天使TT',
        'Despot': '专制者',
        'Fafnir The Forgotten': '法芙尼尔',
        'Lordly Shadow': '王之暗影',
        'Luminous Remnant': '光流残滓',
        'Prishe Of The Distant Chains': '遥远的咒缚 普利修',
        'Shadow Lord': '暗之王',
        'Sprinkler': '喷淋器',
        'The Dragon\'s Aery': '龙巢',
        'The grand dais': '斗舞台',
        'The La\'loff Amphitheater': '拉·洛弗剧场',
        'The Throne Room': '王座大殿',
      },
      'replaceText': {
        '\\(add\\)': '(小怪)',
        '\\(big raidwide\\)': '(超大全域)',
        '\\(boss\\)': '(BOSS)',
        '\\(cast\\)': '(咏唱)',
        '\\(castbar\\)': '(咏唱栏)',
        '\\(circle\\)': '(圆)',
        '\\(circle AoE\\)': '(圆形AOE)',
        '\\(circle indicator\\)': '(圆形指示)',
        '\\(exalines\\)': '(扩展直线)',
        '\\(explode\\)': '(爆炸)',
        '\\(gaze\\)': '(石化光)',
        '\\(grid\\)': '(网格)',
        '\\(knockback\\)': '(击退)',
        '\\(line AoE\\)': '(直线AOE)',
        '\\(line indicators\\)': '(直线指示)',
        '\\(puddles\\)': '(圈)',
        '\\(raidwide\\)': '(全域)',
        '\\(raidwides\\)': '(全域)',
        '\\(rings\\)': '(环)',
        '\\(single lines\\)': '(单独直线)',
        '\\(spread\\)': '(分散)',
        '\\(spreads explode\\)': '(分散爆炸)',
        '\\(stack\\)': '(集合)',
        '--all untargetable--': '--全体不可选中--',
        '--Binding Indicator': '--绑定指示',
        '--Darters spawn--': '--赤蜻生成--',
        '(?<!-)center--': '中央--',
        'jump--': '跳--',
        '(?<!un)targetable--': '可选中--',
        '(?<!all )untargetable--': '不可选中--',
        'Absolute Terror': '绝对恐惧',
        'Arrogance Incarnate': '骄慢化身',
        'Asuran Fists': '梦想阿修罗拳',
        'Auroral Uppercut': '罗刹七星拳',
        'Baleful Breath': '凶恶吐息',
        'Banish(?!( S|ga))': '放逐',
        'Banish Storm': '放逐风暴',
        'Banishga(?! )': '强放逐',
        'Banishga IV': '强放逐IV',
        'Binding Sigil': '束缚咒',
        'Brittle Impact': '落地',
        'Burning Battlements': '暗火燎堞',
        'Burning Court': '暗火燎庭',
        'Burning Keep': '暗火燎城',
        'Burning Moat': '暗火燎壕',
        'Burst': '爆炸',
        'Cloudsplitter': '劈云斩',
        'Concerted Dissolution': '分解连技',
        'Critical Reaver': '暴击分断',
        'Critical Strikes': '暴击威震',
        'Cross Reaver': '绝双十闷刃',
        'Crystalline Thorns': '金刚棘',
        'Cthonic Fury': '冥界之怒',
        'Damning Strikes': '诅咒强袭',
        'Dark Matter Blast': '暗物质冲击',
        'Dark Nebula': '新星爆发',
        'Dark Nova': '黑暗新星',
        'Divine Dominion': '方舟支配',
        'Dominion Slash': '支配斩',
        'Doom Arc': '厄运弧光',
        'Dragon Breath': '巨龙吐息',
        'Dragonfall': '亢龙天锤落',
        'Echoes of Agony': '惨痛的回响',
        'Explosion': '爆炸',
        'Flames of Hatred': '憎恶之火',
        'Giga Slash(?!:)': '十亿斩击',
        'Giga Slash: Nightfall': '十亿斩击·入夜',
        'Guillotine': '断首',
        'Havoc Spiral': '灾乱螺旋',
        'Holy': '神圣',
        'Horrid Roar': '恐惧咆哮',
        'Hurricane Wing': '飓风之翼',
        '(?<! )Impact': '冲击',
        'Implosion': '向心聚爆',
        'Knuckle Sandwich': '迎面重拳',
        'Light\'s Chain': '光连技',
        'Meikyo Shisui': '明镜止水',
        'Meteor': '陨石流星',
        'Mighty Strikes': '强力冲击',
        'Mijin Gakure': '隐于微尘',
        '(?<! )Nightfall': '入夜',
        'Nullifying Dropkick': '昆仑八象脚·改',
        'Offensive Posture': '攻击姿态',
        'Proud Palisade': '极致防御',
        'Raiton': '雷遁之术',
        'Rampage': '暴怒',
        'Shadow Spawn': '影之增殖',
        'Sharp Spike': '锋刺',
        'Soul Binding': '灵魂束缚',
        'Spike Flail': '刃尾横扫',
        'Spiral Finish': '螺旋终结',
        'Tachi: Gekko': '八之太刀·月光',
        'Tachi: Kasha': '九之太刀·花车',
        'Tachi: Yukikaze': '七之太刀·雪风',
        'Tera Slash': '万亿斩击',
        'Touchdown': '空降',
        'Umbra Smash': '本影爆碎',
        'Unbridled Rage': '无拘暴怒',
        'Utsusemi': '空蝉之术',
        'Winged Terror': '恐慌之翼',
      },
    },
  ],
});
