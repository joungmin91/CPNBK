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

/// <reference name="System.js" assembly="System" />

//=============================================================================
// Namespaces
//-----------------------------------------------------------------------------
// <PropertyGroup>
//		<RootNamespace>System</RootNamespace>
// <PropertyGroup>
//-----------------------------------------------------------------------------

window.System = {
    __namespace: true,
    __typeName: "Sys",
    getName: function() {return "Sys";},
    __upperCaseTypes: {}
};

System.__rootNamespaces = [System];
System.__registeredTypes = {};

System.__registerNameSpace = function(namespacePath) {
	/// <summary locid="M:J#Type.registerNamespace" />
    /// <param name="namespacePath" type="String"></param>
    if (typeof(Type) != "undefined" &&
		typeof(Type.registerNamespace) == "function"){
		Type.registerNamespace(namespacePath);
		return;
	}
    var rootObject = window;
    var namespaceParts = namespacePath.split('.');
    for (var i = 0; i < namespaceParts.length; i++) {
        var currentPart = namespaceParts[i];
        var ns = rootObject[currentPart];
        if (!ns) {
            ns = rootObject[currentPart] = {
                __namespace: true,
                __typeName: namespaceParts.slice(0, i + 1).join('.')
            };
            if (i === 0) {
                System.__rootNamespaces[System.__rootNamespaces.length] = ns;
            }
            var parsedName;
            try {
                parsedName = eval(ns.__typeName);
            }
            catch(e) {
                parsedName = null;
            }
            ns.getName = function ns$getName() {return this.__typeName;}
        }
        rootObject = ns;
	}
}


//=============================================================================
// Classes
//-----------------------------------------------------------------------------

System.Type = function(){
	/// <summary>
	/// Initializes a new instance of the System.Type class.
	/// </summary>
	/// <remarks>These XML Comments were created only for IntelliSense.</remarks>
}

System.Type = function(typeName){
	/// <summary>
	/// Initializes a new instance of the System.Type class.
	/// </summary>
	this.Name = new String('name');
	this.Namespace = new String;
	this.FullName = new String;
	//---------------------------------------------------------
	this.GetType = function(){
		/// <summary>
		/// Gets the current System.Type.
		/// </summary>
		/// <returns>The current System.Type.</returns>
	}
	//---------------------------------------------------------
	this.ToSting = function(){
		/// <summary>
		/// Returns a String representing the name of the current Type.
		/// </summary>
		/// <returns>A String representing the name of the current System.Type.</returns>
		return this.FullName;
	}	
	//---------------------------------------------------------
	function initialize(){
		var tn = new String();
		tn = arguments[0];
		this.FullName = tn;
		var ta = new Array;
		if (tn) {
			ta = tn.split('.');
			this.Name = ta[ta.length-1];
			this.Namespace = ta.slice(0,ta.length-2).join('.');
			//tnarguments[0];
			//tn.
			//this.Namespace = nspace;
			//this.Name = name;
			//this.FullName = this.Namespace +"."+ this.Name
		}
	}
	initialize.apply(this, arguments);
}

System.Type.GetType = function(typeName){
	/// <summary>
	/// Gets the System.Type with the specified name, performing a case-sensitive
	/// search.
	/// </summary>
	/// <param type="string" name="typeName">The name of the System.Type.AssemblyQualifiedName to get.</param>
	/// <returns type="System.Type">
	/// The System.Type with the specified name, if found; otherwise, null.
	/// </returns>
	var type = new System.Type(typeName);
	return type;
}

System.Type.RegisterNamespace = System.__registerNameSpace;


//=============================================================================

//=============================================================================
// TypeCode Enum
//-----------------------------------------------------------------------------

System.TypeCode = {
	// A null reference.
	Empty: 0,
	// Represents any reference or value type not represented by another TypeCode.
	Object: 1,
	// A database null (column) value.
	DBNull: 2,
	// A simple type representing Boolean values of true or false.
	Boolean: 3,
	// Unsigned 16-bit integers with values between 0 and 65535.
	Char: 4,
	// Signed 8-bit integers with values between -128 and 127.
	SByte: 5,
	// Unsigned 8-bit integers with values between 0 and 255.
	Byte: 6,
	// Signed 16-bit integers with values between -32768 and 32767.
	Int16: 7,
	// Unsigned 16-bit integers with values between 0 and 65535.
	UInt16: 8,
	// Signed 32-bit integers with values between -2147483648 and 2147483647.
	Int32: 9,
	// Unsigned 32-bit integers with values between 0 and 4294967295.
	UInt32: 10,
	// Signed 64-bit integers with values between -9223372036854775808 and 9223372036854775807.
	Int64: 11,
	// Unsigned 64-bit integers with values between 0 and 18446744073709551615.
	UInt64: 12,
	// A floating point type representing values ranging from approximately 1.5
	// x 10 -45 to 3.4 x 10 38 with a precision of 7 digits.
	Single: 13,
	// A floating point type representing values ranging from approximately 5.0
	// x 10 -324 to 1.7 x 10 308 with a precision of 15-16 digits.
	Double: 14,
	// A simple type representing values ranging from 1.0 x 10 -28 to approximately
	// 7.9 x 10 28 with 28-29 significant digits.
	Decimal: 15,
	// A type representing a date and time value.
	DateTime: 16,
	// A sealed class type representing Unicode character strings.
	String: 18
}

//=============================================================================
// Extensions
//-----------------------------------------------------------------------------
System.Extensions = function(){
	/// <summary>
	/// Create class to extend javascript objects. This function will run at the end
	/// of this file.
	/// </summary>
	//---------------------------------------------------------
	// METHOD: Apply
	//---------------------------------------------------------
	this.Apply = function(){
		var isServerSide = false;
		if (typeof(Response) == "object") isServerSide = true;
		if (!isServerSide){
			// Cretae function $(...) - Get objects by Ids.
			this.$ = function(){
					return document.getElementById(arguments[0]);
			}
			// Try to add advanced $(...) function.
			try{
				if (System.Web.UI.HtmlControls.FindControl)
				this.$ = function(){
					return System.Web.UI.HtmlControls.FindControl.apply(this, arguments);
				}
			}catch(ex){}
			// Cretae function $(...) - Get objects by class name.
			this.$c = function(){
				return System.Web.UI.HtmlControls.FindControlsByClass.apply(this,arguments);
			}
		}
		// EXTENSIONS: Object
		//Object.prototype.ToTrace = function(){ System.Class.ListProperties(this,this.toString());};
//		Object.prototype.GetType = function(){
//			//if (typeof(this.GetType) == "function") return this.GetType();
//			var type = new System.Type();
//			type.Name = typeof(this);
//			return type;
//		}
		
		// EXTENSIONS: Date
		Date.prototype.SubtractDays = System.DateTime.SubtractDays;
		Date.prototype.SubtractMonths = System.DateTime.SubtractMonths;
		Date.prototype.GetFromString = System.DateTime.GetFromString;
		Date.prototype.GetFromUtcString = System.DateTime.GetFromUtcString;
		Date.prototype.DefaultFormat = "yyyy-MM-dd HH:mm:ss";
		Date.prototype.toString = System.DateTime.ToString;
		Date.prototype.ToString = System.DateTime.ToString;
		Date.prototype.toUtcString = System.DateTime.ToUtcString;
		// EXTENSIONS: String
		String.prototype.Trim = function(string){return System.Text.Trim(this,string); };
		String.prototype.ToCamelCase = function(){ return System.Text.ToCamelCase(this); };
		String.Format = function(format, args) {
			/// <param name="format" type="string"></param>
			/// <param name="args" parameterArray="true" mayBeNull="true"></param>
			/// <returns type="string"></returns>
			/// <remarks>From MicrosoftAjax.js</remarks>
			return String._toFormattedString(false, arguments);
		}
		String._toFormattedString = function String$_toFormattedString(useLocale, args) {
			var result = '';
			var format = args[0];
			for (var i = 0; ; ) {
				var open = format.indexOf('{', i);
				var close = format.indexOf('}', i);
				if ((open < 0) && (close < 0)) {
					result += format.slice(i);
					break;
				}
				if ((close > 0) && ((close < open) || (open < 0))) {
					result += format.slice(i, close + 1);
					i = close + 2;
					continue;
				}
				result += format.slice(i, open);
				i = open + 1;
				if (format.charAt(i) === '{') {
					result += '{';
					i++;
					continue;
				}
				var brace = format.substring(i, close);
				var colonIndex = brace.indexOf(':');
				var argNumber = parseInt((colonIndex < 0) ? brace : brace.substring(0, colonIndex), 10) + 1;
				var argFormat = (colonIndex < 0) ? '' : brace.substring(colonIndex + 1);
				var arg = args[argNumber];
				if (typeof (arg) === "undefined" || arg === null) {
					arg = '';
				}
				if (arg.toFormattedString) {
					result += arg.toFormattedString(argFormat);
				}
				else if (useLocale && arg.localeFormat) {
					result += arg.localeFormat(argFormat);
				}
				else if (arg.format) {
					result += arg.format(argFormat);
				}
				else
					result += arg.toString();
				i = close + 1;
			}
			return result;
		}
		String.prototype.Format = function() {
			var args = new Array();
			args.push(this);
			for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
			return String._toFormattedString(false, args);
		}
		String.Join = function(separator, value, startIndex, count){
			if (!separator) separator = "";
			if (!startIndex) startIndex = 0;
			if (!count) count = value.length;	
			if (count == 0) return "";
			var length = 0;
			var end = (startIndex + count) - 1;
			var s = new String();
			for (var i = startIndex; i <= end; i++){
				if (i > startIndex) s += separator;
				s += value[i];
       		}
			return s;
		}
		// EXTENSIONS: Array
		Array.prototype.Clone = function(){
			var buffer = this.slice(0, this.length);
			for (var i = 0; i < this.length; i++) buffer[i] = this[i];
			return buffer;
		}
//		// Firefox InnerText
//		if (typeof HTMLElement != "undefined" && typeof HTMLElement.prototype.__defineGetter__ != "undefined"){
//			HTMLElement.prototype.__defineGetter__("innerText", function(){ return this.textContent; });
//			HTMLElement.prototype.__defineSetter__("innerText", function(sText){ this.innerHTML = sText.textContent; });
//		}


	}
}

System.GetScriptsPath = function(){
	var url = new String;
	var rx = new RegExp("System(\.debug)?\.js", "gi");
	var head = document.getElementsByTagName("head")[0];
	var scripts = head.getElementsByTagName("script");
	for (var i = 0; i < scripts.length; i++){
		var match = scripts[i].src.match(rx);
		if (match){
			url = scripts[i].src.replace(rx,"");
			break;
		}
	}
	// If url is still empty then...
	if (url.length == 0){
		scripts = document.getElementsByTagName("script");
		for (var i = 0; i < scripts.length; i++){
			var match = scripts[i].src.match(rx);
			if (match){
				url = scripts[i].src.replace(rx,"");
				break;
			}
		}
	}
	return url;
}

// Make this class static.
System.Extensions = new System.Extensions();
// Use this to apply extensions to current context.
// System.Extensions.Apply.apply(this);

//=============================================================================
// System.Type.Class
//-----------------------------------------------------------------------------

/* Every JavaScript object has a prototype property. This property is what makes
OOP possible in JavaScript, but it is a bit unusual if you come from other
OO languages. Here's how it works. When you access an object property, the
interpreter will look at the current object's properties to see if one by that
name exists. If the name does not exist there, then the interpreter looks at the
prototype property of the object to see if that object, the one pointed to by
the prototype property, has the named property. If there is no property there,
then the interpreter looks to see if the prototype property has a prototype
property. If it does, then this process continues until either the property is
found or until there are no more prototype properties to search. */

System.Type.Class = System.Type.Class ? System.Type.Class : {};

System.Type.Class.Root = this;

System.Type.Class.Inherit = function(){
	/// <summary>
	/// 
	/// </summary>
	/// <returns>void</returns>
	Trace.Write("exec System.Class.Inherit(arguments){",1);
	// Create object
	this.Classes = new Array();
	this.Objects = new Array();
	for (var i = 0; i < arguments.length; i++){
		// We need to tell to class to skip initialization.
		arguments[i].prototype.NoInit = true;
		this.Objects.push(new arguments[i]);
		arguments[i].prototype.NoInit = false;
		this.Classes.push(arguments[i]);
	}
	for (var i = 0; i < this.Objects.length; i++){
		if (i == 0){
			Trace.Write("Inherit: '"+this.Objects[i].Type+"' Class From: ",1);
		}else{
			Trace.Write(this.Objects[i].Type);
		}
	}
	Trace.Write("Done",-2);

	var finClass = this.Classes[0]
	var finObject = this.Objects[0];

	for (var cid = this.Classes.length-1; cid > 0; cid--){
		var srcClass = this.Classes[cid];
		var srcObject = this.Objects[cid];
		var dstObject = this.Objects[cid-1];
		var dstClass = this.Classes[cid-1];

		Trace.Write("// Inherit: '"+dstObject.Type+"' From: '"+srcObject.Type+"'");
		//Trace.Write("Inherit: "+dstClass+" From: "+srcClass);

		//METHOD1: Copy properties one by one into destination class prototype object.
		finClass.prototype = srcObject;
		Trace.Write("1. Import Class Properties: "+finObject.Type+".prototype <- "+srcObject.Type,1);
		// Copy one by one method.
		//for (var property in srcObject){
		//	Trace.Write("."+property+"");
		//	finClass.prototype[property] = srcObject[property];
		//}
		Trace.Write("End Import",-2);
		// The constructor property is used in scripts to determine an object's
		// type. When we redefined the destinationClass prototype, we effectively
		// changed the constructor to sourceClass. We need to fix this and
		// Update subclass properties and methods.
		Trace.Write("2. Fix Prototype Constructor",1);
		finClass.prototype.constructor = finClass;
		// Copy one by one method.
		//Trace.Write("Assign property: "+finObject.Type+" <- "+srcObject.Type+"["+property+"]");
		//for (var property in finObject){
		//	finClass.prototype.constructor[property] = finObject[property];
		//}
		Trace.Write("End Fix",-2);
		// Allow to call methods in a superclass that are hidden by redefined methods in a subclass.
		Trace.Write("3. Allow to call methods in a superclass",1);
		//destinationClass.superclass = sourceClass.prototype;
		Trace.Write("Import Superclass Properties: "+finObject.Type+".superclass <- "+srcObject.Type+".prototype");
		finClass.superclass = srcClass.prototype;
		// Copy one by one method.
		//for (var property in srcClass.prototype){
		//	//Trace.Write("Assign property: "+finObject.Type+" <- "+srcObject.Type+"["+property+"]");
		//	finClass.superclass[property] = srcClass.prototype[property];
		//}
		Trace.Write("End Import",-2);
		//System.Class.ListProperties(finClass,"finClass");
	}
	Trace.Write("} //System.Class.Inherit(arrguments)",-2);
}

System.Type.Class.Inherit = function(classTo, classFrom){
	/// <summary>
	/// Inherit one class (subclass) from another (superclass);
	/// </summary>
	/// <returns>void</returns>
	classTo.prototype = new classFrom();
	// Update subclass properties and methods.
	classTo.prototype.constructor = classTo;
	// Allow to call methods in a superclass that are hidden by redefined methods in a subclass.
	classTo.superclass = classFrom.prototype;
}


System.Type.Class.Register = function(typeName, baseType){
	/// <summary>
	/// 
	/// </summary>
	/// <returns>void</returns>
	var classType = eval(typeName);
	System.Type.Class._registerClass.apply(classType, arguments);
	classType.IsAbstract = true;
	classType.prototype.GetType = function(){ return eval(typeName) };
	classType.prototype.RiseEvent = function(e){
		if (typeof(e) == "string"){
			e = new System.EventArgs(e);
		}
		if(this[e.Name])this[e.Name](this,e);
	}
}

System.Type.Class.Exists = function(path){
	/// <summary>
	/// Check if namespace exists.
	/// </summary>
	/// <returns>
	/// True if namespace exists, false if not.
	/// </returns>
	var rootObject;
	// If this is server side then...
	if (typeof(Response) == "object"){
		rootObject = System.Class.Root;
	}else{
		rootObject = System.Class.Root; //window;
	}	
	var exists = true;
	var parts = path.split('.');
	for (var i = 0; i < parts.length; i++){
		var part = parts[i];
		// If namespace does not exists then...
		//Trace.Write("Part: "+part);
		if (!rootObject[part]){
			// return false.
			exists = false;
			break;
		}
		rootObject = rootObject[part];
	}	
	return exists;	
}

System.Type.Class._registerClass = function(typeName, baseType, interfaceType){
	/// <summary>
	/// 
	/// </summary>
	/// <returns>void</returns>
    this.FullName = typeName;
	var typeArray = typeName.split(".");
	this.Name = typeArray[typeArray.length-1];
	// BaseType is class[es] from whom this class must be inherited.
    if (baseType){
		this.BaseType = baseType;
		System.Class.Inherit(this,baseType);
    }
    if (interfaceType){
        this._interfaces = [];
        for (var i = 2; i < arguments.length; i++){
            interfaceType = arguments[i];
            this._interfaces.push(interfaceType);
        }
    }
}

// Added for compatibility only. Will be removed later.
// Make sure that the sub namespace Client exists.
System.Class = System.Class ? System.Class : {};
System.Class.Inherit = System.Type.Class.Inherit;
System.Class.RegisterClass = System.Type.Class.Register
System.Class.Root = this;

//=============================================================================
// CLASS: Uri
//-----------------------------------------------------------------------------

System.Uri = function(uriString) {
	/// <summary>
	/// Initializes a new instance of the System.Uri class with the specified URI.
	/// </summary>
	/// <param type="string" name="uriString">A URI</param>
	//---------------------------------------------------------
	// http://www.domain.com:80/default.aspx?AudioMin=0&AudioMax=100
	this.OriginalString;
	// http://www.domain.com:80/default.aspx
	this.AbsolutePath
	// ?AudioMin=0&AudioMax=100
	this.Query;
	this.QueryParams;
	this.GetType = function(){ return new System.Type("System.Uri"); }
	//---------------------------------------------------------
	this.GetQueryValue = function(name, ignoreCase) {
		var value = null;
		var pName;
		if (ignoreCase == true) name = name.toLowerCase();
		for (var property in this.QueryParams) {
			pName = property;
			if (ignoreCase == true) pName = property.toLowerCase();
			if (name == pName) {
				value = this.QueryParams[property];
				break;
			}
		}
		return value;
	}
	//---------------------------------------------------------
	this.GetParameters = function(uri) {
		var results = {};
		if (uri == null) return results;
		var query = uri.substring(uri.indexOf("?") + 1, uri.length);
		var arr = query.split("&");
		var item;
		var name;
		var value;
		for (var i = 0; i < arr.length; i++) {
			item = arr[i];
			name = item.substring(0, item.indexOf("="));
			value = item.substring(item.indexOf("=") + 1, item.length);
			value = unescape(value);
			results[name] = value;
		}
		return results;
	}
	//---------------------------------------------------------
	function initialize() {
		var u = arguments[0];
		this.OriginalString = u;
		this.AbsolutePath = (u.indexOf("?") > -1) ? u.substring(0, u.indexOf("?") - 1) : u;
		this.Query = (u.indexOf("?") > -1) ? u.substring(u.indexOf("?"), u.length) : null;
		this.QueryParams = this.GetParameters(this.Query);
	}
	initialize.apply(this, arguments);
}

//=============================================================================
// CLASS: EventItem
//-----------------------------------------------------------------------------

//Using Delegates (C# Programming Guide)
// http://msdn2.microsoft.com/en-us/library/ms173172.aspx

System.EventItem = function(){
	this.Node;
	this.Name;
	this.Handler;
	this.Capture;
}

//=============================================================================
// CLASS: EventHandler (Delegate)
//-----------------------------------------------------------------------------

