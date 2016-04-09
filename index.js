'use strict'

module.exports = () => {
  Array.prototype.map.call(arguments, arg => {
    switch (arg[1]) {
      case '[':
        return arg
              .slice(1)
              .slice(0, arg.length-1)
              .split(',')
        break;
      case '{':
        return JSON.parse(arg)
        break;
      default:
        return arg
        break;
    }
  })
}
