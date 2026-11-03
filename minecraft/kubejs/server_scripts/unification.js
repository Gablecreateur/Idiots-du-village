//Gestion des tags
ServerEvents.tags('item', event  => {

  //Coal Coke - tfmg:coal_coke
  event.add("minecraft:coals", "tfmg:coal_coke")

  //Steel Ingots - tfmg:steel_ingot
  event.remove('c:ingots/steel', ['createbigcannons:steel_ingot', 'mekanism:ingot_steel', 'ad_astra:steel_ingot'])

  //Steel Nugget - tfmg:steel_nugget
  event.remove('c:nuggets/steel', ['mekanism:nugget_steel', 'ad_astra:steel_nugget', 'createbigcannons:steel_scrap'])

  //Steel Block - mekanism:block_steel
  event.remove('c:storage_blocks/steel', ['createbigcannons:steel_block', 'tfmg:steel_block', 'ad_astra:steel_block'])

  //Cast Iron Nugget- tfmg:cast_iron_nugget
  event.remove('c:nuggets/cast_iron', ['createbigcannons:cast_iron_nugget'])

  //Lead Nugget - tfmg:lead_nugget
  event.remove('c:nuggets/lead', ['mekanism:nugget_lead'])

  //Lead Ingot - tfmg:lead_ingot
  event.remove('c:ingots/lead', ['mekanism:ingot_lead'])

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
  event.remove({ type: "minecraft:blasting", output: "mekanism:ingot_steel" })
  event.remove({ output : "ad_astra:steel_ingot"})
  event.remove({ id: 'ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_barrier' })

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

  //Lead Ingot
  event.smelting("tfmg:lead_ingot", "#c:dusts/lead")
  event.blasting("tfmg:lead_ingot", "#c:dusts/lead")

  event.smelting("tfmg:lead_ingot", "#c:raw_materials/lead")
  event.blasting("tfmg:lead_ingot", "#c:raw_materials/lead")

  //Steel Block
  event.remove({id: "mekanism:storgae_blocks/steel"})
  event.shapeless("mekanism:block_steel", ["9x #c:ingots/steel"])


})
