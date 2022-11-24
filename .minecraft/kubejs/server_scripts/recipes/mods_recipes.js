let sevent;
function to_plate(ingot, plate) {
    sevent.recipes.createPressing(ingot, plate)
    sevent.recipes.thermal.press(ingot, plate)
}

onEvent("recipes", event => {
    sevent = event

    // 压板
    
})