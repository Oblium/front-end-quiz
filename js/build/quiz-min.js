!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b){b.exports=function(a){return new Promise(function(b,c){var d=new XMLHttpRequest;d.open("GET",a),d.onload=function(){200===d.status?b(d.response):c(Error(d.statusText))},d.onerror=function(){c(Error("Network Error"))},d.send()})}},{}],2:[function(a){function b(){var a,b=30;f=setInterval(function(){a=parseInt(b%30),a=10>a?"0"+a:a,m.innerHTML="00:"+a,b--,0>b&&(clearInterval(f),console.log("time up"),c())},1e3)}function c(){var a="",f=g.length;if(l.innerHTML="",k.innerHTML="",e=Math.floor(Math.random()*f),-1===s.indexOf(e)&&p>q){s.push(e),q++,n.innerHTML=q,l.innerHTML=g[e].question,d=g[e].category;for(var h=i(g[e].answers),m=0;m<h.length;m++)a+='<li><a href="#" class="answer">'+h[m].answer+"</a></li>";k.innerHTML=a,b()}else if(p>q)c();else{var o=parseInt(r.length/p*100,10),t="pass";50>=o&&(t="fail"),j.innerHTML='<div class="results"><h2 class="'+t+'">'+o+"%</h2><p>"+r.length+"/"+p+"</p></div>"}}var d,e,f,g,h=a("./modules/get"),i=a("shuffle-array"),j=document.getElementById("content"),k=document.getElementById("answers"),l=document.getElementById("question"),m=document.getElementById("timer"),n=document.getElementById("current-number"),o=document.getElementById("total-questions"),p=25,q=0,r=[],s=[];o.innerHTML=p,h("questions.json").then(function(a){g=JSON.parse(a),c()},function(a){console.error("Failed!",a)}),document.querySelector("body").addEventListener("click",function(a){if("answer"===a.target.className){a.preventDefault();for(var b=!1,d=g[e].answers,h=0;h<d.length;h++)d[h].answer===a.target.innerHTML&&d[h].value===!0&&(b=!0);b===!0&&r.push(1),clearInterval(f),c()}})},{"./modules/get":1,"shuffle-array":3}],3:[function(a,b){"use strict";function c(a,b){if(!Array.isArray(a))throw new Error("shuffle expect an array as parameter.");b=b||{};var c,d,e=a,f=a.length,g=b.rng||Math.random;for(b.copy===!0&&(e=a.slice());f;)c=Math.floor(g()*f),f-=1,d=e[f],e[f]=e[c],e[c]=d;return e}c.pick=function(a,b){if(!Array.isArray(a))throw new Error("shuffle.pick() expect an array as parameter.");b=b||{};var c=b.rng||Math.random,d=b.picks||1;if("number"==typeof d&&1!==d){for(var e,f=a.length,g=a.slice(),h=[];d;)e=Math.floor(c()*f),h.push(g[e]),g.splice(e,1),f-=1,d-=1;return h}return a[Math.floor(c()*a.length)]},b.exports=c},{}]},{},[2]);