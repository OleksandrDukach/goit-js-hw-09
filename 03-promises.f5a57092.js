function e(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();Number(t.target[0].value),Number(t.target[1].value);const o=Number(t.target[2].value);for(let t=0;t<=o;t+=1)e(2,1500).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.f5a57092.js.map
