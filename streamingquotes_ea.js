registerEA(
"streaming_quotes", // name
"A test EA to get streaming quotes automatically", // description
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
  window.brokerName = getBrokerNameOfAccount(account)
  window.accountId = getAccountIdOfAccount(account)
  window.symbolName = getEAParameter(context, "symbolName")

	// If you want to call "getAsk" and "getBid", "getQuotes" is required to be called once in the "Init" function.
	// Please note that "getQuotes" has no return value. (The name is a little confusing.)
	getQuotes (context, brokerName, accountId, symbolName)
},
function (context) { // Deinit()
	delete window.brokerName
	delete window.accountId
	delete window.symbolName
},
function (context) { // OnTick()
	// You can only use "getAsk" and "getBid" in the "OnTick" function.
	var ask = getAsk(context, window.brokerName, window.accountId, window.symbolName)
	var bid = getBid(context, window.brokerName, window.accountId, window.symbolName)
	if (ask != null && bid != null) {
		popupMessage((ask + bid) / 2)
	}
})
