function ucFirst(str) {
    newStr = str[0].toUpperCase() + str.slice(1);
    return newStr;
}

console.log(ucFirst("john") == "John");