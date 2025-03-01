const myPromise = new Promise((resolve, reject) => { 
    if (true) {
    resolve('Success!'); } else {
    reject('Failure!'); }
    });
    myPromise.then((result) => { console.log(result);
    }).catch((error) => { console.log(error);
    });