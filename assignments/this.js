/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Globol Object will be the global scope in the console area 

* 2. implict binding/ When a function is called by a dot that was previous of that dot.

* 3. new binding/ when a constructor is be used, that a object will be created ands returned by the function.

* 4. Explitcit binding/ When .call(), apply(), or .bind( is being in used.)
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function firstName(name){
console.log(this);
}
 firstName('zach');

// Principle 2

// code example for Implicit Binding

var dinner = {
food: "steak",
yummy: function() {
    console.log(`${this.food} is my Favorite food `);
    console.log(this);
}
};
dinner.yummy('steak');

// Principle 3

// code example for New Binding

let cats = {
first: 'lion',
second: 'small cat',
third: 'cheetah',
bigcats: function(){
    console.log(`${this.first}  is bigger then ${this.second} but this cat is smaller then the  ${this.third}`);
 }
};
cats.bigcats();




// Principle 4

// code example for Explicit Binding

function catOne(attributes) {
this.first = attributes.first;
this.second = attributes.second;
this.third = attributes.thrid;
this.speak = function() {
    return `${this.first}  is a big cat`;
}

}




const lion = new catOne ({
    first: 'lion',
    second: 'small cat',
    third: 'cheetah',
});
console.log(lion); console.log(lion.speak());


