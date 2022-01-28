const express = require('express');
const app = express();
const CustomError = require('./error');

const { convertAndValidateNumbers, getMean, getMedian, getMode } = require('./helpers');

app.get('/mean', function (req, res, next) {
  if (!req.query.nums) {
    throw new CustomError(`Error: The query must be a list of numbers separeted by commas.`, 400);
  }

  let numberString = req.query.nums.split(',');
  let numbers = convertAndValidateNumbers(numberString);

  if (numbers instanceof Error) {
    throw new CustomError(numbers.message);
  }

  let result = {
    operation: 'mean',
    result: getMean(numbers),
  }

  return res.send(result);
})

app.get('/median', function (req, res, next) {
  if (!req.query.nums) {
    throw new CustomError(`Error: The query must be a list of numbers separeted by commas.`, 400);
  }

  let numberString = req.query.nums.split(',');
  let numbers = convertAndValidateNumbers(numberString);

  if (numbers instanceof Error) {
    throw new CustomError(numbers.message);
  }

  let result = {
    operation: 'mean',
    result: getMedian(numbers),
  }

  return res.send(result);
})

app.get('/mode', function (req, res, next) {
  if (!req.query.nums) {
    throw new CustomError(`Error: The query must be a list of numbers separeted by commas.`, 400);
  }

  let numberString = req.query.nums.split(',');
  let numbers = convertAndValidateNumbers(numberString);

  if (numbers instanceof Error) {
    throw new CustomError(numbers.message);
  }

  let result = {
    operation: 'mean',
    result: getMode(numbers),
  }

  return res.send(result);
})

app.use(function (req, res, next) {
  const error = new CustomError(`Page not found`, 404);

  return next(error);
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message,
  });
})

app.listen(3000, function () {
  console.log(`Server starting on port 3000`);
})
