import chai from 'chai'
import Big from 'big'
const { assert } = chai

import average from './index'

export default () => {
  describe('Input', () => {
    it('should throw error with wrong input', () => {
      assert.throws(average.bind(null, null), Error, 'Input should be an array!')
    })
    it('should throw error with wrong value', () => {
      assert.throws(average.bind(null, [null]), Error, 'Each value should be a Big instance or NaN!')
    })
  })
  describe('output', () => {
    let input = ['53.7300', '53.8700', '53.8450', '53.8800', '54.0800', '54.1350', '54.4950', '54.3000', '54.3950', '54.1600']
    let output = '54.89'
    let result = average(input)
    it('should return a Big instance', () => {
      assert.isTrue(result instanceof Big)
    })
    it('should return correct values', () => {
      assert.isTrue(result.eq(out))
    })
  })
}
