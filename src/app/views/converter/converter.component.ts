import { Component, OnInit } from '@angular/core';
import { NumberToWordService } from 'src/app/services/number-to-word.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  constructor(private numberToWord: NumberToWordService) { }

  enteredNumber = "";
  numberInWords = "";

  largeText = this.enteredNumber;
  smallText = this.numberInWords;

  valuesSwitched = false;

  ngOnInit(): void {
  }

  switchDisplayValues(){
    this.valuesSwitched = !this.valuesSwitched;
    this.updateDisplayValues();
  }

  getKeyPad(){
    return keyPad;
  }

  speakTheNumber(){
    const synth = window.speechSynthesis;
    const sayThis = new SpeechSynthesisUtterance(this.numberInWords);
    synth.speak(sayThis);
  }

  enterKeypadValue(input: any){

      if (input == undefined || input == null)
      return;

      if (input == -1)
        this.removeLastDigitFromEnteredNumber();
      else if (input == -2)
        this.enteredNumber = ""
      else if (this.enteredNumber.length < 15)
        this.appendDigitToNumber(input);

      this.updateDisplayValues();

  }

  removeLastDigitFromEnteredNumber(){
    if (this.enteredNumber.length > 0)
      this.enteredNumber = this.enteredNumber.substring(0, this.enteredNumber.length - 1);
  }

  appendDigitToNumber(digit: any){
    this.enteredNumber += digit;
  }

  private updateDisplayValues(){
    this.updateWordValue();
    if (!this.valuesSwitched)
    {
      this.largeText = this.enteredNumber;
      this.smallText = this.numberInWords;
    }
    else
    {
      this.smallText = this.enteredNumber;
      this.largeText = this.numberInWords;
    }
  }

  private updateWordValue(){
    if (this.enteredNumber == "")
      this.numberInWords = "";
    else
      this.numberInWords = this.numberToWord.sayNumber(parseInt(this.enteredNumber));
  }
}

const keyPad = [
  {
    display: "1",
    value: 1
  },
  {
    display: "2",
    value: 2
  },
  {
    display: "3",
    value: 3
  },
  {
    display: "4",
    value: 4
  },
  {
    display: "5",
    value: 5
  },
  {
    display: "6",
    value: 6
  },
  {
    display: "7",
    value: 7
  },
  {
    display: "8",
    value: 8
  },
  {
    display: "9",
    value: 9
  },
  {
    display: "0",
    value: 0
  },
  {
    display: "C",
    value: -2
  },
  {
    display: "del",
    value: -1
  },
]
