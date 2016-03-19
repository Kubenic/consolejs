
/* Fonction Debounce : reset un appel de fonction après un délai  */
var debounce = function (fx, delay, immediate){
	var that = this,
		timeout;

	 return function debounced(){
	 	var context = this, arg = arguments;

	 	var later = function(){
	 		timeout = null;
	 		if (!immediate) fx.apply(context, arg);
	 	};

	 	var callNow = immediate &&  !timeout;
	 	clearTimeout(timeout);
	 	timeout = setTimeout(later, delay);
	 	if (callNow) fx.apply(context, arg);
	 };

}

// Thanks Christophe Porteneuve  -- bit.ly/jsyoulove
// Fonction Throttle : stop l'appel à la fonction selon un délai
var throttle = function (fx, minInterval) { 
  var latestCall;

  return function throttled() {
    var now = Date.now();
    if (latestCall + minInterval > now) {
      return;
    }
    latestCall = now;
    var result = fx.apply(this, arguments);
    // Pour un debounce, on mettrait à jour latestCall ici plutôt.
    return result;
  	}

}

function selectAll(selector){
	return document.querySelectorAll(selector);
}

function select(selector){
	return document.querySelector(selector);
}