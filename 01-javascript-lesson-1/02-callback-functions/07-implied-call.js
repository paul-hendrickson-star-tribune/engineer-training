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

const arrToBeFiltered1 = ["a", undefined, "b", false, "c", 0, "d", null, "e"];

const filteredArr1 = arrToBeFiltered1.filter((el) => !!el);
console.log(filteredArr1);

/**
 * Can also be achieved with
 */

const arrToBeFiltered2 = ["a", undefined, "b", false, "c", 0, "d", null, "e"];

const filteredArr2 = arrToBeFiltered2.filter(Boolean);
console.log(filteredArr2);
