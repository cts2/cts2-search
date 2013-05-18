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
				  <code>heart*</code>\
				  <br><code>he?rt</code>\
				  <br><code>heart~</code>\
				  <br><code>heart AND attack</code>\
				  <br><code>heart^5 AND attack</code>\
				  <br><code>heart -attack</code>\
				  <br><code>code:118797008 AND heart</code>\
				  </li>\
				  </ul>"
		,
		trigger : "hover",
		placement : "right"
	}
};