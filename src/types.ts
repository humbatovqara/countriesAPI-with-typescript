export interface Currency {
    code: string;
    name: string;
    symbol: string;
}

export interface Name {
    common: string;
    official: string;
}

export interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

export interface Translations {
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    hu: string;
}

export interface RegionalBloc {
    acronym: string;
    name: string;
    otherNames: string[];
    otherAcronyms: string[];
}

export interface CountryType {
    name: Name;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    region: string;
    continent: string;
    population: number;
    latlng: number[];
    demonym: string;
    area: number;
    gini: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    currencies: Currency[];
    languages: Language[];
    translations: Translations;
    flags: string[];
    regionalBlocs: RegionalBloc[];
    cioc: string;
    independent: boolean;
}