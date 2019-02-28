# removeHead(numItems, array): void

Removes `numItems` from beginning of array.

# removeTail(numItems, array): void

Removes `numItems` from end of array.

## Examples
```
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
removeHead(3, arr);
// arr is now [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

removeTail(3, arr);
// arr is now [4, 5, 6, 7, 8, 9, 10, 11]
```


## Installation
`npm i  @writetome51/array-remove-head-tail`

## Loading
```
// if using TypeScript:
import {removeHead, removeTail} from '@writetome51/array-remove-head-tail';

// if using ES5 JavaScript:
var removeHead = require('@writetome51/array-remove-head-tail').removeHead;
var removeTail = require('@writetome51/array-remove-head-tail').removeTail;
```