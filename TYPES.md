# Types

"In JavaScript, everything is an object"...**false** (*false* is not an object :) )

## Primitive Types
*Type* - a set of intrinsic characteristics that can signify a behavior of a value in programming situations.

In JS, there are several primitive types (these are just some of them):
* undefined
* string
* number
* boolean
* object
* symbol

And what about these...
* undeclared?
* null?
* function? (subtype of object)
* array? (subtype of object)
* bigint?

'Undefined' is not an empty type. It is a value of type undefined, with no value yet.

## The `typeof` operator

Always returns a string!

```javascript
var v;
typeof v;   // "undefined"
v = "1";
typeof v;   // "string"
v = 2;
typeof v;   // "number"
v = true;
typeof v;   // "boolean"
v = {};
typeof v;   // "object"
v = [];
typeof v;   // "array"
v = Symbol();
typeof v;   // "symbol"

var v = null;
typeof v;   // "object"
var v = function(){};
typeof v;   // "function"
```