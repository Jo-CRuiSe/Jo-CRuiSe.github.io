var dictionary = {
    'q': 'a',
    'w': 'b',
    'e': 'c',
    'r': 'd',
    't': 'e',
    'y': 'f',
    'u': 'g',
    'i': 'h',
    'o': 'i',
    'p': 'j',
    'a': 'k',
    's': 'l',
    'd': 'm',
    'f': 'n',
    'g': 'o',
    'h': 'p',
    'j': 'q',
    'k': 'r',
    'l': 's',
    'z': 't',
    'x': 'u',
    'c': 'v',
    'v': 'w',
    'b': 'x',
    'n': 'y',
    'm': 'z',

    'Q': 'A',
    'W': 'B',
    'E': 'C',
    'R': 'D',
    'T': 'E',
    'Y': 'F',
    'U': 'G',
    'I': 'H',
    'O': 'I',
    'P': 'J',
    'A': 'K',
    'S': 'L',
    'D': 'M',
    'F': 'N',
    'G': 'O',
    'H': 'P',
    'J': 'Q',
    'K': 'R',
    'L': 'S',
    'Z': 'T',
    'X': 'U',
    'C': 'V',
    'V': 'W',
    'B': 'X',
    'N': 'Y',
    'M': 'Z'


};

var reverseDictionary = {
    'a': 'q',
    'b': 'w',
    'c': 'e',
    'd': 'r',
    'e': 't',
    'f': 'y',
    'g': 'u',
    'h': 'i',
    'i': 'o',
    'j': 'p',
    'k': 'a',
    'l': 's',
    'm': 'd',
    'n': 'f',
    'o': 'g',
    'p': 'h',
    'q': 'j',
    'r': 'k',
    's': 'l',
    't': 'z',
    'u': 'x',
    'v': 'c',
    'w': 'v',
    'x': 'b',
    'y': 'n',
    'z': 'm',

    'A': 'Q',
    'B': 'W',
    'C': 'E',
    'D': 'R',
    'E': 'T',
    'F': 'Y',
    'G': 'U',
    'H': 'I',
    'I': 'O',
    'J': 'P',
    'K': 'A',
    'L': 'S',
    'M': 'D',
    'N': 'F',
    'O': 'G',
    'P': 'H',
    'Q': 'J',
    'R': 'K',
    'S': 'L',
    'T': 'X',
    'U': 'C',
    'V': 'V',
    'W': 'B',
    'X': 'B',
    'Y': 'N',
    'Z': 'M'

};

// var str = '';
// var reverseStr = ''

function handle(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += dictionary[str[`${i}`]];
        /* console.log(dictionary[str[`${i}`]]); */
    }
    return result;
}

function handleReverse(reverseStr) {
    let result = '';
    for (let i = 0; i < reverseStr.length; i++) {
        result += reverseDictionary[reverseStr[`${i}`]];
        /* console.log(dictionary[str[`${i}`]]); */
    }
    return result;
}

function encryptNum(num) {
    let str = num.toString();
    let encryptedStr = '';

    for (let i = 0; i < str.length; i++) {
        let encryptedCharCode = str.charCodeAt(i) + 52;

        encryptedStr += String.fromCharCode(encryptedCharCode);
    }
    return encryptedStr;
}

function decryptNum(str) {
    let decryptNum = '';
    for(let i = 0; i < str.length;i++) {
        let decryptedCharCode = str.charCodeAt(i) - 52;
        decryptNum += String.fromCharCode(decryptedCharCode);
    }
    return parseInt(decryptNum);
}


document.getElementById('typeChangeBtn').addEventListener("click", function () {
    var typeChangeBtn = document.getElementById('typeChangeBtn');
    if (typeChangeBtn.innerText == 'QWE to ABC') {
        typeChangeBtn.innerText = 'ABC to QWE';
    }
    else if (typeChangeBtn.innerText == 'ABC to QWE'){
        typeChangeBtn.innerText = '123 to abc';
    }
    else if (typeChangeBtn.innerText == '123 to abc'){
        typeChangeBtn.innerText = 'abc to 123';
    }
    else {
        typeChangeBtn.innerText = 'QWE to ABC';
    }
});


document.getElementById('submitBtn').addEventListener("click", function () {
    var typeChangeBtn = document.getElementById('typeChangeBtn');
    var inputText = document.getElementById('originalText').value;
    var outputText = document.getElementById('result');

    if(typeChangeBtn.innerText == 'QWE to ABC') {
        outputText.value = handle(inputText);
    }
    else if(typeChangeBtn.innerText == 'ABC to QWE') {
        outputText.value = handleReverse(inputText);
    }
    else if (typeChangeBtn.innerText == '123 to abc'){
        outputText.value = encryptNum(inputText);
    }
    else if (typeChangeBtn.innerText == 'abc to 123'){
        outputText.value = decryptNum(inputText);

    }
    else {
        alert('Error');
    }

    // outputText.value = result;

    if(outputText.value) {
        document.getElementById('copyToClipboard').style.display = 'block';
    } else {
        document.getElementById('copyToClipboard').style.display = 'none';
    }

    result = '';
    
    // console.log(outputText.value);
});

