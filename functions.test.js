const functions = require('./functions')

// Run before every test case
// beforeEach(() => initDatabase())
// Run after every test case
// afterEach(() => closeDatabase())

// Run before all test cases
// beforeAll(() => initDatabase())
// Run after all test cases
// afterAll(() => closeDatabase())

// const initDatabase = () => console.log('Initialize database')
// const closeDatabase = () => console.log('Close database')

const nameCheck = () => console.log('Checking name...')

//For a certain group of tests

describe('Checking Names', () => {
    beforeEach(() => nameCheck())

    test('User is Gertrude', () => {
        const user = 'Gertrude'
        expect(user).toBe('Gertrude')
    })

    test('User is Lydia', () => {
        const user = 'Lydia'
        expect(user).toBe('Lydia')
    })
})

//toBe
test('Adds two numbers 2 + 3 to equal 5', () => {
    expect(functions.add(2, 3)).toBe(5)
})

//not.toBe
test('Adds 2 + 2 not equal to 6', () => {
    expect(functions.add(2, 2)).not.toBe(6)
})

//toBeNull
test('isNull', () => {
    expect(functions.isNull()).toBeNull()
})

//toBeFalsy
test('Should be falsy', () => {
    expect(functions.check(false)).toBeFalsy()
})

//toEqual for objects
test('Should to be David Wampamba object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'David',
        lastName: 'Wampamba'
    })
})

//Promises
/* test('User fetch name should be Leane Graham', () => {
    //Make sure to have assertions
    //And the return if we're dealing Asynchronous data
    expect.assertions(1)
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham')
    })
}) */

//Async Await
test('User fetch name should be Ervin Howell', async () => {
    //Make sure to have assertions
    expect.assertions(1)
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Ervin Howell')
})