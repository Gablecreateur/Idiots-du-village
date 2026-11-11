// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ServerEvent.recipes(event => {
  event.shaped(
    Item.of('minecraft:scaffolding', 1), // arg 1: output
    [
      'BAB',
      'B B', // arg 2: the shape (array of strings)
      'B B'
    ],
    {
      A: '#c:strings',
      B: '#c:rods/wooden'  //arg 3: the mapping object
    }
  )
})
