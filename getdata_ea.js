registerEA(
"get_data", // name
"A test EA to get data automatically", // description
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
  window.brokerName = getBrokerNameOfAccount(account)
  window.accountId = getAccountIdOfAccount(account)
  window.symbolName = getEAParameter(context, "symbolName")
	var period = getEAParameter(context, "period")

	window.chartHandle = getChartHandle(context, window.brokerName, window.accountId, window.symbolName,
		TIME_FRAME.M1)

	window.indiHandle = getIndicatorHandle(context, window.brokerName, window.accountId, window.symbolName,
		TIME_FRAME.M1,
		"sma",
		[{
			name: "period",
			value: period
		}])
},
function (context) { // Deinit()
	delete window.chartHandle
  delete window.indiHandle
	delete window.brokerName
	delete window.accountId
	delete window.symbolName
},
function (context) { // OnTick()
	var arrClose = getData(context, window.chartHandle, DATA_NAME.CLOSE)
	var arrSma = getData(context, window.indiHandle, "sma")
	if (arrSma[arrSma.length - 1] > arrClose[arrClose.length - 1]) {
		popupMessage("The SMA is above the Close value of the last candlestick.")
	} else {
		popupMessage("The SMA is below the Close value of the last candlestick.")
	}
})
