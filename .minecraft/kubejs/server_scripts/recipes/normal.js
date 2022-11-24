onEvent("recipes", event => {
	// 常规配方
    event.recipes.create.mixing([Fluid.of('thermal:redstone',50), '5x minecraft:netherrack', Fluid.of('tconstruct:molten_obsidian', 150)],[
		Fluid.of('minecraft:lava', 100),
		'5x minecraft:magma_block',
        'minecraft:redstone'
	]).heated()
})