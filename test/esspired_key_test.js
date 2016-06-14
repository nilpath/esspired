var esspired = require('../src/index.js');

describe('Esspired #key', function() {

  afterEach(function() {
    window.sessionStorage.clear();
  });

  it('should return key at given position', function() {
    window.sessionStorage.setItem('one', 1);
    window.sessionStorage.setItem('two', 2);
    window.sessionStorage.setItem('three', 3);

    expect(esspired.key(1)).to.equal('one');
    expect(esspired.key(2)).to.equal('two');
    expect(esspired.key(0)).to.equal('three');
  });

  it('should return null if not key at given position', function() {
    expect(esspired.key(10)).to.equal(null);
  });

});
