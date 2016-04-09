var expect = require('livitytest').expect
,   p = require('../index')

,   args = [
  [
    'test'
  , 'test'
  , 1
  ]
  ,
  [
    '[1, 2, 3]'
  , '[one, two, three]'
  , '{one: 1, two: 2, three: 3}'
  ]
]

expect(p(args[0])).toEqual(['test', 'test', 1])

expect(p(args[1])).toEqual([
  [1, 2, 3]
, ['one', 'two', 'three']
, {
    one: 1,
    two: 2,
    three: 3
  }
])
