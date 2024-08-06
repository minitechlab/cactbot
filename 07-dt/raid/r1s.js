// MapEffect tile map:
// 00 01 02 03
// 04 05 06 07
// 08 09 0A 0B
// 0C 0D 0E 0F
// +0x10 is a duplicate used for E&E knockback display
const mapEffectTileState = {
  'cracked': '00020001',
  'clear': '00040004',
  'quickRebuid': '00080004',
  'broken': '00200010',
  'refreshing': '00800004',
  'rebuilding': '01000004', // rebuilding from broken
};
const mapEffectData = {
  '00': {
    'location': '00',
    'centerX': 85,
    'centerY': 85,
    ...mapEffectTileState,
  },
  '03': {
    'location': '03',
    'centerX': 115,
    'centerY': 85,
    ...mapEffectTileState,
  },
  '09': {
    'location': '09',
    'centerX': 95,
    'centerY': 105,
    ...mapEffectTileState,
  },
  '0A': {
    'location': '0A',
    'centerX': 105,
    'centerY': 105,
    ...mapEffectTileState,
  },
};
const headMarkerData = {
  // Vfx Path: tank_lockon02k1
  tankbuster: '00DA',
  // Vfx Path: lockon8_t0w
  spreadMarker1: '00F4',
  // Vfx Path: loc05sp_05a_se_p
  spreadMarker2: '0178',
  // Vfx Path: m0884_vanish_7sec_p1
  pawprint: '021A',
};
Options.Triggers.push({
  id: 'AacLightHeavyweightM1Savage',
  zoneId: ZoneId.AacLightHeavyweightM1Savage,
  timelineFile: 'r1s.txt',
  initData: () => ({
    actorSetPosTracker: {},
    storedLeaps: {
      oneTwoPaw: {},
      quadCross: {},
    },
  }),
  triggers: [
    {
      id: 'R1S Shockwave Knockback Safe Directions',
      type: 'MapEffect',
      netRegex: { location: ['00', '03'], flags: mapEffectTileState.quickRebuid, capture: true },
      infoText: (_data, matches, output) => {
        if (matches.location === '00')
          return output.nwSE();
        return output.neSW();
      },
      outputStrings: {
        nwSE: {
          en: 'Knockback (NW/SE Safe)',
        },
        neSW: {
          en: 'Knockback (NE/SW Safe)',
        },
      },
    },
    {
      id: 'R1S One-two Paw Right Left',
      type: 'StartsUsing',
      netRegex: { id: '9436', source: 'Black Cat', capture: false },
      durationSeconds: 9.5,
      response: Responses.goLeftThenRight(),
    },
    {
      id: 'R1S One-two Paw Left Right',
      type: 'StartsUsing',
      netRegex: { id: '9439', source: 'Black Cat', capture: false },
      durationSeconds: 9.5,
      response: Responses.goRightThenLeft(),
    },
    {
      id: 'R1S Biscuit Maker',
      type: 'StartsUsing',
      netRegex: { id: '9495', source: 'Black Cat', capture: true },
      response: Responses.tankBuster(),
    },
    {
      id: 'R1S Bloody Scratch',
      type: 'StartsUsing',
      netRegex: { id: '9494', source: 'Black Cat', capture: false },
      response: Responses.bigAoe(),
    },
    {
      id: 'R1S ActorSetPos Collector',
      type: 'ActorSetPos',
      netRegex: { id: '4[0-9A-F]{7}', capture: true },
      run: (data, matches) => {
        data.actorSetPosTracker[matches.id] = matches;
      },
    },
    {
      id: 'R1S Mouser',
      type: 'StartsUsing',
      netRegex: { id: '996C', capture: true },
      condition: (data, matches) => {
        const actorSetPosLine = data.actorSetPosTracker[matches.sourceId];
        if (actorSetPosLine === undefined)
          return false;
        const x = parseFloat(actorSetPosLine.x);
        const y = parseFloat(actorSetPosLine.y);
        const loc = Object.values(mapEffectData)
          .find((tile) =>
            tile.location.startsWith('0') && Math.abs(tile.centerX - x) < 1 &&
            Math.abs(tile.centerY - y) < 1
          );
        if (loc === undefined)
          return false;
        const tile = loc.location;
        if (tile !== '09' && tile !== '0A')
          return false;
        data.mouserMatchedTile = tile;
        return true;
      },
      // We don't need a suppressSeconds since only one of the SW/SE tiles will get hit twice
      durationSeconds: 11,
      infoText: (data, _matches, output) => {
        const dangerTile = data.mouserMatchedTile;
        if (dangerTile === undefined)
          return false;
        // Danger tile is SW, so safe movement is SW => SE (Stay)
        if (dangerTile === '09') {
          return output.swSeStay({
            dir1: output['dirSW'](),
            sep: output.separator(),
            dir2: output['dirSE'](),
          });
        }
        const dirs = ['dirSW', 'dirSE', 'dirSW'].map((e) => output[e]());
        return output.combo({ dirs: dirs.join(output.separator()) });
      },
      run: (data) => delete data.mouserMatchedTile,
      outputStrings: {
        ...Directions.outputStrings8Dir,
        swSeStay: {
          en: '${dir1} ${sep} ${dir2} (Stay)',
          de: '${dir1} ${sep} ${dir2} (Stehen bleiben)',
          ja: '${dir1} ${sep} ${dir2} (そのまま)',
          cn: '${dir1} ${sep} ${dir2} (不动)',
        },
        separator: {
          en: ' => ',
          de: ' => ',
          ja: ' => ',
          cn: ' => ',
        },
        combo: {
          en: '${dirs}',
          de: '${dirs}',
          ja: '${dirs}',
          cn: '${dirs}',
        },
      },
    },
    {
      id: 'R1S Headmarker Nailchipper Spread',
      type: 'HeadMarker',
      netRegex: { id: headMarkerData.spreadMarker1, capture: true },
      condition: Conditions.targetIsYou(),
      suppressSeconds: 5,
      infoText: (_data, _matches, output) => output.outSpread(),
      outputStrings: {
        outSpread: {
          en: 'Out + Spread',
        },
      },
    },
    {
      id: 'R1S Headmarker Grimalkin Gale Spread',
      type: 'HeadMarker',
      netRegex: { id: headMarkerData.spreadMarker2, capture: false },
      suppressSeconds: 5,
      response: Responses.spread(),
    },
    {
      id: 'R1S Headmarker Pawprint Collector',
      type: 'HeadMarker',
      netRegex: { id: headMarkerData.pawprint, capture: true },
      run: (data, matches) => data.lastPawprintTarget = matches.target,
    },
    {
      id: 'R1S Elevate and Eviscerate Launch Self',
      type: 'StartsUsing',
      netRegex: { id: '9446', source: 'Copy Cat', capture: false },
      condition: (data) => data.me === data.lastPawprintTarget,
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Launch Forward (Aim for uncracked tile)',
          de: 'Schlag Vorwärts (Ziel auf eine ganze Fläche)',
          ja: '前方吹き飛ばし (割れていない床を狙って)',
          cn: '向前击飞 (瞄准完好的地板)',
        },
      },
    },
    {
      id: 'R1S Elevate and Eviscerate Launch Other',
      type: 'StartsUsing',
      netRegex: { id: '9446', source: 'Copy Cat', capture: false },
      condition: (data) => data.me !== data.lastPawprintTarget,
      infoText: (data, _matches, output) => output.text({ target: data.lastPawprintTarget }),
      outputStrings: {
        text: {
          en: '${target} Launch',
          de: '${target} Start',
          ja: '${target} に吹き飛ばし',
          cn: '${target} 击飞',
        },
      },
    },
    {
      id: 'R1S Elevate and Eviscerate Stun Self',
      type: 'StartsUsing',
      netRegex: { id: '9448', source: 'Copy Cat', capture: false },
      condition: (data) => data.me === data.lastPawprintTarget,
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Stand on uncracked tile',
          de: 'Steh auf einer ganzen Fläche',
          ja: '割れてない床に立って',
          cn: '被砸 (站在完好的场地)',
        },
      },
    },
    {
      id: 'R1S Elevate and Eviscerate Stun Other',
      type: 'StartsUsing',
      netRegex: { id: '9448', source: 'Copy Cat', capture: false },
      condition: (data) => data.me !== data.lastPawprintTarget,
      infoText: (data, _matches, output) => output.text({ target: data.lastPawprintTarget }),
      outputStrings: {
        text: {
          en: '${target} Stun',
          de: '${target} Betäubung',
          ja: '${target} にスタン',
          cn: '${target} 被砸',
        },
      },
    },
    {
      id: 'R1S Quadruple Swipe',
      type: 'StartsUsing',
      netRegex: { id: '945D', source: 'Black Cat', capture: false },
      infoText: (_data, _matches, output) => output.partner(),
      outputStrings: {
        partner: {
          en: 'Partner Stacks',
          de: 'Partner sammeln',
          fr: 'Package partenaire',
          ja: 'ペア',
          cn: '和搭档分摊',
          ko: '파트너 쉐어',
        },
      },
    },
    {
      id: 'R1S Delayed Quadruple Swipe',
      type: 'StartsUsing',
      netRegex: { id: '945D', source: 'Black Cat', capture: false },
      delaySeconds: 24.4,
      infoText: (_data, _matches, output) => output.partner(),
      outputStrings: {
        partner: {
          en: 'Partner Stacks',
          de: 'Partner sammeln',
          fr: 'Package partenaire',
          ja: 'ペア',
          cn: '和搭档分摊',
          ko: '파트너 쉐어',
        },
      },
    },
    {
      id: 'R1S Double Swipe',
      type: 'StartsUsing',
      netRegex: { id: '945F', source: 'Black Cat', capture: false },
      infoText: (_data, _matches, output) => output.healerStacks(),
      outputStrings: {
        healerStacks: Outputs.healerGroups,
      },
    },
    {
      id: 'R1S Delayed Double Swipe',
      type: 'StartsUsing',
      netRegex: { id: '945F', source: 'Black Cat', capture: false },
      delaySeconds: 24.4,
      infoText: (_data, _matches, output) => output.healerStacks(),
      outputStrings: {
        healerStacks: Outputs.healerGroups,
      },
    },
    {
      id: 'R1S Overshadow',
      type: 'StartsUsing',
      netRegex: { id: '9497', source: 'Black Cat', capture: true },
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'R1S Splintering Nails',
      type: 'StartsUsing',
      netRegex: { id: '9499', source: 'Black Cat', capture: false },
      infoText: (_data, _matches, output) => output.rolePositions(),
      outputStrings: {
        rolePositions: {
          en: 'Role positions',
          de: 'Rollenposition',
          fr: 'Positions par rôle',
          ja: 'ロールの担当位置へ',
          cn: '去指定位置',
          ko: '직업별 산개위치로',
        },
      },
    },
    {
      id: 'R1S Leaping One-two Paw',
      type: 'StartsUsing',
      netRegex: { id: ['944D', '944E', '944F', '9450'], source: 'Black Cat', capture: true },
      infoText: (_data, matches, output) => {
        if (matches.id === '944D') {
          return output.combo({ dir: output.dirW(), cleaves: output.outsideIn() });
        } else if (matches.id === '944E') {
          return output.combo({ dir: output.dirW(), cleaves: output.insideOut() });
        } else if (matches.id === '944F') {
          return output.combo({ dir: output.dirE(), cleaves: output.insideOut() });
        } else if (matches.id === '9450') {
          return output.combo({ dir: output.dirE(), cleaves: output.outsideIn() });
        }
        return output.unknown();
      },
      run: (data, matches) => {
        if (matches.id === '944D') {
          data.storedLeaps.oneTwoPaw.leftRight = 'left';
          data.storedLeaps.oneTwoPaw.firstCleaveSide = 'right';
        } else if (matches.id === '944E') {
          data.storedLeaps.oneTwoPaw.leftRight = 'left';
          data.storedLeaps.oneTwoPaw.firstCleaveSide = 'left';
        } else if (matches.id === '944F') {
          data.storedLeaps.oneTwoPaw.leftRight = 'right';
          data.storedLeaps.oneTwoPaw.firstCleaveSide = 'right';
        } else if (matches.id === '9450') {
          data.storedLeaps.oneTwoPaw.leftRight = 'right';
          data.storedLeaps.oneTwoPaw.firstCleaveSide = 'left';
        }
      },
      outputStrings: {
        dirE: Outputs.dirE,
        dirW: Outputs.dirW,
        insideOut: {
          en: 'Inside => Outside',
        },
        outsideIn: {
          en: 'Outside => Inside',
        },
        combo: {
          en: '${dir}, ${cleaves}',
        },
        unknown: Outputs.unknown,
      },
    },
    {
      id: 'R1S Leaping Quadruple Crossing',
      type: 'StartsUsing',
      netRegex: { id: ['9457', '982F'], source: 'Black Cat', capture: true },
      condition: (data) => data.storedLeaps.oneTwoPaw.leftRight !== undefined,
      infoText: (_data, _matches, output) => {
        return output.proximity();
      },
      run: (data, matches) => {
        if (matches.id === '9457') {
          data.storedLeaps.quadCross.leftRight = 'left';
        } else if (matches.id === '982F') {
          data.storedLeaps.quadCross.leftRight = 'right';
        }
      },
      outputStrings: {
        proximity: {
          en: 'Proximity baits at target',
        },
        unknown: Outputs.unknown,
      },
    },
    {
      id: 'R1S Leaping clone collector',
      type: 'Tether',
      netRegex: { id: '0066', capture: true },
      infoText: (data, matches, output) => {
        const actorSetPosEntry = data.actorSetPosTracker[matches.sourceId];
        if (actorSetPosEntry === undefined) {
          console.error(
            `R1S Leaping clone collector: Missing ActorSetPos line for actor ID ${matches.sourceId}`,
          );
          return;
        }
        const cloneNorthSouth = parseFloat(actorSetPosEntry.y) < 100 ? 'north' : 'south';
        if (data.storedLeaps.oneTwoPaw.firstCleaveSide !== undefined) {
          if (data.storedLeaps.oneTwoPaw.northSouth === undefined) {
            data.storedLeaps.oneTwoPaw.northSouth = cloneNorthSouth;
            return;
          }
        }
        if (data.storedLeaps.quadCross.leftRight !== undefined) {
          if (data.storedLeaps.quadCross.northSouth === undefined) {
            data.storedLeaps.quadCross.northSouth = cloneNorthSouth;
            return;
          }
        }
        if (
          data.storedLeaps.oneTwoPaw.northSouth !== undefined &&
          data.storedLeaps.quadCross.northSouth !== undefined
        ) {
          if (
            data.storedLeaps.oneTwoPaw.resolved !== true &&
            data.storedLeaps.oneTwoPaw.northSouth === cloneNorthSouth
          ) {
            data.storedLeaps.oneTwoPaw.resolved = true;
            let dir;
            if (data.storedLeaps.oneTwoPaw.northSouth === 'north') {
              if (data.storedLeaps.oneTwoPaw.leftRight === 'left')
                dir = 'dirE';
              else
                dir = 'dirW';
            } else {
              if (data.storedLeaps.oneTwoPaw.leftRight === 'left')
                dir = 'dirW';
              else
                dir = 'dirE';
            }
            let inOut = 'in';
            if (data.storedLeaps.oneTwoPaw.leftRight !== data.storedLeaps.oneTwoPaw.firstCleaveSide)
              inOut = 'out';
            return output.healerStacks({ dir: output[dir](), inOut: output[inOut]() });
          }
          if (
            data.storedLeaps.quadCross.resolved !== true &&
            data.storedLeaps.quadCross.northSouth === cloneNorthSouth
          ) {
            data.storedLeaps.quadCross.resolved = true;
            let dir;
            if (data.storedLeaps.oneTwoPaw.northSouth === 'north') {
              if (data.storedLeaps.oneTwoPaw.leftRight === 'left')
                dir = 'dirE';
              else
                dir = 'dirW';
            } else {
              if (data.storedLeaps.oneTwoPaw.leftRight === 'left')
                dir = 'dirW';
              else
                dir = 'dirE';
            }
            return output.proximity({ dir: output[dir]() });
          }
        }
      },
      outputStrings: {
        dirE: Outputs.dirE,
        dirW: Outputs.dirW,
        in: {
          en: 'In + Healer Stacks => Out',
        },
        out: {
          en: 'Out + Healer Stacks => In',
        },
        healerStacks: {
          en: 'Go ${dir} => ${inOut}',
        },
        proximity: {
          en: 'Go ${dir} => Proximity Baits + Spreads',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Black Cat': 'Schwarze Katze',
        'Copy Cat': 'felin(?:e|er|es|en) Nachahmung',
        'Soulshade': 'Seelenschatten',
      },
      'replaceText': {
        '\\(First\\)': '(Erster)',
        '\\(Second\\)': '(Zweiter)',
        '\\(cast\\)': '(wirken)',
        '\\(damage\\)': '(Schaden)',
        '\\(enrage\\)': '(Finalangriff)',
        '\\(hit\\)': '(Treffer)',
        '\\(hits\\)': '(Treffer)',
        '\\(jump\\)': '(Sprung)',
        '\\(knockback\\)': '(Rückstoß)',
        '\\(stacks\\)': '(Sammeln)',
        '\\(telegraphs\\)': '(Anzeige)',
        '\\(tethers\\)': '(Verbindungen)',
        'Biscuit Maker': 'Milchtritt',
        'Bloody Scratch': 'Blutiger Rundumkratzer',
        'Copycat': 'Feline Nachahmung',
        'Double Swipe': 'Doppelte Kralle',
        'Elevate and Eviscerate': 'Präziser Höhenflug',
        'Grimalkin Gale': 'Katerstrophaler Wind',
        'Impact': 'Impakt',
        'Leaping One-two Paw': 'Doppelklauensprung',
        'Leaping Quadruple Crossing': 'Vierfachklauensprung',
        'Mouser': 'Mäusejagd',
        'Nailchipper': 'Krallenschneider',
        'Nine Lives': 'Sieben Leben',
        '(?<! )One-two Paw': 'Doppelklaue',
        'Overshadow': 'Überschattung',
        'Predaceous Pounce': 'Feliner Beutezug',
        '(?<! )Quadruple Crossing': 'Vierfachklaue',
        'Quadruple Swipe': 'Vierfache Kralle',
        'Raining Cats': 'Katzenterror',
        'Shockwave': 'Schockwelle',
        'Soulshade': 'Seelenschatten',
        'Splintering Nails': 'Spreizklaue',
        'Tempestuous Tear': 'Stürmischer Schlitzer',
      },
    },
    {
      'locale': 'fr',
      'missingTranslations': true,
      'replaceSync': {
        'Black Cat': 'Black Cat',
        'Copy Cat': 'double félin',
        'Soulshade': 'ombre d\'âme',
      },
      'replaceText': {
        'Biscuit Maker': 'Coup de tatane',
        'Bloody Scratch': 'Griffure sanglante',
        'Copycat': 'Double félin',
        'Double Swipe': 'Double fauchage',
        'Elevate and Eviscerate': 'Élévation éviscérante',
        'Grimalkin Gale': 'Rafale féline',
        'Impact': 'Impact',
        'Leaping One-two Paw': 'Griffade un-deux bondissante',
        'Leaping Quadruple Crossing': 'Quadruple griffade bondissante',
        'Mouser': 'Carnage dératiseur',
        'Nailchipper': 'Charcutage félin',
        'Nine Lives': 'Neuf-Vies',
        '(?<! )One-two Paw': 'Griffade un-deux',
        'Overshadow': 'Ombragement',
        'Predaceous Pounce': 'Prédation preste',
        '(?<! )Quadruple Crossing': 'Quadruple griffade',
        'Quadruple Swipe': 'Quadruple fauchage',
        'Raining Cats': 'Chataclysme',
        'Shockwave': 'Onde de choc',
        'Soulshade': 'ombre d\'âme',
        'Splintering Nails': 'Griffade brisante',
        'Tempestuous Tear': 'Déchiquetage diluvien',
      },
    },
    {
      'locale': 'ja',
      'missingTranslations': true,
      'replaceSync': {
        'Black Cat': 'ブラックキャット',
        'Copy Cat': 'コピーキャット',
        'Soulshade': 'ソウルシェード',
      },
      'replaceText': {
        'Biscuit Maker': 'ビスケットメーカー',
        'Bloody Scratch': 'ブラッディースクラッチ',
        'Copycat': 'コピーキャット',
        'Double Swipe': 'ダブルクロウ',
        'Elevate and Eviscerate': 'エレベート・エビセレート',
        'Grimalkin Gale': 'キャッタクリスム・ゲイル',
        'Impact': '衝撃',
        'Leaping One-two Paw': 'リーピング・デュアルネイル',
        'Leaping Quadruple Crossing': 'リーピング・クアドラプルネイル',
        'Mouser': 'マウサーラッシュ',
        'Nailchipper': 'ネイルチッパー',
        'Nine Lives': 'ナインライヴス',
        '(?<! )One-two Paw': 'デュアルネイル',
        'Overshadow': 'オーバーシャドウ',
        'Predaceous Pounce': 'キャッツレイド',
        '(?<! )Quadruple Crossing': 'クアドラプルネイル',
        'Quadruple Swipe': 'クァッドクロウ',
        'Raining Cats': 'レイニングキャッツ',
        'Shockwave': '衝撃波',
        'Soulshade': 'ソウルシェード',
        'Splintering Nails': 'スプレッドネイル',
        'Tempestuous Tear': 'テンペストテアー',
      },
    },
  ],
});
