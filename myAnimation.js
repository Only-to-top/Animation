//animations
(function($) {
	$.fn.animated = function(inEffect) {
		$(this).each(function() {
			var ths = $(this);
			ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
				if (dir === "down") {
					ths.addClass(inEffect).css("opacity", "1");
				};
			}, {
				offset: "80%"
			});
		});
	};
})(jQuery);

$(document).ready(function() {
	
	$("section h1").animated("jello", "zoomOutDown");

})