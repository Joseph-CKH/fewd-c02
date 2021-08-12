let a = 5


switch (a) {
    case (5):
        console.log('five')
        break;
    case (10):
        console.log('ten')
        break;
    case (15):
        console.log('fifteen')
        break;
    case (20):
        console.log('twenty')
        break;
    case (25):
        console.log('twenty-five')
        break;
}


//q3
const multiplier = (mum) => {
    return mum * 10
}
console.log(multiplier(10))

//q4
const arr = [1, 3, 5, 7, 9];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * arr[i]);
}

//q4
const array = [1, 3, 5, 7, 9];
const rst = array.reduce((a, b) => {
    return a * b;
})
console.log(rst)

//q4
const array01 = [1, 3, 5, 7, 9];
const rst01 = array01.reduce((a, b) => {
    
    return a + b;
})
console.log(rst01)