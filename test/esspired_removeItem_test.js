var esspired = require('../src/index.js');

describe('Esspired #removeItem', function() {

  afterEach(function() {
    window.sessionStorage.clear();
  });

  it('should remove the item for a given key', function() {
    window.sessionStorage.setItem('itemToRemove', 'longvalue');

    expect(window.sessionStorage.getItem('itemToRemove')).to.equal('longvalue');
    esspired.removeItem('itemToRemove');
    expect(window.sessionStorage.getItem('itemToRemove')).to.equal(null);
  });

});
