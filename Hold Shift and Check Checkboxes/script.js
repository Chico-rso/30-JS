const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;
function hadleCheck(e)
{
	let inBetween = false;
	if(e.shiftKey && this.checked)
	{
		checkboxes.forEach((el) => {
			if( el === this || el === lastChecked )
			{
				inBetween = !inBetween;
			}
			if(inBetween)
			{
				el.checked = true;
			}
		})
	}
	lastChecked = this;
}

checkboxes.forEach(function(element) {
	element.addEventListener('click', hadleCheck)
})