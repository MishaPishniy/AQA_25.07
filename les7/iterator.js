function createIterator(array) {
    let index = 0;

    return {
        next: function() {
            if (index < array.length) {
                return { znacenie: array[index++], done: false };
            } else {
                return { znacenie: undefined, done: true };
            }
        }
    };
}

const myIterator = createIterator([1, 2, 3]);
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());