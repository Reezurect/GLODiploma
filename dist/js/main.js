(()=>{"use strict";new Swiper(".swiper",{slidesPerView:3,spaceBetween:30,freeMode:!0,slidesPerGroup:3,loop:!0,breakpoints:{0:{slidesPerView:1,spaceBetween:30},576:{slidesPerView:2,spaceBetween:40},1124:{slidesPerView:3,spaceBetween:30}},navigation:{prevEl:".arrow-left",nextEl:".arrow-right"}}),(()=>{const e=document.querySelectorAll(".header-link"),t=document.querySelector("a[href='#services']"),o=document.querySelector(".up"),l=e=>{e.preventDefault();const o=t.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})};o.addEventListener("click",l),t.addEventListener("click",l),e.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const o=e.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})}))})),window.addEventListener("scroll",(e=>{const t=document.documentElement.scrollTop;o.style.display=t<620?"none":"block"}))})(),(()=>{const e=document.querySelector(".modal-overlay"),t=document.querySelector(".modal-callback"),o=document.querySelectorAll(".fancyboxModal");window.addEventListener("click",(l=>{const r=l.target.closest(".fancyboxModal");r&&o.forEach((o=>{o===r&&(e.style.display="block"),t.style.display="block"}))}))})(),(()=>{const e=document.querySelector(".modal-overlay"),t=document.querySelector(".modal-callback");e.addEventListener("click",(o=>{o.target.closest(".modal-overlay")&&(t.style.display="none",e.style.display="none")})),t.addEventListener("click",(o=>{o.target.closest(".modal-close")&&(e.style.display="none",t.style.display="none")}))})(),(()=>{const e=document.querySelectorAll(".item"),t=document.querySelectorAll(".table");let o=0;t[o].classList.add("active"),setTimeout((()=>t[o].classList.remove("active")),2700),setInterval((()=>{e[o].classList.remove("item-active"),setTimeout((()=>t[o].classList.remove("active")),2700),o++,o>=e.length&&(o=0),e[o].classList.add("item-active"),setTimeout((()=>t[o].classList.add("active")),300)}),3e3)})(),(({formId:e},t)=>{const o=document.getElementById(e).querySelector(".tel");function l(e){const o=e.keyCode,l=t,r=l.replace(/\D/g,""),s=this.value.replace(/\D/g,"");let c=0,n=l.replace(/[_\d]/g,(function(e){return c<s.length?s.charAt(c++)||r.charAt(c):e}));c=n.indexOf("_"),-1!=c&&(n=n.slice(0,c));let a=l.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(this.value)||this.value.length<5||o>47&&o<58)&&(this.value=n),"blur"==e.type&&this.value.length<5&&(this.value="")}o.addEventListener("input",l),o.addEventListener("focus",l),o.addEventListener("blur",l)})({formId:"form"},"+7 (____) __ __ __"),(({formId:e})=>{const t=document.getElementById(e),o=document.createElement("div"),l=document.createElement("div"),r=document.createElement("div"),s=t.querySelector(".name"),c=t.querySelector(".tel"),n=document.querySelector(".form-group_1"),a=document.querySelector(".form-group_2");try{if(!t)throw Error("Верните форму");t.addEventListener("submit",(e=>{e.preventDefault(),[s,c].forEach((e=>{""===e.value?(e.classList.add("error"),o.textContent="Заполните все поля",t.append(o)):(e.classList.remove("error"),o.remove())})),(()=>{const e=/[^а-яА-Я]/gi;e.test(s.value)||s.value.length<=2?(s.classList.add("error"),l.textContent="Только кириллица и не меньше 2х символов",n.append(l),s.value=s.value.replace(e,"")):(s.classList.remove("error"),l.remove())})(),18===c.value.length?(c.classList.remove("error"),r.remove()):(r.textContent="Введите корректный номер +7 (****) ** ** **",a.append(r),c.classList.add("error")),(()=>{const e=new FormData(t),l={};var r;o.textContent="Идёт отправка..",t.append(o),e.forEach(((e,t)=>{l[t]=e})),s.classList.contains("error")||c.classList.contains("error")?o.textContent="Данные введены неверно":(r=l,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((e=>{o.textContent="Отправлено...",s.value="",c.value=""})).catch((e=>{o.textContent="Ошибка..."}))})()}))}catch(e){console.log(e.message)}})({formId:"form"}),(()=>{const e=document.querySelector(".accordeon"),t=e.querySelectorAll(".element"),o=e.querySelectorAll(".element-content");e.addEventListener("click",(e=>{const l=e.target.closest(".element");l&&t.forEach(((e,t)=>{l.classList.contains("active")?(e.classList.remove("active"),o[t].style.display="none"):e===l?(o[t].style.display="block",e.classList.add("active")):(e.classList.remove("active"),o[t].style.display="none")}))}))})()})();