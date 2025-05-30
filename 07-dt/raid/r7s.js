// @TODO:
// - Sinister Seeds - callout who has puddles?
// - Roots of Evil - dodge callout?
// - adds interrupt callouts?
// - Demolition Deathmatch:
//   - strat-specific tether callouts?
//   - Strange Seeds counter?
const headMarkerData = {
  // Sinster Seeds marker
  'sinisterSeed': '0177',
  // Strange Seeds marker
  'strangeSeed': '01D2',
  // Pulp Smash stack marker
  'pulpSmashMarker': '00A1',
  // Abominable Blink flare marker
  'flareMarker': '0147',
  // Killer Seed pair stack marker
  'killerSeedMarker': '005D',
};
const effect0x808Data = {
  // Lashing Lariat, right-hand weapon (left side looking at wall) unsafe
  // applies as the cast starts, not useful for an earlier call
  'lashingLariatRight': '377',
  // Lashing Lariat, left-hand weapon (right side looking at wall) unsafe
  // applies as the cast starts, not useful for an earlier call
  'lashingLariatLeft': '378',
  // right-hand club glowing
  'clubRight': '388',
  // left-hand club glowing
  'clubLeft': '389',
  // right-hand sword glowing
  'swordRight': '38A',
  // left-hand sword glowing
  'swordLeft': '38B',
};
console.assert(effect0x808Data);
const isHealerOrRanged = (x) =>
  Util.isHealerJob(x) || Util.isRangedDpsJob(x) || Util.isCasterDpsJob(x);
