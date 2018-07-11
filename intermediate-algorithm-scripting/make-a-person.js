// Make a Person

/*
Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)

Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.
*/

const Person = function(firstAndLast) {

  let name = firstAndLast;

  this.getFirstName = () => {
    return name.split(' ')[0];
  };
  this.getLastName = () => {
    return name.split(' ')[1];
  };
  this.getFullName = () => {
    return name;
  };
  this.setFirstName = (first) => {
    name = `${first} ${name.split(' ')[1]}`;
  };
  this.setLastName = (last) => {
    name = `${name.split(' ')[0]} ${last}`;
  };
  this.setFullName = (firstAndLast) => {
    name = firstAndLast;
  };
};

const bob = new Person('Bob Ross');
bob.getFullName();
