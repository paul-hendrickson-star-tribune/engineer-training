/**
 * Oh no! Someone has chained together a lot of promises putting you in callback heck!!
 * Your job is to remove the callback heck and make the code more readable using async/await
 * the output of the function should be the same as the callbackHeck function
 * and use async await to handle the promises
 */

const addFoo = async (str) => str + "foo";
const addBar = async (str) => str + "bar";

function callbackHeck({ addFoo, addBar }) {
  const start = "";

  return addFoo(start).then((foo) => {
    return addBar(foo).then((foobar) => {
      return addFoo(foobar).then((foobarfoo) => {
        return addFoo(foobarfoo).then((foobarfoofoo) => {
          return addBar(foobarfoofoo).then((foobarfoofoobar) => {
            return addFoo(foobarfoofoobar).then((foobarfoofoobarfoo) => {
              return addFoo(foobarfoofoobarfoo).then(
                (foobarfoofoobarfoofoo) => {
                  return addBar(foobarfoofoobarfoofoo).then(
                    (foobarfoofoobarfoofoobar) => {
                      return foobarfoofoobarfoofoobar;
                    }
                  );
                }
              );
            });
          });
        });
      });
    });
  });
}

callbackHeck({ addFoo, addBar }).then((result) => console.log(result));

async function asyncLessHeck({ addFoo, addBar }) {
  /** Your code here */
  /** End code */
}

asyncLessHeck({ addFoo, addBar }).then((result) => console.log(result));

module.exports = { addFoo, addBar, callbackHeck, asyncLessHeck };
