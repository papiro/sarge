'use strict'

const util = require('youtil')

module.exports = (args) => {
  return args.map(arg => {
    switch (arg[0]) {
      case '[':
        return arg
              .slice(1)
              .slice(0, arg.length-2)
              .split(/\s*,\s*/)
              .map(val => {
                let intVal = parseInt(val, 10)
                return intVal == val ? intVal : val
              })
        break;
      case '{':
        return util.JSONparse(arg)
        break;
      default:
        return arg
        break;
    }
  })
}