System.EventHandler = function(target, method, timeout){
	/// <summary>
	/// This helper class simulates .NET concept of event delegate. (EventHandler)
	/// </summary>
	/// <param type="function" name="method">Method represented by Delegate.<param>
	/// <param type="object" name="target">Context on which delegate invokes the instance method.<param>
	/// <param type="int" name="timout">Add delay (in miliseconds) between event notification from source object and call of recipient object that have registered to receive that event.</param>
	var me = this;
	//---------------------------------------------------------
	this.Type = "System.EventHandler";
	this.Method = null;
	this.Target = null;
	this.Timeout = null;
	//---------------------------------------------------------
	this.Invoke = function(){
        if (typeof(this.Timeout) == "number"){
			setTimeout(function(){return this.Method.apply(this.Target, arguments);},this.Timeout);
		} else {
			return this.Method.apply(this.Target, arguments);
		}
    }
    //---------------------------------------------------------
	this.InvokeNative = function(){
		var e = arguments[0] || window.event;
		var sender = e.target || e.srcElement;
        var args = new Array(2);
        args[0] = sender;
        args[1] = e;
        if (typeof(timeout) == "number"){
			setTimeout(function(){return method.apply(target, args);}, timeout);
	    } else {
	        return method.apply(target, args);
	    }
    }
	//---------------------------------------------------------
	this.Initialize = function(){
		this.Target = target;
		this.Method = method;
		//System.Class.Properties.ToTrace(me);
		//Trace.Write(typeof(me.Target)+": "+nativeEvent);
	}
	this.Initialize();
}

//=============================================================================
// CLASS: Event
//-----------------------------------------------------------------------------

System.Event = function(name){
	/// <summary>
	/// This class simulates .NET eventing. (event delegate)
	/// </summary>
	//---------------------------------------------------------
    this.args = new Object();
    this._delegates = new Array();
    this.name = name;
	//---------------------------------------------------------
	this.Add = function(delegate){
		/// <summary>
		/// This function is used to add a callback object.
		/// and a method.
		/// </summary>
		this._delegates[this._delegates.length] = delegate;
	}
	//---------------------------------------------------------
	this.Remove = function(delegate){
		/// <summary>
		/// This function is used to remove a callback object.
		/// and a method.
		/// </summary>
		for (i = this._delegates.length - 1; i >= 0; i = i - 1){
			if (delegate == this._delegates[i]){
				this._delegates.splice(i,1);
			}
		}
	}
	//---------------------------------------------------------
	this.Fire = function(sender, eventArgs){
		/// <summary>
		/// This function makes a call back into the object
		/// that has registered for the event.
		/// </summary>
		for(var i = 0; i < this._delegates.length; i++){
			this._delegates[i].Invoke(sender, eventArgs);
		}
	}
}

//=============================================================================
// CLASS: EventArgs
//-----------------------------------------------------------------------------

System.EventArgs = function(name){
	/// <summary>
	/// Event arguments.
	/// </summary>
	/// <param name="name">Name of event</param>
	this.Name = "";
	this.Type = "System.EventArgs";
	//---------------------------------------------------------
	this.ToString = function(){
		/// <summary>
		/// Convert this object to string representation.
		/// </summary>
		var results = new String();
		for (var property in this){
			var skip = false;
			// Don't show own methods.
			skip = skip || (property == "Initialize");
			skip = skip || (property == "ToString");
			if (!skip) results += property+"='"+this[property]+"';";
		}
		results = "e["+results+"]";
		return results;
	}
	//---------------------------------------------------------
	this.Initialize = function(name){
		this.Name = name ? name : new String;
	}
	this.Initialize.apply(this, arguments);
}

//=============================================================================
// CLASS: EventsManager
//-----------------------------------------------------------------------------

System.EventsManager = function(context){
	/// <summary>
	/// Provides a way for automagically removing events from nodes and thus preventing memory leakage.
	/// </summary>
	/// <param name="context">Optional context of events. Default: window</param>
	/// <example>
	/// // Attach SomeButton_Click function to "click" event of "SomeButton" button.
	/// Events.Add("SomeButton", "click", SomeButton_Click, false);
	/// // Attach ButtonWithDelay_Click function to event "click" of "ButtonWithDelay" button.
	/// // Delay execution by 2 seconds and run ButtonWithDelay_Click in this context.
	/// Events.Add("ButtonWithDelay", "click", ButtonWithDelay_Click, false, this, 2000);
	/// </example>
	/// <remarks>
	/// Original Idea by Mark Wubben
	/// Rewriten as class by Evaldas Jocys [evaldas@jocys.com]
	/// See http://novemberborn.net/javascript/event-cache for more information.
	/// </remarks>
	//---------------------------------------------------------
	// Public properties.
	//---------------------------------------------------------
	this.Type = "System.EventsManager";
	// An array whose items are arrays which contain the information in the
	// following order: node, eventName, eventHandler, capture.
	this.Items = null;
	this.Context = null;
	//---------------------------------------------------------
	// Private properties.
	//---------------------------------------------------------
	var me = this;
	//---------------------------------------------------------
	// METHOD: Add
	//---------------------------------------------------------
	this.Add = function(node, eventName, eventHandler, capture){
		/// <param type="bool" name="capture">true or false if we need to atach something to native DOM object.</param>
		var success = true;
		var id;
		if (typeof(node) == "string"){
			node = this.Context.document.getElementById(node);
			id = node;
		}else{
			id = node.id;
		}
		if (Trace){
			Trace.Write("call "+this.Type+".Add(node, '"+eventName+"', eventHandler, "+capture+")");
		}
		if (node){
			if (typeof(capture) != "boolean"){
					node[eventName].Add(eventHandler);
			}else{
				if (eventHandler.Type == "System.EventHandler") eventHandler = eventHandler.InvokeNative;
				// Attach handler to native DOM object.
				if (node.addEventListener){
					node.addEventListener(eventName, eventHandler, capture);
				} else if (node.attachEvent){
					if (Trace) Trace.Write("thru System.EventHandler: "+eventHandler.Type);
					var r = node.attachEvent("on"+eventName, eventHandler);
				} else {
				}
				this.AddItem(node, eventName, eventHandler, capture);
			}
		}else{
			if (Trace) Trace.Write("Error: "+this.Type+".Add(...) - node '"+id+"' was not found!");
			success = false;
		}
		return success;
	}
	//---------------------------------------------------------
	// METHOD: Remove
	//---------------------------------------------------------
	// Use value returned by by this.Add if you want to remove same function.
	this.Remove = function(node, eventName, eventHandler){
		if (typeof(node) == "string") node = this.Context.document.getElementById(node);
		this.RemoveItem(node, eventName, eventHandler);
	}
	//---------------------------------------------------------
	// METHOD: AddItem
	//---------------------------------------------------------
	// node - A reference to the node on which the event has been set.
	// eventName - The name of the event.
	// eventHandler - A reference to the function which handles the event.
	// capture - determines whether the event is triggered in capture mode
	// or not. Does not apply to Internet Explorer.
	this.AddItem = function(node, eventName, eventHandler, capture){
		var ev = new System.EventItem();
		ev.Node = node;
		ev.Name = eventName;
		ev.Handler = eventHandler;
		ev.Capture = capture;
		this.Items.push(ev);
	}
	//---------------------------------------------------------
	// METHOD: RemoveItem
	//---------------------------------------------------------
	this.RemoveItem = function(node, eventName, eventHandler){
		var i, item;
		for (i = this.Items.length - 1; i >= 0; i = i - 1){
			item = this.Items[i];
			if (typeof(item.Capture) != "boolean"){
				item.Node[item.Name].Remove(item.Handler);
			}else{
				if (eventHandler.Type == "System.EventHandler") eventHandler = eventHandler.InvokeNative;
				if (node == item.Node && eventName == item.Name && eventHandler == item.Handler){
					if (item.Node.removeEventListener){
						item.Node.removeEventListener(item.Name, item.Handler, item.Capture);
					} else if (item.Node.detachEvent){
						item.Node.detachEvent("on"+item.Name, item.Handler);
					}
				}
			}
		}
	}
	//---------------------------------------------------------
	// METHOD: Dispose
	//---------------------------------------------------------
	// Remove all cached events.
	this.Dispose = function(){
		var i, item;
		for(i = me.Items.length - 1; i >= 0; i = i - 1){
			item = me.Items[i];
			if (typeof(item.Capture) != "boolean"){
				item.Node[item.Name].Remove(item.Handler);
			}else{
				var eventHandler = item.Handler;
				if (eventHandler.Type == "System.EventHandler") eventHandler = eventHandler.InvokeNative;
				if(item.Node.removeEventListener){
					item.Node.removeEventListener(item.Name, item.Handler, item.Capture);
				}else if (item.Node.detachEvent){
					item.Node.detachEvent("on"+item.Name, item.Handler);
				}
			}
		}
	}
	//---------------------------------------------------------
	// INIT: Class
	//---------------------------------------------------------
	this.InitializeClass = function(){
		this.Context = context ? context : window;
		this.Items = new Array();
		this.Add(this.Context, 'unload', new System.EventHandler(this, this.Dispose), false);
	}
	this.InitializeClass();
}
// If script is not on server side then...
if (typeof(Response) != "object"){
	var Events = new System.EventsManager();
	System.EventsManager.Current = new System.EventsManager();
}

//=============================================================================
// CLASS: Exceptions
//-----------------------------------------------------------------------------

System.ArgumentNullException = function(paramName, message){
	this.name = "System.ArgumentNullException"; 
	this.message = "";
	this.message += (message) ? message : "Value cannot be null.";
	this.message += "\r\nParameter name: '"+paramName+"'";
	this.toString = function(){ return this.name+": "+this.message; }
}

System.ArgumentException = function(message, paramName){
	this.name = "System.ArgumentException";
	this.message = "";
	this.message += message;
	this.message += (paramName) ? "\r\nParameter name: '"+paramName+"'" : "";
	this.toString = function(){ return this.name+": "+this.message; }
}

System.ObjectDisposedException = function(objectName, message){
	this.name = "System.ArgumentNullException";
	this.message = ""
	this.message += (message) ? message : "Cannot access a disposed object.";
	this.message += "\r\nObject name: '"+objectName+"'";
	this.toString = function(){ return this.name+": "+this.message; }
}



System.Class.ExceptionToString = function(ex){
	/// <summary>
	/// 
	/// </summary>
	/// <returns>void</returns>
	// If this is server side;
	var errorString = "";
	if (typeof(Response) == "object"){
		// ex.name;
		errorString = "Error: Exception[number="+ex.number+"; name='"+ex.name+"'; message='"+ex.message+"'; description='"+ex.description+"']";
	}else{
		errorString = "Error: Exception[result="+ex.result+"; name='"+ex.name+"'; message='"+ex.message+"']";
	}
	return errorString;
}

System.Class.ExceptionToTrace = function(ex){
	/// <summary>
	/// 
	/// </summary>
	/// <returns>void</returns>
	Trace.Write(System.Class.ExceptionToString(ex));
}

System.Class.Properties = {};

System.Class.Properties.ToString = function(object){
	/// <summary>
	/// 
	/// </summary>
	/// <returns type="String" />
	var results = new String();
	results += typeof(object)+" properties:\r\n";
	for (var property in object){
		var valueType = typeof(object[property]);
		var value = object[property];
		results += valueType+" "+property+" = "+value+"\r\n";
	}
	return results;
}

System.Class.Properties.ToTrace = function(object, name, recursive, levels){
	/// <summary>
	/// 
	/// </summary>
	/// <returns>void</returns>
	//var testClass = new object;
	//var type = object.Type ? object.Type : ""
	if (typeof(object) == "object" && typeof(name) == "undefined"){
		try{
			name = new String(object);
		}catch(ex){
			System.Class.ExceptionToTrace(ex);
		}
	}
	// By default go 2 levels inside;
	if (typeof(levels) == "undefined") levels = 3;
	if (recursive == false) levels = 0;
	//if (name != null) Trace.Write(name+" { "+"<font color=\"gray\"> = "+new String(object)+"</font>");
	try{
		Trace.LevelUpdate(1);
		for (var property in object){
			var text = "."+property;
			if (typeof(object[property]) == "string"){
				text += "<font color=\"gray\"> = '"+object[property]+"'</font>";
			}else{
				text += "<font color=\"gray\"> = "+object[property]+"</font>";
			}
			if (levels > 1){
				var goInside = (typeof(object[property]) == "object" || property == "prototype" || property == "superclass");
				if (object[property] == null) goInside = false;
				if (goInside){
					var childName = "."+property;
					var childLevels = levels - 1;
					Trace.Write(text+" {",1);
					System.Class.ListProperties(object[property],childName,true,childLevels);
					Trace.Write("}",-2);
				}else{
					Trace.Write(text);
				}
			}
		}
	}catch(ex){
		//Trace.Write("Error: "+ex.message);
		//System.Class.ExceptionToTrace(ex);
	}
	Trace.LevelUpdate(-1);
	if (name != null) Trace.Write("}");
}

System.Class.ListProperties = function(object, name, recursive, levels){
	/// <summary>
	/// Outdated: Use System.Class.Properties.ToTrace
	/// </summary>
	/// <returns>void</returns>
	System.Class.Properties.ToTrace(object, name, recursive, levels);
}

//=============================================================================
// System.Parse
//-----------------------------------------------------------------------------

System.Parse = function(object, value){
	/// <summary>
	/// 
	/// </summary>
	/// <returns type="Object" />
	var results = null;
	switch(typeof(object)){
		case "boolean":
			results = System.Bool.Parse(value);
			break;
		case "number":
			results = parseFloat(value);
			break;
		case "string":
			results = value;
			//if (object == "Guid"){
			//}
			break;
		case "object":
			results = value;
			// If this is Date.
			if (typeof(object["getDate"]) == "function"){
				results = new Date().GetFromString(value);
			}
		default:
			results = value;
			//alert("number: "+value+" - "+results);
			break;
	}
	return results;
}

//=============================================================================
// System.Bool
//-----------------------------------------------------------------------------

System.Bool = {};

System.Bool.Parse = function(value){
	/// <summary>
	/// 
	/// </summary>
	/// <returns type="Boolean"></returns>
	var results = new String(value).toLowerCase();
	if (results == "true" || results == "1" || results == "-1" || results == "on" || results == "yes"){
		results = true;
	}else{
		results = false;
	}
	return results;
}

System.Bool.IsBoolean = function(value){
	/// <summary>
	/// Not a Number.
	/// </summary>
	/// <returns type="Boolean" />
     var value = new String(value).toLowerCase();
     var results = (
		value == "true" || value == "false" ||
		value == "1" || value == "0" ||
		value == "-1" ||
		value == "on" || value == "off" ||
		value == "yes" || value == "no"
		);
	return results;
}

//=============================================================================
// System.Guid
//-----------------------------------------------------------------------------

System.Guid = function(){
	/// <summary>
	/// A read-only instance of the System.Guid class whose value is guaranteed to
	/// be all zeroes.
	/// </summary>
}

System.Guid = function(g){
	/// <summary>
	/// Initializes a new instance of the System.Guid class using the value represented
	/// by the specified string.
	/// </summary>
	/// <param name="g" type="String">
	/// A System.String that contains a GUID in one of the following formats ('d'
	/// represents a hexadecimal digit whose case is ignored): 32 contiguous digits:
	/// dddddddddddddddddddddddddddddddd -or- Groups of 8, 4, 4, 4, and 12 digits
	/// with hyphens between the groups. The entire GUID can optionally be enclosed
	/// in matching braces or parentheses: dddddddd-dddd-dddd-dddd-dddddddddddd -or-
	/// {dddddddd-dddd-dddd-dddd-dddddddddddd} -or- (dddddddd-dddd-dddd-dddd-dddddddddddd)
	/// -or- Groups of 8, 4, and 4 digits, and a subset of eight groups of 2 digits,
	/// with each group prefixed by "0x" or "0X", and separated by commas. The entire
	/// GUID, as well as the subset, is enclosed in matching braces: {0xdddddddd,
	/// 0xdddd, 0xdddd,{0xdd,0xdd,0xdd,0xdd,0xdd,0xdd,0xdd,0xdd}} All braces, commas,
	/// and "0x" prefixes are required. All embedded spaces are ignored. All leading
	/// zeroes in a group are ignored.The digits shown in a group are the maximum
	/// number of meaningful digits that can appear in that group. You can specify
	/// from 1 to the number of digits shown for a group. The specified digits are
	/// assumed to be the low order digits of the group.
	/// </param>
}


System.Guid = function(b){
	/// <summary>
	/// Initializes a new instance of the System.Guid class using the specified array
	/// of bytes.
	/// </summary>
	/// <param name="b" type="Byte[]">
	/// A 16 element byte array containing values with which to initialize the GUID.
	/// </param>
	this.Type = "System.Guid";
	this.Bytes = new Array;
	// Bytes array have different order as represented in hex string.
	this.ByteOrder = [3,2,1,0,5,4,7,6,8,9,10,11,12,13,14,15];
	//---------------------------------------------------------
	// METHOD: ToString.
	//---------------------------------------------------------
	this.ToString = function(format){
		// Format (default is D):
		// N: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
		// D: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
		// B: {xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}
		// P: (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)
		format = format ? format : "D";
		var addHyphens = ("DBP".indexOf(format) > -1);
		var guid = new String;
		for (var i = 0; i < 16; i++){
			if (addHyphens) guid += (i == 4 || i == 6 || i == 8 || i == 10 ? "-" : "");
			var pos = this.ByteOrder[i];
			guid += this.numberToHex(this.Bytes[pos]);
		}
		if (format == "B") guid = "{"+guid+"}";
		if (format == "P") guid = "("+guid+")";
		return guid;
	}
	// Add automatic conversion to string in javascript.
	// For example Response.Write(guid) instead of Response.Write(guid.ToString());
	this.toString = this.ToString;
	//---------------------------------------------------------
	// METHOD: ToByteArray
	//---------------------------------------------------------
	this.ToByteArray = function(){
		return this.Bytes;
	}
	//---------------------------------------------------------
	// METHOD: Equals
	//---------------------------------------------------------
	this.Equals = function(value){
		var guid = value;
		var results = true;
		if (typeof(value) != "object"){
			guid = new System.Guid(value);
		}
		// Compare;
		for (var i = 0; i < 16; i++){
			if (this.Bytes[i] != guid.Bytes[i]){
				results = false;
				break;
			}
		}
		return results;
	}
	//---------------------------------------------------------
	// PRIVATE METHOD: numberToHex
	//---------------------------------------------------------
	this.numberToHex = function(value){
		var hex = ((value <= 0xF) ? "0" : "");
		hex += value.toString(16);
		return hex;
	}
	//---------------------------------------------------------
	// PRIVATE METHOD: stringToHexes
	//---------------------------------------------------------
	this.GuidStringToBytes = function(value){
		// Strip separators.
		var regExp = new RegExp("[{}\(\)-]","g");
		var guid = value.replace(regExp,"");
		// Convert Hex string to bytes.
		var bytes = new Array();
		for (var i = 0; i < 16; i++){
			var pos = this.ByteOrder[i];
			var b1 = guid.charAt(pos*2);
			var b2 = guid.charAt(pos*2+1);
			bytes.push(unescape("%"+b1+b2).charCodeAt(0));
		}
		return bytes;
	}
	//---------------------------------------------------------
	// INIT: Initialize class.
	//---------------------------------------------------------
	this.InitializeClass = function(){
		this.Bytes = new Array();
		// Create guid by type of value.
		var a0 = arguments[0];
		switch(typeof(a0)){
			case "null":
				for (var i = 0; i < 16; i++) this.Bytes.push(0);
				break;
			case "undefined":
				for (var i = 0; i < 16; i++) this.Bytes.push(0);
				break;
			case "string":
				this.Bytes = this.GuidStringToBytes(a0);
				break;
			case "object":
				if (a0.Type == "System.Guid"){
					// Treat as another guid.
					for (var i = 0; i < 16; i++){
						this.Bytes.push(a0.Bytes[i]);
					}
				}else{
					// Get first 16 elements of array as bytes.
					for (var i = 0; i < 16; i++){
						this.Bytes.push(a0[i]);
					}
				}
				break;
			default:
				break;
		}
	}
	this.InitializeClass.apply(this, arguments);
}

