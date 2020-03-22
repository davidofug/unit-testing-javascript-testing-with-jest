const chunkArray = require('./arrayChunk')

//toBeDefined

test('chunkArray function exists', () => {
    expect(chunkArray).toBeDefined()
})

//toEqual

test('Chunk an array of 10 value with the length of 2', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const len = 2
    const chunkedArr = chunkArray(numbers, len)
    expect(chunkedArr).toEqual([[1,2],[3,4],[5,6],[7,8],[9,10]])
})

//toEqual

test('Chunk an array of 10 value with the length of 2', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const len = 3
    const chunkedArr = chunkArray(numbers, len)
    expect(chunkedArr).toEqual([[1,2,3],[4,5,6],[7,8,9],[10]])
})