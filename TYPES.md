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

## Undefined vs. undeclared

*Undefined* - there is definitely a variable, but it has no value just yet.
*Undeclared* - the variable does not exist in any scope that JS has access to.

* *unitialized* - variable was created but unitialized

## Special Values 

### NaN
Type: Number (invalid)
Literally: "not a number". But, it really is an invalid number.

```javascript
var myage = Number("0o46");    // 38
var myNextAge = Number("39");  // 39
var myCatsAge = Number("n/a"); // NaN
myAge - "my son's age";        // NaN

myCatsAge === myCatsAge;       // false, because IEEE said NaN does not equal to each other

// Pre-ES6
isNaN(myAge);                  // false
isNaN(myCatsAge);              // true
isNaN("my son's age");         // true, because isNaN first coerces the value into NaN and then checks if it is NaN

// ES6
Number.isNaN(myCatsAge);       // true
Number.isNaN("my son's age");  // false, this is a new ES6 operation that does not coerce into NaN, therefore returns reasonable result
```

### Negative Zero

```javascript
var trendRate = 0;
trendRate === -0;       // true

trendRate.toString();   // "0"
trendRate === 0;        // true
trendRate < 0;          // false
trendRate > 0;          // false

Object.is(trendRate, -0);   // true
Object.is(trendRate, 0);    // false
```


## Fundamental Objects (Built-In Object, Native Functions)

Always use the **new** keyword with the following:
* Object()
* Array()
* Function()
* Date()
* RegExp()
* Error()

*Don't* use **new** with:
* String()
* Number()
* Boolean()

```js
var yesterday = new Date("March 6, 2019");
yesterday.toUTCString();
// "Wed, 06 Mar 2019 06:00:00 GMT"

var gpa = String(college.GPA);
// "3.8"
```
