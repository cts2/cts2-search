var help = {
	searchButton : {
		title : "Search Button",
		content : "Push this button to execute the current query.",
		trigger : "hover"
	},
	clearButton : {
		title : "Clear Button",
		content : "This button will clear all search results and reset all search fields to their default state.",
		trigger : "hover"
	},
	contains : {
		title : "Contains",
		html : true,
		content : "<b>Contains: </b>A trailing wildcard algorithm.<br><b>Matches</b> <code>* term* *</code>",
		trigger : "hover",
		placement : "right"
	},
	luceneQuery : {
		title : "Match Algorithm",
		html : true,
		content : "<b>LuceneQuery: </b>The Lucene Query Syntax.<br>\
				  <h5>Examples</h5>\
				  Wildcard (multiple chars): <code>heart*</code>\
				  <br>Wildcard (single char): <code>he?rt</code>\
				  <br>Fuzzy Match: <code>heart~</code>\
				  <br>Boolean: <code>heart AND attack</code>\
				  <br>Boosting: <code>heart^5 AND attack</code>\
				  <br>Negation: <code>heart -attack</code>\
				  <br>Code Field: <code>code:118797008 AND heart</code>"
		,
		trigger : "hover",
		placement : "right"
	}
};