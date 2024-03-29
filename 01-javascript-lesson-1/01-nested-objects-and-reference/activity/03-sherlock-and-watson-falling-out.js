/**
 * The stress of running a business together has caused a strife in Sherlock and Watson's professional relationship.
 * Also, as a coder I'm getting tired of writing the same thing over and over again.
 * Write a function that takes in a person and an address and returns the person with the new address.
 * NOTE: Updating the address of one person should not update the address of another person.
 * For example, if Sherlock and Watson are both at 221B Baker Street and Sherlock moves to 221C Butcher Street,
 * Watson should still be at 221B Baker Street.
 * AND the function should return a new instance of an equivalent person with the new address.
 * For example, if some other process alters the person passed in it should not alter the person returned from the changeAddress function.
 */

const sherlockAndWatsonAddress = {
  street: "221C Butcher Street",
  city: "London",
  country: "England",
};

const sherlock = {
  firstName: "Sherlock",
  lastName: "Holmes",
  address: sherlockAndWatsonAddress,
};

const watson = {
  firstName: "John",
  lastName: "Watson",
  address: sherlockAndWatsonAddress,
};

const newWatson = changeAddress(watson, {
  street: "221D Butler Street",
  city: "Burbank",
  country: "USA",
});

function changeAddress(person, newAddress) {
  /** Your code here */
  /** End code */
}

module.exports = { sherlock, watson, newWatson, changeAddress };
