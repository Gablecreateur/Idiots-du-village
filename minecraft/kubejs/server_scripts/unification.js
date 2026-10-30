//Gestion des tags
ServerEvents.tags('item', event  => {

  //Coal Coke - tfmg:coal_coke
  event.add("minecraft:coals", "tfmg:coal_coke")

  //Steel Ingots - tfmg:steel_ingot
  event.remove('c:ingots/steel', ['createbigcannons:steel_ingot', 'mekanism:ingot_steel', 'ad_astra:steel_ingot'])

  //Steel Nuggets - tfmg:steel_nugget
  event.remove('c:nuggets/steel', ['mekanism:nugget_steel', 'ad_astra:steel_nugget', 'createbigcannons:steel_scrap'])

  //Steel Block - mekanism:block_steel
  event.remove('c:storage_blocks/steel', ['createbigcannons:steel_block', 'tfmg:steel_block', 'ad_astra:steel_block'])

  //Tomato Seeds - farmersdelight:tomato_seeds
  event.remove('c:seed/tomato', ['kaleidoscope_cookery:tomato_seed', 'farm_and_charm:tomato_seeds'])

  //Tomato - kaleidoscope_cookery:tomato
  event.remove('c:crops/tomato', ['farmersdelight:tomato', 'farm_and_charm:tomato'])
  event.remove('c:vegetable/tomato', ['farmersdelight:tomato', 'farm_and_charm:tomato'])

  //Rice - farmersdelight:rice
  event.remove('c:crops/rice', ['actuallyadditions:rice', 'kaleidoscope_cookery:rice'])
  event.remove('c:grain/rice', ['actuallyadditions:rice', 'kaleidoscope_cookery:rice'])
})

ServerEvents.tags('block', event  => {

  //Steel Block - mekanism:block_steel
  event.remove('c:storage_blocks/steel', ['createbigcannons:steel_block', 'tfmg:steel_block', 'ad_astra:steel_block'])

})

//Gestion des recettes
ServerEvents.recipes(event => {
  //Steel Ingots - tfmg:steel_ingot

  event.remove({ id: "mekanism:storgae_blocks/steel" })
  event.remove({type : "minecraft:smelting", output : "mekanism:ingot_steel"})
  event.remove({type : "minecraft:blasting", output : "mekanism:ingot_steel"})

  event.shapeless("tfmg:steel_ingot", ["9x #c:nuggets/steel"])
  event.smelting("tfmg:steel_ingot", "#c:dusts/steel")
  event.blasting("tfmg:steel_ingot", "#c:dusts/steel")
  event.custom({
    type: "ad_astra:alloying",
    ingredients: [
      { tag: "c:ingots/iron"},
      { tag: "minecraft:coals"}
    ],
    result: Item.of("tfmg:steel_ingot"),
    cookingtime: 100,
    energy : 20
  })

  //Steel Block
  event.remove({id: "mekanism:storgae_blocks/steel"})
  event.shapeless("mekanism:block_steel", ["9x #c:ingots/steel"])

})
