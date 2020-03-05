#### What is your favourite new javascript feature and why?
Destructing of arrays and objects syntax, It allows me to create new objects in immutable way.


#### Explain an interesting way in which you have used this javascript feature.
I don’t recall but I try to write typesafe and reable code

### Is there any difference between regular function syntax and the shorter arrow function syntax? (Write the answer in your own words)
Yes there are few I experienced, arrow functions don’t have arguments variables inside it’s scope whereas regular functions have.
Another difference is inside an object or class fat arrow functions will not lose this context value.

#### What is the difference between ‘myFunctionCall(++foo)’   and  ‘myFunctionCall(foo++)’
myFunctionCall(++foo) in this case foo value available in this scope of function will be incremented by one where as foo++ will not get incremented value,
Note: Never used such a type of statement in production code.


#### In your own words, explain what a javascript ‘class’ is and how it differs from a function.
JS class is syntactic sugar over prototypal inheritance. As Babel & Typescript transpiles it to prototypal inheritance using function


#### In your own words, explain css specificity.
CSS is a styling language that is parsed by a browser and it will apply styles to matching DOM elements in current document using matching rules.

#### In your own words, explain, what is ‘!important’ in css.  Also how does it work?  Are there any special circumstances when using it, where it’s behaviour might not be what you expect?

!important is last resort for applying a style to selector. If there is no other way you can override the element style then you have to use !important. I always try to avoid using it.


#### What is your prefered layout system: inline-block, floating + clearing, flex, grid, other?  And why?
I prefer using Flexbox due to its availability in the browser and it’s reference implementation is present in many other platforms like android and iOS.
Always worked for me.
Specifically react-native defato layout solution is flexbox.

#### Are negative margins legal and what do they do (margin: -20px)?
Yes they are legal they will move the element in the opposite direction.

### If a <div/> has no margin or other styling and a <p/> tag inside of it has a margin top of some kind, the margin from the <p/> tag will show up on the div instead (the margin will show above the div not inside of it), why is this?  What are the different things that can be done to prevent it?
Never experienced it. Looks like collapsing margin thing probably change p tag display to inline block can help.


#### What technologies do you use to unit test your react components?
Jest and React Testing Library.

#### Are there any pitfalls associated with this technology that have caused you difficulty in the past?
Not yet but there are difficult cases often. e.g if a modal window is rendered using a portal and it is outside of the App DOM tree.


#### How do you test in your unit tests to see if the correct properties are being passed to child components.
I use typescript with typed properties using interfaces if properties types are wrong it will give compile error.



#### What are the differences between Subject, BehaviorSubject and ReplaySubject?  And in what situation would you use each of these (please provide example scenarios)?

Subject is generally an observer and observable both it won’t replay values subscription function will only get value that are emitted after subscription.

Behaviour Subject is a subject that will always have an initial value and it will always replay last value when subscription is made.

Replay Subject doesn't have intially value but you can specify buffer size that will store upon its construction it will replay that buffer on every subscription.


#### If you have an array of values in a stream and you wish to pipe it such that it will emit the arrays values individually, one by one and wait for them all to be completed before processing another array, how would you do this?  Please provide a code example.
E.g.
[1,2] -> [3,4] -> [5,6,7]
Should produce:
1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7

of(input).pipe(flatMap((items)=> of(...items)) 


#### If you have a stream that receives individual values and would like to pipe it such that it builds an array out of these values, emitting the updated array each time a new value is added to it, how would you do this?  Please provide a code example.
E.g.
1 -> 2 -> 3 -> 4
Should produce:
[1] -> [1,2] -> [1,2,3] -> [1,2,3,4]

Not sure how to do it, but I can by doing some experimentation.
Scan or MergeScan operator can be useful.


#### Explain which of the Twilio Api’s you have used.  Also explain how and in what scenarios you have used them.

Haven’t used it production but I know it can be used to send and receive sms and phone calls.




 


