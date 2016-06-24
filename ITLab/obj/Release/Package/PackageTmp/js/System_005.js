<!--//--><%
//=============================================================================
// Jocys.com JavaScript.NET Classes               (In C# Object Oriented Style)
// Created by Evaldas Jocys <evaldas@jocys.com>
//-----------------------------------------------------------------------------
// You can include this script on both sides - server and client:
// Server: <!-- #INCLUDE FILE="ScriptFile.js" -->
// Client: <script type="text/javascript" src="ScriptFile.js"></script>
//-----------------------------------------------------------------------------
// Warning: Be careful about what code you include in such way. Since the  code
// will be passed to the client side as simple text, your code can be  seen  by
// anyone who wants. Never do this with  scripts  which  contain  any  kind  of
// passwords, database connection strings, or SQL queries.
//=============================================================================

/// <reference name="System.Text.js" assembly="System.Text" />

//=============================================================================
// Namespaces
//-----------------------------------------------------------------------------
// <PropertyGroup>
//		<RootNamespace>System.Text</RootNamespace>
// <PropertyGroup>
//-----------------------------------------------------------------------------
System.Type.RegisterNamespace("System.Text");
System.Type.RegisterNamespace("System.Text.RegularExpressions.Templates");
//=============================================================================

// w[.w]@w[.w].[w]
System.Text.RegularExpressions.Templates.Email = new RegExp("^[A-Z0-9_%-]+(|([\.][A-Z0-9_%-]+)+)@[A-Z0-9_%-]+(|([\.][A-Z0-9_%-]+)+)$","i");
System.Text.RegularExpressions.Templates.EmailStrict = new RegExp("^[A-Z0-9_%-]+(|([\.][A-Z0-9_%-]+)+)@[A-Z0-9_%-]+(|([\.][A-Z0-9_%-]+)+)[\.](([0-9]{1,3})|([A-Z]{2,3})|(aero|coop|info|museum|name))$","i");

//System.Text.RegularExpressions.Templates.EmailStrict = new RegExp("^([a-zA-Z0-9_\-\.])+@(([0-2]?[0-5]?[0-5]\.[0-2]?[0-5]?[0-5]\.[0-2]?[0-5]?[0-5]\.[0-2]?[0-5]?[0-5])|((([a-zA-Z0-9\-])+\.)+([a-zA-Z\-])+))$","i");

System.Text.RegularExpressions.GetByTag = function(tagName, ignoreCase){
	// Create regular expression. Replace will be global (g - replace all).
	// The non-greedy repeats are possible by appending a '?' after the repeat;
	// a non-greedy repeat is one which will match the shortest possible string.
	var regex = new RegExp("<\s*"+tagName+"[^>]*>(.*?)<\s*/"+tagName+"\s*>","g");
	// Set ignore case (by default case sensitive).
	regex.ignoreCase = (ignoreCase == true);
	// Return results.
	return regex;
}


//System.Text.RegularExpressions.GetFromTag  = function(valTagName){
//	var fragment = "(?:<"+valTagName+".*?>)((n|.)*?)(?:</"+valTagName+">)";
//	var matchRegExp = new RegExp(fragment, 'im');
//	// Retunr inline text.
//	// innerText = someText.match(matchRegExp)[1];
//	return match;
//}


System.Text.RegularExpressions.GetMatch  = function(text, matchPattern, variable){
	// Get first match;
	var results = new String;
	if (variable == null) variable = "$1";
	var regex = new RegExp(matchPattern);
	if (text.match(regex) != null){
		var textMatch = text.match(regex)[0];
		// extract variable;
		var results = textMatch.replace(regex, variable);
	}
	return results;
}


System.Text.RegularExpressions.GetEscapedPattern = function(s){
	/// <summary>
	/// Get Regular expression pattern from string. All chars will be converted to \uNNNN form.
	/// </summary>
	/// <param name="s">String to convert</param>
	/// <returns>Regular expression pattern</returns>
	var pattern = new String();
	for (var i = 0; i < s.length; i++){
		var hex = s.charCodeAt(i).toString(16);
		pattern += "\\u"+"0000".substr(0,4-hex.length)+hex+"";
	}
	return pattern;
}


System.Text.RegularExpressions.Trim = function(text, symbols, escapePattern){
	/// <summary>
	/// Trim symbols from string. Trim space by default.
	/// </summary>
	/// <returns name="s" type="String">Trimmed string.</returns>
	if (!symbols) symbols = " ";
	var pattern = symbols;
	if (escapePattern){
		pattern = System.Text.RegularExpressions.GetEscapedPattern(symbols);
	}
	//Trace.Write("call System.Text.RegularExpressions.Trim(text, '"+pattern+"')");
	var trimLeft = new RegExp("^["+pattern+"]+","gm");
	var trimRight = new RegExp("["+pattern+"]+$","gm");
	var newText = text.replace(trimLeft,"").replace(trimRight,"");
	return newText;
}

