/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./resources/netlog_defs.ts
// TODO: Maybe bring in a helper library that can compile-time extract these keys instead?
const combatantMemoryKeys = ['CurrentWorldID', 'WorldID', 'WorldName', 'BNpcID', 'BNpcNameID', 'PartyType', 'ID', 'OwnerID', 'WeaponId', 'Type', 'Job', 'Level', 'Name', 'CurrentHP', 'MaxHP', 'CurrentMP', 'MaxMP', 'PosX', 'PosY', 'PosZ', 'Heading', 'MonsterType', 'Status', 'ModelStatus', 'AggressionStatus', 'TargetID', 'IsTargetable', 'Radius', 'Distance', 'EffectiveDistance', 'NPCTargetID', 'CurrentGP', 'MaxGP', 'CurrentCP', 'MaxCP', 'PCTargetID', 'IsCasting1', 'IsCasting2', 'CastBuffID', 'CastTargetID', 'CastGroundTargetX', 'CastGroundTargetY', 'CastGroundTargetZ', 'CastDurationCurrent', 'CastDurationMax', 'TransformationId'];
const latestLogDefinitions = {
  GameLog: {
    type: '00',
    name: 'GameLog',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'ChatLog',
    fields: {
      type: 0,
      timestamp: 1,
      code: 2,
      name: 3,
      line: 4
    },
    subFields: {
      code: {
        '0039': {
          name: 'message',
          canAnonymize: true
        },
        '0038': {
          name: 'echo',
          canAnonymize: true
        },
        '0044': {
          name: 'dialog',
          canAnonymize: true
        },
        '0839': {
          name: 'message',
          canAnonymize: true
        }
      }
    },
    firstOptionalField: undefined
  },
  ChangeZone: {
    type: '01',
    name: 'ChangeZone',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Territory',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3
    },
    lastInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  ChangedPlayer: {
    type: '02',
    name: 'ChangedPlayer',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'ChangePrimaryPlayer',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3
    },
    playerIds: {
      2: 3
    },
    lastInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  AddedCombatant: {
    type: '03',
    name: 'AddedCombatant',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'AddCombatant',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      job: 4,
      level: 5,
      ownerId: 6,
      worldId: 7,
      world: 8,
      npcNameId: 9,
      npcBaseId: 10,
      currentHp: 11,
      hp: 12,
      currentMp: 13,
      mp: 14,
      // maxTp: 15,
      // tp: 16,
      x: 17,
      y: 18,
      z: 19,
      heading: 20
    },
    playerIds: {
      2: 3,
      6: null
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  RemovedCombatant: {
    type: '04',
    name: 'RemovedCombatant',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'RemoveCombatant',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      job: 4,
      level: 5,
      owner: 6,
      world: 8,
      npcNameId: 9,
      npcBaseId: 10,
      hp: 12,
      x: 17,
      y: 18,
      z: 19,
      heading: 20
    },
    playerIds: {
      2: 3,
      6: null
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  PartyList: {
    type: '11',
    name: 'PartyList',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'PartyList',
    fields: {
      type: 0,
      timestamp: 1,
      partyCount: 2,
      id0: 3,
      id1: 4,
      id2: 5,
      id3: 6,
      id4: 7,
      id5: 8,
      id6: 9,
      id7: 10,
      id8: 11,
      id9: 12,
      id10: 13,
      id11: 14,
      id12: 15,
      id13: 16,
      id14: 17,
      id15: 18,
      id16: 19,
      id17: 20,
      id18: 21,
      id19: 22,
      id20: 23,
      id21: 24,
      id22: 25,
      id23: 26
    },
    playerIds: {
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
      11: null,
      12: null,
      13: null,
      14: null,
      15: null,
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
      21: null,
      22: null,
      23: null,
      24: null,
      25: null,
      26: null
    },
    firstOptionalField: 3,
    canAnonymize: true,
    lastInclude: true
  },
  PlayerStats: {
    type: '12',
    name: 'PlayerStats',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'PlayerStats',
    fields: {
      type: 0,
      timestamp: 1,
      job: 2,
      strength: 3,
      dexterity: 4,
      vitality: 5,
      intelligence: 6,
      mind: 7,
      piety: 8,
      attackPower: 9,
      directHit: 10,
      criticalHit: 11,
      attackMagicPotency: 12,
      healMagicPotency: 13,
      determination: 14,
      skillSpeed: 15,
      spellSpeed: 16,
      tenacity: 18,
      localContentId: 19
    },
    canAnonymize: true,
    lastInclude: true,
    firstOptionalField: undefined
  },
  StartsUsing: {
    type: '20',
    name: 'StartsUsing',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'StartsCasting',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      source: 3,
      id: 4,
      ability: 5,
      targetId: 6,
      target: 7,
      castTime: 8,
      x: 9,
      y: 10,
      z: 11,
      heading: 12
    },
    possibleRsvFields: [5],
    blankFields: [6],
    playerIds: {
      2: 3,
      6: 7
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  Ability: {
    type: '21',
    name: 'Ability',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'ActionEffect',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      source: 3,
      id: 4,
      ability: 5,
      targetId: 6,
      target: 7,
      flags: 8,
      damage: 9,
      targetCurrentHp: 24,
      targetMaxHp: 25,
      targetCurrentMp: 26,
      targetMaxMp: 27,
      // targetCurrentTp: 28,
      // targetMaxTp: 29,
      targetX: 30,
      targetY: 31,
      targetZ: 32,
      targetHeading: 33,
      currentHp: 34,
      maxHp: 35,
      currentMp: 36,
      maxMp: 37,
      // currentTp: 38;
      // maxTp: 39;
      x: 40,
      y: 41,
      z: 42,
      heading: 43,
      sequence: 44,
      targetIndex: 45,
      targetCount: 46
    },
    possibleRsvFields: [5],
    playerIds: {
      2: 3,
      6: 7
    },
    blankFields: [6],
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkAOEAbility: {
    type: '22',
    name: 'NetworkAOEAbility',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'AOEActionEffect',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      source: 3,
      id: 4,
      ability: 5,
      targetId: 6,
      target: 7,
      flags: 8,
      damage: 9,
      targetCurrentHp: 24,
      targetMaxHp: 25,
      targetCurrentMp: 26,
      targetMaxMp: 27,
      // targetCurrentTp: 28,
      // targetMaxTp: 29,
      targetX: 30,
      targetY: 31,
      targetZ: 32,
      targetHeading: 33,
      currentHp: 34,
      maxHp: 35,
      currentMp: 36,
      maxMp: 37,
      // currentTp: 38;
      // maxTp: 39;
      x: 40,
      y: 41,
      z: 42,
      heading: 43,
      sequence: 44,
      targetIndex: 45,
      targetCount: 46
    },
    possibleRsvFields: [5],
    playerIds: {
      2: 3,
      6: 7
    },
    blankFields: [6],
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkCancelAbility: {
    type: '23',
    name: 'NetworkCancelAbility',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'CancelAction',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      source: 3,
      id: 4,
      name: 5,
      reason: 6
    },
    possibleRsvFields: [5],
    playerIds: {
      2: 3
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkDoT: {
    type: '24',
    name: 'NetworkDoT',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'DoTHoT',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      which: 4,
      effectId: 5,
      damage: 6,
      currentHp: 7,
      maxHp: 8,
      currentMp: 9,
      maxMp: 10,
      // currentTp: 11,
      // maxTp: 12,
      x: 13,
      y: 14,
      z: 15,
      heading: 16,
      sourceId: 17,
      source: 18,
      // An id number lookup into the AttackType table
      damageType: 19,
      sourceCurrentHp: 20,
      sourceMaxHp: 21,
      sourceCurrentMp: 22,
      sourceMaxMp: 23,
      // sourceCurrentTp: 24,
      // sourceMaxTp: 25,
      sourceX: 26,
      sourceY: 27,
      sourceZ: 28,
      sourceHeading: 29
    },
    playerIds: {
      2: 3,
      17: 18
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  WasDefeated: {
    type: '25',
    name: 'WasDefeated',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Death',
    fields: {
      type: 0,
      timestamp: 1,
      targetId: 2,
      target: 3,
      sourceId: 4,
      source: 5
    },
    playerIds: {
      2: 3,
      4: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  GainsEffect: {
    type: '26',
    name: 'GainsEffect',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'StatusAdd',
    fields: {
      type: 0,
      timestamp: 1,
      effectId: 2,
      effect: 3,
      duration: 4,
      sourceId: 5,
      source: 6,
      targetId: 7,
      target: 8,
      count: 9,
      targetMaxHp: 10,
      sourceMaxHp: 11
    },
    possibleRsvFields: [3],
    playerIds: {
      5: 6,
      7: 8
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  HeadMarker: {
    type: '27',
    name: 'HeadMarker',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'TargetIcon',
    fields: {
      type: 0,
      timestamp: 1,
      targetId: 2,
      target: 3,
      id: 6
    },
    playerIds: {
      2: 3
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkRaidMarker: {
    type: '28',
    name: 'NetworkRaidMarker',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'WaymarkMarker',
    fields: {
      type: 0,
      timestamp: 1,
      operation: 2,
      waymark: 3,
      id: 4,
      name: 5,
      x: 6,
      y: 7,
      z: 8
    },
    playerIds: {
      4: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkTargetMarker: {
    type: '29',
    name: 'NetworkTargetMarker',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'SignMarker',
    fields: {
      type: 0,
      timestamp: 1,
      operation: 2,
      // Add, Update, Delete
      waymark: 3,
      id: 4,
      name: 5,
      targetId: 6,
      targetName: 7
    },
    playerIds: {
      4: 5,
      6: 7
    },
    firstOptionalField: undefined
  },
  LosesEffect: {
    type: '30',
    name: 'LosesEffect',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'StatusRemove',
    fields: {
      type: 0,
      timestamp: 1,
      effectId: 2,
      effect: 3,
      sourceId: 5,
      source: 6,
      targetId: 7,
      target: 8,
      count: 9
    },
    possibleRsvFields: [3],
    playerIds: {
      5: 6,
      7: 8
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkGauge: {
    type: '31',
    name: 'NetworkGauge',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Gauge',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      data0: 3,
      data1: 4,
      data2: 5,
      data3: 6
    },
    playerIds: {
      2: null
    },
    // Sometimes this last field looks like a player id.
    // For safety, anonymize all of the gauge data.
    firstUnknownField: 3,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkWorld: {
    type: '32',
    name: 'NetworkWorld',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'World',
    fields: {
      type: 0,
      timestamp: 1
    },
    isUnknown: true,
    firstOptionalField: undefined
  },
  ActorControl: {
    type: '33',
    name: 'ActorControl',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Director',
    fields: {
      type: 0,
      timestamp: 1,
      instance: 2,
      command: 3,
      data0: 4,
      data1: 5,
      data2: 6,
      data3: 7
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NameToggle: {
    type: '34',
    name: 'NameToggle',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'NameToggle',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      targetId: 4,
      targetName: 5,
      toggle: 6
    },
    playerIds: {
      2: 3,
      4: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  Tether: {
    type: '35',
    name: 'Tether',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Tether',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      source: 3,
      targetId: 4,
      target: 5,
      id: 8
    },
    playerIds: {
      2: 3,
      4: 5
    },
    canAnonymize: true,
    firstUnknownField: 9,
    firstOptionalField: undefined
  },
  LimitBreak: {
    type: '36',
    name: 'LimitBreak',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'LimitBreak',
    fields: {
      type: 0,
      timestamp: 1,
      valueHex: 2,
      bars: 3
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkEffectResult: {
    type: '37',
    name: 'NetworkEffectResult',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'EffectResult',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      sequenceId: 4,
      currentHp: 5,
      maxHp: 6,
      currentMp: 7,
      maxMp: 8,
      currentShield: 9,
      // Field index 10 is always `0`
      x: 11,
      y: 12,
      z: 13,
      heading: 14
    },
    playerIds: {
      2: 3
    },
    firstUnknownField: 22,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  StatusEffect: {
    type: '38',
    name: 'StatusEffect',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'StatusList',
    fields: {
      type: 0,
      timestamp: 1,
      targetId: 2,
      target: 3,
      jobLevelData: 4,
      hp: 5,
      maxHp: 6,
      mp: 7,
      maxMp: 8,
      currentShield: 9,
      // Field index 10 is always `0`
      x: 11,
      y: 12,
      z: 13,
      heading: 14,
      data0: 15,
      data1: 16,
      data2: 17,
      data3: 18,
      data4: 19,
      data5: 20
      // Variable number of triplets here, but at least one.
    },

    playerIds: {
      2: 3
    },
    firstUnknownField: 18,
    canAnonymize: true,
    firstOptionalField: 18
  },
  NetworkUpdateHP: {
    type: '39',
    name: 'NetworkUpdateHP',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'UpdateHp',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      currentHp: 4,
      maxHp: 5,
      currentMp: 6,
      maxMp: 7,
      // currentTp: 8,
      // maxTp: 9,
      x: 10,
      y: 11,
      z: 12,
      heading: 13
    },
    playerIds: {
      2: 3
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  Map: {
    type: '40',
    name: 'Map',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'ChangeMap',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      regionName: 3,
      placeName: 4,
      placeNameSub: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    lastInclude: true
  },
  SystemLogMessage: {
    type: '41',
    name: 'SystemLogMessage',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'SystemLogMessage',
    fields: {
      type: 0,
      timestamp: 1,
      instance: 2,
      id: 3,
      param0: 4,
      param1: 5,
      param2: 6
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  StatusList3: {
    type: '42',
    name: 'StatusList3',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'StatusList3',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3
      // triplets of fields from here (effectId, data, playerId)?
    },

    playerIds: {
      2: 3
    },
    canAnonymize: true,
    firstOptionalField: 4,
    firstUnknownField: 4
  },
  ParserInfo: {
    type: '249',
    name: 'ParserInfo',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Settings',
    fields: {
      type: 0,
      timestamp: 1
    },
    globalInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  ProcessInfo: {
    type: '250',
    name: 'ProcessInfo',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Process',
    fields: {
      type: 0,
      timestamp: 1
    },
    globalInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  Debug: {
    type: '251',
    name: 'Debug',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Debug',
    fields: {
      type: 0,
      timestamp: 1
    },
    globalInclude: true,
    canAnonymize: false,
    firstOptionalField: undefined
  },
  PacketDump: {
    type: '252',
    name: 'PacketDump',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'PacketDump',
    fields: {
      type: 0,
      timestamp: 1
    },
    canAnonymize: false,
    firstOptionalField: undefined
  },
  Version: {
    type: '253',
    name: 'Version',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Version',
    fields: {
      type: 0,
      timestamp: 1
    },
    globalInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  Error: {
    type: '254',
    name: 'Error',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Error',
    fields: {
      type: 0,
      timestamp: 1
    },
    canAnonymize: false,
    firstOptionalField: undefined
  },
  None: {
    type: '[0-9]+',
    name: 'None',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'None',
    fields: {
      type: 0,
      timestamp: 1
    },
    isUnknown: true,
    firstOptionalField: undefined
  },
  // OverlayPlugin log lines
  LineRegistration: {
    type: '256',
    name: 'LineRegistration',
    source: 'OverlayPlugin',
    messageType: '256',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      source: 3,
      version: 4
    },
    globalInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  MapEffect: {
    type: '257',
    name: 'MapEffect',
    source: 'OverlayPlugin',
    messageType: '257',
    fields: {
      type: 0,
      timestamp: 1,
      instance: 2,
      flags: 3,
      // values for the location field seem to vary between instances
      // (e.g. a location of '08' in P5S does not appear to be the same location in P5S as in P6S)
      // but this field does appear to consistently contain position info for the effect rendering
      location: 4,
      data0: 5,
      data1: 6
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  FateDirector: {
    type: '258',
    name: 'FateDirector',
    source: 'OverlayPlugin',
    messageType: '258',
    // fateId and progress are in hex.
    fields: {
      type: 0,
      timestamp: 1,
      category: 2,
      // padding0: 3,
      fateId: 4,
      progress: 5
      // param3: 6,
      // param4: 7,
      // param5: 8,
      // param6: 9,
      // padding1: 10,
    },

    canAnonymize: true,
    firstOptionalField: undefined
  },
  CEDirector: {
    type: '259',
    name: 'CEDirector',
    source: 'OverlayPlugin',
    messageType: '259',
    // all fields are in hex
    fields: {
      type: 0,
      timestamp: 1,
      popTime: 2,
      timeRemaining: 3,
      // unknown0: 4,
      ceKey: 5,
      numPlayers: 6,
      status: 7,
      // unknown1: 8,
      progress: 9
      // unknown2: 10,
      // unknown3: 11,
      // unknown4: 12,
    },

    canAnonymize: true,
    firstOptionalField: undefined
  },
  InCombat: {
    type: '260',
    name: 'InCombat',
    source: 'OverlayPlugin',
    messageType: '260',
    fields: {
      type: 0,
      timestamp: 1,
      inACTCombat: 2,
      inGameCombat: 3,
      isACTChanged: 4,
      isGameChanged: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  CombatantMemory: {
    type: '261',
    name: 'CombatantMemory',
    source: 'OverlayPlugin',
    messageType: '261',
    fields: {
      type: 0,
      timestamp: 1,
      change: 2,
      id: 3
      // from here, pairs of field name/values
    },

    canAnonymize: true,
    firstOptionalField: 5,
    // TODO: fix this data structure and anonymizer to be able to handle repeatingFields.
    // At the very least, Name and PCTargetID need to be anonymized as well.
    firstUnknownField: 4,
    playerIds: {
      3: null
    },
    repeatingFields: {
      startingIndex: 4,
      label: 'pair',
      names: ['key', 'value'],
      sortKeys: true,
      primaryKey: 'key',
      possibleKeys: combatantMemoryKeys
    }
  },
  RSVData: {
    type: '262',
    name: 'RSVData',
    source: 'OverlayPlugin',
    messageType: '262',
    fields: {
      type: 0,
      timestamp: 1,
      locale: 2,
      // unknown0: 3,
      key: 4,
      value: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  StartsUsingExtra: {
    type: '263',
    name: 'StartsUsingExtra',
    source: 'OverlayPlugin',
    messageType: '263',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      id: 3,
      x: 4,
      y: 5,
      z: 6,
      heading: 7
    },
    playerIds: {
      2: null
    },
    canAnonymize: true,
    firstOptionalField: 7
  },
  AbilityExtra: {
    type: '264',
    name: 'AbilityExtra',
    source: 'OverlayPlugin',
    messageType: '264',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      id: 3,
      globalEffectCounter: 4,
      dataFlag: 5,
      x: 6,
      y: 7,
      z: 8,
      heading: 9
    },
    blankFields: [6],
    playerIds: {
      2: null
    },
    canAnonymize: true,
    firstOptionalField: 9
  },
  ContentFinderSettings: {
    type: '265',
    name: 'ContentFinderSettings',
    source: 'OverlayPlugin',
    messageType: '265',
    fields: {
      type: 0,
      timestamp: 1,
      zoneId: 2,
      zoneName: 3,
      inContentFinderContent: 4,
      unrestrictedParty: 5,
      minimalItemLevel: 6,
      silenceEcho: 7,
      explorerMode: 8,
      levelSync: 9
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NpcYell: {
    type: '266',
    name: 'NpcYell',
    source: 'OverlayPlugin',
    messageType: '266',
    fields: {
      type: 0,
      timestamp: 1,
      npcId: 2,
      npcNameId: 3,
      npcYellId: 4
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  BattleTalk2: {
    type: '267',
    name: 'BattleTalk2',
    source: 'OverlayPlugin',
    messageType: '267',
    fields: {
      type: 0,
      timestamp: 1,
      npcId: 2,
      instance: 3,
      npcNameId: 4,
      instanceContentTextId: 5,
      displayMs: 6
      // unknown1: 7,
      // unknown2: 8,
      // unknown3: 9,
      // unknown4: 10,
    },

    canAnonymize: true,
    firstOptionalField: undefined
  },
  Countdown: {
    type: '268',
    name: 'Countdown',
    source: 'OverlayPlugin',
    messageType: '268',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      worldId: 3,
      countdownTime: 4,
      result: 5,
      name: 6
    },
    playerIds: {
      2: 6
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  CountdownCancel: {
    type: '269',
    name: 'CountdownCancel',
    source: 'OverlayPlugin',
    messageType: '269',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      worldId: 3,
      name: 4
    },
    playerIds: {
      2: 4
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  ActorMove: {
    type: '270',
    name: 'ActorMove',
    source: 'OverlayPlugin',
    messageType: '270',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      heading: 3,
      // OP calls this 'rotation', but cactbot consistently uses 'heading'
      // unknown1: 4,
      // unknown2: 5,
      x: 6,
      y: 7,
      z: 8
    },
    playerIds: {
      2: null
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  ActorSetPos: {
    type: '271',
    name: 'ActorSetPos',
    source: 'OverlayPlugin',
    messageType: '271',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      heading: 3,
      // OP calls this 'rotation', but cactbot consistently uses 'heading'
      // unknown1: 4,
      // unknown2: 5,
      x: 6,
      y: 7,
      z: 8
    },
    playerIds: {
      2: null
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  SpawnNpcExtra: {
    type: '272',
    name: 'SpawnNpcExtra',
    source: 'OverlayPlugin',
    messageType: '272',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      parentId: 3,
      tetherId: 4,
      animationState: 5
    },
    playerIds: {
      3: null // `id` is an npc, but parentId could be a tethered player?
    },

    canAnonymize: true,
    firstOptionalField: undefined
  },
  ActorControlExtra: {
    type: '273',
    name: 'ActorControlExtra',
    source: 'OverlayPlugin',
    messageType: '273',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      category: 3,
      param1: 4,
      param2: 5,
      param3: 6,
      param4: 7
    },
    playerIds: {
      2: null
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  ActorControlSelfExtra: {
    type: '274',
    name: 'ActorControlSelfExtra',
    source: 'OverlayPlugin',
    messageType: '274',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      category: 3,
      param1: 4,
      param2: 5,
      param3: 6,
      param4: 7,
      param5: 8,
      param6: 9
    },
    playerIds: {
      2: null
    },
    canAnonymize: true,
    firstOptionalField: undefined
  }
};
const logDefinitionsVersions = {
  'latest': latestLogDefinitions
};

// Verify that this has the right type, but export `as const`.
const assertLogDefinitions = logDefinitionsVersions;
console.assert(assertLogDefinitions);
/* harmony default export */ const netlog_defs = (logDefinitionsVersions['latest']);
;// CONCATENATED MODULE: ./resources/not_reached.ts
// Helper Error for TypeScript situations where the programmer thinks they
// know better than TypeScript that some situation will never occur.

// The intention here is that the programmer does not expect a particular
// bit of code to happen, and so has not written careful error handling.
// If it does occur, at least there will be an error and we can figure out why.
// This is preferable to casting or disabling TypeScript altogether in order to
// avoid syntax errors.

// One common example is a regex, where if the regex matches then all of the
// (non-optional) regex groups will also be valid, but TypeScript doesn't know.
class UnreachableCode extends Error {
  constructor() {
    super('This code shouldn\'t be reached');
  }
}
;// CONCATENATED MODULE: ./resources/regexes.ts


const separator = ':';
const matchDefault = '[^:]*';
const matchWithColonsDefault = '(?:[^:]|: )*?';
const fieldsWithPotentialColons = ['effect', 'ability'];
const defaultParams = (type, version, include) => {
  const logType = logDefinitionsVersions[version][type];
  if (include === undefined) {
    include = Object.keys(logType.fields);
    if ('repeatingFields' in logType) {
      include.push(logType.repeatingFields.label);
    }
  }
  const params = {};
  const firstOptionalField = logType.firstOptionalField;
  for (const [prop, index] of Object.entries(logType.fields)) {
    if (!include.includes(prop)) continue;
    const param = {
      field: prop,
      optional: firstOptionalField !== undefined && index >= firstOptionalField
    };
    if (prop === 'type') param.value = logType.type;
    params[index] = param;
  }
  if ('repeatingFields' in logType && include.includes(logType.repeatingFields.label)) {
    params[logType.repeatingFields.startingIndex] = {
      field: logType.repeatingFields.label,
      optional: firstOptionalField !== undefined && logType.repeatingFields.startingIndex >= firstOptionalField,
      repeating: true,
      repeatingKeys: [...logType.repeatingFields.names],
      sortKeys: logType.repeatingFields.sortKeys,
      primaryKey: logType.repeatingFields.primaryKey,
      possibleKeys: [...logType.repeatingFields.possibleKeys]
    };
  }
  return params;
};
const isRepeatingField = (repeating, value) => {
  if (repeating !== true) return false;
  // Allow excluding the field to match for extraction
  if (value === undefined) return true;
  if (!Array.isArray(value)) return false;
  for (const e of value) {
    if (typeof e !== 'object') return false;
  }
  return true;
};
const parseHelper = (params, defKey, fields) => {
  params = params ?? {};
  const validFields = [];
  for (const index in fields) {
    const field = fields[index];
    if (field) validFields.push(field.field);
  }
  Regexes.validateParams(params, defKey, ['capture', ...validFields]);

  // Find the last key we care about, so we can shorten the regex if needed.
  const capture = Regexes.trueIfUndefined(params.capture);
  const fieldKeys = Object.keys(fields).sort((a, b) => parseInt(a) - parseInt(b));
  let maxKeyStr;
  if (capture) {
    const keys = [];
    for (const key in fields) keys.push(key);
    let tmpKey = keys.pop();
    if (tmpKey === undefined) {
      maxKeyStr = fieldKeys[fieldKeys.length - 1] ?? '0';
    } else {
      while (fields[tmpKey]?.optional && !((fields[tmpKey]?.field ?? '') in params)) tmpKey = keys.pop();
      maxKeyStr = tmpKey ?? '0';
    }
  } else {
    maxKeyStr = '0';
    for (const key in fields) {
      const value = fields[key] ?? {};
      if (typeof value !== 'object') continue;
      const fieldName = fields[key]?.field;
      if (fieldName !== undefined && fieldName in params) maxKeyStr = key;
    }
  }
  const maxKey = parseInt(maxKeyStr);

  // Special case for Ability to handle aoe and non-aoe.
  const abilityMessageType = `(?:${netlog_defs.Ability.messageType}|${netlog_defs.NetworkAOEAbility.messageType})`;
  const abilityHexCode = '(?:15|16)';

  // Build the regex from the fields.
  const prefix = defKey !== 'Ability' ? netlog_defs[defKey].messageType : abilityMessageType;

  // Hex codes are a minimum of two characters.  Abilities are special because
  // they need to support both 0x15 and 0x16.
  const typeAsHex = parseInt(netlog_defs[defKey].type).toString(16).toUpperCase();
  const defaultHexCode = typeAsHex.length < 2 ? `00${typeAsHex}`.slice(-2) : typeAsHex;
  const hexCode = defKey !== 'Ability' ? defaultHexCode : abilityHexCode;
  let str = '';
  if (capture) str += `(?<timestamp>\\y{Timestamp}) ${prefix} (?<type>${hexCode})`;else str += `\\y{Timestamp} ${prefix} ${hexCode}`;
  let lastKey = 1;
  for (const keyStr in fields) {
    const parseField = fields[keyStr];
    if (parseField === undefined) continue;
    const fieldName = parseField.field;

    // Regex handles these manually above in the `str` initialization.
    if (fieldName === 'timestamp' || fieldName === 'type') continue;
    const key = parseInt(keyStr);
    // Fill in blanks.
    const missingFields = key - lastKey - 1;
    if (missingFields === 1) str += `${separator}${matchDefault}`;else if (missingFields > 1) str += `(?:${separator}${matchDefault}){${missingFields}}`;
    lastKey = key;
    str += separator;
    if (typeof parseField !== 'object') throw new Error(`${defKey}: invalid value: ${JSON.stringify(parseField)}`);
    const fieldDefault = fieldName !== undefined && fieldsWithPotentialColons.includes(fieldName) ? matchWithColonsDefault : matchDefault;
    const defaultFieldValue = parseField.value?.toString() ?? fieldDefault;
    const fieldValue = params[fieldName];
    if (isRepeatingField(fields[keyStr]?.repeating, fieldValue)) {
      const repeatingFieldsSeparator = '(?:$|:)';
      let repeatingArray = fieldValue;
      const sortKeys = fields[keyStr]?.sortKeys;
      const primaryKey = fields[keyStr]?.primaryKey;
      const possibleKeys = fields[keyStr]?.possibleKeys;

      // primaryKey is required if this is a repeating field per typedef in netlog_defs.ts
      // Same with possibleKeys
      if (primaryKey === undefined || possibleKeys === undefined) throw new UnreachableCode();

      // Allow sorting if needed
      if (sortKeys) {
        // Also sort our valid keys list
        possibleKeys.sort((left, right) => left.toLowerCase().localeCompare(right.toLowerCase()));
        if (repeatingArray !== undefined) {
          repeatingArray = [...repeatingArray].sort((left, right) => {
            // We check the validity of left/right because they're user-supplied
            if (typeof left !== 'object' || left[primaryKey] === undefined) {
              console.warn('Invalid argument passed to trigger:', left);
              return 0;
            }
            const leftValue = left[primaryKey];
            if (typeof leftValue !== 'string' || !possibleKeys?.includes(leftValue)) {
              console.warn('Invalid argument passed to trigger:', left);
              return 0;
            }
            if (typeof right !== 'object' || right[primaryKey] === undefined) {
              console.warn('Invalid argument passed to trigger:', right);
              return 0;
            }
            const rightValue = right[primaryKey];
            if (typeof rightValue !== 'string' || !possibleKeys?.includes(rightValue)) {
              console.warn('Invalid argument passed to trigger:', right);
              return 0;
            }
            return leftValue.toLowerCase().localeCompare(rightValue.toLowerCase());
          });
        }
      }
      const anonReps = repeatingArray;
      // Loop over our possible keys
      // Build a regex that can match any possible key with required values substituted in
      possibleKeys.forEach(possibleKey => {
        const rep = anonReps?.find(rep => primaryKey in rep && rep[primaryKey] === possibleKey);
        let fieldRegex = '';
        // Rather than looping over the keys defined on the object,
        // loop over the base type def's keys. This enforces the correct order.
        fields[keyStr]?.repeatingKeys?.forEach(key => {
          let val = rep?.[key];
          if (rep === undefined || !(key in rep)) {
            // If we don't have a value for this key
            // insert a placeholder, unless it's the primary key
            if (key === primaryKey) val = possibleKey;else val = matchDefault;
          }
          if (typeof val !== 'string') {
            if (!Array.isArray(val)) val = matchDefault;else if (val.length < 1) val = matchDefault;else if (val.some(v => typeof v !== 'string')) val = matchDefault;
          }
          fieldRegex += Regexes.maybeCapture(key === primaryKey ? false : capture,
          // All capturing groups are `fieldName` + `possibleKey`, e.g. `pairIsCasting1`
          fieldName + possibleKey, val, defaultFieldValue) + repeatingFieldsSeparator;
        });
        if (fieldRegex.length > 0) {
          str += `(?:${fieldRegex})${rep !== undefined ? '' : '?'}`;
        }
      });
    } else if (fields[keyStr]?.repeating) {
      // If this is a repeating field but the actual value is empty or otherwise invalid,
      // don't process further. We can't use `continue` in the above block because that
      // would skip the early-out break at the end of the loop.
    } else {
      if (fieldName !== undefined) {
        str += Regexes.maybeCapture(
        // more accurate type instead of `as` cast
        // maybe this function needs a refactoring
        capture, fieldName, fieldValue, defaultFieldValue);
      } else {
        str += fieldValue;
      }
    }

    // Stop if we're not capturing and don't care about future fields.
    if (key >= maxKey) break;
  }
  str += '(?:$|:)';
  return Regexes.parse(str);
};
const buildRegex = (type, params) => {
  return parseHelper(params, type, defaultParams(type, Regexes.logVersion));
};
class Regexes {
  static logVersion = 'latest';

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-20-0x14-networkstartscasting
   */
  static startsUsing(params) {
    return buildRegex('StartsUsing', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-21-0x15-networkability
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-22-0x16-networkaoeability
   */
  static ability(params) {
    return buildRegex('Ability', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-21-0x15-networkability
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-22-0x16-networkaoeability
   *
   * @deprecated Use `ability` instead
   */
  static abilityFull(params) {
    return this.ability(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-27-0x1b-networktargeticon-head-marker
   */
  static headMarker(params) {
    return buildRegex('HeadMarker', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-03-0x03-addcombatant
   */
  static addedCombatant(params) {
    return buildRegex('AddedCombatant', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-03-0x03-addcombatant
   */
  static addedCombatantFull(params) {
    return this.addedCombatant(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-04-0x04-removecombatant
   */
  static removingCombatant(params) {
    return buildRegex('RemovedCombatant', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-26-0x1a-networkbuff
   */
  static gainsEffect(params) {
    return buildRegex('GainsEffect', params);
  }

  /**
   * Prefer gainsEffect over this function unless you really need extra data.
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-38-0x26-networkstatuseffects
   */
  static statusEffectExplicit(params) {
    return buildRegex('StatusEffect', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-30-0x1e-networkbuffremove
   */
  static losesEffect(params) {
    return buildRegex('LosesEffect', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-35-0x23-networktether
   */
  static tether(params) {
    return buildRegex('Tether', params);
  }

  /**
   * 'target' was defeated by 'source'
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-25-0x19-networkdeath
   */
  static wasDefeated(params) {
    return buildRegex('WasDefeated', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-24-0x18-networkdot
   */
  static networkDoT(params) {
    return buildRegex('NetworkDoT', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static echo(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'echo', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    params.code = '0038';
    return Regexes.gameLog(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static dialog(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'dialog', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    params.code = '0044';
    return Regexes.gameLog(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static message(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'message', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    params.code = '0839';
    return Regexes.gameLog(params);
  }

  /**
   * fields: code, name, line, capture
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static gameLog(params) {
    return buildRegex('GameLog', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static gameNameLog(params) {
    // Backwards compatability.
    return Regexes.gameLog(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-12-0x0c-playerstats
   */
  static statChange(params) {
    return buildRegex('PlayerStats', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-01-0x01-changezone
   */
  static changeZone(params) {
    return buildRegex('ChangeZone', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-33-0x21-network6d-actor-control
   */
  static network6d(params) {
    return buildRegex('ActorControl', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-34-0x22-networknametoggle
   */
  static nameToggle(params) {
    return buildRegex('NameToggle', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-40-0x28-map
   */
  static map(params) {
    return buildRegex('Map', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-41-0x29-systemlogmessage
   */
  static systemLogMessage(params) {
    return buildRegex('SystemLogMessage', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-257-0x101-mapeffect
   */
  static mapEffect(params) {
    return buildRegex('MapEffect', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-261-0x105-combatantmemory
   */
  static combatantMemory(params) {
    return buildRegex('CombatantMemory', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-263-0x107-startsusingextra
   */
  static startsUsingExtra(params) {
    return buildRegex('StartsUsingExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-264-0x108-abilityextra
   */
  static abilityExtra(params) {
    return buildRegex('AbilityExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-265-0x109-contentfindersettings
   */
  static contentFinderSettings(params) {
    return buildRegex('ContentFinderSettings', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-266-0x10a-npcyell
   */
  static npcYell(params) {
    return buildRegex('NpcYell', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-267-0x10b-battletalk2
   */
  static battleTalk2(params) {
    return buildRegex('BattleTalk2', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-268-0x10c-countdown
   */
  static countdown(params) {
    return buildRegex('Countdown', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-269-0x10d-countdowncancel
   */
  static countdownCancel(params) {
    return buildRegex('CountdownCancel', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-270-0x10e-actormove
   */
  static actorMove(params) {
    return buildRegex('ActorMove', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-271-0x10f-actorsetpos
   */
  static actorSetPos(params) {
    return buildRegex('ActorSetPos', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-272-0x110-spawnnpcextra
   */
  static spawnNpcExtra(params) {
    return buildRegex('SpawnNpcExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-273-0x111-actorcontrolextra
   */
  static actorControlExtra(params) {
    return buildRegex('ActorControlExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-274-0x112-actorcontrolselfextra
   */
  static actorControlSelfExtra(params) {
    return buildRegex('ActorControlSelfExtra', params);
  }

  /**
   * Helper function for building named capture group
   */
  static maybeCapture(capture, name, value, defaultValue) {
    if (value === undefined) value = defaultValue ?? matchDefault;
    value = Regexes.anyOf(value);
    return capture ? Regexes.namedCapture(name, value) : value;
  }
  static optional(str) {
    return `(?:${str})?`;
  }

  // Creates a named regex capture group named |name| for the match |value|.
  static namedCapture(name, value) {
    if (name.includes('>')) console.error(`"${name}" contains ">".`);
    if (name.includes('<')) console.error(`"${name}" contains ">".`);
    return `(?<${name}>${value})`;
  }

  /**
   * Convenience for turning multiple args into a unioned regular expression.
   * anyOf(x, y, z) or anyOf([x, y, z]) do the same thing, and return (?:x|y|z).
   * anyOf(x) or anyOf(x) on its own simplifies to just x.
   * args may be strings or RegExp, although any additional markers to RegExp
   * like /insensitive/i are dropped.
   */
  static anyOf(...args) {
    const anyOfArray = array => {
      const [elem] = array;
      if (elem !== undefined && array.length === 1) return `${elem instanceof RegExp ? elem.source : elem}`;
      return `(?:${array.map(elem => elem instanceof RegExp ? elem.source : elem).join('|')})`;
    };
    let array = [];
    const [firstArg] = args;
    if (args.length === 1) {
      if (typeof firstArg === 'string' || firstArg instanceof RegExp) array = [firstArg];else if (Array.isArray(firstArg)) array = firstArg;else array = [];
    } else {
      // TODO: more accurate type instead of `as` cast
      array = args;
    }
    return anyOfArray(array);
  }
  static parse(regexpString) {
    const kCactbotCategories = {
      Timestamp: '^.{14}',
      NetTimestamp: '.{33}',
      NetField: '(?:[^|]*\\|)',
      LogType: '[0-9A-Fa-f]{2}',
      AbilityCode: '[0-9A-Fa-f]{1,8}',
      ObjectId: '[0-9A-F]{8}',
      // Matches any character name (including empty strings which the FFXIV
      // ACT plugin can generate when unknown).
      Name: '(?:[^\\s:|]+(?: [^\\s:|]+)?|)',
      // Floats can have comma as separator in FFXIV plugin output: https://github.com/ravahn/FFXIV_ACT_Plugin/issues/137
      Float: '-?[0-9]+(?:[.,][0-9]+)?(?:E-?[0-9]+)?'
    };

    // All regexes in cactbot are case insensitive.
    // This avoids headaches as things like `Vice and Vanity` turns into
    // `Vice And Vanity`, especially for French and German.  It appears to
    // have a ~20% regex parsing overhead, but at least they work.
    let modifiers = 'i';
    if (regexpString instanceof RegExp) {
      modifiers += (regexpString.global ? 'g' : '') + (regexpString.multiline ? 'm' : '');
      regexpString = regexpString.source;
    }
    regexpString = regexpString.replace(/\\y\{(.*?)\}/g, (match, group) => {
      return kCactbotCategories[group] || match;
    });
    return new RegExp(regexpString, modifiers);
  }

  // Like Regex.Regexes.parse, but force global flag.
  static parseGlobal(regexpString) {
    const regex = Regexes.parse(regexpString);
    let modifiers = 'gi';
    if (regexpString instanceof RegExp) modifiers += regexpString.multiline ? 'm' : '';
    return new RegExp(regex.source, modifiers);
  }
  static trueIfUndefined(value) {
    if (typeof value === 'undefined') return true;
    return !!value;
  }
  static validateParams(f, funcName, params) {
    if (f === null) return;
    if (typeof f !== 'object') return;
    const keys = Object.keys(f);
    for (const key of keys) {
      if (!params.includes(key)) {
        throw new Error(`${funcName}: invalid parameter '${key}'.  ` + `Valid params: ${JSON.stringify(params)}`);
      }
    }
  }
}
;// CONCATENATED MODULE: ./resources/netregexes.ts



const netregexes_separator = '\\|';
const netregexes_matchDefault = '[^|]*';

// If NetRegexes.setFlagTranslationsNeeded is set to true, then any
// regex created that requires a translation will begin with this string
// and match the magicStringRegex.  This is maybe a bit goofy, but is
// a pretty straightforward way to mark regexes for translations.
// If issue #1306 is ever resolved, we can remove this.
const magicTranslationString = `^^`;
const magicStringRegex = /^\^\^/;

// can't simply export this, see https://github.com/OverlayPlugin/cactbot/pull/4957#discussion_r1002590589
const keysThatRequireTranslationAsConst = ['ability', 'name', 'source', 'target', 'line'];
const keysThatRequireTranslation = keysThatRequireTranslationAsConst;
const gameLogCodes = {
  echo: '0038',
  dialog: '0044',
  message: '0839'
};

// See docs/LogGuide.md for more info about these categories
const actorControlType = {
  setAnimState: '003E',
  publicContentText: '0834',
  logMsg: '020F',
  logMsgParams: '0210'
};
const netregexes_defaultParams = (type, version, include) => {
  const logType = logDefinitionsVersions[version][type];
  if (include === undefined) {
    include = Object.keys(logType.fields);
    if ('repeatingFields' in logType) {
      include.push(logType.repeatingFields.label);
    }
  }
  const params = {};
  const firstOptionalField = logType.firstOptionalField;
  for (const [prop, index] of Object.entries(logType.fields)) {
    if (!include.includes(prop)) continue;
    const param = {
      field: prop,
      optional: firstOptionalField !== undefined && index >= firstOptionalField
    };
    if (prop === 'type') param.value = logType.type;
    params[index] = param;
  }
  if ('repeatingFields' in logType && include.includes(logType.repeatingFields.label)) {
    params[logType.repeatingFields.startingIndex] = {
      field: logType.repeatingFields.label,
      optional: firstOptionalField !== undefined && logType.repeatingFields.startingIndex >= firstOptionalField,
      repeating: true,
      repeatingKeys: [...logType.repeatingFields.names],
      sortKeys: logType.repeatingFields.sortKeys,
      primaryKey: logType.repeatingFields.primaryKey,
      possibleKeys: [...logType.repeatingFields.possibleKeys]
    };
  }
  return params;
};
const netregexes_isRepeatingField = (repeating, value) => {
  if (repeating !== true) return false;
  // Allow excluding the field to match for extraction
  if (value === undefined) return true;
  if (!Array.isArray(value)) return false;
  for (const e of value) {
    if (typeof e !== 'object') return false;
  }
  return true;
};
const netregexes_parseHelper = (params, funcName, fields) => {
  params = params ?? {};
  const validFields = [];
  for (const index in fields) {
    const field = fields[index];
    if (field) validFields.push(field.field);
  }
  Regexes.validateParams(params, funcName, ['capture', ...validFields]);

  // Find the last key we care about, so we can shorten the regex if needed.
  const capture = Regexes.trueIfUndefined(params.capture);
  const fieldKeys = Object.keys(fields).sort((a, b) => parseInt(a) - parseInt(b));
  let maxKeyStr;
  if (capture) {
    const keys = [];
    for (const key in fields) keys.push(key);
    let tmpKey = keys.pop();
    if (tmpKey === undefined) {
      maxKeyStr = fieldKeys[fieldKeys.length - 1] ?? '0';
    } else {
      while (fields[tmpKey]?.optional && !((fields[tmpKey]?.field ?? '') in params)) tmpKey = keys.pop();
      maxKeyStr = tmpKey ?? '0';
    }
  } else {
    maxKeyStr = '0';
    for (const key in fields) {
      const value = fields[key] ?? {};
      if (typeof value !== 'object') continue;
      const fieldName = fields[key]?.field;
      if (fieldName !== undefined && fieldName in params) maxKeyStr = key;
    }
  }
  const maxKey = parseInt(maxKeyStr);

  // For testing, it's useful to know if this is a regex that requires
  // translation.  We test this by seeing if there are any specified
  // fields, and if so, inserting a magic string that we can detect.
  // This lets us differentiate between "regex that should be translated"
  // e.g. a regex with `target` specified, and "regex that shouldn't"
  // e.g. a gains effect with just effectId specified.
  const transParams = Object.keys(params).filter(k => keysThatRequireTranslation.includes(k));
  const needsTranslations = NetRegexes.flagTranslationsNeeded && transParams.length > 0;

  // Build the regex from the fields.
  let str = needsTranslations ? magicTranslationString : '^';
  let lastKey = -1;
  for (const keyStr in fields) {
    const key = parseInt(keyStr);
    // Fill in blanks.
    const missingFields = key - lastKey - 1;
    if (missingFields === 1) str += '\\y{NetField}';else if (missingFields > 1) str += `\\y{NetField}{${missingFields}}`;
    lastKey = key;
    const value = fields[keyStr];
    if (typeof value !== 'object') throw new Error(`${funcName}: invalid value: ${JSON.stringify(value)}`);
    const fieldName = value.field;
    const defaultFieldValue = value.value?.toString() ?? netregexes_matchDefault;
    const fieldValue = params[fieldName];
    if (netregexes_isRepeatingField(fields[keyStr]?.repeating, fieldValue)) {
      let repeatingArray = fieldValue;
      const sortKeys = fields[keyStr]?.sortKeys;
      const primaryKey = fields[keyStr]?.primaryKey;
      const possibleKeys = fields[keyStr]?.possibleKeys;

      // primaryKey is required if this is a repeating field per typedef in netlog_defs.ts
      // Same with possibleKeys
      if (primaryKey === undefined || possibleKeys === undefined) throw new UnreachableCode();

      // Allow sorting if needed
      if (sortKeys) {
        // Also sort our valid keys list
        possibleKeys.sort((left, right) => left.toLowerCase().localeCompare(right.toLowerCase()));
        if (repeatingArray !== undefined) {
          repeatingArray = [...repeatingArray].sort((left, right) => {
            // We check the validity of left/right because they're user-supplied
            if (typeof left !== 'object' || left[primaryKey] === undefined) {
              console.warn('Invalid argument passed to trigger:', left);
              return 0;
            }
            const leftValue = left[primaryKey];
            if (typeof leftValue !== 'string' || !possibleKeys?.includes(leftValue)) {
              console.warn('Invalid argument passed to trigger:', left);
              return 0;
            }
            if (typeof right !== 'object' || right[primaryKey] === undefined) {
              console.warn('Invalid argument passed to trigger:', right);
              return 0;
            }
            const rightValue = right[primaryKey];
            if (typeof rightValue !== 'string' || !possibleKeys?.includes(rightValue)) {
              console.warn('Invalid argument passed to trigger:', right);
              return 0;
            }
            return leftValue.toLowerCase().localeCompare(rightValue.toLowerCase());
          });
        }
      }
      const anonReps = repeatingArray;
      // Loop over our possible keys
      // Build a regex that can match any possible key with required values substituted in
      possibleKeys.forEach(possibleKey => {
        const rep = anonReps?.find(rep => primaryKey in rep && rep[primaryKey] === possibleKey);
        let fieldRegex = '';
        // Rather than looping over the keys defined on the object,
        // loop over the base type def's keys. This enforces the correct order.
        fields[keyStr]?.repeatingKeys?.forEach(key => {
          let val = rep?.[key];
          if (rep === undefined || !(key in rep)) {
            // If we don't have a value for this key
            // insert a placeholder, unless it's the primary key
            if (key === primaryKey) val = possibleKey;else val = netregexes_matchDefault;
          }
          if (typeof val !== 'string') {
            if (!Array.isArray(val)) val = netregexes_matchDefault;else if (val.length < 1) val = netregexes_matchDefault;else if (val.some(v => typeof v !== 'string')) val = netregexes_matchDefault;
          }
          fieldRegex += Regexes.maybeCapture(key === primaryKey ? false : capture,
          // All capturing groups are `fieldName` + `possibleKey`, e.g. `pairIsCasting1`
          fieldName + possibleKey, val, defaultFieldValue) + netregexes_separator;
        });
        if (fieldRegex.length > 0) {
          str += `(?:${fieldRegex})${rep !== undefined ? '' : '?'}`;
        }
      });
    } else if (fields[keyStr]?.repeating) {
      // If this is a repeating field but the actual value is empty or otherwise invalid,
      // don't process further. We can't use `continue` in the above block because that
      // would skip the early-out break at the end of the loop.
    } else {
      if (fieldName !== undefined) {
        str += Regexes.maybeCapture(
        // more accurate type instead of `as` cast
        // maybe this function needs a refactoring
        capture, fieldName, fieldValue, defaultFieldValue) + netregexes_separator;
      } else {
        str += defaultFieldValue + netregexes_separator;
      }
    }

    // Stop if we're not capturing and don't care about future fields.
    if (key >= maxKey) break;
  }
  return Regexes.parse(str);
};
const netregexes_buildRegex = (type, params) => {
  return netregexes_parseHelper(params, type, netregexes_defaultParams(type, NetRegexes.logVersion));
};
class NetRegexes {
  static logVersion = 'latest';
  static flagTranslationsNeeded = false;
  static setFlagTranslationsNeeded(value) {
    NetRegexes.flagTranslationsNeeded = value;
  }
  static doesNetRegexNeedTranslation(regex) {
    // Need to `setFlagTranslationsNeeded` before calling this function.
    console.assert(NetRegexes.flagTranslationsNeeded);
    const str = typeof regex === 'string' ? regex : regex.source;
    return !!magicStringRegex.exec(str);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-20-0x14-networkstartscasting
   */
  static startsUsing(params) {
    return netregexes_buildRegex('StartsUsing', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-21-0x15-networkability
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-22-0x16-networkaoeability
   */
  static ability(params) {
    return netregexes_parseHelper(params, 'Ability', {
      ...netregexes_defaultParams('Ability', NetRegexes.logVersion),
      // Override type
      0: {
        field: 'type',
        value: '2[12]',
        optional: false
      }
    });
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-21-0x15-networkability
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-22-0x16-networkaoeability
   *
   * @deprecated Use `ability` instead
   */
  static abilityFull(params) {
    return this.ability(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-27-0x1b-networktargeticon-head-marker
   */
  static headMarker(params) {
    return netregexes_buildRegex('HeadMarker', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-03-0x03-addcombatant
   */
  static addedCombatant(params) {
    return netregexes_parseHelper(params, 'AddedCombatant', netregexes_defaultParams('AddedCombatant', NetRegexes.logVersion));
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-03-0x03-addcombatant
   * @deprecated Use `addedCombatant` instead
   */
  static addedCombatantFull(params) {
    return NetRegexes.addedCombatant(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-04-0x04-removecombatant
   */
  static removingCombatant(params) {
    return netregexes_buildRegex('RemovedCombatant', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-26-0x1a-networkbuff
   */
  static gainsEffect(params) {
    return netregexes_buildRegex('GainsEffect', params);
  }

  /**
   * Prefer gainsEffect over this function unless you really need extra data.
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-38-0x26-networkstatuseffects
   */
  static statusEffectExplicit(params) {
    return netregexes_buildRegex('StatusEffect', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-30-0x1e-networkbuffremove
   */
  static losesEffect(params) {
    return netregexes_buildRegex('LosesEffect', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-35-0x23-networktether
   */
  static tether(params) {
    return netregexes_buildRegex('Tether', params);
  }

  /**
   * 'target' was defeated by 'source'
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-25-0x19-networkdeath
   */
  static wasDefeated(params) {
    return netregexes_buildRegex('WasDefeated', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-24-0x18-networkdot
   */
  static networkDoT(params) {
    return netregexes_buildRegex('NetworkDoT', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static echo(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'Echo', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    return NetRegexes.gameLog({
      ...params,
      code: gameLogCodes.echo
    });
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static dialog(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'Dialog', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    return NetRegexes.gameLog({
      ...params,
      code: gameLogCodes.dialog
    });
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static message(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'Message', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    return NetRegexes.gameLog({
      ...params,
      code: gameLogCodes.message
    });
  }

  /**
   * fields: code, name, line, capture
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static gameLog(params) {
    return netregexes_buildRegex('GameLog', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static gameNameLog(params) {
    // Backwards compatability.
    return NetRegexes.gameLog(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-12-0x0c-playerstats
   */
  static statChange(params) {
    return netregexes_buildRegex('PlayerStats', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-01-0x01-changezone
   */
  static changeZone(params) {
    return netregexes_buildRegex('ChangeZone', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-33-0x21-network6d-actor-control
   */
  static network6d(params) {
    return netregexes_buildRegex('ActorControl', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-34-0x22-networknametoggle
   */
  static nameToggle(params) {
    return netregexes_buildRegex('NameToggle', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-40-0x28-map
   */
  static map(params) {
    return netregexes_buildRegex('Map', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-41-0x29-systemlogmessage
   */
  static systemLogMessage(params) {
    return netregexes_buildRegex('SystemLogMessage', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-257-0x101-mapeffect
   */
  static mapEffect(params) {
    return netregexes_buildRegex('MapEffect', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-258-0x102-fatedirector
   */
  static fateDirector(params) {
    return netregexes_buildRegex('FateDirector', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-259-0x103-cedirector
   */
  static ceDirector(params) {
    return netregexes_buildRegex('CEDirector', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-260-0x104-incombat
   */
  static inCombat(params) {
    return netregexes_buildRegex('InCombat', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-261-0x105-combatantmemory
   */
  static combatantMemory(params) {
    return netregexes_buildRegex('CombatantMemory', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-263-0x107-startsusingextra
   */
  static startsUsingExtra(params) {
    return netregexes_buildRegex('StartsUsingExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-264-0x108-abilityextra
   */
  static abilityExtra(params) {
    return netregexes_buildRegex('AbilityExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-265-0x109-contentfindersettings
   */
  static contentFinderSettings(params) {
    return netregexes_buildRegex('ContentFinderSettings', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-266-0x10a-npcyell
   */
  static npcYell(params) {
    return netregexes_buildRegex('NpcYell', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-267-0x10b-battletalk2
   */
  static battleTalk2(params) {
    return netregexes_buildRegex('BattleTalk2', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-268-0x10c-countdown
   */
  static countdown(params) {
    return netregexes_buildRegex('Countdown', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-269-0x10d-countdowncancel
   */
  static countdownCancel(params) {
    return netregexes_buildRegex('CountdownCancel', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-270-0x10e-actormove
   */
  static actorMove(params) {
    return netregexes_buildRegex('ActorMove', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-271-0x10f-actorsetpos
   */
  static actorSetPos(params) {
    return netregexes_buildRegex('ActorSetPos', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-272-0x110-spawnnpcextra
   */
  static spawnNpcExtra(params) {
    return netregexes_buildRegex('SpawnNpcExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-273-0x111-actorcontrolextra
   */
  static actorControlExtra(params) {
    return netregexes_buildRegex('ActorControlExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-274-0x112-actorcontrolselfextra
   */
  static actorControlSelfExtra(params) {
    return netregexes_buildRegex('ActorControlSelfExtra', params);
  }
}
const commonNetRegex = {
  // TODO(6.2): remove 40000010 after everybody is on 6.2.
  // TODO: or maybe keep around for playing old log files??
  wipe: NetRegexes.network6d({
    command: ['40000010', '4000000F']
  }),
  cactbotWipeEcho: NetRegexes.echo({
    line: 'cactbot wipe.*?'
  }),
  userWipeEcho: NetRegexes.echo({
    line: 'end'
  })
};
const buildNetRegexForTrigger = (type, params) => {
  if (type === 'Ability')
    // ts can't narrow T to `Ability` here, need casting.
    return NetRegexes.ability(params);
  return netregexes_buildRegex(type, params);
};
;// CONCATENATED MODULE: ./resources/overlay_plugin_api.ts
// OverlayPlugin API setup

let inited = false;
let wsUrl = null;
let ws = null;
let queue = [];
let rseqCounter = 0;
const responsePromises = {};
const subscribers = {};
const sendMessage = (msg, cb) => {
  if (ws) {
    if (queue) queue.push(msg);else ws.send(JSON.stringify(msg));
  } else {
    if (queue) queue.push([msg, cb]);else window.OverlayPluginApi.callHandler(JSON.stringify(msg), cb);
  }
};
const processEvent = msg => {
  init();
  const subs = subscribers[msg.type];
  subs?.forEach(sub => {
    try {
      sub(msg);
    } catch (e) {
      console.error(e);
    }
  });
};
const dispatchOverlayEvent = processEvent;
const addOverlayListener = (event, cb) => {
  init();
  if (!subscribers[event]) {
    subscribers[event] = [];
    if (!queue) {
      sendMessage({
        call: 'subscribe',
        events: [event]
      });
    }
  }
  subscribers[event]?.push(cb);
};
const removeOverlayListener = (event, cb) => {
  init();
  if (subscribers[event]) {
    const list = subscribers[event];
    const pos = list?.indexOf(cb);
    if (pos !== undefined && pos > -1) list?.splice(pos, 1);
  }
};
const callOverlayHandlerInternal = (_msg
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) => {
  init();
  const msg = {
    ..._msg,
    rseq: 0
  };
  let p;
  if (ws) {
    msg.rseq = rseqCounter++;
    p = new Promise((resolve, reject) => {
      responsePromises[msg.rseq] = {
        resolve: resolve,
        reject: reject
      };
    });
    sendMessage(msg);
  } else {
    p = new Promise((resolve, reject) => {
      sendMessage(msg, data => {
        if (data === null) {
          resolve(data);
          return;
        }
        const parsed = JSON.parse(data);
        if (parsed['$error']) reject(parsed);else resolve(parsed);
      });
    });
  }
  return p;
};
const callOverlayHandlerOverrideMap = {};
const callOverlayHandler = (_msg
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) => {
  init();

  // If this `as` is incorrect, then it will not find an override.
  // TODO: we could also replace this with a type guard.
  const type = _msg.call;
  const callFunc = callOverlayHandlerOverrideMap[type] ?? callOverlayHandlerInternal;

  // The `IOverlayHandler` type guarantees that parameters/return type match
  // one of the overlay handlers.  The OverrideMap also only stores functions
  // that match by the discriminating `call` field, and so any overrides
  // should be correct here.
  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-argument
  return callFunc(_msg);
};
const setOverlayHandlerOverride = (type, override) => {
  if (!override) {
    delete callOverlayHandlerOverrideMap[type];
    return;
  }
  callOverlayHandlerOverrideMap[type] = override;
};
const init = () => {
  if (inited) return;
  if (typeof window !== 'undefined') {
    wsUrl = new URLSearchParams(window.location.search).get('OVERLAY_WS');
    if (wsUrl !== null) {
      const connectWs = function (wsUrl) {
        ws = new WebSocket(wsUrl);
        ws.addEventListener('error', e => {
          console.error(e);
        });
        ws.addEventListener('open', () => {
          console.log('Connected!');
          const q = queue ?? [];
          queue = null;
          sendMessage({
            call: 'subscribe',
            events: Object.keys(subscribers)
          });
          for (const msg of q) {
            if (!Array.isArray(msg)) sendMessage(msg);
          }
        });
        ws.addEventListener('message', _msg => {
          try {
            if (typeof _msg.data !== 'string') {
              console.error('Invalid message data received: ', _msg);
              return;
            }
            const msg = JSON.parse(_msg.data);
            const promiseFuncs = msg?.rseq !== undefined ? responsePromises[msg.rseq] : undefined;
            if (msg.rseq !== undefined && promiseFuncs) {
              if (msg['$error']) promiseFuncs.reject(msg);else promiseFuncs.resolve(msg);
              delete responsePromises[msg.rseq];
            } else {
              processEvent(msg);
            }
          } catch (e) {
            console.error('Invalid message received: ', _msg);
            return;
          }
        });
        ws.addEventListener('close', () => {
          queue = null;
          console.log('Trying to reconnect...');
          // Don't spam the server with retries.
          window.setTimeout(() => {
            connectWs(wsUrl);
          }, 300);
        });
      };
      connectWs(wsUrl);
    } else {
      const waitForApi = function () {
        if (!window.OverlayPluginApi?.ready) {
          window.setTimeout(waitForApi, 300);
          return;
        }
        const q = queue ?? [];
        queue = null;
        window.__OverlayCallback = processEvent;
        sendMessage({
          call: 'subscribe',
          events: Object.keys(subscribers)
        });
        for (const item of q) {
          if (Array.isArray(item)) sendMessage(item[0], item[1]);
        }
      };
      waitForApi();
    }

    // Here the OverlayPlugin API is registered to the window object,
    // but this is mainly for backwards compatibility. For cactbot's built-in files,
    // it is recommended to use the various functions exported in resources/overlay_plugin_api.ts.

    /* eslint-disable deprecation/deprecation */
    window.addOverlayListener = addOverlayListener;
    window.removeOverlayListener = removeOverlayListener;
    window.callOverlayHandler = callOverlayHandler;
    window.dispatchOverlayEvent = dispatchOverlayEvent;
    /* eslint-enable deprecation/deprecation */
  }

  inited = true;
};
;// CONCATENATED MODULE: ./ui/test/test.ts



addOverlayListener('ChangeZone', e => {
  const currentZone = document.getElementById('currentZone');
  if (currentZone) currentZone.innerText = `currentZone: ${e.zoneName} (${e.zoneID})`;
});
addOverlayListener('onInCombatChangedEvent', e => {
  const inCombat = document.getElementById('inCombat');
  if (inCombat) {
    inCombat.innerText = `inCombat: act: ${e.detail.inACTCombat ? 'yes' : 'no'} game: ${e.detail.inGameCombat ? 'yes' : 'no'}`;
  }
});
addOverlayListener('onPlayerChangedEvent', e => {
  const name = document.getElementById('name');
  if (name) name.innerText = e.detail.name;
  const playerId = document.getElementById('playerId');
  if (playerId) playerId.innerText = e.detail.id.toString(16);
  const hp = document.getElementById('hp');
  if (hp) hp.innerText = `${e.detail.currentHP}/${e.detail.maxHP} (${e.detail.currentShield})`;
  const mp = document.getElementById('mp');
  if (mp) mp.innerText = `${e.detail.currentMP}/${e.detail.maxMP}`;
  const cp = document.getElementById('cp');
  if (cp) cp.innerText = `${e.detail.currentCP}/${e.detail.maxCP}`;
  const gp = document.getElementById('gp');
  if (gp) gp.innerText = `${e.detail.currentGP}/${e.detail.maxGP}`;
  const job = document.getElementById('job');
  if (job) job.innerText = `${e.detail.level} ${e.detail.job}`;
  const debug = document.getElementById('debug');
  if (debug) debug.innerText = e.detail.debugJob;
  const jobInfo = document.getElementById('jobinfo');
  if (jobInfo) {
    const detail = e.detail;
    if (detail.job === 'RDM' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.whiteMana} | ${detail.jobDetail.blackMana} | ${detail.jobDetail.manaStacks}`;
    } else if (detail.job === 'WAR' && detail.jobDetail) {
      jobInfo.innerText = detail.jobDetail.beast.toString();
    } else if (detail.job === 'DRK' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.blood} | ${detail.jobDetail.darksideMilliseconds} | ${detail.jobDetail.darkArts.toString()} | ${detail.jobDetail.livingShadowMilliseconds}`;
    } else if (detail.job === 'GNB' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.cartridges} | ${detail.jobDetail.continuationState}`;
    } else if (detail.job === 'PLD' && detail.jobDetail) {
      jobInfo.innerText = detail.jobDetail.oath.toString();
    } else if (detail.job === 'BRD' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.songName} | ${detail.jobDetail.lastPlayed} | ${detail.jobDetail.songProcs} | ${detail.jobDetail.soulGauge} | ${detail.jobDetail.songMilliseconds} | [${detail.jobDetail.coda.join(', ')}]`;
    } else if (detail.job === 'DNC' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.feathers} | ${detail.jobDetail.esprit} | [${detail.jobDetail.steps.join(', ')}] | ${detail.jobDetail.currentStep}`;
    } else if (detail.job === 'NIN' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.hutonMilliseconds} | ${detail.jobDetail.ninkiAmount}`;
    } else if (detail.job === 'DRG' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.bloodMilliseconds} | ${detail.jobDetail.lifeMilliseconds} | ${detail.jobDetail.eyesAmount} | ${detail.jobDetail.firstmindsFocus}`;
    } else if (detail.job === 'BLM' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.umbralStacks} (${detail.jobDetail.umbralMilliseconds}) | ${detail.jobDetail.umbralHearts} | ${detail.jobDetail.polyglot} ${detail.jobDetail.enochian.toString()} (${detail.jobDetail.nextPolyglotMilliseconds}) | ${detail.jobDetail.paradox.toString()}`;
    } else if (detail.job === 'THM' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.umbralStacks} (${detail.jobDetail.umbralMilliseconds})`;
    } else if (detail.job === 'WHM' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.lilyStacks} (${detail.jobDetail.lilyMilliseconds}) | ${detail.jobDetail.bloodlilyStacks}`;
    } else if (detail.job === 'SMN' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.aetherflowStacks} | ${detail.jobDetail.tranceMilliseconds} | ${detail.jobDetail.attunement} | ${detail.jobDetail.attunementMilliseconds} | ${detail.jobDetail.activePrimal ?? '-'} | [${detail.jobDetail.usableArcanum.join(', ')}] | ${detail.jobDetail.nextSummoned}`;
    } else if (detail.job === 'SCH' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.aetherflowStacks} | ${detail.jobDetail.fairyGauge} | ${detail.jobDetail.fairyStatus} (${detail.jobDetail.fairyMilliseconds})`;
    } else if (detail.job === 'ACN' && detail.jobDetail) {
      jobInfo.innerText = detail.jobDetail.aetherflowStacks.toString();
    } else if (detail.job === 'AST' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.heldCard} | ${detail.jobDetail.crownCard} | [${detail.jobDetail.arcanums.join(', ')}]`;
    } else if (detail.job === 'MNK' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.chakraStacks} | ${detail.jobDetail.lunarNadi.toString()} | ${detail.jobDetail.solarNadi.toString()} | [${detail.jobDetail.beastChakra.join(', ')}]`;
    } else if (detail.job === 'MCH' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.heat} (${detail.jobDetail.overheatMilliseconds}) | ${detail.jobDetail.battery} (${detail.jobDetail.batteryMilliseconds}) | last: ${detail.jobDetail.lastBatteryAmount} | ${detail.jobDetail.overheatActive.toString()} | ${detail.jobDetail.robotActive.toString()}`;
    } else if (detail.job === 'SAM' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.kenki} | ${detail.jobDetail.meditationStacks}(${detail.jobDetail.setsu.toString()},${detail.jobDetail.getsu.toString()},${detail.jobDetail.ka.toString()})`;
    } else if (detail.job === 'SGE' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.addersgall} (${detail.jobDetail.addersgallMilliseconds}) | ${detail.jobDetail.addersting} | ${detail.jobDetail.eukrasia.toString()}`;
    } else if (detail.job === 'RPR' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.soul} | ${detail.jobDetail.shroud} | ${detail.jobDetail.enshroudMilliseconds} | ${detail.jobDetail.lemureShroud} | ${detail.jobDetail.voidShroud}`;
    } else {
      jobInfo.innerText = '';
    }
  }
  const pos = document.getElementById('pos');
  if (pos) {
    pos.innerText = `${e.detail.pos.x.toFixed(2)},${e.detail.pos.y.toFixed(2)},${e.detail.pos.z.toFixed(2)}`;
  }
  const rotation = document.getElementById('rotation');
  if (rotation) rotation.innerText = e.detail.rotation.toString();
});
addOverlayListener('EnmityTargetData', e => {
  const target = document.getElementById('target');
  if (target) target.innerText = e.Target ? e.Target.Name : '--';
  const tid = document.getElementById('tid');
  if (tid) tid.innerText = e.Target ? e.Target.ID.toString(16) : '';
  const tdistance = document.getElementById('tdistance');
  if (tdistance) tdistance.innerText = e.Target ? e.Target.Distance.toString() : '';
});
addOverlayListener('onGameExistsEvent', _e => {
  // console.log("Game exists: " + e.detail.exists);
});
addOverlayListener('onGameActiveChangedEvent', _e => {
  // console.log("Game active: " + e.detail.active);
});
const ttsEchoRegex = NetRegexes.echo({
  line: 'tts:.*?'
});
addOverlayListener('LogLine', e => {
  // Match "/echo tts:<stuff>"
  const line = ttsEchoRegex.exec(e.rawLine)?.groups?.line;
  if (line === undefined) return;
  const colon = line.indexOf(':');
  if (colon === -1) return;
  const text = line.slice(colon);
  if (text !== undefined) {
    void callOverlayHandler({
      call: 'cactbotSay',
      text: text
    });
  }
});
addOverlayListener('onUserFileChanged', e => {
  console.log(`User file ${e.file} changed!`);
});
void callOverlayHandler({
  call: 'cactbotRequestState'
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixLQUFLLEdBQUdua0IsSUFBSSxDQUFDMGIsT0FBTyxDQUFDLEdBQUcsQ0FBQztFQUMvQixJQUFJeUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUNkO0VBQ0YsTUFBTUMsSUFBSSxHQUFHcGtCLElBQUksQ0FBQytSLEtBQUssQ0FBQ29TLEtBQUssQ0FBQztFQUM5QixJQUFJQyxJQUFJLEtBQUtoa0IsU0FBUyxFQUFFO0lBQ3RCLEtBQUtrYyxrQkFBa0IsQ0FBQztNQUN0QmpCLElBQUksRUFBRSxZQUFZO01BQ2xCK0ksSUFBSSxFQUFFQTtJQUNSLENBQUMsQ0FBQztFQUNKO0FBQ0YsQ0FBQyxDQUFDO0FBRUZqSixrQkFBa0IsQ0FBQyxtQkFBbUIsRUFBRzlLLENBQUMsSUFBSztFQUM3QzVCLE9BQU8sQ0FBQ3VPLEdBQUcsQ0FBRSxhQUFZM00sQ0FBQyxDQUFDZ1UsSUFBSyxXQUFVLENBQUM7QUFDN0MsQ0FBQyxDQUFDO0FBRUYsS0FBSy9ILGtCQUFrQixDQUFDO0VBQUVqQixJQUFJLEVBQUU7QUFBc0IsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWN0Ym90Ly4vcmVzb3VyY2VzL25ldGxvZ19kZWZzLnRzIiwid2VicGFjazovL2NhY3Rib3QvLi9yZXNvdXJjZXMvbm90X3JlYWNoZWQudHMiLCJ3ZWJwYWNrOi8vY2FjdGJvdC8uL3Jlc291cmNlcy9yZWdleGVzLnRzIiwid2VicGFjazovL2NhY3Rib3QvLi9yZXNvdXJjZXMvbmV0cmVnZXhlcy50cyIsIndlYnBhY2s6Ly9jYWN0Ym90Ly4vcmVzb3VyY2VzL292ZXJsYXlfcGx1Z2luX2FwaS50cyIsIndlYnBhY2s6Ly9jYWN0Ym90Ly4vdWkvdGVzdC90ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsdWdpbkNvbWJhdGFudFN0YXRlIH0gZnJvbSAnLi4vdHlwZXMvZXZlbnQnO1xyXG5pbXBvcnQgeyBOZXRGaWVsZHNSZXZlcnNlIH0gZnJvbSAnLi4vdHlwZXMvbmV0X2ZpZWxkcyc7XHJcblxyXG5leHBvcnQgdHlwZSBMb2dEZWZpbml0aW9uID0ge1xyXG4gIC8vIFRoZSBsb2cgaWQsIGFzIGEgZGVjaW1hbCBzdHJpbmcsIG1pbmltdW0gdHdvIGNoYXJhY3RlcnMuXHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIC8vIFRoZSBpbmZvcm1hbCBuYW1lIG9mIHRoaXMgbG9nIChtdXN0IG1hdGNoIHRoZSBrZXkgdGhhdCB0aGUgTG9nRGVmaW5pdGlvbiBpcyBhIHZhbHVlIGZvcikuXHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIC8vIFRoZSBwbHVnaW4gdGhhdCBnZW5lcmF0ZXMgdGhpcyBsb2cuXHJcbiAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicgfCAnT3ZlcmxheVBsdWdpbic7XHJcbiAgLy8gUGFyc2VkIEFDVCBsb2cgbGluZSB0eXBlLiAgT3ZlcmxheVBsdWdpbiBsaW5lcyB1c2UgdGhlIGB0eXBlYCBhcyBhIHN0cmluZy5cclxuICBtZXNzYWdlVHlwZTogc3RyaW5nO1xyXG4gIC8vIElmIHRydWUsIGFsd2F5cyBpbmNsdWRlIHRoaXMgbGluZSB3aGVuIHNwbGl0dGluZyBsb2dzIChlLmcuIEZGWElWIHBsdWdpbiB2ZXJzaW9uKS5cclxuICBnbG9iYWxJbmNsdWRlPzogYm9vbGVhbjtcclxuICAvLyBJZiB0cnVlLCBhbHdheXMgaW5jbHVkZSB0aGUgbGFzdCBpbnN0YW5jZSBvZiB0aGlzIGxpbmUgd2hlbiBzcGxpdHRpbmcgbG9ncyAoZS5nLiBDaGFuZ2Vab25lKS5cclxuICBsYXN0SW5jbHVkZT86IGJvb2xlYW47XHJcbiAgLy8gVHJ1ZSBpZiB0aGUgbGluZSBjYW4gYmUgYW5vbnltaXplZCAoaS5lLiByZW1vdmluZyBwbGF5ZXIgaWRzIGFuZCBuYW1lcykuXHJcbiAgY2FuQW5vbnltaXplPzogYm9vbGVhbjtcclxuICAvLyBJZiB0cnVlLCB0aGlzIGxvZyBoYXMgbm90IGJlZW4gc2VlbiBiZWZvcmUgYW5kIG5lZWRzIG1vcmUgaW5mb3JtYXRpb24uXHJcbiAgaXNVbmtub3duPzogYm9vbGVhbjtcclxuICAvLyBGaWVsZHMgYXQgdGhpcyBpbmRleCBhbmQgYmV5b25kIGFyZSBjbGVhcmVkLCB3aGVuIGFub255bWl6aW5nLlxyXG4gIGZpcnN0VW5rbm93bkZpZWxkPzogbnVtYmVyO1xyXG4gIC8vIEEgbWFwIG9mIGFsbCBvZiB0aGUgZmllbGRzLCB1bmlxdWUgZmllbGQgbmFtZSB0byBmaWVsZCBpbmRleC5cclxuICBmaWVsZHM/OiB7IFtmaWVsZE5hbWU6IHN0cmluZ106IG51bWJlciB9O1xyXG4gIC8vIEEgbGlzdCBvZiBmaWVsZCBpZHMgdGhhdCAqbWF5KiBjb250YWluIFJTViBrZXlzIChmb3IgZGVjb2RpbmcpXHJcbiAgcG9zc2libGVSc3ZGaWVsZHM/OiByZWFkb25seSBudW1iZXJbXTtcclxuICBzdWJGaWVsZHM/OiB7XHJcbiAgICBbZmllbGROYW1lOiBzdHJpbmddOiB7XHJcbiAgICAgIFtmaWVsZFZhbHVlOiBzdHJpbmddOiB7XHJcbiAgICAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGNhbkFub255bWl6ZTogYm9vbGVhbjtcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgfTtcclxuICAvLyBNYXAgb2YgaW5kZXhlcyBmcm9tIGEgcGxheWVyIGlkIHRvIHRoZSBpbmRleCBvZiB0aGF0IHBsYXllciBuYW1lLlxyXG4gIHBsYXllcklkcz86IHsgW2ZpZWxkSWR4OiBudW1iZXJdOiBudW1iZXIgfCBudWxsIH07XHJcbiAgLy8gQSBsaXN0IG9mIGZpZWxkcyB0aGF0IGFyZSBvayB0byBiZSBibGFuayAob3IgaGF2ZSBpbnZhbGlkIGlkcykuXHJcbiAgYmxhbmtGaWVsZHM/OiByZWFkb25seSBudW1iZXJbXTtcclxuICAvLyBUaGlzIGZpZWxkIGFuZCBhbnkgZmllbGQgYWZ0ZXIgd2lsbCBiZSB0cmVhdGVkIGFzIG9wdGlvbmFsIHdoZW4gY3JlYXRpbmcgY2FwdHVyaW5nIHJlZ2V4ZXMuXHJcbiAgZmlyc3RPcHRpb25hbEZpZWxkOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgLy8gVGhlc2UgZmllbGRzIGFyZSB0cmVhdGVkIGFzIHJlcGVhdGFibGUgZmllbGRzXHJcbiAgcmVwZWF0aW5nRmllbGRzPzoge1xyXG4gICAgc3RhcnRpbmdJbmRleDogbnVtYmVyO1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIG5hbWVzOiByZWFkb25seSBzdHJpbmdbXTtcclxuICAgIHNvcnRLZXlzPzogYm9vbGVhbjtcclxuICAgIHByaW1hcnlLZXk6IHN0cmluZztcclxuICAgIHBvc3NpYmxlS2V5czogcmVhZG9ubHkgc3RyaW5nW107XHJcbiAgfTtcclxufTtcclxuZXhwb3J0IHR5cGUgTG9nRGVmaW5pdGlvbk1hcCA9IHsgW25hbWU6IHN0cmluZ106IExvZ0RlZmluaXRpb24gfTtcclxudHlwZSBMb2dEZWZpbml0aW9uVmVyc2lvbk1hcCA9IHsgW3ZlcnNpb246IHN0cmluZ106IExvZ0RlZmluaXRpb25NYXAgfTtcclxuXHJcbi8vIFRPRE86IE1heWJlIGJyaW5nIGluIGEgaGVscGVyIGxpYnJhcnkgdGhhdCBjYW4gY29tcGlsZS10aW1lIGV4dHJhY3QgdGhlc2Uga2V5cyBpbnN0ZWFkP1xyXG5jb25zdCBjb21iYXRhbnRNZW1vcnlLZXlzOiByZWFkb25seSAoRXh0cmFjdDxrZXlvZiBQbHVnaW5Db21iYXRhbnRTdGF0ZSwgc3RyaW5nPilbXSA9IFtcclxuICAnQ3VycmVudFdvcmxkSUQnLFxyXG4gICdXb3JsZElEJyxcclxuICAnV29ybGROYW1lJyxcclxuICAnQk5wY0lEJyxcclxuICAnQk5wY05hbWVJRCcsXHJcbiAgJ1BhcnR5VHlwZScsXHJcbiAgJ0lEJyxcclxuICAnT3duZXJJRCcsXHJcbiAgJ1dlYXBvbklkJyxcclxuICAnVHlwZScsXHJcbiAgJ0pvYicsXHJcbiAgJ0xldmVsJyxcclxuICAnTmFtZScsXHJcbiAgJ0N1cnJlbnRIUCcsXHJcbiAgJ01heEhQJyxcclxuICAnQ3VycmVudE1QJyxcclxuICAnTWF4TVAnLFxyXG4gICdQb3NYJyxcclxuICAnUG9zWScsXHJcbiAgJ1Bvc1onLFxyXG4gICdIZWFkaW5nJyxcclxuICAnTW9uc3RlclR5cGUnLFxyXG4gICdTdGF0dXMnLFxyXG4gICdNb2RlbFN0YXR1cycsXHJcbiAgJ0FnZ3Jlc3Npb25TdGF0dXMnLFxyXG4gICdUYXJnZXRJRCcsXHJcbiAgJ0lzVGFyZ2V0YWJsZScsXHJcbiAgJ1JhZGl1cycsXHJcbiAgJ0Rpc3RhbmNlJyxcclxuICAnRWZmZWN0aXZlRGlzdGFuY2UnLFxyXG4gICdOUENUYXJnZXRJRCcsXHJcbiAgJ0N1cnJlbnRHUCcsXHJcbiAgJ01heEdQJyxcclxuICAnQ3VycmVudENQJyxcclxuICAnTWF4Q1AnLFxyXG4gICdQQ1RhcmdldElEJyxcclxuICAnSXNDYXN0aW5nMScsXHJcbiAgJ0lzQ2FzdGluZzInLFxyXG4gICdDYXN0QnVmZklEJyxcclxuICAnQ2FzdFRhcmdldElEJyxcclxuICAnQ2FzdEdyb3VuZFRhcmdldFgnLFxyXG4gICdDYXN0R3JvdW5kVGFyZ2V0WScsXHJcbiAgJ0Nhc3RHcm91bmRUYXJnZXRaJyxcclxuICAnQ2FzdER1cmF0aW9uQ3VycmVudCcsXHJcbiAgJ0Nhc3REdXJhdGlvbk1heCcsXHJcbiAgJ1RyYW5zZm9ybWF0aW9uSWQnLFxyXG5dIGFzIGNvbnN0O1xyXG5cclxuY29uc3QgbGF0ZXN0TG9nRGVmaW5pdGlvbnMgPSB7XHJcbiAgR2FtZUxvZzoge1xyXG4gICAgdHlwZTogJzAwJyxcclxuICAgIG5hbWU6ICdHYW1lTG9nJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdDaGF0TG9nJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGNvZGU6IDIsXHJcbiAgICAgIG5hbWU6IDMsXHJcbiAgICAgIGxpbmU6IDQsXHJcbiAgICB9LFxyXG4gICAgc3ViRmllbGRzOiB7XHJcbiAgICAgIGNvZGU6IHtcclxuICAgICAgICAnMDAzOSc6IHtcclxuICAgICAgICAgIG5hbWU6ICdtZXNzYWdlJyxcclxuICAgICAgICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgICcwMDM4Jzoge1xyXG4gICAgICAgICAgbmFtZTogJ2VjaG8nLFxyXG4gICAgICAgICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJzAwNDQnOiB7XHJcbiAgICAgICAgICBuYW1lOiAnZGlhbG9nJyxcclxuICAgICAgICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgICcwODM5Jzoge1xyXG4gICAgICAgICAgbmFtZTogJ21lc3NhZ2UnLFxyXG4gICAgICAgICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBDaGFuZ2Vab25lOiB7XHJcbiAgICB0eXBlOiAnMDEnLFxyXG4gICAgbmFtZTogJ0NoYW5nZVpvbmUnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1RlcnJpdG9yeScsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgbmFtZTogMyxcclxuICAgIH0sXHJcbiAgICBsYXN0SW5jbHVkZTogdHJ1ZSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgQ2hhbmdlZFBsYXllcjoge1xyXG4gICAgdHlwZTogJzAyJyxcclxuICAgIG5hbWU6ICdDaGFuZ2VkUGxheWVyJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdDaGFuZ2VQcmltYXJ5UGxheWVyJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiAzLFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiAzLFxyXG4gICAgfSxcclxuICAgIGxhc3RJbmNsdWRlOiB0cnVlLFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBBZGRlZENvbWJhdGFudDoge1xyXG4gICAgdHlwZTogJzAzJyxcclxuICAgIG5hbWU6ICdBZGRlZENvbWJhdGFudCcsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnQWRkQ29tYmF0YW50JyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiAzLFxyXG4gICAgICBqb2I6IDQsXHJcbiAgICAgIGxldmVsOiA1LFxyXG4gICAgICBvd25lcklkOiA2LFxyXG4gICAgICB3b3JsZElkOiA3LFxyXG4gICAgICB3b3JsZDogOCxcclxuICAgICAgbnBjTmFtZUlkOiA5LFxyXG4gICAgICBucGNCYXNlSWQ6IDEwLFxyXG4gICAgICBjdXJyZW50SHA6IDExLFxyXG4gICAgICBocDogMTIsXHJcbiAgICAgIGN1cnJlbnRNcDogMTMsXHJcbiAgICAgIG1wOiAxNCxcclxuICAgICAgLy8gbWF4VHA6IDE1LFxyXG4gICAgICAvLyB0cDogMTYsXHJcbiAgICAgIHg6IDE3LFxyXG4gICAgICB5OiAxOCxcclxuICAgICAgejogMTksXHJcbiAgICAgIGhlYWRpbmc6IDIwLFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiAzLFxyXG4gICAgICA2OiBudWxsLFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgUmVtb3ZlZENvbWJhdGFudDoge1xyXG4gICAgdHlwZTogJzA0JyxcclxuICAgIG5hbWU6ICdSZW1vdmVkQ29tYmF0YW50JyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdSZW1vdmVDb21iYXRhbnQnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6IDMsXHJcbiAgICAgIGpvYjogNCxcclxuICAgICAgbGV2ZWw6IDUsXHJcbiAgICAgIG93bmVyOiA2LFxyXG4gICAgICB3b3JsZDogOCxcclxuICAgICAgbnBjTmFtZUlkOiA5LFxyXG4gICAgICBucGNCYXNlSWQ6IDEwLFxyXG4gICAgICBocDogMTIsXHJcbiAgICAgIHg6IDE3LFxyXG4gICAgICB5OiAxOCxcclxuICAgICAgejogMTksXHJcbiAgICAgIGhlYWRpbmc6IDIwLFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiAzLFxyXG4gICAgICA2OiBudWxsLFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgUGFydHlMaXN0OiB7XHJcbiAgICB0eXBlOiAnMTEnLFxyXG4gICAgbmFtZTogJ1BhcnR5TGlzdCcsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnUGFydHlMaXN0JyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIHBhcnR5Q291bnQ6IDIsXHJcbiAgICAgIGlkMDogMyxcclxuICAgICAgaWQxOiA0LFxyXG4gICAgICBpZDI6IDUsXHJcbiAgICAgIGlkMzogNixcclxuICAgICAgaWQ0OiA3LFxyXG4gICAgICBpZDU6IDgsXHJcbiAgICAgIGlkNjogOSxcclxuICAgICAgaWQ3OiAxMCxcclxuICAgICAgaWQ4OiAxMSxcclxuICAgICAgaWQ5OiAxMixcclxuICAgICAgaWQxMDogMTMsXHJcbiAgICAgIGlkMTE6IDE0LFxyXG4gICAgICBpZDEyOiAxNSxcclxuICAgICAgaWQxMzogMTYsXHJcbiAgICAgIGlkMTQ6IDE3LFxyXG4gICAgICBpZDE1OiAxOCxcclxuICAgICAgaWQxNjogMTksXHJcbiAgICAgIGlkMTc6IDIwLFxyXG4gICAgICBpZDE4OiAyMSxcclxuICAgICAgaWQxOTogMjIsXHJcbiAgICAgIGlkMjA6IDIzLFxyXG4gICAgICBpZDIxOiAyNCxcclxuICAgICAgaWQyMjogMjUsXHJcbiAgICAgIGlkMjM6IDI2LFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAzOiBudWxsLFxyXG4gICAgICA0OiBudWxsLFxyXG4gICAgICA1OiBudWxsLFxyXG4gICAgICA2OiBudWxsLFxyXG4gICAgICA3OiBudWxsLFxyXG4gICAgICA4OiBudWxsLFxyXG4gICAgICA5OiBudWxsLFxyXG4gICAgICAxMDogbnVsbCxcclxuICAgICAgMTE6IG51bGwsXHJcbiAgICAgIDEyOiBudWxsLFxyXG4gICAgICAxMzogbnVsbCxcclxuICAgICAgMTQ6IG51bGwsXHJcbiAgICAgIDE1OiBudWxsLFxyXG4gICAgICAxNjogbnVsbCxcclxuICAgICAgMTc6IG51bGwsXHJcbiAgICAgIDE4OiBudWxsLFxyXG4gICAgICAxOTogbnVsbCxcclxuICAgICAgMjA6IG51bGwsXHJcbiAgICAgIDIxOiBudWxsLFxyXG4gICAgICAyMjogbnVsbCxcclxuICAgICAgMjM6IG51bGwsXHJcbiAgICAgIDI0OiBudWxsLFxyXG4gICAgICAyNTogbnVsbCxcclxuICAgICAgMjY6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiAzLFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgbGFzdEluY2x1ZGU6IHRydWUsXHJcbiAgfSxcclxuICBQbGF5ZXJTdGF0czoge1xyXG4gICAgdHlwZTogJzEyJyxcclxuICAgIG5hbWU6ICdQbGF5ZXJTdGF0cycsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnUGxheWVyU3RhdHMnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgam9iOiAyLFxyXG4gICAgICBzdHJlbmd0aDogMyxcclxuICAgICAgZGV4dGVyaXR5OiA0LFxyXG4gICAgICB2aXRhbGl0eTogNSxcclxuICAgICAgaW50ZWxsaWdlbmNlOiA2LFxyXG4gICAgICBtaW5kOiA3LFxyXG4gICAgICBwaWV0eTogOCxcclxuICAgICAgYXR0YWNrUG93ZXI6IDksXHJcbiAgICAgIGRpcmVjdEhpdDogMTAsXHJcbiAgICAgIGNyaXRpY2FsSGl0OiAxMSxcclxuICAgICAgYXR0YWNrTWFnaWNQb3RlbmN5OiAxMixcclxuICAgICAgaGVhbE1hZ2ljUG90ZW5jeTogMTMsXHJcbiAgICAgIGRldGVybWluYXRpb246IDE0LFxyXG4gICAgICBza2lsbFNwZWVkOiAxNSxcclxuICAgICAgc3BlbGxTcGVlZDogMTYsXHJcbiAgICAgIHRlbmFjaXR5OiAxOCxcclxuICAgICAgbG9jYWxDb250ZW50SWQ6IDE5LFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGxhc3RJbmNsdWRlOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBTdGFydHNVc2luZzoge1xyXG4gICAgdHlwZTogJzIwJyxcclxuICAgIG5hbWU6ICdTdGFydHNVc2luZycsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnU3RhcnRzQ2FzdGluZycsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBzb3VyY2VJZDogMixcclxuICAgICAgc291cmNlOiAzLFxyXG4gICAgICBpZDogNCxcclxuICAgICAgYWJpbGl0eTogNSxcclxuICAgICAgdGFyZ2V0SWQ6IDYsXHJcbiAgICAgIHRhcmdldDogNyxcclxuICAgICAgY2FzdFRpbWU6IDgsXHJcbiAgICAgIHg6IDksXHJcbiAgICAgIHk6IDEwLFxyXG4gICAgICB6OiAxMSxcclxuICAgICAgaGVhZGluZzogMTIsXHJcbiAgICB9LFxyXG4gICAgcG9zc2libGVSc3ZGaWVsZHM6IFs1XSxcclxuICAgIGJsYW5rRmllbGRzOiBbNl0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogMyxcclxuICAgICAgNjogNyxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIEFiaWxpdHk6IHtcclxuICAgIHR5cGU6ICcyMScsXHJcbiAgICBuYW1lOiAnQWJpbGl0eScsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnQWN0aW9uRWZmZWN0JyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIHNvdXJjZUlkOiAyLFxyXG4gICAgICBzb3VyY2U6IDMsXHJcbiAgICAgIGlkOiA0LFxyXG4gICAgICBhYmlsaXR5OiA1LFxyXG4gICAgICB0YXJnZXRJZDogNixcclxuICAgICAgdGFyZ2V0OiA3LFxyXG4gICAgICBmbGFnczogOCxcclxuICAgICAgZGFtYWdlOiA5LFxyXG4gICAgICB0YXJnZXRDdXJyZW50SHA6IDI0LFxyXG4gICAgICB0YXJnZXRNYXhIcDogMjUsXHJcbiAgICAgIHRhcmdldEN1cnJlbnRNcDogMjYsXHJcbiAgICAgIHRhcmdldE1heE1wOiAyNyxcclxuICAgICAgLy8gdGFyZ2V0Q3VycmVudFRwOiAyOCxcclxuICAgICAgLy8gdGFyZ2V0TWF4VHA6IDI5LFxyXG4gICAgICB0YXJnZXRYOiAzMCxcclxuICAgICAgdGFyZ2V0WTogMzEsXHJcbiAgICAgIHRhcmdldFo6IDMyLFxyXG4gICAgICB0YXJnZXRIZWFkaW5nOiAzMyxcclxuICAgICAgY3VycmVudEhwOiAzNCxcclxuICAgICAgbWF4SHA6IDM1LFxyXG4gICAgICBjdXJyZW50TXA6IDM2LFxyXG4gICAgICBtYXhNcDogMzcsXHJcbiAgICAgIC8vIGN1cnJlbnRUcDogMzg7XHJcbiAgICAgIC8vIG1heFRwOiAzOTtcclxuICAgICAgeDogNDAsXHJcbiAgICAgIHk6IDQxLFxyXG4gICAgICB6OiA0MixcclxuICAgICAgaGVhZGluZzogNDMsXHJcbiAgICAgIHNlcXVlbmNlOiA0NCxcclxuICAgICAgdGFyZ2V0SW5kZXg6IDQ1LFxyXG4gICAgICB0YXJnZXRDb3VudDogNDYsXHJcbiAgICB9LFxyXG4gICAgcG9zc2libGVSc3ZGaWVsZHM6IFs1XSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiAzLFxyXG4gICAgICA2OiA3LFxyXG4gICAgfSxcclxuICAgIGJsYW5rRmllbGRzOiBbNl0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIE5ldHdvcmtBT0VBYmlsaXR5OiB7XHJcbiAgICB0eXBlOiAnMjInLFxyXG4gICAgbmFtZTogJ05ldHdvcmtBT0VBYmlsaXR5JyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdBT0VBY3Rpb25FZmZlY3QnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgc291cmNlSWQ6IDIsXHJcbiAgICAgIHNvdXJjZTogMyxcclxuICAgICAgaWQ6IDQsXHJcbiAgICAgIGFiaWxpdHk6IDUsXHJcbiAgICAgIHRhcmdldElkOiA2LFxyXG4gICAgICB0YXJnZXQ6IDcsXHJcbiAgICAgIGZsYWdzOiA4LFxyXG4gICAgICBkYW1hZ2U6IDksXHJcbiAgICAgIHRhcmdldEN1cnJlbnRIcDogMjQsXHJcbiAgICAgIHRhcmdldE1heEhwOiAyNSxcclxuICAgICAgdGFyZ2V0Q3VycmVudE1wOiAyNixcclxuICAgICAgdGFyZ2V0TWF4TXA6IDI3LFxyXG4gICAgICAvLyB0YXJnZXRDdXJyZW50VHA6IDI4LFxyXG4gICAgICAvLyB0YXJnZXRNYXhUcDogMjksXHJcbiAgICAgIHRhcmdldFg6IDMwLFxyXG4gICAgICB0YXJnZXRZOiAzMSxcclxuICAgICAgdGFyZ2V0WjogMzIsXHJcbiAgICAgIHRhcmdldEhlYWRpbmc6IDMzLFxyXG4gICAgICBjdXJyZW50SHA6IDM0LFxyXG4gICAgICBtYXhIcDogMzUsXHJcbiAgICAgIGN1cnJlbnRNcDogMzYsXHJcbiAgICAgIG1heE1wOiAzNyxcclxuICAgICAgLy8gY3VycmVudFRwOiAzODtcclxuICAgICAgLy8gbWF4VHA6IDM5O1xyXG4gICAgICB4OiA0MCxcclxuICAgICAgeTogNDEsXHJcbiAgICAgIHo6IDQyLFxyXG4gICAgICBoZWFkaW5nOiA0MyxcclxuICAgICAgc2VxdWVuY2U6IDQ0LFxyXG4gICAgICB0YXJnZXRJbmRleDogNDUsXHJcbiAgICAgIHRhcmdldENvdW50OiA0NixcclxuICAgIH0sXHJcbiAgICBwb3NzaWJsZVJzdkZpZWxkczogWzVdLFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IDMsXHJcbiAgICAgIDY6IDcsXHJcbiAgICB9LFxyXG4gICAgYmxhbmtGaWVsZHM6IFs2XSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgTmV0d29ya0NhbmNlbEFiaWxpdHk6IHtcclxuICAgIHR5cGU6ICcyMycsXHJcbiAgICBuYW1lOiAnTmV0d29ya0NhbmNlbEFiaWxpdHknLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ0NhbmNlbEFjdGlvbicsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBzb3VyY2VJZDogMixcclxuICAgICAgc291cmNlOiAzLFxyXG4gICAgICBpZDogNCxcclxuICAgICAgbmFtZTogNSxcclxuICAgICAgcmVhc29uOiA2LFxyXG4gICAgfSxcclxuICAgIHBvc3NpYmxlUnN2RmllbGRzOiBbNV0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogMyxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIE5ldHdvcmtEb1Q6IHtcclxuICAgIHR5cGU6ICcyNCcsXHJcbiAgICBuYW1lOiAnTmV0d29ya0RvVCcsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnRG9USG9UJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiAzLFxyXG4gICAgICB3aGljaDogNCxcclxuICAgICAgZWZmZWN0SWQ6IDUsXHJcbiAgICAgIGRhbWFnZTogNixcclxuICAgICAgY3VycmVudEhwOiA3LFxyXG4gICAgICBtYXhIcDogOCxcclxuICAgICAgY3VycmVudE1wOiA5LFxyXG4gICAgICBtYXhNcDogMTAsXHJcbiAgICAgIC8vIGN1cnJlbnRUcDogMTEsXHJcbiAgICAgIC8vIG1heFRwOiAxMixcclxuICAgICAgeDogMTMsXHJcbiAgICAgIHk6IDE0LFxyXG4gICAgICB6OiAxNSxcclxuICAgICAgaGVhZGluZzogMTYsXHJcbiAgICAgIHNvdXJjZUlkOiAxNyxcclxuICAgICAgc291cmNlOiAxOCxcclxuICAgICAgLy8gQW4gaWQgbnVtYmVyIGxvb2t1cCBpbnRvIHRoZSBBdHRhY2tUeXBlIHRhYmxlXHJcbiAgICAgIGRhbWFnZVR5cGU6IDE5LFxyXG4gICAgICBzb3VyY2VDdXJyZW50SHA6IDIwLFxyXG4gICAgICBzb3VyY2VNYXhIcDogMjEsXHJcbiAgICAgIHNvdXJjZUN1cnJlbnRNcDogMjIsXHJcbiAgICAgIHNvdXJjZU1heE1wOiAyMyxcclxuICAgICAgLy8gc291cmNlQ3VycmVudFRwOiAyNCxcclxuICAgICAgLy8gc291cmNlTWF4VHA6IDI1LFxyXG4gICAgICBzb3VyY2VYOiAyNixcclxuICAgICAgc291cmNlWTogMjcsXHJcbiAgICAgIHNvdXJjZVo6IDI4LFxyXG4gICAgICBzb3VyY2VIZWFkaW5nOiAyOSxcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogMyxcclxuICAgICAgMTc6IDE4LFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgV2FzRGVmZWF0ZWQ6IHtcclxuICAgIHR5cGU6ICcyNScsXHJcbiAgICBuYW1lOiAnV2FzRGVmZWF0ZWQnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ0RlYXRoJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIHRhcmdldElkOiAyLFxyXG4gICAgICB0YXJnZXQ6IDMsXHJcbiAgICAgIHNvdXJjZUlkOiA0LFxyXG4gICAgICBzb3VyY2U6IDUsXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IDMsXHJcbiAgICAgIDQ6IDUsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBHYWluc0VmZmVjdDoge1xyXG4gICAgdHlwZTogJzI2JyxcclxuICAgIG5hbWU6ICdHYWluc0VmZmVjdCcsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnU3RhdHVzQWRkJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGVmZmVjdElkOiAyLFxyXG4gICAgICBlZmZlY3Q6IDMsXHJcbiAgICAgIGR1cmF0aW9uOiA0LFxyXG4gICAgICBzb3VyY2VJZDogNSxcclxuICAgICAgc291cmNlOiA2LFxyXG4gICAgICB0YXJnZXRJZDogNyxcclxuICAgICAgdGFyZ2V0OiA4LFxyXG4gICAgICBjb3VudDogOSxcclxuICAgICAgdGFyZ2V0TWF4SHA6IDEwLFxyXG4gICAgICBzb3VyY2VNYXhIcDogMTEsXHJcbiAgICB9LFxyXG4gICAgcG9zc2libGVSc3ZGaWVsZHM6IFszXSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICA1OiA2LFxyXG4gICAgICA3OiA4LFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgSGVhZE1hcmtlcjoge1xyXG4gICAgdHlwZTogJzI3JyxcclxuICAgIG5hbWU6ICdIZWFkTWFya2VyJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdUYXJnZXRJY29uJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIHRhcmdldElkOiAyLFxyXG4gICAgICB0YXJnZXQ6IDMsXHJcbiAgICAgIGlkOiA2LFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiAzLFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgTmV0d29ya1JhaWRNYXJrZXI6IHtcclxuICAgIHR5cGU6ICcyOCcsXHJcbiAgICBuYW1lOiAnTmV0d29ya1JhaWRNYXJrZXInLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1dheW1hcmtNYXJrZXInLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgb3BlcmF0aW9uOiAyLFxyXG4gICAgICB3YXltYXJrOiAzLFxyXG4gICAgICBpZDogNCxcclxuICAgICAgbmFtZTogNSxcclxuICAgICAgeDogNixcclxuICAgICAgeTogNyxcclxuICAgICAgejogOCxcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgNDogNSxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIE5ldHdvcmtUYXJnZXRNYXJrZXI6IHtcclxuICAgIHR5cGU6ICcyOScsXHJcbiAgICBuYW1lOiAnTmV0d29ya1RhcmdldE1hcmtlcicsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnU2lnbk1hcmtlcicsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBvcGVyYXRpb246IDIsIC8vIEFkZCwgVXBkYXRlLCBEZWxldGVcclxuICAgICAgd2F5bWFyazogMyxcclxuICAgICAgaWQ6IDQsXHJcbiAgICAgIG5hbWU6IDUsXHJcbiAgICAgIHRhcmdldElkOiA2LFxyXG4gICAgICB0YXJnZXROYW1lOiA3LFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICA0OiA1LFxyXG4gICAgICA2OiA3LFxyXG4gICAgfSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgTG9zZXNFZmZlY3Q6IHtcclxuICAgIHR5cGU6ICczMCcsXHJcbiAgICBuYW1lOiAnTG9zZXNFZmZlY3QnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1N0YXR1c1JlbW92ZScsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBlZmZlY3RJZDogMixcclxuICAgICAgZWZmZWN0OiAzLFxyXG4gICAgICBzb3VyY2VJZDogNSxcclxuICAgICAgc291cmNlOiA2LFxyXG4gICAgICB0YXJnZXRJZDogNyxcclxuICAgICAgdGFyZ2V0OiA4LFxyXG4gICAgICBjb3VudDogOSxcclxuICAgIH0sXHJcbiAgICBwb3NzaWJsZVJzdkZpZWxkczogWzNdLFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDU6IDYsXHJcbiAgICAgIDc6IDgsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBOZXR3b3JrR2F1Z2U6IHtcclxuICAgIHR5cGU6ICczMScsXHJcbiAgICBuYW1lOiAnTmV0d29ya0dhdWdlJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdHYXVnZScsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgZGF0YTA6IDMsXHJcbiAgICAgIGRhdGExOiA0LFxyXG4gICAgICBkYXRhMjogNSxcclxuICAgICAgZGF0YTM6IDYsXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgLy8gU29tZXRpbWVzIHRoaXMgbGFzdCBmaWVsZCBsb29rcyBsaWtlIGEgcGxheWVyIGlkLlxyXG4gICAgLy8gRm9yIHNhZmV0eSwgYW5vbnltaXplIGFsbCBvZiB0aGUgZ2F1Z2UgZGF0YS5cclxuICAgIGZpcnN0VW5rbm93bkZpZWxkOiAzLFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBOZXR3b3JrV29ybGQ6IHtcclxuICAgIHR5cGU6ICczMicsXHJcbiAgICBuYW1lOiAnTmV0d29ya1dvcmxkJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdXb3JsZCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgfSxcclxuICAgIGlzVW5rbm93bjogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgQWN0b3JDb250cm9sOiB7XHJcbiAgICB0eXBlOiAnMzMnLFxyXG4gICAgbmFtZTogJ0FjdG9yQ29udHJvbCcsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnRGlyZWN0b3InLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaW5zdGFuY2U6IDIsXHJcbiAgICAgIGNvbW1hbmQ6IDMsXHJcbiAgICAgIGRhdGEwOiA0LFxyXG4gICAgICBkYXRhMTogNSxcclxuICAgICAgZGF0YTI6IDYsXHJcbiAgICAgIGRhdGEzOiA3LFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgTmFtZVRvZ2dsZToge1xyXG4gICAgdHlwZTogJzM0JyxcclxuICAgIG5hbWU6ICdOYW1lVG9nZ2xlJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdOYW1lVG9nZ2xlJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiAzLFxyXG4gICAgICB0YXJnZXRJZDogNCxcclxuICAgICAgdGFyZ2V0TmFtZTogNSxcclxuICAgICAgdG9nZ2xlOiA2LFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiAzLFxyXG4gICAgICA0OiA1LFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgVGV0aGVyOiB7XHJcbiAgICB0eXBlOiAnMzUnLFxyXG4gICAgbmFtZTogJ1RldGhlcicsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnVGV0aGVyJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIHNvdXJjZUlkOiAyLFxyXG4gICAgICBzb3VyY2U6IDMsXHJcbiAgICAgIHRhcmdldElkOiA0LFxyXG4gICAgICB0YXJnZXQ6IDUsXHJcbiAgICAgIGlkOiA4LFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiAzLFxyXG4gICAgICA0OiA1LFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0VW5rbm93bkZpZWxkOiA5LFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBMaW1pdEJyZWFrOiB7XHJcbiAgICB0eXBlOiAnMzYnLFxyXG4gICAgbmFtZTogJ0xpbWl0QnJlYWsnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ0xpbWl0QnJlYWsnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgdmFsdWVIZXg6IDIsXHJcbiAgICAgIGJhcnM6IDMsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBOZXR3b3JrRWZmZWN0UmVzdWx0OiB7XHJcbiAgICB0eXBlOiAnMzcnLFxyXG4gICAgbmFtZTogJ05ldHdvcmtFZmZlY3RSZXN1bHQnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ0VmZmVjdFJlc3VsdCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgbmFtZTogMyxcclxuICAgICAgc2VxdWVuY2VJZDogNCxcclxuICAgICAgY3VycmVudEhwOiA1LFxyXG4gICAgICBtYXhIcDogNixcclxuICAgICAgY3VycmVudE1wOiA3LFxyXG4gICAgICBtYXhNcDogOCxcclxuICAgICAgY3VycmVudFNoaWVsZDogOSxcclxuICAgICAgLy8gRmllbGQgaW5kZXggMTAgaXMgYWx3YXlzIGAwYFxyXG4gICAgICB4OiAxMSxcclxuICAgICAgeTogMTIsXHJcbiAgICAgIHo6IDEzLFxyXG4gICAgICBoZWFkaW5nOiAxNCxcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogMyxcclxuICAgIH0sXHJcbiAgICBmaXJzdFVua25vd25GaWVsZDogMjIsXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIFN0YXR1c0VmZmVjdDoge1xyXG4gICAgdHlwZTogJzM4JyxcclxuICAgIG5hbWU6ICdTdGF0dXNFZmZlY3QnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1N0YXR1c0xpc3QnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgdGFyZ2V0SWQ6IDIsXHJcbiAgICAgIHRhcmdldDogMyxcclxuICAgICAgam9iTGV2ZWxEYXRhOiA0LFxyXG4gICAgICBocDogNSxcclxuICAgICAgbWF4SHA6IDYsXHJcbiAgICAgIG1wOiA3LFxyXG4gICAgICBtYXhNcDogOCxcclxuICAgICAgY3VycmVudFNoaWVsZDogOSxcclxuICAgICAgLy8gRmllbGQgaW5kZXggMTAgaXMgYWx3YXlzIGAwYFxyXG4gICAgICB4OiAxMSxcclxuICAgICAgeTogMTIsXHJcbiAgICAgIHo6IDEzLFxyXG4gICAgICBoZWFkaW5nOiAxNCxcclxuICAgICAgZGF0YTA6IDE1LFxyXG4gICAgICBkYXRhMTogMTYsXHJcbiAgICAgIGRhdGEyOiAxNyxcclxuICAgICAgZGF0YTM6IDE4LFxyXG4gICAgICBkYXRhNDogMTksXHJcbiAgICAgIGRhdGE1OiAyMCxcclxuICAgICAgLy8gVmFyaWFibGUgbnVtYmVyIG9mIHRyaXBsZXRzIGhlcmUsIGJ1dCBhdCBsZWFzdCBvbmUuXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IDMsXHJcbiAgICB9LFxyXG4gICAgZmlyc3RVbmtub3duRmllbGQ6IDE4LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiAxOCxcclxuICB9LFxyXG4gIE5ldHdvcmtVcGRhdGVIUDoge1xyXG4gICAgdHlwZTogJzM5JyxcclxuICAgIG5hbWU6ICdOZXR3b3JrVXBkYXRlSFAnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1VwZGF0ZUhwJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiAzLFxyXG4gICAgICBjdXJyZW50SHA6IDQsXHJcbiAgICAgIG1heEhwOiA1LFxyXG4gICAgICBjdXJyZW50TXA6IDYsXHJcbiAgICAgIG1heE1wOiA3LFxyXG4gICAgICAvLyBjdXJyZW50VHA6IDgsXHJcbiAgICAgIC8vIG1heFRwOiA5LFxyXG4gICAgICB4OiAxMCxcclxuICAgICAgeTogMTEsXHJcbiAgICAgIHo6IDEyLFxyXG4gICAgICBoZWFkaW5nOiAxMyxcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogMyxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIE1hcDoge1xyXG4gICAgdHlwZTogJzQwJyxcclxuICAgIG5hbWU6ICdNYXAnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ0NoYW5nZU1hcCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgcmVnaW9uTmFtZTogMyxcclxuICAgICAgcGxhY2VOYW1lOiA0LFxyXG4gICAgICBwbGFjZU5hbWVTdWI6IDUsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgICBsYXN0SW5jbHVkZTogdHJ1ZSxcclxuICB9LFxyXG4gIFN5c3RlbUxvZ01lc3NhZ2U6IHtcclxuICAgIHR5cGU6ICc0MScsXHJcbiAgICBuYW1lOiAnU3lzdGVtTG9nTWVzc2FnZScsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnU3lzdGVtTG9nTWVzc2FnZScsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpbnN0YW5jZTogMixcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIHBhcmFtMDogNCxcclxuICAgICAgcGFyYW0xOiA1LFxyXG4gICAgICBwYXJhbTI6IDYsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBTdGF0dXNMaXN0Mzoge1xyXG4gICAgdHlwZTogJzQyJyxcclxuICAgIG5hbWU6ICdTdGF0dXNMaXN0MycsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnU3RhdHVzTGlzdDMnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6IDMsXHJcbiAgICAgIC8vIHRyaXBsZXRzIG9mIGZpZWxkcyBmcm9tIGhlcmUgKGVmZmVjdElkLCBkYXRhLCBwbGF5ZXJJZCk/XHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IDMsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiA0LFxyXG4gICAgZmlyc3RVbmtub3duRmllbGQ6IDQsXHJcbiAgfSxcclxuICBQYXJzZXJJbmZvOiB7XHJcbiAgICB0eXBlOiAnMjQ5JyxcclxuICAgIG5hbWU6ICdQYXJzZXJJbmZvJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdTZXR0aW5ncycsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgfSxcclxuICAgIGdsb2JhbEluY2x1ZGU6IHRydWUsXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIFByb2Nlc3NJbmZvOiB7XHJcbiAgICB0eXBlOiAnMjUwJyxcclxuICAgIG5hbWU6ICdQcm9jZXNzSW5mbycsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnUHJvY2VzcycsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgfSxcclxuICAgIGdsb2JhbEluY2x1ZGU6IHRydWUsXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIERlYnVnOiB7XHJcbiAgICB0eXBlOiAnMjUxJyxcclxuICAgIG5hbWU6ICdEZWJ1ZycsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnRGVidWcnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgIH0sXHJcbiAgICBnbG9iYWxJbmNsdWRlOiB0cnVlLFxyXG4gICAgY2FuQW5vbnltaXplOiBmYWxzZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgUGFja2V0RHVtcDoge1xyXG4gICAgdHlwZTogJzI1MicsXHJcbiAgICBuYW1lOiAnUGFja2V0RHVtcCcsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnUGFja2V0RHVtcCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogZmFsc2UsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIFZlcnNpb246IHtcclxuICAgIHR5cGU6ICcyNTMnLFxyXG4gICAgbmFtZTogJ1ZlcnNpb24nLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1ZlcnNpb24nLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgIH0sXHJcbiAgICBnbG9iYWxJbmNsdWRlOiB0cnVlLFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBFcnJvcjoge1xyXG4gICAgdHlwZTogJzI1NCcsXHJcbiAgICBuYW1lOiAnRXJyb3InLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ0Vycm9yJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiBmYWxzZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgTm9uZToge1xyXG4gICAgdHlwZTogJ1swLTldKycsXHJcbiAgICBuYW1lOiAnTm9uZScsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnTm9uZScsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgfSxcclxuICAgIGlzVW5rbm93bjogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgLy8gT3ZlcmxheVBsdWdpbiBsb2cgbGluZXNcclxuICBMaW5lUmVnaXN0cmF0aW9uOiB7XHJcbiAgICB0eXBlOiAnMjU2JyxcclxuICAgIG5hbWU6ICdMaW5lUmVnaXN0cmF0aW9uJyxcclxuICAgIHNvdXJjZTogJ092ZXJsYXlQbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICcyNTYnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIHNvdXJjZTogMyxcclxuICAgICAgdmVyc2lvbjogNCxcclxuICAgIH0sXHJcbiAgICBnbG9iYWxJbmNsdWRlOiB0cnVlLFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBNYXBFZmZlY3Q6IHtcclxuICAgIHR5cGU6ICcyNTcnLFxyXG4gICAgbmFtZTogJ01hcEVmZmVjdCcsXHJcbiAgICBzb3VyY2U6ICdPdmVybGF5UGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnMjU3JyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGluc3RhbmNlOiAyLFxyXG4gICAgICBmbGFnczogMyxcclxuICAgICAgLy8gdmFsdWVzIGZvciB0aGUgbG9jYXRpb24gZmllbGQgc2VlbSB0byB2YXJ5IGJldHdlZW4gaW5zdGFuY2VzXHJcbiAgICAgIC8vIChlLmcuIGEgbG9jYXRpb24gb2YgJzA4JyBpbiBQNVMgZG9lcyBub3QgYXBwZWFyIHRvIGJlIHRoZSBzYW1lIGxvY2F0aW9uIGluIFA1UyBhcyBpbiBQNlMpXHJcbiAgICAgIC8vIGJ1dCB0aGlzIGZpZWxkIGRvZXMgYXBwZWFyIHRvIGNvbnNpc3RlbnRseSBjb250YWluIHBvc2l0aW9uIGluZm8gZm9yIHRoZSBlZmZlY3QgcmVuZGVyaW5nXHJcbiAgICAgIGxvY2F0aW9uOiA0LFxyXG4gICAgICBkYXRhMDogNSxcclxuICAgICAgZGF0YTE6IDYsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBGYXRlRGlyZWN0b3I6IHtcclxuICAgIHR5cGU6ICcyNTgnLFxyXG4gICAgbmFtZTogJ0ZhdGVEaXJlY3RvcicsXHJcbiAgICBzb3VyY2U6ICdPdmVybGF5UGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnMjU4JyxcclxuICAgIC8vIGZhdGVJZCBhbmQgcHJvZ3Jlc3MgYXJlIGluIGhleC5cclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGNhdGVnb3J5OiAyLFxyXG4gICAgICAvLyBwYWRkaW5nMDogMyxcclxuICAgICAgZmF0ZUlkOiA0LFxyXG4gICAgICBwcm9ncmVzczogNSxcclxuICAgICAgLy8gcGFyYW0zOiA2LFxyXG4gICAgICAvLyBwYXJhbTQ6IDcsXHJcbiAgICAgIC8vIHBhcmFtNTogOCxcclxuICAgICAgLy8gcGFyYW02OiA5LFxyXG4gICAgICAvLyBwYWRkaW5nMTogMTAsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBDRURpcmVjdG9yOiB7XHJcbiAgICB0eXBlOiAnMjU5JyxcclxuICAgIG5hbWU6ICdDRURpcmVjdG9yJyxcclxuICAgIHNvdXJjZTogJ092ZXJsYXlQbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICcyNTknLFxyXG4gICAgLy8gYWxsIGZpZWxkcyBhcmUgaW4gaGV4XHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBwb3BUaW1lOiAyLFxyXG4gICAgICB0aW1lUmVtYWluaW5nOiAzLFxyXG4gICAgICAvLyB1bmtub3duMDogNCxcclxuICAgICAgY2VLZXk6IDUsXHJcbiAgICAgIG51bVBsYXllcnM6IDYsXHJcbiAgICAgIHN0YXR1czogNyxcclxuICAgICAgLy8gdW5rbm93bjE6IDgsXHJcbiAgICAgIHByb2dyZXNzOiA5LFxyXG4gICAgICAvLyB1bmtub3duMjogMTAsXHJcbiAgICAgIC8vIHVua25vd24zOiAxMSxcclxuICAgICAgLy8gdW5rbm93bjQ6IDEyLFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgSW5Db21iYXQ6IHtcclxuICAgIHR5cGU6ICcyNjAnLFxyXG4gICAgbmFtZTogJ0luQ29tYmF0JyxcclxuICAgIHNvdXJjZTogJ092ZXJsYXlQbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICcyNjAnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaW5BQ1RDb21iYXQ6IDIsXHJcbiAgICAgIGluR2FtZUNvbWJhdDogMyxcclxuICAgICAgaXNBQ1RDaGFuZ2VkOiA0LFxyXG4gICAgICBpc0dhbWVDaGFuZ2VkOiA1LFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgQ29tYmF0YW50TWVtb3J5OiB7XHJcbiAgICB0eXBlOiAnMjYxJyxcclxuICAgIG5hbWU6ICdDb21iYXRhbnRNZW1vcnknLFxyXG4gICAgc291cmNlOiAnT3ZlcmxheVBsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJzI2MScsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBjaGFuZ2U6IDIsXHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICAvLyBmcm9tIGhlcmUsIHBhaXJzIG9mIGZpZWxkIG5hbWUvdmFsdWVzXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiA1LFxyXG4gICAgLy8gVE9ETzogZml4IHRoaXMgZGF0YSBzdHJ1Y3R1cmUgYW5kIGFub255bWl6ZXIgdG8gYmUgYWJsZSB0byBoYW5kbGUgcmVwZWF0aW5nRmllbGRzLlxyXG4gICAgLy8gQXQgdGhlIHZlcnkgbGVhc3QsIE5hbWUgYW5kIFBDVGFyZ2V0SUQgbmVlZCB0byBiZSBhbm9ueW1pemVkIGFzIHdlbGwuXHJcbiAgICBmaXJzdFVua25vd25GaWVsZDogNCxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAzOiBudWxsLFxyXG4gICAgfSxcclxuICAgIHJlcGVhdGluZ0ZpZWxkczoge1xyXG4gICAgICBzdGFydGluZ0luZGV4OiA0LFxyXG4gICAgICBsYWJlbDogJ3BhaXInLFxyXG4gICAgICBuYW1lczogWydrZXknLCAndmFsdWUnXSxcclxuICAgICAgc29ydEtleXM6IHRydWUsXHJcbiAgICAgIHByaW1hcnlLZXk6ICdrZXknLFxyXG4gICAgICBwb3NzaWJsZUtleXM6IGNvbWJhdGFudE1lbW9yeUtleXMsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgUlNWRGF0YToge1xyXG4gICAgdHlwZTogJzI2MicsXHJcbiAgICBuYW1lOiAnUlNWRGF0YScsXHJcbiAgICBzb3VyY2U6ICdPdmVybGF5UGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnMjYyJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGxvY2FsZTogMixcclxuICAgICAgLy8gdW5rbm93bjA6IDMsXHJcbiAgICAgIGtleTogNCxcclxuICAgICAgdmFsdWU6IDUsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBTdGFydHNVc2luZ0V4dHJhOiB7XHJcbiAgICB0eXBlOiAnMjYzJyxcclxuICAgIG5hbWU6ICdTdGFydHNVc2luZ0V4dHJhJyxcclxuICAgIHNvdXJjZTogJ092ZXJsYXlQbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICcyNjMnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgc291cmNlSWQ6IDIsXHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICB4OiA0LFxyXG4gICAgICB5OiA1LFxyXG4gICAgICB6OiA2LFxyXG4gICAgICBoZWFkaW5nOiA3LFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiBudWxsLFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogNyxcclxuICB9LFxyXG4gIEFiaWxpdHlFeHRyYToge1xyXG4gICAgdHlwZTogJzI2NCcsXHJcbiAgICBuYW1lOiAnQWJpbGl0eUV4dHJhJyxcclxuICAgIHNvdXJjZTogJ092ZXJsYXlQbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICcyNjQnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgc291cmNlSWQ6IDIsXHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICBnbG9iYWxFZmZlY3RDb3VudGVyOiA0LFxyXG4gICAgICBkYXRhRmxhZzogNSxcclxuICAgICAgeDogNixcclxuICAgICAgeTogNyxcclxuICAgICAgejogOCxcclxuICAgICAgaGVhZGluZzogOSxcclxuICAgIH0sXHJcbiAgICBibGFua0ZpZWxkczogWzZdLFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiA5LFxyXG4gIH0sXHJcbiAgQ29udGVudEZpbmRlclNldHRpbmdzOiB7XHJcbiAgICB0eXBlOiAnMjY1JyxcclxuICAgIG5hbWU6ICdDb250ZW50RmluZGVyU2V0dGluZ3MnLFxyXG4gICAgc291cmNlOiAnT3ZlcmxheVBsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJzI2NScsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICB6b25lSWQ6IDIsXHJcbiAgICAgIHpvbmVOYW1lOiAzLFxyXG4gICAgICBpbkNvbnRlbnRGaW5kZXJDb250ZW50OiA0LFxyXG4gICAgICB1bnJlc3RyaWN0ZWRQYXJ0eTogNSxcclxuICAgICAgbWluaW1hbEl0ZW1MZXZlbDogNixcclxuICAgICAgc2lsZW5jZUVjaG86IDcsXHJcbiAgICAgIGV4cGxvcmVyTW9kZTogOCxcclxuICAgICAgbGV2ZWxTeW5jOiA5LFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgTnBjWWVsbDoge1xyXG4gICAgdHlwZTogJzI2NicsXHJcbiAgICBuYW1lOiAnTnBjWWVsbCcsXHJcbiAgICBzb3VyY2U6ICdPdmVybGF5UGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnMjY2JyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIG5wY0lkOiAyLFxyXG4gICAgICBucGNOYW1lSWQ6IDMsXHJcbiAgICAgIG5wY1llbGxJZDogNCxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIEJhdHRsZVRhbGsyOiB7XHJcbiAgICB0eXBlOiAnMjY3JyxcclxuICAgIG5hbWU6ICdCYXR0bGVUYWxrMicsXHJcbiAgICBzb3VyY2U6ICdPdmVybGF5UGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnMjY3JyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIG5wY0lkOiAyLFxyXG4gICAgICBpbnN0YW5jZTogMyxcclxuICAgICAgbnBjTmFtZUlkOiA0LFxyXG4gICAgICBpbnN0YW5jZUNvbnRlbnRUZXh0SWQ6IDUsXHJcbiAgICAgIGRpc3BsYXlNczogNixcclxuICAgICAgLy8gdW5rbm93bjE6IDcsXHJcbiAgICAgIC8vIHVua25vd24yOiA4LFxyXG4gICAgICAvLyB1bmtub3duMzogOSxcclxuICAgICAgLy8gdW5rbm93bjQ6IDEwLFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgQ291bnRkb3duOiB7XHJcbiAgICB0eXBlOiAnMjY4JyxcclxuICAgIG5hbWU6ICdDb3VudGRvd24nLFxyXG4gICAgc291cmNlOiAnT3ZlcmxheVBsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJzI2OCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgd29ybGRJZDogMyxcclxuICAgICAgY291bnRkb3duVGltZTogNCxcclxuICAgICAgcmVzdWx0OiA1LFxyXG4gICAgICBuYW1lOiA2LFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiA2LFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgQ291bnRkb3duQ2FuY2VsOiB7XHJcbiAgICB0eXBlOiAnMjY5JyxcclxuICAgIG5hbWU6ICdDb3VudGRvd25DYW5jZWwnLFxyXG4gICAgc291cmNlOiAnT3ZlcmxheVBsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJzI2OScsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgd29ybGRJZDogMyxcclxuICAgICAgbmFtZTogNCxcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogNCxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIEFjdG9yTW92ZToge1xyXG4gICAgdHlwZTogJzI3MCcsXHJcbiAgICBuYW1lOiAnQWN0b3JNb3ZlJyxcclxuICAgIHNvdXJjZTogJ092ZXJsYXlQbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICcyNzAnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIGhlYWRpbmc6IDMsIC8vIE9QIGNhbGxzIHRoaXMgJ3JvdGF0aW9uJywgYnV0IGNhY3Rib3QgY29uc2lzdGVudGx5IHVzZXMgJ2hlYWRpbmcnXHJcbiAgICAgIC8vIHVua25vd24xOiA0LFxyXG4gICAgICAvLyB1bmtub3duMjogNSxcclxuICAgICAgeDogNixcclxuICAgICAgeTogNyxcclxuICAgICAgejogOCxcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogbnVsbCxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIEFjdG9yU2V0UG9zOiB7XHJcbiAgICB0eXBlOiAnMjcxJyxcclxuICAgIG5hbWU6ICdBY3RvclNldFBvcycsXHJcbiAgICBzb3VyY2U6ICdPdmVybGF5UGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnMjcxJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBoZWFkaW5nOiAzLCAvLyBPUCBjYWxscyB0aGlzICdyb3RhdGlvbicsIGJ1dCBjYWN0Ym90IGNvbnNpc3RlbnRseSB1c2VzICdoZWFkaW5nJ1xyXG4gICAgICAvLyB1bmtub3duMTogNCxcclxuICAgICAgLy8gdW5rbm93bjI6IDUsXHJcbiAgICAgIHg6IDYsXHJcbiAgICAgIHk6IDcsXHJcbiAgICAgIHo6IDgsXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBTcGF3bk5wY0V4dHJhOiB7XHJcbiAgICB0eXBlOiAnMjcyJyxcclxuICAgIG5hbWU6ICdTcGF3bk5wY0V4dHJhJyxcclxuICAgIHNvdXJjZTogJ092ZXJsYXlQbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICcyNzInLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIHBhcmVudElkOiAzLFxyXG4gICAgICB0ZXRoZXJJZDogNCxcclxuICAgICAgYW5pbWF0aW9uU3RhdGU6IDUsXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDM6IG51bGwsIC8vIGBpZGAgaXMgYW4gbnBjLCBidXQgcGFyZW50SWQgY291bGQgYmUgYSB0ZXRoZXJlZCBwbGF5ZXI/XHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBBY3RvckNvbnRyb2xFeHRyYToge1xyXG4gICAgdHlwZTogJzI3MycsXHJcbiAgICBuYW1lOiAnQWN0b3JDb250cm9sRXh0cmEnLFxyXG4gICAgc291cmNlOiAnT3ZlcmxheVBsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJzI3MycsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgY2F0ZWdvcnk6IDMsXHJcbiAgICAgIHBhcmFtMTogNCxcclxuICAgICAgcGFyYW0yOiA1LFxyXG4gICAgICBwYXJhbTM6IDYsXHJcbiAgICAgIHBhcmFtNDogNyxcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogbnVsbCxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIEFjdG9yQ29udHJvbFNlbGZFeHRyYToge1xyXG4gICAgdHlwZTogJzI3NCcsXHJcbiAgICBuYW1lOiAnQWN0b3JDb250cm9sU2VsZkV4dHJhJyxcclxuICAgIHNvdXJjZTogJ092ZXJsYXlQbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICcyNzQnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIGNhdGVnb3J5OiAzLFxyXG4gICAgICBwYXJhbTE6IDQsXHJcbiAgICAgIHBhcmFtMjogNSxcclxuICAgICAgcGFyYW0zOiA2LFxyXG4gICAgICBwYXJhbTQ6IDcsXHJcbiAgICAgIHBhcmFtNTogOCxcclxuICAgICAgcGFyYW02OiA5LFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiBudWxsLFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nRGVmaW5pdGlvbnNWZXJzaW9ucyA9IHtcclxuICAnbGF0ZXN0JzogbGF0ZXN0TG9nRGVmaW5pdGlvbnMsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vLyBWZXJpZnkgdGhhdCB0aGlzIGhhcyB0aGUgcmlnaHQgdHlwZSwgYnV0IGV4cG9ydCBgYXMgY29uc3RgLlxyXG5jb25zdCBhc3NlcnRMb2dEZWZpbml0aW9uczogTG9nRGVmaW5pdGlvblZlcnNpb25NYXAgPSBsb2dEZWZpbml0aW9uc1ZlcnNpb25zO1xyXG5jb25zb2xlLmFzc2VydChhc3NlcnRMb2dEZWZpbml0aW9ucyk7XHJcblxyXG5leHBvcnQgdHlwZSBMb2dEZWZpbml0aW9ucyA9IHR5cGVvZiBsb2dEZWZpbml0aW9uc1ZlcnNpb25zWydsYXRlc3QnXTtcclxuZXhwb3J0IHR5cGUgTG9nRGVmaW5pdGlvblR5cGVzID0ga2V5b2YgTG9nRGVmaW5pdGlvbnM7XHJcbmV4cG9ydCB0eXBlIExvZ0RlZmluaXRpb25WZXJzaW9ucyA9IGtleW9mIHR5cGVvZiBsb2dEZWZpbml0aW9uc1ZlcnNpb25zO1xyXG5cclxudHlwZSBSZXBlYXRpbmdGaWVsZHNOYXJyb3dpbmdUeXBlID0geyByZWFkb25seSByZXBlYXRpbmdGaWVsZHM6IHVua25vd24gfTtcclxuXHJcbmV4cG9ydCB0eXBlIFJlcGVhdGluZ0ZpZWxkc1R5cGVzID0ga2V5b2Yge1xyXG4gIFtcclxuICAgIHR5cGUgaW4gTG9nRGVmaW5pdGlvblR5cGVzIGFzIExvZ0RlZmluaXRpb25zW3R5cGVdIGV4dGVuZHMgUmVwZWF0aW5nRmllbGRzTmFycm93aW5nVHlwZSA/IHR5cGVcclxuICAgICAgOiBuZXZlclxyXG4gIF06IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBSZXBlYXRpbmdGaWVsZHNEZWZpbml0aW9ucyA9IHtcclxuICBbdHlwZSBpbiBSZXBlYXRpbmdGaWVsZHNUeXBlc106IExvZ0RlZmluaXRpb25zW3R5cGVdICYge1xyXG4gICAgcmVhZG9ubHkgcmVwZWF0aW5nRmllbGRzOiBFeGNsdWRlPExvZ0RlZmluaXRpb25zW3R5cGVdWydyZXBlYXRpbmdGaWVsZHMnXSwgdW5kZWZpbmVkPjtcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgUGFyc2VIZWxwZXJGaWVsZDxcclxuICBUeXBlIGV4dGVuZHMgTG9nRGVmaW5pdGlvblR5cGVzLFxyXG4gIEZpZWxkcyBleHRlbmRzIE5ldEZpZWxkc1JldmVyc2VbVHlwZV0sXHJcbiAgRmllbGQgZXh0ZW5kcyBrZXlvZiBGaWVsZHMsXHJcbj4gPSB7XHJcbiAgZmllbGQ6IEZpZWxkc1tGaWVsZF0gZXh0ZW5kcyBzdHJpbmcgPyBGaWVsZHNbRmllbGRdIDogbmV2ZXI7XHJcbiAgdmFsdWU/OiBzdHJpbmc7XHJcbiAgb3B0aW9uYWw/OiBib29sZWFuO1xyXG4gIHJlcGVhdGluZz86IGJvb2xlYW47XHJcbiAgcmVwZWF0aW5nS2V5cz86IHN0cmluZ1tdO1xyXG4gIHNvcnRLZXlzPzogYm9vbGVhbjtcclxuICBwcmltYXJ5S2V5Pzogc3RyaW5nO1xyXG4gIHBvc3NpYmxlS2V5cz86IHN0cmluZ1tdO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgUGFyc2VIZWxwZXJGaWVsZHM8VCBleHRlbmRzIExvZ0RlZmluaXRpb25UeXBlcz4gPSB7XHJcbiAgW2ZpZWxkIGluIGtleW9mIE5ldEZpZWxkc1JldmVyc2VbVF1dOiBQYXJzZUhlbHBlckZpZWxkPFQsIE5ldEZpZWxkc1JldmVyc2VbVF0sIGZpZWxkPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ0RlZmluaXRpb25zVmVyc2lvbnNbJ2xhdGVzdCddO1xyXG4iLCIvLyBIZWxwZXIgRXJyb3IgZm9yIFR5cGVTY3JpcHQgc2l0dWF0aW9ucyB3aGVyZSB0aGUgcHJvZ3JhbW1lciB0aGlua3MgdGhleVxyXG4vLyBrbm93IGJldHRlciB0aGFuIFR5cGVTY3JpcHQgdGhhdCBzb21lIHNpdHVhdGlvbiB3aWxsIG5ldmVyIG9jY3VyLlxyXG5cclxuLy8gVGhlIGludGVudGlvbiBoZXJlIGlzIHRoYXQgdGhlIHByb2dyYW1tZXIgZG9lcyBub3QgZXhwZWN0IGEgcGFydGljdWxhclxyXG4vLyBiaXQgb2YgY29kZSB0byBoYXBwZW4sIGFuZCBzbyBoYXMgbm90IHdyaXR0ZW4gY2FyZWZ1bCBlcnJvciBoYW5kbGluZy5cclxuLy8gSWYgaXQgZG9lcyBvY2N1ciwgYXQgbGVhc3QgdGhlcmUgd2lsbCBiZSBhbiBlcnJvciBhbmQgd2UgY2FuIGZpZ3VyZSBvdXQgd2h5LlxyXG4vLyBUaGlzIGlzIHByZWZlcmFibGUgdG8gY2FzdGluZyBvciBkaXNhYmxpbmcgVHlwZVNjcmlwdCBhbHRvZ2V0aGVyIGluIG9yZGVyIHRvXHJcbi8vIGF2b2lkIHN5bnRheCBlcnJvcnMuXHJcblxyXG4vLyBPbmUgY29tbW9uIGV4YW1wbGUgaXMgYSByZWdleCwgd2hlcmUgaWYgdGhlIHJlZ2V4IG1hdGNoZXMgdGhlbiBhbGwgb2YgdGhlXHJcbi8vIChub24tb3B0aW9uYWwpIHJlZ2V4IGdyb3VwcyB3aWxsIGFsc28gYmUgdmFsaWQsIGJ1dCBUeXBlU2NyaXB0IGRvZXNuJ3Qga25vdy5cclxuZXhwb3J0IGNsYXNzIFVucmVhY2hhYmxlQ29kZSBleHRlbmRzIEVycm9yIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCdUaGlzIGNvZGUgc2hvdWxkblxcJ3QgYmUgcmVhY2hlZCcpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZXRGaWVsZHMsIE5ldEZpZWxkc1JldmVyc2UgfSBmcm9tICcuLi90eXBlcy9uZXRfZmllbGRzJztcclxuaW1wb3J0IHsgTmV0UGFyYW1zIH0gZnJvbSAnLi4vdHlwZXMvbmV0X3Byb3BzJztcclxuaW1wb3J0IHsgQ2FjdGJvdEJhc2VSZWdFeHAgfSBmcm9tICcuLi90eXBlcy9uZXRfdHJpZ2dlcic7XHJcblxyXG5pbXBvcnQgbG9nRGVmaW5pdGlvbnMsIHtcclxuICBsb2dEZWZpbml0aW9uc1ZlcnNpb25zLFxyXG4gIExvZ0RlZmluaXRpb25UeXBlcyxcclxuICBMb2dEZWZpbml0aW9uVmVyc2lvbnMsXHJcbiAgUGFyc2VIZWxwZXJGaWVsZHMsXHJcbiAgUmVwZWF0aW5nRmllbGRzRGVmaW5pdGlvbnMsXHJcbiAgUmVwZWF0aW5nRmllbGRzVHlwZXMsXHJcbn0gZnJvbSAnLi9uZXRsb2dfZGVmcyc7XHJcbmltcG9ydCB7IFVucmVhY2hhYmxlQ29kZSB9IGZyb20gJy4vbm90X3JlYWNoZWQnO1xyXG5cclxuY29uc3Qgc2VwYXJhdG9yID0gJzonO1xyXG5jb25zdCBtYXRjaERlZmF1bHQgPSAnW146XSonO1xyXG5jb25zdCBtYXRjaFdpdGhDb2xvbnNEZWZhdWx0ID0gJyg/OlteOl18OiApKj8nO1xyXG5jb25zdCBmaWVsZHNXaXRoUG90ZW50aWFsQ29sb25zID0gWydlZmZlY3QnLCAnYWJpbGl0eSddO1xyXG5cclxuY29uc3QgZGVmYXVsdFBhcmFtcyA9IDxcclxuICBUIGV4dGVuZHMgTG9nRGVmaW5pdGlvblR5cGVzLFxyXG4gIFYgZXh0ZW5kcyBMb2dEZWZpbml0aW9uVmVyc2lvbnMsXHJcbj4odHlwZTogVCwgdmVyc2lvbjogViwgaW5jbHVkZT86IHN0cmluZ1tdKTogUGFydGlhbDxQYXJzZUhlbHBlckZpZWxkczxUPj4gPT4ge1xyXG4gIGNvbnN0IGxvZ1R5cGUgPSBsb2dEZWZpbml0aW9uc1ZlcnNpb25zW3ZlcnNpb25dW3R5cGVdO1xyXG4gIGlmIChpbmNsdWRlID09PSB1bmRlZmluZWQpIHtcclxuICAgIGluY2x1ZGUgPSBPYmplY3Qua2V5cyhsb2dUeXBlLmZpZWxkcyk7XHJcbiAgICBpZiAoJ3JlcGVhdGluZ0ZpZWxkcycgaW4gbG9nVHlwZSkge1xyXG4gICAgICBpbmNsdWRlLnB1c2gobG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMubGFiZWwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcGFyYW1zOiB7XHJcbiAgICBbaW5kZXg6IG51bWJlcl06IHtcclxuICAgICAgZmllbGQ6IHN0cmluZztcclxuICAgICAgdmFsdWU/OiBzdHJpbmc7XHJcbiAgICAgIG9wdGlvbmFsOiBib29sZWFuO1xyXG4gICAgICByZXBlYXRpbmc/OiBib29sZWFuO1xyXG4gICAgICByZXBlYXRpbmdLZXlzPzogc3RyaW5nW107XHJcbiAgICAgIHNvcnRLZXlzPzogYm9vbGVhbjtcclxuICAgICAgcHJpbWFyeUtleT86IHN0cmluZztcclxuICAgICAgcG9zc2libGVLZXlzPzogc3RyaW5nW107XHJcbiAgICB9O1xyXG4gIH0gPSB7fTtcclxuICBjb25zdCBmaXJzdE9wdGlvbmFsRmllbGQgPSBsb2dUeXBlLmZpcnN0T3B0aW9uYWxGaWVsZDtcclxuXHJcbiAgZm9yIChjb25zdCBbcHJvcCwgaW5kZXhdIG9mIE9iamVjdC5lbnRyaWVzKGxvZ1R5cGUuZmllbGRzKSkge1xyXG4gICAgaWYgKCFpbmNsdWRlLmluY2x1ZGVzKHByb3ApKVxyXG4gICAgICBjb250aW51ZTtcclxuICAgIGNvbnN0IHBhcmFtOiB7IGZpZWxkOiBzdHJpbmc7IHZhbHVlPzogc3RyaW5nOyBvcHRpb25hbDogYm9vbGVhbjsgcmVwZWF0aW5nPzogYm9vbGVhbiB9ID0ge1xyXG4gICAgICBmaWVsZDogcHJvcCxcclxuICAgICAgb3B0aW9uYWw6IGZpcnN0T3B0aW9uYWxGaWVsZCAhPT0gdW5kZWZpbmVkICYmIGluZGV4ID49IGZpcnN0T3B0aW9uYWxGaWVsZCxcclxuICAgIH07XHJcbiAgICBpZiAocHJvcCA9PT0gJ3R5cGUnKVxyXG4gICAgICBwYXJhbS52YWx1ZSA9IGxvZ1R5cGUudHlwZTtcclxuXHJcbiAgICBwYXJhbXNbaW5kZXhdID0gcGFyYW07XHJcbiAgfVxyXG5cclxuICBpZiAoJ3JlcGVhdGluZ0ZpZWxkcycgaW4gbG9nVHlwZSAmJiBpbmNsdWRlLmluY2x1ZGVzKGxvZ1R5cGUucmVwZWF0aW5nRmllbGRzLmxhYmVsKSkge1xyXG4gICAgcGFyYW1zW2xvZ1R5cGUucmVwZWF0aW5nRmllbGRzLnN0YXJ0aW5nSW5kZXhdID0ge1xyXG4gICAgICBmaWVsZDogbG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMubGFiZWwsXHJcbiAgICAgIG9wdGlvbmFsOiBmaXJzdE9wdGlvbmFsRmllbGQgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIGxvZ1R5cGUucmVwZWF0aW5nRmllbGRzLnN0YXJ0aW5nSW5kZXggPj0gZmlyc3RPcHRpb25hbEZpZWxkLFxyXG4gICAgICByZXBlYXRpbmc6IHRydWUsXHJcbiAgICAgIHJlcGVhdGluZ0tleXM6IFsuLi5sb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5uYW1lc10sXHJcbiAgICAgIHNvcnRLZXlzOiBsb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5zb3J0S2V5cyxcclxuICAgICAgcHJpbWFyeUtleTogbG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMucHJpbWFyeUtleSxcclxuICAgICAgcG9zc2libGVLZXlzOiBbLi4ubG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMucG9zc2libGVLZXlzXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGFyYW1zIGFzIFBhcnRpYWw8UGFyc2VIZWxwZXJGaWVsZHM8VD4+O1xyXG59O1xyXG5cclxudHlwZSBSZXBlYXRpbmdGaWVsZHNNYXA8XHJcbiAgVEJhc2UgZXh0ZW5kcyBMb2dEZWZpbml0aW9uVHlwZXMsXHJcbiAgVEtleSBleHRlbmRzIFJlcGVhdGluZ0ZpZWxkc1R5cGVzID0gVEJhc2UgZXh0ZW5kcyBSZXBlYXRpbmdGaWVsZHNUeXBlcyA/IFRCYXNlIDogbmV2ZXIsXHJcbj4gPSB7XHJcbiAgW25hbWUgaW4gUmVwZWF0aW5nRmllbGRzRGVmaW5pdGlvbnNbVEtleV1bJ3JlcGVhdGluZ0ZpZWxkcyddWyduYW1lcyddW251bWJlcl1dOlxyXG4gICAgfCBzdHJpbmdcclxuICAgIHwgc3RyaW5nW107XHJcbn1bXTtcclxuXHJcbnR5cGUgUmVwZWF0aW5nRmllbGRzTWFwVHlwZUNoZWNrPFxyXG4gIFRCYXNlIGV4dGVuZHMgTG9nRGVmaW5pdGlvblR5cGVzLFxyXG4gIEYgZXh0ZW5kcyBrZXlvZiBOZXRGaWVsZHNbVEJhc2VdLFxyXG4gIFRLZXkgZXh0ZW5kcyBSZXBlYXRpbmdGaWVsZHNUeXBlcyA9IFRCYXNlIGV4dGVuZHMgUmVwZWF0aW5nRmllbGRzVHlwZXMgPyBUQmFzZSA6IG5ldmVyLFxyXG4+ID0gRiBleHRlbmRzIFJlcGVhdGluZ0ZpZWxkc0RlZmluaXRpb25zW1RLZXldWydyZXBlYXRpbmdGaWVsZHMnXVsnbGFiZWwnXVxyXG4gID8gUmVwZWF0aW5nRmllbGRzTWFwPFRLZXk+IDpcclxuICBuZXZlcjtcclxuXHJcbnR5cGUgUmVwZWF0aW5nRmllbGRzTWFwVHlwZTxcclxuICBUIGV4dGVuZHMgTG9nRGVmaW5pdGlvblR5cGVzLFxyXG4gIEYgZXh0ZW5kcyBrZXlvZiBOZXRGaWVsZHNbVF0sXHJcbj4gPSBUIGV4dGVuZHMgUmVwZWF0aW5nRmllbGRzVHlwZXMgPyBSZXBlYXRpbmdGaWVsZHNNYXBUeXBlQ2hlY2s8VCwgRj5cclxuICA6IG5ldmVyO1xyXG5cclxudHlwZSBQYXJzZUhlbHBlclR5cGU8VCBleHRlbmRzIExvZ0RlZmluaXRpb25UeXBlcz4gPVxyXG4gICYge1xyXG4gICAgW2ZpZWxkIGluIGtleW9mIE5ldEZpZWxkc1tUXV0/OiBzdHJpbmcgfCByZWFkb25seSBzdHJpbmdbXSB8IFJlcGVhdGluZ0ZpZWxkc01hcFR5cGU8VCwgZmllbGQ+O1xyXG4gIH1cclxuICAmIHsgY2FwdHVyZT86IGJvb2xlYW4gfTtcclxuXHJcbmNvbnN0IGlzUmVwZWF0aW5nRmllbGQgPSA8XHJcbiAgVCBleHRlbmRzIExvZ0RlZmluaXRpb25UeXBlcyxcclxuPihcclxuICByZXBlYXRpbmc6IGJvb2xlYW4gfCB1bmRlZmluZWQsXHJcbiAgdmFsdWU6IHN0cmluZyB8IHJlYWRvbmx5IHN0cmluZ1tdIHwgUmVwZWF0aW5nRmllbGRzTWFwPFQ+IHwgdW5kZWZpbmVkLFxyXG4pOiB2YWx1ZSBpcyBSZXBlYXRpbmdGaWVsZHNNYXA8VD4gPT4ge1xyXG4gIGlmIChyZXBlYXRpbmcgIT09IHRydWUpXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgLy8gQWxsb3cgZXhjbHVkaW5nIHRoZSBmaWVsZCB0byBtYXRjaCBmb3IgZXh0cmFjdGlvblxyXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSlcclxuICAgIHJldHVybiBmYWxzZTtcclxuICBmb3IgKGNvbnN0IGUgb2YgdmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgZSAhPT0gJ29iamVjdCcpXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5jb25zdCBwYXJzZUhlbHBlciA9IDxUIGV4dGVuZHMgTG9nRGVmaW5pdGlvblR5cGVzPihcclxuICBwYXJhbXM6IFBhcnNlSGVscGVyVHlwZTxUPiB8IHVuZGVmaW5lZCxcclxuICBkZWZLZXk6IFQsXHJcbiAgZmllbGRzOiBQYXJ0aWFsPFBhcnNlSGVscGVyRmllbGRzPFQ+PixcclxuKTogQ2FjdGJvdEJhc2VSZWdFeHA8VD4gPT4ge1xyXG4gIHBhcmFtcyA9IHBhcmFtcyA/PyB7fTtcclxuICBjb25zdCB2YWxpZEZpZWxkczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgZm9yIChjb25zdCBpbmRleCBpbiBmaWVsZHMpIHtcclxuICAgIGNvbnN0IGZpZWxkID0gZmllbGRzW2luZGV4XTtcclxuICAgIGlmIChmaWVsZClcclxuICAgICAgdmFsaWRGaWVsZHMucHVzaChmaWVsZC5maWVsZCk7XHJcbiAgfVxyXG5cclxuICBSZWdleGVzLnZhbGlkYXRlUGFyYW1zKHBhcmFtcywgZGVmS2V5LCBbJ2NhcHR1cmUnLCAuLi52YWxpZEZpZWxkc10pO1xyXG5cclxuICAvLyBGaW5kIHRoZSBsYXN0IGtleSB3ZSBjYXJlIGFib3V0LCBzbyB3ZSBjYW4gc2hvcnRlbiB0aGUgcmVnZXggaWYgbmVlZGVkLlxyXG4gIGNvbnN0IGNhcHR1cmUgPSBSZWdleGVzLnRydWVJZlVuZGVmaW5lZChwYXJhbXMuY2FwdHVyZSk7XHJcbiAgY29uc3QgZmllbGRLZXlzID0gT2JqZWN0LmtleXMoZmllbGRzKS5zb3J0KChhLCBiKSA9PiBwYXJzZUludChhKSAtIHBhcnNlSW50KGIpKTtcclxuICBsZXQgbWF4S2V5U3RyOiBzdHJpbmc7XHJcbiAgaWYgKGNhcHR1cmUpIHtcclxuICAgIGNvbnN0IGtleXM6IEV4dHJhY3Q8a2V5b2YgTmV0RmllbGRzUmV2ZXJzZVtUXSwgc3RyaW5nPltdID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmaWVsZHMpXHJcbiAgICAgIGtleXMucHVzaChrZXkpO1xyXG4gICAgbGV0IHRtcEtleSA9IGtleXMucG9wKCk7XHJcbiAgICBpZiAodG1wS2V5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgbWF4S2V5U3RyID0gZmllbGRLZXlzW2ZpZWxkS2V5cy5sZW5ndGggLSAxXSA/PyAnMCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3aGlsZSAoXHJcbiAgICAgICAgZmllbGRzW3RtcEtleV0/Lm9wdGlvbmFsICYmXHJcbiAgICAgICAgISgoZmllbGRzW3RtcEtleV0/LmZpZWxkID8/ICcnKSBpbiBwYXJhbXMpXHJcbiAgICAgIClcclxuICAgICAgICB0bXBLZXkgPSBrZXlzLnBvcCgpO1xyXG4gICAgICBtYXhLZXlTdHIgPSB0bXBLZXkgPz8gJzAnO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBtYXhLZXlTdHIgPSAnMCc7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmaWVsZHMpIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBmaWVsZHNba2V5XSA/PyB7fTtcclxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGZpZWxkc1trZXldPy5maWVsZDtcclxuICAgICAgaWYgKGZpZWxkTmFtZSAhPT0gdW5kZWZpbmVkICYmIGZpZWxkTmFtZSBpbiBwYXJhbXMpXHJcbiAgICAgICAgbWF4S2V5U3RyID0ga2V5O1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBtYXhLZXkgPSBwYXJzZUludChtYXhLZXlTdHIpO1xyXG5cclxuICAvLyBTcGVjaWFsIGNhc2UgZm9yIEFiaWxpdHkgdG8gaGFuZGxlIGFvZSBhbmQgbm9uLWFvZS5cclxuICBjb25zdCBhYmlsaXR5TWVzc2FnZVR5cGUgPVxyXG4gICAgYCg/OiR7bG9nRGVmaW5pdGlvbnMuQWJpbGl0eS5tZXNzYWdlVHlwZX18JHtsb2dEZWZpbml0aW9ucy5OZXR3b3JrQU9FQWJpbGl0eS5tZXNzYWdlVHlwZX0pYDtcclxuICBjb25zdCBhYmlsaXR5SGV4Q29kZSA9ICcoPzoxNXwxNiknO1xyXG5cclxuICAvLyBCdWlsZCB0aGUgcmVnZXggZnJvbSB0aGUgZmllbGRzLlxyXG4gIGNvbnN0IHByZWZpeCA9IGRlZktleSAhPT0gJ0FiaWxpdHknID8gbG9nRGVmaW5pdGlvbnNbZGVmS2V5XS5tZXNzYWdlVHlwZSA6IGFiaWxpdHlNZXNzYWdlVHlwZTtcclxuXHJcbiAgLy8gSGV4IGNvZGVzIGFyZSBhIG1pbmltdW0gb2YgdHdvIGNoYXJhY3RlcnMuICBBYmlsaXRpZXMgYXJlIHNwZWNpYWwgYmVjYXVzZVxyXG4gIC8vIHRoZXkgbmVlZCB0byBzdXBwb3J0IGJvdGggMHgxNSBhbmQgMHgxNi5cclxuICBjb25zdCB0eXBlQXNIZXggPSBwYXJzZUludChsb2dEZWZpbml0aW9uc1tkZWZLZXldLnR5cGUpLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xyXG4gIGNvbnN0IGRlZmF1bHRIZXhDb2RlID0gdHlwZUFzSGV4Lmxlbmd0aCA8IDIgPyBgMDAke3R5cGVBc0hleH1gLnNsaWNlKC0yKSA6IHR5cGVBc0hleDtcclxuICBjb25zdCBoZXhDb2RlID0gZGVmS2V5ICE9PSAnQWJpbGl0eScgPyBkZWZhdWx0SGV4Q29kZSA6IGFiaWxpdHlIZXhDb2RlO1xyXG5cclxuICBsZXQgc3RyID0gJyc7XHJcbiAgaWYgKGNhcHR1cmUpXHJcbiAgICBzdHIgKz0gYCg/PHRpbWVzdGFtcD5cXFxceXtUaW1lc3RhbXB9KSAke3ByZWZpeH0gKD88dHlwZT4ke2hleENvZGV9KWA7XHJcbiAgZWxzZVxyXG4gICAgc3RyICs9IGBcXFxceXtUaW1lc3RhbXB9ICR7cHJlZml4fSAke2hleENvZGV9YDtcclxuXHJcbiAgbGV0IGxhc3RLZXkgPSAxO1xyXG4gIGZvciAoY29uc3Qga2V5U3RyIGluIGZpZWxkcykge1xyXG4gICAgY29uc3QgcGFyc2VGaWVsZCA9IGZpZWxkc1trZXlTdHJdO1xyXG4gICAgaWYgKHBhcnNlRmllbGQgPT09IHVuZGVmaW5lZClcclxuICAgICAgY29udGludWU7XHJcbiAgICBjb25zdCBmaWVsZE5hbWUgPSBwYXJzZUZpZWxkLmZpZWxkO1xyXG5cclxuICAgIC8vIFJlZ2V4IGhhbmRsZXMgdGhlc2UgbWFudWFsbHkgYWJvdmUgaW4gdGhlIGBzdHJgIGluaXRpYWxpemF0aW9uLlxyXG4gICAgaWYgKGZpZWxkTmFtZSA9PT0gJ3RpbWVzdGFtcCcgfHwgZmllbGROYW1lID09PSAndHlwZScpXHJcbiAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgIGNvbnN0IGtleSA9IHBhcnNlSW50KGtleVN0cik7XHJcbiAgICAvLyBGaWxsIGluIGJsYW5rcy5cclxuICAgIGNvbnN0IG1pc3NpbmdGaWVsZHMgPSBrZXkgLSBsYXN0S2V5IC0gMTtcclxuICAgIGlmIChtaXNzaW5nRmllbGRzID09PSAxKVxyXG4gICAgICBzdHIgKz0gYCR7c2VwYXJhdG9yfSR7bWF0Y2hEZWZhdWx0fWA7XHJcbiAgICBlbHNlIGlmIChtaXNzaW5nRmllbGRzID4gMSlcclxuICAgICAgc3RyICs9IGAoPzoke3NlcGFyYXRvcn0ke21hdGNoRGVmYXVsdH0peyR7bWlzc2luZ0ZpZWxkc319YDtcclxuICAgIGxhc3RLZXkgPSBrZXk7XHJcblxyXG4gICAgc3RyICs9IHNlcGFyYXRvcjtcclxuXHJcbiAgICBpZiAodHlwZW9mIHBhcnNlRmllbGQgIT09ICdvYmplY3QnKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZGVmS2V5fTogaW52YWxpZCB2YWx1ZTogJHtKU09OLnN0cmluZ2lmeShwYXJzZUZpZWxkKX1gKTtcclxuXHJcbiAgICBjb25zdCBmaWVsZERlZmF1bHQgPSBmaWVsZE5hbWUgIT09IHVuZGVmaW5lZCAmJiBmaWVsZHNXaXRoUG90ZW50aWFsQ29sb25zLmluY2x1ZGVzKGZpZWxkTmFtZSlcclxuICAgICAgPyBtYXRjaFdpdGhDb2xvbnNEZWZhdWx0XHJcbiAgICAgIDogbWF0Y2hEZWZhdWx0O1xyXG4gICAgY29uc3QgZGVmYXVsdEZpZWxkVmFsdWUgPSBwYXJzZUZpZWxkLnZhbHVlPy50b1N0cmluZygpID8/IGZpZWxkRGVmYXVsdDtcclxuICAgIGNvbnN0IGZpZWxkVmFsdWUgPSBwYXJhbXNbZmllbGROYW1lXTtcclxuXHJcbiAgICBpZiAoaXNSZXBlYXRpbmdGaWVsZChmaWVsZHNba2V5U3RyXT8ucmVwZWF0aW5nLCBmaWVsZFZhbHVlKSkge1xyXG4gICAgICBjb25zdCByZXBlYXRpbmdGaWVsZHNTZXBhcmF0b3IgPSAnKD86JHw6KSc7XHJcbiAgICAgIGxldCByZXBlYXRpbmdBcnJheTogUmVwZWF0aW5nRmllbGRzTWFwPFQ+IHwgdW5kZWZpbmVkID0gZmllbGRWYWx1ZTtcclxuXHJcbiAgICAgIGNvbnN0IHNvcnRLZXlzID0gZmllbGRzW2tleVN0cl0/LnNvcnRLZXlzO1xyXG4gICAgICBjb25zdCBwcmltYXJ5S2V5ID0gZmllbGRzW2tleVN0cl0/LnByaW1hcnlLZXk7XHJcbiAgICAgIGNvbnN0IHBvc3NpYmxlS2V5cyA9IGZpZWxkc1trZXlTdHJdPy5wb3NzaWJsZUtleXM7XHJcblxyXG4gICAgICAvLyBwcmltYXJ5S2V5IGlzIHJlcXVpcmVkIGlmIHRoaXMgaXMgYSByZXBlYXRpbmcgZmllbGQgcGVyIHR5cGVkZWYgaW4gbmV0bG9nX2RlZnMudHNcclxuICAgICAgLy8gU2FtZSB3aXRoIHBvc3NpYmxlS2V5c1xyXG4gICAgICBpZiAocHJpbWFyeUtleSA9PT0gdW5kZWZpbmVkIHx8IHBvc3NpYmxlS2V5cyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNvZGUoKTtcclxuXHJcbiAgICAgIC8vIEFsbG93IHNvcnRpbmcgaWYgbmVlZGVkXHJcbiAgICAgIGlmIChzb3J0S2V5cykge1xyXG4gICAgICAgIC8vIEFsc28gc29ydCBvdXIgdmFsaWQga2V5cyBsaXN0XHJcbiAgICAgICAgcG9zc2libGVLZXlzLnNvcnQoKGxlZnQsIHJpZ2h0KSA9PiBsZWZ0LnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShyaWdodC50b0xvd2VyQ2FzZSgpKSk7XHJcbiAgICAgICAgaWYgKHJlcGVhdGluZ0FycmF5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJlcGVhdGluZ0FycmF5ID0gWy4uLnJlcGVhdGluZ0FycmF5XS5zb3J0KFxyXG4gICAgICAgICAgICAobGVmdDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sIHJpZ2h0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IG51bWJlciA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gV2UgY2hlY2sgdGhlIHZhbGlkaXR5IG9mIGxlZnQvcmlnaHQgYmVjYXVzZSB0aGV5J3JlIHVzZXItc3VwcGxpZWRcclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGxlZnQgIT09ICdvYmplY3QnIHx8IGxlZnRbcHJpbWFyeUtleV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIGFyZ3VtZW50IHBhc3NlZCB0byB0cmlnZ2VyOicsIGxlZnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNvbnN0IGxlZnRWYWx1ZSA9IGxlZnRbcHJpbWFyeUtleV07XHJcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsZWZ0VmFsdWUgIT09ICdzdHJpbmcnIHx8ICFwb3NzaWJsZUtleXM/LmluY2x1ZGVzKGxlZnRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBhcmd1bWVudCBwYXNzZWQgdG8gdHJpZ2dlcjonLCBsZWZ0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHJpZ2h0ICE9PSAnb2JqZWN0JyB8fCByaWdodFtwcmltYXJ5S2V5XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgYXJndW1lbnQgcGFzc2VkIHRvIHRyaWdnZXI6JywgcmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNvbnN0IHJpZ2h0VmFsdWUgPSByaWdodFtwcmltYXJ5S2V5XTtcclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHJpZ2h0VmFsdWUgIT09ICdzdHJpbmcnIHx8ICFwb3NzaWJsZUtleXM/LmluY2x1ZGVzKHJpZ2h0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgYXJndW1lbnQgcGFzc2VkIHRvIHRyaWdnZXI6JywgcmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiBsZWZ0VmFsdWUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKHJpZ2h0VmFsdWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgYW5vblJlcHM6IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH1bXSB8IHVuZGVmaW5lZCA9IHJlcGVhdGluZ0FycmF5O1xyXG4gICAgICAvLyBMb29wIG92ZXIgb3VyIHBvc3NpYmxlIGtleXNcclxuICAgICAgLy8gQnVpbGQgYSByZWdleCB0aGF0IGNhbiBtYXRjaCBhbnkgcG9zc2libGUga2V5IHdpdGggcmVxdWlyZWQgdmFsdWVzIHN1YnN0aXR1dGVkIGluXHJcbiAgICAgIHBvc3NpYmxlS2V5cy5mb3JFYWNoKChwb3NzaWJsZUtleSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcCA9IGFub25SZXBzPy5maW5kKChyZXApID0+IHByaW1hcnlLZXkgaW4gcmVwICYmIHJlcFtwcmltYXJ5S2V5XSA9PT0gcG9zc2libGVLZXkpO1xyXG5cclxuICAgICAgICBsZXQgZmllbGRSZWdleCA9ICcnO1xyXG4gICAgICAgIC8vIFJhdGhlciB0aGFuIGxvb3Bpbmcgb3ZlciB0aGUga2V5cyBkZWZpbmVkIG9uIHRoZSBvYmplY3QsXHJcbiAgICAgICAgLy8gbG9vcCBvdmVyIHRoZSBiYXNlIHR5cGUgZGVmJ3Mga2V5cy4gVGhpcyBlbmZvcmNlcyB0aGUgY29ycmVjdCBvcmRlci5cclxuICAgICAgICBmaWVsZHNba2V5U3RyXT8ucmVwZWF0aW5nS2V5cz8uZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICBsZXQgdmFsID0gcmVwPy5ba2V5XTtcclxuICAgICAgICAgIGlmIChyZXAgPT09IHVuZGVmaW5lZCB8fCAhKGtleSBpbiByZXApKSB7XHJcbiAgICAgICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSB2YWx1ZSBmb3IgdGhpcyBrZXlcclxuICAgICAgICAgICAgLy8gaW5zZXJ0IGEgcGxhY2Vob2xkZXIsIHVubGVzcyBpdCdzIHRoZSBwcmltYXJ5IGtleVxyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSBwcmltYXJ5S2V5KVxyXG4gICAgICAgICAgICAgIHZhbCA9IHBvc3NpYmxlS2V5O1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgdmFsID0gbWF0Y2hEZWZhdWx0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgICAgICAgIHZhbCA9IG1hdGNoRGVmYXVsdDtcclxuICAgICAgICAgICAgZWxzZSBpZiAodmFsLmxlbmd0aCA8IDEpXHJcbiAgICAgICAgICAgICAgdmFsID0gbWF0Y2hEZWZhdWx0O1xyXG4gICAgICAgICAgICBlbHNlIGlmICh2YWwuc29tZSgodikgPT4gdHlwZW9mIHYgIT09ICdzdHJpbmcnKSlcclxuICAgICAgICAgICAgICB2YWwgPSBtYXRjaERlZmF1bHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmaWVsZFJlZ2V4ICs9IFJlZ2V4ZXMubWF5YmVDYXB0dXJlKFxyXG4gICAgICAgICAgICBrZXkgPT09IHByaW1hcnlLZXkgPyBmYWxzZSA6IGNhcHR1cmUsXHJcbiAgICAgICAgICAgIC8vIEFsbCBjYXB0dXJpbmcgZ3JvdXBzIGFyZSBgZmllbGROYW1lYCArIGBwb3NzaWJsZUtleWAsIGUuZy4gYHBhaXJJc0Nhc3RpbmcxYFxyXG4gICAgICAgICAgICBmaWVsZE5hbWUgKyBwb3NzaWJsZUtleSxcclxuICAgICAgICAgICAgdmFsLFxyXG4gICAgICAgICAgICBkZWZhdWx0RmllbGRWYWx1ZSxcclxuICAgICAgICAgICkgK1xyXG4gICAgICAgICAgICByZXBlYXRpbmdGaWVsZHNTZXBhcmF0b3I7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChmaWVsZFJlZ2V4Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHN0ciArPSBgKD86JHtmaWVsZFJlZ2V4fSkke3JlcCAhPT0gdW5kZWZpbmVkID8gJycgOiAnPyd9YDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChmaWVsZHNba2V5U3RyXT8ucmVwZWF0aW5nKSB7XHJcbiAgICAgIC8vIElmIHRoaXMgaXMgYSByZXBlYXRpbmcgZmllbGQgYnV0IHRoZSBhY3R1YWwgdmFsdWUgaXMgZW1wdHkgb3Igb3RoZXJ3aXNlIGludmFsaWQsXHJcbiAgICAgIC8vIGRvbid0IHByb2Nlc3MgZnVydGhlci4gV2UgY2FuJ3QgdXNlIGBjb250aW51ZWAgaW4gdGhlIGFib3ZlIGJsb2NrIGJlY2F1c2UgdGhhdFxyXG4gICAgICAvLyB3b3VsZCBza2lwIHRoZSBlYXJseS1vdXQgYnJlYWsgYXQgdGhlIGVuZCBvZiB0aGUgbG9vcC5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChmaWVsZE5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHN0ciArPSBSZWdleGVzLm1heWJlQ2FwdHVyZShcclxuICAgICAgICAgIC8vIG1vcmUgYWNjdXJhdGUgdHlwZSBpbnN0ZWFkIG9mIGBhc2AgY2FzdFxyXG4gICAgICAgICAgLy8gbWF5YmUgdGhpcyBmdW5jdGlvbiBuZWVkcyBhIHJlZmFjdG9yaW5nXHJcbiAgICAgICAgICBjYXB0dXJlLFxyXG4gICAgICAgICAgZmllbGROYW1lLFxyXG4gICAgICAgICAgZmllbGRWYWx1ZSxcclxuICAgICAgICAgIGRlZmF1bHRGaWVsZFZhbHVlLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RyICs9IGZpZWxkVmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTdG9wIGlmIHdlJ3JlIG5vdCBjYXB0dXJpbmcgYW5kIGRvbid0IGNhcmUgYWJvdXQgZnV0dXJlIGZpZWxkcy5cclxuICAgIGlmIChrZXkgPj0gbWF4S2V5KVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIHN0ciArPSAnKD86JHw6KSc7XHJcblxyXG4gIHJldHVybiBSZWdleGVzLnBhcnNlKHN0cikgYXMgQ2FjdGJvdEJhc2VSZWdFeHA8VD47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYnVpbGRSZWdleCA9IDxUIGV4dGVuZHMga2V5b2YgTmV0UGFyYW1zPihcclxuICB0eXBlOiBULFxyXG4gIHBhcmFtcz86IFBhcnNlSGVscGVyVHlwZTxUPixcclxuKTogQ2FjdGJvdEJhc2VSZWdFeHA8VD4gPT4ge1xyXG4gIHJldHVybiBwYXJzZUhlbHBlcihwYXJhbXMsIHR5cGUsIGRlZmF1bHRQYXJhbXModHlwZSwgUmVnZXhlcy5sb2dWZXJzaW9uKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdleGVzIHtcclxuICBzdGF0aWMgbG9nVmVyc2lvbjogTG9nRGVmaW5pdGlvblZlcnNpb25zID0gJ2xhdGVzdCc7XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yMC0weDE0LW5ldHdvcmtzdGFydHNjYXN0aW5nXHJcbiAgICovXHJcbiAgc3RhdGljIHN0YXJ0c1VzaW5nKHBhcmFtcz86IE5ldFBhcmFtc1snU3RhcnRzVXNpbmcnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdTdGFydHNVc2luZyc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdTdGFydHNVc2luZycsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjEtMHgxNS1uZXR3b3JrYWJpbGl0eVxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yMi0weDE2LW5ldHdvcmthb2VhYmlsaXR5XHJcbiAgICovXHJcbiAgc3RhdGljIGFiaWxpdHkocGFyYW1zPzogTmV0UGFyYW1zWydBYmlsaXR5J10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWJpbGl0eSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdBYmlsaXR5JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yMS0weDE1LW5ldHdvcmthYmlsaXR5XHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTIyLTB4MTYtbmV0d29ya2FvZWFiaWxpdHlcclxuICAgKlxyXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgYWJpbGl0eWAgaW5zdGVhZFxyXG4gICAqL1xyXG4gIHN0YXRpYyBhYmlsaXR5RnVsbChwYXJhbXM/OiBOZXRQYXJhbXNbJ0FiaWxpdHknXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdBYmlsaXR5Jz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYWJpbGl0eShwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI3LTB4MWItbmV0d29ya3RhcmdldGljb24taGVhZC1tYXJrZXJcclxuICAgKi9cclxuICBzdGF0aWMgaGVhZE1hcmtlcihwYXJhbXM/OiBOZXRQYXJhbXNbJ0hlYWRNYXJrZXInXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdIZWFkTWFya2VyJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0hlYWRNYXJrZXInLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTAzLTB4MDMtYWRkY29tYmF0YW50XHJcbiAgICovXHJcbiAgc3RhdGljIGFkZGVkQ29tYmF0YW50KHBhcmFtcz86IE5ldFBhcmFtc1snQWRkZWRDb21iYXRhbnQnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdBZGRlZENvbWJhdGFudCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdBZGRlZENvbWJhdGFudCcsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMDMtMHgwMy1hZGRjb21iYXRhbnRcclxuICAgKi9cclxuICBzdGF0aWMgYWRkZWRDb21iYXRhbnRGdWxsKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydBZGRlZENvbWJhdGFudCddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdBZGRlZENvbWJhdGFudCc+IHtcclxuICAgIHJldHVybiB0aGlzLmFkZGVkQ29tYmF0YW50KHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMDQtMHgwNC1yZW1vdmVjb21iYXRhbnRcclxuICAgKi9cclxuICBzdGF0aWMgcmVtb3ZpbmdDb21iYXRhbnQoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ1JlbW92ZWRDb21iYXRhbnQnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnUmVtb3ZlZENvbWJhdGFudCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdSZW1vdmVkQ29tYmF0YW50JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNi0weDFhLW5ldHdvcmtidWZmXHJcbiAgICovXHJcbiAgc3RhdGljIGdhaW5zRWZmZWN0KHBhcmFtcz86IE5ldFBhcmFtc1snR2FpbnNFZmZlY3QnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdHYWluc0VmZmVjdCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdHYWluc0VmZmVjdCcsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcmVmZXIgZ2FpbnNFZmZlY3Qgb3ZlciB0aGlzIGZ1bmN0aW9uIHVubGVzcyB5b3UgcmVhbGx5IG5lZWQgZXh0cmEgZGF0YS5cclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMzgtMHgyNi1uZXR3b3Jrc3RhdHVzZWZmZWN0c1xyXG4gICAqL1xyXG4gIHN0YXRpYyBzdGF0dXNFZmZlY3RFeHBsaWNpdChcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snU3RhdHVzRWZmZWN0J10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J1N0YXR1c0VmZmVjdCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdTdGF0dXNFZmZlY3QnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTMwLTB4MWUtbmV0d29ya2J1ZmZyZW1vdmVcclxuICAgKi9cclxuICBzdGF0aWMgbG9zZXNFZmZlY3QocGFyYW1zPzogTmV0UGFyYW1zWydMb3Nlc0VmZmVjdCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0xvc2VzRWZmZWN0Jz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0xvc2VzRWZmZWN0JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0zNS0weDIzLW5ldHdvcmt0ZXRoZXJcclxuICAgKi9cclxuICBzdGF0aWMgdGV0aGVyKHBhcmFtcz86IE5ldFBhcmFtc1snVGV0aGVyJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnVGV0aGVyJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ1RldGhlcicsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAndGFyZ2V0JyB3YXMgZGVmZWF0ZWQgYnkgJ3NvdXJjZSdcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjUtMHgxOS1uZXR3b3JrZGVhdGhcclxuICAgKi9cclxuICBzdGF0aWMgd2FzRGVmZWF0ZWQocGFyYW1zPzogTmV0UGFyYW1zWydXYXNEZWZlYXRlZCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J1dhc0RlZmVhdGVkJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ1dhc0RlZmVhdGVkJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNC0weDE4LW5ldHdvcmtkb3RcclxuICAgKi9cclxuICBzdGF0aWMgbmV0d29ya0RvVChwYXJhbXM/OiBOZXRQYXJhbXNbJ05ldHdvcmtEb1QnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdOZXR3b3JrRG9UJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ05ldHdvcmtEb1QnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTAwLTB4MDAtbG9nbGluZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBlY2hvKHBhcmFtcz86IE5ldFBhcmFtc1snR2FtZUxvZyddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0dhbWVMb2cnPiB7XHJcbiAgICBpZiAodHlwZW9mIHBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgIHBhcmFtcyA9IHt9O1xyXG4gICAgUmVnZXhlcy52YWxpZGF0ZVBhcmFtcyhcclxuICAgICAgcGFyYW1zLFxyXG4gICAgICAnZWNobycsXHJcbiAgICAgIFsndHlwZScsICd0aW1lc3RhbXAnLCAnY29kZScsICduYW1lJywgJ2xpbmUnLCAnY2FwdHVyZSddLFxyXG4gICAgKTtcclxuICAgIHBhcmFtcy5jb2RlID0gJzAwMzgnO1xyXG4gICAgcmV0dXJuIFJlZ2V4ZXMuZ2FtZUxvZyhwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTAwLTB4MDAtbG9nbGluZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBkaWFsb2cocGFyYW1zPzogTmV0UGFyYW1zWydHYW1lTG9nJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnR2FtZUxvZyc+IHtcclxuICAgIGlmICh0eXBlb2YgcGFyYW1zID09PSAndW5kZWZpbmVkJylcclxuICAgICAgcGFyYW1zID0ge307XHJcbiAgICBSZWdleGVzLnZhbGlkYXRlUGFyYW1zKFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICAgICdkaWFsb2cnLFxyXG4gICAgICBbJ3R5cGUnLCAndGltZXN0YW1wJywgJ2NvZGUnLCAnbmFtZScsICdsaW5lJywgJ2NhcHR1cmUnXSxcclxuICAgICk7XHJcbiAgICBwYXJhbXMuY29kZSA9ICcwMDQ0JztcclxuICAgIHJldHVybiBSZWdleGVzLmdhbWVMb2cocGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0wMC0weDAwLWxvZ2xpbmVcclxuICAgKi9cclxuICBzdGF0aWMgbWVzc2FnZShwYXJhbXM/OiBOZXRQYXJhbXNbJ0dhbWVMb2cnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdHYW1lTG9nJz4ge1xyXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICBwYXJhbXMgPSB7fTtcclxuICAgIFJlZ2V4ZXMudmFsaWRhdGVQYXJhbXMoXHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgJ21lc3NhZ2UnLFxyXG4gICAgICBbJ3R5cGUnLCAndGltZXN0YW1wJywgJ2NvZGUnLCAnbmFtZScsICdsaW5lJywgJ2NhcHR1cmUnXSxcclxuICAgICk7XHJcbiAgICBwYXJhbXMuY29kZSA9ICcwODM5JztcclxuICAgIHJldHVybiBSZWdleGVzLmdhbWVMb2cocGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGZpZWxkczogY29kZSwgbmFtZSwgbGluZSwgY2FwdHVyZVxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0wMC0weDAwLWxvZ2xpbmVcclxuICAgKi9cclxuICBzdGF0aWMgZ2FtZUxvZyhwYXJhbXM/OiBOZXRQYXJhbXNbJ0dhbWVMb2cnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdHYW1lTG9nJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0dhbWVMb2cnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTAwLTB4MDAtbG9nbGluZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnYW1lTmFtZUxvZyhwYXJhbXM/OiBOZXRQYXJhbXNbJ0dhbWVMb2cnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdHYW1lTG9nJz4ge1xyXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdGFiaWxpdHkuXHJcbiAgICByZXR1cm4gUmVnZXhlcy5nYW1lTG9nKHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMTItMHgwYy1wbGF5ZXJzdGF0c1xyXG4gICAqL1xyXG4gIHN0YXRpYyBzdGF0Q2hhbmdlKHBhcmFtcz86IE5ldFBhcmFtc1snUGxheWVyU3RhdHMnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdQbGF5ZXJTdGF0cyc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdQbGF5ZXJTdGF0cycsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMDEtMHgwMS1jaGFuZ2V6b25lXHJcbiAgICovXHJcbiAgc3RhdGljIGNoYW5nZVpvbmUocGFyYW1zPzogTmV0UGFyYW1zWydDaGFuZ2Vab25lJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQ2hhbmdlWm9uZSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdDaGFuZ2Vab25lJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0zMy0weDIxLW5ldHdvcms2ZC1hY3Rvci1jb250cm9sXHJcbiAgICovXHJcbiAgc3RhdGljIG5ldHdvcms2ZChwYXJhbXM/OiBOZXRQYXJhbXNbJ0FjdG9yQ29udHJvbCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0FjdG9yQ29udHJvbCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdBY3RvckNvbnRyb2wnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTM0LTB4MjItbmV0d29ya25hbWV0b2dnbGVcclxuICAgKi9cclxuICBzdGF0aWMgbmFtZVRvZ2dsZShwYXJhbXM/OiBOZXRQYXJhbXNbJ05hbWVUb2dnbGUnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdOYW1lVG9nZ2xlJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ05hbWVUb2dnbGUnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTQwLTB4MjgtbWFwXHJcbiAgICovXHJcbiAgc3RhdGljIG1hcChwYXJhbXM/OiBOZXRQYXJhbXNbJ01hcCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J01hcCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdNYXAnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTQxLTB4Mjktc3lzdGVtbG9nbWVzc2FnZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBzeXN0ZW1Mb2dNZXNzYWdlKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydTeXN0ZW1Mb2dNZXNzYWdlJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J1N5c3RlbUxvZ01lc3NhZ2UnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnU3lzdGVtTG9nTWVzc2FnZScsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjU3LTB4MTAxLW1hcGVmZmVjdFxyXG4gICAqL1xyXG4gIHN0YXRpYyBtYXBFZmZlY3QocGFyYW1zPzogTmV0UGFyYW1zWydNYXBFZmZlY3QnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdNYXBFZmZlY3QnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnTWFwRWZmZWN0JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNjEtMHgxMDUtY29tYmF0YW50bWVtb3J5XHJcbiAgICovXHJcbiAgc3RhdGljIGNvbWJhdGFudE1lbW9yeShcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQ29tYmF0YW50TWVtb3J5J10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0NvbWJhdGFudE1lbW9yeSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdDb21iYXRhbnRNZW1vcnknLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI2My0weDEwNy1zdGFydHN1c2luZ2V4dHJhXHJcbiAgICovXHJcbiAgc3RhdGljIHN0YXJ0c1VzaW5nRXh0cmEoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ1N0YXJ0c1VzaW5nRXh0cmEnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnU3RhcnRzVXNpbmdFeHRyYSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdTdGFydHNVc2luZ0V4dHJhJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNjQtMHgxMDgtYWJpbGl0eWV4dHJhXHJcbiAgICovXHJcbiAgc3RhdGljIGFiaWxpdHlFeHRyYShcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQWJpbGl0eUV4dHJhJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0FiaWxpdHlFeHRyYSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdBYmlsaXR5RXh0cmEnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI2NS0weDEwOS1jb250ZW50ZmluZGVyc2V0dGluZ3NcclxuICAgKi9cclxuICBzdGF0aWMgY29udGVudEZpbmRlclNldHRpbmdzKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydDb250ZW50RmluZGVyU2V0dGluZ3MnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQ29udGVudEZpbmRlclNldHRpbmdzJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0NvbnRlbnRGaW5kZXJTZXR0aW5ncycsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjY2LTB4MTBhLW5wY3llbGxcclxuICAgKi9cclxuICBzdGF0aWMgbnBjWWVsbChcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snTnBjWWVsbCddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdOcGNZZWxsJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ05wY1llbGwnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI2Ny0weDEwYi1iYXR0bGV0YWxrMlxyXG4gICAqL1xyXG4gIHN0YXRpYyBiYXR0bGVUYWxrMihcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQmF0dGxlVGFsazInXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQmF0dGxlVGFsazInPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnQmF0dGxlVGFsazInLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI2OC0weDEwYy1jb3VudGRvd25cclxuICAgKi9cclxuICBzdGF0aWMgY291bnRkb3duKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydDb3VudGRvd24nXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQ291bnRkb3duJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0NvdW50ZG93bicsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjY5LTB4MTBkLWNvdW50ZG93bmNhbmNlbFxyXG4gICAqL1xyXG4gIHN0YXRpYyBjb3VudGRvd25DYW5jZWwoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ0NvdW50ZG93bkNhbmNlbCddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdDb3VudGRvd25DYW5jZWwnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnQ291bnRkb3duQ2FuY2VsJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNzAtMHgxMGUtYWN0b3Jtb3ZlXHJcbiAgICovXHJcbiAgc3RhdGljIGFjdG9yTW92ZShcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQWN0b3JNb3ZlJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0FjdG9yTW92ZSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdBY3Rvck1vdmUnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI3MS0weDEwZi1hY3RvcnNldHBvc1xyXG4gICAqL1xyXG4gIHN0YXRpYyBhY3RvclNldFBvcyhcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQWN0b3JTZXRQb3MnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWN0b3JTZXRQb3MnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnQWN0b3JTZXRQb3MnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI3Mi0weDExMC1zcGF3bm5wY2V4dHJhXHJcbiAgICovXHJcbiAgc3RhdGljIHNwYXduTnBjRXh0cmEoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ1NwYXduTnBjRXh0cmEnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnU3Bhd25OcGNFeHRyYSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdTcGF3bk5wY0V4dHJhJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNzMtMHgxMTEtYWN0b3Jjb250cm9sZXh0cmFcclxuICAgKi9cclxuICBzdGF0aWMgYWN0b3JDb250cm9sRXh0cmEoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ0FjdG9yQ29udHJvbEV4dHJhJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0FjdG9yQ29udHJvbEV4dHJhJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0FjdG9yQ29udHJvbEV4dHJhJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNzQtMHgxMTItYWN0b3Jjb250cm9sc2VsZmV4dHJhXHJcbiAgICovXHJcbiAgc3RhdGljIGFjdG9yQ29udHJvbFNlbGZFeHRyYShcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQWN0b3JDb250cm9sU2VsZkV4dHJhJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0FjdG9yQ29udHJvbFNlbGZFeHRyYSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdBY3RvckNvbnRyb2xTZWxmRXh0cmEnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGVscGVyIGZ1bmN0aW9uIGZvciBidWlsZGluZyBuYW1lZCBjYXB0dXJlIGdyb3VwXHJcbiAgICovXHJcbiAgc3RhdGljIG1heWJlQ2FwdHVyZShcclxuICAgIGNhcHR1cmU6IGJvb2xlYW4sXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICB2YWx1ZTogc3RyaW5nIHwgcmVhZG9ubHkgc3RyaW5nW10gfCB1bmRlZmluZWQsXHJcbiAgICBkZWZhdWx0VmFsdWU/OiBzdHJpbmcsXHJcbiAgKTogc3RyaW5nIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICB2YWx1ZSA9IGRlZmF1bHRWYWx1ZSA/PyBtYXRjaERlZmF1bHQ7XHJcbiAgICB2YWx1ZSA9IFJlZ2V4ZXMuYW55T2YodmFsdWUpO1xyXG4gICAgcmV0dXJuIGNhcHR1cmUgPyBSZWdleGVzLm5hbWVkQ2FwdHVyZShuYW1lLCB2YWx1ZSkgOiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBvcHRpb25hbChzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCg/OiR7c3RyfSk/YDtcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZXMgYSBuYW1lZCByZWdleCBjYXB0dXJlIGdyb3VwIG5hbWVkIHxuYW1lfCBmb3IgdGhlIG1hdGNoIHx2YWx1ZXwuXHJcbiAgc3RhdGljIG5hbWVkQ2FwdHVyZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKG5hbWUuaW5jbHVkZXMoJz4nKSlcclxuICAgICAgY29uc29sZS5lcnJvcihgXCIke25hbWV9XCIgY29udGFpbnMgXCI+XCIuYCk7XHJcbiAgICBpZiAobmFtZS5pbmNsdWRlcygnPCcpKVxyXG4gICAgICBjb25zb2xlLmVycm9yKGBcIiR7bmFtZX1cIiBjb250YWlucyBcIj5cIi5gKTtcclxuXHJcbiAgICByZXR1cm4gYCg/PCR7bmFtZX0+JHt2YWx1ZX0pYDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGZvciB0dXJuaW5nIG11bHRpcGxlIGFyZ3MgaW50byBhIHVuaW9uZWQgcmVndWxhciBleHByZXNzaW9uLlxyXG4gICAqIGFueU9mKHgsIHksIHopIG9yIGFueU9mKFt4LCB5LCB6XSkgZG8gdGhlIHNhbWUgdGhpbmcsIGFuZCByZXR1cm4gKD86eHx5fHopLlxyXG4gICAqIGFueU9mKHgpIG9yIGFueU9mKHgpIG9uIGl0cyBvd24gc2ltcGxpZmllcyB0byBqdXN0IHguXHJcbiAgICogYXJncyBtYXkgYmUgc3RyaW5ncyBvciBSZWdFeHAsIGFsdGhvdWdoIGFueSBhZGRpdGlvbmFsIG1hcmtlcnMgdG8gUmVnRXhwXHJcbiAgICogbGlrZSAvaW5zZW5zaXRpdmUvaSBhcmUgZHJvcHBlZC5cclxuICAgKi9cclxuICBzdGF0aWMgYW55T2YoLi4uYXJnczogKHN0cmluZyB8IHJlYWRvbmx5IHN0cmluZ1tdIHwgUmVnRXhwKVtdKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGFueU9mQXJyYXkgPSAoYXJyYXk6IHJlYWRvbmx5IChzdHJpbmcgfCBSZWdFeHApW10pOiBzdHJpbmcgPT4ge1xyXG4gICAgICBjb25zdCBbZWxlbV0gPSBhcnJheTtcclxuICAgICAgaWYgKGVsZW0gIT09IHVuZGVmaW5lZCAmJiBhcnJheS5sZW5ndGggPT09IDEpXHJcbiAgICAgICAgcmV0dXJuIGAke2VsZW0gaW5zdGFuY2VvZiBSZWdFeHAgPyBlbGVtLnNvdXJjZSA6IGVsZW19YDtcclxuICAgICAgcmV0dXJuIGAoPzoke2FycmF5Lm1hcCgoZWxlbSkgPT4gZWxlbSBpbnN0YW5jZW9mIFJlZ0V4cCA/IGVsZW0uc291cmNlIDogZWxlbSkuam9pbignfCcpfSlgO1xyXG4gICAgfTtcclxuICAgIGxldCBhcnJheTogcmVhZG9ubHkgKHN0cmluZyB8IFJlZ0V4cClbXSA9IFtdO1xyXG4gICAgY29uc3QgW2ZpcnN0QXJnXSA9IGFyZ3M7XHJcbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgaWYgKHR5cGVvZiBmaXJzdEFyZyA9PT0gJ3N0cmluZycgfHwgZmlyc3RBcmcgaW5zdGFuY2VvZiBSZWdFeHApXHJcbiAgICAgICAgYXJyYXkgPSBbZmlyc3RBcmddO1xyXG4gICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGZpcnN0QXJnKSlcclxuICAgICAgICBhcnJheSA9IGZpcnN0QXJnO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgYXJyYXkgPSBbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFRPRE86IG1vcmUgYWNjdXJhdGUgdHlwZSBpbnN0ZWFkIG9mIGBhc2AgY2FzdFxyXG4gICAgICBhcnJheSA9IGFyZ3MgYXMgcmVhZG9ubHkgc3RyaW5nW107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYW55T2ZBcnJheShhcnJheSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcGFyc2UocmVnZXhwU3RyaW5nOiBSZWdFeHAgfCBzdHJpbmcgfCBDYWN0Ym90QmFzZVJlZ0V4cDwnTm9uZSc+KTogUmVnRXhwIHtcclxuICAgIGNvbnN0IGtDYWN0Ym90Q2F0ZWdvcmllcyA9IHtcclxuICAgICAgVGltZXN0YW1wOiAnXi57MTR9JyxcclxuICAgICAgTmV0VGltZXN0YW1wOiAnLnszM30nLFxyXG4gICAgICBOZXRGaWVsZDogJyg/OltefF0qXFxcXHwpJyxcclxuICAgICAgTG9nVHlwZTogJ1swLTlBLUZhLWZdezJ9JyxcclxuICAgICAgQWJpbGl0eUNvZGU6ICdbMC05QS1GYS1mXXsxLDh9JyxcclxuICAgICAgT2JqZWN0SWQ6ICdbMC05QS1GXXs4fScsXHJcbiAgICAgIC8vIE1hdGNoZXMgYW55IGNoYXJhY3RlciBuYW1lIChpbmNsdWRpbmcgZW1wdHkgc3RyaW5ncyB3aGljaCB0aGUgRkZYSVZcclxuICAgICAgLy8gQUNUIHBsdWdpbiBjYW4gZ2VuZXJhdGUgd2hlbiB1bmtub3duKS5cclxuICAgICAgTmFtZTogJyg/OlteXFxcXHM6fF0rKD86IFteXFxcXHM6fF0rKT98KScsXHJcbiAgICAgIC8vIEZsb2F0cyBjYW4gaGF2ZSBjb21tYSBhcyBzZXBhcmF0b3IgaW4gRkZYSVYgcGx1Z2luIG91dHB1dDogaHR0cHM6Ly9naXRodWIuY29tL3JhdmFobi9GRlhJVl9BQ1RfUGx1Z2luL2lzc3Vlcy8xMzdcclxuICAgICAgRmxvYXQ6ICctP1swLTldKyg/OlsuLF1bMC05XSspPyg/OkUtP1swLTldKyk/JyxcclxuICAgIH07XHJcblxyXG4gICAgLy8gQWxsIHJlZ2V4ZXMgaW4gY2FjdGJvdCBhcmUgY2FzZSBpbnNlbnNpdGl2ZS5cclxuICAgIC8vIFRoaXMgYXZvaWRzIGhlYWRhY2hlcyBhcyB0aGluZ3MgbGlrZSBgVmljZSBhbmQgVmFuaXR5YCB0dXJucyBpbnRvXHJcbiAgICAvLyBgVmljZSBBbmQgVmFuaXR5YCwgZXNwZWNpYWxseSBmb3IgRnJlbmNoIGFuZCBHZXJtYW4uICBJdCBhcHBlYXJzIHRvXHJcbiAgICAvLyBoYXZlIGEgfjIwJSByZWdleCBwYXJzaW5nIG92ZXJoZWFkLCBidXQgYXQgbGVhc3QgdGhleSB3b3JrLlxyXG4gICAgbGV0IG1vZGlmaWVycyA9ICdpJztcclxuICAgIGlmIChyZWdleHBTdHJpbmcgaW5zdGFuY2VvZiBSZWdFeHApIHtcclxuICAgICAgbW9kaWZpZXJzICs9IChyZWdleHBTdHJpbmcuZ2xvYmFsID8gJ2cnIDogJycpICtcclxuICAgICAgICAocmVnZXhwU3RyaW5nLm11bHRpbGluZSA/ICdtJyA6ICcnKTtcclxuICAgICAgcmVnZXhwU3RyaW5nID0gcmVnZXhwU3RyaW5nLnNvdXJjZTtcclxuICAgIH1cclxuICAgIHJlZ2V4cFN0cmluZyA9IHJlZ2V4cFN0cmluZy5yZXBsYWNlKC9cXFxceVxceyguKj8pXFx9L2csIChtYXRjaCwgZ3JvdXApID0+IHtcclxuICAgICAgcmV0dXJuIGtDYWN0Ym90Q2F0ZWdvcmllc1tncm91cCBhcyBrZXlvZiB0eXBlb2Yga0NhY3Rib3RDYXRlZ29yaWVzXSB8fCBtYXRjaDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXhwU3RyaW5nLCBtb2RpZmllcnMpO1xyXG4gIH1cclxuXHJcbiAgLy8gTGlrZSBSZWdleC5SZWdleGVzLnBhcnNlLCBidXQgZm9yY2UgZ2xvYmFsIGZsYWcuXHJcbiAgc3RhdGljIHBhcnNlR2xvYmFsKHJlZ2V4cFN0cmluZzogUmVnRXhwIHwgc3RyaW5nKTogUmVnRXhwIHtcclxuICAgIGNvbnN0IHJlZ2V4ID0gUmVnZXhlcy5wYXJzZShyZWdleHBTdHJpbmcpO1xyXG4gICAgbGV0IG1vZGlmaWVycyA9ICdnaSc7XHJcbiAgICBpZiAocmVnZXhwU3RyaW5nIGluc3RhbmNlb2YgUmVnRXhwKVxyXG4gICAgICBtb2RpZmllcnMgKz0gcmVnZXhwU3RyaW5nLm11bHRpbGluZSA/ICdtJyA6ICcnO1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXguc291cmNlLCBtb2RpZmllcnMpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRydWVJZlVuZGVmaW5lZCh2YWx1ZT86IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiAhIXZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHZhbGlkYXRlUGFyYW1zKFxyXG4gICAgZjogUmVhZG9ubHk8eyBbczogc3RyaW5nXTogdW5rbm93biB9PixcclxuICAgIGZ1bmNOYW1lOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM6IFJlYWRvbmx5PHN0cmluZ1tdPixcclxuICApOiB2b2lkIHtcclxuICAgIGlmIChmID09PSBudWxsKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBpZiAodHlwZW9mIGYgIT09ICdvYmplY3QnKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZik7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICBgJHtmdW5jTmFtZX06IGludmFsaWQgcGFyYW1ldGVyICcke2tleX0nLiAgYCArXHJcbiAgICAgICAgICAgIGBWYWxpZCBwYXJhbXM6ICR7SlNPTi5zdHJpbmdpZnkocGFyYW1zKX1gLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmV0RmllbGRzLCBOZXRGaWVsZHNSZXZlcnNlIH0gZnJvbSAnLi4vdHlwZXMvbmV0X2ZpZWxkcyc7XHJcbmltcG9ydCB7IE5ldFBhcmFtcyB9IGZyb20gJy4uL3R5cGVzL25ldF9wcm9wcyc7XHJcbmltcG9ydCB7IENhY3Rib3RCYXNlUmVnRXhwIH0gZnJvbSAnLi4vdHlwZXMvbmV0X3RyaWdnZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICBsb2dEZWZpbml0aW9uc1ZlcnNpb25zLFxyXG4gIExvZ0RlZmluaXRpb25UeXBlcyxcclxuICBMb2dEZWZpbml0aW9uVmVyc2lvbnMsXHJcbiAgUGFyc2VIZWxwZXJGaWVsZHMsXHJcbiAgUmVwZWF0aW5nRmllbGRzRGVmaW5pdGlvbnMsXHJcbiAgUmVwZWF0aW5nRmllbGRzVHlwZXMsXHJcbn0gZnJvbSAnLi9uZXRsb2dfZGVmcyc7XHJcbmltcG9ydCB7IFVucmVhY2hhYmxlQ29kZSB9IGZyb20gJy4vbm90X3JlYWNoZWQnO1xyXG5pbXBvcnQgUmVnZXhlcyBmcm9tICcuL3JlZ2V4ZXMnO1xyXG5cclxuY29uc3Qgc2VwYXJhdG9yID0gJ1xcXFx8JztcclxuY29uc3QgbWF0Y2hEZWZhdWx0ID0gJ1tefF0qJztcclxuXHJcbi8vIElmIE5ldFJlZ2V4ZXMuc2V0RmxhZ1RyYW5zbGF0aW9uc05lZWRlZCBpcyBzZXQgdG8gdHJ1ZSwgdGhlbiBhbnlcclxuLy8gcmVnZXggY3JlYXRlZCB0aGF0IHJlcXVpcmVzIGEgdHJhbnNsYXRpb24gd2lsbCBiZWdpbiB3aXRoIHRoaXMgc3RyaW5nXHJcbi8vIGFuZCBtYXRjaCB0aGUgbWFnaWNTdHJpbmdSZWdleC4gIFRoaXMgaXMgbWF5YmUgYSBiaXQgZ29vZnksIGJ1dCBpc1xyXG4vLyBhIHByZXR0eSBzdHJhaWdodGZvcndhcmQgd2F5IHRvIG1hcmsgcmVnZXhlcyBmb3IgdHJhbnNsYXRpb25zLlxyXG4vLyBJZiBpc3N1ZSAjMTMwNiBpcyBldmVyIHJlc29sdmVkLCB3ZSBjYW4gcmVtb3ZlIHRoaXMuXHJcbmNvbnN0IG1hZ2ljVHJhbnNsYXRpb25TdHJpbmcgPSBgXl5gO1xyXG5jb25zdCBtYWdpY1N0cmluZ1JlZ2V4ID0gL15cXF5cXF4vO1xyXG5cclxuLy8gY2FuJ3Qgc2ltcGx5IGV4cG9ydCB0aGlzLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9wdWxsLzQ5NTcjZGlzY3Vzc2lvbl9yMTAwMjU5MDU4OVxyXG5jb25zdCBrZXlzVGhhdFJlcXVpcmVUcmFuc2xhdGlvbkFzQ29uc3QgPSBbXHJcbiAgJ2FiaWxpdHknLFxyXG4gICduYW1lJyxcclxuICAnc291cmNlJyxcclxuICAndGFyZ2V0JyxcclxuICAnbGluZScsXHJcbl0gYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBrZXlzVGhhdFJlcXVpcmVUcmFuc2xhdGlvbjogcmVhZG9ubHkgc3RyaW5nW10gPSBrZXlzVGhhdFJlcXVpcmVUcmFuc2xhdGlvbkFzQ29uc3Q7XHJcbmV4cG9ydCB0eXBlIEtleXNUaGF0UmVxdWlyZVRyYW5zbGF0aW9uID0gdHlwZW9mIGtleXNUaGF0UmVxdWlyZVRyYW5zbGF0aW9uQXNDb25zdFtudW1iZXJdO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWVMb2dDb2RlcyA9IHtcclxuICBlY2hvOiAnMDAzOCcsXHJcbiAgZGlhbG9nOiAnMDA0NCcsXHJcbiAgbWVzc2FnZTogJzA4MzknLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLy8gU2VlIGRvY3MvTG9nR3VpZGUubWQgZm9yIG1vcmUgaW5mbyBhYm91dCB0aGVzZSBjYXRlZ29yaWVzXHJcbmV4cG9ydCBjb25zdCBhY3RvckNvbnRyb2xUeXBlID0ge1xyXG4gIHNldEFuaW1TdGF0ZTogJzAwM0UnLFxyXG4gIHB1YmxpY0NvbnRlbnRUZXh0OiAnMDgzNCcsXHJcbiAgbG9nTXNnOiAnMDIwRicsXHJcbiAgbG9nTXNnUGFyYW1zOiAnMDIxMCcsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG5jb25zdCBkZWZhdWx0UGFyYW1zID0gPFxyXG4gIFQgZXh0ZW5kcyBMb2dEZWZpbml0aW9uVHlwZXMsXHJcbiAgViBleHRlbmRzIExvZ0RlZmluaXRpb25WZXJzaW9ucyxcclxuPih0eXBlOiBULCB2ZXJzaW9uOiBWLCBpbmNsdWRlPzogc3RyaW5nW10pOiBQYXJ0aWFsPFBhcnNlSGVscGVyRmllbGRzPFQ+PiA9PiB7XHJcbiAgY29uc3QgbG9nVHlwZSA9IGxvZ0RlZmluaXRpb25zVmVyc2lvbnNbdmVyc2lvbl1bdHlwZV07XHJcbiAgaWYgKGluY2x1ZGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgaW5jbHVkZSA9IE9iamVjdC5rZXlzKGxvZ1R5cGUuZmllbGRzKTtcclxuICAgIGlmICgncmVwZWF0aW5nRmllbGRzJyBpbiBsb2dUeXBlKSB7XHJcbiAgICAgIGluY2x1ZGUucHVzaChsb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5sYWJlbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJhbXM6IHtcclxuICAgIFtpbmRleDogbnVtYmVyXToge1xyXG4gICAgICBmaWVsZDogc3RyaW5nO1xyXG4gICAgICB2YWx1ZT86IHN0cmluZztcclxuICAgICAgb3B0aW9uYWw6IGJvb2xlYW47XHJcbiAgICAgIHJlcGVhdGluZz86IGJvb2xlYW47XHJcbiAgICAgIHJlcGVhdGluZ0tleXM/OiBzdHJpbmdbXTtcclxuICAgICAgc29ydEtleXM/OiBib29sZWFuO1xyXG4gICAgICBwcmltYXJ5S2V5Pzogc3RyaW5nO1xyXG4gICAgICBwb3NzaWJsZUtleXM/OiBzdHJpbmdbXTtcclxuICAgIH07XHJcbiAgfSA9IHt9O1xyXG4gIGNvbnN0IGZpcnN0T3B0aW9uYWxGaWVsZCA9IGxvZ1R5cGUuZmlyc3RPcHRpb25hbEZpZWxkO1xyXG5cclxuICBmb3IgKGNvbnN0IFtwcm9wLCBpbmRleF0gb2YgT2JqZWN0LmVudHJpZXMobG9nVHlwZS5maWVsZHMpKSB7XHJcbiAgICBpZiAoIWluY2x1ZGUuaW5jbHVkZXMocHJvcCkpXHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgY29uc3QgcGFyYW06IHsgZmllbGQ6IHN0cmluZzsgdmFsdWU/OiBzdHJpbmc7IG9wdGlvbmFsOiBib29sZWFuOyByZXBlYXRpbmc/OiBib29sZWFuIH0gPSB7XHJcbiAgICAgIGZpZWxkOiBwcm9wLFxyXG4gICAgICBvcHRpb25hbDogZmlyc3RPcHRpb25hbEZpZWxkICE9PSB1bmRlZmluZWQgJiYgaW5kZXggPj0gZmlyc3RPcHRpb25hbEZpZWxkLFxyXG4gICAgfTtcclxuICAgIGlmIChwcm9wID09PSAndHlwZScpXHJcbiAgICAgIHBhcmFtLnZhbHVlID0gbG9nVHlwZS50eXBlO1xyXG5cclxuICAgIHBhcmFtc1tpbmRleF0gPSBwYXJhbTtcclxuICB9XHJcblxyXG4gIGlmICgncmVwZWF0aW5nRmllbGRzJyBpbiBsb2dUeXBlICYmIGluY2x1ZGUuaW5jbHVkZXMobG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMubGFiZWwpKSB7XHJcbiAgICBwYXJhbXNbbG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMuc3RhcnRpbmdJbmRleF0gPSB7XHJcbiAgICAgIGZpZWxkOiBsb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5sYWJlbCxcclxuICAgICAgb3B0aW9uYWw6IGZpcnN0T3B0aW9uYWxGaWVsZCAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgbG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMuc3RhcnRpbmdJbmRleCA+PSBmaXJzdE9wdGlvbmFsRmllbGQsXHJcbiAgICAgIHJlcGVhdGluZzogdHJ1ZSxcclxuICAgICAgcmVwZWF0aW5nS2V5czogWy4uLmxvZ1R5cGUucmVwZWF0aW5nRmllbGRzLm5hbWVzXSxcclxuICAgICAgc29ydEtleXM6IGxvZ1R5cGUucmVwZWF0aW5nRmllbGRzLnNvcnRLZXlzLFxyXG4gICAgICBwcmltYXJ5S2V5OiBsb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5wcmltYXJ5S2V5LFxyXG4gICAgICBwb3NzaWJsZUtleXM6IFsuLi5sb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5wb3NzaWJsZUtleXNdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBwYXJhbXMgYXMgUGFydGlhbDxQYXJzZUhlbHBlckZpZWxkczxUPj47XHJcbn07XHJcblxyXG50eXBlIFJlcGVhdGluZ0ZpZWxkc01hcDxcclxuICBUQmFzZSBleHRlbmRzIExvZ0RlZmluaXRpb25UeXBlcyxcclxuICBUS2V5IGV4dGVuZHMgUmVwZWF0aW5nRmllbGRzVHlwZXMgPSBUQmFzZSBleHRlbmRzIFJlcGVhdGluZ0ZpZWxkc1R5cGVzID8gVEJhc2UgOiBuZXZlcixcclxuPiA9IHtcclxuICBbbmFtZSBpbiBSZXBlYXRpbmdGaWVsZHNEZWZpbml0aW9uc1tUS2V5XVsncmVwZWF0aW5nRmllbGRzJ11bJ25hbWVzJ11bbnVtYmVyXV06XHJcbiAgICB8IHN0cmluZ1xyXG4gICAgfCBzdHJpbmdbXTtcclxufVtdO1xyXG5cclxudHlwZSBSZXBlYXRpbmdGaWVsZHNNYXBUeXBlQ2hlY2s8XHJcbiAgVEJhc2UgZXh0ZW5kcyBMb2dEZWZpbml0aW9uVHlwZXMsXHJcbiAgRiBleHRlbmRzIGtleW9mIE5ldEZpZWxkc1tUQmFzZV0sXHJcbiAgVEtleSBleHRlbmRzIFJlcGVhdGluZ0ZpZWxkc1R5cGVzID0gVEJhc2UgZXh0ZW5kcyBSZXBlYXRpbmdGaWVsZHNUeXBlcyA/IFRCYXNlIDogbmV2ZXIsXHJcbj4gPSBGIGV4dGVuZHMgUmVwZWF0aW5nRmllbGRzRGVmaW5pdGlvbnNbVEtleV1bJ3JlcGVhdGluZ0ZpZWxkcyddWydsYWJlbCddXHJcbiAgPyBSZXBlYXRpbmdGaWVsZHNNYXA8VEtleT4gOlxyXG4gIG5ldmVyO1xyXG5cclxudHlwZSBSZXBlYXRpbmdGaWVsZHNNYXBUeXBlPFxyXG4gIFQgZXh0ZW5kcyBMb2dEZWZpbml0aW9uVHlwZXMsXHJcbiAgRiBleHRlbmRzIGtleW9mIE5ldEZpZWxkc1tUXSxcclxuPiA9IFQgZXh0ZW5kcyBSZXBlYXRpbmdGaWVsZHNUeXBlcyA/IFJlcGVhdGluZ0ZpZWxkc01hcFR5cGVDaGVjazxULCBGPlxyXG4gIDogbmV2ZXI7XHJcblxyXG50eXBlIFBhcnNlSGVscGVyVHlwZTxUIGV4dGVuZHMgTG9nRGVmaW5pdGlvblR5cGVzPiA9XHJcbiAgJiB7XHJcbiAgICBbZmllbGQgaW4ga2V5b2YgTmV0RmllbGRzW1RdXT86IHN0cmluZyB8IHJlYWRvbmx5IHN0cmluZ1tdIHwgUmVwZWF0aW5nRmllbGRzTWFwVHlwZTxULCBmaWVsZD47XHJcbiAgfVxyXG4gICYgeyBjYXB0dXJlPzogYm9vbGVhbiB9O1xyXG5cclxuY29uc3QgaXNSZXBlYXRpbmdGaWVsZCA9IDxcclxuICBUIGV4dGVuZHMgTG9nRGVmaW5pdGlvblR5cGVzLFxyXG4+KFxyXG4gIHJlcGVhdGluZzogYm9vbGVhbiB8IHVuZGVmaW5lZCxcclxuICB2YWx1ZTogc3RyaW5nIHwgcmVhZG9ubHkgc3RyaW5nW10gfCBSZXBlYXRpbmdGaWVsZHNNYXA8VD4gfCB1bmRlZmluZWQsXHJcbik6IHZhbHVlIGlzIFJlcGVhdGluZ0ZpZWxkc01hcDxUPiA9PiB7XHJcbiAgaWYgKHJlcGVhdGluZyAhPT0gdHJ1ZSlcclxuICAgIHJldHVybiBmYWxzZTtcclxuICAvLyBBbGxvdyBleGNsdWRpbmcgdGhlIGZpZWxkIHRvIG1hdGNoIGZvciBleHRyYWN0aW9uXHJcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIGZvciAoY29uc3QgZSBvZiB2YWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBlICE9PSAnb2JqZWN0JylcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbmNvbnN0IHBhcnNlSGVscGVyID0gPFQgZXh0ZW5kcyBMb2dEZWZpbml0aW9uVHlwZXM+KFxyXG4gIHBhcmFtczogUGFyc2VIZWxwZXJUeXBlPFQ+IHwgdW5kZWZpbmVkLFxyXG4gIGZ1bmNOYW1lOiBzdHJpbmcsXHJcbiAgZmllbGRzOiBQYXJ0aWFsPFBhcnNlSGVscGVyRmllbGRzPFQ+PixcclxuKTogQ2FjdGJvdEJhc2VSZWdFeHA8VD4gPT4ge1xyXG4gIHBhcmFtcyA9IHBhcmFtcyA/PyB7fTtcclxuICBjb25zdCB2YWxpZEZpZWxkczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgZm9yIChjb25zdCBpbmRleCBpbiBmaWVsZHMpIHtcclxuICAgIGNvbnN0IGZpZWxkID0gZmllbGRzW2luZGV4XTtcclxuICAgIGlmIChmaWVsZClcclxuICAgICAgdmFsaWRGaWVsZHMucHVzaChmaWVsZC5maWVsZCk7XHJcbiAgfVxyXG5cclxuICBSZWdleGVzLnZhbGlkYXRlUGFyYW1zKHBhcmFtcywgZnVuY05hbWUsIFsnY2FwdHVyZScsIC4uLnZhbGlkRmllbGRzXSk7XHJcblxyXG4gIC8vIEZpbmQgdGhlIGxhc3Qga2V5IHdlIGNhcmUgYWJvdXQsIHNvIHdlIGNhbiBzaG9ydGVuIHRoZSByZWdleCBpZiBuZWVkZWQuXHJcbiAgY29uc3QgY2FwdHVyZSA9IFJlZ2V4ZXMudHJ1ZUlmVW5kZWZpbmVkKHBhcmFtcy5jYXB0dXJlKTtcclxuICBjb25zdCBmaWVsZEtleXMgPSBPYmplY3Qua2V5cyhmaWVsZHMpLnNvcnQoKGEsIGIpID0+IHBhcnNlSW50KGEpIC0gcGFyc2VJbnQoYikpO1xyXG4gIGxldCBtYXhLZXlTdHI6IHN0cmluZztcclxuICBpZiAoY2FwdHVyZSkge1xyXG4gICAgY29uc3Qga2V5czogRXh0cmFjdDxrZXlvZiBOZXRGaWVsZHNSZXZlcnNlW1RdLCBzdHJpbmc+W10gPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGZpZWxkcylcclxuICAgICAga2V5cy5wdXNoKGtleSk7XHJcbiAgICBsZXQgdG1wS2V5ID0ga2V5cy5wb3AoKTtcclxuICAgIGlmICh0bXBLZXkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBtYXhLZXlTdHIgPSBmaWVsZEtleXNbZmllbGRLZXlzLmxlbmd0aCAtIDFdID8/ICcwJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdoaWxlIChcclxuICAgICAgICBmaWVsZHNbdG1wS2V5XT8ub3B0aW9uYWwgJiZcclxuICAgICAgICAhKChmaWVsZHNbdG1wS2V5XT8uZmllbGQgPz8gJycpIGluIHBhcmFtcylcclxuICAgICAgKVxyXG4gICAgICAgIHRtcEtleSA9IGtleXMucG9wKCk7XHJcbiAgICAgIG1heEtleVN0ciA9IHRtcEtleSA/PyAnMCc7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIG1heEtleVN0ciA9ICcwJztcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGZpZWxkcykge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGZpZWxkc1trZXldID8/IHt9O1xyXG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JylcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgY29uc3QgZmllbGROYW1lID0gZmllbGRzW2tleV0/LmZpZWxkO1xyXG4gICAgICBpZiAoZmllbGROYW1lICE9PSB1bmRlZmluZWQgJiYgZmllbGROYW1lIGluIHBhcmFtcylcclxuICAgICAgICBtYXhLZXlTdHIgPSBrZXk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IG1heEtleSA9IHBhcnNlSW50KG1heEtleVN0cik7XHJcblxyXG4gIC8vIEZvciB0ZXN0aW5nLCBpdCdzIHVzZWZ1bCB0byBrbm93IGlmIHRoaXMgaXMgYSByZWdleCB0aGF0IHJlcXVpcmVzXHJcbiAgLy8gdHJhbnNsYXRpb24uICBXZSB0ZXN0IHRoaXMgYnkgc2VlaW5nIGlmIHRoZXJlIGFyZSBhbnkgc3BlY2lmaWVkXHJcbiAgLy8gZmllbGRzLCBhbmQgaWYgc28sIGluc2VydGluZyBhIG1hZ2ljIHN0cmluZyB0aGF0IHdlIGNhbiBkZXRlY3QuXHJcbiAgLy8gVGhpcyBsZXRzIHVzIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBcInJlZ2V4IHRoYXQgc2hvdWxkIGJlIHRyYW5zbGF0ZWRcIlxyXG4gIC8vIGUuZy4gYSByZWdleCB3aXRoIGB0YXJnZXRgIHNwZWNpZmllZCwgYW5kIFwicmVnZXggdGhhdCBzaG91bGRuJ3RcIlxyXG4gIC8vIGUuZy4gYSBnYWlucyBlZmZlY3Qgd2l0aCBqdXN0IGVmZmVjdElkIHNwZWNpZmllZC5cclxuICBjb25zdCB0cmFuc1BhcmFtcyA9IE9iamVjdC5rZXlzKHBhcmFtcykuZmlsdGVyKChrKSA9PiBrZXlzVGhhdFJlcXVpcmVUcmFuc2xhdGlvbi5pbmNsdWRlcyhrKSk7XHJcbiAgY29uc3QgbmVlZHNUcmFuc2xhdGlvbnMgPSBOZXRSZWdleGVzLmZsYWdUcmFuc2xhdGlvbnNOZWVkZWQgJiYgdHJhbnNQYXJhbXMubGVuZ3RoID4gMDtcclxuXHJcbiAgLy8gQnVpbGQgdGhlIHJlZ2V4IGZyb20gdGhlIGZpZWxkcy5cclxuICBsZXQgc3RyID0gbmVlZHNUcmFuc2xhdGlvbnMgPyBtYWdpY1RyYW5zbGF0aW9uU3RyaW5nIDogJ14nO1xyXG4gIGxldCBsYXN0S2V5ID0gLTE7XHJcbiAgZm9yIChjb25zdCBrZXlTdHIgaW4gZmllbGRzKSB7XHJcbiAgICBjb25zdCBrZXkgPSBwYXJzZUludChrZXlTdHIpO1xyXG4gICAgLy8gRmlsbCBpbiBibGFua3MuXHJcbiAgICBjb25zdCBtaXNzaW5nRmllbGRzID0ga2V5IC0gbGFzdEtleSAtIDE7XHJcbiAgICBpZiAobWlzc2luZ0ZpZWxkcyA9PT0gMSlcclxuICAgICAgc3RyICs9ICdcXFxceXtOZXRGaWVsZH0nO1xyXG4gICAgZWxzZSBpZiAobWlzc2luZ0ZpZWxkcyA+IDEpXHJcbiAgICAgIHN0ciArPSBgXFxcXHl7TmV0RmllbGR9eyR7bWlzc2luZ0ZpZWxkc319YDtcclxuICAgIGxhc3RLZXkgPSBrZXk7XHJcblxyXG4gICAgY29uc3QgdmFsdWUgPSBmaWVsZHNba2V5U3RyXTtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZnVuY05hbWV9OiBpbnZhbGlkIHZhbHVlOiAke0pTT04uc3RyaW5naWZ5KHZhbHVlKX1gKTtcclxuXHJcbiAgICBjb25zdCBmaWVsZE5hbWUgPSB2YWx1ZS5maWVsZDtcclxuICAgIGNvbnN0IGRlZmF1bHRGaWVsZFZhbHVlID0gdmFsdWUudmFsdWU/LnRvU3RyaW5nKCkgPz8gbWF0Y2hEZWZhdWx0O1xyXG4gICAgY29uc3QgZmllbGRWYWx1ZSA9IHBhcmFtc1tmaWVsZE5hbWVdO1xyXG5cclxuICAgIGlmIChpc1JlcGVhdGluZ0ZpZWxkKGZpZWxkc1trZXlTdHJdPy5yZXBlYXRpbmcsIGZpZWxkVmFsdWUpKSB7XHJcbiAgICAgIGxldCByZXBlYXRpbmdBcnJheTogUmVwZWF0aW5nRmllbGRzTWFwPFQ+IHwgdW5kZWZpbmVkID0gZmllbGRWYWx1ZTtcclxuXHJcbiAgICAgIGNvbnN0IHNvcnRLZXlzID0gZmllbGRzW2tleVN0cl0/LnNvcnRLZXlzO1xyXG4gICAgICBjb25zdCBwcmltYXJ5S2V5ID0gZmllbGRzW2tleVN0cl0/LnByaW1hcnlLZXk7XHJcbiAgICAgIGNvbnN0IHBvc3NpYmxlS2V5cyA9IGZpZWxkc1trZXlTdHJdPy5wb3NzaWJsZUtleXM7XHJcblxyXG4gICAgICAvLyBwcmltYXJ5S2V5IGlzIHJlcXVpcmVkIGlmIHRoaXMgaXMgYSByZXBlYXRpbmcgZmllbGQgcGVyIHR5cGVkZWYgaW4gbmV0bG9nX2RlZnMudHNcclxuICAgICAgLy8gU2FtZSB3aXRoIHBvc3NpYmxlS2V5c1xyXG4gICAgICBpZiAocHJpbWFyeUtleSA9PT0gdW5kZWZpbmVkIHx8IHBvc3NpYmxlS2V5cyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNvZGUoKTtcclxuXHJcbiAgICAgIC8vIEFsbG93IHNvcnRpbmcgaWYgbmVlZGVkXHJcbiAgICAgIGlmIChzb3J0S2V5cykge1xyXG4gICAgICAgIC8vIEFsc28gc29ydCBvdXIgdmFsaWQga2V5cyBsaXN0XHJcbiAgICAgICAgcG9zc2libGVLZXlzLnNvcnQoKGxlZnQsIHJpZ2h0KSA9PiBsZWZ0LnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShyaWdodC50b0xvd2VyQ2FzZSgpKSk7XHJcbiAgICAgICAgaWYgKHJlcGVhdGluZ0FycmF5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJlcGVhdGluZ0FycmF5ID0gWy4uLnJlcGVhdGluZ0FycmF5XS5zb3J0KFxyXG4gICAgICAgICAgICAobGVmdDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sIHJpZ2h0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IG51bWJlciA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gV2UgY2hlY2sgdGhlIHZhbGlkaXR5IG9mIGxlZnQvcmlnaHQgYmVjYXVzZSB0aGV5J3JlIHVzZXItc3VwcGxpZWRcclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGxlZnQgIT09ICdvYmplY3QnIHx8IGxlZnRbcHJpbWFyeUtleV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIGFyZ3VtZW50IHBhc3NlZCB0byB0cmlnZ2VyOicsIGxlZnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNvbnN0IGxlZnRWYWx1ZSA9IGxlZnRbcHJpbWFyeUtleV07XHJcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsZWZ0VmFsdWUgIT09ICdzdHJpbmcnIHx8ICFwb3NzaWJsZUtleXM/LmluY2x1ZGVzKGxlZnRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBhcmd1bWVudCBwYXNzZWQgdG8gdHJpZ2dlcjonLCBsZWZ0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHJpZ2h0ICE9PSAnb2JqZWN0JyB8fCByaWdodFtwcmltYXJ5S2V5XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgYXJndW1lbnQgcGFzc2VkIHRvIHRyaWdnZXI6JywgcmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNvbnN0IHJpZ2h0VmFsdWUgPSByaWdodFtwcmltYXJ5S2V5XTtcclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHJpZ2h0VmFsdWUgIT09ICdzdHJpbmcnIHx8ICFwb3NzaWJsZUtleXM/LmluY2x1ZGVzKHJpZ2h0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgYXJndW1lbnQgcGFzc2VkIHRvIHRyaWdnZXI6JywgcmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiBsZWZ0VmFsdWUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKHJpZ2h0VmFsdWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgYW5vblJlcHM6IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH1bXSB8IHVuZGVmaW5lZCA9IHJlcGVhdGluZ0FycmF5O1xyXG4gICAgICAvLyBMb29wIG92ZXIgb3VyIHBvc3NpYmxlIGtleXNcclxuICAgICAgLy8gQnVpbGQgYSByZWdleCB0aGF0IGNhbiBtYXRjaCBhbnkgcG9zc2libGUga2V5IHdpdGggcmVxdWlyZWQgdmFsdWVzIHN1YnN0aXR1dGVkIGluXHJcbiAgICAgIHBvc3NpYmxlS2V5cy5mb3JFYWNoKChwb3NzaWJsZUtleSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcCA9IGFub25SZXBzPy5maW5kKChyZXApID0+IHByaW1hcnlLZXkgaW4gcmVwICYmIHJlcFtwcmltYXJ5S2V5XSA9PT0gcG9zc2libGVLZXkpO1xyXG5cclxuICAgICAgICBsZXQgZmllbGRSZWdleCA9ICcnO1xyXG4gICAgICAgIC8vIFJhdGhlciB0aGFuIGxvb3Bpbmcgb3ZlciB0aGUga2V5cyBkZWZpbmVkIG9uIHRoZSBvYmplY3QsXHJcbiAgICAgICAgLy8gbG9vcCBvdmVyIHRoZSBiYXNlIHR5cGUgZGVmJ3Mga2V5cy4gVGhpcyBlbmZvcmNlcyB0aGUgY29ycmVjdCBvcmRlci5cclxuICAgICAgICBmaWVsZHNba2V5U3RyXT8ucmVwZWF0aW5nS2V5cz8uZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICBsZXQgdmFsID0gcmVwPy5ba2V5XTtcclxuICAgICAgICAgIGlmIChyZXAgPT09IHVuZGVmaW5lZCB8fCAhKGtleSBpbiByZXApKSB7XHJcbiAgICAgICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSB2YWx1ZSBmb3IgdGhpcyBrZXlcclxuICAgICAgICAgICAgLy8gaW5zZXJ0IGEgcGxhY2Vob2xkZXIsIHVubGVzcyBpdCdzIHRoZSBwcmltYXJ5IGtleVxyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSBwcmltYXJ5S2V5KVxyXG4gICAgICAgICAgICAgIHZhbCA9IHBvc3NpYmxlS2V5O1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgdmFsID0gbWF0Y2hEZWZhdWx0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgICAgICAgIHZhbCA9IG1hdGNoRGVmYXVsdDtcclxuICAgICAgICAgICAgZWxzZSBpZiAodmFsLmxlbmd0aCA8IDEpXHJcbiAgICAgICAgICAgICAgdmFsID0gbWF0Y2hEZWZhdWx0O1xyXG4gICAgICAgICAgICBlbHNlIGlmICh2YWwuc29tZSgodikgPT4gdHlwZW9mIHYgIT09ICdzdHJpbmcnKSlcclxuICAgICAgICAgICAgICB2YWwgPSBtYXRjaERlZmF1bHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmaWVsZFJlZ2V4ICs9IFJlZ2V4ZXMubWF5YmVDYXB0dXJlKFxyXG4gICAgICAgICAgICBrZXkgPT09IHByaW1hcnlLZXkgPyBmYWxzZSA6IGNhcHR1cmUsXHJcbiAgICAgICAgICAgIC8vIEFsbCBjYXB0dXJpbmcgZ3JvdXBzIGFyZSBgZmllbGROYW1lYCArIGBwb3NzaWJsZUtleWAsIGUuZy4gYHBhaXJJc0Nhc3RpbmcxYFxyXG4gICAgICAgICAgICBmaWVsZE5hbWUgKyBwb3NzaWJsZUtleSxcclxuICAgICAgICAgICAgdmFsLFxyXG4gICAgICAgICAgICBkZWZhdWx0RmllbGRWYWx1ZSxcclxuICAgICAgICAgICkgK1xyXG4gICAgICAgICAgICBzZXBhcmF0b3I7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChmaWVsZFJlZ2V4Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHN0ciArPSBgKD86JHtmaWVsZFJlZ2V4fSkke3JlcCAhPT0gdW5kZWZpbmVkID8gJycgOiAnPyd9YDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChmaWVsZHNba2V5U3RyXT8ucmVwZWF0aW5nKSB7XHJcbiAgICAgIC8vIElmIHRoaXMgaXMgYSByZXBlYXRpbmcgZmllbGQgYnV0IHRoZSBhY3R1YWwgdmFsdWUgaXMgZW1wdHkgb3Igb3RoZXJ3aXNlIGludmFsaWQsXHJcbiAgICAgIC8vIGRvbid0IHByb2Nlc3MgZnVydGhlci4gV2UgY2FuJ3QgdXNlIGBjb250aW51ZWAgaW4gdGhlIGFib3ZlIGJsb2NrIGJlY2F1c2UgdGhhdFxyXG4gICAgICAvLyB3b3VsZCBza2lwIHRoZSBlYXJseS1vdXQgYnJlYWsgYXQgdGhlIGVuZCBvZiB0aGUgbG9vcC5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChmaWVsZE5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHN0ciArPSBSZWdleGVzLm1heWJlQ2FwdHVyZShcclxuICAgICAgICAgIC8vIG1vcmUgYWNjdXJhdGUgdHlwZSBpbnN0ZWFkIG9mIGBhc2AgY2FzdFxyXG4gICAgICAgICAgLy8gbWF5YmUgdGhpcyBmdW5jdGlvbiBuZWVkcyBhIHJlZmFjdG9yaW5nXHJcbiAgICAgICAgICBjYXB0dXJlLFxyXG4gICAgICAgICAgZmllbGROYW1lLFxyXG4gICAgICAgICAgZmllbGRWYWx1ZSxcclxuICAgICAgICAgIGRlZmF1bHRGaWVsZFZhbHVlLFxyXG4gICAgICAgICkgK1xyXG4gICAgICAgICAgc2VwYXJhdG9yO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0ciArPSBkZWZhdWx0RmllbGRWYWx1ZSArIHNlcGFyYXRvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFN0b3AgaWYgd2UncmUgbm90IGNhcHR1cmluZyBhbmQgZG9uJ3QgY2FyZSBhYm91dCBmdXR1cmUgZmllbGRzLlxyXG4gICAgaWYgKGtleSA+PSBtYXhLZXkpXHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuICByZXR1cm4gUmVnZXhlcy5wYXJzZShzdHIpIGFzIENhY3Rib3RCYXNlUmVnRXhwPFQ+O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGJ1aWxkUmVnZXggPSA8VCBleHRlbmRzIGtleW9mIE5ldFBhcmFtcz4oXHJcbiAgdHlwZTogVCxcclxuICBwYXJhbXM/OiBQYXJzZUhlbHBlclR5cGU8VD4sXHJcbik6IENhY3Rib3RCYXNlUmVnRXhwPFQ+ID0+IHtcclxuICByZXR1cm4gcGFyc2VIZWxwZXIocGFyYW1zLCB0eXBlLCBkZWZhdWx0UGFyYW1zKHR5cGUsIE5ldFJlZ2V4ZXMubG9nVmVyc2lvbikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0UmVnZXhlcyB7XHJcbiAgc3RhdGljIGxvZ1ZlcnNpb246IExvZ0RlZmluaXRpb25WZXJzaW9ucyA9ICdsYXRlc3QnO1xyXG5cclxuICBzdGF0aWMgZmxhZ1RyYW5zbGF0aW9uc05lZWRlZCA9IGZhbHNlO1xyXG4gIHN0YXRpYyBzZXRGbGFnVHJhbnNsYXRpb25zTmVlZGVkKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBOZXRSZWdleGVzLmZsYWdUcmFuc2xhdGlvbnNOZWVkZWQgPSB2YWx1ZTtcclxuICB9XHJcbiAgc3RhdGljIGRvZXNOZXRSZWdleE5lZWRUcmFuc2xhdGlvbihyZWdleDogUmVnRXhwIHwgc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAvLyBOZWVkIHRvIGBzZXRGbGFnVHJhbnNsYXRpb25zTmVlZGVkYCBiZWZvcmUgY2FsbGluZyB0aGlzIGZ1bmN0aW9uLlxyXG4gICAgY29uc29sZS5hc3NlcnQoTmV0UmVnZXhlcy5mbGFnVHJhbnNsYXRpb25zTmVlZGVkKTtcclxuICAgIGNvbnN0IHN0ciA9IHR5cGVvZiByZWdleCA9PT0gJ3N0cmluZycgPyByZWdleCA6IHJlZ2V4LnNvdXJjZTtcclxuICAgIHJldHVybiAhIW1hZ2ljU3RyaW5nUmVnZXguZXhlYyhzdHIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTIwLTB4MTQtbmV0d29ya3N0YXJ0c2Nhc3RpbmdcclxuICAgKi9cclxuICBzdGF0aWMgc3RhcnRzVXNpbmcocGFyYW1zPzogTmV0UGFyYW1zWydTdGFydHNVc2luZyddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J1N0YXJ0c1VzaW5nJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ1N0YXJ0c1VzaW5nJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yMS0weDE1LW5ldHdvcmthYmlsaXR5XHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTIyLTB4MTYtbmV0d29ya2FvZWFiaWxpdHlcclxuICAgKi9cclxuICBzdGF0aWMgYWJpbGl0eShwYXJhbXM/OiBOZXRQYXJhbXNbJ0FiaWxpdHknXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdBYmlsaXR5Jz4ge1xyXG4gICAgcmV0dXJuIHBhcnNlSGVscGVyKHBhcmFtcywgJ0FiaWxpdHknLCB7XHJcbiAgICAgIC4uLmRlZmF1bHRQYXJhbXMoJ0FiaWxpdHknLCBOZXRSZWdleGVzLmxvZ1ZlcnNpb24pLFxyXG4gICAgICAvLyBPdmVycmlkZSB0eXBlXHJcbiAgICAgIDA6IHsgZmllbGQ6ICd0eXBlJywgdmFsdWU6ICcyWzEyXScsIG9wdGlvbmFsOiBmYWxzZSB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjEtMHgxNS1uZXR3b3JrYWJpbGl0eVxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yMi0weDE2LW5ldHdvcmthb2VhYmlsaXR5XHJcbiAgICpcclxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYGFiaWxpdHlgIGluc3RlYWRcclxuICAgKi9cclxuICBzdGF0aWMgYWJpbGl0eUZ1bGwocGFyYW1zPzogTmV0UGFyYW1zWydBYmlsaXR5J10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWJpbGl0eSc+IHtcclxuICAgIHJldHVybiB0aGlzLmFiaWxpdHkocGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNy0weDFiLW5ldHdvcmt0YXJnZXRpY29uLWhlYWQtbWFya2VyXHJcbiAgICovXHJcbiAgc3RhdGljIGhlYWRNYXJrZXIocGFyYW1zPzogTmV0UGFyYW1zWydIZWFkTWFya2VyJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnSGVhZE1hcmtlcic+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdIZWFkTWFya2VyJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0wMy0weDAzLWFkZGNvbWJhdGFudFxyXG4gICAqL1xyXG4gIHN0YXRpYyBhZGRlZENvbWJhdGFudChwYXJhbXM/OiBOZXRQYXJhbXNbJ0FkZGVkQ29tYmF0YW50J10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWRkZWRDb21iYXRhbnQnPiB7XHJcbiAgICByZXR1cm4gcGFyc2VIZWxwZXIoXHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgJ0FkZGVkQ29tYmF0YW50JyxcclxuICAgICAgZGVmYXVsdFBhcmFtcygnQWRkZWRDb21iYXRhbnQnLCBOZXRSZWdleGVzLmxvZ1ZlcnNpb24pLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0wMy0weDAzLWFkZGNvbWJhdGFudFxyXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgYWRkZWRDb21iYXRhbnRgIGluc3RlYWRcclxuICAgKi9cclxuICBzdGF0aWMgYWRkZWRDb21iYXRhbnRGdWxsKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydBZGRlZENvbWJhdGFudCddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdBZGRlZENvbWJhdGFudCc+IHtcclxuICAgIHJldHVybiBOZXRSZWdleGVzLmFkZGVkQ29tYmF0YW50KHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMDQtMHgwNC1yZW1vdmVjb21iYXRhbnRcclxuICAgKi9cclxuICBzdGF0aWMgcmVtb3ZpbmdDb21iYXRhbnQoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ1JlbW92ZWRDb21iYXRhbnQnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnUmVtb3ZlZENvbWJhdGFudCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdSZW1vdmVkQ29tYmF0YW50JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNi0weDFhLW5ldHdvcmtidWZmXHJcbiAgICovXHJcbiAgc3RhdGljIGdhaW5zRWZmZWN0KHBhcmFtcz86IE5ldFBhcmFtc1snR2FpbnNFZmZlY3QnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdHYWluc0VmZmVjdCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdHYWluc0VmZmVjdCcsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcmVmZXIgZ2FpbnNFZmZlY3Qgb3ZlciB0aGlzIGZ1bmN0aW9uIHVubGVzcyB5b3UgcmVhbGx5IG5lZWQgZXh0cmEgZGF0YS5cclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMzgtMHgyNi1uZXR3b3Jrc3RhdHVzZWZmZWN0c1xyXG4gICAqL1xyXG4gIHN0YXRpYyBzdGF0dXNFZmZlY3RFeHBsaWNpdChcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snU3RhdHVzRWZmZWN0J10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J1N0YXR1c0VmZmVjdCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdTdGF0dXNFZmZlY3QnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTMwLTB4MWUtbmV0d29ya2J1ZmZyZW1vdmVcclxuICAgKi9cclxuICBzdGF0aWMgbG9zZXNFZmZlY3QocGFyYW1zPzogTmV0UGFyYW1zWydMb3Nlc0VmZmVjdCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0xvc2VzRWZmZWN0Jz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0xvc2VzRWZmZWN0JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0zNS0weDIzLW5ldHdvcmt0ZXRoZXJcclxuICAgKi9cclxuICBzdGF0aWMgdGV0aGVyKHBhcmFtcz86IE5ldFBhcmFtc1snVGV0aGVyJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnVGV0aGVyJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ1RldGhlcicsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAndGFyZ2V0JyB3YXMgZGVmZWF0ZWQgYnkgJ3NvdXJjZSdcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjUtMHgxOS1uZXR3b3JrZGVhdGhcclxuICAgKi9cclxuICBzdGF0aWMgd2FzRGVmZWF0ZWQocGFyYW1zPzogTmV0UGFyYW1zWydXYXNEZWZlYXRlZCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J1dhc0RlZmVhdGVkJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ1dhc0RlZmVhdGVkJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNC0weDE4LW5ldHdvcmtkb3RcclxuICAgKi9cclxuICBzdGF0aWMgbmV0d29ya0RvVChwYXJhbXM/OiBOZXRQYXJhbXNbJ05ldHdvcmtEb1QnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdOZXR3b3JrRG9UJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ05ldHdvcmtEb1QnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTAwLTB4MDAtbG9nbGluZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBlY2hvKHBhcmFtcz86IE9taXQ8TmV0UGFyYW1zWydHYW1lTG9nJ10sICdjb2RlJz4pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnR2FtZUxvZyc+IHtcclxuICAgIGlmICh0eXBlb2YgcGFyYW1zID09PSAndW5kZWZpbmVkJylcclxuICAgICAgcGFyYW1zID0ge307XHJcbiAgICBSZWdleGVzLnZhbGlkYXRlUGFyYW1zKFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICAgICdFY2hvJyxcclxuICAgICAgWyd0eXBlJywgJ3RpbWVzdGFtcCcsICdjb2RlJywgJ25hbWUnLCAnbGluZScsICdjYXB0dXJlJ10sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBOZXRSZWdleGVzLmdhbWVMb2coeyAuLi5wYXJhbXMsIGNvZGU6IGdhbWVMb2dDb2Rlcy5lY2hvIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTAwLTB4MDAtbG9nbGluZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBkaWFsb2cocGFyYW1zPzogT21pdDxOZXRQYXJhbXNbJ0dhbWVMb2cnXSwgJ2NvZGUnPik6IENhY3Rib3RCYXNlUmVnRXhwPCdHYW1lTG9nJz4ge1xyXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICBwYXJhbXMgPSB7fTtcclxuICAgIFJlZ2V4ZXMudmFsaWRhdGVQYXJhbXMoXHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgJ0RpYWxvZycsXHJcbiAgICAgIFsndHlwZScsICd0aW1lc3RhbXAnLCAnY29kZScsICduYW1lJywgJ2xpbmUnLCAnY2FwdHVyZSddLFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gTmV0UmVnZXhlcy5nYW1lTG9nKHsgLi4ucGFyYW1zLCBjb2RlOiBnYW1lTG9nQ29kZXMuZGlhbG9nIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTAwLTB4MDAtbG9nbGluZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBtZXNzYWdlKHBhcmFtcz86IE9taXQ8TmV0UGFyYW1zWydHYW1lTG9nJ10sICdjb2RlJz4pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnR2FtZUxvZyc+IHtcclxuICAgIGlmICh0eXBlb2YgcGFyYW1zID09PSAndW5kZWZpbmVkJylcclxuICAgICAgcGFyYW1zID0ge307XHJcbiAgICBSZWdleGVzLnZhbGlkYXRlUGFyYW1zKFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICAgICdNZXNzYWdlJyxcclxuICAgICAgWyd0eXBlJywgJ3RpbWVzdGFtcCcsICdjb2RlJywgJ25hbWUnLCAnbGluZScsICdjYXB0dXJlJ10sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBOZXRSZWdleGVzLmdhbWVMb2coeyAuLi5wYXJhbXMsIGNvZGU6IGdhbWVMb2dDb2Rlcy5tZXNzYWdlIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZmllbGRzOiBjb2RlLCBuYW1lLCBsaW5lLCBjYXB0dXJlXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTAwLTB4MDAtbG9nbGluZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnYW1lTG9nKHBhcmFtcz86IE5ldFBhcmFtc1snR2FtZUxvZyddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0dhbWVMb2cnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnR2FtZUxvZycsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMDAtMHgwMC1sb2dsaW5lXHJcbiAgICovXHJcbiAgc3RhdGljIGdhbWVOYW1lTG9nKHBhcmFtcz86IE5ldFBhcmFtc1snR2FtZUxvZyddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0dhbWVMb2cnPiB7XHJcbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0YWJpbGl0eS5cclxuICAgIHJldHVybiBOZXRSZWdleGVzLmdhbWVMb2cocGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0xMi0weDBjLXBsYXllcnN0YXRzXHJcbiAgICovXHJcbiAgc3RhdGljIHN0YXRDaGFuZ2UocGFyYW1zPzogTmV0UGFyYW1zWydQbGF5ZXJTdGF0cyddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J1BsYXllclN0YXRzJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ1BsYXllclN0YXRzJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0wMS0weDAxLWNoYW5nZXpvbmVcclxuICAgKi9cclxuICBzdGF0aWMgY2hhbmdlWm9uZShwYXJhbXM/OiBOZXRQYXJhbXNbJ0NoYW5nZVpvbmUnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdDaGFuZ2Vab25lJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0NoYW5nZVpvbmUnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTMzLTB4MjEtbmV0d29yazZkLWFjdG9yLWNvbnRyb2xcclxuICAgKi9cclxuICBzdGF0aWMgbmV0d29yazZkKHBhcmFtcz86IE5ldFBhcmFtc1snQWN0b3JDb250cm9sJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWN0b3JDb250cm9sJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0FjdG9yQ29udHJvbCcsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMzQtMHgyMi1uZXR3b3JrbmFtZXRvZ2dsZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBuYW1lVG9nZ2xlKHBhcmFtcz86IE5ldFBhcmFtc1snTmFtZVRvZ2dsZSddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J05hbWVUb2dnbGUnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnTmFtZVRvZ2dsZScsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtNDAtMHgyOC1tYXBcclxuICAgKi9cclxuICBzdGF0aWMgbWFwKHBhcmFtcz86IE5ldFBhcmFtc1snTWFwJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnTWFwJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ01hcCcsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtNDEtMHgyOS1zeXN0ZW1sb2dtZXNzYWdlXHJcbiAgICovXHJcbiAgc3RhdGljIHN5c3RlbUxvZ01lc3NhZ2UoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ1N5c3RlbUxvZ01lc3NhZ2UnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnU3lzdGVtTG9nTWVzc2FnZSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdTeXN0ZW1Mb2dNZXNzYWdlJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNTctMHgxMDEtbWFwZWZmZWN0XHJcbiAgICovXHJcbiAgc3RhdGljIG1hcEVmZmVjdChwYXJhbXM/OiBOZXRQYXJhbXNbJ01hcEVmZmVjdCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J01hcEVmZmVjdCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdNYXBFZmZlY3QnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI1OC0weDEwMi1mYXRlZGlyZWN0b3JcclxuICAgKi9cclxuICBzdGF0aWMgZmF0ZURpcmVjdG9yKHBhcmFtcz86IE5ldFBhcmFtc1snRmF0ZURpcmVjdG9yJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnRmF0ZURpcmVjdG9yJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0ZhdGVEaXJlY3RvcicsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjU5LTB4MTAzLWNlZGlyZWN0b3JcclxuICAgKi9cclxuICBzdGF0aWMgY2VEaXJlY3RvcihwYXJhbXM/OiBOZXRQYXJhbXNbJ0NFRGlyZWN0b3InXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdDRURpcmVjdG9yJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0NFRGlyZWN0b3InLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI2MC0weDEwNC1pbmNvbWJhdFxyXG4gICAqL1xyXG4gIHN0YXRpYyBpbkNvbWJhdChwYXJhbXM/OiBOZXRQYXJhbXNbJ0luQ29tYmF0J10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnSW5Db21iYXQnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnSW5Db21iYXQnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI2MS0weDEwNS1jb21iYXRhbnRtZW1vcnlcclxuICAgKi9cclxuICBzdGF0aWMgY29tYmF0YW50TWVtb3J5KFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydDb21iYXRhbnRNZW1vcnknXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQ29tYmF0YW50TWVtb3J5Jz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0NvbWJhdGFudE1lbW9yeScsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjYzLTB4MTA3LXN0YXJ0c3VzaW5nZXh0cmFcclxuICAgKi9cclxuICBzdGF0aWMgc3RhcnRzVXNpbmdFeHRyYShcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snU3RhcnRzVXNpbmdFeHRyYSddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdTdGFydHNVc2luZ0V4dHJhJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ1N0YXJ0c1VzaW5nRXh0cmEnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI2NC0weDEwOC1hYmlsaXR5ZXh0cmFcclxuICAgKi9cclxuICBzdGF0aWMgYWJpbGl0eUV4dHJhKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydBYmlsaXR5RXh0cmEnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWJpbGl0eUV4dHJhJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0FiaWxpdHlFeHRyYScsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjY1LTB4MTA5LWNvbnRlbnRmaW5kZXJzZXR0aW5nc1xyXG4gICAqL1xyXG4gIHN0YXRpYyBjb250ZW50RmluZGVyU2V0dGluZ3MoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ0NvbnRlbnRGaW5kZXJTZXR0aW5ncyddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdDb250ZW50RmluZGVyU2V0dGluZ3MnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnQ29udGVudEZpbmRlclNldHRpbmdzJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNjYtMHgxMGEtbnBjeWVsbFxyXG4gICAqL1xyXG4gIHN0YXRpYyBucGNZZWxsKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydOcGNZZWxsJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J05wY1llbGwnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnTnBjWWVsbCcsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjY3LTB4MTBiLWJhdHRsZXRhbGsyXHJcbiAgICovXHJcbiAgc3RhdGljIGJhdHRsZVRhbGsyKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydCYXR0bGVUYWxrMiddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdCYXR0bGVUYWxrMic+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdCYXR0bGVUYWxrMicsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjY4LTB4MTBjLWNvdW50ZG93blxyXG4gICAqL1xyXG4gIHN0YXRpYyBjb3VudGRvd24oXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ0NvdW50ZG93biddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdDb3VudGRvd24nPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnQ291bnRkb3duJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNjktMHgxMGQtY291bnRkb3duY2FuY2VsXHJcbiAgICovXHJcbiAgc3RhdGljIGNvdW50ZG93bkNhbmNlbChcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQ291bnRkb3duQ2FuY2VsJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0NvdW50ZG93bkNhbmNlbCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdDb3VudGRvd25DYW5jZWwnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI3MC0weDEwZS1hY3Rvcm1vdmVcclxuICAgKi9cclxuICBzdGF0aWMgYWN0b3JNb3ZlKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydBY3Rvck1vdmUnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWN0b3JNb3ZlJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0FjdG9yTW92ZScsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjcxLTB4MTBmLWFjdG9yc2V0cG9zXHJcbiAgICovXHJcbiAgc3RhdGljIGFjdG9yU2V0UG9zKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydBY3RvclNldFBvcyddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdBY3RvclNldFBvcyc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdBY3RvclNldFBvcycsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjcyLTB4MTEwLXNwYXdubnBjZXh0cmFcclxuICAgKi9cclxuICBzdGF0aWMgc3Bhd25OcGNFeHRyYShcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snU3Bhd25OcGNFeHRyYSddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdTcGF3bk5wY0V4dHJhJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ1NwYXduTnBjRXh0cmEnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI3My0weDExMS1hY3RvcmNvbnRyb2xleHRyYVxyXG4gICAqL1xyXG4gIHN0YXRpYyBhY3RvckNvbnRyb2xFeHRyYShcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQWN0b3JDb250cm9sRXh0cmEnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWN0b3JDb250cm9sRXh0cmEnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnQWN0b3JDb250cm9sRXh0cmEnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI3NC0weDExMi1hY3RvcmNvbnRyb2xzZWxmZXh0cmFcclxuICAgKi9cclxuICBzdGF0aWMgYWN0b3JDb250cm9sU2VsZkV4dHJhKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydBY3RvckNvbnRyb2xTZWxmRXh0cmEnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWN0b3JDb250cm9sU2VsZkV4dHJhJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0FjdG9yQ29udHJvbFNlbGZFeHRyYScsIHBhcmFtcyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29tbW9uTmV0UmVnZXggPSB7XHJcbiAgLy8gVE9ETyg2LjIpOiByZW1vdmUgNDAwMDAwMTAgYWZ0ZXIgZXZlcnlib2R5IGlzIG9uIDYuMi5cclxuICAvLyBUT0RPOiBvciBtYXliZSBrZWVwIGFyb3VuZCBmb3IgcGxheWluZyBvbGQgbG9nIGZpbGVzPz9cclxuICB3aXBlOiBOZXRSZWdleGVzLm5ldHdvcms2ZCh7IGNvbW1hbmQ6IFsnNDAwMDAwMTAnLCAnNDAwMDAwMEYnXSB9KSxcclxuICBjYWN0Ym90V2lwZUVjaG86IE5ldFJlZ2V4ZXMuZWNobyh7IGxpbmU6ICdjYWN0Ym90IHdpcGUuKj8nIH0pLFxyXG4gIHVzZXJXaXBlRWNobzogTmV0UmVnZXhlcy5lY2hvKHsgbGluZTogJ2VuZCcgfSksXHJcbn0gYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgYnVpbGROZXRSZWdleEZvclRyaWdnZXIgPSA8VCBleHRlbmRzIGtleW9mIE5ldFBhcmFtcz4oXHJcbiAgdHlwZTogVCxcclxuICBwYXJhbXM/OiBOZXRQYXJhbXNbVF0sXHJcbik6IENhY3Rib3RCYXNlUmVnRXhwPFQ+ID0+IHtcclxuICBpZiAodHlwZSA9PT0gJ0FiaWxpdHknKVxyXG4gICAgLy8gdHMgY2FuJ3QgbmFycm93IFQgdG8gYEFiaWxpdHlgIGhlcmUsIG5lZWQgY2FzdGluZy5cclxuICAgIHJldHVybiBOZXRSZWdleGVzLmFiaWxpdHkocGFyYW1zKSBhcyBDYWN0Ym90QmFzZVJlZ0V4cDxUPjtcclxuXHJcbiAgcmV0dXJuIGJ1aWxkUmVnZXg8VD4odHlwZSwgcGFyYW1zKTtcclxufTtcclxuIiwiLy8gT3ZlcmxheVBsdWdpbiBBUEkgc2V0dXBcclxuXHJcbmltcG9ydCB7XHJcbiAgRXZlbnRNYXAsXHJcbiAgRXZlbnRUeXBlLFxyXG4gIElPdmVybGF5SGFuZGxlcixcclxuICBPdmVybGF5SGFuZGxlckZ1bmNzLFxyXG4gIE92ZXJsYXlIYW5kbGVyVHlwZXMsXHJcbn0gZnJvbSAnLi4vdHlwZXMvZXZlbnQnO1xyXG5cclxudHlwZSBCYXNlUmVzcG9uc2UgPSB7IHJzZXE/OiBudW1iZXI7ICckZXJyb3InPzogYm9vbGVhbiB9O1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgX19PdmVybGF5Q2FsbGJhY2s6IEV2ZW50TWFwW0V2ZW50VHlwZV07XHJcbiAgICBkaXNwYXRjaE92ZXJsYXlFdmVudD86IHR5cGVvZiBwcm9jZXNzRXZlbnQ7XHJcbiAgICBPdmVybGF5UGx1Z2luQXBpOiB7XHJcbiAgICAgIHJlYWR5OiBib29sZWFuO1xyXG4gICAgICBjYWxsSGFuZGxlcjogKG1zZzogc3RyaW5nLCBjYj86ICh2YWx1ZTogc3RyaW5nKSA9PiB1bmtub3duKSA9PiB2b2lkO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgVGhpcyBpcyBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eS5cclxuICAgICAqXHJcbiAgICAgKiBJdCBpcyByZWNvbW1lbmRlZCB0byBpbXBvcnQgZnJvbSB0aGlzIGZpbGU6XHJcbiAgICAgKlxyXG4gICAgICogYGltcG9ydCB7IGFkZE92ZXJsYXlMaXN0ZW5lciB9IGZyb20gJy9wYXRoL3RvL292ZXJsYXlfcGx1Z2luX2FwaSc7YFxyXG4gICAgICovXHJcbiAgICBhZGRPdmVybGF5TGlzdGVuZXI6IElBZGRPdmVybGF5TGlzdGVuZXI7XHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkIFRoaXMgaXMgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuXHJcbiAgICAgKlxyXG4gICAgICogSXQgaXMgcmVjb21tZW5kZWQgdG8gaW1wb3J0IGZyb20gdGhpcyBmaWxlOlxyXG4gICAgICpcclxuICAgICAqIGBpbXBvcnQgeyByZW1vdmVPdmVybGF5TGlzdGVuZXIgfSBmcm9tICcvcGF0aC90by9vdmVybGF5X3BsdWdpbl9hcGknO2BcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlT3ZlcmxheUxpc3RlbmVyOiBJUmVtb3ZlT3ZlcmxheUxpc3RlbmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVwcmVjYXRlZCBUaGlzIGlzIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LlxyXG4gICAgICpcclxuICAgICAqIEl0IGlzIHJlY29tbWVuZGVkIHRvIGltcG9ydCBmcm9tIHRoaXMgZmlsZTpcclxuICAgICAqXHJcbiAgICAgKiBgaW1wb3J0IHsgY2FsbE92ZXJsYXlIYW5kbGVyIH0gZnJvbSAnL3BhdGgvdG8vb3ZlcmxheV9wbHVnaW5fYXBpJztgXHJcbiAgICAgKi9cclxuICAgIGNhbGxPdmVybGF5SGFuZGxlcjogSU92ZXJsYXlIYW5kbGVyO1xyXG4gIH1cclxufVxyXG5cclxudHlwZSBJQWRkT3ZlcmxheUxpc3RlbmVyID0gPFQgZXh0ZW5kcyBFdmVudFR5cGU+KGV2ZW50OiBULCBjYjogRXZlbnRNYXBbVF0pID0+IHZvaWQ7XHJcbnR5cGUgSVJlbW92ZU92ZXJsYXlMaXN0ZW5lciA9IDxUIGV4dGVuZHMgRXZlbnRUeXBlPihldmVudDogVCwgY2I6IEV2ZW50TWFwW1RdKSA9PiB2b2lkO1xyXG5cclxudHlwZSBTdWJzY3JpYmVyPFQ+ID0ge1xyXG4gIFtrZXkgaW4gRXZlbnRUeXBlXT86IFRbXTtcclxufTtcclxudHlwZSBFdmVudFBhcmFtZXRlciA9IFBhcmFtZXRlcnM8RXZlbnRNYXBbRXZlbnRUeXBlXT5bMF07XHJcbnR5cGUgVm9pZEZ1bmM8VD4gPSAoLi4uYXJnczogVFtdKSA9PiB2b2lkO1xyXG5cclxubGV0IGluaXRlZCA9IGZhbHNlO1xyXG5cclxubGV0IHdzVXJsOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxubGV0IHdzOiBXZWJTb2NrZXQgfCBudWxsID0gbnVsbDtcclxubGV0IHF1ZXVlOiAoXHJcbiAgfCB7IFtzOiBzdHJpbmddOiB1bmtub3duIH1cclxuICB8IFt7IFtzOiBzdHJpbmddOiB1bmtub3duIH0sICgodmFsdWU6IHN0cmluZyB8IG51bGwpID0+IHVua25vd24pIHwgdW5kZWZpbmVkXVxyXG4pW10gfCBudWxsID0gW107XHJcbmxldCByc2VxQ291bnRlciA9IDA7XHJcbnR5cGUgUHJvbWlzZUZ1bmNzID0ge1xyXG4gIHJlc29sdmU6ICh2YWx1ZTogdW5rbm93bikgPT4gdm9pZDtcclxuICByZWplY3Q6ICh2YWx1ZTogdW5rbm93bikgPT4gdm9pZDtcclxufTtcclxuY29uc3QgcmVzcG9uc2VQcm9taXNlczogeyBbcnNlcUlkeDogbnVtYmVyXTogUHJvbWlzZUZ1bmNzIH0gPSB7fTtcclxuXHJcbmNvbnN0IHN1YnNjcmliZXJzOiBTdWJzY3JpYmVyPFZvaWRGdW5jPHVua25vd24+PiA9IHt9O1xyXG5cclxuY29uc3Qgc2VuZE1lc3NhZ2UgPSAoXHJcbiAgbXNnOiB7IFtzOiBzdHJpbmddOiB1bmtub3duIH0sXHJcbiAgY2I/OiAodmFsdWU6IHN0cmluZyB8IG51bGwpID0+IHVua25vd24sXHJcbik6IHZvaWQgPT4ge1xyXG4gIGlmICh3cykge1xyXG4gICAgaWYgKHF1ZXVlKVxyXG4gICAgICBxdWV1ZS5wdXNoKG1zZyk7XHJcbiAgICBlbHNlXHJcbiAgICAgIHdzLnNlbmQoSlNPTi5zdHJpbmdpZnkobXNnKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChxdWV1ZSlcclxuICAgICAgcXVldWUucHVzaChbbXNnLCBjYl0pO1xyXG4gICAgZWxzZVxyXG4gICAgICB3aW5kb3cuT3ZlcmxheVBsdWdpbkFwaS5jYWxsSGFuZGxlcihKU09OLnN0cmluZ2lmeShtc2cpLCBjYik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgcHJvY2Vzc0V2ZW50ID0gPFQgZXh0ZW5kcyBFdmVudFR5cGU+KG1zZzogUGFyYW1ldGVyczxFdmVudE1hcFtUXT5bMF0pOiB2b2lkID0+IHtcclxuICBpbml0KCk7XHJcblxyXG4gIGNvbnN0IHN1YnMgPSBzdWJzY3JpYmVyc1ttc2cudHlwZV07XHJcbiAgc3Vicz8uZm9yRWFjaCgoc3ViKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzdWIobXNnKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkaXNwYXRjaE92ZXJsYXlFdmVudCA9IHByb2Nlc3NFdmVudDtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRPdmVybGF5TGlzdGVuZXI6IElBZGRPdmVybGF5TGlzdGVuZXIgPSAoZXZlbnQsIGNiKTogdm9pZCA9PiB7XHJcbiAgaW5pdCgpO1xyXG5cclxuICBpZiAoIXN1YnNjcmliZXJzW2V2ZW50XSkge1xyXG4gICAgc3Vic2NyaWJlcnNbZXZlbnRdID0gW107XHJcblxyXG4gICAgaWYgKCFxdWV1ZSkge1xyXG4gICAgICBzZW5kTWVzc2FnZSh7XHJcbiAgICAgICAgY2FsbDogJ3N1YnNjcmliZScsXHJcbiAgICAgICAgZXZlbnRzOiBbZXZlbnRdLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN1YnNjcmliZXJzW2V2ZW50XT8ucHVzaChjYiBhcyBWb2lkRnVuYzx1bmtub3duPik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlT3ZlcmxheUxpc3RlbmVyOiBJUmVtb3ZlT3ZlcmxheUxpc3RlbmVyID0gKGV2ZW50LCBjYik6IHZvaWQgPT4ge1xyXG4gIGluaXQoKTtcclxuXHJcbiAgaWYgKHN1YnNjcmliZXJzW2V2ZW50XSkge1xyXG4gICAgY29uc3QgbGlzdCA9IHN1YnNjcmliZXJzW2V2ZW50XTtcclxuICAgIGNvbnN0IHBvcyA9IGxpc3Q/LmluZGV4T2YoY2IgYXMgVm9pZEZ1bmM8dW5rbm93bj4pO1xyXG5cclxuICAgIGlmIChwb3MgIT09IHVuZGVmaW5lZCAmJiBwb3MgPiAtMSlcclxuICAgICAgbGlzdD8uc3BsaWNlKHBvcywgMSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY2FsbE92ZXJsYXlIYW5kbGVySW50ZXJuYWw6IElPdmVybGF5SGFuZGxlciA9IChcclxuICBfbXNnOiB7IFtzOiBzdHJpbmddOiB1bmtub3duIH0sXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICBpbml0KCk7XHJcblxyXG4gIGNvbnN0IG1zZyA9IHtcclxuICAgIC4uLl9tc2csXHJcbiAgICByc2VxOiAwLFxyXG4gIH07XHJcbiAgbGV0IHA6IFByb21pc2U8dW5rbm93bj47XHJcblxyXG4gIGlmICh3cykge1xyXG4gICAgbXNnLnJzZXEgPSByc2VxQ291bnRlcisrO1xyXG4gICAgcCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgcmVzcG9uc2VQcm9taXNlc1ttc2cucnNlcV0gPSB7IHJlc29sdmU6IHJlc29sdmUsIHJlamVjdDogcmVqZWN0IH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZW5kTWVzc2FnZShtc2cpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzZW5kTWVzc2FnZShtc2csIChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEgPT09IG51bGwpIHtcclxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoZGF0YSkgYXMgQmFzZVJlc3BvbnNlO1xyXG4gICAgICAgIGlmIChwYXJzZWRbJyRlcnJvciddKVxyXG4gICAgICAgICAgcmVqZWN0KHBhcnNlZCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgcmVzb2x2ZShwYXJzZWQpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHA7XHJcbn07XHJcblxyXG50eXBlIE92ZXJyaWRlTWFwID0geyBbY2FsbCBpbiBPdmVybGF5SGFuZGxlclR5cGVzXT86IE92ZXJsYXlIYW5kbGVyRnVuY3NbY2FsbF0gfTtcclxuY29uc3QgY2FsbE92ZXJsYXlIYW5kbGVyT3ZlcnJpZGVNYXA6IE92ZXJyaWRlTWFwID0ge307XHJcblxyXG5leHBvcnQgY29uc3QgY2FsbE92ZXJsYXlIYW5kbGVyOiBJT3ZlcmxheUhhbmRsZXIgPSAoXHJcbiAgX21zZzogeyBbczogc3RyaW5nXTogdW5rbm93biB9LFxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbik6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgaW5pdCgpO1xyXG5cclxuICAvLyBJZiB0aGlzIGBhc2AgaXMgaW5jb3JyZWN0LCB0aGVuIGl0IHdpbGwgbm90IGZpbmQgYW4gb3ZlcnJpZGUuXHJcbiAgLy8gVE9ETzogd2UgY291bGQgYWxzbyByZXBsYWNlIHRoaXMgd2l0aCBhIHR5cGUgZ3VhcmQuXHJcbiAgY29uc3QgdHlwZSA9IF9tc2cuY2FsbCBhcyBrZXlvZiBPdmVycmlkZU1hcDtcclxuICBjb25zdCBjYWxsRnVuYyA9IGNhbGxPdmVybGF5SGFuZGxlck92ZXJyaWRlTWFwW3R5cGVdID8/IGNhbGxPdmVybGF5SGFuZGxlckludGVybmFsO1xyXG5cclxuICAvLyBUaGUgYElPdmVybGF5SGFuZGxlcmAgdHlwZSBndWFyYW50ZWVzIHRoYXQgcGFyYW1ldGVycy9yZXR1cm4gdHlwZSBtYXRjaFxyXG4gIC8vIG9uZSBvZiB0aGUgb3ZlcmxheSBoYW5kbGVycy4gIFRoZSBPdmVycmlkZU1hcCBhbHNvIG9ubHkgc3RvcmVzIGZ1bmN0aW9uc1xyXG4gIC8vIHRoYXQgbWF0Y2ggYnkgdGhlIGRpc2NyaW1pbmF0aW5nIGBjYWxsYCBmaWVsZCwgYW5kIHNvIGFueSBvdmVycmlkZXNcclxuICAvLyBzaG91bGQgYmUgY29ycmVjdCBoZXJlLlxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnksQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudFxyXG4gIHJldHVybiBjYWxsRnVuYyhfbXNnIGFzIGFueSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0T3ZlcmxheUhhbmRsZXJPdmVycmlkZSA9IDxUIGV4dGVuZHMga2V5b2YgT3ZlcmxheUhhbmRsZXJGdW5jcz4oXHJcbiAgdHlwZTogVCxcclxuICBvdmVycmlkZT86IE92ZXJsYXlIYW5kbGVyRnVuY3NbVF0sXHJcbik6IHZvaWQgPT4ge1xyXG4gIGlmICghb3ZlcnJpZGUpIHtcclxuICAgIGRlbGV0ZSBjYWxsT3ZlcmxheUhhbmRsZXJPdmVycmlkZU1hcFt0eXBlXTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY2FsbE92ZXJsYXlIYW5kbGVyT3ZlcnJpZGVNYXBbdHlwZV0gPSBvdmVycmlkZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0ID0gKCk6IHZvaWQgPT4ge1xyXG4gIGlmIChpbml0ZWQpXHJcbiAgICByZXR1cm47XHJcblxyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgd3NVcmwgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLmdldCgnT1ZFUkxBWV9XUycpO1xyXG4gICAgaWYgKHdzVXJsICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGNvbm5lY3RXcyA9IGZ1bmN0aW9uKHdzVXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB3cyA9IG5ldyBXZWJTb2NrZXQod3NVcmwpO1xyXG5cclxuICAgICAgICB3cy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIChlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3cy5hZGRFdmVudExpc3RlbmVyKCdvcGVuJywgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCEnKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBxID0gcXVldWUgPz8gW107XHJcbiAgICAgICAgICBxdWV1ZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICBjYWxsOiAnc3Vic2NyaWJlJyxcclxuICAgICAgICAgICAgZXZlbnRzOiBPYmplY3Qua2V5cyhzdWJzY3JpYmVycyksXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBmb3IgKGNvbnN0IG1zZyBvZiBxKSB7XHJcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtc2cpKVxyXG4gICAgICAgICAgICAgIHNlbmRNZXNzYWdlKG1zZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoX21zZykgPT4ge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBfbXNnLmRhdGEgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBtZXNzYWdlIGRhdGEgcmVjZWl2ZWQ6ICcsIF9tc2cpO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtc2cgPSBKU09OLnBhcnNlKF9tc2cuZGF0YSkgYXMgRXZlbnRQYXJhbWV0ZXIgJiBCYXNlUmVzcG9uc2U7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlRnVuY3MgPSBtc2c/LnJzZXEgIT09IHVuZGVmaW5lZCA/IHJlc3BvbnNlUHJvbWlzZXNbbXNnLnJzZXFdIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBpZiAobXNnLnJzZXEgIT09IHVuZGVmaW5lZCAmJiBwcm9taXNlRnVuY3MpIHtcclxuICAgICAgICAgICAgICBpZiAobXNnWyckZXJyb3InXSlcclxuICAgICAgICAgICAgICAgIHByb21pc2VGdW5jcy5yZWplY3QobXNnKTtcclxuICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBwcm9taXNlRnVuY3MucmVzb2x2ZShtc2cpO1xyXG4gICAgICAgICAgICAgIGRlbGV0ZSByZXNwb25zZVByb21pc2VzW21zZy5yc2VxXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBwcm9jZXNzRXZlbnQobXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIG1lc3NhZ2UgcmVjZWl2ZWQ6ICcsIF9tc2cpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKCkgPT4ge1xyXG4gICAgICAgICAgcXVldWUgPSBudWxsO1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdUcnlpbmcgdG8gcmVjb25uZWN0Li4uJyk7XHJcbiAgICAgICAgICAvLyBEb24ndCBzcGFtIHRoZSBzZXJ2ZXIgd2l0aCByZXRyaWVzLlxyXG4gICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25uZWN0V3Mod3NVcmwpO1xyXG4gICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbm5lY3RXcyh3c1VybCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB3YWl0Rm9yQXBpID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3cuT3ZlcmxheVBsdWdpbkFwaT8ucmVhZHkpIHtcclxuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdhaXRGb3JBcGksIDMwMCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBxID0gcXVldWUgPz8gW107XHJcbiAgICAgICAgcXVldWUgPSBudWxsO1xyXG5cclxuICAgICAgICB3aW5kb3cuX19PdmVybGF5Q2FsbGJhY2sgPSBwcm9jZXNzRXZlbnQ7XHJcblxyXG4gICAgICAgIHNlbmRNZXNzYWdlKHtcclxuICAgICAgICAgIGNhbGw6ICdzdWJzY3JpYmUnLFxyXG4gICAgICAgICAgZXZlbnRzOiBPYmplY3Qua2V5cyhzdWJzY3JpYmVycyksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBxKSB7XHJcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSlcclxuICAgICAgICAgICAgc2VuZE1lc3NhZ2UoaXRlbVswXSwgaXRlbVsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgd2FpdEZvckFwaSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhlcmUgdGhlIE92ZXJsYXlQbHVnaW4gQVBJIGlzIHJlZ2lzdGVyZWQgdG8gdGhlIHdpbmRvdyBvYmplY3QsXHJcbiAgICAvLyBidXQgdGhpcyBpcyBtYWlubHkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBGb3IgY2FjdGJvdCdzIGJ1aWx0LWluIGZpbGVzLFxyXG4gICAgLy8gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSB2YXJpb3VzIGZ1bmN0aW9ucyBleHBvcnRlZCBpbiByZXNvdXJjZXMvb3ZlcmxheV9wbHVnaW5fYXBpLnRzLlxyXG5cclxuICAgIC8qIGVzbGludC1kaXNhYmxlIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uICovXHJcbiAgICB3aW5kb3cuYWRkT3ZlcmxheUxpc3RlbmVyID0gYWRkT3ZlcmxheUxpc3RlbmVyO1xyXG4gICAgd2luZG93LnJlbW92ZU92ZXJsYXlMaXN0ZW5lciA9IHJlbW92ZU92ZXJsYXlMaXN0ZW5lcjtcclxuICAgIHdpbmRvdy5jYWxsT3ZlcmxheUhhbmRsZXIgPSBjYWxsT3ZlcmxheUhhbmRsZXI7XHJcbiAgICB3aW5kb3cuZGlzcGF0Y2hPdmVybGF5RXZlbnQgPSBkaXNwYXRjaE92ZXJsYXlFdmVudDtcclxuICAgIC8qIGVzbGludC1lbmFibGUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24gKi9cclxuICB9XHJcblxyXG4gIGluaXRlZCA9IHRydWU7XHJcbn07XHJcbiIsImltcG9ydCBOZXRSZWdleGVzIGZyb20gJy4uLy4uL3Jlc291cmNlcy9uZXRyZWdleGVzJztcclxuaW1wb3J0IHsgYWRkT3ZlcmxheUxpc3RlbmVyLCBjYWxsT3ZlcmxheUhhbmRsZXIgfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvb3ZlcmxheV9wbHVnaW5fYXBpJztcclxuXHJcbmltcG9ydCAnLi4vLi4vcmVzb3VyY2VzL2RlZmF1bHRzLmNzcyc7XHJcblxyXG5hZGRPdmVybGF5TGlzdGVuZXIoJ0NoYW5nZVpvbmUnLCAoZSkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnRab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRab25lJyk7XHJcbiAgaWYgKGN1cnJlbnRab25lKVxyXG4gICAgY3VycmVudFpvbmUuaW5uZXJUZXh0ID0gYGN1cnJlbnRab25lOiAke2Uuem9uZU5hbWV9ICgke2Uuem9uZUlEfSlgO1xyXG59KTtcclxuXHJcbmFkZE92ZXJsYXlMaXN0ZW5lcignb25JbkNvbWJhdENoYW5nZWRFdmVudCcsIChlKSA9PiB7XHJcbiAgY29uc3QgaW5Db21iYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5Db21iYXQnKTtcclxuICBpZiAoaW5Db21iYXQpIHtcclxuICAgIGluQ29tYmF0LmlubmVyVGV4dCA9IGBpbkNvbWJhdDogYWN0OiAke2UuZGV0YWlsLmluQUNUQ29tYmF0ID8gJ3llcycgOiAnbm8nfSBnYW1lOiAke1xyXG4gICAgICBlLmRldGFpbC5pbkdhbWVDb21iYXQgPyAneWVzJyA6ICdubydcclxuICAgIH1gO1xyXG4gIH1cclxufSk7XHJcblxyXG5hZGRPdmVybGF5TGlzdGVuZXIoJ29uUGxheWVyQ2hhbmdlZEV2ZW50JywgKGUpID0+IHtcclxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKTtcclxuICBpZiAobmFtZSlcclxuICAgIG5hbWUuaW5uZXJUZXh0ID0gZS5kZXRhaWwubmFtZTtcclxuICBjb25zdCBwbGF5ZXJJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJJZCcpO1xyXG4gIGlmIChwbGF5ZXJJZClcclxuICAgIHBsYXllcklkLmlubmVyVGV4dCA9IGUuZGV0YWlsLmlkLnRvU3RyaW5nKDE2KTtcclxuICBjb25zdCBocCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdocCcpO1xyXG4gIGlmIChocClcclxuICAgIGhwLmlubmVyVGV4dCA9IGAke2UuZGV0YWlsLmN1cnJlbnRIUH0vJHtlLmRldGFpbC5tYXhIUH0gKCR7ZS5kZXRhaWwuY3VycmVudFNoaWVsZH0pYDtcclxuICBjb25zdCBtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtcCcpO1xyXG4gIGlmIChtcClcclxuICAgIG1wLmlubmVyVGV4dCA9IGAke2UuZGV0YWlsLmN1cnJlbnRNUH0vJHtlLmRldGFpbC5tYXhNUH1gO1xyXG4gIGNvbnN0IGNwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NwJyk7XHJcbiAgaWYgKGNwKVxyXG4gICAgY3AuaW5uZXJUZXh0ID0gYCR7ZS5kZXRhaWwuY3VycmVudENQfS8ke2UuZGV0YWlsLm1heENQfWA7XHJcbiAgY29uc3QgZ3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3AnKTtcclxuICBpZiAoZ3ApXHJcbiAgICBncC5pbm5lclRleHQgPSBgJHtlLmRldGFpbC5jdXJyZW50R1B9LyR7ZS5kZXRhaWwubWF4R1B9YDtcclxuICBjb25zdCBqb2IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnam9iJyk7XHJcbiAgaWYgKGpvYilcclxuICAgIGpvYi5pbm5lclRleHQgPSBgJHtlLmRldGFpbC5sZXZlbH0gJHtlLmRldGFpbC5qb2J9YDtcclxuICBjb25zdCBkZWJ1ZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWJ1ZycpO1xyXG4gIGlmIChkZWJ1ZylcclxuICAgIGRlYnVnLmlubmVyVGV4dCA9IGUuZGV0YWlsLmRlYnVnSm9iO1xyXG5cclxuICBjb25zdCBqb2JJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pvYmluZm8nKTtcclxuICBpZiAoam9iSW5mbykge1xyXG4gICAgY29uc3QgZGV0YWlsID0gZS5kZXRhaWw7XHJcbiAgICBpZiAoZGV0YWlsLmpvYiA9PT0gJ1JETScgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC53aGl0ZU1hbmF9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmJsYWNrTWFuYX0gfCAke2RldGFpbC5qb2JEZXRhaWwubWFuYVN0YWNrc31gO1xyXG4gICAgfSBlbHNlIGlmIChkZXRhaWwuam9iID09PSAnV0FSJyAmJiBkZXRhaWwuam9iRGV0YWlsKSB7XHJcbiAgICAgIGpvYkluZm8uaW5uZXJUZXh0ID0gZGV0YWlsLmpvYkRldGFpbC5iZWFzdC50b1N0cmluZygpO1xyXG4gICAgfSBlbHNlIGlmIChkZXRhaWwuam9iID09PSAnRFJLJyAmJiBkZXRhaWwuam9iRGV0YWlsKSB7XHJcbiAgICAgIGpvYkluZm8uaW5uZXJUZXh0ID1cclxuICAgICAgICBgJHtkZXRhaWwuam9iRGV0YWlsLmJsb29kfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5kYXJrc2lkZU1pbGxpc2Vjb25kc30gfCAke2RldGFpbC5qb2JEZXRhaWwuZGFya0FydHMudG9TdHJpbmcoKX0gfCAke2RldGFpbC5qb2JEZXRhaWwubGl2aW5nU2hhZG93TWlsbGlzZWNvbmRzfWA7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdHTkInICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPSBgJHtkZXRhaWwuam9iRGV0YWlsLmNhcnRyaWRnZXN9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmNvbnRpbnVhdGlvblN0YXRlfWA7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdQTEQnICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPSBkZXRhaWwuam9iRGV0YWlsLm9hdGgudG9TdHJpbmcoKTtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ0JSRCcgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC5zb25nTmFtZX0gfCAke2RldGFpbC5qb2JEZXRhaWwubGFzdFBsYXllZH0gfCAke2RldGFpbC5qb2JEZXRhaWwuc29uZ1Byb2NzfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5zb3VsR2F1Z2V9IHwgJHtkZXRhaWwuam9iRGV0YWlsLnNvbmdNaWxsaXNlY29uZHN9IHwgWyR7XHJcbiAgICAgICAgICBkZXRhaWwuam9iRGV0YWlsLmNvZGEuam9pbignLCAnKVxyXG4gICAgICAgIH1dYDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ0ROQycgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9IGAke2RldGFpbC5qb2JEZXRhaWwuZmVhdGhlcnN9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmVzcHJpdH0gfCBbJHtcclxuICAgICAgICBkZXRhaWwuam9iRGV0YWlsLnN0ZXBzLmpvaW4oJywgJylcclxuICAgICAgfV0gfCAke2RldGFpbC5qb2JEZXRhaWwuY3VycmVudFN0ZXB9YDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ05JTicgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9IGAke2RldGFpbC5qb2JEZXRhaWwuaHV0b25NaWxsaXNlY29uZHN9IHwgJHtkZXRhaWwuam9iRGV0YWlsLm5pbmtpQW1vdW50fWA7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdEUkcnICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPVxyXG4gICAgICAgIGAke2RldGFpbC5qb2JEZXRhaWwuYmxvb2RNaWxsaXNlY29uZHN9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmxpZmVNaWxsaXNlY29uZHN9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmV5ZXNBbW91bnR9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmZpcnN0bWluZHNGb2N1c31gO1xyXG4gICAgfSBlbHNlIGlmIChkZXRhaWwuam9iID09PSAnQkxNJyAmJiBkZXRhaWwuam9iRGV0YWlsKSB7XHJcbiAgICAgIGpvYkluZm8uaW5uZXJUZXh0ID1cclxuICAgICAgICBgJHtkZXRhaWwuam9iRGV0YWlsLnVtYnJhbFN0YWNrc30gKCR7ZGV0YWlsLmpvYkRldGFpbC51bWJyYWxNaWxsaXNlY29uZHN9KSB8ICR7ZGV0YWlsLmpvYkRldGFpbC51bWJyYWxIZWFydHN9IHwgJHtkZXRhaWwuam9iRGV0YWlsLnBvbHlnbG90fSAke2RldGFpbC5qb2JEZXRhaWwuZW5vY2hpYW4udG9TdHJpbmcoKX0gKCR7ZGV0YWlsLmpvYkRldGFpbC5uZXh0UG9seWdsb3RNaWxsaXNlY29uZHN9KSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5wYXJhZG94LnRvU3RyaW5nKCl9YDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ1RITScgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC51bWJyYWxTdGFja3N9ICgke2RldGFpbC5qb2JEZXRhaWwudW1icmFsTWlsbGlzZWNvbmRzfSlgO1xyXG4gICAgfSBlbHNlIGlmIChkZXRhaWwuam9iID09PSAnV0hNJyAmJiBkZXRhaWwuam9iRGV0YWlsKSB7XHJcbiAgICAgIGpvYkluZm8uaW5uZXJUZXh0ID1cclxuICAgICAgICBgJHtkZXRhaWwuam9iRGV0YWlsLmxpbHlTdGFja3N9ICgke2RldGFpbC5qb2JEZXRhaWwubGlseU1pbGxpc2Vjb25kc30pIHwgJHtkZXRhaWwuam9iRGV0YWlsLmJsb29kbGlseVN0YWNrc31gO1xyXG4gICAgfSBlbHNlIGlmIChkZXRhaWwuam9iID09PSAnU01OJyAmJiBkZXRhaWwuam9iRGV0YWlsKSB7XHJcbiAgICAgIGpvYkluZm8uaW5uZXJUZXh0ID1cclxuICAgICAgICBgJHtkZXRhaWwuam9iRGV0YWlsLmFldGhlcmZsb3dTdGFja3N9IHwgJHtkZXRhaWwuam9iRGV0YWlsLnRyYW5jZU1pbGxpc2Vjb25kc30gfCAke2RldGFpbC5qb2JEZXRhaWwuYXR0dW5lbWVudH0gfCAke2RldGFpbC5qb2JEZXRhaWwuYXR0dW5lbWVudE1pbGxpc2Vjb25kc30gfCAke1xyXG4gICAgICAgICAgZGV0YWlsXHJcbiAgICAgICAgICAgIC5qb2JEZXRhaWwuYWN0aXZlUHJpbWFsID8/ICctJ1xyXG4gICAgICAgIH0gfCBbJHtkZXRhaWwuam9iRGV0YWlsLnVzYWJsZUFyY2FudW0uam9pbignLCAnKX1dIHwgJHtkZXRhaWwuam9iRGV0YWlsLm5leHRTdW1tb25lZH1gO1xyXG4gICAgfSBlbHNlIGlmIChkZXRhaWwuam9iID09PSAnU0NIJyAmJiBkZXRhaWwuam9iRGV0YWlsKSB7XHJcbiAgICAgIGpvYkluZm8uaW5uZXJUZXh0ID1cclxuICAgICAgICBgJHtkZXRhaWwuam9iRGV0YWlsLmFldGhlcmZsb3dTdGFja3N9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmZhaXJ5R2F1Z2V9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmZhaXJ5U3RhdHVzfSAoJHtkZXRhaWwuam9iRGV0YWlsLmZhaXJ5TWlsbGlzZWNvbmRzfSlgO1xyXG4gICAgfSBlbHNlIGlmIChkZXRhaWwuam9iID09PSAnQUNOJyAmJiBkZXRhaWwuam9iRGV0YWlsKSB7XHJcbiAgICAgIGpvYkluZm8uaW5uZXJUZXh0ID0gZGV0YWlsLmpvYkRldGFpbC5hZXRoZXJmbG93U3RhY2tzLnRvU3RyaW5nKCk7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdBU1QnICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPSBgJHtkZXRhaWwuam9iRGV0YWlsLmhlbGRDYXJkfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5jcm93bkNhcmR9IHwgWyR7XHJcbiAgICAgICAgZGV0YWlsLmpvYkRldGFpbC5hcmNhbnVtcy5qb2luKCcsICcpXHJcbiAgICAgIH1dYDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ01OSycgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC5jaGFrcmFTdGFja3N9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmx1bmFyTmFkaS50b1N0cmluZygpfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5zb2xhck5hZGkudG9TdHJpbmcoKX0gfCBbJHtcclxuICAgICAgICAgIGRldGFpbC5qb2JEZXRhaWwuYmVhc3RDaGFrcmEuam9pbignLCAnKVxyXG4gICAgICAgIH1dYDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ01DSCcgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC5oZWF0fSAoJHtkZXRhaWwuam9iRGV0YWlsLm92ZXJoZWF0TWlsbGlzZWNvbmRzfSkgfCAke2RldGFpbC5qb2JEZXRhaWwuYmF0dGVyeX0gKCR7ZGV0YWlsLmpvYkRldGFpbC5iYXR0ZXJ5TWlsbGlzZWNvbmRzfSkgfCBsYXN0OiAke2RldGFpbC5qb2JEZXRhaWwubGFzdEJhdHRlcnlBbW91bnR9IHwgJHtkZXRhaWwuam9iRGV0YWlsLm92ZXJoZWF0QWN0aXZlLnRvU3RyaW5nKCl9IHwgJHtkZXRhaWwuam9iRGV0YWlsLnJvYm90QWN0aXZlLnRvU3RyaW5nKCl9YDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ1NBTScgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC5rZW5raX0gfCAke2RldGFpbC5qb2JEZXRhaWwubWVkaXRhdGlvblN0YWNrc30oJHtkZXRhaWwuam9iRGV0YWlsLnNldHN1LnRvU3RyaW5nKCl9LCR7ZGV0YWlsLmpvYkRldGFpbC5nZXRzdS50b1N0cmluZygpfSwke2RldGFpbC5qb2JEZXRhaWwua2EudG9TdHJpbmcoKX0pYDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ1NHRScgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC5hZGRlcnNnYWxsfSAoJHtkZXRhaWwuam9iRGV0YWlsLmFkZGVyc2dhbGxNaWxsaXNlY29uZHN9KSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5hZGRlcnN0aW5nfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5ldWtyYXNpYS50b1N0cmluZygpfWA7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdSUFInICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPVxyXG4gICAgICAgIGAke2RldGFpbC5qb2JEZXRhaWwuc291bH0gfCAke2RldGFpbC5qb2JEZXRhaWwuc2hyb3VkfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5lbnNocm91ZE1pbGxpc2Vjb25kc30gfCAke2RldGFpbC5qb2JEZXRhaWwubGVtdXJlU2hyb3VkfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC52b2lkU2hyb3VkfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcycpO1xyXG4gIGlmIChwb3MpIHtcclxuICAgIHBvcy5pbm5lclRleHQgPSBgJHtlLmRldGFpbC5wb3MueC50b0ZpeGVkKDIpfSwke2UuZGV0YWlsLnBvcy55LnRvRml4ZWQoMil9LCR7XHJcbiAgICAgIGUuZGV0YWlsLnBvcy56LnRvRml4ZWQoMilcclxuICAgIH1gO1xyXG4gIH1cclxuICBjb25zdCByb3RhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbicpO1xyXG4gIGlmIChyb3RhdGlvbilcclxuICAgIHJvdGF0aW9uLmlubmVyVGV4dCA9IGUuZGV0YWlsLnJvdGF0aW9uLnRvU3RyaW5nKCk7XHJcbn0pO1xyXG5cclxuYWRkT3ZlcmxheUxpc3RlbmVyKCdFbm1pdHlUYXJnZXREYXRhJywgKGUpID0+IHtcclxuICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFyZ2V0Jyk7XHJcbiAgaWYgKHRhcmdldClcclxuICAgIHRhcmdldC5pbm5lclRleHQgPSBlLlRhcmdldCA/IGUuVGFyZ2V0Lk5hbWUgOiAnLS0nO1xyXG4gIGNvbnN0IHRpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aWQnKTtcclxuICBpZiAodGlkKVxyXG4gICAgdGlkLmlubmVyVGV4dCA9IGUuVGFyZ2V0ID8gZS5UYXJnZXQuSUQudG9TdHJpbmcoMTYpIDogJyc7XHJcbiAgY29uc3QgdGRpc3RhbmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkaXN0YW5jZScpO1xyXG4gIGlmICh0ZGlzdGFuY2UpXHJcbiAgICB0ZGlzdGFuY2UuaW5uZXJUZXh0ID0gZS5UYXJnZXQgPyBlLlRhcmdldC5EaXN0YW5jZS50b1N0cmluZygpIDogJyc7XHJcbn0pO1xyXG5cclxuYWRkT3ZlcmxheUxpc3RlbmVyKCdvbkdhbWVFeGlzdHNFdmVudCcsIChfZSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwiR2FtZSBleGlzdHM6IFwiICsgZS5kZXRhaWwuZXhpc3RzKTtcclxufSk7XHJcblxyXG5hZGRPdmVybGF5TGlzdGVuZXIoJ29uR2FtZUFjdGl2ZUNoYW5nZWRFdmVudCcsIChfZSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwiR2FtZSBhY3RpdmU6IFwiICsgZS5kZXRhaWwuYWN0aXZlKTtcclxufSk7XHJcblxyXG5jb25zdCB0dHNFY2hvUmVnZXggPSBOZXRSZWdleGVzLmVjaG8oeyBsaW5lOiAndHRzOi4qPycgfSk7XHJcbmFkZE92ZXJsYXlMaXN0ZW5lcignTG9nTGluZScsIChlKSA9PiB7XHJcbiAgLy8gTWF0Y2ggXCIvZWNobyB0dHM6PHN0dWZmPlwiXHJcbiAgY29uc3QgbGluZSA9IHR0c0VjaG9SZWdleC5leGVjKGUucmF3TGluZSk/Lmdyb3Vwcz8ubGluZTtcclxuICBpZiAobGluZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgcmV0dXJuO1xyXG4gIGNvbnN0IGNvbG9uID0gbGluZS5pbmRleE9mKCc6Jyk7XHJcbiAgaWYgKGNvbG9uID09PSAtMSlcclxuICAgIHJldHVybjtcclxuICBjb25zdCB0ZXh0ID0gbGluZS5zbGljZShjb2xvbik7XHJcbiAgaWYgKHRleHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgdm9pZCBjYWxsT3ZlcmxheUhhbmRsZXIoe1xyXG4gICAgICBjYWxsOiAnY2FjdGJvdFNheScsXHJcbiAgICAgIHRleHQ6IHRleHQsXHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxuYWRkT3ZlcmxheUxpc3RlbmVyKCdvblVzZXJGaWxlQ2hhbmdlZCcsIChlKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYFVzZXIgZmlsZSAke2UuZmlsZX0gY2hhbmdlZCFgKTtcclxufSk7XHJcblxyXG52b2lkIGNhbGxPdmVybGF5SGFuZGxlcih7IGNhbGw6ICdjYWN0Ym90UmVxdWVzdFN0YXRlJyB9KTtcclxuIl0sIm5hbWVzIjpbImNvbWJhdGFudE1lbW9yeUtleXMiLCJsYXRlc3RMb2dEZWZpbml0aW9ucyIsIkdhbWVMb2ciLCJ0eXBlIiwibmFtZSIsInNvdXJjZSIsIm1lc3NhZ2VUeXBlIiwiZmllbGRzIiwidGltZXN0YW1wIiwiY29kZSIsImxpbmUiLCJzdWJGaWVsZHMiLCJjYW5Bbm9ueW1pemUiLCJmaXJzdE9wdGlvbmFsRmllbGQiLCJ1bmRlZmluZWQiLCJDaGFuZ2Vab25lIiwiaWQiLCJsYXN0SW5jbHVkZSIsIkNoYW5nZWRQbGF5ZXIiLCJwbGF5ZXJJZHMiLCJBZGRlZENvbWJhdGFudCIsImpvYiIsImxldmVsIiwib3duZXJJZCIsIndvcmxkSWQiLCJ3b3JsZCIsIm5wY05hbWVJZCIsIm5wY0Jhc2VJZCIsImN1cnJlbnRIcCIsImhwIiwiY3VycmVudE1wIiwibXAiLCJ4IiwieSIsInoiLCJoZWFkaW5nIiwiUmVtb3ZlZENvbWJhdGFudCIsIm93bmVyIiwiUGFydHlMaXN0IiwicGFydHlDb3VudCIsImlkMCIsImlkMSIsImlkMiIsImlkMyIsImlkNCIsImlkNSIsImlkNiIsImlkNyIsImlkOCIsImlkOSIsImlkMTAiLCJpZDExIiwiaWQxMiIsImlkMTMiLCJpZDE0IiwiaWQxNSIsImlkMTYiLCJpZDE3IiwiaWQxOCIsImlkMTkiLCJpZDIwIiwiaWQyMSIsImlkMjIiLCJpZDIzIiwiUGxheWVyU3RhdHMiLCJzdHJlbmd0aCIsImRleHRlcml0eSIsInZpdGFsaXR5IiwiaW50ZWxsaWdlbmNlIiwibWluZCIsInBpZXR5IiwiYXR0YWNrUG93ZXIiLCJkaXJlY3RIaXQiLCJjcml0aWNhbEhpdCIsImF0dGFja01hZ2ljUG90ZW5jeSIsImhlYWxNYWdpY1BvdGVuY3kiLCJkZXRlcm1pbmF0aW9uIiwic2tpbGxTcGVlZCIsInNwZWxsU3BlZWQiLCJ0ZW5hY2l0eSIsImxvY2FsQ29udGVudElkIiwiU3RhcnRzVXNpbmciLCJzb3VyY2VJZCIsImFiaWxpdHkiLCJ0YXJnZXRJZCIsInRhcmdldCIsImNhc3RUaW1lIiwicG9zc2libGVSc3ZGaWVsZHMiLCJibGFua0ZpZWxkcyIsIkFiaWxpdHkiLCJmbGFncyIsImRhbWFnZSIsInRhcmdldEN1cnJlbnRIcCIsInRhcmdldE1heEhwIiwidGFyZ2V0Q3VycmVudE1wIiwidGFyZ2V0TWF4TXAiLCJ0YXJnZXRYIiwidGFyZ2V0WSIsInRhcmdldFoiLCJ0YXJnZXRIZWFkaW5nIiwibWF4SHAiLCJtYXhNcCIsInNlcXVlbmNlIiwidGFyZ2V0SW5kZXgiLCJ0YXJnZXRDb3VudCIsIk5ldHdvcmtBT0VBYmlsaXR5IiwiTmV0d29ya0NhbmNlbEFiaWxpdHkiLCJyZWFzb24iLCJOZXR3b3JrRG9UIiwid2hpY2giLCJlZmZlY3RJZCIsImRhbWFnZVR5cGUiLCJzb3VyY2VDdXJyZW50SHAiLCJzb3VyY2VNYXhIcCIsInNvdXJjZUN1cnJlbnRNcCIsInNvdXJjZU1heE1wIiwic291cmNlWCIsInNvdXJjZVkiLCJzb3VyY2VaIiwic291cmNlSGVhZGluZyIsIldhc0RlZmVhdGVkIiwiR2FpbnNFZmZlY3QiLCJlZmZlY3QiLCJkdXJhdGlvbiIsImNvdW50IiwiSGVhZE1hcmtlciIsIk5ldHdvcmtSYWlkTWFya2VyIiwib3BlcmF0aW9uIiwid2F5bWFyayIsIk5ldHdvcmtUYXJnZXRNYXJrZXIiLCJ0YXJnZXROYW1lIiwiTG9zZXNFZmZlY3QiLCJOZXR3b3JrR2F1Z2UiLCJkYXRhMCIsImRhdGExIiwiZGF0YTIiLCJkYXRhMyIsImZpcnN0VW5rbm93bkZpZWxkIiwiTmV0d29ya1dvcmxkIiwiaXNVbmtub3duIiwiQWN0b3JDb250cm9sIiwiaW5zdGFuY2UiLCJjb21tYW5kIiwiTmFtZVRvZ2dsZSIsInRvZ2dsZSIsIlRldGhlciIsIkxpbWl0QnJlYWsiLCJ2YWx1ZUhleCIsImJhcnMiLCJOZXR3b3JrRWZmZWN0UmVzdWx0Iiwic2VxdWVuY2VJZCIsImN1cnJlbnRTaGllbGQiLCJTdGF0dXNFZmZlY3QiLCJqb2JMZXZlbERhdGEiLCJkYXRhNCIsImRhdGE1IiwiTmV0d29ya1VwZGF0ZUhQIiwiTWFwIiwicmVnaW9uTmFtZSIsInBsYWNlTmFtZSIsInBsYWNlTmFtZVN1YiIsIlN5c3RlbUxvZ01lc3NhZ2UiLCJwYXJhbTAiLCJwYXJhbTEiLCJwYXJhbTIiLCJTdGF0dXNMaXN0MyIsIlBhcnNlckluZm8iLCJnbG9iYWxJbmNsdWRlIiwiUHJvY2Vzc0luZm8iLCJEZWJ1ZyIsIlBhY2tldER1bXAiLCJWZXJzaW9uIiwiRXJyb3IiLCJOb25lIiwiTGluZVJlZ2lzdHJhdGlvbiIsInZlcnNpb24iLCJNYXBFZmZlY3QiLCJsb2NhdGlvbiIsIkZhdGVEaXJlY3RvciIsImNhdGVnb3J5IiwiZmF0ZUlkIiwicHJvZ3Jlc3MiLCJDRURpcmVjdG9yIiwicG9wVGltZSIsInRpbWVSZW1haW5pbmciLCJjZUtleSIsIm51bVBsYXllcnMiLCJzdGF0dXMiLCJJbkNvbWJhdCIsImluQUNUQ29tYmF0IiwiaW5HYW1lQ29tYmF0IiwiaXNBQ1RDaGFuZ2VkIiwiaXNHYW1lQ2hhbmdlZCIsIkNvbWJhdGFudE1lbW9yeSIsImNoYW5nZSIsInJlcGVhdGluZ0ZpZWxkcyIsInN0YXJ0aW5nSW5kZXgiLCJsYWJlbCIsIm5hbWVzIiwic29ydEtleXMiLCJwcmltYXJ5S2V5IiwicG9zc2libGVLZXlzIiwiUlNWRGF0YSIsImxvY2FsZSIsImtleSIsInZhbHVlIiwiU3RhcnRzVXNpbmdFeHRyYSIsIkFiaWxpdHlFeHRyYSIsImdsb2JhbEVmZmVjdENvdW50ZXIiLCJkYXRhRmxhZyIsIkNvbnRlbnRGaW5kZXJTZXR0aW5ncyIsInpvbmVJZCIsInpvbmVOYW1lIiwiaW5Db250ZW50RmluZGVyQ29udGVudCIsInVucmVzdHJpY3RlZFBhcnR5IiwibWluaW1hbEl0ZW1MZXZlbCIsInNpbGVuY2VFY2hvIiwiZXhwbG9yZXJNb2RlIiwibGV2ZWxTeW5jIiwiTnBjWWVsbCIsIm5wY0lkIiwibnBjWWVsbElkIiwiQmF0dGxlVGFsazIiLCJpbnN0YW5jZUNvbnRlbnRUZXh0SWQiLCJkaXNwbGF5TXMiLCJDb3VudGRvd24iLCJjb3VudGRvd25UaW1lIiwicmVzdWx0IiwiQ291bnRkb3duQ2FuY2VsIiwiQWN0b3JNb3ZlIiwiQWN0b3JTZXRQb3MiLCJTcGF3bk5wY0V4dHJhIiwicGFyZW50SWQiLCJ0ZXRoZXJJZCIsImFuaW1hdGlvblN0YXRlIiwiQWN0b3JDb250cm9sRXh0cmEiLCJwYXJhbTMiLCJwYXJhbTQiLCJBY3RvckNvbnRyb2xTZWxmRXh0cmEiLCJwYXJhbTUiLCJwYXJhbTYiLCJsb2dEZWZpbml0aW9uc1ZlcnNpb25zIiwiYXNzZXJ0TG9nRGVmaW5pdGlvbnMiLCJjb25zb2xlIiwiYXNzZXJ0IiwiVW5yZWFjaGFibGVDb2RlIiwiY29uc3RydWN0b3IiLCJsb2dEZWZpbml0aW9ucyIsInNlcGFyYXRvciIsIm1hdGNoRGVmYXVsdCIsIm1hdGNoV2l0aENvbG9uc0RlZmF1bHQiLCJmaWVsZHNXaXRoUG90ZW50aWFsQ29sb25zIiwiZGVmYXVsdFBhcmFtcyIsImluY2x1ZGUiLCJsb2dUeXBlIiwiT2JqZWN0Iiwia2V5cyIsInB1c2giLCJwYXJhbXMiLCJwcm9wIiwiaW5kZXgiLCJlbnRyaWVzIiwiaW5jbHVkZXMiLCJwYXJhbSIsImZpZWxkIiwib3B0aW9uYWwiLCJyZXBlYXRpbmciLCJyZXBlYXRpbmdLZXlzIiwiaXNSZXBlYXRpbmdGaWVsZCIsIkFycmF5IiwiaXNBcnJheSIsImUiLCJwYXJzZUhlbHBlciIsImRlZktleSIsInZhbGlkRmllbGRzIiwiUmVnZXhlcyIsInZhbGlkYXRlUGFyYW1zIiwiY2FwdHVyZSIsInRydWVJZlVuZGVmaW5lZCIsImZpZWxkS2V5cyIsInNvcnQiLCJhIiwiYiIsInBhcnNlSW50IiwibWF4S2V5U3RyIiwidG1wS2V5IiwicG9wIiwibGVuZ3RoIiwiZmllbGROYW1lIiwibWF4S2V5IiwiYWJpbGl0eU1lc3NhZ2VUeXBlIiwiYWJpbGl0eUhleENvZGUiLCJwcmVmaXgiLCJ0eXBlQXNIZXgiLCJ0b1N0cmluZyIsInRvVXBwZXJDYXNlIiwiZGVmYXVsdEhleENvZGUiLCJzbGljZSIsImhleENvZGUiLCJzdHIiLCJsYXN0S2V5Iiwia2V5U3RyIiwicGFyc2VGaWVsZCIsIm1pc3NpbmdGaWVsZHMiLCJKU09OIiwic3RyaW5naWZ5IiwiZmllbGREZWZhdWx0IiwiZGVmYXVsdEZpZWxkVmFsdWUiLCJmaWVsZFZhbHVlIiwicmVwZWF0aW5nRmllbGRzU2VwYXJhdG9yIiwicmVwZWF0aW5nQXJyYXkiLCJsZWZ0IiwicmlnaHQiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUNvbXBhcmUiLCJ3YXJuIiwibGVmdFZhbHVlIiwicmlnaHRWYWx1ZSIsImFub25SZXBzIiwiZm9yRWFjaCIsInBvc3NpYmxlS2V5IiwicmVwIiwiZmluZCIsImZpZWxkUmVnZXgiLCJ2YWwiLCJzb21lIiwidiIsIm1heWJlQ2FwdHVyZSIsInBhcnNlIiwiYnVpbGRSZWdleCIsImxvZ1ZlcnNpb24iLCJzdGFydHNVc2luZyIsImFiaWxpdHlGdWxsIiwiaGVhZE1hcmtlciIsImFkZGVkQ29tYmF0YW50IiwiYWRkZWRDb21iYXRhbnRGdWxsIiwicmVtb3ZpbmdDb21iYXRhbnQiLCJnYWluc0VmZmVjdCIsInN0YXR1c0VmZmVjdEV4cGxpY2l0IiwibG9zZXNFZmZlY3QiLCJ0ZXRoZXIiLCJ3YXNEZWZlYXRlZCIsIm5ldHdvcmtEb1QiLCJlY2hvIiwiZ2FtZUxvZyIsImRpYWxvZyIsIm1lc3NhZ2UiLCJnYW1lTmFtZUxvZyIsInN0YXRDaGFuZ2UiLCJjaGFuZ2Vab25lIiwibmV0d29yazZkIiwibmFtZVRvZ2dsZSIsIm1hcCIsInN5c3RlbUxvZ01lc3NhZ2UiLCJtYXBFZmZlY3QiLCJjb21iYXRhbnRNZW1vcnkiLCJzdGFydHNVc2luZ0V4dHJhIiwiYWJpbGl0eUV4dHJhIiwiY29udGVudEZpbmRlclNldHRpbmdzIiwibnBjWWVsbCIsImJhdHRsZVRhbGsyIiwiY291bnRkb3duIiwiY291bnRkb3duQ2FuY2VsIiwiYWN0b3JNb3ZlIiwiYWN0b3JTZXRQb3MiLCJzcGF3bk5wY0V4dHJhIiwiYWN0b3JDb250cm9sRXh0cmEiLCJhY3RvckNvbnRyb2xTZWxmRXh0cmEiLCJkZWZhdWx0VmFsdWUiLCJhbnlPZiIsIm5hbWVkQ2FwdHVyZSIsImVycm9yIiwiYXJncyIsImFueU9mQXJyYXkiLCJhcnJheSIsImVsZW0iLCJSZWdFeHAiLCJqb2luIiwiZmlyc3RBcmciLCJyZWdleHBTdHJpbmciLCJrQ2FjdGJvdENhdGVnb3JpZXMiLCJUaW1lc3RhbXAiLCJOZXRUaW1lc3RhbXAiLCJOZXRGaWVsZCIsIkxvZ1R5cGUiLCJBYmlsaXR5Q29kZSIsIk9iamVjdElkIiwiTmFtZSIsIkZsb2F0IiwibW9kaWZpZXJzIiwiZ2xvYmFsIiwibXVsdGlsaW5lIiwicmVwbGFjZSIsIm1hdGNoIiwiZ3JvdXAiLCJwYXJzZUdsb2JhbCIsInJlZ2V4IiwiZiIsImZ1bmNOYW1lIiwibWFnaWNUcmFuc2xhdGlvblN0cmluZyIsIm1hZ2ljU3RyaW5nUmVnZXgiLCJrZXlzVGhhdFJlcXVpcmVUcmFuc2xhdGlvbkFzQ29uc3QiLCJrZXlzVGhhdFJlcXVpcmVUcmFuc2xhdGlvbiIsImdhbWVMb2dDb2RlcyIsImFjdG9yQ29udHJvbFR5cGUiLCJzZXRBbmltU3RhdGUiLCJwdWJsaWNDb250ZW50VGV4dCIsImxvZ01zZyIsImxvZ01zZ1BhcmFtcyIsInRyYW5zUGFyYW1zIiwiZmlsdGVyIiwiayIsIm5lZWRzVHJhbnNsYXRpb25zIiwiTmV0UmVnZXhlcyIsImZsYWdUcmFuc2xhdGlvbnNOZWVkZWQiLCJzZXRGbGFnVHJhbnNsYXRpb25zTmVlZGVkIiwiZG9lc05ldFJlZ2V4TmVlZFRyYW5zbGF0aW9uIiwiZXhlYyIsImZhdGVEaXJlY3RvciIsImNlRGlyZWN0b3IiLCJpbkNvbWJhdCIsImNvbW1vbk5ldFJlZ2V4Iiwid2lwZSIsImNhY3Rib3RXaXBlRWNobyIsInVzZXJXaXBlRWNobyIsImJ1aWxkTmV0UmVnZXhGb3JUcmlnZ2VyIiwiaW5pdGVkIiwid3NVcmwiLCJ3cyIsInF1ZXVlIiwicnNlcUNvdW50ZXIiLCJyZXNwb25zZVByb21pc2VzIiwic3Vic2NyaWJlcnMiLCJzZW5kTWVzc2FnZSIsIm1zZyIsImNiIiwic2VuZCIsIndpbmRvdyIsIk92ZXJsYXlQbHVnaW5BcGkiLCJjYWxsSGFuZGxlciIsInByb2Nlc3NFdmVudCIsImluaXQiLCJzdWJzIiwic3ViIiwiZGlzcGF0Y2hPdmVybGF5RXZlbnQiLCJhZGRPdmVybGF5TGlzdGVuZXIiLCJldmVudCIsImNhbGwiLCJldmVudHMiLCJyZW1vdmVPdmVybGF5TGlzdGVuZXIiLCJsaXN0IiwicG9zIiwiaW5kZXhPZiIsInNwbGljZSIsImNhbGxPdmVybGF5SGFuZGxlckludGVybmFsIiwiX21zZyIsInJzZXEiLCJwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJkYXRhIiwicGFyc2VkIiwiY2FsbE92ZXJsYXlIYW5kbGVyT3ZlcnJpZGVNYXAiLCJjYWxsT3ZlcmxheUhhbmRsZXIiLCJjYWxsRnVuYyIsInNldE92ZXJsYXlIYW5kbGVyT3ZlcnJpZGUiLCJvdmVycmlkZSIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsImdldCIsImNvbm5lY3RXcyIsIldlYlNvY2tldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2ciLCJxIiwicHJvbWlzZUZ1bmNzIiwic2V0VGltZW91dCIsIndhaXRGb3JBcGkiLCJyZWFkeSIsIl9fT3ZlcmxheUNhbGxiYWNrIiwiaXRlbSIsImN1cnJlbnRab25lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVyVGV4dCIsInpvbmVJRCIsImRldGFpbCIsInBsYXllcklkIiwiY3VycmVudEhQIiwibWF4SFAiLCJjdXJyZW50TVAiLCJtYXhNUCIsImNwIiwiY3VycmVudENQIiwibWF4Q1AiLCJncCIsImN1cnJlbnRHUCIsIm1heEdQIiwiZGVidWciLCJkZWJ1Z0pvYiIsImpvYkluZm8iLCJqb2JEZXRhaWwiLCJ3aGl0ZU1hbmEiLCJibGFja01hbmEiLCJtYW5hU3RhY2tzIiwiYmVhc3QiLCJibG9vZCIsImRhcmtzaWRlTWlsbGlzZWNvbmRzIiwiZGFya0FydHMiLCJsaXZpbmdTaGFkb3dNaWxsaXNlY29uZHMiLCJjYXJ0cmlkZ2VzIiwiY29udGludWF0aW9uU3RhdGUiLCJvYXRoIiwic29uZ05hbWUiLCJsYXN0UGxheWVkIiwic29uZ1Byb2NzIiwic291bEdhdWdlIiwic29uZ01pbGxpc2Vjb25kcyIsImNvZGEiLCJmZWF0aGVycyIsImVzcHJpdCIsInN0ZXBzIiwiY3VycmVudFN0ZXAiLCJodXRvbk1pbGxpc2Vjb25kcyIsIm5pbmtpQW1vdW50IiwiYmxvb2RNaWxsaXNlY29uZHMiLCJsaWZlTWlsbGlzZWNvbmRzIiwiZXllc0Ftb3VudCIsImZpcnN0bWluZHNGb2N1cyIsInVtYnJhbFN0YWNrcyIsInVtYnJhbE1pbGxpc2Vjb25kcyIsInVtYnJhbEhlYXJ0cyIsInBvbHlnbG90IiwiZW5vY2hpYW4iLCJuZXh0UG9seWdsb3RNaWxsaXNlY29uZHMiLCJwYXJhZG94IiwibGlseVN0YWNrcyIsImxpbHlNaWxsaXNlY29uZHMiLCJibG9vZGxpbHlTdGFja3MiLCJhZXRoZXJmbG93U3RhY2tzIiwidHJhbmNlTWlsbGlzZWNvbmRzIiwiYXR0dW5lbWVudCIsImF0dHVuZW1lbnRNaWxsaXNlY29uZHMiLCJhY3RpdmVQcmltYWwiLCJ1c2FibGVBcmNhbnVtIiwibmV4dFN1bW1vbmVkIiwiZmFpcnlHYXVnZSIsImZhaXJ5U3RhdHVzIiwiZmFpcnlNaWxsaXNlY29uZHMiLCJoZWxkQ2FyZCIsImNyb3duQ2FyZCIsImFyY2FudW1zIiwiY2hha3JhU3RhY2tzIiwibHVuYXJOYWRpIiwic29sYXJOYWRpIiwiYmVhc3RDaGFrcmEiLCJoZWF0Iiwib3ZlcmhlYXRNaWxsaXNlY29uZHMiLCJiYXR0ZXJ5IiwiYmF0dGVyeU1pbGxpc2Vjb25kcyIsImxhc3RCYXR0ZXJ5QW1vdW50Iiwib3ZlcmhlYXRBY3RpdmUiLCJyb2JvdEFjdGl2ZSIsImtlbmtpIiwibWVkaXRhdGlvblN0YWNrcyIsInNldHN1IiwiZ2V0c3UiLCJrYSIsImFkZGVyc2dhbGwiLCJhZGRlcnNnYWxsTWlsbGlzZWNvbmRzIiwiYWRkZXJzdGluZyIsImV1a3Jhc2lhIiwic291bCIsInNocm91ZCIsImVuc2hyb3VkTWlsbGlzZWNvbmRzIiwibGVtdXJlU2hyb3VkIiwidm9pZFNocm91ZCIsInRvRml4ZWQiLCJyb3RhdGlvbiIsIlRhcmdldCIsInRpZCIsIklEIiwidGRpc3RhbmNlIiwiRGlzdGFuY2UiLCJfZSIsInR0c0VjaG9SZWdleCIsInJhd0xpbmUiLCJncm91cHMiLCJjb2xvbiIsInRleHQiLCJmaWxlIl0sInNvdXJjZVJvb3QiOiIifQ==