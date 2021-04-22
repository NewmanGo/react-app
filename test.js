let Promises = {};
Promises.all = function (promiseList) {
  const responses = [];
  return new Promise((resolve, rej) => {
    let i = 0;
    next();
    function next() {
      promiseList[i]
        .then((res) => {
          responses[i] = res;
          if (i === promiseList.length - 1) {
            resolve(responses);
          } else {
            i++;
            next()
          }
        })
        .catch(rej);
    }
  });
};

p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res(3);
  }, 6000);
});

p2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej(2);
    res(2);
  }, 1000);
});

p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res(1);
  }, 6000);
});

Promises.all([p1, p2])
  .then((res) => {
    console.log(res, "res1");
  })
  .catch((e) => {
    console.log(e, "e1");
  });

// Promises.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res, "res2");
//   })
//   .catch((e) => {
//     console.log(e, "e2");
//   });

// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res, "res2");
//   })
//   .catch((e) => {
//     console.log(e, "e2");
//   });
