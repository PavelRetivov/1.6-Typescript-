"use strict";
let test = {
    hello: { cvalue: 1 },
    world: { cvalue: {
            hello: { cvalue: 1 },
            world: { cvalue: undefined }
        }
    },
    helloTwo: { cvalue: 1 },
    worldThree: { cvalue: {
            hello: { cvalue: {
                    hello: { cvalue: 1 },
                    world: { cvalue: undefined }
                } },
            world: { cvalue: undefined }
        } }
};
function summ(a) {
    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        if (elem === undefined || elem.cvalue === undefined)
            return 2021;
        if (elem !== undefined && typeof elem.cvalue === 'string') {
            return +elem.cvalue || +'2021';
        }
        if (elem !== undefined && elem.cvalue !== undefined && typeof elem.cvalue === 'object'
            && typeof elem.cvalue.isBigObject !== undefined)
            return summ(elem.cvalue);
        if (elem !== undefined && typeof elem.cvalue === 'number')
            return Number(elem.cvalue);
        return Number(2021);
    });
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}
console.log(summ(test));
