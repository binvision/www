function copyToClipboard(e){
		navigator.clipboard.writeText(e.target.innerHtml);
	
		/* Alert the copied text */
		alert("Copied the text: " + e.target.innerHtml);
}