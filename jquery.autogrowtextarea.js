/*
 * Autogrow v3.1 by Jonathan Bredo
 * Forked jQuery plugin from jevin @ GitHub.com.
 * Date: May 5th, 2013
 * Original note:
	* ----------------------------------------------------------------------------
	* "THE BEER-WARE LICENSE" (Revision 42):
	* <jevin9@gmail.com> wrote this file. As long as you retain this notice you
	* can do whatever you want with this stuff. If we meet some day, and you think
	* this stuff is worth it, you can buy me a beer in return. Jevin O. Sewaruth
	* ----------------------------------------------------------------------------
	*
	* Autogrow Textarea Plugin Version v3.0
	* http://www.technoreply.com/autogrow-textarea-plugin-3-0
	* 
	* THIS PLUGIN IS DELIVERD ON A PAY WHAT YOU WHANT BASIS. IF THE PLUGIN WAS USEFUL TO YOU, PLEASE CONSIDER BUYING THE PLUGIN HERE :
	* https://sites.fastspring.com/technoreply/instant/autogrowtextareaplugin
	*
	* Date: October 15, 2012
 */

$.fn.autoGrow = function() {
	return this.each(function() {
		var createMirror = function(textarea) {
			$(textarea).after('<div class="ag-mirror"></div>');
			return $(textarea).next('.ag-mirror')[0];
		}
		var sendContentToMirror = function (textarea) {
			mirror.innerHTML = String(textarea.value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br />') + '.<br/>.';
			if ($(textarea).height() != $(mirror).height()){
				$(textarea).height($(mirror).height());
			}
		}
		var updateStyles = function () {
			$(mirror).css("display", "none");
			$(mirror).css("wordwrap", $(textarea).css("wordwrap"));
			$(mirror).css("padding", $(textarea).css("padding"));
			$(mirror).css("width", $(textarea).css("width"));
			$(mirror).css("font-family", $(textarea).css("font-family"));
			$(mirror).css("font-size", $(textarea).css("font-size"));
			$(mirror).css("line-height", $(textarea).css("line-height"));
			$(mirror).css("-webkit-columns", $(textarea).css("-webkit-columns"));
			$(mirror).css("-moz-columns", $(textarea).css("-moz-columns"));
			$(mirror).css("columns", $(textarea).css("columns"));
		}
		var growTextarea = function () {
			sendContentToMirror(this);
			updateStyles(this);
		}
		var mirror = createMirror(this);
		this.style.overflow = "hidden";
		this.style.minHeight = this.rows+"em";
		this.onkeyup = growTextarea;
		growTextarea(this);
	});
};
