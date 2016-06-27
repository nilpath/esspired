var esspired = require('../src/index.js');

describe('Esspired #length', function() {

  afterEach(function() {
    window.sessionStorage.clear();
  });

  it('should return length (no items) in sessionStorage', function() {
    window.sessionStorage.setItem('one', 1);
    window.sessionStorage.setItem('two', 2);
    window.sessionStorage.setItem('three', 3);

    expect(esspired.length()).to.equal(3);
  });

});
