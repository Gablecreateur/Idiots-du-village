
ServerEvents.recipes(event => {

  // Tuff Blocks
  event.recipes.create.filling('minecraft:tuff', [Fluid.of('minecraft:lava'), 'minecraft:stone'])


  //Limestone
  event.remove({id:'tfmg:crushing/limestone'})
  event.recipes.create.crushing(
  [
    CreateItem.of('mekanism:nugget_osmium', 0.1),
    CreateItem.of('mekanism:nugget_tin', 0.1),
    CreateItem.of('mekanism:nugget_lead', 0.1),
    CreateItem.of('mekanism:nugget_uranium', 0.1),
    CreateItem.of('mekmm:nugget_silver', 0.1)
  ],
    'create:limestone')

  event.recipes.create.pressing('tfmg:limesand', 'create:limestone')


  event.recipes.create.sequenced_assembly(
        // Outputs:
        [
          'create:limestone', // Main output, will appear in JEI as the result

        ],
        // Input:
        'minecraft:cobblestone',
        // Sequence:
        [
          // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
          // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
          event.recipes.create.filling('minecraft:stone', [Fluid.of('minecraft:water',100), 'minecraft:stone']),
          event.recipes.create.filling('minecraft:stone', [Fluid.of('minecraft:water',100), 'minecraft:stone']),
          event.recipes.create.filling('minecraft:stone', [Fluid.of('minecraft:lava',50), 'minecraft:stone'])
        ]
      )
      .transitionalItem('minecraft:stone') // Set the transitional item
      .loops(2) // Set the number of loops

  //Sculk
  event.recipes.create.crushing(
  [
    CreateItem.of('mekanism:nugget_osmium', 0.1),
    CreateItem.of('mekanism:nugget_tin', 0.1),
    CreateItem.of('mekanism:nugget_lead', 0.1),
    CreateItem.of('mekanism:nugget_uranium', 0.1),
    CreateItem.of('mekmm:nugget_silver', 0.1)
  ],
    'minecraft:sculk')


})


LootJS.lootTables(event => {
    event.modifyBlockTables("ae2:flawless_budding_quartz").createPool(pool => {
        pool.addEntry(LootEntry.of("ae2:flawless_budding_quartz"))
    })
})