System.Text.RegularExpressions.Replace = function(text, findPattern, replacePattern, ignoreCase){
	var text = new String(text);
	// Create regular expression. Replace will be global (g - replace all).
	var regexFind = new RegExp(findPattern,"g")
	// Create regular expression.
	var regexRepl = new RegExp(replacePattern);
	// Set ignore case (by default case sensitive).
	regexFind.ignoreCase = (ignoreCase == true);
	// Return results.
	return text.replace(regexFind, replacePattern);
}

//=============================================================================
// CLASS: ControlChars
//-----------------------------------------------------------------------------

System.Text.ControlChars = {
	Tab: 0x9,		// Tab
	Vt: 0xB,		// Vertical Tab
	Ff: 0xC,		// Form Feed
	Space: 0x20,	// Space
	Lf: 0xA,		// Line Feed
	Bs: 0x8,		// Backspace
	Ht: 0x9,		// Horizontal Tab
	Dq: 0x22,		// Double Quote
	Sq: 0x27,		// Single Quote
	Bh: 0x5C		// Backslash \
}

System.Text.UtfSignatures = {
	Utf16Le: 0xFFFF,	// UTF-16 LE (Little Endian) - Windows
	Utf16Be: 0xFEFF,	// UTF-16 BE (Big Endian) - Macintosh
	Utf8: 0xEFBBBF		// UTF-8
}


//=============================================================================
// CLASS: StringBuilder
//-----------------------------------------------------------------------------

System.Text.StringBuilder = function(value){
	//---------------------------------------------------------
	// Public properties.
	this.Type = "System.Text.StringBuilder";
	//---------------------------------------------------------
	// Private properties.
	var _parts = new Array();
	//---------------------------------------------------------
	this.Append = function(value){
		var results = true;
		// if value is undefined.
		if (typeof(value) == 'undefined'){
			results = false;
		} else {
			_parts.push(value);
		}
		return results;
	}
	//---------------------------------------------------------
	this.AppendLine = function(value){
		return this.Append(value+'\r\n');
	}
	//---------------------------------------------------------
	this.Clear = function(){
		if (_parts.length > 0){
			_parts.splice(0, _parts.length);
		}
	}
	//---------------------------------------------------------
	this.IsEmpty = function(){
		return (_parts.length == 0);
	}
	//---------------------------------------------------------
	this.ToString = function(delimiter){
		return _parts.join(delimiter || '');
	}
	//---------------------------------------------------------
	this.ToArray = function(delimiter){
		return _parts;
	}
	//---------------------------------------------------------
	this.InitializeClass = function(){
		if (value) this.Append(value);
	}
	this.InitializeClass();
}
System.Class.RegisterClass("System.Text.StringBuilder");

//=============================================================================
// CLASS: Encoder.UTF8
//-----------------------------------------------------------------------------

System.Type.RegisterNamespace("System.Text.Encoding");

// UTF-8, a transformation format of ISO 10646:
// http://www.ietf.org/rfc/rfc3629.txt
// Transformation:
// http://www.czyborra.com/utf/
//
//   The table below summarizes the format of these different octet types.
//   The letter x indicates bits available for encoding bits of the
//   character number.
//
//    Char. number range   |        UTF-8 octet sequence
//       (hexadecimal)     |              (binary)
//   ----------------------+---------------------------------------------
//   0000 0000 - 0000 007F | 0xxxxxxx
//   0000 0080 - 0000 07FF | 110xxxxx 10xxxxxx
//   0000 0800 - 0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx
//   0001 0000 - 0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx

System.Text.Encoding.UTF8Encoder = function(){
	//---------------------------------------------------------
	// Public properties.
	this.Type = "System.Text.Encoding.UTF8Encoder";
	//---------------------------------------------------------
	// Private properties.
	var me = this;
	//---------------------------------------------------------
	this.GetBytes = function(s){
		/// <summary>
		/// Get array of bytes.
		/// </summary>
		var bytes = new Array();
		var c = new Number;
		for (var i = 0; i < s.length; i++){
			c = s.charCodeAt(i);
			// Convert char code to bytes.
			if (c < 0x80){
				bytes.push(c);
			} else if (c < 0x800) {
				bytes.push(0xC0 | c>>6);
				bytes.push(0x80 | c & 0x3F);
			} else if (c < 0x10000) {
				bytes.push(0xE0 | c>>12);
				bytes.push(0x80 | c>>6 & 0x3F);
				bytes.push(0x80 | c & 0x3F);
			} else if (c < 0x200000) {
				bytes.push(0xF0 | c>>18);
				bytes.push(0x80 | c>>12 & 0x3F);
				bytes.push(0x80 | c>>6 & 0x3F);
				bytes.push(0x80 | c & 0x3F);
			} else {
				// If char is unknown then push "?".
				bytes.push(0x3F);
			}
		}
		return bytes;
	}
	//---------------------------------------------------------
	this.GetString = function(bytes){
		/// <summary>
		/// Get string from array of bytes.
		/// </summary>
		var s = new String;
		var b = new Number;
		var b1 = new Number;
		var b2 = new Number;
		var b3 = new Number;
		var b4 = new Number;
		var bE = new Number;
		var ln = bytes.length;
		for (var i = 0; i < ln; i++){
			b = bytes[i];
			if (b < 0x80){
				// Char represended by 1 byte.
				s += (b > 0) ? String.fromCharCode(b) : "";
			} else if (b < 0xC0) {
				// Byte 2,3,4 of unicode char.
			} else if (b < 0xE0) {
				// Char represended by 2 bytes.
				if (ln > i+1){
					b1 = (b & 0x1F); i++;
					b2 = (bytes[i] & 0x3F);
					bE = (b1 << 6) | b2;
					s += String.fromCharCode(bE);
				}
			} else if (b < 0xF0) {
				// Char represended by 3 bytes.
				if (ln > i+2){
					b1 = (b & 0xF); i++;
					b2 = (bytes[i] & 0x3F); i++;
					b3 = (bytes[i] & 0x3F);
					bE = (b1 << 12) | (b2 << 6) | b3;
					s += String.fromCharCode(bE);
				}
			} else if (b < 0xF8) {
				// Char represended by 4 bytes.
				if (ln > i+3){
					b1 = (b & 0x7); i++;
					b2 = (bytes[i] & 0x3F); i++;
					b3 = (bytes[i] & 0x3F); i++;
					b4 = (bytes[i] & 0x3F);
					bE = (b1 << 18) | (b2 << 12) (b3 << 6) | b4;
					s += String.fromCharCode(bE);
				}
			} else {
				s += "?"
			}
		}
		return s;
	}
	//---------------------------------------------------------
	this.InitializeClass = function(){
	}
	this.InitializeClass();
}

