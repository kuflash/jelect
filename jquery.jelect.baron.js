/*! jquery.jelect.baron.js v1.0.0 | felixexter | MIT License | https://github.com/CSSSR/jelect/ */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		factory(require('jquery'));
	} else {
		factory(jQuery);
	}
}(function ($) {

	'use strict';

	var
		pluginName = 'jelect',
		Baron = $.noop;

	$.extend(true, $[pluginName], {
		options: {
			classes: {
				optionsHasScroll: pluginName + '-options_has_scroll',
				optionDisabled: pluginName + '-option_state_disabled'
			}
		},
		selectors: {
			scroller: '.js-' + pluginName + '-scroller',
			scrollbar: '.js-' + pluginName + '-scrollbar'
		},
		keyCode: {
			UP:	38,
			DOWN: 40,
			PAGEUP: 33,
			PAGEDOWN: 34,
			HOME: 36,
			END: 35,
			TAB: 9
		}
	});

	$[pluginName].plugins.baron = {
		init: function (jelect) {
			var selectors = $[pluginName].selectors;

			jelect.$jelectOptions.data('baron', jelect.$jelectOptions.baron({
				root: selectors.options,
				scroller: selectors.scroller,
				bar: selectors.scrollbar,
				barOnCls: jelect.options.classes.optionsHasScroll
			}));
		}
	};

}));
