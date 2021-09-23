import { Pipe, PipeTransform } from '@angular/core';
import {CurrencyEnum, LanguageEnum } from '../app.reducer';

@Pipe({name: 'customCurrency'})
export class CustomCurrencyPipe implements PipeTransform {
  transform(value: number): string {
    return CurrencyEnum[value].valueOf();
  }
}