// Make it static.
System.Text.Encoding.UTF8 = new System.Text.Encoding.UTF8Encoder();

//=============================================================================
// CLASS: Encoder.Unicode
//-----------------------------------------------------------------------------

System.Type.RegisterNamespace("System.Text.Encoding");

// Unicode (UTF-16) Transformation:
// http://www.czyborra.com/utf/

System.Text.Encoding.UnicodeEncoder = function(){
	//---------------------------------------------------------
	// Public properties.
	this.Type = "System.Text.Encoding.UnicodeEncoder";
	//---------------------------------------------------------
	// Private properties.
	var me = this;
	//---------------------------------------------------------
	this.GetBytes = function(s){
		/// <summary>
		/// Get array of bytes.
		/// </summary>
		var bytes = new Array();
		var c = new Number;
		for (var i = 0; i < s.length; i++){
			c = s.charCodeAt(i);
			// Reduce to 16 bytes.
			if (c > 0xFFFF) {
				bytes.push(0xDC00 | c & 0x3FF);
				bytes.push(0xD7C0 + (c >> 10));
			} else {
				bytes.push(c & 0xFF);
				bytes.push(c >> 8);
			}
		}
		return bytes;
	}
	//---------------------------------------------------------
	this.GetString = function(bytes){
		/// <summary>
		/// Get string from array of bytes.
		/// </summary>
		var s = new String;
		var b = new Number;
		var b1 = new Number;
		var b2 = new Number;
		for (var i = 0; i < bytes.length; i++){
			b1 = bytes[i]; i++;
			b2 = bytes[i];
			s += String.fromCharCode((b2 << 8) | b1);
			//x1 = (b1 <= 0xF ? "0" : "") + b1.toString(16);
			//x2 = (b2 <= 0xF ? "0" : "") + b2.toString(16);
			//s += unescape("%u"+x2+x1);
		}
		return s;
	}
	//---------------------------------------------------------
	this.InitializeClass = function(){
	}
	this.InitializeClass();
}

// Make it static.
System.Text.Encoding.Unicode = new System.Text.Encoding.UnicodeEncoder();

//=============================================================================
// CLASS: Encoder.ASCII
//-----------------------------------------------------------------------------

System.Type.RegisterNamespace("System.Text.Encoding");

System.Text.Encoding.ASCIIEncoder = function(){
	//---------------------------------------------------------
	// Public properties.
	this.Type = "System.Text.Encoding.ASCIIEncoder";
	//---------------------------------------------------------
	// Private properties.
	var me = this;
	//---------------------------------------------------------
	this.GetBytes = function(s){
		/// <summary>
		/// Get array of bytes.
		/// </summary>
		var bytes = new Array();
		var c = new Number;
		for (var i = 0; i < s.length; i++){
			c = s.charCodeAt(i);
			// Reduce to 16 bytes.
			if (c > 0xFF){
				bytes.push(0x3F);
			} else {
				bytes.push(c);
			}
		}
		return bytes;
	}
	//---------------------------------------------------------
	this.GetString = function(bytes){
		/// <summary>
		/// Get string from array of bytes.
		/// </summary>
		var s = new String;
		for (var i = 0; i < bytes.length; i++){
			s += String.fromCharCode(bytes[i]);
		}
		return s;
	}
	//---------------------------------------------------------
	this.InitializeClass = function(){
	}
	this.InitializeClass();
}

// Make it static.
System.Text.Encoding.ASCII = new System.Text.Encoding.ASCIIEncoder();

//==============================================================================
// END
//------------------------------------------------------------------------------
//%>