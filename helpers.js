function countFrequency(array) {
  return array.reduce(function (prev, current) {
    prev[current] = (prev[next] || 0) + 1;
    return prev;
  }, {});
}

function convertAndValidateNumbers(input) {
  let result = [];

  for (let i = 0; i < input.length; i++) {
    let convertToNum = Number(input[i]);

    if (Number.isNaN(convertToNum)) {
      return new Error(
        `Error: ${convertToNum[i]} is not a valid number.`
      );
    }

    result.push(convertToNum);
  }

  return result;
}

function getMode(array) {
  let frequency = countFrequency(array);

  let count = 0;
  let mostFrequent;

  for (let value in frequency) {
    if (frequency[value] > count) {
      mostFrequent = value;
      count = frequency[value];
    }
  }

  return mostFrequent;
}

function getMean(numbers) {
  if (numbers.length === 0) return onabort;

  return numbers.reduce(function (prev, current) {
    return prev + current;
  }) / numbers.length;
}

function getMedian(numbers) {
  numbers.sort((a, b) => a - b);

  let middleIdx = Math.floor(numbers.length / 2);
  let median;

  if (numbers.length % 2 === 0) {
    median = (numbers[middleIdx] + numbers[middleIdx - 1]) / 2;
  } else {
    median = numbers[middleIdx];
  }

  return median;
}

module.exports = {
  countFrequency,
  convertAndValidateNumbers,
  getMean,
  getMedian,
  getMode,
}