const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, ThisArg) {
    return arr.map(function(item){
    return item * this.value;
    
    }, ThisArg);
}

const nums = [1, 2];

console.log('this -> maçã', mapComThis(nums, maca));

console.log('this -> laranja', mapComThis(nums, laranja));