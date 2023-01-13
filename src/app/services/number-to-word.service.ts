import { Injectable } from '@angular/core';
import { ConstantService } from '../constant.service';

@Injectable({
  providedIn: 'root'
})
export class NumberToWordService {

  constructor() { }

  // Breaks the number down into a reversed list of hundreds
  // Gets the name for each set of hundreds
  // Adds a name (thousand, million, billion) for each position in the hundreds array
  // returns the number as a word
  sayNumber(input: number): string{
    let arrayOfHundreds: string[] = this.convertNumberToArrayOfHundreds(input);
    let output = "";

    if (arrayOfHundreds.length > 1)
      output = this.getNumberInWordsFromArray(arrayOfHundreds);
    else
      output = parseInt(arrayOfHundreds[0]) == 0 ? "zero" :
               this.getValueAsWord(arrayOfHundreds[0]);

    return `${output.charAt(0).toUpperCase()}${output.substring(1)}.`;
  }

  // breaks down the number in reverse order, into an array where each element has a maximum length of 3
  convertNumberToArrayOfHundreds(input: number): string[]{
    let number: string = input.toString();
    let output: string[] = [];

    while(number.length > 3){
      let value = this.getLastThreeDigits(number);
      number = number.substring(0,number.length - 3);
      output.push(value);
    }

    output.push(number);
    return output;
  }

  private getLastThreeDigits(input: string): string{
    let startIndex = input.length - 3;
    return input.substring(startIndex)
  }

  private getNumberInWordsFromArray(input: string[]): string{
    let output = "";

    for(let i = input.length - 1; i >= 0; i--)
    {
      let value = this.getValueAsWord(input[i]);
      if (value !== '')
      {
        if (i == 0 && parseInt(input[0]) < 100)
          output += ` and ${value}`
        else
          output += `, ${value} ${ ConstantService.PLACE_VALUES[i]}`;
      }
    }
    output = `${output.substring(2).trim()}`;

    return output;
  }

  getValueAsWord(input: string): string{
    let output = ["","",""];

    if (input.length !== 3)
      input = this.getThreeDigitValue(input);

    for(let i = 0; i < 3; i++)
    {
      if (input[i] !== '0'){
        // If the last 2 digits make a teen number, set the output value at the tens index to
        // the teen value and exit the loop
        if (i == 1 && input[i] == '1' && input[i+1] !== '0'){
          output[i] = ConstantService.TEENS.get(input[i+1]) || "";
          break;
        }
        else
          output[i] = this.getWordForDigitAtPosition(input[i], i);
      }
    }

    return this.joinWordsInList(output);
  }

  private getThreeDigitValue(input: string): string{
    while(input.length !== 3){
      input = '0' + input;
    }
    return input;
  }

  private getWordForDigitAtPosition(digit: string, index: number): string{
    switch(index)
    {
      case 0: return ConstantService.UNITS.get(digit) + " hundred" || "";
      case 1: return ConstantService.TENS.get(digit) || "";
      case 2: return ConstantService.UNITS.get(digit) || "";
    }
    return "";
  }

  private joinWordsInList(input: string[]): string{
    let output = "";

    if (input[1] == '' && input[2] == '')
      return input[0];

    if (input[0] !== '')
      output += input[0] + " and ";

    return output + `${input[1]} ${input[2]}`.replace(/ +(?= )/g, '').trim();
  }
}
