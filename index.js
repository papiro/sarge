'use strict'

const util = require('youtil')

module.exports = (args) => {
  return args.map(arg => {
    switch (arg[0]) {
      case '[':
        return arg
              .slice(1)
              .slice(0, arg.length-2)
              .split(',')
              .map(val => {
                let intVal = parseInt(val, 10)
                return intVal == val ? intVal : val
              })
        break;
      case '{':
        return util.string2Object(arg)
        break;
      default:
        return arg
        break;
    }
  })
}
