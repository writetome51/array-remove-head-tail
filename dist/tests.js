"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var removeHead_1 = require("./privy/removeHead");
var removeTail_1 = require("./privy/removeTail");
var arrays_match_1 = require("@writetome51/arrays-match");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var errorsTriggered = 0;
var errorTriggered = false;
// Test 1: Make sure errors are triggered if incorrect parameter types are passed.
try {
    removeHead_1.removeHead();
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeHead_1.removeHead('');
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeHead_1.removeHead('', []);
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeHead_1.removeHead([], '');
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeHead_1.removeHead(1.2, arr);
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeHead_1.removeHead(-1, arr);
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeHead_1.removeHead(0, []);
}
catch (e) {
    ++errorsTriggered;
}
if (errorsTriggered === 7)
    console.log('test 1 passed');
else
    console.log('test 1 failed');
// Test 2:  same as above, but now for removeTail().
errorsTriggered = 0;
try {
    removeTail_1.removeTail();
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeTail_1.removeTail('');
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeTail_1.removeTail('', []);
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeTail_1.removeTail([], '');
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeTail_1.removeTail(1.2, arr);
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeTail_1.removeTail(-1, arr);
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeTail_1.removeTail(0, []);
}
catch (e) {
    ++errorsTriggered;
}
if (errorsTriggered === 7)
    console.log('test 2 passed');
else
    console.log('test 2 failed');
// Test 3: Make sure function removes only the items asked for:
removeHead_1.removeHead(1, arr);
if (arrays_match_1.arraysMatch([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], arr))
    console.log('test 3 passed');
else
    console.log('test 3 failed');
// Test 4: same as above, but for removeTail():
removeTail_1.removeTail(1, arr);
if (arrays_match_1.arraysMatch([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], arr))
    console.log('test 4' +
        ' passed');
else
    console.log('test 4 failed');
// Test 5: Make sure function removes only the items asked for:
removeHead_1.removeHead(3, arr);
if (arrays_match_1.arraysMatch([5, 6, 7, 8, 9, 10, 11, 12, 13], arr))
    console.log('test' +
        ' 5 passed');
else
    console.log('test 5 failed');
// Test 6: same as above, but for removeTail():
removeTail_1.removeTail(3, arr);
if (arrays_match_1.arraysMatch([5, 6, 7, 8, 9, 10], arr))
    console.log('test 6 passed');
else
    console.log('test 6 failed');
// Test 7: Make sure function can't remove higher number than array.length:
errorTriggered = false;
try {
    removeHead_1.removeHead(7, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 7 passed');
else
    console.log('test 7 failed');
// Test 8: same as above, but for removeTail():
errorTriggered = false;
try {
    removeTail_1.removeTail(7, arr);
    console.log(arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 8 passed');
else
    console.log('test 8 failed');