System.Guid.Empty = new System.Guid("00000000-0000-0000-0000-000000000000");

System.Guid.NewGuid = function(){
	/// <summary>
	/// Initializes a new instance of the System.Guid class.
	/// </summary>
	/// <returns type="System.Guid">
	/// A new System.Guid object.
	/// </returns>
	// Create random guid.
	var bytes = new Array();
	for (var i = 0; i < 16; i++){
		// Push random number [0-FF].
		var dec = Math.floor(Math.random() * 0xFF);
		bytes.push(dec);
	}
    var guid = new System.Guid(bytes);
    return guid;
}

//=============================================================================
// System.Math
//-----------------------------------------------------------------------------

System.Math = System.Math ? System.Math : {}

System.Math.ShiftRight = function(number, positions){
	/// <summary>
	/// Shifts the values of the bits to the right (arithmetic shift '>>').
	/// </summary>
	/// <remarks>
	/// JavaScript can store whole numbers properly with 52 bit precision only.
	/// 0xFFFFFFFFFFFFF. Any numbers larger than that will be f**ked during
	/// conversions. For examle: 0xEFFFFFFFFFFFFF = 67553994410557439,
	/// but output of Document.Write(0xEFFFFFFFFFFFFF) will be 67553994410557440
	/// </remarks>
	var h = Math.pow(2, positions);
	var d = number & (h - 1);
	var n = number - d;
	return n / h;
}

System.Math.ShiftLRight = function(number, positions){
	/// <summary>
	/// Shifts the values of the bits to the right (logical shift '>>').
	/// </summary>
	/// <remarks>
	var h = Math.pow(2, positions);
	var d = number & (h - 1);
	var n = number - d;
	return n / h;
}

System.Math.ShiftLeft = function(number, positions){
	/// <summary>
	/// Shifts the values of the bits to the left (arithmetic shift '<<').
	/// </summary>
	return number * Math.pow(2, positions);
}

//=============================================================================
// Random
//-----------------------------------------------------------------------------

System.Random = function(){
	/// <summary>
	/// Initializes a new instance of the Random class, using a time-dependent default
	/// seed value.
	/// </summary>
	//---------------------------------------------------------
	this.Next = function(maxValue){
		/// <summary>
		/// Returns a nonnegative random number less than the specified maximum.
		/// </summary>
		/// <param type="int" name="maxValue">
		/// The exclusive upper bound of the random number returned. maxValue must be
		/// greater than or equal to zero.
		/// </param>
		/// <returns>
		/// A 32-bit signed integer greater than or equal to zero, and less than maxValue;
		/// that is, the range of return values includes zero but not maxValue.
		/// </returns>
	}
	//---------------------------------------------------------
	this.Next = function(minValue, maxValue){
		/// <summary>
		/// Returns a random number within a specified range.
		/// </summary>
		/// <param type="int" name="minValue">
		/// The inclusive lower bound of the random number returned.
		/// </param>
		/// <param type="int" name="maxValue">
		///  The exclusive upper bound of the random number returned. maxValue must be
		///  greater than or equal to minValue.
		/// </param>
		/// <returns>
		/// A 32-bit signed integer greater than or equal to minValue and less than maxValue;
		/// If minValue equals maxValue, minValue is returned.
		/// </returns>
		//---------------------
		// Math.random() Generates a number from 0 to slightly less than 1 (shown as <1).
		// This is perfectly random because each number will appear the same number of times.
		// Process arguments.
		switch (arguments.length){
			case 0:
				maxValue = Math.pow(2,31);
				minValue = 0;
				break;
			case 1:
				maxValue = arguments[0];
				minValue = 0;
				break;
			case 2:
				break;
			default:
				return 0;
				break;
		}
		var number = minValue;
		if (maxValue > minValue){
			number = Math.floor(Math.random()*(maxValue-minValue))+minValue;
		}
		return number;
	}
	//---------------------------------------------------------
	this.NextBytes = function(buffer){
		/// <summary>
		/// Fills the elements of a specified array of bytes with random numbers.
		/// </summary>
		/// <param type="byte[]" name="buffer">
		/// An array of bytes to contain random numbers.
		/// </param>
		/// <returns>
		///  An array of bytes to contain random numbers.
		/// </returns>
		/// <remarks>
		/// Each element of the array of bytes is set to a random number greater than or equal to zero, and less than or equal to 255 (hexadecimal 0xFF).
		/// </remarks>
		//---------------------
		var length = buffer.length;
		for (var i = 0; i < length; i++){
			buffer[i] = this.Next(0, 256);
		}
		return buffer;
	}
	//---------------------------------------------------------
	this.InitializeClass = function(){
	}
	this.InitializeClass.apply(this,arguments);
}



//=============================================================================
// System.TimeSpan
//-----------------------------------------------------------------------------

// Examples:
//
// Add 84 milliseconds:
// var span = new System.TimeSpan(84);
//
// Add 5 hours, 7 minutes, 10 seconds, and 0 milliseconds:
// var span = new System.TimeSpan(5,7,10,0);
//
// var dateStart = new Date();
// ...run some process here...
// var dateEd = new Date();
// var span = new System.TimeSpan(dateEd.getTime() - dateStart.getTime());
//

System.TimeSpan = function(){
	/// <summary>
	/// 
	/// </summary>
	//---------------------------------------------------------
	// Public properties.:
	//---------------------------------------------------------
	this.Type = "System.TimeSpan";
	// Same as total milliseconds.
	this.Ticks = new Number;
	// Span Values.
	this.Milliseconds = new Number;
	this.Seconds = new Number;
	this.Minutes = new Number;
	this.Hours = new Number;
	this.Days = new Number;
	// Total Values.
	this.TotalMilliseconds = new Number;
	this.TotalSeconds = new Number;
	this.TotalMinutes = new Number;
	this.TotalHours = new Number;
	this.TotalDays = new Number;
	//---------------------------------------------------------
	// Private properties.:
	//---------------------------------------------------------
	var me = this;
	//---------------------------------------------------------
	// PRIVATE METHOD: addValues
	//---------------------------------------------------------
	function addValues(){
		//Trace.Write(arguments.length);
		var args = ["Days", "Hours", "Minutes", "Seconds", "Milliseconds"];
		var j = arguments.length;
		for (var i = 0; i < j; i++){
			var step = args.length - arguments.length;
			//Trace.Write(args[step+i]+" = "+arguments[i]);
			this[args[step+i]] = arguments[i];
		}
		normalizeValues();
		updateTicksAndTotals();
	}
	//---------------------------------------------------------
	// PRIVATE METHOD: updateTotals
	//---------------------------------------------------------
	function normalizeValues(){
		var tmpVal = new Number;
		var tmpAdd = new Number;
		// Normalize milliseconds.
		tmpVal = me.Milliseconds % 1000;
		tmpAdd = (me.Milliseconds - tmpVal) / 1000;
		me.Milliseconds = tmpVal;
		me.Seconds += tmpAdd;
		// Normalize seconds.
		tmpVal = me.Seconds % 60;
		tmpAdd = (me.Seconds - tmpVal) / 60;
		me.Seconds = tmpVal;
		me.Minutes += tmpAdd;
		// Normalize Minutes.
		tmpVal = me.Minutes % 60;
		tmpAdd = (me.Minutes - tmpVal) / 60;
		me.Minutes = tmpVal;
		me.Hours += tmpAdd;
		// Normalize Hours.
		tmpVal = me.Hours % 24;
		tmpAdd = (me.Hours - tmpVal) / 24;
		me.Hours = tmpVal;
		me.Days += tmpAdd;
		//Trace.Write("Nms: "+me.Milliseconds);
		//Trace.Write("Nss: "+me.Seconds);
		//Trace.Write("Nmm: "+me.Minutes);
		//Trace.Write("Nhh: "+me.Hours);
		//Trace.Write("Ndd: "+me.Days);
	}
	//---------------------------------------------------------
	// PRIVATE METHOD: resetValues
	//---------------------------------------------------------
	function resetValues(){
		me.Ticks = 0;
		me.Milliseconds = 0;
		me.Seconds = 0;
		me.Minutes = 0;
		me.Hours = 0;
		me.Days = 0;
		me.TotalMilliseconds = 0;
		me.TotalSeconds = 0;
		me.TotalMinutes = 0;
		me.TotalHours = 0;
		me.TotalDays = 0;
	}
	//---------------------------------------------------------
	// PRIVATE METHOD: updateTotals
	//---------------------------------------------------------
	function updateTicksAndTotals(){
		var tmp = me.Days * 24; // Result: hours.
		tmp = (tmp + me.Hours) * 60; // Result: minutes.
		tmp = (tmp + me.Minutes) * 60; // Result: seconds.
		me.Ticks = (tmp + me.Seconds) * 1000 + me.Milliseconds; // Result: milliseconds.
		me.TotalMilliseconds = me.Ticks;
		me.TotalSeconds = me.TotalMilliseconds / 1000;
		me.TotalMinutes = me.TotalSeconds / 60;
		me.TotalHours = me.TotalMinutes / 60;
		me.TotalDays = me.TotalHours / 24;
		//Trace.Write("Tck: "+me.Ticks);
		//Trace.Write("Tms: "+me.TotalMilliseconds);
		//Trace.Write("Tss: "+me.TotalSeconds);
		//Trace.Write("Tmm: "+me.TotalMinutes);
		//Trace.Write("Thh: "+me.TotalHours);
		//Trace.Write("Tdd: "+me.TotalDays);
	}
	//---------------------------------------------------------
	// METHOD: Add
	//---------------------------------------------------------
	this.Add = function(){
		var span = arguments[0];
		//Trace.Write(typeof(arguments[0]));
		if (typeof(arguments[0]) == "number"){
			span = new System.TimeSpan.apply(this,arguments);
		}
		var ticks = this.Ticks + span.Ticks;
		var newSpan = new System.TimeSpan(ticks);
		return newSpan;
	}
	//---------------------------------------------------------
	// METHOD: Subtract
	//---------------------------------------------------------
	this.Subtract = function(){
		var span = arguments[0];
		if (typeof(arguments[0]) == "number"){
			span = new System.TimeSpan.apply(this,arguments);
		}
		var ticks = this.Ticks - span.Ticks;
		var newSpan = new System.TimeSpan(ticks);
		return newSpan;
	}
	//---------------------------------------------------------
	// METHOD: ToString
	//---------------------------------------------------------
	this.ToString = function(format){
		var results = "";
		var sDays = (format == "X") ? " days " : " ";
		var sHours = (format == "X") ? " hours " : ":";
		var sMinutes = (format == "X") ? " min " : ":";
		var sSeconds = (format == "X") ? " sec" : "";
		if (this.TotalDays >= 1 || format == "F") results += this.Days + sDays;
		results += (this.Hours < 10 ? "0" : "") + this.Hours + sHours;
		results += (this.Minutes < 10 ? "0" : "") + this.Minutes + sMinutes;
		results += (this.Seconds < 10 ? "0" : "") + this.Seconds + sSeconds;
		if (format == "F") results += "."+this.Milliseconds;
		return results;
	}
	this.toString = this.ToString;
	//---------------------------------------------------------
	// INIT: Class
	//---------------------------------------------------------
	this.InitializeClass = function(){
		addValues.apply(this,arguments);
	}
	this.InitializeClass.apply(this,arguments);
}

//=============================================================================
// System.Buffer
//-----------------------------------------------------------------------------

System.Array = function(){
	//---------------------------------------------------------
	this.Initialize = function(){
	}
	this.Initialize.apply(this, arguments);
}

// Add static method.
System.Array.Reverse = function(array, index, length){
	/// <summary>
	/// Reverses the sequence of the elements in a range of elements in the one-dimensional
	/// </summary>
	/// <param name="array">The one-dimensional System.Array to reverse.</param>
	/// <param name="index">The starting index of the section to reverse.</param>
	/// <param name="length">The number of elements in the section to reverse.</param>
	index = (index) ? index : 0;
	length = (length) ? length : array.length;
	// Make a copy of reversed block.
	var iArray = array.slice(index,index+length).reverse();
	for (var i = 0; i < length; i++) array[i+index] = iArray[i];
}

// Add static method.
System.Array._Copy1 = function(sourceArray, destinationArray, length){
	/// <summary>
	/// Copy array
	/// </summary>
	for (var i = 0; i < length; i++){
		destinationArray[i] = sourceArray[i];
	}
}

// Add static method.
System.Array._Copy2 = function(sourceArray, sourceIndex, destinationArray, destinationIndex, length){
	/// <summary>
	/// Copy array
	/// </summary>
	for (var i = 0; i < length; i++){
		destinationArray[destinationIndex + i] = sourceArray[sourceIndex + i];
	}
}

System.Array.Copy = function(){
	if (arguments.length == 3) System.Array._Copy1.apply(this, arguments);
	if (arguments.length == 5) System.Array._Copy2.apply(this, arguments);
}

System.Array.FillMultiDimensional = function(array, dimensions, value){
	if (dimensions.length > 0){
		for (var x = 0; x < array.length; x++){
			var ar = new Array(dimensions[0]);
			var dims = dimensions.slice(1);
			System.Array.FillMultiDimensional(ar, dims, value);
			array[x] = ar;
		}
	}else{
		// if this array is placed at last level.
		for (var x = 0; x < array.length; x++){
			// set default value.
			array[x] = value;
		}
	}
	return array;
}

System.Array.GetMultiDimensional = function(dimensions, value){
	/// <sumary>
	/// Get multi-dimensional array with default values.
	/// </summary>
	/// <param name="dimensions" type="int[]">List of dimension sizes.</param>
	/// <param name="value">Default value of array.</param>
	/// <example>
	/// Get 16x16 array filled with zeroes.
	/// var matrix = System.Array.GetMultiDimensional([16,16] ,0);
	/// </example>
	var array = new Array(dimensions[0]);
	return System.Array.FillMultiDimensional(array,dimensions.slice(1), value);
}
System.Array.Clear = function(array, index, length){
	/// <sumary>
	/// Zeroize array.
	/// </summary>
	for (var i = 0; i < length; i++) array[i+index] = 0;
}

//=============================================================================
// System.Buffer
//-----------------------------------------------------------------------------

System.Buffer = function(){
	//---------------------------------------------------------
	this.Initialize = function(){
	}
	this.Initialize.apply(this, arguments);
}

// Add static method.
System.Buffer.BlockCopy = function(src, srcOffset, dst, dstOffset, count){
	/// <summary>
	/// Copies a specified number of bytes from a source array starting at a particular
	/// offset to a destination array starting at a particular offset.
	/// </summary>
	/// <param name="src">The source buffer.</param>
	/// <param name="srcOffset">The byte offset into src.</param>
	/// <param name="dst">The destination buffer.</param>
	/// <param name="dstOffset">The byte offset into dst.</param>
	/// <param name="count">The number of bytes to copy.</param>
	for (var i = 0; i < count; i++){
		dst[dstOffset+i] = src[srcOffset+i];
	}
}

//=============================================================================
// System.Byte[]
//-----------------------------------------------------------------------------

System.Byte = function(){
	/// <summary>
	/// Get array of bytes.
	/// </summary>
	/// <example>
	/// To get one-dimentional array:
	///     var bytes = new System.Bytes(16);
	/// To get multi-dimentional array:
	///     var x = 3; y = 5; z = 2; ...
	///     var bytes = new System.Bytes(x, y, z, ...);
	/// To get value from multi-dimentional array:
	///     var value = bytes[0][2][1];
	/// It's same as in C#
	/// </example>
	// Convert arguments to dimensions array.
	var dims = new Array();
	for (var i = 0; i < arguments.length; i++){
		dims.push(arguments[i]);
	}
	// Return multi-dimensional array filles with zeroes.
	return System.Array.GetMultiDimensional(dims, 0);
}

//=============================================================================
// System.Int32
//-----------------------------------------------------------------------------

System.Int32 = function(value){
	/// <summary>
	/// 
	/// </summary>
	this.Int = 0;
	this.DefaultFormat = new String;
	//---------------------------------------------------------
	// METHOD: ToString
	//---------------------------------------------------------
	this.ToString = function(format){
		var converted = new String();
		switch (format){
			case "B":
				if (this.Int >= 1048576){
					converted = (Math.round(this.Int/1048576*10)/10)+" MB";
				}else if (this.Int >= 1024){
					converted = (Math.round(this.Int/1024*10)/10)+" KB";
				}else{
					converted = new String(this.Int);
				}
				break;
			case "X2":
			case "X4":
			case "X6":
			case "X8":
				var hex = this.Int.toString(16);
				var len = parseInt(format.substr(1));
				var pfx = "00000000".substr(0, len);
				converted = pfx.substr(0, len - hex.length) + hex;
				break;
			default:
				converted = new String(this.Int);
				break;
		}
		return converted;
	}
	//---------------------------------------------------------
	// INIT: Class
	//---------------------------------------------------------
	this.InitializeClass = function(){
		this.Int = parseInt(value);
		this.DefaultFormat = "";
	}
	this.InitializeClass();
}

//=============================================================================
// System.UInt32
//-----------------------------------------------------------------------------

// Unsigned 32-bit integer: 0 to 4,294,967,295 [0x00000000 - 0xFFFFFFFF]
System.UInt32 = System.Byte;

//=============================================================================
// System.DateTime
//-----------------------------------------------------------------------------

//System.DateTime.ExpressionISO = new RegExp("([1-9][1-9][1-9][1-9])-([1-9][0-9])-([0-9][0-9])T([0-9][0-9]):([0-9][0-9]):([0-9][0-9]):([0-9][0-9]).*");

System.DateTime = function(date){
	/// <summary>
	/// System.DateTime class. Some methods will be applied to JavaScript Date object.
	/// </summary>
	this.DefaultFormat = new String;
	this.Date = new Date;
	//---------------------------------------------------------
	this.addZero = function(number){
		/// <summary>
		/// Add leading zero to number in forder to format date properly.
		/// </summary>
		return (number < 10) ? '0' + number : number;
	}
	//---------------------------------------------------------
	this.ToString = function(format){
		// This function will be created by runing
		// System.Extensions.Apply() at the end of this script file.
	}
	//---------------------------------------------------------
	this.InitializeClass = function(){
		this.DefaultFormat = "YYYY-MM-DD HH:NN:SS";
		this.Date = date ? date : new Date;
	}
	this.InitializeClass();
}

// Create public static method System.DateTime.Now.ToString();

System.DateTime.Now = function(){
	/// <summary>
	/// 
	/// </summary>
	return new Date();
}

System.DateTime.Now.ToString = function(format){
	/// <summary>
	/// 
	/// </summary>
	var currentDate = new System.DateTime;
	return currentDate.ToString(format);
}

/// <summary>
/// DateTime regular expressions.
/// </summary>
System.DateTime.Expressions = {
	Default: new RegExp("(0[1-9]|1[012])/(0[1-9]|[12][0-9]|3[01])/([0-9][0-9])"),
	UtcDate: new RegExp("([0-9][0-9][0-9][0-9])-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])"),
	UtcTime: new RegExp("([01][0-9]|[2][0123]):([012345][0-9]):([012345][0-9])"),
	UtcMs: new RegExp("\.([0-9]+)"),
	Zone: new RegExp("([+-])([01][0-9]|[2][0123]):([012345][0-9])"),
	Utc: new RegExp("([0-9][0-9][0-9][0-9])-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])"+"[T ]"+"([01][0-9]|[2][0123]):([012345][0-9]):([012345][0-9])")
}

