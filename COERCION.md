# Coercion

Coercion is just another word for "type conversion", and it is based on abstract operations.

## Abstract Operations

ToPrimitive, ToString, ToNumber, ToBoolean

### ToPrimitive

ToPrimitive(hint)

* Hint: "number"
  * Invoke *valueOf()*
  * Then invoke *toString()*

* Hint: "string"
  * Invoke *toString()*
  * Then invoke *valueOf()*

### ToString

ToString(object) -> ToPrimitive("string")

ToString(array):
* [] --> ""
* [1,2,3] --> "1,2,3"
* [null,undefined] --> ","
* [[[],[]],[]] --> ",,,"
* [...] --> "..."

ToString(object):
* {} --> "[object Object]"
* {a:2} --> "[object Object]"
* {toString(){return "X";}} --> "X"

You can override the toString method, for example, to include a JSON.stringify middleware on the operation.

### ToNumber

ToNumber(string):
* "" --> 0
* "0" --> 0
* "-0" --> -0
* " 009 " --> 9
* "3.14159" --> 3.14159
* "0." --> 0
* ".0" --> 0
* "." --> NaN
* "0xaf" --> 175 (hexidecimal)

ToNumber(boolean):
* false --> 0
* true --> 1
* null --> 0
* undefined --> NaN

ToNumber(object): 
* [""] --> 0
* ["0"] --> 0
* ["-0"] --> -0
* [null] --> 0
* [undefined] --> 0
* [1,2,3] --> NaN
* [[[]]] --> 0
* {...} --> NaN
* {valueOf() {return 3;}} --> 3

### ToBoolean

Anything that is not falsy is truthy. Basically, memorize the falsy list.

Falsy:
* 0,-0
* null
* NaN
* false
* undefined

Truthy:
* "foo"
* 23
* {a:1}
* [1,3]
* true
* function() {...}
* ...

### Boxing

```js
if (studentNameElem.value.length) {
  // code....
}
```

How is that in the above code we can access the 'length' property on a primitive? JavaScript is smart enough to optimize the primitive string by turning it into pseudo-object.

### Corner cases

Every language has type conversion corner cases.

In JS:
```js
Number( "" )       // 0
Number(" \t\n")    // 0
Number(null);      // 0
Number(undefined); // NaN 
Number([]);        // 0
Number([1,2,3]);   // NaN
Number([null]);    // 0
Number([undefined]); // 0
Number({});        // NaN

String(-0);        // "0"
String(null);      // "null"
String(undefined); // "undefined"
String([null]);    // ""
String([undefined]); // ""

Boolean(new Boolean(false)); // true
```

Also...
```js
1 < 2 < 3  // true

// OR

(1 < 2) < 3
(true) < 3
1 < 3;     // true
```