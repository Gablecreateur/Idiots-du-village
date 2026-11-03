StartupEvents.registry('block', event => {
  event.create('kaayu') // Create a new block
    .displayName('Kaayu') // Set a custom name
    .soundType('stone') // Set a material (affects the sounds and some properties)
    .hardness(5) // Set hardness (affects mining time)
    .resistance(10) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock('c:storage_blocks/kaayu') //can be mined faster with an axe
    .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
    .texture('kubejs:block/kaayu')
})
