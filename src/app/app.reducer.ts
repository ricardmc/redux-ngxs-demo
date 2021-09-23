export interface IDemoState {
  user: IUser,  
}

export interface IUser {
  id: number,
  name: String,
  language: LanguageEnum,
  currency: CurrencyEnum
};

export enum CurrencyEnum {
  EUR,
  DOL,
  GBP
}

export enum LanguageEnum {
  ENGLISH,
  SPANISH,
  CHINESE,
  FRENCH,
  GERMAN
}
