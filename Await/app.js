async function myFunction() { 
    const myPromise = new Promise((resolve, reject) => { 
        if (true) {
        resolve('Success!'); } else {
        reject('Failure!'); }
        });
        myPromise.then((result) => { console.log(result);
        }).catch((error) => { console.log(error);
        });
    try {
    const result = await myPromise;
    console.log(result); } catch (error) {
    console.log(error); }
    } myFunction();