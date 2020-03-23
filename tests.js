const chai = require('chai');
const expect = chai.expect;

const functions = require('./functions');

describe('Addition', () => {
    it('1 + 1 should be equal to 2', () => {
        expect(functions.addNumbers(1, 1)).to.equal(2);
    });
});