
printTable(window.navigator);

function printTable(obj){
	document.write("<br><table>");
	for (var v in obj) {
		document.write("<tr>");
		document.write("<td>"+v+"</td><td>"+obj[v]+"</td>");
		document.write("</tr>");
	}
	document.write("</table><br>");
}