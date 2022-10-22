const processPerHundred = ([hundredsDigit, tensDigit, onesDigit]) => {
    const onesMap = new Map([[1, 'one'], [2, 'two'], [3, 'three'], [4, 'four'], [5, 'five'], [6, 'six'], [7, 'seven'], [8, 'eight'], [9, 'nine']])
    const tensWithOnesMap = new Map([[10, 'ten'], [11, 'eleven'], [12, 'twelve'], [13, 'thirteen'], [14, 'fourteen'], [15, 'fifteen'], [16, 'sixteen'], [17, 'seventeen'], [18, 'eighteen'], [19, 'nineteen']])
    const tensMap = new Map([[2, 'twenty'], [3, 'thirty'], [4, 'fourty'], [5, 'fifty'], [6, 'sixty'], [7, 'seventy'], [8, 'eighty'], [9, 'ninety']])

    let numInString = ''

    if (Number(hundredsDigit) !== 0) {
        numInString += `${onesMap.get(Number(hundredsDigit))} hundred `
    }

    if (tensMap.has(Number(tensDigit))) {
        numInString += `${tensMap.get(Number(tensDigit))}${(onesMap.has(Number(onesDigit)) ? ` ${onesMap.get(Number(onesDigit))} ` : ' ')}`
    } else if (Number(tensDigit) === 0 && Number(onesDigit) !== 0) {
        numInString += `${(onesMap.has(Number(onesDigit)) ? `${onesMap.get(Number(onesDigit))} ` : ' ')}`
    } else {
        numInString += `${(tensWithOnesMap.has(Number(tensDigit.concat(onesDigit))) ? `${tensWithOnesMap.get(Number(tensDigit.concat(onesDigit)))} ` : '')}`
    }

    return numInString
}

const numToString = (num) => {
    if (num === 0) {
        return 'zero'
    }

    let numInString = ''
    let digitGroups = []

    if (String(num).length > 3) {
        digitGroups = [...digitGroups, num.toString().slice(0,-3), num.toString().slice(-3)] 
    } else {
        digitGroups = [...digitGroups, num.toString()]
    }

    while (digitGroups[0].length !== 3) {
        digitGroups[0] = '0' + digitGroups[0]
    }

    for (let i = 0; i < digitGroups.length; i++) {
        numInString += processPerHundred(digitGroups[i])

        if (i === 0 && digitGroups.length > 1) {
            numInString += `thousand `
        }
    }

    return numInString
}

console.log(numToString(0))
console.log(numToString(12))
console.log(numToString(618))
console.log(numToString(1986))
console.log(numToString(01))
console.log(numToString(100200))
console.log(numToString(100101))
console.log(numToString(999999))
console.log(numToString(990090))
console.log(numToString(801801))
console.log(numToString(1801))
console.log(numToString(821001))
