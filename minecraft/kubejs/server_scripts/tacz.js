
  var ammo_22wmr = 'tacz:ammo[custom_data={AmmoId:"tacz:22wmr"}]'
  var ammo_9mm = 'tacz:ammo[max_stack_size=60,custom_data={AmmoId:"tacz:9mm"}]'
  var ammo_45acp = 'tacz:ammo[max_stack_size=60,custom_data={AmmoId:"tacz:45acp"}]'
var ammo_762x25 = 'tacz:ammo[max_stack_size=60,custom_data={AmmoId:"tacz:762x25"}]'
var ammo_46x30 = 'tacz:ammo[max_stack_size=60,custom_data={AmmoId:"tacz:46x30"}]'
  var ammo_57x28 = 'tacz:ammo[max_stack_size=60,custom_data={AmmoId:"tacz:57x28"}]'
var ammo_545x39 = 'tacz:ammo[max_stack_size=60,custom_data={AmmoId:"tacz:545x39"}]'
  var ammo_556x45 = 'tacz:ammo[max_stack_size=60,custom_data={AmmoId:"tacz:556x45"}]'
  var ammo_58x42 = 'tacz:ammo[max_stack_size=60,custom_data={AmmoId:"tacz:58x42"}]'
  var ammo_762x39 = 'tacz:ammo[max_stack_size=60,custom_data={AmmoId:"tacz:762x39"}]'
var ammo_762x54 = 'tacz:ammo[max_stack_size=60,custom_data={AmmoId:"tacz:762x54"}]'
  var ammo_308 = 'tacz:ammo[max_stack_size=48,custom_data={AmmoId:"tacz:308"}]'
var ammo_792x57 = 'tacz:ammo[max_stack_size=36,custom_data={AmmoId:"tacz:792x57"}]'
var ammo_68x51fury = 'tacz:ammo[max_stack_size=60,custom_data={AmmoId:"tacz:68x51fury"}]'
var ammo_357mag = 'tacz:ammo[max_stack_size=48,custom_data={AmmoId:"tacz:357mag"}]'
  var ammo_50ae = 'tacz:ammo[max_stack_size=48,custom_data={AmmoId:"tacz:50ae"}]'
var ammo_500mag = 'tacz:ammo[max_stack_size = 42, custom_data = { AmmoId: "tacz:500mag" }]'
var ammo_45_70 = 'tacz:ammo[max_stack_size = 48, custom_data = { AmmoId: "tacz:45_70" }]'
var ammo_12g = 'tacz:ammo[max_stack_size = 36, custom_data = { AmmoId: "tacz:12g" }]'
var ammo_rpg_rocket = 'tacz:ammo[max_stack_size = 6, custom_data = { AmmoId: "tacz:rpg_rocket" }]'
var ammo_40mm = 'tacz:ammo[max_stack_size = 6, custom_data = { AmmoId: "tacz:40mm" }]'
  var ammo_50bmg = 'tacz:ammo[max_stack_size=30,custom_data={AmmoId:"tacz:50bmg"}]'
var ammo_30_06 = 'tacz:ammo[max_stack_size = 36, custom_data = { AmmoId: "tacz:30_06" }]'
var ammo_338 = 'tacz:ammo[max_stack_size = 30, custom_data = { AmmoId: "tacz:338" }]'



ServerEvents.recipes(event => {

  event.recipes.create.mixing(Item.of(ammo_9mm,50), [Ingredient.of('#c:ingots/copper',10),Ingredient.of('#c:gunpowders',2)])
  event.recipes.create.mixing(Item.of(ammo_45acp, 30), [Ingredient.of('#c:plates/copper', 10), Ingredient.of('#c:gunpowders', 2)])
  event.recipes.create.mixing(Item.of(ammo_58x42, 40), [Ingredient.of('#c:plates/copper', 15), Ingredient.of('#c:gunpowders', 2), Ingredient.of('#c:dusts/salt', 1)])
  event.recipes.create.mixing(Item.of(ammo_57x28, 48), [Ingredient.of('#c:ingots/copper', 15), Ingredient.of('#c:gunpowders', 2), Ingredient.of('#c:ingots/steel', 1)])
  event.recipes.create.mixing(Item.of(ammo_792x57, 48), [Ingredient.of('#c:ingots/copper', 20), Ingredient.of('#c:gunpowders', 3), Ingredient.of('#c:dusts/salt', 1),Ingredient.of('#minecraft:coals', 2) ])


  event.recipes.create.compacting(Item.of(ammo_22wmr, 64), [Ingredient.of('#c:storage_blocks/copper', 1), Ingredient.of('#c:gunpowders', 2)])
  event.recipes.create.compacting(Item.of(ammo_50ae, 36), [Ingredient.of('#c:ingots/steel', 30), Ingredient.of('#c:gunpowders', 10), Ingredient.of('#c:gems/emerald', 5)])

  event.recipes.create.mixing(Item.of(ammo_556x45, 45), [Ingredient.of('#c:ingots/iron', 15), Ingredient.of('#c:gunpowders', 3)])
  event.recipes.create.mixing(Item.of(ammo_762x39, 35), [Ingredient.of('#c:plates/iron', 15), Ingredient.of('#c:gunpowders', 3)])

  event.recipes.create.mixing(Item.of(ammo_308, 60), [Ingredient.of('#c:ingots/bronze', 30), Ingredient.of('#c:gunpowders', 10), Ingredient.of('#c:gems/lapis', 1)])


  event.recipes.create.mixing(Item.of(ammo_50bmg, 24), [Ingredient.of('#c:storage_blocks/bronze', 6),Ingredient.of('#c:storage_blocks/steel', 4), Ingredient.of('createbigcannons:nitropowder', 10), Ingredient.of('#c:gems/diamond', 6)]).heated()
  event.recipes.create.mixing(Item.of(ammo_12g, 18), [Ingredient.of('#c:ingots/copper', 15), Ingredient.of('#c:gunpowders', 6), Ingredient.of('#c:nuggets/iron', 18)])


})
