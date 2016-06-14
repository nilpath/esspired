var esspired = require('../src/index.js');

describe('Esspired #getItem', function() {

  afterEach(function() {
    window.sessionStorage.clear();
  });

  it('should get item from sessionStorage', function() {
    window.sessionStorage.setItem('one', 1);
    expect(esspired.getItem('one')).to.equal(1);
  });

  it('should return item as is if it can not parse content as json', function() {
    window.sessionStorage.setItem('one', 'cant_parse_as_json');
    expect(esspired.getItem('one')).to.equal('cant_parse_as_json');
  });

  it('should return entry as object if parsed json string do not contain data and expire properties', function() {
    const obj = { one: 1, two: "2" };
    window.sessionStorage.setItem('one', JSON.stringify(obj));
    expect(esspired.getItem('one')).to.deep.equal(obj);
  });

  it('should remove key if current time has passed the expiration time', function() {
    const expiration = new Date();
    expiration.setMinutes(expiration.getMinutes() - 30);
    const obj = { data: 1, expire: expiration };
    window.sessionStorage.setItem('one', JSON.stringify(obj));

    expect(esspired.getItem('one')).to.equal(null);
  });

  it('should return entry.data if current time have not passed the expiration time', function() {
    const expiration = new Date();
    expiration.setMinutes(expiration.getMinutes() + 30);
    const obj = { data: 1, expire: expiration };
    window.sessionStorage.setItem('one', JSON.stringify(obj));

    expect(esspired.getItem('one')).to.equal(1);
  });

  it('should return entry.data if expire equals -1', function() {
    const obj = { data: 1, expire: -1 };
    window.sessionStorage.setItem('one', JSON.stringify(obj));

    expect(esspired.getItem('one')).to.equal(1);
  });

});
