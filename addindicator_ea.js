registerEA(
"add_indicator", // name
"A test EA to add an indicator automatically", // description
[{
	name: "symbolName",
	value: "EUR/USD",
	required: true,
	type: "String", // Integer, Number, Boolean
	range: null,
	step: null
}, {
	name: "period",
	value: 20,
	required: true,
	type: "Integer",
	range: [1, 100],
	step: null
}], // parameter
function (context) { // Init()
  var account = getAccount(context, 0)
  var brokerName = getBrokerNameOfAccount(account)
  var accountId = getAccountIdOfAccount(account)
  var symbolName = getEAParameter(context, "symbolName")
	var period = getEAParameter(context, "period")

	window.indiHandle = getIndicatorHandle(context, brokerName, accountId, symbolName, TIME_FRAME.M1, "sma", [{
		name: "period",
		value: period
	}])
},
function (context) { // Deinit()
  delete window.indiHandle
},
function (context) { // OnTick()
})
