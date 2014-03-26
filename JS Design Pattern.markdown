## Pattern: solution of a common problems

<h3>3 Benefits</h3>
a. Patterns are proven solutions<br>
b. Patterns can be easily reused<br>
c. Patterns can be expressive<br>

<h3>Advantages</h3>
a. Reusing patterns assists in preventing minor issues that can cause major problems in the application development process.<br>
b. Patterns can provide generalized solutions which are documented in a fashion that doesn't require them to be tied to a specific problem<br>
c. Certain patterns can actually decrease the overall file-size footprint of your code by avoiding repetition.<br>
d. Patterns add to a developers vocabulary, which makes communication faster.<br>
e. Patterns that are frequently used can be improved over time by harnessing the collective experiences other developers using those patterns contribute back to the design pattern community.

<h3>Good Pattern</h3>
a. Solves a particular problem<br>
b. The solution to this problem cannot be obvious<br>
c. The concept described must have been proven:<br>
d. It must describe a relationship:

<h3>Rule of three:</h3>
a. Fitness of purpose - how is the pattern considered successful<br>
b. Usefulness- why is the pattern considered successful?<br>
c. Applicability - is the design worthy of being a pattern because it has wider applicability? If so, this needs to be explained.When reviewing or defining a pattern, it is important to keep the above in mind.<br>

<h3>Categories Of Design Pattern</h3>
Creational Design Patterns :  Constructor, Factory, Abstract, Prototype, Singleton and Builder<br>
Structural Design Patterns : Decorator, Facade, Flyweight, Adapter and Proxy<br>
Behavioral Design Patterns : Iterator, Mediator, Observer and Visitor<br>

<h3>Objects</h3>
properties & method : hold complex data structure 

<h2>Types of Design Pattern</h2>
<h3>The Creational Pattern</h3>
In JavaScript, the three common ways to create new objects are as follows:<br>
<pre>
// Each of the following options will create a new empty object:
var newObject = {}; // or 
var newObject = Object.create(null); // or
var newObject = new Object();

Where the 'Object' constructor creates an object wrapper for a specific value, or where
no value is passed, it will create an empty object and return it.
</pre>

There are then four ways in which keys and values can then be assigned to an object:
<pre>
// ECMAScript 3 compatible approaches
// 1. Dot syntax
newObject.someKey = 'Hello World'; // Write properties
var key = newObject.someKey; // Access properties
// 2. Square bracket syntax
newObject['someKey'] = 'Hello World'; // Write properties
var key = newObject['someKey']; // Access properties
// ECMAScript 5 only compatible approaches
// For more information see: http://kangax.github.com/es5-compat-table/
// 3. Object.defineProperty 
Object.defineProperty(newObject, "someKey", {
 value: "for more control of the property's behavior",
 writable: true,
 enumerable: true,
 configurable: true
});
// If the above feels a little difficult to read, a short-hand could be written as follows:
var defineProp = function ( obj, key, value ){
 config.value = value;
 Object.defineProperty(obj, key, config);
}
// Create a new empty object
var man = Object.create(null);
// Populate the object with properties
defineProp( man, 'car', 'Delorean' );
defineProp( man, 'dob', '1981' );
defineProp( man, 'beard', false );
// 4. Object.defineProperties
Object.defineProperties(newObject, { 
 "someKey": { 
 value: "Hello World", 
 writable: true 
 }, 
 "anotherKey": { 
 value: "Foo bar", 
 writable: false 
 } 
});
As we will see a little later, these methods can even be used for inheritance, as follows:
var driver = Object.create(man);
defineProp(driver, 'topSpeed', '100mph');
driver.topSpeed // 100mph
</pre>
