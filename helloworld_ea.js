registerEA(
"hello_world", // name
"our first ea", // description
[], // parameter
function (context) { // Init()
  popupMessage("Init function!")
		},
function (context) { // Deinit()
  popupMessage("Deinit function!")
		},
function (context) { // OnTick()
  popupMessage("OnTick function!")
    })