// Outdated: must be updated.
System.DateTime.Expression = new RegExp("(0[1-9]|1[012])/(0[1-9]|[12][0-9]|3[01])/([0-9][0-9])");
System.DateTime.ExpressionUtcDate = new RegExp("([0-9][0-9][0-9][0-9])-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])");
System.DateTime.ExpressionUtcTime = new RegExp("([01][0-9]|[2][0123]):([012345][0-9]):([012345][0-9])");
System.DateTime.ExpressionUtcMs = new RegExp("\.([0-9]+)");
System.DateTime.ExpressionZone = new RegExp("([+-])([01][0-9]|[2][0123]):([012345][0-9])");
System.DateTime.ExpressionUtc = new RegExp(System.DateTime.ExpressionUtcDate.toString()+"[T ]"+System.DateTime.ExpressionUtcTime.toString());

System.DateTime.SubtractDays = function(days, round){
	/// <summary>
	/// 
	/// </summary>
	date = this;
	var newDate = new Date(date - new System.TimeSpan(days,0,0,0,0).Ticks);
	// crop hours, minutes seconds.
	var nDate = newDate;
	if (round){
		nDate = new Date(newDate.getFullYear(),newDate.getMonth(),newDate.getDate());
	}
	return nDate;
}


System.DateTime.SubtractMonths = function(months, round){
	/// <summary>
	/// 
	/// </summary>
	date = this;
	var totalMonths = (date.getFullYear()*12)+(date.getMonth());
	totalMonths = totalMonths - months;
	var newYear = Math.floor((totalMonths)/12);
	var newMonth = totalMonths - newYear*12;
	date.setFullYear(newYear);
	date.setMonth(newMonth);
	var newDate = date;
	// Crop hours, minutes seconds.
	if (round){
		newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
	}
	return newDate;
}

System.DateTime.GetFromString = function(dateString, ignoreTimeZoneAndParseAsUtc){
	/// <summary>
	/// 
	/// </summary>
	date = this;
	// extract variable;
	var yyyy = 0;
	var MM = 0;
	var dd = 0;
	var dateMatch = dateString.match(System.DateTime.ExpressionUtcDate);
	if (dateMatch){
		yyyy = dateMatch[0].replace(System.DateTime.ExpressionUtcDate,"$1");
		MM = dateMatch[0].replace(System.DateTime.ExpressionUtcDate,"$2");
		dd = dateMatch[0].replace(System.DateTime.ExpressionUtcDate,"$3");
	}
	var hh = 0;
	var mm = 0;
	var ss = 0;
	var timeMatch = dateString.match(System.DateTime.ExpressionUtcTime);
	if (timeMatch){
		hh = timeMatch[0].replace(System.DateTime.ExpressionUtcTime,"$1");
		mm = timeMatch[0].replace(System.DateTime.ExpressionUtcTime,"$2");
		ss = timeMatch[0].replace(System.DateTime.ExpressionUtcTime,"$3");
	}
	var fff = 0;
	var msMatch = dateString.match(System.DateTime.ExpressionUtcMs);
	if (msMatch){
		fff = msMatch[0].replace(System.DateTime.ExpressionUtcMs,"$1");
		fff = parseFloat("0."+fff);
		fff = parseInt(fff*1000);
	}
	var znMatch = dateString.match(System.DateTime.ExpressionZone);
	var zn = 0;
	var zh = 0;
	var zm = 0;
	if (znMatch){
		zn = parseInt(parseFloat(znMatch[0].replace(System.DateTime.ExpressionZone,"$1")+"1"));
		zh = parseInt(parseFloat(znMatch[0].replace(System.DateTime.ExpressionZone,"$2"))*zn);
		zm = parseInt(parseFloat(znMatch[0].replace(System.DateTime.ExpressionZone,"$3"))*zn);
	}
	if (ignoreTimeZoneAndParseAsUtc){
		date.setUTCFullYear(yyyy,MM-1,dd);
		date.setUTCHours(hh,mm,ss,fff);
	}else{
		// Check for marks which are same as "+00:00".
		var zeroZone = false;
		zeroZone = (zeroZone || (dateString.indexOf("GMT") > -1));
		zeroZone = (zeroZone || (dateString.indexOf("Z") > -1));
		// If timezone was not specified then treat string as local time.
		// This is default behaviour on all platforms.
		if (zn == 0 && !zeroZone){
			date.setFullYear(yyyy,MM-1,dd);
			date.setHours(hh,mm,ss,fff);
		}else{
			// Time zone was specified so we can use time zone.
			date.setUTCFullYear(yyyy,MM-1,dd);
			date.setUTCHours(hh,mm,ss,fff);
			// This date contains time zone.
			date = new Date(date.getTime()-(zh*60+zm)*60*1000);
		}
	}
	//alert(zn+":"+zh+":"+zm);
	return date;
}

System.DateTime.GetFromUtcString = function(dateString){
	/// <summary>
	/// Gets Date from UTC string
	/// </summary>
	date = this;
	date.GetFromString(dateString,true);
	return date;
}


System.DateTime.ToString = function(format){
	/// <summary>
	/// Converts the value of this instance to its equivalent string representation
	/// using the specified format.
	/// </summary>
	/// <param name="format" type="String">A format string.</param>
	/// <returns>A string representation of value of this instance as specified by format.</returns>
}

System.DateTime.ToString = function(dateTime, format){
	/// <summary>
	/// Converts DateTime to its equivalent string representation
	/// using the specified format.
	/// </summary>
	/// <param name="dateTime" type="DateTime">DateTime.</param>
	/// <param name="format" type="String">A format string.</param>
	/// <returns>A string representation of value of this instance as specified by format.</returns>
	//---------------------------------------------------------
	// INIT: Arguments
	//---------------------------------------------------------
	var date;
	var format;
	switch (arguments.length){
		case 0:
			date = this;
			format = date.DefaultFormat;
			break;
		case 1:
			date = this;
			format = arguments[0];
			break;
		case 2:
			date =  arguments[0];
			format = arguments[1];
			break;
		default:
			return "";
			break
	}
	//---------------------------------------------------------
	//ms-help://MS.VSCC.v80/MS.MSDN.v80/MS.VisualStudio.v80.en/dv_fxfund/html/98b374e3-0cc2-4c78-ab44-efb671d71984.htm
	date.addZero = function(number){return (number < 10) ? '0' + number : number};
	// www is provided for old compatibility. Use 'dddd' and 'ddd' instead.
	var wwwArray = new Array( "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" );
	var dddArray = new Array( "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" );
	var ddddArray = new Array( "Sunday", "Monday", "Tuesday", "Wednesday", "Thuesday", "Friday", "Saturday" );
	var MMMArray = new Array( "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" );
	if (format == null){ format = date.DefaultFormat };
	// "X" format is used to store DateTome values inside XML files of DataSet.
	if (format == "Outlook"){
		var now = new Date();
		if (date.getFullYear() == now.getFullYear()
			&& date.getMonth() == now.getMonth()
			&& date.getDate() == now.getDate()){
				results = "ddd HH:mm";
			}else{
				format = "yyyy-MM-dd HH:mm";
			}
	}
	if (format == "X"){ format = "yyyy-MM-ddTHH:mm:ss.fffzzz" };
	// Generate values from Date.
	var fff = date.getMilliseconds();
	var yyyy = date.getFullYear();
	var yy = new String(date.addZero(yyyy));
	yy = yy.substr(yy.length-2,2);
	var www = wwwArray[date.getDay()]; // Outdated!!!
	var dddd = ddddArray[date.getDay()];
	var ddd = dddArray[date.getDay()];
	var dd = date.addZero(date.getDate());
	var MMM = MMMArray[date.getMonth()];
	var MM = date.addZero(date.getMonth()+1);
	var hAmPm = date.getHours()%12;
	if (hAmPm == 0) hAmPm = 12;
	var hh = date.addZero(hAmPm); // 12 format
	var HH = date.addZero(date.getHours()); // 24 format
	var mm = date.addZero(date.getMinutes());
	var ss = date.addZero(date.getSeconds());
	var tt = (date.getHours() < 12) ? "AM" : "PM";
	var zzz = date.addZero(date.getTimezoneOffset());
	var offset = date.getTimezoneOffset();
	var negative = (offset < 0);
	if (negative) offset = offset * -1;
	zzz = date.addZero(Math.floor(offset/60))+":"+date.addZero((offset%60));
	if (negative || offset == 0){
		zzz = "+"+zzz;
	}else{
		zzz = "-"+zzz;
	}
	// Apply format.
	var strDate = new String(format);
	strDate = strDate.replace("yyyy",yyyy);
	strDate = strDate.replace("yy",yy);
	strDate = strDate.replace("www",www);
	strDate = strDate.replace(new RegExp("[d]{4-10}","g"),dddd);
	strDate = strDate.replace(new RegExp("[d]{3}","g"),ddd);
	strDate = strDate.replace("dd",dd);
	strDate = strDate.replace("MMM",MMM);
	strDate = strDate.replace("MM",MM);
	strDate = strDate.replace("ss",ss);
	strDate = strDate.replace("hh",hh);
	strDate = strDate.replace("HH",HH);
	strDate = strDate.replace("mm",mm);
	strDate = strDate.replace("ss",ss);
	strDate = strDate.replace("tt",tt);
	strDate = strDate.replace("ffffff",(fff+"000000").substr(0,6));
	strDate = strDate.replace("fff",(fff+"000").substr(0,3));
	strDate = strDate.replace("zzz",zzz);
	return strDate;
}

System.DateTime.ToUtcString = function(format){
	/// <summary>
	/// Converts LocalTime to UTC String.
	/// </summary>
	/// <returns type="String" />
	var offset = this.getTime() + (this.getTimezoneOffset()*60000);
	var ss = new Date(offset);
	return ss.toString(format);
}

System.DateTime.ToDifferenceString = function(dateOld,dateNew){
	/// <summary>
	/// 
	/// </summary>
	/// <returns type="String" />
	this.addZero = function(number){return (number < 10) ? '0' + number : number};
	dateNew = dateNew ? dateNew : new Date();
	var ms = dateNew.getTime() - dateOld.getTime();
	var nd = new Date(ms);
	var ph = nd.getHours();
	var pm = nd.getMinutes();
	var ps = nd.getSeconds();
	var msPassed = 1000*(60*(60*ph + pm) + ps) + nd.getMilliseconds();
	var d = (nd.getTime() - msPassed)/24/60/60/1000;
	var results = Math.round(d)+"d "+ph+"h "+pm+"m";//+":"+this.addZero(ps);
//	var ds = new String(d);
//	if (d > 0){
//		if (ds.substr(ds.length-1,ds.length) == "1"){
//			 results = d+"d "+results;
//		}else{
//			 results = d+"d "+results;
//		}
//	}
	return results;
}

System.DateTime.GetDayType = function(d, trimResults){
	d = (d) ? d : new Date();
	var results = new String();
	//if (d.getMonth() == 8 && d.getDate() == 21) results = "New Year";
	if (d.getMonth() == 9 && d.getDate() == 31) results = "Halloween";
	if (d.getMonth() == 11 && d.getDate() == 31) results = "New Year";
	if (trimResults){
		results = results.replace(" ","");
	}
	return results;
}

//-------------------------------------------------------------
// Check DateTime
//-------------------------------------------------------------

System.DateTime.Separator = "/";
System.DateTime.YearMin = 1900;
System.DateTime.YearMax = 2100;
System.DateTime.DateFormat = "dd/mm/yyyy";
System.DateTime.Expression = new RegExp("(0[1-9]|1[012])/(0[1-9]|[12][0-9]|3[01])/([0-9][0-9])");

