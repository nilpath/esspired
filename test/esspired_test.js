var esspired = require('../src/index.js');

describe('Esspired', function() {

  it('should return an instance of Esspired', function() {
    expect(esspired).to.not.be.undefined;
  });

  it('should have a method key', function() {
    expect(esspired.key).to.not.be.undefined;
    expect(esspired.key).to.be.a('function');
  });

  it('should have a method setItem', function() {
    expect(esspired.setItem).to.not.be.undefined;
    expect(esspired.setItem).to.be.a('function');
  });

  it('should have a method getItem', function() {
    expect(esspired.getItem).to.not.be.undefined;
    expect(esspired.getItem).to.be.a('function');
  });

  it('should have a method removeItem', function() {
    expect(esspired.removeItem).to.not.be.undefined;
    expect(esspired.removeItem).to.be.a('function');
  });

  it('should have a method clear', function() {
    expect(esspired.clear).to.not.be.undefined;
    expect(esspired.clear).to.be.a('function');
  });
});
