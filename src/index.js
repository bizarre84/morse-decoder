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
const dot = '10';
const dash = '11';
const lengthCodeSymbol = 10;

function decode(expr) {
    let cutStr = expr.match(/.{1,10}/g);
    let binaryDictionary = {};
    let strDecode = '';
    for(key in MORSE_TABLE){
        keyForBinaryDictionary = supplementCodeSymbol(toBinaryChar(key));
        binaryDictionary[keyForBinaryDictionary] = MORSE_TABLE[key];
    }
    binaryDictionary["**********"] = ' ';
    for(let str of cutStr){
        if(str in binaryDictionary) strDecode = strDecode + binaryDictionary[str];
    }
    return strDecode;
}
function toBinaryChar(str) {
    binaryStr = '';
    for(i=0; i<str.length; i++){
        if(str[i]=='.') binaryStr = binaryStr+dot;
        if(str[i]=='-') binaryStr = binaryStr+dash;
    }
    return binaryStr;
}
function supplementCodeSymbol(str) {
    let requiredSymbols = lengthCodeSymbol-str.length;
    if(requiredSymbols>0){
        for(i=0; i<requiredSymbols; i++) {
            str = '0'+str;
        }
    }
    return str;
}

module.exports = {
    decode
}