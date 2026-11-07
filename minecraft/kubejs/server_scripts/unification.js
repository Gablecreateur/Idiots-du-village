//Gestion des tags
ServerEvents.tags('item', event  => {

  //Coal Coke - tfmg:coal_coke
  event.add("minecraft:coals", "tfmg:coal_coke")

})



//Gestion des recettes

ServerEvents.recipes(event => {

//Steel Ingots - tfmg:steel_ingot

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
  event.shapeless("mekanism:block_steel", ["9x #c:ingots/steel"])


})
