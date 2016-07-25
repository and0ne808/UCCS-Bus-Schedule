/*
 * This script generates a back button.
 */
function goBack() {
	window.history.back();
}
 
 
document.write("<div class=\"app-button\" onclick=\"goBack()\">\
<table>\
<tr>\
<td class=\"arrow\">\
<h2><</h2>\
</td>\
<td>\
<h2>Back</h2>\
</td>\
</tr>\
</table>\
</div>\
");