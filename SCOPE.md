# Scope
* Nested Scope
* Hoisting
* Closure
* Modules

Scope: where to look for things

```js
x = 42;
console.log(y);
```

Many think that JS is not a compiled language. But, in fact, it **is** compiled...or, rather, "syntaxed".


## Compilation & Scope

```js
let teacher = "Kyle";

function otherClass() {
  let teacher = "Suzy"; // Shadowing - same variable name in different scopes
  console.log("Welcome!");
}

function ask() {
  let question = "Why?";
  console.log(question);
}

otherClass();
ask();
```