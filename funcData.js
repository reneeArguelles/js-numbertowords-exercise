const processPerHundred = (digitGroup) => {
    const onesMap = new Map([[1, 'one'], [2, 'two'], [3, 'three'], [4, 'four'], [5, 'five'], [6, 'six'], [7, 'seven'], [8, 'eight'], [9, 'nine']])
    const tensWithOnesMap = new Map([[10, 'ten'], [11, 'eleven'], [12, 'twelve'], [13, 'thirteen'], [14, 'fourteen'], [15, 'fifteen'], [16, 'sixteen'], [17, 'seventeen'], [18, 'eighteen'], [19, 'nineteen']])
    const tensMap = new Map([[2, 'twenty'], [3, 'thirty'], [4, 'fourty'], [5, 'fifty'], [6, 'sixty'], [7, 'seventy'], [8, 'eighty'], [9, 'ninety']])

    let numInString = ''

    if (Number(digitGroup[0]) !== 0) {
        numInString += `${onesMap.get(Number(digitGroup[0]))} hundred `
    }

    if (tensMap.has(Number(digitGroup[1]))) {
        numInString += `${tensMap.get(Number(digitGroup[1]))}${(onesMap.has(Number(digitGroup[2])) ? ` ${onesMap.get(Number(digitGroup[2]))} ` : '')}`
    } else if (Number(digitGroup[1]) === 0 && Number(digitGroup[2]) !== 0) {
        numInString += `${(onesMap.get(Number(digitGroup[2])) ? `${onesMap.get(Number(digitGroup[2]))}` : '')} `
    } else {
        numInString += `${(tensWithOnesMap.has(Number(digitGroup.substr(-2))) ? `${tensWithOnesMap.get(Number(digitGroup.substr(-2)))} ` : '')}`
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
