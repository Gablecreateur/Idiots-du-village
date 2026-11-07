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

StartupEvents.registry('block', event => {
  event.create('technological_kaayu') // Create a new block
    .displayName('Technological Kaayu') // Set a custom name
    .soundType('stone') // Set a material (affects the sounds and some properties)
    .hardness(5) // Set hardness (affects mining time)
    .resistance(10) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock('c:storage_blocks/technological_kaayu') //can be mined faster with an axe
    .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
    .texture('kubejs:block/technological_kaayu')
})

StartupEvents.registry('block', event => {
  event.create('astral_kaayu') // Create a new block
    .displayName('Astral Kaayu') // Set a custom name
    .soundType('stone') // Set a material (affects the sounds and some properties)
    .hardness(5) // Set hardness (affects mining time)
    .resistance(10) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock('c:storage_blocks/astral_kaayu') //can be mined faster with an axe
    .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
    .texture('kubejs:block/astral_kaayu')
})

StartupEvents.registry('block', event => {
  event.create('industrial_kaayu') // Create a new block
    .displayName('Industrial Kaayu') // Set a custom name
    .soundType('stone') // Set a material (affects the sounds and some properties)
    .hardness(5) // Set hardness (affects mining time)
    .resistance(10) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock('c:storage_blocks/industrial_kaayu') //can be mined faster with an axe
    .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
    .texture('kubejs:block/industrial_kaayu')
})

StartupEvents.registry('block', event => {
  event.create('vanilla_kaayu') // Create a new block
    .displayName('Vanilla Kaayu') // Set a custom name
    .soundType('stone') // Set a material (affects the sounds and some properties)
    .hardness(5) // Set hardness (affects mining time)
    .resistance(10) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock('c:storage_blocks/vanilla_kaayu') //can be mined faster with an axe
    .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
    .texture('kubejs:block/vanilla_kaayu')
})

StartupEvents.registry('block', event => {
  event.create('engineering_kaayu') // Create a new block
    .displayName('Engineering Kaayu') // Set a custom name
    .soundType('stone') // Set a material (affects the sounds and some properties)
    .hardness(5) // Set hardness (affects mining time)
    .resistance(10) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock('c:storage_blocks/engineering_kaayu') //can be mined faster with an axe
    .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
    .texture('kubejs:block/engineering_kaayu')
})

StartupEvents.registry('block', event => {
  event.create('space_kaayu') // Create a new block
    .displayName('Space Kaayu') // Set a custom name
    .soundType('stone') // Set a material (affects the sounds and some properties)
    .hardness(5) // Set hardness (affects mining time)
    .resistance(10) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock('c:storage_blocks/space_kaayu') //can be mined faster with an axe
    .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
    .texture('kubejs:block/space_kaayu')
})
