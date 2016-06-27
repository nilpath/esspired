'use strict';

class Esspired {

  constructor() {}

  length() {
    return window.sessionStorage.length;
  }

  key(n) {
    return window.sessionStorage.key(n);
  }

  getItem(key) {
    const item = window.sessionStorage.getItem(key);
    try {
      const entry = JSON.parse(item);

      /* return entry as is if not an esspired entry. */
      if( !entry.data && !entry.expire ) { return entry; }

      const { data, expire } = entry;
      const now = new Date();
      const expiration = new Date(expire);

      if(expire !== -1 && now.getTime() > expiration.getTime()) {
        window.sessionStorage.removeItem(key);
        return null;
      }

      return data;

    } catch (e) {
      /* return item as is if not an object. */
      return item;
    }
  }

  setItem(key, data, expire = -1) {
    const entry = { data, expire };
    return window.sessionStorage.setItem(key, JSON.stringify(entry));
  }

  removeItem(key) {
    return window.sessionStorage.removeItem(key);
  }

  clear() {
    return window.sessionStorage.clear();
  }

}

/* polyfill sessionStorage but it wont be persistant. */
class StoragePolyfill {

  constructor() {
    this._data  = {};
  }

  setItem(key, data) { return this._data[key] = String(data); }

	getItem(key) { return this._data.hasOwnProperty(key) ? this._data[key] : null; }

  removeItem(key) { return delete this._data[key]; }

  clear() { return this._data = {}; }

}

function hasSessionStorage() {
  try {
    window.sessionStorage.setItem('test', 'test');
    window.sessionStorage.removeItem('test');
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = hasSessionStorage() ? new Esspired() : new StoragePolyfill();
