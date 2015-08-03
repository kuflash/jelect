# Jelect
![Jelect](app/images/jelect.png)<br>
A functional wrapper for a stylized select.

[View example](https://csssr.github.io/jelect/)

## Download
* [The compressed, production jquery.jelect.min.js v1.0.0](https://raw.githubusercontent.com/CSSSR/jelect/master/jquery.jelect.min.js)
* [The uncompressed, development jquery.jelect.js v1.0.0](https://raw.githubusercontent.com/CSSSR/jelect/master/jquery.jelect.js)


## Compatibility

Chrome, Safari, Firefox, Opera, IE9+, IOS4+, Android, Windows Phone.

## Usage

### JavaScript

Include jQuery and the Jelect script in right before your body closing tag.

```html
<script src="/path/to/libs/jquery-2.1.3.min.js"></script>
<script src="/path/to/jquery.jelect.min.js"></script>
```

### CSS

Customize with default or custom CSS classes.

See in [example](https://github.com/CSSSR/jelect/tree/master/src/stylus/jelect.styl).

### HTML

The component can be used in two variations. As a regular drop-down list:

```html
<div id="jelectTool1" role="combobox" class="jelect js-jelect">
	<input id="jelectToolInput" value="0" data-text="gulp" type="text" class="jelect-input js-jelect-input">
	<div tabindex="1" role="button" class="jelect-current js-jelect-current">gulp</div>
	<div role="list-box" class="jelect-options js-jelect-options">
		<div class="jelect-scroller js-jelect-scroller">
			<div data-val="0" tabindex="1" role="option" class="jelect-option js-jelect-option jelect-option_state_active"><div class='jelect-option__value js-jelect-option-value'>gulp</div></div>
			<div data-val="1" tabindex="1" role="option" class="jelect-option js-jelect-option"><div class='jelect-option__value js-jelect-option-value'>browser-sync</div></div>
			<div data-val="2" tabindex="1" role="option" class="jelect-option js-jelect-option"><div class='jelect-option__value js-jelect-option-value'>del</div></div>
			<div data-val="3" tabindex="1" role="option" class="jelect-option js-jelect-option"><div class='jelect-option__value js-jelect-option-value'>gulp-autoprefixer</div></div>
			<!-- ... -->
		</div>
		<div class="jelect-track">
			<div class="jelect-scrollbar js-jelect-scrollbar"></div>
		</div>
	</div>
</div>
```

So list of autocompletion and filtration values::

```html
<div id="jelectTool1" role="combobox" class="jelect jelect_type_autocomplete js-jelect">
	<input type="text" id="jelectToolInput" name="jelectToolInput" tabindex="1" class="jelect-current js-jelect-current" value="0"/>
	<div role="list-box" class="jelect-options js-jelect-options">
		<div class="jelect-scroller js-jelect-scroller">
			<div data-val="0" tabindex="1" role="option" class="jelect-option js-jelect-option jelect-option_state_active"><div class='jelect-option__value js-jelect-option-value'>gulp</div></div>
			<div data-val="1" tabindex="1" role="option" class="jelect-option js-jelect-option"><div class='jelect-option__value js-jelect-option-value'>browser-sync</div></div>
			<div data-val="2" tabindex="1" role="option" class="jelect-option js-jelect-option"><div class='jelect-option__value js-jelect-option-value'>del</div></div>
			<div data-val="3" tabindex="1" role="option" class="jelect-option js-jelect-option"><div class='jelect-option__value js-jelect-option-value'>gulp-autoprefixer</div></div>
			<!-- ... -->
		</div>
		<div class="jelect-track">
			<div class="jelect-scrollbar js-jelect-scrollbar"></div>
		</div>
	</div>
</div>
```

If you are using Jade, you can use ready-made mixins this [example](https://github.com/CSSSR/jelect/blob/v1.x.x/app/templates/blocks/main.jade)

### Fire the plugin

Bind Jelect behaviour on every link with the `.jelect` class.

```javascript
$( '.jelect' ).jelect();
```

To get a current value bind `change` on an inner input element.

```javascript
$( '#jelect' ).on( 'change', function (e) {
    console.log( this.value + ' | ' + this.dataset.text );
});
```

You can change the selected value from the code:

```javascript
$( '#jelect' ).jelect('setValue', 1);
```

For disable selection jelect use next construction:

```javascript
$( '#jelect' ).jelect('disable');
```

For enable selection jelect use next construction:

```javascript
$( '#jelect' ).jelect('enable');
```

For disable/enable single options use next construction:

```javascript
$( '#jelect' ).jelect('enable', 1);
$( '#jelect' ).jelect('disable', 2);
```

### Default Options

Uses for custom CSS classes.

Class | Description
--- | ---
`'.jelect'` | A Jelect wrapper.
`'.jelect-input'` | An input type text. It's hidden field
`'.jelect-current'` | A caption for a current text. It may also be an input field for the version with autocompletion.
`'.jelect-options'` | A dropdown wrapper.
`'.jelect-option'` | An option.
`'.jelect_state_active'` | An active state of Jelect wrapper.
`'.jelect_state_disabled'` | An disable state of Jelect wrapper.
`'.jelect-options_state_active'` | An active state of a dropdown wrapper.
`'.jelect-option_state_active'` | An active state of option.
`'.jelect-option_state_disabled'` | An disable state of option

## License

Released under the MIT license.
