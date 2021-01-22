registerIndicator(
"hello_world",
"our first indicator(v1.0)",
function (context) {
		var dataInput = getDataInput(context, 0)
		var dataOutput = getDataOutput(context, "test")

    // added on 2021.1.21
    var twoTimes = getIndiParameter(context, "twoTimes")

		var calculatedLength = getCalculatedLength(context)
		var i = calculatedLength

		if (i > 0) {
			i--
		} else {
			dataOutput[i] = 0
			i = 1
		}

		while (i < dataInput.length) {
      // modified on 2021.1.21
			// dataOutput[i] = dataInput[i]
      dataOutput[i] = dataInput[i] * twoTimes

			i++
		}
	},
[{
	name: "twoTimes",
	value: 2,
	required: true,
	type: "Integer",
	range: [1, 100]
}], [{
	name: "Volume",
	index: 0
}], [{
	name: "test",
	visible: true,
	renderType: "Line",
	color: "steelblue"
}],
"SEPARATE_WINDOW")