Options.Triggers.push({
  id: 'AacCruiserweightM3Savage',
  zoneId: ZoneId.AacCruiserweightM3Savage,
  timelineFile: 'r7s.txt',
  initData: () => ({
    brutalImpactCount: 6,
    stoneringer2Count: 0,
  }),
  triggers: [
    {
      id: 'R7S Brutal Impact',
      type: 'StartsUsing',
      netRegex: { id: 'A55B', source: 'Brute Abombinator', capture: false },
      infoText: (data, _matches, output) => output.text({ count: data.brutalImpactCount }),
      run: (data) => data.brutalImpactCount = Math.min(data.brutalImpactCount + 1, 8),
      outputStrings: {
        text: {
          en: 'AoE x${count}',
          de: 'AoE x${count}',
          ja: '全体攻撃 ${count} 回',
          cn: 'AoE x${count}',
          ko: '전체 공격 x${count}',
        },
      },
    },
    {
      id: 'R7S Stoneringer',
      type: 'StartsUsing',
      netRegex: {
        id: ['A55D', 'A55E', 'A57F', 'A580'],
        source: 'Brute Abombinator',
        capture: true,
      },
      durationSeconds: (_data, matches) => parseFloat(matches.castTime) + 10,
      infoText: (data, matches, output) => {
        const id = matches.id;
        switch (id) {
          case 'A55D':
            data.storedStoneringer = 'out';
            return output.out();
          case 'A55E':
            data.storedStoneringer = 'in';
            return output.in();
          case 'A57F':
            data.storedStoneringer = 'out';
            return output.outLater();
          case 'A580':
            data.storedStoneringer = 'in';
            return output.inLater();
        }
      },
      outputStrings: {
        inLater: {
          en: 'In (for later)',
          de: 'Rein (für später)',
          ja: 'あとで中に',
          cn: '(稍后靠近)',
          ko: '안으로 (나중에)',
        },
        outLater: {
          en: 'Out (for later)',
          de: 'Raus (für später)',
          ja: 'あとで外に',
          cn: '(稍后远离)',
          ko: '밖으로 (나중에)',
        },
        in: Outputs.in,
        out: Outputs.out,
      },
    },
    {
      // tanks may choose to invuln this, but that is strat specific
      id: 'R7S Smash Here/There',
      type: 'StartsUsing',
      netRegex: { id: ['A55F', 'A560'], source: 'Brute Abombinator', capture: true },
      durationSeconds: (_data, matches) => parseFloat(matches.castTime) + 2,
      alertText: (data, matches, output) => {
        const stoneringer = output[data.storedStoneringer ?? 'unknown']();
        if (data.role === 'tank') {
          const inOut = matches.id === 'A55F' ? output.in() : output.out();
          return output.sharedBuster({ stoneringer: stoneringer, inOut: inOut });
        }
        const inOut = matches.id === 'A560' ? output.in() : output.out();
        return output.avoidBuster({ stoneringer: stoneringer, inOut: inOut });
      },
      run: (data) => delete data.storedStoneringer,
      outputStrings: {
        sharedBuster: {
          en: '${stoneringer} => Tanks ${inOut}, Shared tankbuster',
          de: '${stoneringer} => Tanks ${inOut}, geteilter Tankbuster',
          ja: '${stoneringer} => タンク ${inOut}, タンク頭割り',
          cn: '${stoneringer} => 坦克 ${inOut}, 引导死刑',
          ko: '${stoneringer} => 탱커 ${inOut}, 쉐어 탱버',
        },
        avoidBuster: {
          en: '${stoneringer} => Party ${inOut}, Avoid tankbuster',
          de: '${stoneringer} => Party ${inOut}, vermeide Tankbuster',
          ja: '${stoneringer} => パーティ ${inOut}, タンク頭割りを避ける',
          cn: '${stoneringer} => 小队 ${inOut}, 远离坦克死刑',
          ko: '${stoneringer} => 본대 ${inOut}, 탱버 피하기',
        },
        in: Outputs.in,
        out: Outputs.out,
        unknown: Outputs.unknown,
      },
    },
    {
      id: 'R7S Sinister Seeds',
      type: 'StartsUsing',
      netRegex: { id: 'A56E', source: 'Brute Abombinator', capture: true },
      condition: Conditions.targetIsYou(),
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Drop seed',
          de: 'Saaten ablegen',
          ja: '種捨て',
          cn: '放置冰花',
          ko: '씨앗 놓기',
        },
      },
    },
    {
      // Impact is an instant cast, so trigger off of Sinister Seeds dropping
      id: 'R7S Impact',
      type: 'Ability',
      netRegex: { id: 'A56E', source: 'Brute Abombinator', capture: false },
      condition: (data) => data.brutalImpactCount < 8,
      suppressSeconds: 1,
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: Outputs.healerGroups,
      },
    },
    {
      id: 'R7S Quarry Swamp',
      type: 'StartsUsing',
      netRegex: { id: 'A575', source: 'Brute Abombinator', capture: false },
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Line of Sight boss with adds',
          de: 'Sichtlinie Boss verhindern mit Adds',
          ja: '雑魚で視線を切る',
          cn: '躲在小怪身后',
          ko: '쫄 뒤에 숨어서 시선 피하기',
        },
      },
    },
    {
      id: 'R7S Explosion',
      type: 'StartsUsing',
      netRegex: { id: 'A576', source: 'Brute Abombinator', capture: true },
      durationSeconds: (_data, matches) => parseFloat(matches.castTime) + 5,
      suppressSeconds: 10,
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Rotate away from proximity markers',
          de: 'Weg rotieren von den Distanzmarkierungen',
          ja: '距離減衰マーカー 3発目から1発目に避ける',
          cn: '远离距离衰减 AoE 落点',
          ko: '회전하면서 거리감쇠 징 피하기',
        },
      },
    },
    {
      id: 'R7S Pulp Smash',
      type: 'HeadMarker',
      netRegex: { id: headMarkerData.pulpSmashMarker, capture: true },
      infoText: (_data, matches, output) => output.text({ target: matches.target }),
      outputStrings: {
        text: {
          en: 'Stack on ${target} => Out + Protean',
          de: 'Stack on ${target} => Raus + Himmelsrichtungen',
          ja: '${target} 頭割り => 外へ + 八方向さんかい',
          cn: '${target} 分摊 => 远离 + 八方分散',
          ko: '${target} 쉐어 => 바깥 + 8방향 산개',
        },
      },
    },
    {
      id: 'R7S Neo Bombarian Special',
      type: 'StartsUsing',
      netRegex: { id: 'A57C', source: 'Brute Abombinator', capture: true },
      durationSeconds: (_data, matches) => parseFloat(matches.castTime),
      countdownSeconds: (_data, matches) => parseFloat(matches.castTime),
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Go North, big AoE + Launch',
          de: 'Geh nach Norden, große AoE + Katapult',
          ja: '北集合、全体攻撃 + ノックバック',
          cn: '去北方准备 AoE + 击飞',
          ko: '북쪽으로, 아픈 광역 + 날아감',
        },
      },
    },
    {
      id: 'R7S Brutish Swing',
      type: 'StartsUsing',
      netRegex: {
        id: ['A592', 'A593', 'A5A3', 'A5A5'],
        source: 'Brute Abombinator',
        capture: true,
      },
      alertText: (data, matches, output) => {
        const id = matches.id;
        switch (id) {
          case 'A592':
            return output.out();
          case 'A593':
            return output.in();
          case 'A5A3': {
            const inOut = output.out();
            const lariat = output[data.stoneringer2Weapons?.club ?? 'unknown']();
            if (data.stoneringer2Count > 1) {
              if (data.stoneringer2Followup)
                return output.inOutLariat({ inOut: inOut, lariat: lariat });
              return inOut;
            }
            const followup = data.stoneringer2Followup ? output.bigAoe() : output.awayFromFront();
            if (data.stoneringer2Followup)
              return output.inOutFollowupLariat({
                inOut: inOut,
                followup: followup,
                lariat: lariat,
              });
            return output.inOutFollowup({ inOut: inOut, followup: followup });
          }
          case 'A5A5': {
            const inOut = output.in();
            const lariat = output[data.stoneringer2Weapons?.sword ?? 'unknown']();
            if (data.stoneringer2Count > 1) {
              if (data.stoneringer2Followup)
                return output.inOutLariat({ inOut: inOut, lariat: lariat });
              return inOut;
            }
            const followup = data.stoneringer2Followup ? output.bigAoe() : output.awayFromFront();
            if (data.stoneringer2Followup)
              return output.inOutFollowupLariat({
                inOut: inOut,
                followup: followup,
                lariat: lariat,
              });
            return output.inOutFollowup({ inOut: inOut, followup: followup });
          }
        }
      },
      run: (data) => {
        delete data.storedStoneringer;
        delete data.stoneringer2Followup;
        delete data.stoneringer2Weapons;
      },
      outputStrings: {
        in: {
          en: 'In at tethered wall',
          de: 'Rein zu der verbundenen Wand',
          ja: '線のある壁に近づく',
          cn: '连线墙月环',
          ko: '선 연결된 벽 안으로',
        },
        out: {
          en: 'Out from tethered wall',
          de: 'Raus von der verbundenen Wand',
          ja: '線のある壁から離れる',
          cn: '连线墙钢铁',
          ko: '선 연결된 벽 밖으로',
        },
        inOutFollowupLariat: {
          en: '${inOut} + ${followup} => ${lariat}',
          de: '${inOut} + ${followup} => ${lariat}',
          ja: '${inOut} + ${followup} => ${lariat}',
          cn: '${inOut} + ${followup} => ${lariat}',
          ko: '${inOut} + ${followup} => ${lariat}',
        },
        inOutFollowup: {
          en: '${inOut} => ${followup}',
          de: '${inOut} => ${followup}',
          ja: '${inOut} => ${followup}',
          cn: '${inOut} => ${followup}',
          ko: '${inOut} => ${followup}',
        },
        inOutLariat: {
          en: '${inOut} => ${lariat}',
          de: '${inOut} => ${lariat}',
          ja: '${inOut} => ${lariat}',
          cn: '${inOut} => ${lariat}',
          ko: '${inOut} => ${lariat}',
        },
        left: {
          en: 'Get Left',
          de: 'Geh Links',
          ja: '左へ',
          cn: '去左边',
          ko: '왼쪽으로',
        },
        right: {
          en: 'Get Right',
          de: 'Geh Rechts',
          ja: '右へ',
          cn: '去右边',
          ko: '오른쪽으로',
        },
        awayFromFront: {
          en: 'Spread, Away from front',
          de: 'Verteilen, weg von Vorne',
          ja: 'さんかい、ボス前から離れる',
          cn: '分散, 远离 BOSS 正面',
          ko: '산개, 보스 앞 피하기',
        },
        bigAoe: Outputs.bigAoe,
        unknown: Outputs.unknown,
      },
    },
    {
      id: 'R7S Glower Power',
      type: 'StartsUsing',
      netRegex: { id: 'A94C', source: 'Brute Abombinator', capture: false },
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Spread, Away from front',
          de: 'Verteilen, weg von Vorne',
          ja: 'さんかい、ボス前から離れる',
          cn: '分散, 远离 BOSS 正面',
          ko: '산개, 보스 앞 피하기',
        },
      },
    },
    {
      id: 'R7S Revenge of the Vines',
      type: 'StartsUsing',
      netRegex: { id: 'A587', source: 'Brute Abombinator', capture: false },
      response: Responses.bigAoe(),
    },
    {
      id: 'R7S Thorny Deathmatch',
      type: 'Tether',
      netRegex: { id: '0152', capture: true },
      infoText: (_data, matches, output) => output.text({ target: matches.target }),
      outputStrings: {
        text: {
          en: 'Tank tether on ${target}',
          de: 'Tank-Verbindung auf ${target}',
          ja: '${target} にタンク線',
          cn: '坦克连线 ${target}',
          ko: '${target} 탱커 선 대상자',
        },
      },
    },
    {
      id: 'R7S Abominable Blink',
      type: 'HeadMarker',
      netRegex: { id: headMarkerData.flareMarker, capture: true },
      alertText: (data, matches, output) => {
        if (matches.target === data.me)
          return output.flare();
        return output.avoidFlare();
      },
      outputStrings: {
        avoidFlare: {
          en: 'Away from Flare',
          de: 'Weg von dem Flare',
          ja: 'フレアマーカーから離れる',
          cn: '远离核爆',
          ko: '플레어 피하기',
        },
        flare: {
          en: 'Flare + buster on YOU, Away from party',
          de: 'Flare + Tankbuster auf DIR, Weg von der Gruppe',
          ja: '自分にフレア、パーティから離れる',
          cn: '核爆死刑点名, 远离人群',
          ko: '플레어 + 탱버 대상자, 본대에서 멀어지기',
        },
      },
    },
    {
      // different strats have different players taking these tethers,
      // so we use a generic callout for now
      id: 'R7S Demolition Deathmatch',
      type: 'StartsUsing',
      netRegex: { id: 'A596', source: 'Brute Abombinator', capture: false },
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Get tethers',
          de: 'Nimm Verbindungen',
          ja: '線取り',
          cn: '获取连线',
          ko: '선 가져오기',
        },
      },
    },
    {
      id: 'R7S Strange Seeds',
      type: 'StartsUsing',
      netRegex: { id: 'A598', source: 'Brute Abombinator', capture: true },
      condition: Conditions.targetIsYou(),
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Drop seed',
          de: 'Saaten ablegen',
          ja: '種捨て',
          cn: '放置冰花',
          ko: '씨앗 놓기',
        },
      },
    },
    {
      id: 'R7S Tendrils of Terror',
      type: 'StartsUsing',
      netRegex: {
        id: ['A599', 'A59A', 'A59C', 'A59D'],
        source: 'Brute Abombinator',
        capture: false,
      },
      suppressSeconds: 1,
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Avoid line AoEs',
          de: 'Vermeide Linien AoEs',
          ja: '直線 AoE を避ける',
          cn: '远离直线 AoE',
          ko: '직선 장판 피하기',
        },
      },
    },
    {
      id: 'R7S Killer Seeds',
      type: 'StartsUsing',
      netRegex: { id: 'A59B', source: 'Brute Abombinator', capture: false },
      suppressSeconds: 1,
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: Outputs.stackPartner,
      },
    },
    {
      id: 'R7S Powerslam',
      type: 'StartsUsing',
      netRegex: { id: 'A59E', source: 'Brute Abombinator', capture: false },
      response: Responses.bigAoe('alert'),
    },
    {
      // A5A0 = sword left, club right
      // A5A1 = club left, sword right
      id: 'R7S Stoneringer 2: Stoneringers',
      type: 'StartsUsing',
      netRegex: { id: ['A5A0', 'A5A1'], source: 'Brute Abombinator', capture: true },
      run: (data, matches) => {
        data.stoneringer2Followup = true;
        data.stoneringer2Count++;
        const id = matches.id;
        switch (id) {
          case 'A5A0':
            data.stoneringer2Weapons = { sword: 'left', club: 'right' };
            break;
          case 'A5A1':
            data.stoneringer2Weapons = { sword: 'right', club: 'left' };
            break;
        }
      },
    },
    {
      id: 'R7S Lashing Lariat',
      type: 'StartsUsing',
      netRegex: { id: ['A5A8', 'A5AA'], source: 'Brute Abombinator', capture: true },
      alertText: (_data, matches, output) => matches.id === 'A5A8' ? output.right() : output.left(),
      outputStrings: {
        left: {
          en: '<== Get Left',
          de: '<== Geh Links',
          ja: '<== 左へ',
          cn: '<== 左左左',
          ko: '<== 왼쪽으로',
        },
        right: {
          en: 'Get Right ==>',
          de: 'Geh Rechts ==>',
          ja: '右へ ==>',
          cn: '右右右 ==>',
          ko: '오른쪽으로 ==>',
        },
      },
    },
    {
      // tanks may choose to invuln this, but that is strat specific
      id: 'R7S Slaminator',
      type: 'StartsUsing',
      netRegex: { id: 'A5AE', source: 'Brute Abombinator', capture: false },
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Get tower',
          de: 'Nimm Turm',
          ja: '塔踏み',
          cn: '踩塔',
          ko: '탑 밟기',
        },
      },
    },
    {
      id: 'R7S Debris Deathmatch',
      type: 'StartsUsing',
      netRegex: { id: 'A5B0', source: 'Brute Abombinator', capture: false },
      condition: (data) => isHealerOrRanged(data.job),
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Get tethers',
          de: 'Nimm Verbindung',
          ja: '線取り',
          cn: '接线',
          ko: '선 가져오기',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'en',
      'replaceText': {
        'Smash Here/Smash There': 'Smash Here/There',
        'Winding Wildwinds/Crossing Crosswinds': 'Wildwinds/Crosswinds',
      },
    },
    {
      'locale': 'de',
      'replaceSync': {
        'Blooming Abomination': 'Biestinator-Spross',
        'Brute Abombinator': 'Brutalo Biestinator',
      },
      'replaceText': {
        '--middile--': '--mitte--',
        '\\(adds': '(Adds',
        'cast\\)': 'Wirken)',
        '\\(enrage\\)': '(Finalangriff)',
        '\\(puddles\\)': '(Flächen)',
        '\\(seeds drop\\)': '(Saaten ablegen)',
        'Abominable Blink': 'Brutalo-Funken',
        'Brutal Impact': 'Knallender Impakt',
        'Brutal Smash': 'Brutalo-Schlag',
        'Brutish Swing': 'Brutalo-Schwung',
        'Crossing Crosswinds': 'Kreuzwind',
        'Debris Deathmatch': 'Dornenwand-Todeskampf',
        'Demolition Deathmatch': 'Dornengebäude-Todeskampf',
        'Electrogenetic Force': 'Blitzschlag',
        'Explosion': 'Explosion',
        'Glower Power': 'Brutalo-Blick',
        'Grappling Ivy': 'Efeuhaken',
        'Hurricane Force': 'Sturmgewalt',
        '(?<! )Impact': 'Impakt',
        'Killer Seeds': 'Schwerer Samen',
        'Lashing Lariat': 'Efeu-Lariat',
        'Neo Bombarian Special': 'Neo-Brutalo-Spezial',
        'Pollen': 'Pollen',
        'Powerslam': 'Bombensturz',
        'Pulp Smash': 'Dornenschlag',
        'Quarry Swamp': 'Versteinernde Welle',
        'Revenge of the Vines': 'Welt der Dornen',
        'Roots of Evil': 'Dornenglühen',
        'Sinister Seeds': 'Streusamen',
        'Slaminator': 'Brutalo-Sturz',
        'Smash Here': 'Naher Schlag',
        'Smash There': 'Ferner Schlag',
        'Special Bombarian Special': 'Ultimativer Brutalo-Spezial',
        'Spore Sac': 'Sporensack',
        'Sporesplosion': 'Sporenwolke',
        'Stoneringer(?![s ])': 'Steinwaffe',
        'Stoneringer 2: Stoneringers': 'Steinwaffen-Kombo',
        'Strange Seeds': 'Verwehte Samen',
        'Tendrils of Terror': 'Dornenzaun',
        'The Unpotted': 'Dornenwelle',
        'Thorny Deathmatch': 'Dornen-Todeskampf',
        'Winding Wildwinds': 'Kreiswind',
      },
    },
    {
      'locale': 'fr',
      'missingTranslations': true,
      'replaceSync': {
        'Blooming Abomination': 'germe de Bombinator',
        'Brute Abombinator': 'Brute Bombinator',
      },
      'replaceText': {
        'Abominable Blink': 'Étincelle brutale',
        'Brutal Impact': 'Impact brutal',
        'Brutal Smash': 'Impact brutal',
        'Brutish Swing': 'Swing brutal',
        'Crossing Crosswinds': 'Bourrasque croisée',
        'Debris Deathmatch': 'Mise à mort épineuse emprisonnée',
        'Demolition Deathmatch': 'Mise à mort épineuse gigantesque',
        'Electrogenetic Force': 'Doigt filiforme',
        'Explosion': 'Explosion',
        'Glower Power': 'Regard brutal',
        'Grappling Ivy': 'Projection spinescente',
        'Hurricane Force': 'Grande tempête de vent',
        '(?<! )Impact(?! )': 'Ensevelissement',
        'Killer Seeds': 'Grosse graine',
        'Lashing Lariat': 'Lariat épineux',
        'Neo Bombarian Special': 'Néo-spéciale brutale',
        'Pollen': 'Pollen',
        'Powerslam': 'Explongeon',
        'Pulp Smash': 'Impact épineux',
        'Quarry Swamp': 'Vague de pétrification',
        'Revenge of the Vines': 'Règne des épines',
        'Roots of Evil': 'Poussée d\'épines',
        'Sinister Seeds': 'Éparpillement des graines',
        'Slaminator': 'Plongeon brutal',
        'Smash Here': 'Balayage proche',
        'Smash There': 'Balayage éloigné',
        'Special Bombarian Special': 'Spéciale brutale ultime',
        'Spore Sac': 'Sac de spores',
        'Sporesplosion': 'Nuage de spores',
        'Stoneringer(?![s ])': 'Arme de pierre',
        'Stoneringer 2: Stoneringers': 'Armes de pierre jumelles',
        'Strange Seeds': 'Dissémination de graines',
        'Tendrils of Terror': 'Grille épineuse',
        'The Unpotted': 'Onde épineuse',
        'Thorny Deathmatch': 'Mise à mort épineuse',
        'Winding Wildwinds': 'Bourrasque circulaire',
      },
    },
    {
      'locale': 'ja',
      'missingTranslations': true,
      'replaceSync': {
        'Blooming Abomination': 'アボミネータースプラウト',
        'Brute Abombinator': 'ブルートアボミネーター',
      },
      'replaceText': {
        'Abominable Blink': 'ブルートスパーク',
        'Brutal Impact': 'スマッシュインパクト',
        'Brutal Smash': 'ブルートスマッシュ',
        'Brutish Swing': 'ブルートスイング',
        'Crossing Crosswinds': 'クロッシングゲイル',
        'Debris Deathmatch': 'ソーンデスマッチ・ウォール',
        'Demolition Deathmatch': 'ソーンデスマッチ・ビルディング',
        'Electrogenetic Force': '雷撃',
        'Explosion': '爆発',
        'Glower Power': 'ブルートグラワー',
        'Grappling Ivy': 'アイビーグラップル',
        'Hurricane Force': '大暴風',
        '(?<! )Impact': '衝撃',
        'Killer Seeds': 'ヘビーシード',
        'Lashing Lariat': 'アイビーラリアット',
        'Neo Bombarian Special': 'ネオ・ボンバリアンスペシャル',
        'Pollen': '花粉',
        'Powerslam': 'パワーダイブ',
        'Pulp Smash': 'ソーンスマッシュ',
        'Quarry Swamp': '石化の波動',
        'Revenge of the Vines': 'ソーンワールド',
        'Roots of Evil': 'ソーングロウ',
        'Sinister Seeds': 'スキャッターシード',
        'Slaminator': 'ブルートダイブ',
        'Smash Here': 'ニア・スマッシュ',
        'Smash There': 'ファー・スマッシュ',
        'Special Bombarian Special': 'アルティメット・ボンバリアンスペシャル',
        'Spore Sac': 'スポアサック',
        'Sporesplosion': 'スポアクラウド',
        'Stoneringer(?![s ])': 'ストーンウェポン',
        'Stoneringer 2: Stoneringers': 'ストーンウェポン：ツイン',
        'Strange Seeds': 'ブロウシード',
        'Tendrils of Terror': 'ソーンフェンス',
        'The Unpotted': 'ソーンウェーブ',
        'Thorny Deathmatch': 'ソーンデスマッチ',
        'Winding Wildwinds': 'リングゲイル',
      },
    },
  ],
});
