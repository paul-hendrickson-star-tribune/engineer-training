/**
 * often times we need to handle multiple promises at once
 * in this exercise you will have to handle 8 promises at once
 * you will have to wait for all of them to resolve and then return the result
 */

const prom1 = new Promise((res) => res("prom1"));
const prom2 = new Promise((res) => res("prom2"));
const prom3 = new Promise((res) => res("prom3"));
const prom4 = new Promise((res) => res("prom4"));
const prom5 = new Promise((res) => res("prom5"));
const prom6 = new Promise((res) => res("prom6"));
const prom7 = new Promise((res) => res("prom7"));
const prom8 = new Promise((res) => res("prom8"));

/**
 * @returns {Promise<string[]>} - an array of strings
 */
function handleSeveralPromises() {
  /** Your code here */
  /** End code */
}

module.exports = { handleSeveralPromises };
