import { TBool } from '../types';

export const bools: TBool[] = [
    {
        id: 'enableSplit',
        description:
            'Voluptate aliquip consequat consequat labore id minim nisi irure aliquip.',
        edited: new Date().toISOString(),
        value: {
            RU: {
                Android: true,
                Appgalery: false,
                Rustore: true,
                IOS: true,
                Backend: true,
                'WBX-WEB': false,
            },
            AZ: {
                Android: false,
                Appgalery: true,
                Rustore: true,
                IOS: false,
                Backend: false,
                'WBX-WEB': true,
            },
            BY: undefined,
            KG: undefined,
            KZ: undefined,
            AM: undefined,
            UZ: undefined,
        },
        versions: {
            RU: undefined,
            AZ: undefined,
            BY: undefined,
            KG: undefined,
            KZ: undefined,
            AM: undefined,
            UZ: undefined
        }
    },
    {
        id: 'enableBalance',
        description:
            'Voluptate aliquip consequat consequat labore id minim nisi irure aliquip.',
        edited: new Date().toISOString(),
        value: {
            RU: undefined,
            AZ: {
                Android: false,
                Appgalery: true,
                Rustore: true,
                IOS: false,
                Backend: false,
                'WBX-WEB': true,
            },
            BY: {
                Android: true,
                Appgalery: false,
                Rustore: true,
                IOS: true,
                Backend: true,
                'WBX-WEB': false,
            },
            KG: undefined,
            KZ: undefined,
            AM: undefined,
            UZ: undefined,
        },
        versions: {
            RU: undefined,
            AZ: undefined,
            BY: undefined,
            KG: undefined,
            KZ: undefined,
            AM: undefined,
            UZ: undefined
        }
    },
    {
        id: 'enableSplit2',
        description:
            'Voluptate aliquip consequat consequat labore id minim nisi irure aliquip.',
        edited: new Date().toISOString(),
        value: {
            RU: {
                Android: false,
                Appgalery: true,
                Rustore: true,
                IOS: false,
                Backend: false,
                'WBX-WEB': true,
            },
            AZ: {
                Android: false,
                Appgalery: true,
                Rustore: true,
                IOS: false,
                Backend: false,
                'WBX-WEB': true,
            },
            BY: {
                Android: true,
                Appgalery: false,
                Rustore: true,
                IOS: true,
                Backend: true,
                'WBX-WEB': false,
            },
            KG: undefined,
            KZ: undefined,
            AM: undefined,
            UZ: undefined,
        },
        versions: {
            RU: {
                Android: [
                    {
                        fromVersion: '655000',
                        value: true,
                    }
                ],
                Appgalery: undefined,
                Rustore: undefined,
                IOS: undefined,
                Backend: undefined,
                'WBX-WEB': undefined,
            },
            AZ: undefined,
            BY: undefined,
            KG: undefined,
            KZ: undefined,
            AM: undefined,
            UZ: undefined
        },
    },
    {
        id: 'enableBalance2',
        description:
            'Voluptate aliquip consequat consequat labore id minim nisi irure aliquip.',
        edited: new Date().toISOString(),
        value: {
            RU: {
                Android: false,
                Appgalery: true,
                Rustore: true,
                IOS: false,
                Backend: false,
                'WBX-WEB': true,
            },
            AZ: {
                Android: false,
                Appgalery: true,
                Rustore: true,
                IOS: false,
                Backend: false,
                'WBX-WEB': true,
            },
            BY: {
                Android: true,
                Appgalery: false,
                Rustore: true,
                IOS: true,
                Backend: true,
                'WBX-WEB': false,
            },
            KG: undefined,
            KZ: undefined,
            AM: undefined,
            UZ: undefined,
        },
        versions: [],
    },
];
