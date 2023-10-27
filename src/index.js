const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // let strArr, strArr_, str;
    // strArr = [];
    // strArr_ = [];
    // str = '';
    return expr.match(/.{10}/g).map((el_10) => {
        return el_10.match(/.{2}/g).map(el_2 => {
            if (el_2 === '10') {
                return '.';
            } else if (el_2 === '11') {
                return '-';
            } else if (el_2 === '**') {
                return ' ';
            }
        }).join('');
    }).map(el_morse => 
        MORSE_TABLE[el_morse] ? MORSE_TABLE[el_morse] : ' '
    ).join('');


    // for (let i = 0; i < exprArr.length; i++) {
    //     exprArr[i] = exprArr[i].match(/.{2}/g);
    //     strArr.push([]);
    // }
    
    // for (let i = 0; i < exprArr.length; i++) {
    //     for (let j = 0; j < exprArr[i].length; j++) {
    //         if (exprArr[i][j] === '10') {
    //             strArr[i].push('.');
    //         } else if (exprArr[i][j] === '11') {
    //             strArr[i].push('-');
    //         }
    //     }
    // }
    // for (let i = 0; i < strArr.length; i++) {
    //     strArr_[i] = strArr[i].join('');
    //     if (strArr_[i] === '') {
    //         str = str + ' ';        
    //     } else {
    //         str = str + MORSE_TABLE[strArr_[i]];
    //     }
    // }
    // return str;

    // console.log(exprArr);
    // console.log(strArr);
    // console.log(strArr_);
    // console.log(str);
}

module.exports = {
    decode
}