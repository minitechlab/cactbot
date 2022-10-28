Options.Triggers.push({
    zoneId: ZoneId.TheSunkenTempleOfQarn,
    triggers: [
        {
            id: 'Sunken Quarn Doom',
            type: 'GainsEffect',
            netRegex: { effectId: 'D2' },
            condition: Conditions.targetIsYou(),
            alertText: (_data, _matches, output) => output.text(),
            outputStrings: {
                text: {
                    en: 'Step on Glowing Plate',
                    de: 'Auf der leuchtende Platte stehen',
                    fr: 'Marchez sur la plaque qui brille',
                    cn: '踩发光地板',
                    ko: '빛나는 발판 밟기',
                },
            },
        },
    ],
});