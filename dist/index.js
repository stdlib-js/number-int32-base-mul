"use strict";var v=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var o=v(function(q,n){
var x=typeof Math.imul=="function"?Math.imul:null;n.exports=x
});var p=v(function(O,m){
var c=65535;function b(t,r){var i,l,s,f,e,u;return t|=0,r|=0,s=t>>>16>>>0,f=r>>>16>>>0,e=(t&c)>>>0,u=(r&c)>>>0,i=e*u>>>0,l=s*u+e*f<<16>>>0,i+l|0}m.exports=b
});var h=o(),y=p(),a;typeof h=="function"?a=h:a=y;module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
