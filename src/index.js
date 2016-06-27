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

const hasSessionStorage = ("sessionStorage" in window && window.sessionStorage);
if(!hasSessionStorage) { console.warn("sessionStorage is not available"); }
module.exports = new Esspired();
