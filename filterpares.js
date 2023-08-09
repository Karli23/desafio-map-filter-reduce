function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const MeuArray = [4, 6, 45, 87, 91, 44, 22,]

console.log(filtraPares(MeuArray));