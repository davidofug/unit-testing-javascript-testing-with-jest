const reverseString = require('./reverseString')

//toBeDefined
test('reverseString function exist?', () => {
    expect(reverseString).toBeDefined()
})

//toEqual
test('String reverses', () => {
    expect(reverseString('hello')).toEqual('olleh')
})

//toEqual
test('String reverses with uppercase', () => {
    expect(reverseString('Hello')).toEqual('olleh')
})

//toEqual
test('String reverses with spaces', () => {
    expect(reverseString('Hello world!')).toEqual('!dlrow olleh')
})

//toEqual
test('String reverses with single and double spaces', () => {
    expect(reverseString('Hello world! Are you  David?')).toEqual('?divad  uoy era !dlrow olleh')
})