import { removeHead } from './index.js';
import { removeTail } from './index.js';
import { arraysMatch } from '@writetome51/arrays-match';
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let errorsTriggered = 0;
let errorTriggered = false;


// Test 1: Make sure errors are triggered if incorrect parameter types are passed.
try {
    removeHead();
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeHead('');
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeHead('', []);

}
catch (e) {
    ++errorsTriggered;
}
try {
    removeHead([], '');
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeHead(1.2, arr);
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeHead(-1, arr);
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeHead(0, []);
}
catch (e) {
    ++errorsTriggered;
}
if (errorsTriggered === 7) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2:  same as above, but now for removeTail().
errorsTriggered = 0;
try {

    removeTail();
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeTail('');
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeTail('', []);
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeTail([], '');
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeTail(1.2, arr);
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeTail(-1, arr);
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeTail(0, []);
}
catch (e) {
    ++errorsTriggered;
}
if (errorsTriggered === 7) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3: Make sure function removes only the items asked for:
removeHead(1, arr);
if (arraysMatch([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], arr)) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4: same as above, but for removeTail():
removeTail(1, arr);
if (arraysMatch([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], arr)) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5: Make sure function removes only the items asked for:
removeHead(3, arr);
if (arraysMatch([5, 6, 7, 8, 9, 10, 11, 12, 13], arr)) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 6: same as above, but for removeTail():
removeTail(3, arr);
if (arraysMatch([5, 6, 7, 8, 9, 10], arr)) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7: Make sure function can't remove higher number than array.length:
errorTriggered = false;
try {
    removeHead(7, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 FAILED');


// Test 8: same as above, but for removeTail():
errorTriggered = false;
try {
    removeTail(7, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered) console.log('test 8 passed');
else console.log('test 8 FAILED');


