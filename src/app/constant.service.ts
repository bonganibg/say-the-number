import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor() { }


  static UNITS = new Map([
    ['1', 'one'],
    ['2', 'two'],
    ['3', 'three'],
    ['4', 'four'],
    ['5', 'five'],
    ['6', 'six'],
    ['7', 'seven'],
    ['8', 'eight'],
    ['9', 'nine'],
  ]);

  static TEENS = new Map([
    ['1', "eleven"],
    ['2', "twelve"],
    ['3', "thirteen"],
    ['4', "fourteen"],
    ['5', "fifteen"],
    ['6', "sixteen"],
    ['7', "seventeen"],
    ['8', "eighteen"],
    ['9', "nineteen"],
  ])

  static TENS = new Map([
    ['1', 'ten'],
    ['2', 'twenty'],
    ['3', 'thirty'],
    ['4', 'forty'],
    ['5', 'fifty'],
    ['6', 'sixty'],
    ['7', 'seventy'],
    ['8', 'eighty'],
    ['9', 'ninety'],
  ])

  static PLACE_VALUES: string[] =[
    "",
    "thousand",
    "million",
    "billion",
    "trillion"
  ]
}
