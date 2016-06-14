# Esspired
> session storage with an expiration

this library extends the sessionStorage to allow adding expiration dates to sessionStorage entries.

## Installing
```
npm install --save esspired
```

## Example

```
const storage = require('esspired');

// setItem that expires after 30 minutes.
const expire = new Date();
expire.setMinutes(expire.getMinutes() + 30);

storage.setItem('fruit', ['banana', 'orange', 'apple'], expire);

// getItem
const fruit = storage.getItem('fruit');
```

## API

Esspired implements the same API as the regular session storage but with some minor modifications.

- `esspired.key(n)` - returns the nth key in sessionStorage.

- `esspired.getItem(key)` - returns the item stored for a specified key. Returns null if it have expired or do not exist.

- `esspired.setItem(key, data[, expire])` - stores data values for a given key in sessionStorage. Optional expire timestamp can be given otherwise it works like regular sessionStorage

- `esspired.removeItem(key)` - removes item with given key  from sessionStorage.

- `esspired.clear()` - clears sessionStorage of all entries.
