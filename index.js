'use strict'

const str2arr = (str) => {
  return arg
    .slice(1)
    .slice(0, arg.length-2)
    .split(/\s*,\s*/)
    .map(val => {
      let intVal = parseInt(val, 10)
      return intVal == val ? intVal : val
    })
}

module.exports = (args) => {
  let obj = {}, pair = ''
  args.forEach(arg => {
    // if previous arg was a '-a' type
    if (pair) {
      obj[pair] = arg
      pair = ''
    }
    // --key=value
    else if (arg[1] === '-') {
      const [key, val] = arg.replace(/^-{2}/, '').split('=')
      obj[key] = val
    } 
    // a '-e' or '-eaG' type
    else {
      arg.slice(1).split('').forEach(param => {
        obj[param] = true
      }) 
      pair = arg[arg.length-1]
    }
  })
  return obj
}

module.exports(process.argv.filter(arg => arg[0] !== '/'))
