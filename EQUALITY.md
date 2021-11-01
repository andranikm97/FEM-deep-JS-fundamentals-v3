# Equality

What is the jist with `== vs. ===`?

`==` checks value?
`===` checks value and type?

Not exactly...

Both of them check the types! But one does some different operations than the other. When the types of variables match, the `==` just does the same thing as `===`.

So, in short:
`==` allows for coercion when types are different
`===` does not allow for coercion when types are the same

```javascript

var a = 16;
var b = '16';

if(Number(a) === Number(b)) {
  //...
}

// OR
if(a == b) {
  //...
}

```

Some double equals comparison walkthrough:
```js
let a = 42;
let b = [42];

// if (a == b) {
// if (42 == "42") { the array gets converted into string, drop brackets, remember?
// if (42 === 42) {

if (true) {
  // ...
}
```

## `==` summary
* If types are the same: use `===`
* If `null` or `undefined`: equal
* If non-primitive: ToPrimitive
* Prefer: ToNumber

## Corner cases
1) Arrays:
```js
[] == ![]; // true

let a = [];
let b = [];

// if (a == !b)
// if ([] == false)
// if ("" == false)
// if (0 == false)
// if (0 === 0)
if (true) {
  // ...
}

// if (a != b) 
// if (!(a == b))
// if(!(false))
if(true){
  // ...
}
```

2) Booleans
```js
let a = [];

if (a) {
  // ...
}

if (a == true) {
  // !
}

if (a == false) {
  // ...
}

```

## More

Avoid:
1) `==` with 0 or "" or " "
2) `==` with non-primitives (arrays, objects, functions)
3) `==` true or `==` false: allow ToBoolean or use `===`

Why prefer `==` then?
Knowing types is always better than not knowing them...Static Types is not a way to know your types
`==` is not about comparisons with unknown types. `==` is about comparisons of known types, or (optionally) where conversion may be helpful.

If you know the types in a comparison:
* If both types are the same, `==` is same is `===`
* If types are different, using `===` would fail. The only equivalent to one `==` would be two or more `===` (slower!)

If you don't know the types:
* You don't understand your code
* Better use `===`
* Assume coercion will occur


```js

```