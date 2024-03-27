/**
 * very often we declare the function in the argument of the function
 * or declare the function outside and pass it in.
 * but there are times where you can simplify things.
 */

function callCallback(cb) {
  cb("some data");
}

callCallback((dataToBeLogged) => console.log(dataToBeLogged));

/**
 * This same effect can be done with
 */

callCallback(console.log);

/**
 * Filtering example
 */

const arrToBeFiltered = ["a", undefined, "b", false, "c", 0, "d", null, "e"];

const filteredArr1 = arrToBeFiltered.filter((el) => !!el);
console.log(filteredArr1);

/**
 * Can also be achieved with
 */

const filteredArr2 = arrToBeFiltered.filter(Boolean);
console.log(filteredArr2);
