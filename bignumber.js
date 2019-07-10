function format() {
	this.value = this.value.replace(/[^\d]/g,'')
	this.value = this.value.replace(/\'/g,'')

	var x = this.value.toString().split('.');
  	var x1 = x[0];
	var x2 = x.length > 1 ? `.${x[1]}` : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1\'$2');
	}

	this.value = x1 + x2;
}

(function() {
	var input = document.getElementById('bignumber');

	input.addEventListener("input", format);
})();	



