const capitalizeFirstLetter = require('./capitalizeFirstLetter')
const arrayAverage = require('./arrayAverage')
const capitalizeString = require('./capitalizeString')
const roundNumber = require('./roundNumber')
const getCurrentTimestamp = require('./getCurrentTimestamp')

module.exports = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }