//Suppression des tags
onEvent('item.tags', event  => {

    //Steel Ingots
    event.remove('c:ingots/steel', ['createbigcannons:steel_ingot', 'mekanism:ingot_steel', 'ad_astra:steel_ingot'])

    //Steel Nuggets
    event.remove('c:nuggets/steel', ['mekanism:nugget_steel', 'ad_astra:steel_nugget'])

    //Tomato Seeds
    event.remove('c:seed/tomato', ['kaleidoscope_cookery:tomato_seed', 'farm_and_charm:tomato_seeds'])

    //Tomato
    event.remove('c:crops/tomato', ['farmersdelight:tomato', 'farm_and_charm:tomato'])
    event.remove('c:vegetable/tomato', ['farmersdelight:tomato', 'farm_and_charm:tomato'])

    //Rice
    event.remove('c:crops/rice', ['actuallyadditions:rice', 'kaleidoscope_cookery:rice'])
    event.remove('c:grain/rice', ['actuallyadditions:rice', 'kaleidoscope_cookery:rice'])
})
onEvent('block.tags', event  => {

    //Steel Blocks
    event.remove('c:storage_block/steel', ['createbigcannons:steel_block', 'tfgm:steel_block', 'ad_astra:steel_block'])

})
