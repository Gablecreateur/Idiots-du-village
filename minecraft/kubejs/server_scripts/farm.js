
ServerEvents.recipes(event => {

  //Cobblestone
  event.recipes.create.mixing('minecraft:cobblestone',[Fluid.of('minecraft:water',500),Fluid.of('minecraft:lava',500)])

  // Tuff Blocks
  event.recipes.create.filling('minecraft:tuff', [Fluid.of('minecraft:lava'), 'minecraft:stone'])

  // Levitite
  event.recipes.create.filling('aeronautics:levitite', [Fluid.of('aeronautics:levitite_blend'), 'minecraft:stone'])

  // Gunpowder
  event.recipes.create.milling(CreateItem.of('minecraft:gunpowder', 0.25), 'minecraft:flint')
  event.recipes.create.milling(CreateItem.of('2x minecraft:gunpowder', 1), 'supplementaries:flint_block')

  //Limestone
  event.remove({id:'tfmg:crushing/limestone'})
  event.recipes.create.crushing(
  [
    CreateItem.of('mekanism:nugget_osmium', 0.1),
    CreateItem.of('mekanism:nugget_tin', 0.1),
    CreateItem.of('mekanism:nugget_lead', 0.1),
    CreateItem.of('mekanism:nugget_uranium', 0.1),
    CreateItem.of('mekmm:nugget_silver', 0.1),
    CreateItem.of('mekanism:fluorite_gem')
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
      .loops(1) // Set the number of loops

  //Kaayu
/*
  event.recipes.create.crushing(
    [
      CreateItem.of('minecraft:raw_iron',0.25),
      CreateItem.of('minecraft:raw_copper',0.25),
      CreateItem.of('minecraft:raw_gold', 0.25),
      CreateItem.of('2x minecraft:redstone', 0.25)
    ],
    'kubejs:vanilla_kaayu')

  event.recipes.create.crushing(
    [
      CreateItem.of('ad_astra:raw_desh',0.33),
      CreateItem.of('ad_astra:raw_ostrum',0.33),
      CreateItem.of('ad_astra:raw_calorite', 0.33),
    ],
    'kubejs:space_kaayu')

  event.recipes.create.crushing(
    [
      CreateItem.of('astralsorcery:raw_starmetal', 0.25),
      CreateItem.of('astralsorcery:aquamarine', 0.25),
      CreateItem.of('astralsorcery:rock_crystal', 0.25),
      CreateItem.of('astralsorcery:attuned_rock_crystal', 0.25)
    ],
    'kubejs:astral_kaayu')

  event.recipes.create.crushing(
    [
      CreateItem.of('create:raw_zinc',0.25),
      CreateItem.of('createpropulsion:pine_resin',0.25),
      CreateItem.of('createpropulsion:raw_platinum', 0.25),
      CreateItem.of('2x minecraft:redstone', 0.25)
    ],
    'kubejs:engineering_kaayu')

  event.recipes.create.crushing(
    [
      CreateItem.of('tfmg:raw_lead',0.33),
      CreateItem.of('tfmg:raw_nickel',0.33),
      CreateItem.of('tfmg:raw_lithium', 0.33)
    ],
    'kubejs:industrial_kaayu')

  event.recipes.create.crushing(
    [
      CreateItem.of('mekanism:raw_osmium',0.20),
      CreateItem.of('mekanism:raw_tin',0.20),
      CreateItem.of('mekanism:raw_lead',0.20),
      CreateItem.of('mekanism:raw_uranium', 0.20),
      CreateItem.of('mekmm:raw_silver',0.20)
    ],
    'kubejs:technological_kaayu')
  */

})
