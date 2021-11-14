# Static Typing
* ## TypeScript
* ## Flow

Benefits:
1) Catch type-related mistakes
2) Communicate type intent
3) Provide IDE feedback


Disadvantages:
1) Inferencing is a best-guess, not a guarantee
2) Annotations are optional
3) Any part of the application that isn't typed introduces uncertainty

# TypeScript & Flow

```js
let teacher = "Kyle";

teacher = {name : "Kyle"};
// ErrorL can't assign object to string
```

# Pros & Cons

## Pros
* Makes types obvious in your code
* Familiarity: they look like other languages' type systems
* Extremely popular
* Sophisticated and good at what they do

## Cons
* Use "non-JS-standard" syntax
* They require a build process, which raises the barrier to entry
* It can seem a bit intimidating
* They focus more on "static types", rather than value types

# Summary 
Javascript has a dynamic type system, which uses various forms of coercion for value type conversion. There isn't a necessity to implement TypeScript. Just know and understand your types! Don't need to use `==`.