!function(){function e(e,t){return new Promise((function(n,o){setTimeout((function(){Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();Number(t.target[0].value),Number(t.target[1].value);for(var n=Number(t.target[2].value),o=0;o<=n;o+=1)e(2,1500).then((function(e){var t=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}))}))}();
//# sourceMappingURL=03-promises.606d01c3.js.map
