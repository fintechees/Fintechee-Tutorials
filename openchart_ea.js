registerEA(
"open_chart", // name
"A test EA to open a chart automatically", // description
[{
	name: "symbolName",
	value: "EUR/USD",
	required: true,
	type: "String", // Integer, Number, Boolean
	range: null,
	step: null
}], // parameter
function (context) { // Init()
  var account = getAccount(context, 0)
  var brokerName = getBrokerNameOfAccount(account)
  var accountId = getAccountIdOfAccount(account)
  var symbolName = getEAParameter(context, "symbolName")

  window.chartHandle = getChartHandle(context, brokerName, accountId, symbolName, TIME_FRAME.M1)
},
function (context) { // Deinit()
  delete window.chartHandle
},
function (context) { // OnTick()
})
