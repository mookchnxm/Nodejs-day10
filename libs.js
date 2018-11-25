// Testing Number
module.exports.absolute = number => {
    if(number > 0) return number;
    if(number < 0) return -number;
    return 0;
}

// Testing String
module.exports.greet = name => {
    return `Hello ${name}!`;
}

// Test Array
module.exports.getGenders = () => {
    return ['Male','Female','N/A'];
}