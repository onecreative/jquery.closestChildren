/*
 * jquery.closestchildren 0.0.1
 *
 * Author: Adam Cook
 * Email: adam@onecreative.pro
 *
 */
 
;(function($){
	$.fn.closestChildren = function(selector,all,results) {
		var $children = this.children();
		if ($children.length === 0) {
			if (typeof results === 'object') return results;
			else return $();
		}
		
		if (typeof results === 'object') results = results.add($children.filter(selector));
		else results = $children.filter(selector);

		if (all !== true) return (results.length > 0) ? results : $children.closestChildren(selector);
		else return $children.not(results).closestChildren(selector,all,results);
	};
})(window.jQuery);
