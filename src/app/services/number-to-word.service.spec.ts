import { TestBed } from '@angular/core/testing';

import { NumberToWordService } from './number-to-word.service';

describe('NumberToWordService', () => {
  let service: NumberToWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberToWordService);
  });

  it('should return correct value', () => {
    let actual = service.sayNumber(0);
    expect(actual).toEqual("Zero.");
  })
  it('should return correct value', () => {
    let actual = service.sayNumber(11);
    expect(actual).toEqual("Eleven.");
  })
  it('should return correct value', () => {
    let actual = service.sayNumber(14);
    expect(actual).toEqual("Fourteen.");
  })
  it('should return correct value', () => {
    let actual = service.sayNumber(15);
    expect(actual).toEqual("Fifteen.");
  })
  it('should return correct value', () => {
    let actual = service.sayNumber(43);
    expect(actual).toEqual("Forty three.");
  })
  it('should return correct value', () => {
    let actual = service.sayNumber(50);
    expect(actual).toEqual("Fifty.");
  })
  it('should return correct value', () => {
    let actual = service.sayNumber(1001);
    expect(actual).toEqual("One thousand and one.");
  })
  it('should return correct value', () => {
    let actual = service.sayNumber(20000);
    expect(actual).toEqual("Twenty thousand.");
  })
  it('should return correct value', () => {
    let actual = service.sayNumber(1033286);
    expect(actual).toEqual("One million, thirty three thousand, two hundred and eighty six.");
  })
  it('should return correct value', () => {
    let actual = service.sayNumber(12000013);
    expect(actual).toEqual("Twelve million and thirteen.");
  })
  it('should return correct value', () => {
    let actual = service.sayNumber(90376000010012);
    expect(actual).toEqual("Ninety trillion, three hundred and seventy six billion, ten thousand and twelve.");
  })

  // Convert number to array of hundreds
  it('should create a string array where each element has a maximum of 3 digits', () => {
    let inputs = [11,1043283,90376000010012];

    inputs.forEach(input => {
      let actual = service.convertNumberToArrayOfHundreds(input);

      actual.forEach(output => {
        expect(output.length).toBeLessThanOrEqual(3);
      });
    });

  });

  // Convert number to array of hundreds
  it('should return the correct values in reverse order', () => {

    let testData = [
      {
        input: 11,
        expected: ["11"]
      },
      {
        input: 1043283,
        expected: ["283","043","1"]
      },
      {
        input: 90376000010012,
        expected: ["012","010","000","376","90"]
      }
    ]

    testData.forEach(data => {
      let actual = service.convertNumberToArrayOfHundreds(data.input);
      expect(actual).toEqual(data.expected);
    });
  })

  it('should print the hundred value and the tenth value ending with zero', () => {

    let testData = [
      {
        input: '560',
        expected: "five hundred and sixty"
      },
      {
        input: '820',
        expected: "eight hundred and twenty"
      },
      {
        input: '910',
        expected: "nine hundred and ten"
      }
    ]

    testData.forEach(data => {
      let actual = service.getValueAsWord(data.input);
      expect(actual).toEqual(data.expected);
    });
  })

  it('should print the hundred and tenth value ending with a one and above ', () => {
    let testData = [
      {
        input: '565',
        expected: "five hundred and sixty five"
      },
      {
        input: '822',
        expected: "eight hundred and twenty two"
      },
      {
        input: '996',
        expected: "nine hundred and ninety six"
      }
    ]

    testData.forEach(data => {
      let actual = service.getValueAsWord(data.input);
      expect(actual).toEqual(data.expected);
    });
  })

  it('should print out ten or a teen value if the tenth digit is 1', () => {
    let testData = [
      {
        input: '516',
        expected: "five hundred and sixteen"
      },
      {
        input: '811',
        expected: "eight hundred and eleven"
      },
      {
        input: '912',
        expected: "nine hundred and twelve"
      },
      {
        input: '105',
        expected: "one hundred and five"
      }
    ]

    testData.forEach(data => {
      let actual = service.getValueAsWord(data.input);
      expect(actual).toEqual(data.expected);
    });
  })

  it('should leave out \'hundred and\' if input is less than 100', () => {
    let testData = [
      {
        input: '12',
        expected: "twelve"
      },
      {
        input: '2',
        expected: "two"
      },
      {
        input: '95',
        expected: "ninety five"
      }
    ]

    testData.forEach(data => {
      let actual = service.getValueAsWord(data.input);
      expect(actual).toEqual(data.expected);
    });
  })

  it('should leave out \'and\' if the number ends with 2 \'0s\'', () => {
    let input = '100';
    let expected = 'one hundred';

    let actual = service.getValueAsWord(input);
    expect(actual).toEqual(expected);
  })

  it('should return an empty string if there are no numbers', () => {
    let input = '000';
    let expected = '';

    let actual = service.getValueAsWord(input);

    expect(actual).toEqual(expected);
  })

});
