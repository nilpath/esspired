var esspired = require('../src/index.js');

describe('Esspired #setItem', function() {

  afterEach(function() {
    window.sessionStorage.clear();
  });

  it('should store item in sessionStorage', function() {
    expect(window.sessionStorage.getItem('one')).to.equal(null);
    esspired.setItem('one', 1);
    expect(window.sessionStorage.getItem('one')).to.not.be.null;
  });

  it('should store item as an entry', function() {
    const key = 'one';
    const data = { 'key': 1 };
    const expire = new Date();

    esspired.setItem(key, data, expire);

    expect(window.sessionStorage.getItem(key)).to.equal(JSON.stringify({ data, expire }));
  });

  it('should overwrite item if it already exists', function() {
    const key = 'one';
    const data = { 'key': 1 };
    const expire = new Date();
    esspired.setItem(key, data, expire);
    const newExpire = new Date();

    expect(window.sessionStorage.getItem(key)).to.equal(JSON.stringify({ data, expire }));
    esspired.setItem(key, data, newExpire);
    expect(window.sessionStorage.getItem(key)).to.equal(JSON.stringify({ data, expire: newExpire }));
  });

  it('should set expire on entry to -1 if expire is not defined', function() {
    const key = 'one';
    const data = { 'key': 1 };

    esspired.setItem(key, data);

    expect(window.sessionStorage.getItem(key)).to.equal(JSON.stringify({ data, expire: -1 }));
  });
});
