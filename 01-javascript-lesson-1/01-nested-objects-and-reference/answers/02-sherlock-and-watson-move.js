/**
 * Sherlock and Watson have expanded their business and need more space.
 * Write the code so that Sherlock Holmes and John Watson live at their new residence.
 */

const newAddressStreet = "221C Butcher Street";
const newAddressCity = "London";
const newAddressCountry = "England";

const sherlock = {
  firstName: "Sherlock",
  lastName: "Holmes",
  address: { street: "221B Baker Street", city: "London", country: "England" },
};

const watson = {
  firstName: "John",
  lastName: "Watson",
  address: { street: "221B Baker Street", city: "London", country: "England" },
};

/** Your code here */

sherlock.address.street = newAddressStreet;
sherlock.address.city = newAddressCity;
sherlock.address.country = newAddressCountry;
watson.address.street = newAddressStreet;
watson.address.city = newAddressCity;
watson.address.country = newAddressCountry;

/** End code */

module.exports = { sherlock, watson };
