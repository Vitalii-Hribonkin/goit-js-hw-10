import"./assets/modulepreload-polyfill-B5Qt9EMX.js";let a=null;const t=document.querySelector("button[data-start]"),r=document.querySelector("#datetime-picker"),y=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");let c=null;t.disabled=!0;const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const n=e[0];n<=new Date?(iziToast.error({title:"Error",message:"Please choose a date in the future"}),t.disabled=!0):(a=n,t.disabled=!1)}};flatpickr(r,D);t.addEventListener("click",()=>{a&&(t.disabled=!0,r.disabled=!0,c=setInterval(()=>{const e=a-new Date;e<=0?(clearInterval(c),i(0),r.disabled=!1,t.disabled=!0):i(e)},1e3))});function i(e){const{days:n,hours:s,minutes:d,seconds:u}=q(e);y.textContent=o(n),S.textContent=o(s),p.textContent=o(d),b.textContent=o(u)}function q(e){const l=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:f,seconds:h}}function o(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map