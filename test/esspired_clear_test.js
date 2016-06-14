var esspired = require('../src/index.js');

describe('Esspired #clear', function() {

  afterEach(function() {
    window.sessionStorage.clear();
  });

  it('should clear sessionStorage of content', function() {
    window.sessionStorage.setItem('one', 1);
    window.sessionStorage.setItem('two', 2);
    window.sessionStorage.setItem('three', 3);

    expect(window.sessionStorage.length).to.equal(3);
    esspired.clear();
    expect(window.sessionStorage.length).to.equal(0);
  });

});
