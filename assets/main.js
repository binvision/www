function copyToCb(e){
		e.preventDefault()
		const el = e.target
		navigator.clipboard.writeText(el.innerHTML);

		el.classList.add("copy-done");
		setTimeout(function(){
			el.classList.remove("copy-done")
		}.bind(el),2000)		
}

// add listeners 
var copyEls = document.querySelectorAll('.js-copy')

copyEls.forEach(function(el){
  el.addEventListener('click', copyToCb)
})
