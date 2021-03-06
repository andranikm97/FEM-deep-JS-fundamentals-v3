// TODO: write the validation functions
const isValidName = (str) => {
  if (typeof str === 'string') {
    if (str.trim().length >= 3) {
      return true;
    }
  }

  return false;
};

const hoursAttended = (attended, length) => {
  const checkType = (param) => {
    return ['string', 'number'].includes(typeof param);
  };

  const checkWhole = (param) => {
    return !String(param).includes('.');
  };

  if (checkType(attended) && checkType(length)) {
    if (checkWhole(attended) && checkWhole(length)) {
      attended = Number(attended);
      length = Number(length);
      if (attended > 0 && length > 0) {
        return attended <= length;
      }
    }
  }

  return false;
};

// tests:
console.log('\nTESTING isValidName():');
console.log(isValidName('Frank') === true);
console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName('') === false);
console.log(isValidName('  \t\n') === false);
console.log(isValidName('X') === false);

console.log('\nTESTING hoursAtteneded():');
console.log(hoursAttended(6, 10) === true);
console.log(hoursAttended(6, '10') === true);
console.log(hoursAttended('6', 10) === true);
console.log(hoursAttended('6', '10') === true);
console.log(hoursAttended('', 6) === false);
console.log(hoursAttended(6, '') === false);
console.log(hoursAttended('', '') === false);
console.log(hoursAttended('foo', 6) === false);
console.log(hoursAttended(6, 'foo') === false);
console.log(hoursAttended('foo', 'bar') === false);
console.log(hoursAttended(null, null) === false);
console.log(hoursAttended(null, undefined) === false);
console.log(hoursAttended(undefined, null) === false);
console.log(hoursAttended(undefined, undefined) === false);
console.log(hoursAttended(false, false) === false);
console.log(hoursAttended(false, true) === false);
console.log(hoursAttended(true, false) === false);
console.log(hoursAttended(true, true) === false);
console.log(hoursAttended(10, 6) === false);
console.log(hoursAttended(10, '6') === false);
console.log(hoursAttended('10', 6) === false);
console.log(hoursAttended('10', '6') === false);
console.log(hoursAttended(6, 10.1) === false);
console.log(hoursAttended(6.1, 10) === false);
console.log(hoursAttended(6, '10.1') === false);
console.log(hoursAttended('6.1', 10) === false);
console.log(hoursAttended('6.1', '10.1') === false);
