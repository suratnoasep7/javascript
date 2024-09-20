function vowels(str) {
    let counterVowels = "";
    const checker = ["a", "e", "i", "o", "u"];
    for(let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            counterVowels += char;
        }
    }
    counterVowels += '\n';
    for(let char of str.toLowerCase()) {
        if (!checker.includes(char)) {
            counterVowels += char;
        }
    }
    return counterVowels;
}

console.log(vowels('hi there'));

function num(str, strCount) {
    const word = strCount.split(" ");
    if(parseInt(str) == parseInt(word.length)) {
        return 'Minimum bus required is : ' + str;
    } else {
        return 'Input must be equal with count of family';
    }
}
console.log(num('5', '1 2 4 3 3'));