function createCommonjsModule(t,e){return t(e={exports:{}},e.exports),e.exports}var _global=createCommonjsModule(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e);}),_core=createCommonjsModule(function(t){var e=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e);}),_core_1=_core.version,_isObject=function(t){return "object"==typeof t?null!==t:"function"==typeof t},_anObject=function(t){if(!_isObject(t))throw TypeError(t+" is not an object!");return t},_fails=function(t){try{return !!t()}catch(t){return !0}},_descriptors=!_fails(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),document$1=_global.document,is=_isObject(document$1)&&_isObject(document$1.createElement),_domCreate=function(t){return is?document$1.createElement(t):{}},_ie8DomDefine=!_descriptors&&!_fails(function(){return 7!=Object.defineProperty(_domCreate("div"),"a",{get:function(){return 7}}).a}),_toPrimitive=function(t,e){if(!_isObject(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!_isObject(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!_isObject(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!_isObject(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},dP=Object.defineProperty,f=_descriptors?Object.defineProperty:function(t,e,n){if(_anObject(t),e=_toPrimitive(e,!0),_anObject(n),_ie8DomDefine)try{return dP(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return "value"in n&&(t[e]=n.value),t},_objectDp={f:f},_propertyDesc=function(t,e){return {enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},_hide=_descriptors?function(t,e,n){return _objectDp.f(t,e,_propertyDesc(1,n))}:function(t,e,n){return t[e]=n,t},hasOwnProperty={}.hasOwnProperty,_has=function(t,e){return hasOwnProperty.call(t,e)},id=0,px=Math.random(),_uid=function(t){return "Symbol(".concat(void 0===t?"":t,")_",(++id+px).toString(36))},_redefine=createCommonjsModule(function(t){var e=_uid("src"),n=Function.toString,r=(""+n).split("toString");_core.inspectSource=function(t){return n.call(t)},(t.exports=function(t,n,o,i){var a="function"==typeof o;a&&(_has(o,"name")||_hide(o,"name",n)),t[n]!==o&&(a&&(_has(o,e)||_hide(o,e,t[n]?""+t[n]:r.join(String(n)))),t===_global?t[n]=o:i?t[n]?t[n]=o:_hide(t,n,o):(delete t[n],_hide(t,n,o)));})(Function.prototype,"toString",function(){return "function"==typeof this&&this[e]||n.call(this)});}),_aFunction=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t},_ctx=function(t,e,n){if(_aFunction(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},PROTOTYPE="prototype",$export=function(t,e,n){var r,o,i,a,s=t&$export.F,c=t&$export.G,u=t&$export.S,l=t&$export.P,f=t&$export.B,p=c?_global:u?_global[e]||(_global[e]={}):(_global[e]||{})[PROTOTYPE],_=c?_core:_core[e]||(_core[e]={}),h=_[PROTOTYPE]||(_[PROTOTYPE]={});for(r in c&&(n=e),n)i=((o=!s&&p&&void 0!==p[r])?p:n)[r],a=f&&o?_ctx(i,_global):l&&"function"==typeof i?_ctx(Function.call,i):i,p&&_redefine(p,r,i,t&$export.U),_[r]!=i&&_hide(_,r,a),l&&h[r]!=i&&(h[r]=i);};_global.core=_core,$export.F=1,$export.G=2,$export.S=4,$export.P=8,$export.B=16,$export.W=32,$export.U=64,$export.R=128;var _export=$export,_defined=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},_toObject=function(t){return Object(_defined(t))},ceil=Math.ceil,floor=Math.floor,_toInteger=function(t){return isNaN(t=+t)?0:(t>0?floor:ceil)(t)},max=Math.max,min=Math.min,_toAbsoluteIndex=function(t,e){return (t=_toInteger(t))<0?max(t+e,0):min(t,e)},min$1=Math.min,_toLength=function(t){return t>0?min$1(_toInteger(t),9007199254740991):0},_arrayCopyWithin=[].copyWithin||function(t,e){var n=_toObject(this),r=_toLength(n.length),o=_toAbsoluteIndex(t,r),i=_toAbsoluteIndex(e,r),a=arguments.length>2?arguments[2]:void 0,s=Math.min((void 0===a?r:_toAbsoluteIndex(a,r))-i,r-o),c=1;for(i<o&&o<i+s&&(c=-1,i+=s-1,o+=s-1);s-- >0;)i in n?n[o]=n[i]:delete n[o],o+=c,i+=c;return n},_library=!1,_shared=createCommonjsModule(function(t){var e=_global["__core-js_shared__"]||(_global["__core-js_shared__"]={});(t.exports=function(t,n){return e[t]||(e[t]=void 0!==n?n:{})})("versions",[]).push({version:_core.version,mode:"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"});}),_wks=createCommonjsModule(function(t){var e=_shared("wks"),n=_global.Symbol,r="function"==typeof n;(t.exports=function(t){return e[t]||(e[t]=r&&n[t]||(r?n:_uid)("Symbol."+t))}).store=e;}),UNSCOPABLES=_wks("unscopables"),ArrayProto=Array.prototype;null==ArrayProto[UNSCOPABLES]&&_hide(ArrayProto,UNSCOPABLES,{});var _addToUnscopables=function(t){ArrayProto[UNSCOPABLES][t]=!0;};_export(_export.P,"Array",{copyWithin:_arrayCopyWithin}),_addToUnscopables("copyWithin");var _arrayFill=function(t){for(var e=_toObject(this),n=_toLength(e.length),r=arguments.length,o=_toAbsoluteIndex(r>1?arguments[1]:void 0,n),i=r>2?arguments[2]:void 0,a=void 0===i?n:_toAbsoluteIndex(i,n);a>o;)e[o++]=t;return e};_export(_export.P,"Array",{fill:_arrayFill}),_addToUnscopables("fill");var toString={}.toString,_cof=function(t){return toString.call(t).slice(8,-1)},_iobject=Object("z").propertyIsEnumerable(0)?Object:function(t){return "String"==_cof(t)?t.split(""):Object(t)},_isArray=Array.isArray||function(t){return "Array"==_cof(t)},SPECIES=_wks("species"),_arraySpeciesConstructor=function(t){var e;return _isArray(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!_isArray(e.prototype)||(e=void 0),_isObject(e)&&null===(e=e[SPECIES])&&(e=void 0)),void 0===e?Array:e},_arraySpeciesCreate=function(t,e){return new(_arraySpeciesConstructor(t))(e)},_arrayMethods=function(t,e){var n=1==t,r=2==t,o=3==t,i=4==t,a=6==t,s=5==t||a,c=e||_arraySpeciesCreate;return function(e,u,l){for(var f,p,_=_toObject(e),h=_iobject(_),d=_ctx(u,l,3),g=_toLength(h.length),y=0,v=n?c(e,g):r?c(e,0):void 0;g>y;y++)if((s||y in h)&&(p=d(f=h[y],y,_),t))if(n)v[y]=p;else if(p)switch(t){case 3:return !0;case 5:return f;case 6:return y;case 2:v.push(f);}else if(i)return !1;return a?-1:o||i?i:v}},$find=_arrayMethods(5),KEY="find",forced=!0;KEY in[]&&Array(1)[KEY](function(){forced=!1;}),_export(_export.P+_export.F*forced,"Array",{find:function(t){return $find(this,t,arguments.length>1?arguments[1]:void 0)}}),_addToUnscopables(KEY);var $find$1=_arrayMethods(6),KEY$1="findIndex",forced$1=!0;KEY$1 in[]&&Array(1)[KEY$1](function(){forced$1=!1;}),_export(_export.P+_export.F*forced$1,"Array",{findIndex:function(t){return $find$1(this,t,arguments.length>1?arguments[1]:void 0)}}),_addToUnscopables(KEY$1);var _iterCall=function(t,e,n,r){try{return r?e(_anObject(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&_anObject(o.call(t)),e}},_iterators={},ITERATOR=_wks("iterator"),ArrayProto$1=Array.prototype,_isArrayIter=function(t){return void 0!==t&&(_iterators.Array===t||ArrayProto$1[ITERATOR]===t)},_createProperty=function(t,e,n){e in t?_objectDp.f(t,e,_propertyDesc(0,n)):t[e]=n;},TAG=_wks("toStringTag"),ARG="Arguments"==_cof(function(){return arguments}()),tryGet=function(t,e){try{return t[e]}catch(t){}},_classof=function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=tryGet(e=Object(t),TAG))?n:ARG?_cof(e):"Object"==(r=_cof(e))&&"function"==typeof e.callee?"Arguments":r},ITERATOR$1=_wks("iterator"),core_getIteratorMethod=_core.getIteratorMethod=function(t){if(null!=t)return t[ITERATOR$1]||t["@@iterator"]||_iterators[_classof(t)]},ITERATOR$2=_wks("iterator"),SAFE_CLOSING=!1;try{var riter=[7][ITERATOR$2]();riter.return=function(){SAFE_CLOSING=!0;};}catch(t){}var _iterDetect=function(t,e){if(!e&&!SAFE_CLOSING)return !1;var n=!1;try{var r=[7],o=r[ITERATOR$2]();o.next=function(){return {done:n=!0}},r[ITERATOR$2]=function(){return o},t(r);}catch(t){}return n};_export(_export.S+_export.F*!_iterDetect(function(t){}),"Array",{from:function(t){var e,n,r,o,i=_toObject(t),a="function"==typeof this?this:Array,s=arguments.length,c=s>1?arguments[1]:void 0,u=void 0!==c,l=0,f=core_getIteratorMethod(i);if(u&&(c=_ctx(c,s>2?arguments[2]:void 0,2)),null==f||a==Array&&_isArrayIter(f))for(n=new a(e=_toLength(i.length));e>l;l++)_createProperty(n,l,u?c(i[l],l):i[l]);else for(o=f.call(i),n=new a;!(r=o.next()).done;l++)_createProperty(n,l,u?_iterCall(o,c,[r.value,l],!0):r.value);return n.length=l,n}});var _toIobject=function(t){return _iobject(_defined(t))},_arrayIncludes=function(t){return function(e,n,r){var o,i=_toIobject(e),a=_toLength(i.length),s=_toAbsoluteIndex(r,a);if(t&&n!=n){for(;a>s;)if((o=i[s++])!=o)return !0}else for(;a>s;s++)if((t||s in i)&&i[s]===n)return t||s||0;return !t&&-1}},$includes=_arrayIncludes(!0);_export(_export.P,"Array",{includes:function(t){return $includes(this,t,arguments.length>1?arguments[1]:void 0)}}),_addToUnscopables("includes");var _iterStep=function(t,e){return {value:e,done:!!t}},shared=_shared("keys"),_sharedKey=function(t){return shared[t]||(shared[t]=_uid(t))},arrayIndexOf=_arrayIncludes(!1),IE_PROTO=_sharedKey("IE_PROTO"),_objectKeysInternal=function(t,e){var n,r=_toIobject(t),o=0,i=[];for(n in r)n!=IE_PROTO&&_has(r,n)&&i.push(n);for(;e.length>o;)_has(r,n=e[o++])&&(~arrayIndexOf(i,n)||i.push(n));return i},_enumBugKeys="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),_objectKeys=Object.keys||function(t){return _objectKeysInternal(t,_enumBugKeys)},_objectDps=_descriptors?Object.defineProperties:function(t,e){_anObject(t);for(var n,r=_objectKeys(e),o=r.length,i=0;o>i;)_objectDp.f(t,n=r[i++],e[n]);return t},document$2=_global.document,_html=document$2&&document$2.documentElement,IE_PROTO$1=_sharedKey("IE_PROTO"),Empty=function(){},PROTOTYPE$1="prototype",createDict=function(){var t,e=_domCreate("iframe"),n=_enumBugKeys.length;for(e.style.display="none",_html.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),createDict=t.F;n--;)delete createDict[PROTOTYPE$1][_enumBugKeys[n]];return createDict()},_objectCreate=Object.create||function(t,e){var n;return null!==t?(Empty[PROTOTYPE$1]=_anObject(t),n=new Empty,Empty[PROTOTYPE$1]=null,n[IE_PROTO$1]=t):n=createDict(),void 0===e?n:_objectDps(n,e)},def=_objectDp.f,TAG$1=_wks("toStringTag"),_setToStringTag=function(t,e,n){t&&!_has(t=n?t:t.prototype,TAG$1)&&def(t,TAG$1,{configurable:!0,value:e});},IteratorPrototype={};_hide(IteratorPrototype,_wks("iterator"),function(){return this});var _iterCreate=function(t,e,n){t.prototype=_objectCreate(IteratorPrototype,{next:_propertyDesc(1,n)}),_setToStringTag(t,e+" Iterator");},IE_PROTO$2=_sharedKey("IE_PROTO"),ObjectProto=Object.prototype,_objectGpo=Object.getPrototypeOf||function(t){return t=_toObject(t),_has(t,IE_PROTO$2)?t[IE_PROTO$2]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?ObjectProto:null},ITERATOR$3=_wks("iterator"),BUGGY=!([].keys&&"next"in[].keys()),FF_ITERATOR="@@iterator",KEYS="keys",VALUES="values",returnThis=function(){return this},_iterDefine=function(t,e,n,r,o,i,a){_iterCreate(n,e,r);var s,c,u,l=function(t){if(!BUGGY&&t in h)return h[t];switch(t){case KEYS:case VALUES:return function(){return new n(this,t)}}return function(){return new n(this,t)}},f=e+" Iterator",p=o==VALUES,_=!1,h=t.prototype,d=h[ITERATOR$3]||h[FF_ITERATOR]||o&&h[o],g=d||l(o),y=o?p?l("entries"):g:void 0,v="Array"==e&&h.entries||d;if(v&&(u=_objectGpo(v.call(new t)))!==Object.prototype&&u.next&&(_setToStringTag(u,f,!0),"function"==typeof u[ITERATOR$3]||_hide(u,ITERATOR$3,returnThis)),p&&d&&d.name!==VALUES&&(_=!0,g=function(){return d.call(this)}),!BUGGY&&!_&&h[ITERATOR$3]||_hide(h,ITERATOR$3,g),_iterators[e]=g,_iterators[f]=returnThis,o)if(s={values:p?g:l(VALUES),keys:i?g:l(KEYS),entries:y},a)for(c in s)c in h||_redefine(h,c,s[c]);else _export(_export.P+_export.F*(BUGGY||_),e,s);return s},es6_array_iterator=_iterDefine(Array,"Array",function(t,e){this._t=_toIobject(t),this._i=0,this._k=e;},function(){var t=this._t,e=this._k,n=this._i++;return !t||n>=t.length?(this._t=void 0,_iterStep(1)):_iterStep(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values");_iterators.Arguments=_iterators.Array,_addToUnscopables("keys"),_addToUnscopables("values"),_addToUnscopables("entries"),_export(_export.S+_export.F*_fails(function(){function t(){}return !(Array.of.call(t)instanceof t)}),"Array",{of:function(){for(var t=0,e=arguments.length,n=new("function"==typeof this?this:Array)(e);e>t;)_createProperty(n,t,arguments[t++]);return n.length=e,n}});var SPECIES$1=_wks("species"),_setSpecies=function(t){var e=_global[t];_descriptors&&e&&!e[SPECIES$1]&&_objectDp.f(e,SPECIES$1,{configurable:!0,get:function(){return this}});};_setSpecies("Array");var NUMBER="number",_dateToPrimitive=function(t){if("string"!==t&&t!==NUMBER&&"default"!==t)throw TypeError("Incorrect hint");return _toPrimitive(_anObject(this),t!=NUMBER)},TO_PRIMITIVE=_wks("toPrimitive"),proto=Date.prototype;TO_PRIMITIVE in proto||_hide(proto,TO_PRIMITIVE,_dateToPrimitive);var HAS_INSTANCE=_wks("hasInstance"),FunctionProto=Function.prototype;HAS_INSTANCE in FunctionProto||_objectDp.f(FunctionProto,HAS_INSTANCE,{value:function(t){if("function"!=typeof this||!_isObject(t))return !1;if(!_isObject(this.prototype))return t instanceof this;for(;t=_objectGpo(t);)if(this.prototype===t)return !0;return !1}});var dP$1=_objectDp.f,FProto=Function.prototype,nameRE=/^\s*function ([^ (]*)/,NAME="name";NAME in FProto||_descriptors&&dP$1(FProto,NAME,{configurable:!0,get:function(){try{return (""+this).match(nameRE)[1]}catch(t){return ""}}});var _redefineAll=function(t,e,n){for(var r in e)_redefine(t,r,e[r],n);return t},_anInstance=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t},_forOf=createCommonjsModule(function(t){var e={},n={},r=t.exports=function(t,r,o,i,a){var s,c,u,l,f=a?function(){return t}:core_getIteratorMethod(t),p=_ctx(o,i,r?2:1),_=0;if("function"!=typeof f)throw TypeError(t+" is not iterable!");if(_isArrayIter(f)){for(s=_toLength(t.length);s>_;_++)if((l=r?p(_anObject(c=t[_])[0],c[1]):p(t[_]))===e||l===n)return l}else for(u=f.call(t);!(c=u.next()).done;)if((l=_iterCall(u,p,c.value,r))===e||l===n)return l};r.BREAK=e,r.RETURN=n;}),_meta=createCommonjsModule(function(t){var e=_uid("meta"),n=_objectDp.f,r=0,o=Object.isExtensible||function(){return !0},i=!_fails(function(){return o(Object.preventExtensions({}))}),a=function(t){n(t,e,{value:{i:"O"+ ++r,w:{}}});},s=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!_isObject(t))return "symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!_has(t,e)){if(!o(t))return "F";if(!n)return "E";a(t);}return t[e].i},getWeak:function(t,n){if(!_has(t,e)){if(!o(t))return !0;if(!n)return !1;a(t);}return t[e].w},onFreeze:function(t){return i&&s.NEED&&o(t)&&!_has(t,e)&&a(t),t}};}),_meta_1=_meta.KEY,_meta_2=_meta.NEED,_meta_3=_meta.fastKey,_meta_4=_meta.getWeak,_meta_5=_meta.onFreeze,_validateCollection=function(t,e){if(!_isObject(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t},dP$2=_objectDp.f,fastKey=_meta.fastKey,SIZE=_descriptors?"_s":"size",getEntry=function(t,e){var n,r=fastKey(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n},_collectionStrong={getConstructor:function(t,e,n,r){var o=t(function(t,i){_anInstance(t,o,e,"_i"),t._t=e,t._i=_objectCreate(null),t._f=void 0,t._l=void 0,t[SIZE]=0,null!=i&&_forOf(i,n,t[r],t);});return _redefineAll(o.prototype,{clear:function(){for(var t=_validateCollection(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[SIZE]=0;},delete:function(t){var n=_validateCollection(this,e),r=getEntry(n,t);if(r){var o=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),n._f==r&&(n._f=o),n._l==r&&(n._l=i),n[SIZE]--;}return !!r},forEach:function(t){_validateCollection(this,e);for(var n,r=_ctx(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p;},has:function(t){return !!getEntry(_validateCollection(this,e),t)}}),_descriptors&&dP$2(o.prototype,"size",{get:function(){return _validateCollection(this,e)[SIZE]}}),o},def:function(t,e,n){var r,o,i=getEntry(t,e);return i?i.v=n:(t._l=i={i:o=fastKey(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[SIZE]++,"F"!==o&&(t._i[o]=i)),t},getEntry:getEntry,setStrong:function(t,e,n){_iterDefine(t,e,function(t,n){this._t=_validateCollection(t,e),this._k=n,this._l=void 0;},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?_iterStep(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,_iterStep(1))},n?"entries":"values",!n,!0),_setSpecies(e);}},f$1={}.propertyIsEnumerable,_objectPie={f:f$1},gOPD=Object.getOwnPropertyDescriptor,f$2=_descriptors?gOPD:function(t,e){if(t=_toIobject(t),e=_toPrimitive(e,!0),_ie8DomDefine)try{return gOPD(t,e)}catch(t){}if(_has(t,e))return _propertyDesc(!_objectPie.f.call(t,e),t[e])},_objectGopd={f:f$2},check=function(t,e){if(_anObject(t),!_isObject(e)&&null!==e)throw TypeError(e+": can't set as prototype!")},_setProto={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{(n=_ctx(Function.call,_objectGopd.f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array);}catch(t){e=!0;}return function(t,r){return check(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:check},setPrototypeOf=_setProto.set,_inheritIfRequired=function(t,e,n){var r,o=e.constructor;return o!==n&&"function"==typeof o&&(r=o.prototype)!==n.prototype&&_isObject(r)&&setPrototypeOf&&setPrototypeOf(t,r),t},_collection=function(t,e,n,r,o,i){var a=_global[t],s=a,c=o?"set":"add",u=s&&s.prototype,l={},f=function(t){var e=u[t];_redefine(u,t,"delete"==t?function(t){return !(i&&!_isObject(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return !(i&&!_isObject(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return i&&!_isObject(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this});};if("function"==typeof s&&(i||u.forEach&&!_fails(function(){(new s).entries().next();}))){var p=new s,_=p[c](i?{}:-0,1)!=p,h=_fails(function(){p.has(1);}),d=_iterDetect(function(t){new s(t);}),g=!i&&_fails(function(){for(var t=new s,e=5;e--;)t[c](e,e);return !t.has(-0)});d||((s=e(function(e,n){_anInstance(e,s,t);var r=_inheritIfRequired(new a,e,s);return null!=n&&_forOf(n,o,r[c],r),r})).prototype=u,u.constructor=s),(h||g)&&(f("delete"),f("has"),o&&f("get")),(g||_)&&f(c),i&&u.clear&&delete u.clear;}else s=r.getConstructor(e,t,o,c),_redefineAll(s.prototype,n),_meta.NEED=!0;return _setToStringTag(s,t),l[t]=s,_export(_export.G+_export.W+_export.F*(s!=a),l),i||r.setStrong(s,t,o),s},MAP="Map",es6_map=_collection(MAP,function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=_collectionStrong.getEntry(_validateCollection(this,MAP),t);return e&&e.v},set:function(t,e){return _collectionStrong.def(_validateCollection(this,MAP),0===t?0:t,e)}},_collectionStrong,!0),_mathLog1p=Math.log1p||function(t){return (t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)},sqrt=Math.sqrt,$acosh=Math.acosh;_export(_export.S+_export.F*!($acosh&&710==Math.floor($acosh(Number.MAX_VALUE))&&$acosh(1/0)==1/0),"Math",{acosh:function(t){return (t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:_mathLog1p(t-1+sqrt(t-1)*sqrt(t+1))}});var $asinh=Math.asinh;function asinh(t){return isFinite(t=+t)&&0!=t?t<0?-asinh(-t):Math.log(t+Math.sqrt(t*t+1)):t}_export(_export.S+_export.F*!($asinh&&1/$asinh(0)>0),"Math",{asinh:asinh});var $atanh=Math.atanh;_export(_export.S+_export.F*!($atanh&&1/$atanh(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}});var _mathSign=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1};_export(_export.S,"Math",{cbrt:function(t){return _mathSign(t=+t)*Math.pow(Math.abs(t),1/3)}}),_export(_export.S,"Math",{clz32:function(t){return (t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}});var exp=Math.exp;_export(_export.S,"Math",{cosh:function(t){return (exp(t=+t)+exp(-t))/2}});var $expm1=Math.expm1,_mathExpm1=!$expm1||$expm1(10)>22025.465794806718||$expm1(10)<22025.465794806718||-2e-17!=$expm1(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:$expm1;_export(_export.S+_export.F*(_mathExpm1!=Math.expm1),"Math",{expm1:_mathExpm1});var pow=Math.pow,EPSILON=pow(2,-52),EPSILON32=pow(2,-23),MAX32=pow(2,127)*(2-EPSILON32),MIN32=pow(2,-126),roundTiesToEven=function(t){return t+1/EPSILON-1/EPSILON},_mathFround=Math.fround||function(t){var e,n,r=Math.abs(t),o=_mathSign(t);return r<MIN32?o*roundTiesToEven(r/MIN32/EPSILON32)*MIN32*EPSILON32:(n=(e=(1+EPSILON32/EPSILON)*r)-(e-r))>MAX32||n!=n?o*(1/0):o*n};_export(_export.S,"Math",{fround:_mathFround});var abs=Math.abs;_export(_export.S,"Math",{hypot:function(t,e){for(var n,r,o=0,i=0,a=arguments.length,s=0;i<a;)s<(n=abs(arguments[i++]))?(o=o*(r=s/n)*r+1,s=n):o+=n>0?(r=n/s)*r:n;return s===1/0?1/0:s*Math.sqrt(o)}});var $imul=Math.imul;_export(_export.S+_export.F*_fails(function(){return -5!=$imul(4294967295,5)||2!=$imul.length}),"Math",{imul:function(t,e){var n=+t,r=+e,o=65535&n,i=65535&r;return 0|o*i+((65535&n>>>16)*i+o*(65535&r>>>16)<<16>>>0)}}),_export(_export.S,"Math",{log1p:_mathLog1p}),_export(_export.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}}),_export(_export.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}}),_export(_export.S,"Math",{sign:_mathSign});var exp$1=Math.exp;_export(_export.S+_export.F*_fails(function(){return -2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(_mathExpm1(t)-_mathExpm1(-t))/2:(exp$1(t-1)-exp$1(-t-1))*(Math.E/2)}});var exp$2=Math.exp;_export(_export.S,"Math",{tanh:function(t){var e=_mathExpm1(t=+t),n=_mathExpm1(-t);return e==1/0?1:n==1/0?-1:(e-n)/(exp$2(t)+exp$2(-t))}}),_export(_export.S,"Math",{trunc:function(t){return (t>0?Math.floor:Math.ceil)(t)}});var hiddenKeys=_enumBugKeys.concat("length","prototype"),f$3=Object.getOwnPropertyNames||function(t){return _objectKeysInternal(t,hiddenKeys)},_objectGopn={f:f$3},_stringWs="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",space="["+_stringWs+"]",non="​",ltrim=RegExp("^"+space+space+"*"),rtrim=RegExp(space+space+"*$"),exporter=function(t,e,n){var r={},o=_fails(function(){return !!_stringWs[t]()||non[t]()!=non}),i=r[t]=o?e(trim):_stringWs[t];n&&(r[n]=i),_export(_export.P+_export.F*o,"String",r);},trim=exporter.trim=function(t,e){return t=String(_defined(t)),1&e&&(t=t.replace(ltrim,"")),2&e&&(t=t.replace(rtrim,"")),t},_stringTrim=exporter,gOPN=_objectGopn.f,gOPD$1=_objectGopd.f,dP$3=_objectDp.f,$trim=_stringTrim.trim,NUMBER$1="Number",$Number=_global[NUMBER$1],Base=$Number,proto$1=$Number.prototype,BROKEN_COF=_cof(_objectCreate(proto$1))==NUMBER$1,TRIM="trim"in String.prototype,toNumber=function(t){var e=_toPrimitive(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,i=(e=TRIM?e.trim():$trim(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return +e}for(var a,s=e.slice(2),c=0,u=s.length;c<u;c++)if((a=s.charCodeAt(c))<48||a>o)return NaN;return parseInt(s,r)}}return +e};if(!$Number(" 0o1")||!$Number("0b1")||$Number("+0x1")){$Number=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof $Number&&(BROKEN_COF?_fails(function(){proto$1.valueOf.call(n);}):_cof(n)!=NUMBER$1)?_inheritIfRequired(new Base(toNumber(e)),n,$Number):toNumber(e)};for(var key,keys=_descriptors?gOPN(Base):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;keys.length>j;j++)_has(Base,key=keys[j])&&!_has($Number,key)&&dP$3($Number,key,gOPD$1(Base,key));$Number.prototype=proto$1,proto$1.constructor=$Number,_redefine(_global,NUMBER$1,$Number);}_export(_export.S,"Number",{EPSILON:Math.pow(2,-52)});var _isFinite=_global.isFinite;_export(_export.S,"Number",{isFinite:function(t){return "number"==typeof t&&_isFinite(t)}});var floor$1=Math.floor,_isInteger=function(t){return !_isObject(t)&&isFinite(t)&&floor$1(t)===t};_export(_export.S,"Number",{isInteger:_isInteger}),_export(_export.S,"Number",{isNaN:function(t){return t!=t}});var abs$1=Math.abs;_export(_export.S,"Number",{isSafeInteger:function(t){return _isInteger(t)&&abs$1(t)<=9007199254740991}}),_export(_export.S,"Number",{MAX_SAFE_INTEGER:9007199254740991}),_export(_export.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991});var $parseFloat=_global.parseFloat,$trim$1=_stringTrim.trim,_parseFloat=1/$parseFloat(_stringWs+"-0")!=-1/0?function(t){var e=$trim$1(String(t),3),n=$parseFloat(e);return 0===n&&"-"==e.charAt(0)?-0:n}:$parseFloat;_export(_export.S+_export.F*(Number.parseFloat!=_parseFloat),"Number",{parseFloat:_parseFloat});var $parseInt=_global.parseInt,$trim$2=_stringTrim.trim,hex=/^[-+]?0[xX]/,_parseInt=8!==$parseInt(_stringWs+"08")||22!==$parseInt(_stringWs+"0x16")?function(t,e){var n=$trim$2(String(t),3);return $parseInt(n,e>>>0||(hex.test(n)?16:10))}:$parseInt;_export(_export.S+_export.F*(Number.parseInt!=_parseInt),"Number",{parseInt:_parseInt});var f$4=Object.getOwnPropertySymbols,_objectGops={f:f$4},$assign=Object.assign,_objectAssign=!$assign||_fails(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t;}),7!=$assign({},t)[n]||Object.keys($assign({},e)).join("")!=r})?function(t,e){for(var n=_toObject(t),r=arguments.length,o=1,i=_objectGops.f,a=_objectPie.f;r>o;)for(var s,c=_iobject(arguments[o++]),u=i?_objectKeys(c).concat(i(c)):_objectKeys(c),l=u.length,f=0;l>f;)a.call(c,s=u[f++])&&(n[s]=c[s]);return n}:$assign;_export(_export.S+_export.F,"Object",{assign:_objectAssign});var _objectForcedPam=!_fails(function(){var t=Math.random();__defineSetter__.call(null,t,function(){}),delete _global[t];});_descriptors&&_export(_export.P+_objectForcedPam,"Object",{__defineGetter__:function(t,e){_objectDp.f(_toObject(this),t,{get:_aFunction(e),enumerable:!0,configurable:!0});}}),_descriptors&&_export(_export.P+_objectForcedPam,"Object",{__defineSetter__:function(t,e){_objectDp.f(_toObject(this),t,{set:_aFunction(e),enumerable:!0,configurable:!0});}});var isEnum=_objectPie.f,_objectToArray=function(t){return function(e){for(var n,r=_toIobject(e),o=_objectKeys(r),i=o.length,a=0,s=[];i>a;)isEnum.call(r,n=o[a++])&&s.push(t?[n,r[n]]:r[n]);return s}},$entries=_objectToArray(!0);_export(_export.S,"Object",{entries:function(t){return $entries(t)}});var _objectSap=function(t,e){var n=(_core.Object||{})[t]||Object[t],r={};r[t]=e(n),_export(_export.S+_export.F*_fails(function(){n(1);}),"Object",r);},meta=_meta.onFreeze;_objectSap("freeze",function(t){return function(e){return t&&_isObject(e)?t(meta(e)):e}});var $getOwnPropertyDescriptor=_objectGopd.f;_objectSap("getOwnPropertyDescriptor",function(){return function(t,e){return $getOwnPropertyDescriptor(_toIobject(t),e)}});var Reflect$1=_global.Reflect,_ownKeys=Reflect$1&&Reflect$1.ownKeys||function(t){var e=_objectGopn.f(_anObject(t)),n=_objectGops.f;return n?e.concat(n(t)):e};_export(_export.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,r=_toIobject(t),o=_objectGopd.f,i=_ownKeys(r),a={},s=0;i.length>s;)void 0!==(n=o(r,e=i[s++]))&&_createProperty(a,e,n);return a}});var gOPN$1=_objectGopn.f,toString$1={}.toString,windowNames="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],getWindowNames=function(t){try{return gOPN$1(t)}catch(t){return windowNames.slice()}},f$5=function(t){return windowNames&&"[object Window]"==toString$1.call(t)?getWindowNames(t):gOPN$1(_toIobject(t))},_objectGopnExt={f:f$5};_objectSap("getOwnPropertyNames",function(){return _objectGopnExt.f}),_objectSap("getPrototypeOf",function(){return function(t){return _objectGpo(_toObject(t))}});var getOwnPropertyDescriptor=_objectGopd.f;_descriptors&&_export(_export.P+_objectForcedPam,"Object",{__lookupGetter__:function(t){var e,n=_toObject(this),r=_toPrimitive(t,!0);do{if(e=getOwnPropertyDescriptor(n,r))return e.get}while(n=_objectGpo(n))}});var getOwnPropertyDescriptor$1=_objectGopd.f;_descriptors&&_export(_export.P+_objectForcedPam,"Object",{__lookupSetter__:function(t){var e,n=_toObject(this),r=_toPrimitive(t,!0);do{if(e=getOwnPropertyDescriptor$1(n,r))return e.set}while(n=_objectGpo(n))}});var meta$1=_meta.onFreeze;_objectSap("preventExtensions",function(t){return function(e){return t&&_isObject(e)?t(meta$1(e)):e}});var _sameValue=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e};_export(_export.S,"Object",{is:_sameValue}),_objectSap("isFrozen",function(t){return function(e){return !_isObject(e)||!!t&&t(e)}}),_objectSap("isSealed",function(t){return function(e){return !_isObject(e)||!!t&&t(e)}}),_objectSap("isExtensible",function(t){return function(e){return !!_isObject(e)&&(!t||t(e))}}),_objectSap("keys",function(){return function(t){return _objectKeys(_toObject(t))}});var meta$2=_meta.onFreeze;_objectSap("seal",function(t){return function(e){return t&&_isObject(e)?t(meta$2(e)):e}});var $values=_objectToArray(!1);_export(_export.S,"Object",{values:function(t){return $values(t)}});var defer,channel,port,SPECIES$2=_wks("species"),_speciesConstructor=function(t,e){var n,r=_anObject(t).constructor;return void 0===r||null==(n=_anObject(r)[SPECIES$2])?e:_aFunction(n)},_invoke=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)},process=_global.process,setTask=_global.setImmediate,clearTask=_global.clearImmediate,MessageChannel=_global.MessageChannel,Dispatch=_global.Dispatch,counter=0,queue={},ONREADYSTATECHANGE="onreadystatechange",run=function(){var t=+this;if(queue.hasOwnProperty(t)){var e=queue[t];delete queue[t],e();}},listener=function(t){run.call(t.data);};setTask&&clearTask||(setTask=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return queue[++counter]=function(){_invoke("function"==typeof t?t:Function(t),e);},defer(counter),counter},clearTask=function(t){delete queue[t];},"process"==_cof(process)?defer=function(t){process.nextTick(_ctx(run,t,1));}:Dispatch&&Dispatch.now?defer=function(t){Dispatch.now(_ctx(run,t,1));}:MessageChannel?(port=(channel=new MessageChannel).port2,channel.port1.onmessage=listener,defer=_ctx(port.postMessage,port,1)):_global.addEventListener&&"function"==typeof postMessage&&!_global.importScripts?(defer=function(t){_global.postMessage(t+"","*");},_global.addEventListener("message",listener,!1)):defer=ONREADYSTATECHANGE in _domCreate("script")?function(t){_html.appendChild(_domCreate("script"))[ONREADYSTATECHANGE]=function(){_html.removeChild(this),run.call(t);};}:function(t){setTimeout(_ctx(run,t,1),0);});var _task={set:setTask,clear:clearTask},macrotask=_task.set,Observer=_global.MutationObserver||_global.WebKitMutationObserver,process$1=_global.process,Promise$1=_global.Promise,isNode="process"==_cof(process$1),_microtask=function(){var t,e,n,r=function(){var r,o;for(isNode&&(r=process$1.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o();}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter();};if(isNode)n=function(){process$1.nextTick(r);};else if(!Observer||_global.navigator&&_global.navigator.standalone)if(Promise$1&&Promise$1.resolve){var o=Promise$1.resolve(void 0);n=function(){o.then(r);};}else n=function(){macrotask.call(_global,r);};else{var i=!0,a=document.createTextNode("");new Observer(r).observe(a,{characterData:!0}),n=function(){a.data=i=!i;};}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o;}};function PromiseCapability(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r;}),this.resolve=_aFunction(e),this.reject=_aFunction(n);}var Internal,newGenericPromiseCapability,OwnPromiseCapability,Wrapper,f$6=function(t){return new PromiseCapability(t)},_newPromiseCapability={f:f$6},_perform=function(t){try{return {e:!1,v:t()}}catch(t){return {e:!0,v:t}}},navigator$1=_global.navigator,_userAgent=navigator$1&&navigator$1.userAgent||"",_promiseResolve=function(t,e){if(_anObject(t),_isObject(e)&&e.constructor===t)return e;var n=_newPromiseCapability.f(t);return (0, n.resolve)(e),n.promise},task=_task.set,microtask=_microtask(),PROMISE="Promise",TypeError$1=_global.TypeError,process$2=_global.process,versions=process$2&&process$2.versions,v8=versions&&versions.v8||"",$Promise=_global[PROMISE],isNode$1="process"==_classof(process$2),empty=function(){},newPromiseCapability=newGenericPromiseCapability=_newPromiseCapability.f,USE_NATIVE=!!function(){try{var t=$Promise.resolve(1),e=(t.constructor={})[_wks("species")]=function(t){t(empty,empty);};return (isNode$1||"function"==typeof PromiseRejectionEvent)&&t.then(empty)instanceof e&&0!==v8.indexOf("6.6")&&-1===_userAgent.indexOf("Chrome/66")}catch(t){}}(),isThenable=function(t){var e;return !(!_isObject(t)||"function"!=typeof(e=t.then))&&e},notify=function(t,e){if(!t._n){t._n=!0;var n=t._c;microtask(function(){for(var r=t._v,o=1==t._s,i=0,a=function(e){var n,i,a,s=o?e.ok:e.fail,c=e.resolve,u=e.reject,l=e.domain;try{s?(o||(2==t._h&&onHandleUnhandled(t),t._h=1),!0===s?n=r:(l&&l.enter(),n=s(r),l&&(l.exit(),a=!0)),n===e.promise?u(TypeError$1("Promise-chain cycle")):(i=isThenable(n))?i.call(n,c,u):c(n)):u(r);}catch(t){l&&!a&&l.exit(),u(t);}};n.length>i;)a(n[i++]);t._c=[],t._n=!1,e&&!t._h&&onUnhandled(t);});}},onUnhandled=function(t){task.call(_global,function(){var e,n,r,o=t._v,i=isUnhandled(t);if(i&&(e=_perform(function(){isNode$1?process$2.emit("unhandledRejection",o,t):(n=_global.onunhandledrejection)?n({promise:t,reason:o}):(r=_global.console)&&r.error&&r.error("Unhandled promise rejection",o);}),t._h=isNode$1||isUnhandled(t)?2:1),t._a=void 0,i&&e.e)throw e.v});},isUnhandled=function(t){return 1!==t._h&&0===(t._a||t._c).length},onHandleUnhandled=function(t){task.call(_global,function(){var e;isNode$1?process$2.emit("rejectionHandled",t):(e=_global.onrejectionhandled)&&e({promise:t,reason:t._v});});},$reject=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),notify(e,!0));},$resolve=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw TypeError$1("Promise can't be resolved itself");(e=isThenable(t))?microtask(function(){var r={_w:n,_d:!1};try{e.call(t,_ctx($resolve,r,1),_ctx($reject,r,1));}catch(t){$reject.call(r,t);}}):(n._v=t,n._s=1,notify(n,!1));}catch(t){$reject.call({_w:n,_d:!1},t);}}};USE_NATIVE||($Promise=function(t){_anInstance(this,$Promise,PROMISE,"_h"),_aFunction(t),Internal.call(this);try{t(_ctx($resolve,this,1),_ctx($reject,this,1));}catch(t){$reject.call(this,t);}},(Internal=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1;}).prototype=_redefineAll($Promise.prototype,{then:function(t,e){var n=newPromiseCapability(_speciesConstructor(this,$Promise));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=isNode$1?process$2.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&notify(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),OwnPromiseCapability=function(){var t=new Internal;this.promise=t,this.resolve=_ctx($resolve,t,1),this.reject=_ctx($reject,t,1);},_newPromiseCapability.f=newPromiseCapability=function(t){return t===$Promise||t===Wrapper?new OwnPromiseCapability(t):newGenericPromiseCapability(t)}),_export(_export.G+_export.W+_export.F*!USE_NATIVE,{Promise:$Promise}),_setToStringTag($Promise,PROMISE),_setSpecies(PROMISE),Wrapper=_core[PROMISE],_export(_export.S+_export.F*!USE_NATIVE,PROMISE,{reject:function(t){var e=newPromiseCapability(this);return (0, e.reject)(t),e.promise}}),_export(_export.S+_export.F*(!USE_NATIVE),PROMISE,{resolve:function(t){return _promiseResolve(this,t)}}),_export(_export.S+_export.F*!(USE_NATIVE&&_iterDetect(function(t){$Promise.all(t).catch(empty);})),PROMISE,{all:function(t){var e=this,n=newPromiseCapability(e),r=n.resolve,o=n.reject,i=_perform(function(){var n=[],i=0,a=1;_forOf(t,!1,function(t){var s=i++,c=!1;n.push(void 0),a++,e.resolve(t).then(function(t){c||(c=!0,n[s]=t,--a||r(n));},o);}),--a||r(n);});return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=newPromiseCapability(e),r=n.reject,o=_perform(function(){_forOf(t,!1,function(t){e.resolve(t).then(n.resolve,r);});});return o.e&&r(o.v),n.promise}}),_export(_export.P+_export.R,"Promise",{finally:function(t){var e=_speciesConstructor(this,_core.Promise||_global.Promise),n="function"==typeof t;return this.then(n?function(n){return _promiseResolve(e,t()).then(function(){return n})}:t,n?function(n){return _promiseResolve(e,t()).then(function(){throw n})}:t)}});var rApply=(_global.Reflect||{}).apply,fApply=Function.apply;_export(_export.S+_export.F*!_fails(function(){rApply(function(){});}),"Reflect",{apply:function(t,e,n){var r=_aFunction(t),o=_anObject(n);return rApply?rApply(r,e,o):fApply.call(r,e,o)}});var arraySlice=[].slice,factories={},construct=function(t,e,n){if(!(e in factories)){for(var r=[],o=0;o<e;o++)r[o]="a["+o+"]";factories[e]=Function("F,a","return new F("+r.join(",")+")");}return factories[e](t,n)},_bind=Function.bind||function(t){var e=_aFunction(this),n=arraySlice.call(arguments,1),r=function(){var o=n.concat(arraySlice.call(arguments));return this instanceof r?construct(e,o.length,o):_invoke(e,o,t)};return _isObject(e.prototype)&&(r.prototype=e.prototype),r},rConstruct=(_global.Reflect||{}).construct,NEW_TARGET_BUG=_fails(function(){function t(){}return !(rConstruct(function(){},[],t)instanceof t)}),ARGS_BUG=!_fails(function(){rConstruct(function(){});});_export(_export.S+_export.F*(NEW_TARGET_BUG||ARGS_BUG),"Reflect",{construct:function(t,e){_aFunction(t),_anObject(e);var n=arguments.length<3?t:_aFunction(arguments[2]);if(ARGS_BUG&&!NEW_TARGET_BUG)return rConstruct(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(_bind.apply(t,r))}var o=n.prototype,i=_objectCreate(_isObject(o)?o:Object.prototype),a=Function.apply.call(t,i,e);return _isObject(a)?a:i}}),_export(_export.S+_export.F*_fails(function(){Reflect.defineProperty(_objectDp.f({},1,{value:1}),1,{value:2});}),"Reflect",{defineProperty:function(t,e,n){_anObject(t),e=_toPrimitive(e,!0),_anObject(n);try{return _objectDp.f(t,e,n),!0}catch(t){return !1}}});var gOPD$2=_objectGopd.f;function get(t,e){var n,r,o=arguments.length<3?t:arguments[2];return _anObject(t)===o?t[e]:(n=_objectGopd.f(t,e))?_has(n,"value")?n.value:void 0!==n.get?n.get.call(o):void 0:_isObject(r=_objectGpo(t))?get(r,e,o):void 0}_export(_export.S,"Reflect",{deleteProperty:function(t,e){var n=gOPD$2(_anObject(t),e);return !(n&&!n.configurable)&&delete t[e]}}),_export(_export.S,"Reflect",{get:get}),_export(_export.S,"Reflect",{getOwnPropertyDescriptor:function(t,e){return _objectGopd.f(_anObject(t),e)}}),_export(_export.S,"Reflect",{getPrototypeOf:function(t){return _objectGpo(_anObject(t))}}),_export(_export.S,"Reflect",{has:function(t,e){return e in t}});var $isExtensible=Object.isExtensible;_export(_export.S,"Reflect",{isExtensible:function(t){return _anObject(t),!$isExtensible||$isExtensible(t)}}),_export(_export.S,"Reflect",{ownKeys:_ownKeys});var $preventExtensions=Object.preventExtensions;function set(t,e,n){var r,o,i=arguments.length<4?t:arguments[3],a=_objectGopd.f(_anObject(t),e);if(!a){if(_isObject(o=_objectGpo(t)))return set(o,e,n,i);a=_propertyDesc(0);}if(_has(a,"value")){if(!1===a.writable||!_isObject(i))return !1;if(r=_objectGopd.f(i,e)){if(r.get||r.set||!1===r.writable)return !1;r.value=n,_objectDp.f(i,e,r);}else _objectDp.f(i,e,_propertyDesc(0,n));return !0}return void 0!==a.set&&(a.set.call(i,n),!0)}_export(_export.S,"Reflect",{preventExtensions:function(t){_anObject(t);try{return $preventExtensions&&$preventExtensions(t),!0}catch(t){return !1}}}),_export(_export.S,"Reflect",{set:set}),_setProto&&_export(_export.S,"Reflect",{setPrototypeOf:function(t,e){_setProto.check(t,e);try{return _setProto.set(t,e),!0}catch(t){return !1}}});var MATCH=_wks("match"),_isRegexp=function(t){var e;return _isObject(t)&&(void 0!==(e=t[MATCH])?!!e:"RegExp"==_cof(t))},_flags=function(){var t=_anObject(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},dP$4=_objectDp.f,gOPN$2=_objectGopn.f,$RegExp=_global.RegExp,Base$1=$RegExp,proto$2=$RegExp.prototype,re1=/a/g,re2=/a/g,CORRECT_NEW=new $RegExp(re1)!==re1;if(_descriptors&&(!CORRECT_NEW||_fails(function(){return re2[_wks("match")]=!1,$RegExp(re1)!=re1||$RegExp(re2)==re2||"/a/i"!=$RegExp(re1,"i")}))){$RegExp=function(t,e){var n=this instanceof $RegExp,r=_isRegexp(t),o=void 0===e;return !n&&r&&t.constructor===$RegExp&&o?t:_inheritIfRequired(CORRECT_NEW?new Base$1(r&&!o?t.source:t,e):Base$1((r=t instanceof $RegExp)?t.source:t,r&&o?_flags.call(t):e),n?this:proto$2,$RegExp)};for(var proxy=function(t){t in $RegExp||dP$4($RegExp,t,{configurable:!0,get:function(){return Base$1[t]},set:function(e){Base$1[t]=e;}});},keys$1=gOPN$2(Base$1),i=0;keys$1.length>i;)proxy(keys$1[i++]);proto$2.constructor=$RegExp,$RegExp.prototype=proto$2,_redefine(_global,"RegExp",$RegExp);}_setSpecies("RegExp"),_descriptors&&"g"!=/./g.flags&&_objectDp.f(RegExp.prototype,"flags",{configurable:!0,get:_flags});var _fixReWks=function(t,e,n){var r=_wks(t),o=n(_defined,r,""[t]),i=o[0],a=o[1];_fails(function(){var e={};return e[r]=function(){return 7},7!=""[t](e)})&&(_redefine(String.prototype,t,i),_hide(RegExp.prototype,r,2==e?function(t,e){return a.call(t,this,e)}:function(t){return a.call(t,this)}));};_fixReWks("match",1,function(t,e,n){return [function(n){var r=t(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,r):new RegExp(n)[e](String(r))},n]}),_fixReWks("replace",2,function(t,e,n){return [function(r,o){var i=t(this),a=null==r?void 0:r[e];return void 0!==a?a.call(r,i,o):n.call(String(i),r,o)},n]}),_fixReWks("split",2,function(t,e,n){var r=_isRegexp,o=n,i=[].push;if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length){var a=void 0===/()??/.exec("")[1];n=function(t,e){var n=String(this);if(void 0===t&&0===e)return [];if(!r(t))return o.call(n,t,e);var s,c,u,l,f,p=[],_=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,d=void 0===e?4294967295:e>>>0,g=new RegExp(t.source,_+"g");for(a||(s=new RegExp("^"+g.source+"$(?!\\s)",_));(c=g.exec(n))&&!((u=c.index+c[0].length)>h&&(p.push(n.slice(h,c.index)),!a&&c.length>1&&c[0].replace(s,function(){for(f=1;f<arguments.length-2;f++)void 0===arguments[f]&&(c[f]=void 0);}),c.length>1&&c.index<n.length&&i.apply(p,c.slice(1)),l=c[0].length,h=u,p.length>=d));)g.lastIndex===c.index&&g.lastIndex++;return h===n.length?!l&&g.test("")||p.push(""):p.push(n.slice(h)),p.length>d?p.slice(0,d):p};}else"0".split(void 0,0).length&&(n=function(t,e){return void 0===t&&0===e?[]:o.call(this,t,e)});return [function(r,o){var i=t(this),a=null==r?void 0:r[e];return void 0!==a?a.call(r,i,o):n.call(String(i),r,o)},n]}),_fixReWks("search",1,function(t,e,n){return [function(n){var r=t(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,r):new RegExp(n)[e](String(r))},n]});var TO_STRING="toString",$toString=/./[TO_STRING],define=function(t){_redefine(RegExp.prototype,TO_STRING,t,!0);};_fails(function(){return "/a/b"!=$toString.call({source:"a",flags:"b"})})?define(function(){var t=_anObject(this);return "/".concat(t.source,"/","flags"in t?t.flags:!_descriptors&&t instanceof RegExp?_flags.call(t):void 0)}):$toString.name!=TO_STRING&&define(function(){return $toString.call(this)});var SET="Set",es6_set=_collection(SET,function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return _collectionStrong.def(_validateCollection(this,SET),t=0===t?0:t,t)}},_collectionStrong),f$7=_wks,_wksExt={f:f$7},defineProperty=_objectDp.f,_wksDefine=function(t){var e=_core.Symbol||(_core.Symbol=_global.Symbol||{});"_"==t.charAt(0)||t in e||defineProperty(e,t,{value:_wksExt.f(t)});},_enumKeys=function(t){var e=_objectKeys(t),n=_objectGops.f;if(n)for(var r,o=n(t),i=_objectPie.f,a=0;o.length>a;)i.call(t,r=o[a++])&&e.push(r);return e},META=_meta.KEY,gOPD$3=_objectGopd.f,dP$5=_objectDp.f,gOPN$3=_objectGopnExt.f,$Symbol=_global.Symbol,$JSON=_global.JSON,_stringify=$JSON&&$JSON.stringify,PROTOTYPE$2="prototype",HIDDEN=_wks("_hidden"),TO_PRIMITIVE$1=_wks("toPrimitive"),isEnum$1={}.propertyIsEnumerable,SymbolRegistry=_shared("symbol-registry"),AllSymbols=_shared("symbols"),OPSymbols=_shared("op-symbols"),ObjectProto$1=Object[PROTOTYPE$2],USE_NATIVE$1="function"==typeof $Symbol,QObject=_global.QObject,setter=!QObject||!QObject[PROTOTYPE$2]||!QObject[PROTOTYPE$2].findChild,setSymbolDesc=_descriptors&&_fails(function(){return 7!=_objectCreate(dP$5({},"a",{get:function(){return dP$5(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=gOPD$3(ObjectProto$1,e);r&&delete ObjectProto$1[e],dP$5(t,e,n),r&&t!==ObjectProto$1&&dP$5(ObjectProto$1,e,r);}:dP$5,wrap=function(t){var e=AllSymbols[t]=_objectCreate($Symbol[PROTOTYPE$2]);return e._k=t,e},isSymbol=USE_NATIVE$1&&"symbol"==typeof $Symbol.iterator?function(t){return "symbol"==typeof t}:function(t){return t instanceof $Symbol},$defineProperty=function(t,e,n){return t===ObjectProto$1&&$defineProperty(OPSymbols,e,n),_anObject(t),e=_toPrimitive(e,!0),_anObject(n),_has(AllSymbols,e)?(n.enumerable?(_has(t,HIDDEN)&&t[HIDDEN][e]&&(t[HIDDEN][e]=!1),n=_objectCreate(n,{enumerable:_propertyDesc(0,!1)})):(_has(t,HIDDEN)||dP$5(t,HIDDEN,_propertyDesc(1,{})),t[HIDDEN][e]=!0),setSymbolDesc(t,e,n)):dP$5(t,e,n)},$defineProperties=function(t,e){_anObject(t);for(var n,r=_enumKeys(e=_toIobject(e)),o=0,i=r.length;i>o;)$defineProperty(t,n=r[o++],e[n]);return t},$create=function(t,e){return void 0===e?_objectCreate(t):$defineProperties(_objectCreate(t),e)},$propertyIsEnumerable=function(t){var e=isEnum$1.call(this,t=_toPrimitive(t,!0));return !(this===ObjectProto$1&&_has(AllSymbols,t)&&!_has(OPSymbols,t))&&(!(e||!_has(this,t)||!_has(AllSymbols,t)||_has(this,HIDDEN)&&this[HIDDEN][t])||e)},$getOwnPropertyDescriptor$1=function(t,e){if(t=_toIobject(t),e=_toPrimitive(e,!0),t!==ObjectProto$1||!_has(AllSymbols,e)||_has(OPSymbols,e)){var n=gOPD$3(t,e);return !n||!_has(AllSymbols,e)||_has(t,HIDDEN)&&t[HIDDEN][e]||(n.enumerable=!0),n}},$getOwnPropertyNames=function(t){for(var e,n=gOPN$3(_toIobject(t)),r=[],o=0;n.length>o;)_has(AllSymbols,e=n[o++])||e==HIDDEN||e==META||r.push(e);return r},$getOwnPropertySymbols=function(t){for(var e,n=t===ObjectProto$1,r=gOPN$3(n?OPSymbols:_toIobject(t)),o=[],i=0;r.length>i;)!_has(AllSymbols,e=r[i++])||n&&!_has(ObjectProto$1,e)||o.push(AllSymbols[e]);return o};USE_NATIVE$1||(_redefine(($Symbol=function(){if(this instanceof $Symbol)throw TypeError("Symbol is not a constructor!");var t=_uid(arguments.length>0?arguments[0]:void 0),e=function(n){this===ObjectProto$1&&e.call(OPSymbols,n),_has(this,HIDDEN)&&_has(this[HIDDEN],t)&&(this[HIDDEN][t]=!1),setSymbolDesc(this,t,_propertyDesc(1,n));};return _descriptors&&setter&&setSymbolDesc(ObjectProto$1,t,{configurable:!0,set:e}),wrap(t)})[PROTOTYPE$2],"toString",function(){return this._k}),_objectGopd.f=$getOwnPropertyDescriptor$1,_objectDp.f=$defineProperty,_objectGopn.f=_objectGopnExt.f=$getOwnPropertyNames,_objectPie.f=$propertyIsEnumerable,_objectGops.f=$getOwnPropertySymbols,_descriptors&&!_library&&_redefine(ObjectProto$1,"propertyIsEnumerable",$propertyIsEnumerable,!0),_wksExt.f=function(t){return wrap(_wks(t))}),_export(_export.G+_export.W+_export.F*!USE_NATIVE$1,{Symbol:$Symbol});for(var es6Symbols="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),j$1=0;es6Symbols.length>j$1;)_wks(es6Symbols[j$1++]);for(var wellKnownSymbols=_objectKeys(_wks.store),k=0;wellKnownSymbols.length>k;)_wksDefine(wellKnownSymbols[k++]);_export(_export.S+_export.F*!USE_NATIVE$1,"Symbol",{for:function(t){return _has(SymbolRegistry,t+="")?SymbolRegistry[t]:SymbolRegistry[t]=$Symbol(t)},keyFor:function(t){if(!isSymbol(t))throw TypeError(t+" is not a symbol!");for(var e in SymbolRegistry)if(SymbolRegistry[e]===t)return e},useSetter:function(){setter=!0;},useSimple:function(){setter=!1;}}),_export(_export.S+_export.F*!USE_NATIVE$1,"Object",{create:$create,defineProperty:$defineProperty,defineProperties:$defineProperties,getOwnPropertyDescriptor:$getOwnPropertyDescriptor$1,getOwnPropertyNames:$getOwnPropertyNames,getOwnPropertySymbols:$getOwnPropertySymbols}),$JSON&&_export(_export.S+_export.F*(!USE_NATIVE$1||_fails(function(){var t=$Symbol();return "[null]"!=_stringify([t])||"{}"!=_stringify({a:t})||"{}"!=_stringify(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(_isObject(e)||void 0!==t)&&!isSymbol(t))return _isArray(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!isSymbol(e))return e}),r[1]=e,_stringify.apply($JSON,r)}}),$Symbol[PROTOTYPE$2][TO_PRIMITIVE$1]||_hide($Symbol[PROTOTYPE$2],TO_PRIMITIVE$1,$Symbol[PROTOTYPE$2].valueOf),_setToStringTag($Symbol,"Symbol"),_setToStringTag(Math,"Math",!0),_setToStringTag(_global.JSON,"JSON",!0),_wksDefine("asyncIterator");var quot=/"/g,createHTML=function(t,e,n,r){var o=String(_defined(t)),i="<"+e;return ""!==n&&(i+=" "+n+'="'+String(r).replace(quot,"&quot;")+'"'),i+">"+o+"</"+e+">"},_stringHtml=function(t,e){var n={};n[t]=e(createHTML),_export(_export.P+_export.F*_fails(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n);};_stringHtml("anchor",function(t){return function(e){return t(this,"a","name",e)}}),_stringHtml("big",function(t){return function(){return t(this,"big","","")}}),_stringHtml("blink",function(t){return function(){return t(this,"blink","","")}}),_stringHtml("bold",function(t){return function(){return t(this,"b","","")}});var _stringAt=function(t){return function(e,n){var r,o,i=String(_defined(e)),a=_toInteger(n),s=i.length;return a<0||a>=s?t?"":void 0:(r=i.charCodeAt(a))<55296||r>56319||a+1===s||(o=i.charCodeAt(a+1))<56320||o>57343?t?i.charAt(a):r:t?i.slice(a,a+2):o-56320+(r-55296<<10)+65536}},$at=_stringAt(!1);_export(_export.P,"String",{codePointAt:function(t){return $at(this,t)}});var _stringContext=function(t,e,n){if(_isRegexp(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(_defined(t))},MATCH$1=_wks("match"),_failsIsRegexp=function(t){var e=/./;try{"/./"[t](e);}catch(n){try{return e[MATCH$1]=!1,!"/./"[t](e)}catch(t){}}return !0},ENDS_WITH="endsWith",$endsWith=""[ENDS_WITH];_export(_export.P+_export.F*_failsIsRegexp(ENDS_WITH),"String",{endsWith:function(t){var e=_stringContext(this,t,ENDS_WITH),n=arguments.length>1?arguments[1]:void 0,r=_toLength(e.length),o=void 0===n?r:Math.min(_toLength(n),r),i=String(t);return $endsWith?$endsWith.call(e,i,o):e.slice(o-i.length,o)===i}}),_stringHtml("fixed",function(t){return function(){return t(this,"tt","","")}}),_stringHtml("fontcolor",function(t){return function(e){return t(this,"font","color",e)}}),_stringHtml("fontsize",function(t){return function(e){return t(this,"font","size",e)}});var fromCharCode=String.fromCharCode,$fromCodePoint=String.fromCodePoint;_export(_export.S+_export.F*(!!$fromCodePoint&&1!=$fromCodePoint.length),"String",{fromCodePoint:function(t){for(var e,n=[],r=arguments.length,o=0;r>o;){if(e=+arguments[o++],_toAbsoluteIndex(e,1114111)!==e)throw RangeError(e+" is not a valid code point");n.push(e<65536?fromCharCode(e):fromCharCode(55296+((e-=65536)>>10),e%1024+56320));}return n.join("")}});var INCLUDES="includes";_export(_export.P+_export.F*_failsIsRegexp(INCLUDES),"String",{includes:function(t){return !!~_stringContext(this,t,INCLUDES).indexOf(t,arguments.length>1?arguments[1]:void 0)}}),_stringHtml("italics",function(t){return function(){return t(this,"i","","")}});var $at$1=_stringAt(!0);_iterDefine(String,"String",function(t){this._t=String(t),this._i=0;},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=$at$1(e,n),this._i+=t.length,{value:t,done:!1})}),_stringHtml("link",function(t){return function(e){return t(this,"a","href",e)}});var _stringRepeat=function(t){var e=String(_defined(this)),n="",r=_toInteger(t);if(r<0||r==1/0)throw RangeError("Count can't be negative");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n},_stringPad=function(t,e,n,r){var o=String(_defined(t)),i=o.length,a=void 0===n?" ":String(n),s=_toLength(e);if(s<=i||""==a)return o;var c=s-i,u=_stringRepeat.call(a,Math.ceil(c/a.length));return u.length>c&&(u=u.slice(0,c)),r?u+o:o+u};_export(_export.P+_export.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(_userAgent),"String",{padStart:function(t){return _stringPad(this,t,arguments.length>1?arguments[1]:void 0,!0)}}),_export(_export.P+_export.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(_userAgent),"String",{padEnd:function(t){return _stringPad(this,t,arguments.length>1?arguments[1]:void 0,!1)}}),_export(_export.S,"String",{raw:function(t){for(var e=_toIobject(t.raw),n=_toLength(e.length),r=arguments.length,o=[],i=0;n>i;)o.push(String(e[i++])),i<r&&o.push(String(arguments[i]));return o.join("")}}),_export(_export.P,"String",{repeat:_stringRepeat}),_stringHtml("small",function(t){return function(){return t(this,"small","","")}});var STARTS_WITH="startsWith",$startsWith=""[STARTS_WITH];_export(_export.P+_export.F*_failsIsRegexp(STARTS_WITH),"String",{startsWith:function(t){var e=_stringContext(this,t,STARTS_WITH),n=_toLength(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return $startsWith?$startsWith.call(e,r,n):e.slice(n,n+r.length)===r}}),_stringHtml("strike",function(t){return function(){return t(this,"strike","","")}}),_stringHtml("sub",function(t){return function(){return t(this,"sub","","")}}),_stringHtml("sup",function(t){return function(){return t(this,"sup","","")}});for(var Typed,TYPED=_uid("typed_array"),VIEW=_uid("view"),ABV=!(!_global.ArrayBuffer||!_global.DataView),CONSTR=ABV,i$1=0,l=9,TypedArrayConstructors="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");i$1<l;)(Typed=_global[TypedArrayConstructors[i$1++]])?(_hide(Typed.prototype,TYPED,!0),_hide(Typed.prototype,VIEW,!0)):CONSTR=!1;var _typed={ABV:ABV,CONSTR:CONSTR,TYPED:TYPED,VIEW:VIEW},_toIndex=function(t){if(void 0===t)return 0;var e=_toInteger(t),n=_toLength(e);if(e!==n)throw RangeError("Wrong length!");return n},_typedBuffer=createCommonjsModule(function(t,e){var n=_objectGopn.f,r=_objectDp.f,o="prototype",i="Wrong index!",a=_global.ArrayBuffer,s=_global.DataView,c=_global.Math,u=_global.RangeError,l=_global.Infinity,f=a,p=c.abs,_=c.pow,h=c.floor,d=c.log,g=c.LN2,y=_descriptors?"_b":"buffer",v=_descriptors?"_l":"byteLength",m=_descriptors?"_o":"byteOffset";function b(t,e,n){var r,o,i,a=new Array(n),s=8*n-e-1,c=(1<<s)-1,u=c>>1,f=23===e?_(2,-24)-_(2,-77):0,y=0,v=t<0||0===t&&1/t<0?1:0;for((t=p(t))!=t||t===l?(o=t!=t?1:0,r=c):(r=h(d(t)/g),t*(i=_(2,-r))<1&&(r--,i*=2),(t+=r+u>=1?f/i:f*_(2,1-u))*i>=2&&(r++,i/=2),r+u>=c?(o=0,r=c):r+u>=1?(o=(t*i-1)*_(2,e),r+=u):(o=t*_(2,u-1)*_(2,e),r=0));e>=8;a[y++]=255&o,o/=256,e-=8);for(r=r<<e|o,s+=e;s>0;a[y++]=255&r,r/=256,s-=8);return a[--y]|=128*v,a}function E(t,e,n){var r,o=8*n-e-1,i=(1<<o)-1,a=i>>1,s=o-7,c=n-1,u=t[c--],f=127&u;for(u>>=7;s>0;f=256*f+t[c],c--,s-=8);for(r=f&(1<<-s)-1,f>>=-s,s+=e;s>0;r=256*r+t[c],c--,s-=8);if(0===f)f=1-a;else{if(f===i)return r?NaN:u?-l:l;r+=_(2,e),f-=a;}return (u?-1:1)*r*_(2,f-e)}function x(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function S(t){return [255&t]}function O(t){return [255&t,t>>8&255]}function w(t){return [255&t,t>>8&255,t>>16&255,t>>24&255]}function $(t){return b(t,52,8)}function P(t){return b(t,23,4)}function j(t,e,n){r(t[o],e,{get:function(){return this[n]}});}function T(t,e,n,r){var o=_toIndex(+n);if(o+e>t[v])throw u(i);var a=t[y]._b,s=o+t[m],c=a.slice(s,s+e);return r?c:c.reverse()}function I(t,e,n,r,o,a){var s=_toIndex(+n);if(s+e>t[v])throw u(i);for(var c=t[y]._b,l=s+t[m],f=r(+o),p=0;p<e;p++)c[l+p]=f[a?p:e-p-1];}if(_typed.ABV){if(!_fails(function(){a(1);})||!_fails(function(){new a(-1);})||_fails(function(){return new a,new a(1.5),new a(NaN),"ArrayBuffer"!=a.name})){for(var A,C=(a=function(t){return _anInstance(this,a),new f(_toIndex(t))})[o]=f[o],R=n(f),k=0;R.length>k;)(A=R[k++])in a||_hide(a,A,f[A]);C.constructor=a;}var N=new s(new a(2)),M=s[o].setInt8;N.setInt8(0,2147483648),N.setInt8(1,2147483649),!N.getInt8(0)&&N.getInt8(1)||_redefineAll(s[o],{setInt8:function(t,e){M.call(this,t,e<<24>>24);},setUint8:function(t,e){M.call(this,t,e<<24>>24);}},!0);}else a=function(t){_anInstance(this,a,"ArrayBuffer");var e=_toIndex(t);this._b=_arrayFill.call(new Array(e),0),this[v]=e;},s=function(t,e,n){_anInstance(this,s,"DataView"),_anInstance(t,a,"DataView");var r=t[v],o=_toInteger(e);if(o<0||o>r)throw u("Wrong offset!");if(o+(n=void 0===n?r-o:_toLength(n))>r)throw u("Wrong length!");this[y]=t,this[m]=o,this[v]=n;},_descriptors&&(j(a,"byteLength","_l"),j(s,"buffer","_b"),j(s,"byteLength","_l"),j(s,"byteOffset","_o")),_redefineAll(s[o],{getInt8:function(t){return T(this,1,t)[0]<<24>>24},getUint8:function(t){return T(this,1,t)[0]},getInt16:function(t){var e=T(this,2,t,arguments[1]);return (e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=T(this,2,t,arguments[1]);return e[1]<<8|e[0]},getInt32:function(t){return x(T(this,4,t,arguments[1]))},getUint32:function(t){return x(T(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return E(T(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return E(T(this,8,t,arguments[1]),52,8)},setInt8:function(t,e){I(this,1,t,S,e);},setUint8:function(t,e){I(this,1,t,S,e);},setInt16:function(t,e){I(this,2,t,O,e,arguments[2]);},setUint16:function(t,e){I(this,2,t,O,e,arguments[2]);},setInt32:function(t,e){I(this,4,t,w,e,arguments[2]);},setUint32:function(t,e){I(this,4,t,w,e,arguments[2]);},setFloat32:function(t,e){I(this,4,t,P,e,arguments[2]);},setFloat64:function(t,e){I(this,8,t,$,e,arguments[2]);}});_setToStringTag(a,"ArrayBuffer"),_setToStringTag(s,"DataView"),_hide(s[o],_typed.VIEW,!0),e.ArrayBuffer=a,e.DataView=s;}),ArrayBuffer=_global.ArrayBuffer,$ArrayBuffer=_typedBuffer.ArrayBuffer,$DataView=_typedBuffer.DataView,$isView=_typed.ABV&&ArrayBuffer.isView,$slice=$ArrayBuffer.prototype.slice,VIEW$1=_typed.VIEW,ARRAY_BUFFER="ArrayBuffer";_export(_export.G+_export.W+_export.F*(ArrayBuffer!==$ArrayBuffer),{ArrayBuffer:$ArrayBuffer}),_export(_export.S+_export.F*!_typed.CONSTR,ARRAY_BUFFER,{isView:function(t){return $isView&&$isView(t)||_isObject(t)&&VIEW$1 in t}}),_export(_export.P+_export.U+_export.F*_fails(function(){return !new $ArrayBuffer(2).slice(1,void 0).byteLength}),ARRAY_BUFFER,{slice:function(t,e){if(void 0!==$slice&&void 0===e)return $slice.call(_anObject(this),t);for(var n=_anObject(this).byteLength,r=_toAbsoluteIndex(t,n),o=_toAbsoluteIndex(void 0===e?n:e,n),i=new(_speciesConstructor(this,$ArrayBuffer))(_toLength(o-r)),a=new $DataView(this),s=new $DataView(i),c=0;r<o;)s.setUint8(c++,a.getUint8(r++));return i}}),_setSpecies(ARRAY_BUFFER);var _typedArray=createCommonjsModule(function(t){if(_descriptors){var e=_global,n=_fails,r=_export,o=_typed,i=_typedBuffer,a=_ctx,s=_anInstance,c=_propertyDesc,u=_hide,l=_redefineAll,f=_toInteger,p=_toLength,_=_toIndex,h=_toAbsoluteIndex,d=_toPrimitive,g=_has,y=_classof,v=_isObject,m=_toObject,b=_isArrayIter,E=_objectCreate,x=_objectGpo,S=_objectGopn.f,O=core_getIteratorMethod,w=_uid,$=_wks,P=_arrayMethods,j=_arrayIncludes,T=_speciesConstructor,I=es6_array_iterator,A=_iterators,C=_iterDetect,R=_setSpecies,k=_arrayFill,N=_arrayCopyWithin,M=_objectDp,L=_objectGopd,D=M.f,F=L.f,G=e.RangeError,B=e.TypeError,V=e.Uint8Array,U=Array.prototype,W=i.ArrayBuffer,K=i.DataView,H=P(0),Y=P(2),q=P(3),z=P(4),J=P(5),Z=P(6),X=j(!0),Q=j(!1),tt=I.values,et=I.keys,nt=I.entries,rt=U.lastIndexOf,ot=U.reduce,it=U.reduceRight,at=U.join,st=U.sort,ct=U.slice,ut=U.toString,lt=U.toLocaleString,ft=$("iterator"),pt=$("toStringTag"),_t=w("typed_constructor"),ht=w("def_constructor"),dt=o.CONSTR,gt=o.TYPED,yt=o.VIEW,vt=P(1,function(t,e){return St(T(t,t[ht]),e)}),mt=n(function(){return 1===new V(new Uint16Array([1]).buffer)[0]}),bt=!!V&&!!V.prototype.set&&n(function(){new V(1).set({});}),Et=function(t,e){var n=f(t);if(n<0||n%e)throw G("Wrong offset!");return n},xt=function(t){if(v(t)&&gt in t)return t;throw B(t+" is not a typed array!")},St=function(t,e){if(!(v(t)&&_t in t))throw B("It is not a typed array constructor!");return new t(e)},Ot=function(t,e){return wt(T(t,t[ht]),e)},wt=function(t,e){for(var n=0,r=e.length,o=St(t,r);r>n;)o[n]=e[n++];return o},$t=function(t,e,n){D(t,e,{get:function(){return this._d[n]}});},Pt=function(t){var e,n,r,o,i,s,c=m(t),u=arguments.length,l=u>1?arguments[1]:void 0,f=void 0!==l,_=O(c);if(null!=_&&!b(_)){for(s=_.call(c),r=[],e=0;!(i=s.next()).done;e++)r.push(i.value);c=r;}for(f&&u>2&&(l=a(l,arguments[2],2)),e=0,n=p(c.length),o=St(this,n);n>e;e++)o[e]=f?l(c[e],e):c[e];return o},jt=function(){for(var t=0,e=arguments.length,n=St(this,e);e>t;)n[t]=arguments[t++];return n},Tt=!!V&&n(function(){lt.call(new V(1));}),It=function(){return lt.apply(Tt?ct.call(xt(this)):xt(this),arguments)},At={copyWithin:function(t,e){return N.call(xt(this),t,e,arguments.length>2?arguments[2]:void 0)},every:function(t){return z(xt(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return k.apply(xt(this),arguments)},filter:function(t){return Ot(this,Y(xt(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return J(xt(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return Z(xt(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){H(xt(this),t,arguments.length>1?arguments[1]:void 0);},indexOf:function(t){return Q(xt(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return X(xt(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return at.apply(xt(this),arguments)},lastIndexOf:function(t){return rt.apply(xt(this),arguments)},map:function(t){return vt(xt(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return ot.apply(xt(this),arguments)},reduceRight:function(t){return it.apply(xt(this),arguments)},reverse:function(){for(var t,e=xt(this).length,n=Math.floor(e/2),r=0;r<n;)t=this[r],this[r++]=this[--e],this[e]=t;return this},some:function(t){return q(xt(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return st.call(xt(this),t)},subarray:function(t,e){var n=xt(this),r=n.length,o=h(t,r);return new(T(n,n[ht]))(n.buffer,n.byteOffset+o*n.BYTES_PER_ELEMENT,p((void 0===e?r:h(e,r))-o))}},Ct=function(t,e){return Ot(this,ct.call(xt(this),t,e))},Rt=function(t){xt(this);var e=Et(arguments[1],1),n=this.length,r=m(t),o=p(r.length),i=0;if(o+e>n)throw G("Wrong length!");for(;i<o;)this[e+i]=r[i++];},kt={entries:function(){return nt.call(xt(this))},keys:function(){return et.call(xt(this))},values:function(){return tt.call(xt(this))}},Nt=function(t,e){return v(t)&&t[gt]&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},Mt=function(t,e){return Nt(t,e=d(e,!0))?c(2,t[e]):F(t,e)},Lt=function(t,e,n){return !(Nt(t,e=d(e,!0))&&v(n)&&g(n,"value"))||g(n,"get")||g(n,"set")||n.configurable||g(n,"writable")&&!n.writable||g(n,"enumerable")&&!n.enumerable?D(t,e,n):(t[e]=n.value,t)};dt||(L.f=Mt,M.f=Lt),r(r.S+r.F*!dt,"Object",{getOwnPropertyDescriptor:Mt,defineProperty:Lt}),n(function(){ut.call({});})&&(ut=lt=function(){return at.call(this)});var Dt=l({},At);l(Dt,kt),u(Dt,ft,kt.values),l(Dt,{slice:Ct,set:Rt,constructor:function(){},toString:ut,toLocaleString:It}),$t(Dt,"buffer","b"),$t(Dt,"byteOffset","o"),$t(Dt,"byteLength","l"),$t(Dt,"length","e"),D(Dt,pt,{get:function(){return this[gt]}}),t.exports=function(t,i,a,c){var l=t+((c=!!c)?"Clamped":"")+"Array",f="get"+t,h="set"+t,d=e[l],g=d||{},m=d&&x(d),b=!d||!o.ABV,O={},w=d&&d.prototype,$=function(t,e){D(t,e,{get:function(){return function(t,e){var n=t._d;return n.v[f](e*i+n.o,mt)}(this,e)},set:function(t){return function(t,e,n){var r=t._d;c&&(n=(n=Math.round(n))<0?0:n>255?255:255&n),r.v[h](e*i+r.o,n,mt);}(this,e,t)},enumerable:!0});};b?(d=a(function(t,e,n,r){s(t,d,l,"_d");var o,a,c,f,h=0,g=0;if(v(e)){if(!(e instanceof W||"ArrayBuffer"==(f=y(e))||"SharedArrayBuffer"==f))return gt in e?wt(d,e):Pt.call(d,e);o=e,g=Et(n,i);var m=e.byteLength;if(void 0===r){if(m%i)throw G("Wrong length!");if((a=m-g)<0)throw G("Wrong length!")}else if((a=p(r)*i)+g>m)throw G("Wrong length!");c=a/i;}else c=_(e),o=new W(a=c*i);for(u(t,"_d",{b:o,o:g,l:a,e:c,v:new K(o)});h<c;)$(t,h++);}),w=d.prototype=E(Dt),u(w,"constructor",d)):n(function(){d(1);})&&n(function(){new d(-1);})&&C(function(t){new d,new d(null),new d(1.5),new d(t);},!0)||(d=a(function(t,e,n,r){var o;return s(t,d,l),v(e)?e instanceof W||"ArrayBuffer"==(o=y(e))||"SharedArrayBuffer"==o?void 0!==r?new g(e,Et(n,i),r):void 0!==n?new g(e,Et(n,i)):new g(e):gt in e?wt(d,e):Pt.call(d,e):new g(_(e))}),H(m!==Function.prototype?S(g).concat(S(m)):S(g),function(t){t in d||u(d,t,g[t]);}),d.prototype=w,w.constructor=d);var P=w[ft],j=!!P&&("values"==P.name||null==P.name),T=kt.values;u(d,_t,!0),u(w,gt,l),u(w,yt,!0),u(w,ht,d),(c?new d(1)[pt]==l:pt in w)||D(w,pt,{get:function(){return l}}),O[l]=d,r(r.G+r.W+r.F*(d!=g),O),r(r.S,l,{BYTES_PER_ELEMENT:i}),r(r.S+r.F*n(function(){g.of.call(d,1);}),l,{from:Pt,of:jt}),"BYTES_PER_ELEMENT"in w||u(w,"BYTES_PER_ELEMENT",i),r(r.P,l,At),R(l),r(r.P+r.F*bt,l,{set:Rt}),r(r.P+r.F*!j,l,kt),w.toString!=ut&&(w.toString=ut),r(r.P+r.F*n(function(){new d(1).slice();}),l,{slice:Ct}),r(r.P+r.F*(n(function(){return [1,2].toLocaleString()!=new d([1,2]).toLocaleString()})||!n(function(){w.toLocaleString.call([1,2]);})),l,{toLocaleString:It}),A[l]=j?P:T,j||u(w,ft,T);};}else t.exports=function(){};});_typedArray("Int8",1,function(t){return function(e,n,r){return t(this,e,n,r)}}),_typedArray("Uint8",1,function(t){return function(e,n,r){return t(this,e,n,r)}}),_typedArray("Uint8",1,function(t){return function(e,n,r){return t(this,e,n,r)}},!0),_typedArray("Int16",2,function(t){return function(e,n,r){return t(this,e,n,r)}}),_typedArray("Uint16",2,function(t){return function(e,n,r){return t(this,e,n,r)}}),_typedArray("Int32",4,function(t){return function(e,n,r){return t(this,e,n,r)}}),_typedArray("Uint32",4,function(t){return function(e,n,r){return t(this,e,n,r)}}),_typedArray("Float32",4,function(t){return function(e,n,r){return t(this,e,n,r)}}),_typedArray("Float64",8,function(t){return function(e,n,r){return t(this,e,n,r)}});var getWeak=_meta.getWeak,arrayFind=_arrayMethods(5),arrayFindIndex=_arrayMethods(6),id$1=0,uncaughtFrozenStore=function(t){return t._l||(t._l=new UncaughtFrozenStore)},UncaughtFrozenStore=function(){this.a=[];},findUncaughtFrozen=function(t,e){return arrayFind(t.a,function(t){return t[0]===e})};UncaughtFrozenStore.prototype={get:function(t){var e=findUncaughtFrozen(this,t);if(e)return e[1]},has:function(t){return !!findUncaughtFrozen(this,t)},set:function(t,e){var n=findUncaughtFrozen(this,t);n?n[1]=e:this.a.push([t,e]);},delete:function(t){var e=arrayFindIndex(this.a,function(e){return e[0]===t});return ~e&&this.a.splice(e,1),!!~e}};var _collectionWeak={getConstructor:function(t,e,n,r){var o=t(function(t,i){_anInstance(t,o,e,"_i"),t._t=e,t._i=id$1++,t._l=void 0,null!=i&&_forOf(i,n,t[r],t);});return _redefineAll(o.prototype,{delete:function(t){if(!_isObject(t))return !1;var n=getWeak(t);return !0===n?uncaughtFrozenStore(_validateCollection(this,e)).delete(t):n&&_has(n,this._i)&&delete n[this._i]},has:function(t){if(!_isObject(t))return !1;var n=getWeak(t);return !0===n?uncaughtFrozenStore(_validateCollection(this,e)).has(t):n&&_has(n,this._i)}}),o},def:function(t,e,n){var r=getWeak(_anObject(e),!0);return !0===r?uncaughtFrozenStore(t).set(e,n):r[t._i]=n,t},ufstore:uncaughtFrozenStore},es6_weakMap=createCommonjsModule(function(t){var e,n=_arrayMethods(0),r=_meta.getWeak,o=Object.isExtensible,i=_collectionWeak.ufstore,a={},s=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},c={get:function(t){if(_isObject(t)){var e=r(t);return !0===e?i(_validateCollection(this,"WeakMap")).get(t):e?e[this._i]:void 0}},set:function(t,e){return _collectionWeak.def(_validateCollection(this,"WeakMap"),t,e)}},u=t.exports=_collection("WeakMap",s,c,_collectionWeak,!0,!0);_fails(function(){return 7!=(new u).set((Object.freeze||Object)(a),7).get(a)})&&(e=_collectionWeak.getConstructor(s,"WeakMap"),_objectAssign(e.prototype,c),_meta.NEED=!0,n(["delete","has","get","set"],function(t){var n=u.prototype,r=n[t];_redefine(n,t,function(n,i){if(_isObject(n)&&!o(n)){this._f||(this._f=new e);var a=this._f[t](n,i);return "set"==t?this:a}return r.call(this,n,i)});}));}),WEAK_SET="WeakSet";_collection(WEAK_SET,function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return _collectionWeak.def(_validateCollection(this,WEAK_SET),t,!0)}},_collectionWeak,!1,!0);var slice=[].slice,MSIE=/MSIE .\./.test(_userAgent),wrap$1=function(t){return function(e,n){var r=arguments.length>2,o=!!r&&slice.call(arguments,2);return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,o);}:e,n)}};_export(_export.G+_export.B+_export.F*MSIE,{setTimeout:wrap$1(_global.setTimeout),setInterval:wrap$1(_global.setInterval)}),_export(_export.G+_export.B,{setImmediate:_task.set,clearImmediate:_task.clear});for(var ITERATOR$4=_wks("iterator"),TO_STRING_TAG=_wks("toStringTag"),ArrayValues=_iterators.Array,DOMIterables={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},collections=_objectKeys(DOMIterables),i$2=0;i$2<collections.length;i$2++){var key$1,NAME$1=collections[i$2],explicit=DOMIterables[NAME$1],Collection=_global[NAME$1],proto$3=Collection&&Collection.prototype;if(proto$3&&(proto$3[ITERATOR$4]||_hide(proto$3,ITERATOR$4,ArrayValues),proto$3[TO_STRING_TAG]||_hide(proto$3,TO_STRING_TAG,NAME$1),_iterators[NAME$1]=ArrayValues,explicit))for(key$1 in es6_array_iterator)proto$3[key$1]||_redefine(proto$3,key$1,es6_array_iterator[key$1],!0);}var runtime=createCommonjsModule(function(t){!function(e){var n,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u=e.regeneratorRuntime;if(u)t.exports=u;else{(u=e.regeneratorRuntime=t.exports).wrap=m;var l="suspendedStart",f="suspendedYield",p="executing",_="completed",h={},d={};d[a]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(I([])));y&&y!==r&&o.call(y,a)&&(d=y);var v=S.prototype=E.prototype=Object.create(d);x.prototype=v.constructor=S,S.constructor=x,S[c]=x.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return !!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(v),t},u.awrap=function(t){return {__await:t}},O(w.prototype),w.prototype[s]=function(){return this},u.AsyncIterator=w,u.async=function(t,e,n,r){var o=new w(m(t,e,n,r));return u.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},O(v),v[c]="Generator",v[a]=function(){return this},v.toString=function(){return "[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=I,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n);},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return "break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n);}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),h}};}function m(t,e,n,r){var o=e&&e.prototype instanceof E?e:E,i=Object.create(o.prototype),a=new T(r||[]);return i._invoke=function(t,e,n){var r=l;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===_){if("throw"===o)throw i;return A()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=$(a,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=_,n.arg;n.dispatchException(n.arg);}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=b(t,e,n);if("normal"===c.type){if(r=n.done?_:f,c.arg===h)continue;return {value:c.arg,done:n.done}}"throw"===c.type&&(r=_,n.method="throw",n.arg=c.arg);}}}(t,n,a),i}function b(t,e,n){try{return {type:"normal",arg:t.call(e,n)}}catch(t){return {type:"throw",arg:t}}}function E(){}function x(){}function S(){}function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)};});}function w(t){var e;this._invoke=function(n,r){function i(){return new Promise(function(e,i){!function e(n,r,i,a){var s=b(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a);},function(t){e("throw",t,i,a);}):Promise.resolve(u).then(function(t){c.value=t,i(c);},a)}a(s.arg);}(n,r,e,i);})}return e=e?e.then(i,i):i()};}function $(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,$(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method");}return h}var o=b(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e);}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e;}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0);}function I(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return {next:A}}function A(){return {value:n,done:!0}}}(function(){return this}()||Function("return this")());});function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e);}function _getPrototypeOf(t){return (_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _setPrototypeOf(t,e){return (_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _possibleConstructorReturn(t,e){return !e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}var Debugger=function(){function t(){_classCallCheck(this,t);}return _createClass(t,null,[{key:"minLevel",value:function(e){t.initParams(),"number"!=typeof e?(e=e.toUpperCase(),t.isValidLevelName(e)?window[t.paramKey].minLevel=t.LEVEL[e]:window[t.paramKey].minLevel=t.LEVEL.GENERAL):window[t.paramKey].minLevel=e;}},{key:"initParams",value:function(){window[t.paramKey]||(window[t.paramKey]={emitEnabled:!1,enabled:!0,minLevel:1});}},{key:"emit",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Debugger";t.initParams(),t.params.emitEnabled&&window.dispatchEvent(new Event(e));}},{key:"meetsLevelRequirement",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"GENERAL";return t.initParams(),!!(t.isValidLevelName(e)&&t.LEVEL[e]>=t.params.minLevel)}},{key:"log",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"log";if(t.initParams(),t.isEnabled()){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];switch(e.toLowerCase()){case"info":var i;return !!t.meetsLevelRequirement("INFO")&&((i=console).info.apply(i,r),t.emit(),!0);case"debug":var a;return !!t.meetsLevelRequirement("DEBUG")&&((a=console).debug.apply(a,r),t.emit(),!0);case"error":var s;return !!t.meetsLevelRequirement("ERROR")&&((s=console).error.apply(s,r),t.emit(),!0);case"warn":var c;return !!t.meetsLevelRequirement("WARN")&&((c=console).warn.apply(c,r),t.emit(),!0);case"log":case"general":default:var u;return !!t.meetsLevelRequirement("GENERAL")&&((u=console).log.apply(u,r),t.emit(),!0)}}}},{key:"isValidLevelName",value:function(e){return t.initParams(),"GENERAL"==e||"DEBUG"==e||"INFO"==e||"WARN"==e||"ERROR"==e}},{key:"assert",value:function(e){if(t.initParams(),!e)throw"Assert Error: ".concat(e)}},{key:"isEnabled",value:function(){return window[t.paramKey].enabled}},{key:"enable",value:function(e){t.initParams(),window[t.paramKey].enabled=e;}},{key:"params",get:function(){return t.initParams(),window[t.paramKey]}},{key:"LEVEL",get:function(){return {GENERAL:1,DEBUG:2,INFO:3,WARN:4,ERROR:5}}},{key:"paramKey",get:function(){return "__spring_roll_debugger_params__"}}]),t}(),isIE11=!!window.MSInputMethodContext&&!!document.documentMode;class BellhopEventDispatcher{constructor(){this._listeners={};}on(t,e,n=0){this._listeners[t]||(this._listeners[t]=[]),e._priority=parseInt(n)||0,-1===this._listeners[t].indexOf(e)&&(this._listeners[t].push(e),this._listeners[t].length>1&&this._listeners[t].sort(this.listenerSorter));}listenerSorter(t,e){return t._priority-e._priority}off(t,e){if(void 0===this._listeners[t])return;if(void 0===e)return void delete this._listeners[t];const n=this._listeners[t].indexOf(e);-1<n&&this._listeners[t].splice(n,1);}trigger(t,e={}){if("string"==typeof t&&(t={type:t,data:"object"==typeof e&&null!==e?e:{}}),void 0!==this._listeners[t.type])for(let e=this._listeners[t.type].length-1;e>=0;e--)this._listeners[t.type][e](t);}destroy(){this._listeners={};}}class Bellhop extends BellhopEventDispatcher{constructor(t=100*Math.random()|0){super(),this.id=`BELLHOP:${t}`,this.connected=!1,this.isChild=!0,this.connecting=!1,this.origin="*",this._sendLater=[],this.iframe=null;}receive(t){if(this.target===t.source)if("connected"===t.data)this.onConnectionReceived(t.data);else{let e=t.data;if("string"==typeof e)try{e=JSON.parse(e);}catch(t){console.error("Bellhop error: ",t);}this.connected&&"object"==typeof e&&e.type&&this.trigger(e);}}onConnectionReceived(t){this.connecting=!1,this.connected=!0,this.trigger("connected"),this.isChild||this.target.postMessage(t,this.origin);for(let t=0,e=this._sendLater.length;t<e;t++){const{type:e,data:n}=this._sendLater[t];this.send(e,n);}this._sendLater.length=0;}connect(t,e="*"){this.connecting||(this.disconnect(),this.connecting=!0,t instanceof HTMLIFrameElement&&(this.iframe=t),this.isChild=void 0===t,this.supported=!0,this.isChild&&(this.supported=window!=t),this.origin=e,window.addEventListener("message",this.receive.bind(this)),this.isChild&&(window===this.target?this.trigger("failed"):this.target.postMessage("connected",this.origin)));}disconnect(){this.connected=!1,this.connecting=!1,this.origin=null,this.iframe=null,this.isChild=!0,this._sendLater.length=0,window.removeEventListener("message",this.receive);}send(t,e={}){if("string"!=typeof t)throw"The event type must be a string";const n={type:t,data:e};this.connecting?this._sendLater.push(n):this.target.postMessage(JSON.stringify(n),this.origin);}fetch(t,e,n={},r=!1){if(!this.connecting&&!this.connected)throw"No connection, please call connect() first";const o=t=>{r&&this.off(t.type,o),e(t);};this.on(t,o),this.send(t,n);}respond(t,e={},n=!1){const r=o=>{n&&this.off(o.type,r),this.send(t,e);};this.on(t,r);}destroy(){super.destroy(),this.disconnect(),this._sendLater.length=0;}get target(){return this.isChild?window.parent:this.iframe.contentWindow}}var BellhopSingleton=new Bellhop,IdleTimer=function(){function t(){_classCallCheck(this,t),this.listeners=[];}return _createClass(t,[{key:"start",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:15e3;t?(this.length=t,this.timer=setTimeout(this.dispatch.bind(this),t)):Debugger.log("warn","[IdleTimer.start()] must specify a time!");}},{key:"reset",value:function(){this.timer?(clearTimeout(this.timer),this.timer=setTimeout(this.dispatch.bind(this),this.length)):Debugger.log("warn","[IdleTimer.reset()] timer has not been started");}},{key:"stop",value:function(){this.timer?(clearTimeout(this.timer),this.timer=null):Debugger.log("warn","[IdleTimer.reset()] timer has not been started");}},{key:"dispatch",value:function(){var t=this;this.listeners.forEach(function(e){e(t._value);}),this.reset();}},{key:"subscribe",value:function(t){this.listeners.push(t);}},{key:"unsubscribe",value:function(t){this.listeners=this.listeners.filter(function(e){return e!==t});}}]),t}(),IHintPlayer=function t(){_classCallCheck(this,t),"function"!=typeof this.play&&console.error('Springroll Hint Player not implemented correctly. Please ensure you have a "play" function in your class.');},HintSequencePlayer=function(t){function e(){var t;return _classCallCheck(this,e),(t=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this))).hints=[],t.index=0,t}return _inherits(e,IHintPlayer),_createClass(e,[{key:"play",value:function(){0!=this.hints.length?(this.index>=this.hints.length&&(this.index=0),this.hints[this.index](),this.index++):Debugger.log("warn","[HintSequencePlayer.play()] No hints?!");}},{key:"clear",value:function(){this.index=0,this.hints.length=0;}},{key:"add",value:function(){for(var t=arguments.length,e=0;e<t;e++)this.hints.push(e<0||arguments.length<=e?void 0:arguments[e]);}},{key:"remove",value:function(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];for(var o=n.length,i=function(e){t.hints=t.hints.filter(function(t){return t!==n[e]});},a=0;a<o;a++)i(a);}}]),e}(),Property=function(){function t(e){_classCallCheck(this,t),this._value=e,this.listeners=[];}return _createClass(t,[{key:"subscribe",value:function(t){this.listeners.push(t);}},{key:"unsubscribe",value:function(t){this.listeners=this.listeners.filter(function(e){return e!==t});}},{key:"value",get:function(){return this._value},set:function(t){var e=this,n=this._value;this._value=t,this.listeners.forEach(function(t){t(e._value,n);});}},{key:"hasListeners",get:function(){return this.listeners.length>0}}]),t}(),onReturn=Symbol("onReturn"),READ="userDataRead",WRITE="userDataWrite",DELETE="userDataRemove",UserData=function(){function t(){_classCallCheck(this,t);}return _createClass(t,null,[{key:onReturn,value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3;return new Promise(function(r,o){var i=!1,a=0,s=function e(n){BellhopSingleton.off(t,e),i=!0,r(n);};BellhopSingleton.on(t,s),BellhopSingleton.send(t,e);var c=setInterval(function(){i?clearInterval(c):(a>=n&&(clearInterval(c),BellhopSingleton.off(t,s),o("No Response")),a++);},100);})}},{key:"read",value:function(t){var e="Could not complete read action for ".concat(t,". Bellhop is not connected.");return BellhopSingleton.connected?this[onReturn](READ,{}):new Promise(function(t,n){return n(e)})}},{key:"write",value:function(t,e){var n="Could not complete write action for ".concat(t," with value ").concat(e,". Bellhop is not connected.");return BellhopSingleton.connected?this[onReturn](WRITE,{name:t,value:e}):new Promise(function(t,e){return e(n)})}},{key:"delete",value:function(t){var e="Could not complete delete action for ".concat(t,". Bellhop is not connected.");BellhopSingleton.connected?BellhopSingleton.send(DELETE,{name:t}):console.warn(e);}}]),t}(),ScaleManager=function(){function t(e){_classCallCheck(this,t),this.width=1,this.height=1,this.callback=e,this.onResize=this.onResize.bind(this),e instanceof Function&&this.enable(e);}return _createClass(t,[{key:"onResize",value:function(t){var e=this,n=function(){var n=t.target.innerWidth,r=t.target.innerHeight;e.callback({width:n,height:r,ratio:n/r}),e.width=n,e.height=r;};n(),setTimeout(n,500);}},{key:"enable",value:function(t){t instanceof Function?(this.callback=t,window.addEventListener("resize",this.onResize)):console.warn("Scale Manager was not passed a function");}},{key:"disable",value:function(){window.removeEventListener("resize",this.onResize);}}]),t}(),SpeechSynth=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.voice,r=void 0===n?0:n,o=e.rate,i=void 0===o?1:o,a=e.pitch,s=void 0===a?0:a,c=e.volume,u=void 0===c?1:c;if(_classCallCheck(this,t),window.speechSynthesis){this.voiceOptions=[],this.voicesLoaded=!1,this.queue=[],this.options={voice:{},rate:i,pitch:s,volume:u};var l=function(){this.voiceOptions=window.speechSynthesis.getVoices(),this.voice=this.setVoice(r),this.voicesLoaded=!0;}.bind(this),f=window.speechSynthesis.getVoices();Array.isArray(f)&&0<f.length?l():window.speechSynthesis.addEventListener("voiceschanged",l,{once:!0});}else console.error("Springroll SpeechSynth is not supported on on this Device");}return _createClass(t,[{key:"pause",value:function(){this.speaking=!1,window.speechSynthesis.pause();}},{key:"resume",value:function(){this.speaking=!0,window.speechSynthesis.resume();}},{key:"cancel",value:function(){this.speaking=!1,this.pause(),this.queue.length=0,window.speechSynthesis.cancel();}},{key:"say",value:function(t){var e=this;if(!this.speaking&&this.voicesLoaded){this.speaking=!0;var n=new SpeechSynthesisUtterance(t);Object.assign(n,this.options),n.onend=function(){e.speaking=!1,0<e.queue.length&&e.say(e.queue.shift());},window.speechSynthesis.speak(n);}else this.queue.push(t);}},{key:"rangeLimit",value:function(t,e,n){return isNaN(n)?(console.warn("'".concat(n,"' is not a valid number!")),t):n>=e?e:t>=n?t:n}},{key:"setVoice",value:function(t){this.options.voice=this.voiceOptions[t];}},{key:"getVoice",value:function(){return this.options.voice}},{key:"rate",set:function(t){this.options.rate=this.rangeLimit(.1,10,t);},get:function(){return this.options.rate}},{key:"pitch",set:function(t){this.options.pitch=this.rangeLimit(0,2,t);},get:function(){return this.options.pitch}},{key:"volume",set:function(t){this.options.volume=this.rangeLimit(0,1,t);},get:function(){return this.options.volume}}]),t}(),ColorFilter=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(_classCallCheck(this,t),isIE11)console.error("Springroll ColorFilter is not supported on IE11");else{if(this.element=null,null===document.getElementById("color__filter__svg")){var r=document.createElement("div");r.style.width="0",r.style.height="0",r.style.position="absolute",r.style.opacity="0",r.innerHTML+='<svg id="color__filter__svg" style="width: 0; height: 0; position: absolute;" xmlns="http://www.w3.org/2000/svg"\n      version="1.1">\n      <defs>\n        <filter id="color__filter__protanopia">\n          <feColorMatrix\n            in="SourceGraphic"\n            type="matrix"\n            values="0.567, 0.433, 0,     0, 0\n                    0.558, 0.442, 0,     0, 0\n                    0,     0.242, 0.758, 0, 0\n                    0,     0,     0,     1, 0"/>\n        </filter>\n        <filter id="color__filter__protanomaly">\n          <feColorMatrix\n            in="SourceGraphic"\n            type="matrix"\n            values="0.817, 0.183, 0,     0, 0\n                    0.333, 0.667, 0,     0, 0\n                    0,     0.125, 0.875, 0, 0\n                    0,     0,     0,     1, 0"/>\n        </filter>\n        <filter id="color__filter__deuteranopia">\n          <feColorMatrix\n            in="SourceGraphic"\n            type="matrix"\n            values="0.625, 0.375, 0,   0, 0\n                    0.7,   0.3,   0,   0, 0\n                    0,     0.3,   0.7, 0, 0\n                    0,     0,     0,   1, 0"/>\n        </filter>\n        <filter id="color__filter__deuteranomaly">\n          <feColorMatrix\n            in="SourceGraphic"\n            type="matrix"\n            values="0.8,   0.2,   0,     0, 0\n                    0.258, 0.742, 0,     0, 0\n                    0,     0.142, 0.858, 0, 0\n                    0,     0,     0,     1, 0"/>\n        </filter>\n        <filter id="color__filter__tritanopia">\n          <feColorMatrix\n            in="SourceGraphic"\n            type="matrix"\n            values="0.95, 0.05,  0,     0, 0\n                    0,    0.433, 0.567, 0, 0\n                    0,    0.475, 0.525, 0, 0\n                    0,    0,     0,     1, 0"/>\n        </filter>\n        <filter id="color__filter__tritanomaly">\n          <feColorMatrix\n            in="SourceGraphic"\n            type="matrix"\n            values="0.967, 0.033, 0,     0, 0\n                    0,     0.733, 0.267, 0, 0\n                    0,     0.183, 0.817, 0, 0\n                    0,     0,     0,     1, 0"/>\n        </filter>\n        <filter id="color__filter__achromatopsia">\n          <feColorMatrix\n            in="SourceGraphic"\n            type="matrix"\n            values="0.299, 0.587, 0.114, 0, 0\n                    0.299, 0.587, 0.114, 0, 0\n                    0.299, 0.587, 0.114, 0, 0\n                    0,     0,     0,     1, 0"/>\n        </filter>\n        <filter id="color__filter__achromatomaly">\n          <feColorMatrix\n            in="SourceGraphic"\n            type="matrix"\n            values="0.618, 0.320, 0.062, 0, 0\n                    0.163, 0.775, 0.062, 0, 0\n                    0.163, 0.320, 0.516, 0, 0\n                    0,     0,     0,     1, 0"/>\n        </filter>\n      </defs>\n      </svg>\n      ',document.body.appendChild(r);}e instanceof HTMLElement&&"string"==typeof n&&this.applyFilter(e,n);}}return _createClass(t,[{key:"applyFilter",value:function(t,e){this.element=t,this.changeFilter(e);}},{key:"changeFilter",value:function(t){null!==this.element&&(this.element.style.filter="url(#color__filter__".concat(t,")"));}},{key:"removeFilter",value:function(){this.element.style.filter=null;}},{key:"types",get:function(){return [{name:"Protanopia",value:"protanopia"},{name:"Protanomaly",value:"protanomaly"},{name:"Deuteranopia",value:"deuteranopia"},{name:"Deuteranomaly",value:"deuteranomaly"},{name:"Tritanopia",value:"tritanopia"},{name:"Tritanomaly",value:"tritanomaly"},{name:"Achromatopsia",value:"achromatopsia"},{name:"Achromatomaly",value:"achromatomaly"}]}}]),t}(),Key=function(){function t(e,n,r){_classCallCheck(this,t),this.key=e,this._state=0,this.actions={up:r,down:n};}return _createClass(t,[{key:"updateState",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t<3&&t>-1&&(this._state=t);}},{key:"action",value:function(){1===this.state?this.actions.down():2===this.state&&(this.actions.up(),this.updateState(0));}},{key:"state",get:function(){return this._state}}]),t}(),Controller=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];_classCallCheck(this,t),this.assignButtons(e),window.addEventListener("keydown",this.onKeyDown.bind(this)),window.addEventListener("keyup",this.onKeyUp.bind(this));}return _createClass(t,[{key:"update",value:function(){for(var t=0,e=this.keys.length;t<e;t++)this.buttons[this.keys[t]].action();}},{key:"onKeyDown",value:function(t){this.onKey(t,1);}},{key:"onKeyUp",value:function(t){this.onKey(t,2);}},{key:"assignButtons",value:function(t){this.buttons={},this.keys=[];for(var e=0,n=t.length;e<n;e++)this.keys.push(t[e].key),this.buttons[t[e].key]=new Key(t[e].key,t[e].down,t[e].up);}},{key:"onKey",value:function(t,e){var n=t.key.toLowerCase();this.buttons[n]&&this.buttons[n].updateState(e);}}]),t}(),pause="pause",captionsMuted="captionsMuted",soundVolume="soundVolume",musicVolume="musicVolume",voVolume="voVolume",sfxVolume="sfxVolume",playHelp="playHelp",Application=function(){function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.features,o=n.hintPlayer,i=void 0===o?new HintSequencePlayer:o;_classCallCheck(this,t),this.state={ready:new Property(!1),pause:new Property(!1),captionsMuted:new Property(!0),playOptions:new Property({}),soundVolume:new Property(1),musicVolume:new Property(1),voVolume:new Property(1),sfxVolume:new Property(1)},this.features=Object.assign({captions:!1,sound:!1,vo:!1,music:!1,sfx:!1,soundVolume:!1,musicVolume:!1,voVolume:!1,sfxVolume:!1},r||{}),(this.features.vo||this.features.music||this.features.sfx)&&(this.features.sound=!0),this.container=BellhopSingleton,this.container.connect(),this.container.send("features",this.features),this.container.send("keepFocus",!1),[soundVolume,musicVolume,voVolume,sfxVolume,captionsMuted,pause].forEach(function(t){var n=e.state[t];e.container.on(t,function(t){return n.value=t.data});}),[{mute:"soundMuted",volume:soundVolume},{mute:"musicMuted",volume:musicVolume},{mute:"voMuted",volume:voVolume},{mute:"sfxMuted",volume:sfxVolume}].forEach(function(t){var n=e.state[t.volume];e.container.on(t.mute,function(t){var e=n._previousValue||1;n._previousValue=n.value,n.value=t.data?0:e;});}),window.addEventListener("focus",function(){return e.container.send("focus",!0)}),window.addEventListener("blur",function(){return e.container.send("focus",!1)});var a=/playOptions=[^&$]*/.exec(window.location.search);if(null!==a){var s=a[0],c=decodeURIComponent(s.split("=")[1]);try{this.playOptions=JSON.parse(c);}catch(t){Debugger.log("warn","Failed to parse playOptions from query string:"+t.message);}}this.container.fetch("playOptions",function(t){return e.state.playOptions.value=t.data});var u=t.validatePlugins();if(u.length>0){var l=u.join(". ")+".";throw new Error(l)}t.sortPlugins(),t._plugins.forEach(function(t){return t.setup(e)});var f=Promise.resolve(),p=!0,_=!1,h=void 0;try{for(var d,g=function(){var t=d.value;f=f.then(function(){return t.preload(e)});},y=t._plugins[Symbol.iterator]();!(p=(d=y.next()).done);p=!0)g();}catch(t){_=!0,h=t;}finally{try{p||null==y.return||y.return();}finally{if(_)throw h}}f.catch(function(t){Debugger.log("warn",t);}).then(function(){e.validateListeners();}).catch(function(t){Debugger.log("warn",t);}).then(function(){e.container.send("loaded"),e.state.ready.value=!0;}),this.hints=i,this.container.on(playHelp,function(){e.hints?e.hints.play():Debugger.log("warn","[Springroll] Missing IHintPlayer see: https://github.com/SpringRoll/SpringRoll/tree/v2/src/hints");});}return _createClass(t,[{key:"validateListeners",value:function(){var t=this,e=[],n={captions:captionsMuted,sound:soundVolume,music:musicVolume,vo:voVolume,sfx:sfxVolume};if(Object.keys(n).forEach(function(r){var o=n[r];t.features[r]&&!t.state[o].hasListeners&&e.push(o);}),this.state.pause.hasListeners||e.push("pause"),e.length)throw new Error("Application state is missing required listeners: "+e.join(", ")+".")}}],[{key:"validatePlugins",value:function(){var e=[],n=t._plugins.map(function(t){return t.name});return t._plugins.forEach(function(t){var r=t.name,o=t.required.filter(function(t){return n.indexOf(t)<0}).map(function(t){return '"'.concat(t,'"')});if(0!==o.length){var i='Application plugin "'.concat(r,'" missing required plugins ').concat(o.join(", "));e.push(i);}}),e}},{key:"sortPlugins",value:function(){if(0!==t._plugins.length){var e=t._plugins.map(function(t){return t.name}),n={};t._plugins.forEach(function(t){var r=t.optional.filter(function(n){return -1!==e.indexOf(n)||(Debugger.log("warn",t.name+" missing optional plugin "+n),!1)});n[t.name]={plugin:t,name:t.name,dependencies:[].concat(t.required).concat(r)};});var r=[],o=new Set;if(Object.keys(n).map(function(t){return n[t]}).filter(function(t){return 0===t.dependencies.length}).forEach(function(t){return o.add(t.name)}),0===o.size)throw new Error("Every registered plugin has a dependency!");for(var i=function(){var t=o.values().next().value;o.delete(t),r.push(t),Object.keys(n).forEach(function(e){var i=n[e].dependencies.indexOf(t);i>-1&&n[e].dependencies.splice(i,1),0===n[e].dependencies.length&&-1===r.indexOf(e)&&o.add(e);});};o.size>0;)i();if(Object.keys(n).filter(function(t){return n[t].dependencies.length>0}).length>0)throw new Error("Dependency graph has a cycle");t._plugins=[],r.forEach(function(e){t._plugins.push(n[e].plugin);});}}}]),t}();Application._plugins=[],Application.uses=function(t){Application._plugins.push(t);};var Caption=function(){function t(e){_classCallCheck(this,t),this.lines=e,this.lines.sort(function(t,e){return t.endTime<e.endTime?-1:t.endTime>e.endTime?1:0}),this.reset();}return _createClass(t,[{key:"reset",value:function(){this.time=0,this.lineIndex=0,this.renderer=null;}},{key:"update",value:function(t){var e=this.time+1e3*t;e!==this.time&&(this.updateState(e,this.time),this.time=e);}},{key:"updateState",value:function(t,e){if(!this.isFinished()){for(t>this.lines[this.lineIndex].endTime&&this.renderer.lineEnd();t>this.lines[this.lineIndex].endTime;)if(this.lineIndex++,this.isFinished())return;var n=this.lines[this.lineIndex];t>=n.startTime&&e<n.startTime&&this.renderer.lineBegin(n);}}},{key:"isFinished",value:function(){return this.lineIndex>=this.lines.length}},{key:"start",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{lineBegin:function(){},lineEnd:function(){}};this.reset(),this.renderer=e,this.updateTimeIndex(t),this.updateState(this.time,this.lines[this.lineIndex].startTime-1);}},{key:"updateTimeIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.time=t,!this.isFinished())for(var e=this.lines.length-1;e>-1;e--)if(this.lines[e].startTime<=t){this.lineIndex=e;break}}}]),t}(),TimedLine=function(){function t(e,n,r){_classCallCheck(this,t),this.startTime=e||0,this.endTime=n||0,this.content="",this.setContent(r);}return _createClass(t,[{key:"setContent",value:function(t){this.content=t;}}]),t}(),CaptionFactory=function(){function t(){_classCallCheck(this,t);}return _createClass(t,null,[{key:"createCaptionMap",value:function(t){var e={};for(var n in t){var r=this.createCaption(t[n]);r?e[n]=r:Debugger.log("error","[CaptionFactory.createCaptionMap] failed to create caption:",n);}return e}},{key:"createCaption",value:function(t){for(var e=[],n=0,r=t.length;n<r;n++){var o=this.createLine(t[n]);o&&e.push(o);}if(!(e.length<=0))return new Caption(e);Debugger.log("error","[CaptionFactory.createCaption] captions should not have 0 lines.");}},{key:"createLine",value:function(t){if("number"==typeof t.start)if("number"==typeof t.end)if("string"==typeof t.content){if(""!==t.content)return new TimedLine(t.start,t.end,t.content);Debugger.log("warn","[CaptionFactory.createLine] lineData.content should not be empty","Its recommended to add time to the start of the next line to add delays.");}else Debugger.log("error","[CaptionFactory.createLine] lineData.content must be defined as a string");else Debugger.log("error","[CaptionFactory.createLine] lineData.end must be defined as a number");else Debugger.log("error","[CaptionFactory.createLine] lineData.start must be defined as a number");}}]),t}(),CaptionPlayer=function(){function t(e,n){_classCallCheck(this,t),this.captions=CaptionFactory.createCaptionMap(e),this.renderer=n,this.activeCaption=null;}return _createClass(t,[{key:"update",value:function(t){this.activeCaption&&(this.activeCaption.update(t),this.activeCaption.isFinished()&&this.stop());}},{key:"start",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.stop(),this.activeCaption=this.captions[t],this.activeCaption)return this.renderer.start(n),void this.activeCaption.start(e,this.renderer);Debugger.log("warn","[CaptionPlayer.Start()] caption ".concat(t," not found"));}},{key:"stop",value:function(){this.activeCaption&&this.renderer.stop&&this.renderer.stop(),this.activeCaption=null;}}]),t}(),IRender=function t(){_classCallCheck(this,t),"function"==typeof this.start&&"function"==typeof this.stop&&"function"==typeof this.lineBegin&&"function"==typeof this.lineEnd||console.error('Springroll Caption Renderer not implemented corrected. Please ensure you have a "start", "end", "lineBegin", and "lineEnd" function in your class.');},DOMRenderer=function(t){function e(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return _classCallCheck(this,e),n=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this)),t instanceof HTMLElement||console.error("Invalid html element provided to renderer"),n.renderTarget=t,n.templateVariables=r,n}return _inherits(e,IRender),_createClass(e,[{key:"start",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.renderTarget.style.visibility="visible",this.templateVariables=t;}},{key:"stop",value:function(){this.renderTarget.style.visibility="hidden",this.templateVariables={};}}]),e}();function TemplateRenderer(t,e){return t.replace(/{{([a-zA-Z][A-Za-z0-9]*)}}/g,function(t,n){return e[n]||t})}var HtmlRenderer=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,DOMRenderer),_createClass(e,[{key:"lineBegin",value:function(t){this.renderTarget.innerHTML=TemplateRenderer(t.content,this.templateVariables);}},{key:"lineEnd",value:function(){this.renderTarget.innerHTML="";}}]),e}(),TextRenderer=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,DOMRenderer),_createClass(e,[{key:"lineBegin",value:function(t){this.renderTarget.innerText=this.sanitize(TemplateRenderer(t.content,this.templateVariables));}},{key:"lineEnd",value:function(){this.renderTarget.textContent="";}},{key:"sanitize",value:function(t){var e=document.createElement("div");return e.innerHTML=t,e.textContent||e.innerText||""}}]),e}(),Localizer=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};_classCallCheck(this,t),this.locales=e.locales,this.setPrimaryLocale(n.language||this.getBrowsersLocaleKey()||e.default),this.setFallbackLocale(n.fallback||e.default);}return _createClass(t,[{key:"resolve",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.language?this.getLocaleKey(e.language):this.primaryLanguage,r=this.getLocaleKey(e.fallback)||this.fallbackLanguage,o=this.locales[n],i=this.locales[r];return o?{path:o.path+t,language:n}:i?{path:i.path+t,language:r}:void 0}},{key:"setPrimaryLocale",value:function(t){var e=this.getLocaleKey(t);return !!e&&(this.primaryLanguage=e,!0)}},{key:"setFallbackLocale",value:function(t){var e=this.getLocaleKey(t);return !!e&&(this.fallbackLanguage=e,!0)}},{key:"getLocaleKey",value:function(t){if(t){var e=t.toLowerCase();if(this.locales[e])return e;if(e.indexOf("-")>0)return e=e.split("-")[0],this.getLocaleKey(e)}}},{key:"getBrowsersLocaleKey",value:function(){for(var t=this.getBrowserLanguages(),e=0,n=t.length;e<n;e++){var r=this.getLocaleKey(t[e]);if(r)return r}}},{key:"getBrowserLanguages",value:function(){return navigator.languages?navigator.languages:navigator.language?[navigator.language||navigator.userLanguage]:[]}}]),t}(),ApplicationPlugin=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(_classCallCheck(this,t),void 0===e.name)throw new Error("Application plugin not provided a name field");this.name=e.name,this.required=e.required||[],this.optional=e.optional||[];}return _createClass(t,[{key:"setup",value:function(){}},{key:"preload",value:function(){return Promise.resolve()}}]),t}();

/**
 * Manages loading, caching, and unloading of assets
 */
var AssetManager = /** @class */ (function () {
    function AssetManager(soundManager) {
        var _this = this;
        /** object containing references to cached instances of loaded assets */
        this.cache = { data: {}, images: {}, animations: {} };
        /** IDs of cached assets that should persist between scenes */
        this.globalCache = {
            shapes: [],
            textures: [],
            sounds: [],
            data: [],
            animations: []
        };
        /** IDs of loaded Sounds */
        this.soundIDs = [];
        this.sceneActive = false;
        /** Save current state of PIXI Global caches, to prevent unloading global assets */
        this.saveCacheState = function () {
            Object.keys(PIXI.animate.ShapesCache).forEach(function (key) { return _this.globalCache.shapes.push(key); });
            Object.keys(PIXI.utils.TextureCache).forEach(function (key) { return _this.globalCache.textures.push(key); });
        };
        this.soundManager = soundManager;
    }
    /**
     * loads assets for a Scene
     * @param {AssetList} assetList assets to be loaded
     * @param {Function} callback called when all assets in assetList have been loaded
     */
    AssetManager.prototype.loadAssets = function (assetList, callback) {
        var _this = this;
        if (!assetList || !assetList.length) {
            return callback();
        }
        var manifests = [];
        for (var _i = 0, assetList_1 = assetList; _i < assetList_1.length; _i++) {
            var asset = assetList_1[_i];
            if (asset.type === 'manifest') {
                manifests.push(asset);
            }
        }
        if (manifests.length) {
            var loads = [];
            for (var i = 0; i < manifests.length; i++) {
                loads.push(this.loadManifest(manifests[i]));
            }
            Promise.all(loads).then(function (results) {
                //Merge manifests with asset list
                var newList = assetList.slice();
                for (var i = newList.length - 1; i >= 0; i--) {
                    if (newList[i].type === 'manifest') {
                        newList.splice(i, 1);
                    }
                }
                for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                    var result = results_1[_i];
                    newList = newList.concat(result);
                }
                _this.loadAssets(newList, callback);
            });
            return;
        }
        var localList = [];
        var globalList = [];
        for (var _a = 0, assetList_2 = assetList; _a < assetList_2.length; _a++) {
            var asset = assetList_2[_a];
            if ((asset.type === 'animate' && this.globalCache.animations.includes(asset.id)) ||
                (asset.type === 'data' && this.globalCache.data.includes(asset.id)) ||
                (asset.type === 'sound' && this.globalCache.sounds.includes(asset.id)) ||
                (asset.type === 'image' && this.globalCache.textures.includes(asset.id))) {
                console.info('Using global asset: ', asset.id);
                continue;
            }
            asset.isGlobal ? globalList.push(asset) : localList.push(asset);
        }
        if (this.sceneActive && globalList.length) {
            console.error('Mid-Scene loading of global assets is unsupported - move these to preload() or disable global caching of all mid-Scene assets');
        }
        this.sceneActive = true;
        Promise.resolve()
            .then(function () { return _this.executeLoads(globalList); })
            .then(function () { return _this.saveCacheState(); })
            .then(function () { return _this.executeLoads(localList); })
            .then(function () { callback(); });
    };
    /** custom handling for loading different types of assets */
    AssetManager.prototype.executeLoads = function (assetList) {
        var _this = this;
        return new Promise(function (resolve) {
            var loads = [];
            var imageAssets = [];
            for (var _i = 0, assetList_3 = assetList; _i < assetList_3.length; _i++) {
                var asset = assetList_3[_i];
                switch (asset.type) {
                    case 'animate':
                        loads.push(_this.loadAnimate(asset));
                        break;
                    case 'data':
                        loads.push(_this.loadData(asset));
                        break;
                    case 'sound':
                        loads.push(_this.loadSound(asset));
                        break;
                    case 'image':
                        imageAssets.push(asset);
                        break;
                }
            }
            if (imageAssets.length) {
                loads.push(_this.loadImages(imageAssets));
            }
            Promise.all(loads).then(resolve);
        });
    };
    /**
     * unload assets loaded via loadAssets
     * @param {boolean} [includeGlobal = false]  should global caches be cleared?
     */
    AssetManager.prototype.unloadAssets = function (includeGlobal) {
        if (includeGlobal === void 0) { includeGlobal = false; }
        if (includeGlobal) {
            this.globalCache.animations.length = 0;
            this.globalCache.data.length = 0;
            this.globalCache.sounds.length = 0;
            this.globalCache.shapes.length = 0;
            this.globalCache.textures.length = 0;
        }
        for (var id in this.cache.animations) {
            if (!this.globalCache.animations.includes(id)) {
                if (this.cache.animations[id]) {
                    this.cache.animations[id].destroy();
                    delete this.cache.animations[id];
                }
            }
        }
        for (var id in PIXI.utils.TextureCache) {
            if (!this.globalCache.textures.includes(id)) {
                PIXI.utils.TextureCache[id].destroy(true);
                delete this.cache.images[id];
            }
        }
        for (var id in PIXI.animate.ShapesCache) {
            if (!this.globalCache.shapes.includes(id)) {
                PIXI.animate.ShapesCache.remove(id);
            }
        }
        for (var i = this.soundIDs.length - 1; i >= 0; i--) {
            var id = this.soundIDs[i];
            if (!this.globalCache.sounds.includes(id)) {
                this.soundManager.removeSound(id);
                this.soundIDs.splice(i, 1);
            }
        }
        for (var id in PIXI.loader.resources) {
            console.warn('unmanaged resource detected: ', id, PIXI.loader.resources[id]);
        }
        this.sceneActive = false;
    };
    /**
     * load assets for a PixiAnimate stage
     * @param {AnimateStageDescriptor} animateStageDescriptor
     */
    AssetManager.prototype.loadAnimate = function (animateStageDescriptor) {
        var _this = this;
        return new Promise(function (resolve) {
            PIXI.animate.load(animateStageDescriptor.stage, function (movieClip) {
                if (animateStageDescriptor.cacheInstance) {
                    _this.cache.animations[animateStageDescriptor.id] = movieClip;
                }
                if (animateStageDescriptor.isGlobal) {
                    _this.globalCache.animations.push(animateStageDescriptor.id);
                }
                resolve();
            });
        });
    };
    /**
     * Load list of individual image files to PIXI Textures
     * @param {ImageDescriptor[]} assets Array of imnages assets to load
     */
    AssetManager.prototype.loadImages = function (assets) {
        var _this = this;
        var imageLoader = new PIXI.loaders.Loader();
        return new Promise(function (resolve) {
            for (var _i = 0, assets_1 = assets; _i < assets_1.length; _i++) {
                var asset = assets_1[_i];
                imageLoader.add(asset.id, asset.path);
            }
            imageLoader.load(function (loader, resources) {
                for (var _i = 0, _a = Object.keys(resources); _i < _a.length; _i++) {
                    var key = _a[_i];
                    _this.cache.images[key] = resources[key].texture;
                }
                imageLoader.destroy();
                resolve();
            });
        });
    };
    /**
     * Load an audio file to PIXI Sound
     * @param {SoundDescriptor} soundDescriptor
     */
    AssetManager.prototype.loadSound = function (soundDescriptor) {
        var _this = this;
        return new Promise(function (resolve) {
            var soundOptions = { url: soundDescriptor.path, preload: soundDescriptor.preload !== false };
            if (soundDescriptor.volume !== undefined && typeof soundDescriptor.volume === 'number') {
                soundOptions.volume = soundDescriptor.volume;
            }
            if (soundOptions.preload) {
                soundOptions.loaded = function () { resolve(); };
            }
            _this.soundManager.addSound(PIXI.sound.add(soundDescriptor.id, soundOptions), soundDescriptor);
            _this.soundIDs.push(soundDescriptor.id);
            if (soundDescriptor.isGlobal) {
                _this.globalCache.sounds.push(soundDescriptor.id);
            }
            if (!soundOptions.preload) {
                resolve();
            }
        });
    };
    /**
     * Load JSON data
     * @param {DataDescriptor} dataDescriptor
     */
    AssetManager.prototype.loadData = function (dataDescriptor) {
        var _this = this;
        return new Promise(function (resolve) {
            var request = new XMLHttpRequest();
            request.open('GET', dataDescriptor.path);
            request.onreadystatechange = function () {
                if ((request.status === 200) && (request.readyState === 4)) {
                    _this.cache.data[dataDescriptor.id] = JSON.parse(request.responseText);
                    if (dataDescriptor.isGlobal) {
                        _this.globalCache.data.push(dataDescriptor.id);
                    }
                    resolve();
                }
            };
            request.send();
        });
    };
    /**
     * Load JSON file containing an AssetList
     * @param {ManifestDescriptor} manifestDescriptor
     */
    AssetManager.prototype.loadManifest = function (manifestDescriptor) {
        return new Promise(function (resolve) {
            var request = new XMLHttpRequest();
            request.open('GET', manifestDescriptor.path);
            request.onreadystatechange = function () {
                if ((request.status === 200) && (request.readyState === 4)) {
                    var data = JSON.parse(request.responseText);
                    if (manifestDescriptor.isGlobal) {
                        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                            var entry = data_1[_i];
                            entry.isGlobal = true;
                        }
                    }
                    resolve(data);
                }
            };
            request.send();
        });
    };
    return AssetManager;
}());

var TRANSITION_ID = 'wgbhSpringRollGameTransition';
/**
 * Manages rendering and transitioning between Scenes
 */
var StageManager = /** @class */ (function () {
    function StageManager(game, containerID, width, height) {
        var _this = this;
        this.transitioning = true;
        this.isPaused = false;
        /** Map of Scenes by Scene IDs */
        this.scenes = {};
        this.tweens = [];
        /**
         * Transition to specified scene
         * @param {string} sceneID ID of Scene to transition to
         */
        this.changeScene = function (newScene) {
            var NewScene = _this.scenes[newScene];
            if (!NewScene) {
                throw new Error("No Scene found with ID \"" + newScene + "\"");
            }
            var oldScene = _this._currentScene;
            _this.transitioning = true;
            Promise.resolve()
                .then(function () {
                _this.pixi.stage.addChild(_this.transition);
                _this.transition.stop();
                if (oldScene) {
                    return new Promise(function (resolve) {
                        PIXI.animate.Animator.play(_this.transition, 'cover', resolve);
                    });
                }
            })
                .then(function () {
                PIXI.animate.Animator.play(_this.transition, 'load');
                if (oldScene) {
                    _this.pixi.stage.removeChild(oldScene);
                    oldScene.cleanup();
                    oldScene.destroy({ children: true });
                }
                _this.game.assetManager.unloadAssets();
            })
                .then(function () {
                _this._currentScene = new NewScene(_this.game);
                return new Promise(function (resolve) {
                    _this.game.assetManager.loadAssets(_this._currentScene.preload(), resolve);
                });
            })
                .then(function () {
                _this._currentScene.setup();
                _this.pixi.stage.addChildAt(_this._currentScene, 0);
                return new Promise(function (resolve) {
                    PIXI.animate.Animator.play(_this.transition, 'reveal', resolve);
                });
            })
                .then(function () {
                _this.transitioning = false;
                _this.pixi.stage.removeChild(_this.transition);
                _this._currentScene.start();
            });
        };
        this.game = game;
        this.width = width;
        this.height = height;
        this.pixi = new PIXI.Application({ width: width, height: height, antialias: true, autoResize: true });
        this.pixi.view.style.height = null;
        this.pixi.view.style.width = '100%';
        document.getElementById(containerID).appendChild(this.pixi.view);
        this.pixi.ticker.add(this.update.bind(this));
    }
    StageManager.prototype.addScene = function (id, scene) {
        this.scenes[id] = scene;
    };
    StageManager.prototype.addScenes = function (sceneMap) {
        for (var id in sceneMap) {
            this.scenes[id] = sceneMap[id];
        }
    };
    StageManager.prototype.setTransition = function (stage, callback) {
        var _this = this;
        this.game.assetManager.loadAssets([
            { type: 'animate', stage: stage, id: TRANSITION_ID, isGlobal: true, cacheInstance: true }
        ], function () {
            _this.transition = _this.game.cache.animations[TRANSITION_ID];
            var curtainLabels = [
                'cover',
                'cover_stop',
                'load',
                'load_loop',
                'reveal',
                'reveal_stop'
            ];
            for (var _i = 0, curtainLabels_1 = curtainLabels; _i < curtainLabels_1.length; _i++) {
                var label = curtainLabels_1[_i];
                if (!_this.transition.labelsMap.hasOwnProperty(label)) {
                    console.error('Curtain MovieClip missing label: ', label);
                    return;
                }
            }
            _this.transition.gotoAndStop('cover');
            callback();
        });
    };
    Object.defineProperty(StageManager.prototype, "pause", {
        get: function () {
            return this.isPaused;
        },
        set: function (pause) {
            this.isPaused = pause;
            this._currentScene.pause(pause);
            pause ? this.pixi.ticker.stop() : this.pixi.ticker.start();
        },
        enumerable: true,
        configurable: true
    });
    StageManager.prototype.addTween = function (tween) {
        this.tweens.push(tween);
    };
    StageManager.prototype.update = function (deltaTime) {
        // if the game is paused, or there isn't a scene, we can skip rendering/updates  
        if (this.transitioning || this.isPaused || !this._currentScene) {
            return;
        }
        if (this.tweens.length) {
            for (var i = this.tweens.length - 1; i >= 0; i--) {
                if (this.tweens[i].active) {
                    this.tweens[i].update(deltaTime);
                }
                if (!this.tweens[i].active) {
                    this.tweens.splice(i, 1);
                }
            }
        }
        this._currentScene.update(deltaTime);
    };
    return StageManager;
}());

var SoundContext = /** @class */ (function () {
    function SoundContext() {
        /** Map of Sounds by ID */
        this.sounds = {};
        /** Map of individual Sound volumes by ID */
        this.volumes = {};
        this._globalVolume = 1;
        this._volume = 1;
    }
    Object.defineProperty(SoundContext.prototype, "volume", {
        /** Context-specific volume */
        set: function (volume) {
            this._volume = volume;
            for (var key in this.sounds) {
                this.applyVolume(key);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoundContext.prototype, "globalVolume", {
        /** Volume applied to all contexts */
        set: function (volume) {
            this._globalVolume = volume;
            for (var key in this.sounds) {
                this.applyVolume(key);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @param {PIXI.sound.Sound} sound Sound instance to add
     * @param {string} id ID of sound to add
     * @param {number} volume Number 0-1 of volume for this sound
     */
    SoundContext.prototype.addSound = function (sound, id, volume) {
        if (volume === void 0) { volume = 1; }
        if (this.sounds[id]) {
            console.error('Sound already added with id: ', id);
        }
        this.sounds[id] = sound;
        this.volumes[id] = volume;
        this.applyVolume(id);
    };
    /**
     * Adjust volume of a specific sound by ID
     * @param {string} id ID of sound to set volume on
     * @param {number} volume Number 0-1 to set volume of specified sound
     */
    SoundContext.prototype.applyVolume = function (id, volume) {
        if (volume !== undefined) {
            this.volumes[id] = volume;
        }
        this.sounds[id].volume = this.volumes[id] * this._globalVolume * this._volume;
    };
    /**
     * Destroy sound, remove from context and PIXI Sound cache
     * @param id ID of sound to remove
     */
    SoundContext.prototype.removeSound = function (id) {
        PIXI.sound.remove(id);
        delete this.sounds[id];
        delete this.volumes[id];
    };
    return SoundContext;
}());

/**
 * Manages Sound playback, pausing, resuming, and volume control
 */
var SoundManager = /** @class */ (function () {
    function SoundManager() {
        /** Context for managing SFX sounds */
        this.sfx = new SoundContext();
        /** Context for managing VO sounds */
        this.vo = new SoundContext();
        /** Context for managing music sounds */
        this.music = new SoundContext();
        /** Mapping of which SoundContexts each Sound belongs to, by ID */
        this.soundMeta = {};
    }
    Object.defineProperty(SoundManager.prototype, "volume", {
        /** Global volume of all SoundContexts */
        set: function (volume) {
            this.sfx.globalVolume = volume;
            this.vo.globalVolume = volume;
            this.music.globalVolume = volume;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoundManager.prototype, "sfxVolume", {
        /** Volume of all sounds in SFX context */
        set: function (volume) {
            this.sfx.volume = volume;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoundManager.prototype, "voVolume", {
        /** Volume of all sounds in VO context */
        set: function (volume) {
            this.vo.volume = volume;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoundManager.prototype, "musicVolume", {
        /** Volume of all sounds in Music context */
        set: function (volume) {
            this.music.volume = volume;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Add sound to a SoundManager Context
     * @param {Sound} sound Sound instance to add
     * @param {SoundDescriptor} descriptor Asset load metadata for Sound
     */
    SoundManager.prototype.addSound = function (sound, descriptor) {
        var context = this[descriptor.context || 'sfx'];
        this.soundMeta[descriptor.id] = context;
        context.addSound(sound, descriptor.id, descriptor.volume);
    };
    /**
     * Play sound by ID
     * @param {string} soundID ID of Sound to play
     * @param {PIXI.sound.CompleteCallback} [onComplete] Called when Sound is finished playing
     * @returns {PIXI.sound.IMediaInstance | Promise<PIXI.sound.IMediaInstance>} instace of playing sound (or promise of to-be-played sound if not preloaded)
     */
    SoundManager.prototype.play = function (soundID, onComplete) {
        return this.soundMeta[soundID].sounds[soundID].play(onComplete);
    };
    /** Retrieve reference to Sound instance by ID
     * @param {string} soundID ID of sound to retrieve
     * @returns {PIXI.sound.Sound} Sound instance
     */
    SoundManager.prototype.getSound = function (soundID) {
        return this.soundMeta[soundID].sounds[soundID];
    };
    /**
     * Pause specified Sound by ID - if no ID provided, pause all sounds
     * @param {string} [soundID] ID of sound to pause - if undefined, pause all sounds
     */
    SoundManager.prototype.pause = function (soundID) {
        if (!soundID) {
            PIXI.sound.pauseAll();
        }
        else {
            this.soundMeta[soundID].sounds[soundID].resume();
        }
    };
    /**
     * Resume specified Sound by ID - if no ID provided, resume all sounds
     * @param {string} [soundID] ID of sound to resume - if undefined, resume all sounds
     */
    SoundManager.prototype.resume = function (soundID) {
        if (!soundID) {
            PIXI.sound.resumeAll();
        }
        else {
            this.soundMeta[soundID].sounds[soundID].resume();
        }
    };
    /**
     * Adjust volume of a specific sound by ID
     * @param {string} id ID of sound to set volume on
     * @param {number} volume Number 0-1 to set volume of specified sound
     */
    SoundManager.prototype.setVolume = function (id, volume) {
        this.soundMeta[id].applyVolume(id, volume);
    };
    /**
     * Destroy sound, remove from context and PIXI Sound cache
     * @param id ID of sound to remove
     */
    SoundManager.prototype.removeSound = function (id) {
        var context = this.soundMeta[id];
        context.removeSound(id);
        delete this.soundMeta[id];
    };
    return SoundManager;
}());

/** Base Class for WGBH SpringRoll Games - extend this Class in your project */
var Game = /** @class */ (function () {
    function Game(options) {
        var _this = this;
        /** object for storing global data - accessible from all Scenes */
        this.dataStore = {};
        this.sound = new SoundManager();
        this.assetManager = new AssetManager(this.sound);
        this.cache = this.assetManager.cache;
        this.stageManager = new StageManager(this, options.containerID, options.width, options.height);
        this.app = new Application(options.springRollConfig);
        this.app.state.soundVolume.subscribe(function (volume) {
            _this.sound.volume = volume;
        });
        this.app.state.musicVolume.subscribe(function (volume) {
            _this.sound.musicVolume = volume;
        });
        this.app.state.sfxVolume.subscribe(function (volume) {
            _this.sound.sfxVolume = volume;
        });
        this.app.state.voVolume.subscribe(function (volume) {
            _this.sound.voVolume = volume;
        });
        this.app.state.pause.subscribe(function (pause) {
            pause ? _this.sound.pause() : _this.sound.resume();
            _this.stageManager.pause = pause;
        });
        this.app.state.ready.subscribe(function () {
            _this.stageManager.setTransition(options.transition, _this.gameReady.bind(_this));
        });
    }
    /** called when game is ready to enter first scene - override this function and set first scene here */
    Game.prototype.gameReady = function () {
        //override and set first scene in this function
    };
    Game.prototype.addScene = function (id, scene) {
        this.stageManager.addScene(id, scene);
    };
    Game.prototype.addScenes = function (sceneMap) {
        this.stageManager.addScenes(sceneMap);
    };
    /**
     * Transition to specified scene
     * @param {string} sceneID ID of Scene to transition to
     */
    Game.prototype.changeScene = function (sceneID) {
        this.stageManager.changeScene(sceneID);
    };
    return Game;
}());

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function backInOut(t) {
  var s = 1.70158 * 1.525;
  if ((t *= 2) < 1)
    return 0.5 * (t * t * ((s + 1) * t - s))
  return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2)
}

var backInOut_1 = backInOut;

function backIn(t) {
  var s = 1.70158;
  return t * t * ((s + 1) * t - s)
}

var backIn_1 = backIn;

function backOut(t) {
  var s = 1.70158;
  return --t * t * ((s + 1) * t + s) + 1
}

var backOut_1 = backOut;

function bounceOut(t) {
  var a = 4.0 / 11.0;
  var b = 8.0 / 11.0;
  var c = 9.0 / 10.0;

  var ca = 4356.0 / 361.0;
  var cb = 35442.0 / 1805.0;
  var cc = 16061.0 / 1805.0;

  var t2 = t * t;

  return t < a
    ? 7.5625 * t2
    : t < b
      ? 9.075 * t2 - 9.9 * t + 3.4
      : t < c
        ? ca * t2 - cb * t + cc
        : 10.8 * t * t - 20.52 * t + 10.72
}

var bounceOut_1 = bounceOut;

function bounceInOut(t) {
  return t < 0.5
    ? 0.5 * (1.0 - bounceOut_1(1.0 - t * 2.0))
    : 0.5 * bounceOut_1(t * 2.0 - 1.0) + 0.5
}

var bounceInOut_1 = bounceInOut;

function bounceIn(t) {
  return 1.0 - bounceOut_1(1.0 - t)
}

var bounceIn_1 = bounceIn;

function circInOut(t) {
  if ((t *= 2) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1)
  return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
}

var circInOut_1 = circInOut;

function circIn(t) {
  return 1.0 - Math.sqrt(1.0 - t * t)
}

var circIn_1 = circIn;

function circOut(t) {
  return Math.sqrt(1 - ( --t * t ))
}

var circOut_1 = circOut;

function cubicInOut(t) {
  return t < 0.5
    ? 4.0 * t * t * t
    : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0
}

var cubicInOut_1 = cubicInOut;

function cubicIn(t) {
  return t * t * t
}

var cubicIn_1 = cubicIn;

function cubicOut(t) {
  var f = t - 1.0;
  return f * f * f + 1.0
}

var cubicOut_1 = cubicOut;

function elasticInOut(t) {
  return t < 0.5
    ? 0.5 * Math.sin(+13.0 * Math.PI/2 * 2.0 * t) * Math.pow(2.0, 10.0 * (2.0 * t - 1.0))
    : 0.5 * Math.sin(-13.0 * Math.PI/2 * ((2.0 * t - 1.0) + 1.0)) * Math.pow(2.0, -10.0 * (2.0 * t - 1.0)) + 1.0
}

var elasticInOut_1 = elasticInOut;

function elasticIn(t) {
  return Math.sin(13.0 * t * Math.PI/2) * Math.pow(2.0, 10.0 * (t - 1.0))
}

var elasticIn_1 = elasticIn;

function elasticOut(t) {
  return Math.sin(-13.0 * (t + 1.0) * Math.PI/2) * Math.pow(2.0, -10.0 * t) + 1.0
}

var elasticOut_1 = elasticOut;

function expoInOut(t) {
  return (t === 0.0 || t === 1.0)
    ? t
    : t < 0.5
      ? +0.5 * Math.pow(2.0, (20.0 * t) - 10.0)
      : -0.5 * Math.pow(2.0, 10.0 - (t * 20.0)) + 1.0
}

var expoInOut_1 = expoInOut;

function expoIn(t) {
  return t === 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0))
}

var expoIn_1 = expoIn;

function expoOut(t) {
  return t === 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t)
}

var expoOut_1 = expoOut;

function linear(t) {
  return t
}

var linear_1 = linear;

function quadInOut(t) {
    t /= 0.5;
    if (t < 1) return 0.5*t*t
    t--;
    return -0.5 * (t*(t-2) - 1)
}

var quadInOut_1 = quadInOut;

function quadIn(t) {
  return t * t
}

var quadIn_1 = quadIn;

function quadOut(t) {
  return -t * (t - 2.0)
}

var quadOut_1 = quadOut;

function quarticInOut(t) {
  return t < 0.5
    ? +8.0 * Math.pow(t, 4.0)
    : -8.0 * Math.pow(t - 1.0, 4.0) + 1.0
}

var quartInOut = quarticInOut;

function quarticIn(t) {
  return Math.pow(t, 4.0)
}

var quartIn = quarticIn;

function quarticOut(t) {
  return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0
}

var quartOut = quarticOut;

function qinticInOut(t) {
    if ( ( t *= 2 ) < 1 ) return 0.5 * t * t * t * t * t
    return 0.5 * ( ( t -= 2 ) * t * t * t * t + 2 )
}

var quintInOut = qinticInOut;

function qinticIn(t) {
  return t * t * t * t * t
}

var quintIn = qinticIn;

function qinticOut(t) {
  return --t * t * t * t * t + 1
}

var quintOut = qinticOut;

function sineInOut(t) {
  return -0.5 * (Math.cos(Math.PI*t) - 1)
}

var sineInOut_1 = sineInOut;

function sineIn (t) {
  var v = Math.cos(t * Math.PI * 0.5);
  if (Math.abs(v) < 1e-14) return 1
  else return 1 - v
}

var sineIn_1 = sineIn;

function sineOut(t) {
  return Math.sin(t * Math.PI/2)
}

var sineOut_1 = sineOut;

var eases = {
	'backInOut': backInOut_1,
	'backIn': backIn_1,
	'backOut': backOut_1,
	'bounceInOut': bounceInOut_1,
	'bounceIn': bounceIn_1,
	'bounceOut': bounceOut_1,
	'circInOut': circInOut_1,
	'circIn': circIn_1,
	'circOut': circOut_1,
	'cubicInOut': cubicInOut_1,
	'cubicIn': cubicIn_1,
	'cubicOut': cubicOut_1,
	'elasticInOut': elasticInOut_1,
	'elasticIn': elasticIn_1,
	'elasticOut': elasticOut_1,
	'expoInOut': expoInOut_1,
	'expoIn': expoIn_1,
	'expoOut': expoOut_1,
	'linear': linear_1,
	'quadInOut': quadInOut_1,
	'quadIn': quadIn_1,
	'quadOut': quadOut_1,
	'quartInOut': quartInOut,
	'quartIn': quartIn,
	'quartOut': quartOut,
	'quintInOut': quintInOut,
	'quintIn': quintIn,
	'quintOut': quintOut,
	'sineInOut': sineInOut_1,
	'sineIn': sineIn_1,
	'sineOut': sineOut_1
};

var Tween = /** @class */ (function () {
    function Tween(target, values, time, complete, ease) {
        if (ease === void 0) { ease = 'linear'; }
        this.active = true;
        this.currentTime = 0;
        this.initialValues = {};
        this.paused = false;
        this.target = target;
        this.targetValues = values;
        for (var key in this.targetValues) {
            this.initialValues[key] = this.target[key];
        }
        this.totalTime = time;
        var Eases = eases;
        this.ease = Eases[ease];
        if (!this.ease) {
            console.error("No ease found with name " + ease);
            this.ease = Eases.linear;
        }
        this.onComplete = complete;
    }
    Tween.prototype.pause = function (pause) {
        this.paused = pause;
    };
    Tween.prototype.update = function (deltaTime) {
        if (this.paused) {
            return;
        }
        this.currentTime += deltaTime;
        var time = this.currentTime / this.totalTime > 1 ? 1 : this.currentTime / this.totalTime;
        for (var key in this.targetValues) {
            this.target[key] = this.initialValues[key] + this.ease(time) * (this.targetValues[key] - this.initialValues[key]);
        }
        if (time >= 1) {
            if (this.onComplete) {
                this.onComplete();
            }
            this.destroy();
        }
    };
    Tween.prototype.destroy = function () {
        this.active = null;
        this.target = null;
        this.targetValues = null;
        this.totalTime = null;
        this.ease = null;
        this.onComplete = null;
    };
    return Tween;
}());

/**
 * Generic Scene base class, parent container for all art and functionality in a given scene
 */
var Scene = /** @class */ (function (_super) {
    __extends(Scene, _super);
    function Scene(game) {
        var _this = _super.call(this) || this;
        _this.assetManager = game.assetManager;
        _this.cache = _this.assetManager.cache;
        _this.sound = game.sound;
        _this.stageManager = game.stageManager;
        _this.dataStore = game.dataStore;
        return _this;
    }
    /**
     * provide list of assets to preload
     * @returns {AssetList}
     */
    Scene.prototype.preload = function () {
        return;
    };
    /**
     * Exit this Scene and transition to specified scene
     * @param {string} sceneID ID of Scene to transition to
     */
    Scene.prototype.changeScene = function (sceneID) {
        this.stageManager.changeScene(sceneID);
    };
    /**
     * prepare initial visual state - called after preload is complete, while scene is obscured by loader
     */
    Scene.prototype.setup = function () {
        //override this, called to prepare graphics
    };
    /**
     * entrypoint to scene - called after loader transition is complete
     */
    Scene.prototype.start = function () {
        //override this - called to start scene
    };
    /**
     * pause scene - override this if you need to pause functionality of your scene
     * when the rendering and sound is paused
     * @param paused whether or not the game is being paused (false if being resumed)
     */
    Scene.prototype.pause = function (paused) {
        //override this if you have custom timed functionality that should be paused
        //with the rest of the game
    };
    /**
     * callback for frame ticks
     * @param {number} deltaTime time since last frame in multiples of one frame's length of time.
     */
    Scene.prototype.update = function (deltaTime) {
        //override this to get update ticks
    };
    /**
     * Simple tween target's numeric properties to specified values over time with easinbg
     * @param target object with values to tween
     * @param values numeric end values of tweening target, keyed by target property names
     * @param time number of frames over which to tween target values
     * @param [callback] function to call on completion of tween
     * @param [ease] name of easing curve to apply to tween
     * @returns {Tween} instance of Tween, for pausing/cancelling
     */
    Scene.prototype.tween = function (target, values, time, callback, ease) {
        var tween = new Tween(target, values, time, callback, ease);
        this.stageManager.addTween(tween);
        return tween;
    };
    /**
     * Called when Scene is about to transition out - override to clean up art or other objects in memory
     * @returns {void} return a Promise to resolve when any asynchronous cleanup is complete
     */
    Scene.prototype.cleanup = function () {
        //override this to clean up Scene
    };
    return Scene;
}(PIXI.Container));

/// <reference types="pixi-animate" />

export { Game, Scene, StageManager, AssetManager, SoundManager, SoundContext, Tween };
//# sourceMappingURL=gamelib.js.map