System.DateTime.StripCharsInBag = function(s, bag){
	/// <summary>
	/// 
	/// </summary>
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (var i = 0; i < s.length; i++){
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

System.DateTime.DaysInFebruary = function(valYear){
	/// <summary>
	/// 
	/// </summary>
	// February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((valYear % 4 == 0) && ( (!(valYear % 100 == 0)) || (valYear % 400 == 0))) ? 29 : 28 );
}

System.DateTime.DaysArray = function(valYear){
	/// <summary>
	/// 
	/// </summary>
	var arrDays = new Array;
	for (var i = 1; i <= 12; i++){
		arrDays[i] = 31;
		if (i==4 || i==6 || i==9 || i==11){arrDays[i] = 30};
	}
	// Set February days.
	arrDays[2] = System.DateTime.DaysInFebruary(valYear);
	return arrDays;
}

System.DateTime.IsDate = function(valDate){
	/// <summary>
	/// 
	/// </summary>
	/// <returns type="bool" />
	var dateString = new String(valDate);
	results = "";
	// Get Day, Month, Year;
	if (!System.DateTime.Expression.test(dateString))	return "Invalid! <span style=\"color: gray;\">Format: mm/dd/yyyy</span>";
	// Date looks OK so continue to check.
	var MM = parseInt(dateString.replace(System.DateTime.Expression,"$1"),10);
	var DD = parseInt(dateString.replace(System.DateTime.Expression,"$2"),10);
	var YY = parseInt(dateString.replace(System.DateTime.Expression,"$3"),10);
	//alert(DD+"/"+MM+"/"+YY);
	if (YY >= 0 && YY <= 50) YY += 2000;
	if (YY > 50 && YY <= 99) YY += 1900;
	var DaysInMonth = System.DateTime.DaysArray(YY)[MM];
	//alert(DD+"/"+MM+"/"+YY+" - "+DaysInMonth);
	if (MM < 1 || MM > 12) return "Invalid Month";
	if (DD > DaysInMonth) return "Invalid Day";
	if (YY < System.DateTime.YearMin || YY > System.DateTime.YearMax) return "Invalid Year";
	return results;
}

//-------------------------------------------------------------
// Extend JavaScript Date object.
//-------------------------------------------------------------

Date.prototype.GetFromString = System.DateTime.GetFromString;
Date.prototype.GetFromUtcString = System.DateTime.GetFromUtcString;
Date.prototype.DefaultFormat = "yyyy-MM-dd HH:mm:ss";
Date.prototype.toString = System.DateTime.ToString;
Date.prototype.ToString = System.DateTime.ToString;
Date.prototype.toUtcString = System.DateTime.ToUtcString;

//=============================================================================
// System.Configuration
//-----------------------------------------------------------------------------
// Make sure that the sub namespace exists.
System.Configuration = System.Configuration ? System.Configuration : {}

System.Configuration.ConfigurationManager = function(){
	/// <summary>
	/// 
	/// </summary>
	// Declare type of this class.
	this.Type = "System.Configuration.ConfigurationManager";
	this.IsServerSide = new Boolean;
	this.XmlConfig = null;
	this.ObjConfig = null;
	this.FilePath = ""
	//---------------------------------------------------------
	// METHOD: ReadConfig
	//---------------------------------------------------------
	this.ReadConfig = function(){
		var results = false;
		if (this.IsServerSide){
			// Get Web configuration XML file. NOTE!!!! Web.config is in subfolder.
			this.FilePath = Request.ServerVariables("APPL_PHYSICAL_PATH")+"Web.config";
			//Response.Write(filePath+"<br>");
			// Try to use ActiveX Object first (supports encryption).
			try{
				this.ObjConfig = Server.CreateObject("PinnacleSports.ActiveX.Charset");
				results = true;
			}catch(ex){
				// Instantiate the MSXML 3.0 Object that will hold the XML file.
				this.XmlConfig = new ActiveXObject("Msxml2.DOMDocument");
				// Turn off asyncronous file loading.
				this.XmlConfig.async = false;
				// Load the XML document.
				this.XmlConfig.load(this.FilePath);
				if (this.XmlConfig.parseError.errorCode != 0){
					// Write out if an error occured.
					Trace.Write("Error: "+this.XmlConfig.parseError.errorCode+": "+this.XmlConfig.parseError.reason);
				}else{
					results = true;
				}
			}
		}
		return results;
	}
	//---------------------------------------------------------
	// METHOD: ConnectionStrings
	//---------------------------------------------------------
	this.ConnectionStrings = function(key){
		var results = new String;
		var IsSuccess = this.ReadConfig();
		if(IsSuccess){
			// If we are using object onfig
			if (this.ObjConfig){
				results = "Provider=MSDASQL; Driver={SQL Server};"+this.ObjConfig.GetConnectionStrings(this.FilePath, key);
			}else{
				var selectNodes = "/configuration/connectionStrings/add[@name='"+key+"']";
				//Trace.Write("Select Nodes: "+selectNodes);
				var objNodes = this.XmlConfig.selectNodes(selectNodes);
				//Trace.Write("Found Nodes: "+objNodes.length);
				for (var i=0; i < objNodes.length; i++){
					// Add additional info to convert dotNET connection string to ASP.
					//Provider=MSDASQL; Driver={SQL Native Client} SQL Server
					results = "Provider=MSDASQL; Driver={SQL Server};"+objNodes[i].attributes.getNamedItem("connectionString").text;
					//Trace.Write(results.replace("yM65tro0p$12","&lt;password&gt;"));
				}
			}
		}
		// Replace some .NET keys to ASP keys
		results = results.replace("Data Source", "SERVER");
		results = results.replace("Initial Catalog", "DATABASE");
		results = results.replace("User ID", "UID");
		results = results.replace("Password", "PWD");
		return results;
	}
	//---------------------------------------------------------
	// METHOD: AppSettings
	//---------------------------------------------------------
	// This is server side script to get values from server.
	this.AppSettings = function(key){
		var results = new String;
		var IsSuccess = this.ReadConfig();
		if(IsSuccess){
			// If we are using object onfig
			if (this.ObjConfig){
				results = this.ObjConfig.GetAppSettings(this.FilePath, key);
			} else {
				var selectNodes = "/configuration/appSettings/add[@key='"+key+"']";
				//Trace.Write("Select Nodes: "+selectNodes);
				var objNodes = this.XmlConfig.selectNodes(selectNodes);
				//Trace.Write("Found Nodes: "+objNodes.length);
				for (var i=0; i < objNodes.length; i++){
					results = objNodes[i].attributes.getNamedItem("value").text;
					//Trace.Write(results.replace("yM65tro0p$12","&lt;password&gt;"));
				}
			}
		}
		return results;
	}
	//---------------------------------------------------------
	// INIT: Class
	//---------------------------------------------------------
	this.InitializeClass = function(){
		//this.CaseName = "CaseNumber";
		this.IsServerSide = false;
		if (typeof(Response) == "object") this.IsServerSide = true;
		if (this.IsServerSide){
		}
	}
	this.InitializeClass();
}

System.ConfigurationManager = new System.Configuration.ConfigurationManager();

//=============================================================================
// System.Web.UI.Console
//-----------------------------------------------------------------------------

System.Web = System.Web ? System.Web : {};
System.Web.UI = System.Web.UI ? System.Web.UI : {};

System.Web.UI.Console = function(id, context){
	/// <summary
	/// Provides command line interface web control. You can use this class to create chat, trace, shell or other window.
	/// </summary>
	//---------------------------------------------------------
	// Public properties.
	this.Type = "System.Web.UI.Console";
	this.IsEnabled = new Boolean;
	this.IsServerSide = new Boolean;
	this.IsInterfaceReady = false;
	// Write to output.
	this.CurrentLevel = 0;
	this.Node;
	this.TableNode;
	this.FrameNode;
	this.FrameNodeUrl;
	this.ControlNode;
	this.LogBody = null;
	this.LogDoc = null;
	this.LogDiv = null;
	this.UncommittedNodes = new Array;
	this.CssPrefix = "SWUI_Console";
	this.Id;
	// Declare Style.
	this.IdentSize = unescape("%A0%A0%A0%A0");
	this.CurrentIdent = "";
	this.LogStyle = {};
	this.LogStyle2 = {};
    this.TimeStamp = "yyyy-MM-dd HH:mm:ss"
    this.Context = null;
    this.Style = "";
    this.AutoScroll = true;
	// Command line interface control.
    this.CmdLine;
	// TraceLevelSwitch controls general messages. In order to 
	// receive general trace messages change the value to the 
	// appropriate level:
	//   0 (Off)     - No messages.
	//   1 (Error)   - Only Error messages.
	//   2 (Warning) - Same as 1 + Warning messages.
	//   3 (Info)    - Same as 2 + Informational messages.
	//   4 (Verbose) - Same as 3 + Verbose messages.
	this.TraceLevelSwitch = 4;
	//---------------------------------------------------------
	// Private properties.
	var me = this;
	var intLevel = new Number;
	//---------------------------------------------------------
	// Occurs when an application writes to its redirected StandardOutput
	// stream.
	//this.InputDataReceived;
	//this.OutputDataReceived;
	//---------------------------------------------------------
	function createLogStyle(){
        this.LogStyle["onevent"] = {F:"'([oO]n)([a-zA-Z]+)'", R:"<span style=\"color: #800000;\">'$1$2'</span>",O:"g"};
        this.LogStyle["on"] = {F:"^(on )(.*)", R:"<span style=\"color: #808080;\">on </span>$2",O:"i"};
        this.LogStyle["true"] = {F:"(true)", R:"<span style=\"color: #0000E0;\">$1</span>",O:"ig"};
        this.LogStyle["false"] = {F:"(false)", R:"<span style=\"color: #0000E0;\">$1</span>",O:"ig"};
        this.LogStyle["set"] = {F:"^(set )(.*)", R:"<span style=\"color: #707000;\">set </span>$2",O:"i"};
        this.LogStyle["get"] = {F:"^(get )(.*)", R:"<span style=\"color: #707000;\">get </span>$2",O:"i"};
        this.LogStyle["call"] = {F:"^(call )(.*)", R:"<span style=\"color: #0000FF;\">call</span> $2",O:"i"};
        this.LogStyle["warning"] = {F:"^(warning)(.*)", R:"<span style=\"color: #b8860b;\">Warning</span>$2",O:"i"};
        this.LogStyle["error"] = {F:"^(error)(.*)", R:"<span style=\"color: #ff0000;\">Error</span>$2",O:"i"};
        this.LogStyle["exec"] = {F:"^(exec)(.*)", R:"<span style=\"color: #cc0099;\">exec</span>$2",O:"i"};
        this.LogStyle["info"] = {F:"^(info.*)", R:"<span style=\"color: #c0c000;\">$1</span>",O:"i"};
        this.LogStyle["comment1"] = {F:"([^:])//(.*)$", R:"$1<span style=\"color: #008000\">//$2</span>",O:"g"};
        this.LogStyle["comment2"] = {F:"^//(.*)$", R:"<span style=\"color: #008000\">//$1</span>",O:"g"};
        this.LogStyle2["date"] = {F:"#date#", R:me.returnDate,O:"i"};
        this.LogStyle2["ident"] = {F:"#ident#", R:me.returnIdent,O:"i"};
        // Create regular expressions.
        for (var property in this.LogStyle){
			this.LogStyle[property].Fx = new RegExp(this.LogStyle[property].F,this.LogStyle[property].O);
		}
        for (var property in this.LogStyle2){
			this.LogStyle2[property].Fx = new RegExp(this.LogStyle2[property].F,this.LogStyle2[property].O);
		}
	}		
	//---------------------------------------------------------
    this.SetStyle = function(name){
		if (this.Style == "Matrix" && typeof(name)== "undefined"){
			this.Style = "Matrix";
		}else{
			this.Style = new String(name);
		}
	    this.returnIdent = function(){ return me.CurrentIdent };
        this.returnDate = function(){ return "<span style=\"color: #A0A0A0;\">"+new Date().toString(me.TimeStamp)+": </span>" };
	    this.Font = "";
		createLogStyle.call(this);
		// If no style sheet is attached to log frame then...
		if (this.LogDoc)
		if (this.LogDoc.styleSheets.length == 0){
			for (var s = 0; s < this.Context.styleSheets.length; s++){
				var styleSheet = this.Context.styleSheets.item(s);
				var rx = new RegExp("System.Web.UI.Interface(\.debug)?\.css", "gi");
				var href = styleSheet.href;
				if (href.match(rx)){
					// Create link to stylesheet.
					if (this.LogDoc.createStyleSheet){
						this.LogDoc.createStyleSheet(href);
					}else{
						var newSS = this.LogDoc.createElement('link');
						newSS.href = href;
						newSS.rel = "stylesheet";
						newSS.type = "text/css";
						//newSS.media = "all";
						this.LogDoc.getElementsByTagName("head")[0].appendChild(newSS);

					}
					break;
				}
			}
		}
		// Switch styles.
		if (this.Style == "Matrix"){
			this.TimeStamp = "dd:HH:mm:ss";
		}else{
			this.TimeStamp = "yyyy-MM-dd HH:mm:ss";
		}
		var prefix = this.CssPrefix + ((name) ? "_" + name : "");
		this.StyleMessage = "white-space: nowrap; text-align: left;";
		if (this.Node){
			this.Node.className = prefix;
			this.TableNode.className = prefix+"_Table";
			this.TableNode.tBodies[0].className = prefix+"_Table_TBody";
			this.TableNode.tBodies[0].rows[0].className = prefix+"_Table_TBody_Row1";
			this.TableNode.tBodies[0].rows[1].className = prefix+"_Table_TBody_Row2";
			this.FrameNode.className = prefix+"_Frame";
			this.BarDiv.className = prefix+"_CommandLine";
			this.LogBody.className = prefix+"_LogBody"
			this.LogDiv.className = prefix+"_LogDiv";
		}
		if (this.IsServerSide) this.StyleMessage +=  "font-size: 8pt; font-family: Verdana;"
    }
	//---------------------------------------------------------
	this.LevelUpdate = function(level){
		// If level was not submited then...
		if (level == null){
			// Do nothing (keep current level).
		}else{
			// Check level.
			if (level == 0){
				// Reset levels.
				this.CurrentLevel = 0;
			}else{
				if (level > 1) level = 1;
				if (level < -1) level = -1;
				// Change level.
				this.CurrentLevel = this.CurrentLevel + level;
			}
		}
		me.CurrentIdent = "";
		for (var i = 0; i < this.CurrentLevel; i++){
            me.CurrentIdent += this.IdentSize;
		}
	}
	//---------------------------------------------------------
	var layoutControl;
	function layoutControl_ShortCutAction(sender,e){
		var allowDefaultBrowserAction = null;
		if (e.EventName == "OnKeyDown"){
			// We can customize special actions for our keys.
			switch(e.KeyName){
				//case "CTRL+T": alert("CTRL+T was pressed!"); break;
				//case "CTRL+S": alert("CTRL+S was pressed!"); break;
				//case "RETURN": allowDefaultBrowserAction = false; break;
				default:
			}
		}
		return allowDefaultBrowserAction;
	}
	//---------------------------------------------------------
	function CommandLineTextBox_Command(sender, e){
		sender.Parent.Write("guest$ "+e.Command);
		var lcmd = e.Command.toLowerCase();
		switch(lcmd){
			case "/console cls":
				me.Clear();
				break;
			case "/console help":
				sender.Parent.Write("CLS - Clears the screen.");
				break;
			default:
				if (lcmd.indexOf("/console kbd ") > -1){
					var layoutName = e.Command.substr(13);
					me.ChangeLayout(layoutName);
				}else if (lcmd.indexOf("/console style ") > -1){
					var styleName =  e.Command.substr(15);
					me.SetStyle(styleName);
				} else {
					sender.Parent.Write("'"+e.Command+"' is not recognized as an internal or external command,");
					sender.Parent.Write("operable program or batch file.");
				}
				break;
		}
	}
	//---------------------------------------------------------
	this.ChangeLayout = function(layoutName){
		if (!System.Type.Class.Exists("System.Web.UI.ShortKeys.KeysManager")){
			// Can't change layout because 'System.Web.UI.ShortKeys.KeysManager' class doesn't exist.
		}else{
			// Disable Previous Layout.
			if (layoutControl){
				// Dispose Previous Layout
				layoutControl.Dispose();
			}
			layoutControl = new System.Web.UI.ShortKeys.KeysManager("LayoutControl",this.CmdLine.LineNode);
			if (layoutName != ""){
				if (!System.Type.Class.Exists("System.Globalization.KeyboardLayouts.Layout")){
					// Can't change layout because 'System.Globalization.KeyboardLayouts.Layout' class doesn't exist.
				}else{
					layoutControl.KeyboardLayout = new System.Globalization.KeyboardLayouts.Layout(layoutName);
				}
			}
			// Prevent browser keys "New Tab" and "Save".
			layoutControl.PreventKeys(["CTRL+T","CTRL+S"]);
			// Allow "Save" again.
			layoutControl.AllowKeys(["CTRL+S"]);
			// a
			layoutControl.OnShortCutAction = layoutControl_ShortCutAction;
		}
	}
	//---------------------------------------------------------
	this.CreateControls = function(){
		this.BarDiv = this.Context.createElement("div");
		this.TableNode.tBodies[0].rows[1].childNodes[0].appendChild(this.BarDiv);
		if (!System.Type.Class.Exists("System.Web.UI.HtmlControls.TextBox.CommandLine")){
			// Can't create command line because 'System.Web.UI.HtmlControls.TextBox.CommandLine' class doesn't exist.
			this.CmdLine = this.Context.createElement("div");
			this.CmdLine.innerHTML = "[Clear]";
			this.CmdLine.style.cursor = "pointer";
			this.CmdLine.onclick = function() { me.Clear(); };
			this.BarDiv.appendChild(this.CmdLine);
		} else {
			// Create command line.
			var cmdTextBox = this.Context.createElement("input");
			cmdTextBox.id = this.Id + "CommandLine";
			this.BarDiv.appendChild(cmdTextBox);
			this.CmdLine = new System.Web.UI.HtmlControls.TextBox.CommandLine(cmdTextBox, this.Context);
			this.CmdLine.Parent = this;
			this.CmdLine.Command = CommandLineTextBox_Command;
		}
	}
	//---------------------------------------------------------
	this.Clear = function(){
		this.LogDiv.innerHTML = "";
	}
	//---------------------------------------------------------
	this.CreateInterface = function(){
		if (!this.FrameNode){
			this.Node = this.Context.getElementById(this.Id);
			var bodyExist = (this.Context.getElementsByTagName("body").length > 0);
			if (bodyExist){
				if (!this.Node){
					this.Node = this.Context.createElement("div");
					this.Node.id = this.Id;
					// Create Table node. 
					this.TableNode = this.Context.createElement("table");
					var tbody = this.Context.createElement("tbody");
					var tr1 =  this.Context.createElement("tr");
					var td1 =  this.Context.createElement("td");
					var tr2 =  this.Context.createElement("tr");
					var td2 =  this.Context.createElement("td");
					// DOM insertion - no leaks
					this.Node.appendChild(this.TableNode);
					this.TableNode.appendChild(tbody);
					tbody.appendChild(tr1);
					tbody.appendChild(tr2);
					tr1.appendChild(td1);
					tr2.appendChild(td2);
					// Create IFrame.
					this.FrameNode = this.Context.createElement("iframe");
					this.FrameNode.id = this.Id+"Frame";
					this.FrameNode.frameborder = 0;
					this.FrameNode.style.visibility = "hidden";
					this.FrameNode.src = "about:blank";
					//alert(this.FrameNode.src);
					// Next part will be loaded through event.
					if (typeof(this.Context.onreadystatechange) != "undefined"){
						// Internet Explorer.
						this.FrameNode.attachEvent("onreadystatechange", Node_Load);
					}else{
						// FireFox
						this.FrameNode.addEventListener("load", Node_Load, true);
					}
					td1.appendChild(this.FrameNode);
				}
			}
		}
		
		
	}
	//---------------------------------------------------------
	function Node_Load(){
		me.OnLoad();
	}
	//---------------------------------------------------------
	var secondLoad = false;
	this.OnLoad = function(){
		var readyState = new String;
		// If this is Internet Explorer.
		if (typeof(this.Context.onreadystatechange) != "undefined"){
			readyState = this.FrameNode.readyState;
			if (readyState == "complete") readyState = "onload";
		}else{
			readyState = "onload";
		}
		// If page is loaded then..
		if (readyState == "onload"){
			if (secondLoad){
				// Remove events.
				if (this.FrameNode.removeEventListener){
					this.FrameNode.removeEventListener("load", Node_Load, true);
				} else if (this.FrameNode.detachEvent){
					this.FrameNode.detachEvent("onreadystatechange", Node_Load);
				}
				// Continue to create interface.
				this.CreateInterfaceStep2();
			}else{
				secondLoad = true;
				
				// Now we can set proper URL and it will be displayed properly.
				if (!this.FrameNodeUrl){
					this.FrameNode.src = System.GetScriptsPath()+"/Examples/System.Web.UI.ConsoleFrame.htm";
				}
			}
		}
	}
	//---------------------------------------------------------
	this.CreateInterfaceStep2 = function(){
		this.FrameNode.style.visibility = "visible";
		this.LogDoc = this.FrameNode.contentWindow.document;
		// Create HTML node if needed.
		var htmls = this.LogDoc.documentElement.getElementsByTagName("html");
//		alert(htmls[0].toString());
//		var html = null;
//		if (htmls.length > 0){
//			html = htmls[0];
//		} else {
//			alert(htmls.toString());
//			html = this.LogDoc.createElement("html");
//			this.LogDoc.documentElement.appendChild(html);
//		}
		// Create BODY node if needed.
		var bodies = this.LogDoc.documentElement.getElementsByTagName("body");
		var body = null;
		if (bodies.length > 0){
			body = bodies[0];
		} else {
			body = this.LogDoc.createElement("body");
			html.appendChild(body);
		}
		this.LogBody = body;
		this.LogBody.innerHTML = "<table style=\"height:100%; width: 100%\" cellspacing=\"0\" cellpadding=\"0\"><tr><td valign=\"bottom\" style=\"height:100%;\" id=\""+this.Id+"Cell\"></td></tr></table>";
		this.LogDiv = this.LogDoc.createElement("div");
		this.LogDoc.getElementById(this.Id+"Cell").appendChild(this.LogDiv);
		this.CreateControls();
		this.ChangeLayout("Lithuanian (UK)");
		this.SetStyle();
		this.IsInterfaceReady = true;
		this.Write("Info: --- Document Body Initialized ---");
	}
	//---------------------------------------------------------
	this.GetHtml = function(message,level, addTimeAndIdent){
		// If level = 2 then increase level now.
		if (level == 2 || level == -2) this.LevelUpdate(level);
        // Start to create message.
		var strMessage = new String(message);
        // Replace some special words.
        for (var property in this.LogStyle){
			var regex = this.LogStyle[property].Fx;
			var repto = this.LogStyle[property].R;
			strMessage = strMessage.replace(regex,repto);
		}
		var dateTime = "#date##ident#";
        for (var property in this.LogStyle2){
			var regex = this.LogStyle2[property].Fx;
			var repto = this.LogStyle2[property].R;
			dateTime = dateTime.replace(regex,repto);
		}
		if (addTimeAndIdent != false) strMessage = dateTime + strMessage;
		// If level = 1 then increase level later
		if (level == 1 || level == -1) this.LevelUpdate(level);
		return strMessage;
	}
	//---------------------------------------------------------
	this.TraceError = function(message){
		if (this.TraceLevelSwitch > 0) this.Write(message);
	}
	//---------------------------------------------------------
	this.TraceWarning = function(message){
		if (this.TraceLevelSwitch > 1) this.Write(message);
	}
	//---------------------------------------------------------
	this.TraceInformation = function(message){
		if (this.TraceLevelSwitch > 2) this.Write(message);
	}
	//---------------------------------------------------------
	function appendTextNode(htmlText){
		var textNode = this.FrameNode.contentWindow.document.createElement("div");
		textNode.styleText = this.StyleMessage;
		textNode.innerHTML = htmlText;
		var distanceFromBottom = this.LogBody.scrollHeight - this.LogBody.scrollTop - this.LogBody.clientHeight;
		this.LogDiv.appendChild(textNode);
		if (this.AutoScroll) try{
			// If scroolbar at the bottom then scroll to bottom.
			if (distanceFromBottom <= 0){
				this.ScrollDown(true);
			}
		} catch(ex){};
	}
	//---------------------------------------------------------
	function initializeTraceLog(){
		var bodyExist = (this.Context.getElementsByTagName("body").length > 0);					
		if (bodyExist){
			var traceLog = this.Context.getElementById("TraceLog");
			// If placeholder exist but frame doesn't then...
			if (traceLog){
				var traceFrame = this.Context.getElementById("SystemTraceLogFrame");
				if (!traceFrame){
					this.Id = "SystemTraceLog";
					this.CreateInterface();
					var pn = traceLog.parentNode;
					var div = this.Context.createElement("div");
					div.id = "TraceLog";
					div.style.cssText = traceLog.style.cssText;
					div.appendChild(this.Node);
					pn.replaceChild(div, traceLog);
				}
			}
		}
	}	
	//---------------------------------------------------------
	this.Write = function(message, level, forceWrite, addTimeAndIdent){
		//Trace.Write("on "+this.Id+".Write('"+message+"', '"+level+"', '"+forceWrite+"', '"+addTimeAndIdent+"')");
		if (this.TraceLevelSwitch > 3){
			var finalText = new String;
			if (this.IsEnabled || forceWrite == true){
				finalText = this.GetHtml(message, level, addTimeAndIdent);
				// Write trace text to output.
				if (this.IsServerSide){
					finalText = "<div style=\""+this.StyleMessage+"\">"+finalText+"</div>\r\n"
					Response.Write(finalText);
					if (Response.Buffer == true) Response.Flush();
				}else{
					// We need to insert trace log interface if this is TraceLog.
					if (this.Id == "TraceLog") initializeTraceLog.call(this);
					if (this.IsInterfaceReady){
						if (this.UncommittedNodes.length > 0){
							for (var i = 0; i < this.UncommittedNodes.length; i++){
								appendTextNode.call(this, this.UncommittedNodes[i]);
							}
							// Reset uncommitted array.
							this.UncommittedNodes = new Array();
						}
						appendTextNode.call(this, finalText);
					}else{
						this.UncommittedNodes.push(finalText);
					}
				}
			}
			return finalText;
		}
	}
	//---------------------------------------------------------
	this.ScrollDown = function(force){
		if (this.LogBody)
		if (force){
			this.LogBody.scrollTop = this.LogBody.scrollHeight;
		}else{
			var distanceFromBottom = this.LogBody.scrollHeight - this.LogBody.scrollTop - this.LogBody.clientHeight;
			// If scroolbar at the bottom then scroll to bottom.
			if (distanceFromBottom <= 0){
				this.LogBody.scrollTop = this.LogBody.scrollHeight;
			}
		}
	}
	//---------------------------------------------------------
	// Write this message even if debug mode is disabled.
	this.WriteError = function(message, level){
		this.Write("error: "+message, level, true);
	}
	//---------------------------------------------------------
	this.WriteRecordSet = function(recordSet, forceWrite){
		if (this.IsEnabled == true || forceWrite == true){
			this.Write("Route thru Records...",1);
			var columnsCount = new Number;
			var rowsCount = new Number;
			if (recordSet.Fields != null){
				columnsCount = recordSet.Fields.Count;
				// If table was retrieved then...
				if (columnsCount > 0){
					var arrResults = new Array(recordSet.GetRows);
					rowsCount = arrResults.length;
					//rowsCount = varRecordSet.RecordCount;
				}
				this.Write("// RecordSet["+columnsCount+","+rowsCount+"]");
				recordSet.MoveFirst();
			}
			// If database returned some results then...
			if (rowsCount > 0){
				// Show returned records.
				for (var i = 0; i < columnsCount; i++){
					var tmpName = new String(recordSet(i).Name);
					var tmpValue = recordSet(i).Value;
					if (tmpName.indexOf("password") > -1) tmpValue = "&lt;********&gt;";
					this.Write(tmpName+" = '"+tmpValue+"'");
				}
			}
			this.Write("...End",-2);
		}
	}
	//---------------------------------------------------------
	this.InitializeInterface = function(){
	}
	//---------------------------------------------------------
	this.InitializeEvents = function(){
	}
	//---------------------------------------------------------
	this.Dispose = function(){
		// Dispose interface.
		// Disable Events.
		if (this.Node){
			// DOM removal - no leaks.
			//this.FrameNode.parentNode.removeChild(this.FrameNode);
			this.Table.tBodies[0].rows[0].childNodes[0].removeChild(this.FrameNode);
			this.Node.removeChild(this.TableNode);
		}
	}
	//---------------------------------------------------------
	this.Initialize = function(){
		// By default trace is disabled.
		this.IsEnabled = false;
		this.Id = arguments[0];
		// If Server side Response object exist then...
		this.IsServerSide = (typeof(Response) == "object");
		// If this is not on server then...
		if (!this.IsServerSide){
			// Set submited values or default values.
			var ctx = arguments[1];
			this.Context = ctx ? ctx : document;
		    // Create Interfac.e
		    //this.CreateInterface();
    	}
   		this.SetStyle();
	}
	this.Initialize.apply(this, arguments);
}

// Declare public object.
var Trace = new System.Web.UI.Console("TraceLog");

//-----------------------------------------------------------------------------

System.Web.Events = System.Web.Events ? System.Web.Events : {}

System.Web.Events.Add = function(sourceObjectId,eventName,objectName,delegateName){
	/// <summary>
	/// 
	/// </summary>
	this.Type = "System.Web.Events.Add";
	var eventId = objectName+"."+delegateName;
	var delegateScript = eventId+" = function(e){ var e = e ? e : window.event; var sender = e.target ? e.target : e.srcElement; "+objectName+".OnEvent(sender,e); }";
	var eventScript = new String;
	if(this.attachEvent){
		eventScript = "document.getElementById(\""+sourceObjectId+"\").attachEvent(\"on"+eventName+"\", "+eventId+");";
	}else{
		eventScript = "document.getElementById(\""+sourceObjectId+"\").addEventListener(\""+eventName+"\", "+eventId+",true);";
	}
	Trace.Write(this.Type+"("+sourceObjectId+", "+eventName+", "+objectName+", "+delegateName+");",1);
	Trace.Write("// "+delegateScript);
	Trace.Write("// "+eventScript);
	Trace.Write("// return "+eventId);
	Trace.Write("}",-2);
	eval(delegateScript);
	eval(eventScript);
	return eventId;
}

System.Web.Events.Remove = function(sourceObjectId,eventName,objectName,delegateName){
	/// <summary>
	/// 
	/// </summary>
	this.Type = "System.Web.Events.Remove";
	var eventId = objectName+"."+delegateName;
	var eventScript = new String;
	if(this.detachEvent){
		eventScript = "document.getElementById(\""+sourceObjectId+"\").detachEvent(\"on"+eventName+"\", "+eventId+");";
	}else{
		eventScript = "document.getElementById(\""+sourceObjectId+"\").removeEventListener(\""+eventName+"\", "+eventId+",true);";
	}
	Trace.Write(this.Type+"("+sourceObjectId+", "+eventName+", "+objectName+", "+delegateName+");",1);
	Trace.Write("// "+eventScript);
	Trace.Write("}",-2);
	eval(eventScript);
}

//=============================================================================
// CLASS: HttpRequest
//-----------------------------------------------------------------------------

//about SOAP Envelopes JavaScript: http://www.codeproject.com/webservices/aspwebsvr.asp
//http://www.codeproject.com/Ajax/JavaScriptSOAPClient.asp

System.Web.HttpRequest = function(){
	/// <summary>
	/// 
	/// </summary>
	this.HttpRequest = new Object;
	this.Type = "System.Web.HttpRequest";
	this.QueryUrl = new String;
	this.QueryData = new String;
	this.States = new Array("Uninitialized","Loading...","Loaded","Interactive","Complete");
	this.IsWebService;
	this.UniqueId = new String;
	this.DownloadSize = new Number;
	this.DownloadSizeLastP = new Number;
	this.DownloadTotal = new Number;
	this.DownloadTimeBegin = new Date;
	this.DownlaodTimeEnd = new Date;
	this.Busy = false;
	this.IsServerSide = (typeof(Response) == "object");
	var me = this;
	//---------------------------------------------------------
	// DELEGATE: Events
	//---------------------------------------------------------
	this.OnDataReady = function(sender,data){
		Trace.Write("results");
	}
	this.OnDataError;
	//---------------------------------------------------------
	// METHOD: Send
	//---------------------------------------------------------
	this.Send = function(queryUrl,queryData){
		this.QueryUrl = new String(queryUrl);
		this.QueryData = new String(queryData);
		if (typeof(this.IsWebService) == "undefined"){
			this.IsWebService = (this.QueryUrl.indexOf("asmx") > -1);
		}
		Trace.Write(this.UniqueId+": Send: ["+this.QueryData.length+" bytes] // IsWebService = "+this.IsWebService+"; QueryUrl="+queryUrl+"?"+queryData);
		this.HttpRequest.onreadystatechange = this.OnReadyStateChange;
		if(window.ActiveXObject){}else{ this.HttpRequest.onprogress = this.OnProgress; };
		if (this.IsWebService){
			// Open("method", "URL"[, asyncFlag[, "userName"[, "password"]]])
			this.HttpRequest.open("GET", this.QueryUrl+"?"+this.QueryData, true);
			// Firefox has problem with retrieveing XML and parsing it at same time.
			// It takes 2-3 times longer and it just stucks. So we need to get it as
			// plain text and parse it later.
			//if (!window.ActiveXObject) this.HttpRequest.overrideMimeType("text/plain");
			// Need to investigate 'close' and 'keep-alive' because maybe 'keep-alive' can improve speed on
			// time sync (where couple fast coneections made.
			this.HttpRequest.setRequestHeader("Connection", "close");
			//this.HttpRequest.setRequestHeader("Cache-Control","max-age=0");
			this.HttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			this.HttpRequest.setRequestHeader("Accept-Ranges","bytes");
			//this.HttpRequest.setRequestHeader("Content-Length", this.QueryData.length);
			this.HttpRequest.setRequestHeader("POSTDATA",this.QueryData);
			//this.HttpRequest.setRequestHeader("SOAPAction", "http://tempuri.org/Add");
		}else{
			this.HttpRequest.open("GET", this.QueryUrl+"?"+this.QueryData, true);
			this.HttpRequest.setRequestHeader("Connection", "close");
			this.HttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			this.HttpRequest.setRequestHeader("Content-Length", this.QueryData.length);
			this.HttpRequest.setRequestHeader("POSTDATA",this.QueryData);
   		}
		if(window.ActiveXObject){
			this.HttpRequest.send(this.QueryData);
		}else{
			//var stream = Components.classes['@mozilla.org/is/string-input-stream;1'].createInstance(Components.interfaces.nsIStringInputStream);
			//stream.setData("\r\n" + this.QueryData, -1);
			//this.HttpRequest.send(stream);
			this.HttpRequest.send(this.QueryData);
		}
	}
	//---------------------------------------------------------
	// EVENT: OnReadyState
	//---------------------------------------------------------
	this.OnReadyState = function(sender,e){
		//Trace.Write("results");
	}
	//---------------------------------------------------------
	// HANDLER: public OnProgress
	//---------------------------------------------------------
	this.OnProgress = function(evt){
		var id = "on "+ me.UniqueId+"<span style=\"color: gray;\">.OnProgress:</span> ";
		var state = me.StateToString()+"["+me.HttpRequest.readyState+"]";
		// 3. INTERACTIVE - Called multiple times while downloading in progress.
		// responseText holds the partial data.
		if (me.HttpRequest.readyState == 3 || me.HttpRequest.readyState == 4){
			// We will show download statistics only then interface is not busy.
			if (!me.Busy){
				me.Busy = true;
				// If this is IE.
				if (window.ActiveXObject){
					me.DownloadSize = -1;
					me.DownloadTotal = -1;
				}else{
					me.DownloadSize = me.HttpRequest.responseText.length;
					me.DownloadTotal = me.HttpRequest.getResponseHeader("Content-Length");
				}
				// For some reason DownloadSize ends smaller than total reported by server.
				if (me.HttpRequest.readyState == 4) me.DownloadSize = me.DownloadTotal;
				var e = new System.EventArgs("onstatechange");
				e["Size"] = me.DownloadSize;
				e["Total"] = me.DownloadTotal;
				if (me.OnReadyState) me.OnReadyState(me,e);
				Trace.Write(id+state+": Bytes Retrieved: "+me.DownloadSize+" / "+me.DownloadTotal);
				me.Busy = false;
			}
		}
	}
	//---------------------------------------------------------
	// METHOD: OnReadyStateChange
	//---------------------------------------------------------
	this.OnReadyStateChange = function(evt){
		var id = "on "+ me.UniqueId+"<span style=\"color: gray;\">.OnReadyStateChange:</span> ";
		var state = me.StateToString()+"["+me.HttpRequest.readyState+"]";
		// 0. UNINITIALIZED - open() has not been called yet.
		if (me.HttpRequest.readyState < 3 || me.HttpRequest.readyState == 4){
			if (typeof(Trace) == "object") Trace.Write(id+"; state='"+state+"'");
		}
		// 1. LOADING - send() has not been called yet.
		if (me.HttpRequest.readyState == 1){
			me.TimeBegin = new Date;
		}
		// 2. LOADED - send() has been called, headers and status are available.
		// Contact established with server but nothing downloaded yet.
		if (me.HttpRequest.readyState == 2){}
		// 3. INTERACTIVE - Called multiple times while downloading in progress.
		// responseText holds the partial data.
		if (me.HttpRequest.readyState == 3){
			// Dont include any interface actions here, because this slows down downloading a lot.
			// Use OnProgress event instead.
		}
		// 4. COMPLETED - Finished with all operations.
		if (me.HttpRequest.readyState == 4){
			// Calculate time.
			me.TimeEnd = new Date;
			var scriptTime = me.TimeEnd.getTime() - me.TimeBegin.getTime();
			var scriptRunTime = new Date(scriptTime);
			Trace.Write(id+"Download Time: "+scriptRunTime.getMinutes()+":"+scriptRunTime.getMinutes()+":"+scriptRunTime.getSeconds()+"."+scriptRunTime.getMilliseconds());
			// Fire on progress event.
			me.OnProgress();
			var downSize = me.DownloadSize+" Bytes";
			if (me.DownloadSize >= 1000) downSize = Math.round(me.DownloadSize/1024)+" KB";
			Trace.Write(id+"Downloaded: "+downSize);
			// Proceed.
			var reqStatus = -1;
			try{
				reqStatus = me.HttpRequest.status;
			}catch(ex){}
			// If request was "OK" then...
			Trace.Write(id+"Request Status: "+reqStatus);
			var error = false;
			if (reqStatus == 200){
				Trace.Write(id+"Returning Results");
				var data;
				if (me.IsWebService){
					//if (!window.ActiveXObject){
						//var xmlDocument = new System.Xml.XslTemplate();
						//xmlDocument.async = false;
						//xmlDocument.loadXML(me.HttpRequest.responseText);
						//data = xmlDocument;
					// new
					//	var vParser = new DOMParser();
					//	data = vParser.parseFromString(me.HttpRequest.responseText, "text/xml");
					//	if(data == null) Trace.Write("XML Doc Load Failed");
					//}else{
						data = me.HttpRequest.responseXML;
						// Turn on advanced selections.
						if (typeof(data) == "undefined"){
							Trace.Write("Error: "+me.UniqueId+" data has no properties!");
							error = true;
						}else{
							try{
								data.setProperty("SelectionLanguage", "XPath");
							}catch(ex){
								Trace.Write("Error: data.setProperty(\"SelectionLanguage\", \"XPath\") because "+ex.message);
							}
						}
					//}
				}else{
					data = me.HttpRequest.responseText;
				}
				if (!error) me.OnDataReady(me,data);
				//Trace.Write("Response text: '"+responseText+"'");
			}else{
				var reqText = "";
				var reqStatusText = "";
				try{
					reqText = me.HttpRequest.responseText;
					reqStatusText = me.HttpRequest.statusText;
				}catch(ex){}
				Trace.Write(id+"There was a problem retrieving the XML data: " + reqStatus +" - "+reqStatusText+" - "+me.QueryUrl+": "+reqText);
				var e = new System.EventArgs("OnDataError");
				if (me.OnDataError) me.OnDataError(me,e);
			}
		}
	}
	//---------------------------------------------------------
	// METHOD: StateToString
	//---------------------------------------------------------
	this.Reload = function(){
		Trace.Write("Reload: "+this.QueryUrl+"?"+this.QueryData);
		return me.Send(this.QueryUrl,this.QueryData);
	}
	//---------------------------------------------------------
	// METHOD: StateToString
	//---------------------------------------------------------
	this.StateToString = function(){
		return this.States[this.HttpRequest.readyState];
	}
	//---------------------------------------------------------
	// METHOD: StateToString
	//---------------------------------------------------------
	this.PatamatersToQuery = function(){
		var query = new String();
		if (this.Parameters){
			for (var property in this.Parameters){
			if (query.length > 0) query += "&";
			query += property+"="+escape(this.Parameters[property])
			}
		}
		return query;
	}
	//---------------------------------------------------------
	// INIT: Class
	//---------------------------------------------------------
	this.InitializeClass = function(){
		this.HttpRequest = new System.Xml.XmlRequest();
		var random = new String(Math.random());
		this.UniqueId = "WebService-"+random.substring(2);
	}
	this.InitializeClass();
}

//=============================================================================
// System.DataDataRow
//-----------------------------------------------------------------------------
System.Collections = System.Collections ? System.Collections : {}

System.Collections.DictionaryEntry = function(key, value){
	/// <summary>
	/// 
	/// </summary>
	this.Type = "System.Collections.HashtableItem";
	this.Key;
	this.Value;
	//---------------------------------------------------------
	// METHOD: Equals
	//---------------------------------------------------------
	// Determines whether two instances are equal.
	this.Equals = function(item){
		var equal = true;
		equal = equal && (this.Key == item.Key);
		equal = equal && (this.Value == item.Value);
		return equal;
	}
	//---------------------------------------------------------
	// METHOD: ToString
	//---------------------------------------------------------
	// Returns a String that represents the current Object.
	this.ToString = function(){
		return "HashtableItem[Key='"+this.Key+"';Value='"+this.Value+"']";
	}
	//---------------------------------------------------------
	// INIT: Class
	//---------------------------------------------------------
	this.InitializeClass = function(){
		this.Key = key;
		this.Value = value;
	}
	this.InitializeClass();
}

System.Collections.Hashtable = function(){
	/// <summary>
	/// 
	/// </summary>
	this.Type = "System.Collections.Hashtable";
	//---------------------------------------------------------
	// PROPERTY: Items
	//---------------------------------------------------------
	this.Items;
	this.Count;
	//---------------------------------------------------------
	// METHOD: GetKeys
	//---------------------------------------------------------
	// Get array of keys from the Hashtable.
	this.GetKeys = function(key){
		var keys = new Array();
		for (var property in this.Items){
			keys.push(property);
		}
		return keys;
	}
	//---------------------------------------------------------
	// METHOD: GetValues
	//---------------------------------------------------------
	// Get array of values from the Hashtable.
	this.GetValues = function(value){
		var values = new Array();
		for (var property in this.Items){
			values.push(this.Items[property]);
		}
		return values;
	}
	//---------------------------------------------------------
	// METHOD: GetValue
	//---------------------------------------------------------
	// Get value by key.
	this.GetValue = function(key){
		return this.Items[key];
	}
	//---------------------------------------------------------
	// METHOD: GetKey
	//---------------------------------------------------------
	// Get first key by value;
	this.GetKey = function(value){
		var key;
		for (var property in this.Items){
			if (this.Items[property] == value){
				key = property;
				break;
			}
		}
		return key;
	}
	//---------------------------------------------------------
	// METHOD: Add
	//---------------------------------------------------------
	// Adds an element with the specified key and value into the Hashtable.
	this.Add = function(key,value){
		var containsKey = this.ContainsKey(key);
		if (!containsKey) this.Count++;
		this.Items[key] = value;
		return !containsKey;
	}
	//---------------------------------------------------------
	// METHOD: Remove
	//---------------------------------------------------------
	// Removes the element with the specified key from the Hashtable.
	this.Remove = function(key){
		var containsKey = this.ContainsKey(key);
		if (containsKey){
			this.Count--;
			delete this.Items[key];
		}
		return !containsKey;
	}
	//---------------------------------------------------------
	// METHOD: Clear
	//---------------------------------------------------------
	// Removes all items.
	this.Clear = function(){
		this.Items = {};
	}
	//---------------------------------------------------------
	// METHOD: ContainsKey
	//---------------------------------------------------------
	// Determines whether the Hashtable contains a specific key.
	this.ContainsKey = function(key){
		return (typeof(this.Items[key]) != "undefined");
	}
	//---------------------------------------------------------
	// METHOD: ContainsValue
	//---------------------------------------------------------
	// Determines whether the Hashtable contains a specific value.
	this.ContainsValue = function(value){
		return (typeof(this.GetKey(value)) != "undefined");
	}
	//---------------------------------------------------------
	// METHOD: ToString
	//---------------------------------------------------------
	// Returns a String that represents the current Object.
	this.ToString = function(){
		return (this.Type+"[Count="+Count+"]");
	}
	//---------------------------------------------------------
	// INIT: Class
	//---------------------------------------------------------
	this.InitializeClass = function(){
		// Use array to store items (slower).
		this.Items = {};
		this.Count = new Number();
	}
	this.InitializeClass();
}

System.Collections.List = function(){
	/// <summary>
	/// 
	/// </summary>
	this.Type = "System.Collections.List";
	this.KeyIsUnique;
	this.ValueIsUnique;
	//---------------------------------------------------------
	// PROPERTY: Items
	//---------------------------------------------------------
	this.Items;
	//---------------------------------------------------------
	// METHOD: _indexOf
	//---------------------------------------------------------
	this._indexOf = function(property, value){
		var index = -1;
		for (var i = 0; i < this.Items.length; i++){
			if (this.Items[i][property] == value){
				index = i;
				break;
			}
		}
		return;
	}
	//---------------------------------------------------------
	// METHOD: _getItems
	//---------------------------------------------------------
	// Returns: System.Collections.DictionaryEntry[]
	this._getItemsBy = function(property, value, single){
		var items = new Array();
		// Get all objects.
		if (typeof(value) == "undefined"){
			for (var i = 0; i < this.Items.length; i++){
				items.push(this.Items[i]);
			}
		}else{
			// Get objects by value.
			for (var i = 0; i < this.Items.length; i++){
				if (this.Items[i][property] == value){
					items.push(this.Items[i]);
					if (single) break;
				}
			}
		}
		return items;
	}
	//---------------------------------------------------------
	// METHOD: _getObjectsBy
	//---------------------------------------------------------
	// Returns: object[]
	this._getObjectsBy = function(property, value, single){
		var objects = new Array();
		// Get all objects.
		if (typeof(value) == "undefined"){
			for (var i = 0; i < this.Items.length; i++){
				objects.push(this.Items[i][property]);
			}
		}else{
			// Get objects by value.
			for (var i = 0; i < this.Items.length; i++){
				if (this.Items[i][property] == value){
					objects.push(this.Items[i][property]);
					if (single) break;
				}
			}
		}
		return objects;
	}
	//---------------------------------------------------------
	// METHOD: IndexOfKey
	//---------------------------------------------------------
	// Get index of key (only if not unique).
	this.IndexOfKey = function(key){
		return this._indexOf("Key", key);
	}
	//---------------------------------------------------------
	// METHOD: GetIndexByValue
	//---------------------------------------------------------
	// Get index of value (only if not unique).
	this.IndexOfValue = function(value){
		return this._indexOf("Value", value);
	}
	//---------------------------------------------------------
	// METHOD: GetKeys
	//---------------------------------------------------------
	// Get array of keys from the Hashtable.
	this.GetKeys = function(){
		return this._getObjectsBy("Key", key, this.KeyIsUnique);
	}
	//---------------------------------------------------------
	// METHOD: GetValues
	//---------------------------------------------------------
	// Get array of values from the Hashtable.
	this.GetValues = function(){
		return this._getObjectsBy("Value", value, this.ValueIsUnique);
	}
	//---------------------------------------------------------
	// METHOD: GetValue
	//---------------------------------------------------------
	// Get first value by key.
	this.GetValue = function(key){
		var value;
		var items = this._getItemsBy("Key", key, true);
		if (items.length > 0) value = items[0].Value;
		return value;
	}
	//---------------------------------------------------------
	// METHOD: GetKey
	//---------------------------------------------------------
	// Get first key by value;
	this.GetKey = function(value){
		var key;
		var items = this._getItemsBy("Value", value, true);
		if (items.length > 0) key = items[0].Key;
		return key;
	}
	//---------------------------------------------------------
	// METHOD: Add
	//---------------------------------------------------------
	// Adds an element with the specified key and value into the Hashtable.
	this.Add = function(key,value){
		var allow = true;
		if (this.KeyIsUnique) allow = allow && (this.IndexOfKey == -1);
		if (this.ValueIsUnique) allow = allow && (this.IndexOfValue == -1);
		if (allow){
			var item = new System.Collections.DictionaryEntry(key, value);
			this.Items.push(item);
		}
		return allow;
	}
	//---------------------------------------------------------
	// METHOD: Remove
	//---------------------------------------------------------
	// Removes the element with the specified key from the Hashtable.
	this.Remove = function(key){
		var index;
		var removed = false;
		while(index != -1){
			index = this._indexOf("Key", key);
			if (index > -1){
				this.Items.splice(index, 1);
				removed = true;
			}
		}
		return removed;
	}
	//---------------------------------------------------------
	// METHOD: Clear
	//---------------------------------------------------------
	// Removes all items.
	this.Clear = function(){
		this.Items = new Array();
	}
	//---------------------------------------------------------
	// METHOD: ContainsKey
	//---------------------------------------------------------
	// Determines whether the Hashtable contains a specific key.
	this.ContainsKey = function(key){
		return (this._indexOf("Key", key) > -1);
	}
	//---------------------------------------------------------
	// METHOD: ContainsValue
	//---------------------------------------------------------
	// Determines whether the Hashtable contains a specific value.
	this.ContainsValue = function(value){
		return (this._indexOf("Value", value) > -1);
	}
	//---------------------------------------------------------
	// METHOD: ToString
	//---------------------------------------------------------
	// Returns a String that represents the current Object.
	this.ToString = function(){
		return (this.Type+"[Items.length="+this.Items.length+"]");
	}
	//---------------------------------------------------------
	// INIT: Class
	//---------------------------------------------------------
	this.InitializeClass = function(){
		// Use array to store items (slower).
		this.Items = new Array();
		this.KeyIsUnique = false;
		this.ValueIsUnique = false;
	}
	this.InitializeClass();
}


System.Collections.SortedList = function(){
	/// <summary>
	/// 
	/// </summary>
	this.Items = new Array();
	//var aa = new ActiveXObject("Scripting.Dictionary");
	//---------------------------------------------------------
	// INIT: Class
	//---------------------------------------------------------
	this.Add = function(key,value){
		// If user submited number then just set value.
		if (new String(parseInt(key)) == key){
			this.Items[key] = value;
		}else{
			if (this.Items[key] == null) this.Items.push(value);
			this.Items[key] = value;
		}
	}
	this.push = function(value){
		this.Add(this.length,value);
	}

	this.ContainsKey = function(key){
		this._keys.push(key);
		this._values.push(value);
	}
}


System.Collections.ArrayUniqueValueAdd = function(array, value, propertyName){
	/// <summary>
	/// 
	/// </summary>
	if (typeof(array) == "object"){
		var itemExist = false;
		if (property == null){
			for (var f = 0; f < array.length; f++){
				if (array[f] == value){
					itemExist = true;
					break;
				}
			}
		}else{
			for (var f = 0; f < array.length; f++){
				//Trace.Write(propertyName+" "+array[f][propertyName]+" "+value.ticketId);
				if (array[f][propertyName] == value[propertyName]){
					itemExist = true;
					break;
				}
			}
		}
		// If value does not exist then...
		if (itemExist == false){
			// Add value to array.
			//Trace.Write("Push value");
			array.push(value)
		}
	}
}

System.Collections.ArrayUniqueValueRemove = function(array,value,propertyName){
	/// <summary>
	/// This will remove one value by key from array. It works faster than ArrayValueRemove.
	/// </summary>
	if (typeof(array) == "object"){
		if (property == null){
			for (var f = 0; f < array.length; f++){
				if (array[f] == value){
					array.splice(f,1);
					break;
				}
			}
		}else{
			for (var f = 0; f < array.length; f++){
				if (array[f][propertyName] == value[propertyName]){
					array.splice(f,1);
					break;
				}
			}
		}
	}
}

System.Collections.ArrayValueRemove = function(array,value,propertyName){
	/// <summary>
	/// This will remove all values by key from array. It works slower than ArrayUniqueValueRemove.
	/// </summary>
	if (typeof(array) == "object"){
		if (property == null){
			for (var f = 0; f < array.length; f++){
				if (array[f] == value){
					array.splice(f,1);
				}
			}
		}else{
			for (var f = 0; f < array.length; f++){
				if (array[f][propertyName] == value[propertyName]){
					array.splice(f,1);
				}
			}
		}
	}
}

//=============================================================================
// CLASS: System.Text
//-----------------------------------------------------------------------------
// Make sure that the IO namespace exists.
System.Text = System.Text ? System.Text : {};
//-----------------------------------------------------------------------------
// HtmlDecode http://lab.msdn.microsoft.com/annotations/htmldecode.js
//   client side version of the useful Server.HtmlDecode method
//   takes one string (encoded) and returns another (decoded)

System.Text.PadZeros = function(num, totalLen){
	/// <summary>
	/// This function returns a string padded with leading zeros
	/// </summary>
	// Initialize return value as string
	var numStr = num.toString()
	var numZeros = totalLen - numStr.length // Calculate no. of zeros
	if (numZeros > 0){
		for (var i = 1; i <= numZeros; i++){
			numStr = "0" + numStr
		}
	}
	return numStr;
}

//System.Text.ReplaceDuplicates = function(find,replace);


System.Text.Trim = function(valText,valSymbols){
	/// <summary>
	/// Trim symbols from string.
	/// </summary>
	if (valSymbols == null) valSymbols = " ";
	var trimS = new RegExp("^["+valSymbols+"]+","g");
	var trimE = new RegExp("["+valSymbols+"]+$","g");
	var newText = new String;
	newText = valText.replace(trimS,"");
	newText = newText.replace(trimE,"");
	return newText;
}

System.Text.ToCamelCase = function(valText){
	/// <summary>
	/// Camel words of the string (firstLetterIsLowerRestCapital).
	/// </summary>
	var r1 = new RegExp("([A-Z])([A-Z]+)","ig");
	// Declare private function ConvertCase.
	function ConvertCase(a,b,c){
		// b = $1, c = $2.
		return b.toUpperCase()+c.toLowerCase();
	}
	var results = valText.replace(r1,ConvertCase);
	return results;
}

System.Text.HtmlSymbolCodes = {
	/// <summary>
	/// 
	/// </summary>
	0x0022: "quot",
	0x0026: "amp",
	0x003c: "lt",
	0x003e: "gt",
	0x00a0: "nbsp",
	0x00a1: "iexcl",
	0x00a2: "cent",
	0x00a3: "pound",
	0x00a4: "curren",
	0x00a5: "yen",
	0x00a6: "brvbar",
	0x00a7: "sect",
	0x00a8: "uml",
	0x00a9: "copy",
	0x00aa: "ordf",
	0x00ab: "laquo",
	0x00ac: "not",
	0x00ad: "shy",
	0x00ae: "reg",
	0x00af: "macr",
	0x00b0: "deg",
	0x00b1: "plusmn",
	0x00b2: "sup2",
	0x00b3: "sup3",
	0x00b4: "acute",
	0x00b5: "micro",
	0x00b6: "para",
	0x00b7: "middot",
	0x00b8: "cedil",
	0x00b9: "sup1",
	0x00ba: "ordm",
	0x00bb: "raquo",
	0x00bc: "frac14",
	0x00bd: "frac12",
	0x00be: "frac34",
	0x00bf: "iquest",
	0x00c0: "Agrave",
	0x00c1: "Aacute",
	0x00c2: "Acirc",
	0x00c3: "Atilde",
	0x00c4: "Auml",
	0x00c5: "Aring",
	0x00c6: "AElig",
	0x00c7: "Ccedil",
	0x00c8: "Egrave",
	0x00c9: "Eacute",
	0x00ca: "Ecirc",
	0x00cb: "Euml",
	0x00cc: "Igrave",
	0x00cd: "Iacute",
	0x00ce: "Icirc",
	0x00cf: "Iuml",
	0x00d0: "ETH",
	0x00d1: "Ntilde",
	0x00d2: "Ograve",
	0x00d3: "Oacute",
	0x00d4: "Ocirc",
	0x00d5: "Otilde",
	0x00d6: "Ouml",
	0x00d7: "times",
	0x00d8: "Oslash",
	0x00d9: "Ugrave",
	0x00da: "Uacute",
	0x00db: "Ucirc",
	0x00dc: "Uuml",
	0x00dd: "Yacute",
	0x00de: "THORN",
	0x00df: "szlig",
	0x00e0: "agrave",
	0x00e1: "aacute",
	0x00e2: "acirc",
	0x00e3: "atilde",
	0x00e4: "auml",
	0x00e5: "aring",
	0x00e6: "aelig",
	0x00e7: "ccedil",
	0x00e8: "egrave",
	0x00e9: "eacute",
	0x00ea: "ecirc",
	0x00eb: "euml",
	0x00ec: "igrave",
	0x00ed: "iacute",
	0x00ee: "icirc",
	0x00ef: "iuml",
	0x00f0: "eth",
	0x00f1: "ntilde",
	0x00f2: "ograve",
	0x00f3: "oacute",
	0x00f4: "ocirc",
	0x00f5: "otilde",
	0x00f6: "ouml",
	0x00f7: "divide",
	0x00f8: "oslash",
	0x00f9: "ugrave",
	0x00fa: "uacute",
	0x00fb: "ucirc",
	0x00fc: "uuml",
	0x00fd: "yacute",
	0x00fe: "thorn",
	0x00ff: "yuml",
	0x0152: "OElig",
	0x0153: "oelig",
	0x0160: "Scaron",
	0x0161: "scaron",
	0x0178: "Yuml",
	0x0192: "fnof",
	0x02c6: "circ",
	0x02dc: "tilde",
	0x0391: "Alpha",
	0x0392: "Beta",
	0x0393: "Gamma",
	0x0394: "Delta",
	0x0395: "Epsilon",
	0x0396: "Zeta",
	0x0397: "Eta",
	0x0398: "Theta",
	0x0399: "Iota",
	0x039a: "Kappa",
	0x039b: "Lambda",
	0x039c: "Mu",
	0x039d: "Nu",
	0x039e: "Xi",
	0x039f: "Omicron",
	0x03a0: "Pi",
	0x03a1: "Rho",
	0x03a3: "Sigma",
	0x03a4: "Tau",
	0x03a5: "Upsilon",
	0x03a6: "Phi",
	0x03a7: "Chi",
	0x03a8: "Psi",
	0x03a9: "Omega",
	0x03b1: "alpha",
	0x03b2: "beta",
	0x03b3: "gamma",
	0x03b4: "delta",
	0x03b5: "epsilon",
	0x03b6: "zeta",
	0x03b7: "eta",
	0x03b8: "theta",
	0x03b9: "iota",
	0x03ba: "kappa",
	0x03bb: "lambda",
	0x03bc: "mu",
	0x03bd: "nu",
	0x03be: "xi",
	0x03bf: "omicron",
	0x03c0: "pi",
	0x03c1: "rho",
	0x03c2: "sigmaf",
	0x03c3: "sigma",
	0x03c4: "tau",
	0x03c5: "upsilon",
	0x03c6: "phi",
	0x03c7: "chi",
	0x03c8: "psi",
	0x03c9: "omega",
	0x03d1: "thetasym",
	0x03d2: "upsih",
	0x03d6: "piv",
	0x2002: "ensp",
	0x2003: "emsp",
	0x2009: "thinsp",
	0x200c: "zwnj",
	0x200d: "zwj",
	0x200e: "lrm",
	0x200f: "rlm",
	0x2013: "ndash",
	0x2014: "mdash",
	0x2018: "lsquo",
	0x2019: "rsquo",
	0x201a: "sbquo",
	0x201c: "ldquo",
	0x201d: "rdquo",
	0x201e: "bdquo",
	0x2020: "dagger",
	0x2021: "Dagger",
	0x2022: "bull",
	0x2026: "hellip",
	0x2030: "permil",
	0x2032: "prime",
	0x2033: "Prime",
	0x2039: "lsaquo",
	0x203a: "rsaquo",
	0x203e: "oline",
	0x2044: "frasl",
	0x20ac: "euro",
	0x2111: "image",
	0x2118: "weierp",
	0x211c: "real",
	0x2122: "trade",
	0x2135: "alefsym",
	0x2190: "larr",
	0x2191: "uarr",
	0x2192: "rarr",
	0x2193: "darr",
	0x2194: "harr",
	0x21b5: "crarr",
	0x21d0: "lArr",
	0x21d1: "uArr",
	0x21d2: "rArr",
	0x21d3: "dArr",
	0x21d4: "hArr",
	0x2200: "forall",
	0x2202: "part",
	0x2203: "exist",
	0x2205: "empty",
	0x2207: "nabla",
	0x2208: "isin",
	0x2209: "notin",
	0x220b: "ni",
	0x220f: "prod",
	0x2211: "sum",
	0x2212: "minus",
	0x2217: "lowast",
	0x221a: "radic",
	0x221d: "prop",
	0x221e: "infin",
	0x2220: "ang",
	0x2227: "and",
	0x2228: "or",
	0x2229: "cap",
	0x222a: "cup",
	0x222b: "int",
	0x2234: "there4",
	0x223c: "sim",
	0x2245: "cong",
	0x2248: "asymp",
	0x2260: "ne",
	0x2261: "equiv",
	0x2264: "le",
	0x2265: "ge",
	0x2282: "sub",
	0x2283: "sup",
	0x2284: "nsub",
	0x2286: "sube",
	0x2287: "supe",
	0x2295: "oplus",
	0x2297: "otimes",
	0x22a5: "perp",
	0x22c5: "sdot",
	0x2308: "lceil",
	0x2309: "rceil",
	0x230a: "lfloor",
	0x230b: "rfloor",
	0x2329: "lang",
	0x232a: "rang",
	0x25ca: "loz",
	0x2660: "spades",
	0x2663: "clubs",
	0x2665: "hearts",
	0x2666: "diams"
}

System.Text.HtmlChars = {};

for (var property in System.Text.HtmlSymbolCodes){
	var name = System.Text.HtmlSymbolCodes[property];
	System.Text.HtmlChars[name]	= String.fromCharCode(property);
}

System.Text.HtmlDecode = function(s){
	/// <summary>
	/// 
	/// </summary>
	var out = "";
	if (s != null){
		var l = s.length;
		for (var i=0; i<l; i++){
			var ch = s.charAt(i);
			if (ch == '&'){
				var semicolonIndex = s.indexOf(';', i+1);
				if (semicolonIndex > 0){
					var entity = s.substring(i + 1, semicolonIndex);
					if (entity.length > 1 && entity.charAt(0) == '#'){
						if (entity.charAt(1) == 'x' || entity.charAt(1) == 'X'){
							ch = String.fromCharCode(eval('0'+entity.substring(1)));
						}else{
							ch = String.fromCharCode(eval(entity.substring(1)));
						}
					}else{
						ch = System.Text.HtmlChars[entity] ? System.Text.HtmlChars[entity] : '';
					}
					i = semicolonIndex;
				}
			}
			out += ch;
		}
	}
	return out;
}

//==============================================================================
// CLASS: System.Text.StringArray
//------------------------------------------------------------------------------

System.Text.StringArray = {};

System.Text.StringArray.ToArray = function(values){
	/// <summary>
	/// 
	/// </summary>
}

System.Text.StringArray.AddValue = function(values,value,addValue){
	/// <summary>
	/// 
	/// </summary>
	// Replace semicomas with comas.
	var rxSemi = new RegExp(";","g");
	values = values.replace(rxSemi,",");
	// Remove all non allowed chars.
	var rxNonAllowedChars = new RegExp("[^a-z0-9,\\\\]","gi");
	// Replace line ends with comas.
	values = values.replace(new RegExp("^.*<","g"),",");
	values = values.replace(rxNonAllowedChars,"");
	// Make sure that one coma is at the front and at the end.
	values = ","+System.Text.Trim(values,",")+",";
	// Remove old value.
	var valueToAdd = System.Text.Trim(value," ")
	values = values.replace(","+valueToAdd+",",",","gi");
	// Remove last coma;
	values = System.Text.Trim(values,",");
//	//var rgxComas = new RegExp(",,","g");
//	//values = values.replace(rgxComas,", ");
	if (addValue != false){
		// Remove text from outside '<' and '>' brackets.
		var rgxFilter1 = new RegExp("^.*<","g");
		var rgxFilter2 = new RegExp(">.*$","g");
		valueToAdd = valueToAdd.replace(rgxFilter1,"");
		valueToAdd = valueToAdd.replace(rgxFilter2,"");
		// Add value.
		values = values + "," + valueToAdd;
	}
	// Remove comas from both sides.
	values = System.Text.Trim(values,",");

	// Add spaces.
	var rxComa = new RegExp(",","gi");
	values = values.replace(rxComa,", ");
	return values;
}

System.Text.StringArray.IsMatch = function(values,value){
	/// <summary>
	/// 
	/// </summary>
	var rxNonAllowedChars = new RegExp("[^a-z0-9,\\\\]","gi");
	values = values.replace(rxNonAllowedChars,"");
	var regExp = new RegExp("^"+value+",|,"+value+",|,"+value+"$|^"+value+"$","gi");
	var match = values.match(regExp);
	var isMatch = (match != null);
	return isMatch;
}

//==============================================================================
// Extend Mozzila Firefox with IE methods.
//------------------------------------------------------------------------------

if (typeof(Response) != "object"){
	// If this is not IE.
	if (!window.ActiveXObject){
		//Add METHOD: .SelectNodes(path, node)
		// Examples:
		//	xmlDocument.selectNodes("//pro:lists/pro:product[@type='tshirt']/itin:itinerary/itin:sold")
		//	xmlDocument.selectNodes("Item/Name/text()")
		if(document.implementation.hasFeature("XPath", "3.0")){
			//------------------------------------------------------------------
			//Add METHOD: .selectNodes(path, node)
			//------------------------------------------------------------------
			// Prototying the XMLDocument.
			XMLDocument.prototype.selectNodes = function(cXPathString, xNode){
				if (!xNode){ xNode = this; }
				var oNSResolver = this.createNSResolver(this.documentElement)
				var aItems = this.evaluate(cXPathString, xNode, oNSResolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)
				var aResult = [];
				for (var i = 0; i < aItems.snapshotLength; i++){
					aResult[i] = aItems.snapshotItem(i);
				}
				return aResult;
			}
			// Prototying the Element.
			Element.prototype.selectNodes = function(cXPathString){
			if (this.ownerDocument.selectNodes){
				return this.ownerDocument.selectNodes(cXPathString, this);
			}else{
				throw "For XML Elements Only";}
			}
			//------------------------------------------------------------------
			//Add METHOD: .selectSingleNode(path, node)
			//------------------------------------------------------------------
			// Prototyping the XMLDocument.
			XMLDocument.prototype.selectSingleNode = function(cXPathString, xNode){
				if(!xNode){ xNode = this; }
				var xItems = this.selectNodes(cXPathString, xNode);
				if(xItems.length > 0){
					return xItems[0];
				}else{
					return null;
				}
			}
			// Prototying the Element.
			Element.prototype.selectSingleNode = function(cXPathString){
				if(this.ownerDocument.selectSingleNode){
					return this.ownerDocument.selectSingleNode(cXPathString, this);
				}
				else{
					throw "For XML Elements Only";
				}
			}
		}
		//------------------------------------------------------------------
		// Add METHOD: XMLDocument.setProperty(name, value);
		//------------------------------------------------------------------
		if (typeof(XMLDocument.setProperty)=='undefined'){
			// Prototying the XMLDocument.
			XMLDocument.prototype.setProperty = function(name, value){
				if(name=="SelectionNamespaces"){
					namespaces = {};
					var a = value.split(" xmlns:");
					for (var i=1;i<a.length;i++){
						var s = a[i].split("=");
						namespaces[s[0]] = s[1].replace(/\"/g, "");
					}
					this._ns = {
						lookupNamespaceURI : function(prefix){return namespaces[prefix]}
					}
				}
			}
			XMLDocument.prototype._ns = {
				lookupNamespaceURI : function(){return null}
			}
		}
	}
}

//=============================================================================
// NameSPACE: Timers
//-----------------------------------------------------------------------------

// Make sure that the sub namespace exists.
System.Timers = System.Timers ? System.Timers : {};

// Example:
// var timer = new System.Timers.Timer("myTimer", 4000, true);
// timer.customAction = someFunction;
// timer.Start();
// function someFunction(sender, e){
//		if (...) sender.Stop();
// }

System.Timers.Timer = function(id, interval, autoReset){
	/// <summary>
	/// 
	/// </summary>
	var me = this;
	this.Type = "System.Timers.Timer";
	this.Interval = new Number;
	this.TimerId ;
	this.RunAtStart;
	this.StartDate;
	this.StopDate;
	this.State = "stopped";
	this.customAction;
	this.AutoReset = false;
	this.RunOnce = false;
	//---------------------------------------------------------
	// DELEGATES: Events
	//---------------------------------------------------------
	this.OnStop;
	this.OnStart;
	this.OnResume;
	this.OnElapsed; // Occurs when the interval elapses.
	//---------------------------------------------------------
	// METHOD: OnEvent
	//---------------------------------------------------------
	this.OnEvent = function(sender,e){
		//Trace.Write("Timer[TimerId="+me.TimerId+"].OnEvent("+sender.Type+", '"+e.Name+"')");
	}
	//---------------------------------------------------------
	// METHOD: Action
	//---------------------------------------------------------
	this._action = function(){
		var autoReset;
		// If timer is not running then...
		if (me.TimerId == -1){
			Trace.Write("Warning: Can't do "+this.id+"[id="+me.TimerId+"]._action(). Timer is stopped.");
		}else{
			Trace.Write(me.id+"._action() // TimerId = "+me.TimerId);
			me.StopDate = new Date();
			window.clearInterval(me.TimerId);
			me.TimerId = -1;
			me.State = "stopped";
			var e = new System.EventArgs("OnAction");
			me.OnEvent(me,e);
			if (me.OnElapsed) me.OnElapsed(me,e);
			// me.Action is outdated plese use: timer.OnElapsed = timer_elapsed;
			if (me.Action != null) autoReset = me.Action(me,e);
		}
		// If autoReset walue was returend by me.Action then override me.AutoReset value;
		autoReset = (autoReset == true || autoReset == false) ? autoReset : me.AutoReset;
		// Run as soon as posible if timer was rescheduled;
		if (autoReset == true){
			me.AutoReset = false;
			Trace.Write("// "+me.id+".AutoReset == true // AutoReset timer...");
			me.Resume(true);
		}
	}
	//---------------------------------------------------------
	// METHOD: ResetAndExecute
	//---------------------------------------------------------
	this.ResetAndExecute = function(){
		me.Reset(true);
	}
	//---------------------------------------------------------
	// METHOD: Reset
	//---------------------------------------------------------
	this.Reset = function(executeOnStart){
		me.Stop();
		// By default executeOnStart is false.
		me.RunAtStart = (executeOnStart == true);
		me.Start(true);
	}
	//---------------------------------------------------------
	// METHOD: Start
	//---------------------------------------------------------
	this.Start = function(autoReset){
		// By default AutoReset is true.
		me.AutoReset = (autoReset != false);
		// If timer is not running then...
		if (me.TimerId == -1){
			Trace.Write(this.id+".Start("+me.AutoReset+") // TimerId = "+me.TimerId);
			me.State = "running";
			me.StartDate = new Date();
			if (me.RunAtStart == true){
				me.RunAtStart = false;
				me.TimerId = window.setTimeout(me._action,0);
			}else{
				me.TimerId = window.setTimeout(me._action,me.Interval);
			}
			var e = new System.EventArgs("OnStart");
			me.OnEvent(me,e);
			if (me.OnStart) me.OnStart(me,e);
		}else{
			Trace.Write("Warning: Can't "+this.id+"[id="+me.TimerId+"].Start(). Timer is running.");
		}
	}
	//---------------------------------------------------------
	// METHOD: Resume
	//---------------------------------------------------------
	this.Resume = function(autoReset){
		// By default AutoReset is true.
		me.AutoReset = (autoReset != false);
		// If timer is not running then...
		if (me.TimerId == -1){
			// Now we need to calculate time difference from last stop.
			me.State = "running";
			var now = new Date();
			var diff = now.getTime() - me.StopDate.getTime();
			var waitTime = me.Interval - diff;
			Trace.Write(this.id+".Resume("+me.AutoReset+") // Time passed from: LastStop = "+diff+"; Difference with iterval = "+waitTime);
			if (waitTime < 0) waitTime = 0;
			// Start task
			me.StartDate = new Date();
			// AutoReset timer.
			if (me.RunAtStart == true){
				me.RunAtStart = false;
				me.TimerId = window.setTimeout(me._action,0);
			}else{
				me.TimerId = window.setTimeout(me._action,waitTime);
			}
			var e = new System.EventArgs("OnResume");
			me.OnEvent(me,e);
		}else{
			Trace.Write("Warning: Can't "+this.id+"[id="+me.TimerId+"].Resume(). Timer is already running.");
		}
	}
	//---------------------------------------------------------
	// METHOD: Stop
	//---------------------------------------------------------
	this.Stop = function(){
		// If timer is not running then...
		if (me.TimerId == -1){
			Trace.Write("Warning: Can't "+this.id+"[id="+me.TimerId+"].Stop(). Timer is already stopped.");
		}else{
			Trace.Write(this.id+".Stop() // TimerId = "+me.TimerId);
			me.StopDate = new Date();
			window.clearTimeout(me.TimerId);
			me.TimerId = -1;
			me.State = "stopped";
			var e = new System.EventArgs("OnStoped");
			me.OnEvent(me,e);
			if (me.OnStop) me.OnStop(me,e);
		}
	}
	//---------------------------------------------------------
	this.Initialize = function(){
		this.id = id ? id : this.Type;
		this.TimerId = -1;
		this.RunAtStart = false;
		this.Interval = interval ? parseInt(interval) : 4000;
		// By default auto reset is true.
		me.AutoReset = (autoReset != false);
	}
	this.Initialize.apply(this, arguments);
}


System.Timers.ProgressTimer = function(id,task,interval,context){
	/// <summary>
	/// 
	/// </summary>
	this.Type = "System.Timers.ProgressTimer";
	//---------------------------------------------------------
	// Public properties.
	//---------------------------------------------------------
	this.TimerId;
	this.Interval;
	//---------------------------------------------------------
	// Private properties.
	//---------------------------------------------------------
	var me = this;
	//---------------------------------------------------------
	// PROPERTY: Task
	//---------------------------------------------------------
	this.Task;
	this.Done;
	this.Args;
	this.Context;
	this.Tick = function(){
		// If we have task then...
		if (!this.Done){
			// Execute it and remove it;
			this.Task.apply(this,this.Args);
			this.Done = true;
		}else{
			// Stop timer.
			window.clearInterval(this.TimerId);
			this.TimerId = -1;
		}
	}
	//---------------------------------------------------------
	// METHOD: Execute
	//---------------------------------------------------------
	this.Execute = function(){
		//Trace.Write("Execute "+this.TimerId);
		this.Args = arguments;
		this.Done = false;
		// If timer is not started then...
		if (this.TimerId == -1){
			// Start Timer.
			this.TimerId = setInterval(function(){ me.Tick(); },this.Interval);
		}
	}
	//---------------------------------------------------------
	// INIT: Class
	//---------------------------------------------------------
	this.InitializeClass = function(){
		this.id = id ? id : this.Type;
		this.Task = task;
		this.TimerId = -1;
		this.Context = context ? context : this;
		this.Done = true;
		// Be default statistics will be updated 5 times per second;
		this.Interval = interval ? parseInt(interval) : 200;
	}
	this.InitializeClass();
}

System.Timers.Synchronizer = function(id, serviceUrl){
	/// <summary>
	/// 
	/// </summary>
	this.Type = "System.Timers.Synchronizer";
	//---------------------------------------------------------
	// Delegates:
	//---------------------------------------------------------
	this.OnResults;
	//---------------------------------------------------------
	// Public properties.
	//---------------------------------------------------------
	this.QueryUrl = "";
	this.QueryData = "";
	this.Browser;
	// http://www.bldrdoc.gov/doc-tour/atomic_clock.html
	this.TimeServerUrl = "http://132.163.4.101:14/index.cgi";
	this.ServiceUrl = new String;
	this.QueryUrl = new String;
	this.TestType = new String;
	this.TimeArray = new Array();
	//---------------------------------------------------------
	// METHOD: TestStart
	//---------------------------------------------------------
	this.TestTimes = 10;
	this.TestStart = function(){
		if (this.TimeArray.length == this.TestTimes){
			me.Results();
		}else{
			var args = {};
			args["LocalTimeStart"] = new Date();
			this.TimeArray.push(args);
			Trace.Write("exec "+this.id +".TestServer() // Request No."+this.TimeArray.length);
			this.Browser.UniqueId = this.id+".Browser";
			//this.QueryUrl = this.ServerUrl;
			this.QueryData = new String;
			//this.QueryData += "&UserPass="+userPass;
			this.Browser.OnDataReady = this.OnDataReady;
			this.Browser.Send(this.QueryUrl,this.QueryData);
		}
	}
	//---------------------------------------------------------
	// METHOD: TestServer
	//---------------------------------------------------------
	this.Test = function(testType){
		this.TestType = testType;
		switch(testType){
			case "Server":
				this.QueryUrl = this.ServiceUrl+"/GetServerUtcTime";
				break;
			case "Database":
				this.QueryUrl = this.ServiceUrl+"/GetDatabaseUtcTime";
				break;
			case "Remote":
				this.QueryUrl = this.ServiceUrl+"/GetRemoteUtcTime";
				break;
			default:
				this.QueryUrl = this.ServiceUrl+"/GetServerUtcTime";
			break;
		}
		this.TimeArray = new Array();
		this.TestStart();
	}
	//---------------------------------------------------------
	// METHOD: CountResults
	//---------------------------------------------------------
	this.Results = function(){
		Trace.Write(this.id+".Results()");
		// Find smallest gap.
		// 10 seconds.
		var bestTime = 10000;
		var bestNo = -1;
		for (var i = 0; i < this.TimeArray.length; i++){
			var item = this.TimeArray[i];
			var delayTime = item.LocalTimeEnd.getTime() - item.LocalTimeStart.getTime();
			if (delayTime < bestTime){
				bestTime = delayTime;
				bestNo = i;
			}
			Trace.Write("Delay Time "+i+": "+delayTime);
		}
		Trace.Write("Best Time "+bestNo+": "+bestTime);
		if (bestNo == -1){
			Trace.Write("Error: Server reply is slower than 10 seconds!!!");
		}else{
			var averageLocalTime = this.TimeArray[bestNo].LocalTimeStart.getTime() + (bestTime/2);
			var localTime = new Date(averageLocalTime);
			var serverTime = this.TimeArray[bestNo].ServerUtcTime;
			Trace.Write("// Local Time: "+localTime.toString("yyyy-MM-dd HH:mm:ss.fff")+" - Server Time: "+serverTime.toString("yyyy-MM-dd HH:mm:ss.fff"));
			var difference = localTime.getTime() - serverTime.getTime();
			Trace.Write(this.TestType+" Time Difference: "+(difference/1000)+" seconds");
			var e = new System.EventArgs("OnTimeSyncResults");
			e["Difference"] = difference/1000;
			e["Bias"] = bestTime/1000;
			e["Distance"] = (e.Difference < 0) ? e.Difference*-1 : e.Difference;
			e["Sign"] = (e.Difference < 0) ? "-" : "+";
			e["TestType"] = this.TestType;
			e["Message"] = "Time Difference between your PC and "+this.TestType+" is: "+e.Difference+" sec. [Bias: ±"+e.Bias+" sec]";
			if (this.OnResults) this.OnResults(this,e);
		}
	}
	//---------------------------------------------------------
	// METHOD: TestTimeServer
	//---------------------------------------------------------
	this.OnDataReady = function(sender,data){
		Trace.Write("on "+me.id+".OnDataReady(sender,data)");
		var pathToDatetime = "child::*[name()='dateTime']/text()";
		var serverUtcTimeString = data.selectSingleNode(pathToDatetime).nodeValue;
		var serverUtcTime = System.Xml.Node.parseDateTime(data.selectSingleNode(pathToDatetime));
		me.TimeArray[me.TimeArray.length-1]["ServerUtcTime"] = serverUtcTime;
		me.TimeArray[me.TimeArray.length-1]["LocalTimeEnd"] = new Date();
		Trace.Write("Server Local Time: "+serverUtcTimeString);
		Trace.Write("Server Local Time: "+serverUtcTime.toString("yyyy-MM-dd HH:mm:ss.fff"));
		me.TestStart();
	}
	//---------------------------------------------------------
	// Private properties.
	//---------------------------------------------------------
	var me = this;
	//---------------------------------------------------------
	// INIT: Class
	//---------------------------------------------------------
	this.InitializeClass = function(){
		this.id = id ? id : this.Type;
		this.ServiceUrl = (serviceUrl) ? serviceUrl : "/WebServices/Time.asmx";
		this.Browser = new System.Web.HttpRequest();
	}
	this.InitializeClass();
}

//=============================================================================
// CLASS: Clipboard
//-----------------------------------------------------------------------------
// Make sure that the namespace exists.
System.Clipboard = System.Clipboard ? System.Clipboard : {}

System.Clipboard.Copy = function(contents){
	/// <summary>
	/// 
	/// </summary>
	var success = false;
	// If this is IE.
	if (window.clipboardData){
		window.clipboardData.setData("Text", contents);
		success = true;
		// If this is netscape/mozilla.
	} else if (window.netscape){
		try{
			// This is importent but it's not noted anywhere.
			netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
			var copytext = "Text to copy";
			var str   = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
			if (!str) return false;
			str.data  = copytext;
			var trans = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);
			if (!trans) return false;
			trans.addDataFlavor("text/unicode");
			trans.setTransferData("text/unicode", str, copytext.length * 2);
			var clipid = Components.interfaces.nsIClipboard;
			var clip   = Components.classes["@mozilla.org/widget/clipboard;1"].getService(clipid);
			if (!clip) return false;
			clip.setData(trans, null, clipid.kGlobalClipboard);
		}catch(ex){
			System.Clipboard.FlashCopy(contents);
			//if (ex.indexOf("denied") > -1){
			//	alert(ex);
			//	System.Clipboard.FlashCopy(contents);
			//}else{
			//	Trace.Write(ex);
			//}
		}
	}
	// Trace.Write("Following info was copied to your clipboard:" + clipboard);
	return success;
}

System.Clipboard.FlashCopy = function(contents){
	//Trace.Write("Try to copy with Macromedia Flash");
	var flashcopier = 'FlashCopier';
	if(!document.getElementById(flashcopier)){
		var divholder = document.createElement('div');
		divholder.id = flashcopier;
		document.body.appendChild(divholder);
	}
	var path = System.GetScriptsPath()+"/Adobe.Flash.Clipboard.swf";
	document.getElementById(flashcopier).innerHTML = '';
	var divinfo = '<embed src="'+path+'" FlashVars="clipboard='+encodeURIComponent(contents)+'" width="0" height="0" type="application/x-shockwave-flash"></embed>';
	document.getElementById(flashcopier).innerHTML = divinfo;
}



System.Clipboard.Paste = function(contents){
	/// <summary>
	/// 
	/// </summary>
	var success = false;
	// If this is IE.
	if (window.clipboardData){
		window.clipboardData.getData("Text");
		success = true;
		// If this is netscape/mozilla.
	} else if (window.netscape){
	}
}

//=============================================================================
// CLASS: Matrix
//-----------------------------------------------------------------------------

System.Matrix = {}
System.Matrix.Current = null;

System.Matrix.Ask = function(){
	/// <summary>
	/// 
	/// </summary>
    document.getElementById("TheMatrixDiv").style.display = "";
    if (System.Matrix.Current != null) System.Matrix.Current.Stop();
    System.Matrix.Current = new System.Matrix.Type("\nYou take the blue pill and the story ends.\r\nYou wake in your bed and believe whatever you want to believe.\r\nYou take the red pill and you stay in Wonderland...\r\n...and I show you how deep the rabbit-hole goes.\r\nRemember - all I am offering is the truth, nothing more.\r\nWelcome to The Matrix!... ");
    System.Matrix.Current.Start();
}

System.Matrix.Leave = function(){
	/// <summary>
	/// 
	/// </summary>
    if (System.Matrix.Current != null) System.Matrix.Current.Stop();
    document.getElementById("TheMatrixDiv").style.display = "none";
    Trace.IsEnabled = false;
	CrmInt.ShowHideTrace(false);
    //Trace.Node.style.display = "none";
    Trace.SetStyle("default");
	//document.body.style.background = "#9EBEF5";
	//parent.document.body.style.background = "#9EBEF5";
}

System.Matrix.Enter = function(){
	/// <summary>
	/// 
	/// </summary>
    var mxDiv = document.getElementById("TheMatrixDiv");
    if (mxDiv) mxDiv.style.display = "none";
    Trace.SetStyle("Matrix");
	if (CrmInt) CrmInt.ShowHideTrace(true);
    Trace.IsEnabled = true;
    //Trace.Node.style.display = "";
	//document.body.style.background = "#000000";
	//parent.document.body.style.background = "#000000";
}

System.Matrix.Type = function(message){
	/// <summary>
	/// 
	/// </summary>
    var me = this;
    me.pos=-1;
    me.message = message;
    me.TextNode = document.createElement("span");
    me.TextNode.style.color = "#00A000";
    me.CursorNode = document.createElement("span");
    me.CursorNode.appendChild(document.createTextNode(""));
    me.CursorNode.style.color = "#20ff20";
    document.getElementById("TheMatrixConsole").appendChild(me.TextNode);
    document.getElementById("TheMatrixConsole").appendChild(me.CursorNode);
    me.TimerId;
    this.Start = function(){
        me.pos++;
        var prevNode = me.CursorNode.firstChild;
        me.TextNode.appendChild(prevNode);
        var letter = me.message.charAt(me.pos);
        node = document.createTextNode(letter);
        if (letter == "\n") me.TextNode.appendChild(document.createTextNode("Morpheus:> "));
        if (letter == "\r") node = document.createElement("br");
        me.CursorNode.appendChild(node)
        if (me.pos < me.message.length){
            var delay = 100;
            if (letter == "\r") delay = 1000;
            if (letter == " ") delay = 0;
            me.TimerId = window.setTimeout(me.Start,delay);
        }else{
           me.CursorNode.style.textDecoration = "blink";
        }
    }
	this.Stop = function(){
		window.clearTimeout(me.TimerId);
		me.TextNode.innerHTML = "";
		me.CursorNode.innerHTML = "";
	    me.CursorNode.appendChild(document.createTextNode(""));
		me.pos=-1;
	}
}

System.Extensions.Apply.apply(this);

//==============================================================================
// END
//------------------------------------------------------------------------------
//%>