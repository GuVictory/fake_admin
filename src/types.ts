export type TLocale = 'RU' | 'AZ' | 'BY' | 'KG' | 'KZ' | 'AM' | 'UZ';
export type TPlatform =
    | 'Android'
    | 'Appgalery'
    | 'Rustore'
    | 'IOS'
    | 'Backend'
    | 'WBX-WEB';
export type TEnv = 'PROD' | 'STAG';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TAny = any;

export type TConfigAction =
    | 'edited'
    | 'creared'
    | 'deleted'
    | 'rename'
    | 'changeDescription';

export type TConfigData = {
    flags: TBool[];
    texts: TText[];
    services: TService[];
    numbers: TNumber[];
    objects: TObject[];
    ranges: TRange[];
};

export type TConfigEdits = {
    flags: TEdit<boolean>[];
    texts: TEdit<string>[];
    services: TEdit<string>[];
    numbers: TEdit<number>[];
    objects: TEdit<Record<string, TAny>>[];
    ranges: TEdit<TRangeView[]>[];
};

export type TConfig = {
    data: TConfigData;
    version: string;
    env: TEnv;
};

export type TVersions<T> = {
    fromVersion: string;
    value: T;
};

export type TBool = {
    id: string;
    description: string;
    edited: string;
    value: Record<TLocale, Record<TPlatform, boolean| undefined> | undefined>;
    versions: Record<
        TLocale,
        Record<TPlatform, TVersions<boolean>[]| undefined> | undefined
    >;
};

export type TEdit<T> = {
    id: string;
    action: TConfigAction;
    newDescription?: string;
    newId?: string;
    newValues?: Record<TLocale, Record<TPlatform, T| undefined> | undefined>;
    newVersions?: Record<
        TLocale,
        Record<TPlatform, TVersions<T>[]| undefined> | undefined
    >;
};

export type TText = {
    id: string;
    description: string;
    edited: string;
    value: Record<TLocale, Record<TPlatform, string| undefined> | undefined>;
    versions: Record<
        TLocale,
        Record<TPlatform, TVersions<string>[]| undefined> | undefined
    >;
};

export type TService = {
    id: string;
    description: string;
    edited: string;
    value: Record<TLocale, Record<TPlatform, string| undefined> | undefined>;
    versions: Record<
        TLocale,
        Record<TPlatform, TVersions<string>[]| undefined> | undefined
    >;
};

export type TNumber = {
    id: string;
    description: string;
    edited: string;
    value: Record<TLocale, Record<TPlatform, number | undefined> | undefined>;
    versions: Record<
        TLocale,
        Record<TPlatform, TVersions<number>[]| undefined> | undefined
    >;
};

export type TObject = {
    id: string;
    description: string;
    edited: string;
    value: Record<TLocale, Record<TPlatform, Record<string, TAny> | undefined> | undefined>;
    versions: Record<
        TLocale,
        Record<TPlatform, TVersions<Record<string, TAny>>[]| undefined> | undefined
    >;
};

export type TRangeView = {
    fromId: string;
    toId: string;
};

export type TRange = {
    id: string;
    description: string;
    edited: string;
    value: Record<TLocale, Record<TPlatform, TRangeView[] | undefined> | undefined>;
    versions: Record<
        TLocale,
        Record<TPlatform, TVersions<TRangeView[]>[]| undefined> | undefined
    >;
};
