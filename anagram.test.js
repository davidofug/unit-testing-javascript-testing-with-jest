const isAnagram = require('./anagram')

//toBeDefined
test('isAnagram function exists', () => {
    expect(isAnagram).toBeDefined()
})

//toEqual
test('isAnagram an actual function', () => {
    expect(typeof isAnagram).toEqual('function')
})

//toBeTruthy
test('is "below" an anagram of "elbow"', () => {
    expect(isAnagram('below', 'elbow')).toBeTruthy()
})

//toBeTruthy
test('is "cinema" an anagram of "iceman"', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy()
})

//toBeTruthy
test('is "Dormitory" an anagram of "dirty room##"', () => {
    expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy()
})

//toBeFalsy
test('"David" Not an anagram of "Doreen"', () => {
    expect(isAnagram('David', 'Doreen')).toBeFalsy()
})