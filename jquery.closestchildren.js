/*
 * jquery.closestchildren 0.0.1
 *
 * Author: Adam Cook
 * Email: adam@onecreative.pro
 *
 */
 
;(function($){
	$.fn.closestChildren = function(selector,all,results) {
		var $children;

		$children = this.children();

		if ($children.length === 0) {
			if (typeof results === 'object') return results;
			else return $();
		}

		if (typeof results === 'object') results = results.add($children.filter(selector));
		else results = $children.filter(selector);

		if (all !== true) {
			if (results.length > 0) return results;
			else return $children.closestChildMod(selector);
		}else {
			$children = $children.not(results);
			return $children.closestChildMod(selector,all,results);
		}
	};
})(window.jQuery);
