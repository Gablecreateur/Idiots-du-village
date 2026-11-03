
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

  //Sculk
  /*
  event.recipes.create.crushing(
    [
      CreateItem.of('minecraft:raw_iron',0.02),
      CreateItem.of('minecraft:raw_copper',0.02),
      CreateItem.of('minecraft:raw_gold',0.02),
      CreateItem.of('ad_astra:raw_desh',0.02),
      CreateItem.of('ad_astra:raw_ostrum',0.02),
      CreateItem.of('ad_astra:raw_calorite',0.02),
      CreateItem.of('astralsorcery:raw_starmetal',0.02),
      CreateItem.of('create:raw_zinc',0.02),
      CreateItem.of('createpropulsion:pine_resin',0.02),
      CreateItem.of('createpropulsion:raw_platinum',0.02),
      CreateItem.of('tfmg:raw_lead',0.02),
      CreateItem.of('tfmg:raw_nickel',0.02),
      CreateItem.of('tfmg: raw_lithium',0.02),
      CreateItem.of('mekanism: raw_osmium',0.02),
      CreateItem.of('mekanism: raw_tin',0.02),
      CreateItem.of('mekanism: raw_lead',0.02),
      CreateItem.of('mekanism: raw_uranium',0.02),
      CreateItem.of('mekmm: raw_silver',0.02)
    ]
    ,
    'kubejs:kaayu')
    */

  event.custom({
    type: 'create:crushing',
    ingredients: [{ item: 'kubejs:kaayu' }],
    results:     [
      {id : 'minecraft:raw_iron', chance: 0.02},
      {id : 'minecraft:raw_copper', chance: 0.02},
      {id : 'minecraft:raw_gold', chance: 0.02},
      {id : 'ad_astra:raw_desh', chance: 0.02},
      {id : 'ad_astra:raw_ostrum', chance: 0.02},
      {id : 'ad_astra:raw_calorite', chance: 0.02},
      {id : 'astralsorcery:raw_starmetal', chance: 0.02},
      {id : 'create:raw_zinc', chance: 0.02},
      {id : 'createpropulsion:pine_resin', chance: 0.02},
      {id : 'createpropulsion:raw_platinum', chance: 0.02},
      {id : 'tfmg:raw_lead', chance: 0.02},
      {id : 'tfmg:raw_nickel', chance: 0.02},
      {id : 'tfmg:raw_lithium', chance: 0.02},
      {id : 'mekanism:raw_osmium', chance: 0.02},
      {id : 'mekanism:raw_tin', chance: 0.02},
      {id : 'mekanism:raw_lead', chance: 0.02},
      {id : 'mekanism:raw_uranium', chance: 0.02},
      {id : 'mekmm:raw_silver', chance: 0.02}
    ]
  })



})
