const inputs = document.querySelectorAll('.controls input');
function heandleUpdate()
{
	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}
inputs.forEach((input) =>{input.addEventListener('change',heandleUpdate)});
inputs.forEach((input) =>{input.addEventListener('mousemove',heandleUpdate)});

//create function sort array