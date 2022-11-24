function coilCrafting(event, output, input, fluid, deploying) {
    event.remove({output: output})
    let inter = input
    event.recipes.createSequencedAssembly([output], input, [
        event.recipes.createFilling(inter, [inter, Fluid.of(fluid, 350)]),
        event.recipes.createPressing(inter, inter),
        event.recipes.createDeploying(inter, [inter, deploying]),
        event.recipes.createCutting(inter, inter)
    ]).transitionalItem(inter).loops(3)
}

function cellCrafting(event, coil, cost, output) {
    event.remove({output: output})
    let inter = "thermal:rf_coil"
    event.recipes.createSequencedAssembly([output], "thermal:rf_coil", [
        event.recipes.createDeploying(inter, [inter, cost]),
        event.recipes.createFilling(inter, [inter, Fluid.of("minecraft:lava", 300)]),
        event.recipes.createPressing(inter, inter),
        event.recipes.createFilling(inter, [inter, Fluid.of("thermal:redstone", 100)]),
        event.recipes.createDeploying(inter, [inter, coil]),
        event.recipes.createCutting(inter, inter)
    ]).transitionalItem(inter).loops(3)
}

onEvent('recipes', event => {

    // 线圈
    coilCrafting(event, "ironjetpacks:basic_coil", "thermal:rf_coil", "tconstruct:molten_iron", "thermal:rf_coil")
    coilCrafting(event, "ironjetpacks:advanced_coil",  "ironjetpacks:basic_coil", "tconstruct:molten_gold", "ironjetpacks:basic_coil")
    coilCrafting(event, "ironjetpacks:elite_coil",  "ironjetpacks:advanced_coil", "tconstruct:molten_diamond", "ironjetpacks:advanced_coil")
    coilCrafting(event, "ironjetpacks:ultimate_coil",  "ironjetpacks:elite_coil", "tconstruct:molten_emerald", "ironjetpacks:elite_coil")

    // 能量电池
    cellCrafting(event, "ironjetpacks:basic_coil", "#minecraft:planks", "ironjetpacks:wood_cell")
    cellCrafting(event, "ironjetpacks:basic_coil", "#forge:ingots/copper", "ironjetpacks:copper_cell")
    cellCrafting(event, "ironjetpacks:basic_coil", "#forge:stone", "ironjetpacks:stone_cell")
    cellCrafting(event, "ironjetpacks:advanced_coil", "#forge:ingots/bronze", "ironjetpacks:bronze_cell")
    cellCrafting(event, "ironjetpacks:advanced_coil", "#forge:ingots/iron", "ironjetpacks:iron_cell")
    cellCrafting(event, "ironjetpacks:advanced_coil", "#forge:ingots/silver", "ironjetpacks:silver_cell")
    cellCrafting(event, "ironjetpacks:advanced_coil", "#forge:ingots/electrum", "ironjetpacks:electrum_cell")
    cellCrafting(event, "ironjetpacks:advanced_coil", "#forge:ingots/gold", "ironjetpacks:gold_cell")
    cellCrafting(event, "ironjetpacks:advanced_coil", "#forge:ingots/invar", "ironjetpacks:invar_cell")
    cellCrafting(event, "ironjetpacks:advanced_coil", "#forge:ingots/steel", "ironjetpacks:steel_cell")
    cellCrafting(event, "ironjetpacks:elite_coil", "#forge:gems/diamond", "ironjetpacks:diamond_cell")
    cellCrafting(event, "ironjetpacks:ultimate_coil", "#forge:gems/emerald", "ironjetpacks:emerald_cell")
})
