import{S as a,i as t,s,e as r,t as l,j as n,c as i,a as e,b as u,d as c,l as f,o,f as k,g as m,h as g,G as h,H as d,I as v,n as p}from"../chunks/index-a3c99221.js";function b(a,t,s){const r=a.slice();return r[5]=t[s],r[7]=s,r}function j(a,t,s){const r=a.slice();return r[8]=t[s],r[10]=s,r}function x(a){let t,s,n,f,d,v,p=a[8]+"";function b(){return a[4](a[7],a[10])}return{c(){t=r("button"),s=r("div"),n=l(p),this.h()},l(a){t=i(a,"BUTTON",{class:!0});var r=e(t);s=i(r,"DIV",{class:!0});var l=e(s);n=u(l,p),l.forEach(c),r.forEach(c),this.h()},h(){o(s,"class",""),o(t,"class",f="text-left p-2 sm:p-4 flex "+(a[5].answer===a[10]?"bg-black text-white":"bg-white"))},m(a,r){k(a,t,r),m(t,s),m(s,n),d||(v=h(t,"click",b),d=!0)},p(s,r){a=s,1&r&&p!==(p=a[8]+"")&&g(n,p),1&r&&f!==(f="text-left p-2 sm:p-4 flex "+(a[5].answer===a[10]?"bg-black text-white":"bg-white"))&&o(t,"class",f)},d(a){a&&c(t),d=!1,v()}}}function w(a){let t,s,h,v,p,b=a[5].question+"",w=a[5].answers,y=[];for(let r=0;r<w.length;r+=1)y[r]=x(j(a,w,r));return{c(){t=r("div"),s=r("div"),h=l(b),v=n(),p=r("div");for(let a=0;a<y.length;a+=1)y[a].c();this.h()},l(a){t=i(a,"DIV",{class:!0});var r=e(t);s=i(r,"DIV",{class:!0});var l=e(s);h=u(l,b),l.forEach(c),v=f(r),p=i(r,"DIV",{class:!0});var n=e(p);for(let t=0;t<y.length;t+=1)y[t].l(n);n.forEach(c),r.forEach(c),this.h()},h(){o(s,"class","mb-6 text-2xl sm:text-3xl font-black italic"),o(p,"class","grid grid-cols-1 sm:grid-cols-2 gap-1 bg-citrane shadow-lg"),o(t,"class","mb-12")},m(a,r){k(a,t,r),m(t,s),m(s,h),m(t,v),m(t,p);for(let t=0;t<y.length;t+=1)y[t].m(p,null)},p(a,t){if(1&t&&b!==(b=a[5].question+"")&&g(h,b),9&t){let s;for(w=a[5].answers,s=0;s<w.length;s+=1){const r=j(a,w,s);y[s]?y[s].p(r,t):(y[s]=x(r),y[s].c(),y[s].m(p,null))}for(;s<y.length;s+=1)y[s].d(1);y.length=w.length}},d(a){a&&c(t),d(y,a)}}}function y(a){let t,s,r=a[0].length+"";return{c(){t=l(r),s=l(" spurningar")},l(a){t=u(a,r),s=u(a," spurningar")},m(a,r){k(a,t,r),k(a,s,r)},p(a,s){1&s&&r!==(r=a[0].length+"")&&g(t,r)},d(a){a&&c(t),a&&c(s)}}}function E(a){let t,s,r,n=a[0].length+"";return{c(){t=l(a[2]),s=l(" / "),r=l(n)},l(l){t=u(l,a[2]),s=u(l," / "),r=u(l,n)},m(a,l){k(a,t,l),k(a,s,l),k(a,r,l)},p(a,s){4&s&&g(t,a[2]),1&s&&n!==(n=a[0].length+"")&&g(r,n)},d(a){a&&c(t),a&&c(s),a&&c(r)}}}function S(a){let t,s;function n(a,t){return a[1]>=87.5?N:a[1]>=75?A:a[1]>=62.5?P:a[1]>=50?H:a[1]>=37.5?F:a[1]>=25?D:a[1]>=12.5?I:a[1]>=0?V:void 0}let f=n(a),o=f&&f(a);return{c(){t=r("div"),s=l("Þú ert\n          "),o&&o.c()},l(a){t=i(a,"DIV",{});var r=e(t);s=u(r,"Þú ert\n          "),o&&o.l(r),r.forEach(c)},m(a,r){k(a,t,r),m(t,s),o&&o.m(t,null)},p(a,s){f!==(f=n(a))&&(o&&o.d(1),o=f&&f(a),o&&(o.c(),o.m(t,null)))},d(a){a&&c(t),o&&o.d()}}}function V(a){let t;return{c(){t=l("Sótsvartur kapítalisti (Frjálshyggjufélag)")},l(a){t=u(a,"Sótsvartur kapítalisti (Frjálshyggjufélag)")},m(a,s){k(a,t,s)},d(a){a&&c(t)}}}function I(a){let t;return{c(){t=l("Kapítalisti (Sjálfstæðisflokkur, Miðflokkur)")},l(a){t=u(a,"Kapítalisti (Sjálfstæðisflokkur, Miðflokkur)")},m(a,s){k(a,t,s)},d(a){a&&c(t)}}}function D(a){let t;return{c(){t=l("Hægri krati (Viðreisn)")},l(a){t=u(a,"Hægri krati (Viðreisn)")},m(a,s){k(a,t,s)},d(a){a&&c(t)}}}function F(a){let t;return{c(){t=l("Miðju-krati (Framsókn, Píratar, Flokkur fólksins)")},l(a){t=u(a,"Miðju-krati (Framsókn, Píratar, Flokkur fólksins)")},m(a,s){k(a,t,s)},d(a){a&&c(t)}}}function H(a){let t;return{c(){t=l("Miðju-krati (Framsókn, Píratar, Flokkur fólksins)")},l(a){t=u(a,"Miðju-krati (Framsókn, Píratar, Flokkur fólksins)")},m(a,s){k(a,t,s)},d(a){a&&c(t)}}}function P(a){let t;return{c(){t=l("Vinstri krati (VG, Samfylkingin)")},l(a){t=u(a,"Vinstri krati (VG, Samfylkingin)")},m(a,s){k(a,t,s)},d(a){a&&c(t)}}}function A(a){let t;return{c(){t=l("Róttækur sósíalisti (Sósíalistaflokkurinn)")},l(a){t=u(a,"Róttækur sósíalisti (Sósíalistaflokkurinn)")},m(a,s){k(a,t,s)},d(a){a&&c(t)}}}function N(a){let t;return{c(){t=l("Kommúnisti (Alþýðufylkingin/Sósíalistaflokkurinn)")},l(a){t=u(a,"Kommúnisti (Alþýðufylkingin/Sósíalistaflokkurinn)")},m(a,s){k(a,t,s)},d(a){a&&c(t)}}}function K(a){let t,s,g,h,j,x,V,I,D,F,H,P,A,N,K,M,q,$,G,T,R,z,B,J,O,U,C,L,Q,W=a[0],X=[];for(let r=0;r<W.length;r+=1)X[r]=w(b(a,W,r));function Y(a,t){return!1!==a[1]?S:a[2]>0?E:y}let Z=Y(a),_=Z(a);return{c(){t=n(),s=r("main"),g=r("div"),h=r("h1"),j=r("span"),x=r("span"),V=n(),I=r("span"),D=l("Ertu kommi, sósíalisti,"),F=n(),H=r("br"),P=n(),A=r("span"),N=r("span"),K=n(),M=r("span"),q=l("krati eða kapítalisti?"),$=n(),G=r("div"),T=r("img"),z=n(),B=r("div"),J=n(),O=r("div");for(let a=0;a<X.length;a+=1)X[a].c();U=n(),C=r("div"),_.c(),L=n(),Q=r("div"),this.h()},l(a){v('[data-svelte="svelte-he1w9v"]',document.head).forEach(c),t=f(a),s=i(a,"MAIN",{class:!0});var r=e(s);g=i(r,"DIV",{class:!0});var l=e(g);h=i(l,"H1",{class:!0});var n=e(h);j=i(n,"SPAN",{class:!0});var o=e(j);x=i(o,"SPAN",{class:!0}),e(x).forEach(c),V=f(o),I=i(o,"SPAN",{class:!0});var k=e(I);D=u(k,"Ertu kommi, sósíalisti,"),k.forEach(c),o.forEach(c),F=f(n),H=i(n,"BR",{}),P=f(n),A=i(n,"SPAN",{class:!0});var m=e(A);N=i(m,"SPAN",{class:!0}),e(N).forEach(c),K=f(m),M=i(m,"SPAN",{class:!0});var d=e(M);q=u(d,"krati eða kapítalisti?"),d.forEach(c),m.forEach(c),n.forEach(c),$=f(l),G=i(l,"DIV",{class:!0});var p=e(G);T=i(p,"IMG",{src:!0,alt:!0,class:!0}),z=f(p),B=i(p,"DIV",{class:!0}),e(B).forEach(c),p.forEach(c),l.forEach(c),J=f(r),O=i(r,"DIV",{class:!0});var b=e(O);for(let t=0;t<X.length;t+=1)X[t].l(b);U=f(b),C=i(b,"DIV",{class:!0});var w=e(C);_.l(w),w.forEach(c),L=f(b),Q=i(b,"DIV",{class:!0}),e(Q).forEach(c),b.forEach(c),r.forEach(c),this.h()},h(){document.title="Ertu kommi, sósíalisti, krati eða kapítalisti?",o(x,"class","absolute inset-0 -m-1 bg-black transform -skew-x-6"),o(I,"class","relative px-3"),o(j,"class","relative"),o(N,"class","absolute inset-0 -m-1 bg-black transform -skew-x-6"),o(M,"class","relative px-3"),o(A,"class","ml-8 relative"),o(h,"class","text-3xl sm:text-4xl font-black italic text-citrane text-center py-8 leading-normal sm:leading-relaxed"),T.src!==(R="/politicians.png")&&o(T,"src","/politicians.png"),o(T,"alt","Stjórnmálamenn"),o(T,"class","block max-w-full mx-auto sm:max-w-md px-4"),o(B,"class","from-transparent bg-smooth h-12 sm:h-16 absolute bottom-0 w-full"),o(G,"class","relative"),o(g,"class","bg-monza-matisse mb-4 sm:mb-8"),o(C,"class","sticky bottom-8 my-8 px-6 py-2 rounded-full bg-monza shadow mx-auto  text-white max-w-sm text-center"),o(Q,"class","text-center"),o(O,"class","p-4 sm:p-6"),o(s,"class","bg-citrane")},m(a,r){k(a,t,r),k(a,s,r),m(s,g),m(g,h),m(h,j),m(j,x),m(j,V),m(j,I),m(I,D),m(h,F),m(h,H),m(h,P),m(h,A),m(A,N),m(A,K),m(A,M),m(M,q),m(g,$),m(g,G),m(G,T),m(G,z),m(G,B),m(s,J),m(s,O);for(let t=0;t<X.length;t+=1)X[t].m(O,null);m(O,U),m(O,C),_.m(C,null),m(O,L),m(O,Q)},p(a,[t]){if(9&t){let s;for(W=a[0],s=0;s<W.length;s+=1){const r=b(a,W,s);X[s]?X[s].p(r,t):(X[s]=w(r),X[s].c(),X[s].m(O,U))}for(;s<X.length;s+=1)X[s].d(1);X.length=W.length}Z===(Z=Y(a))&&_?_.p(a,t):(_.d(1),_=Z(a),_&&(_.c(),_.m(C,null)))},i:p,o:p,d(a){a&&c(t),a&&c(s),d(X,a),_.d()}}}const M=!0;function q(a,t,s){let r=[{question:"Hvað finnst þér um einkarekin fyrirtæki?",answers:["Þau eru hið illa","Stórfyrirtæki eru slæm, lítil fjölskyldufyrirtæki, smáfyrirtæki og einyrkjar sleppa","Sum fyrirtæki eru góð, önnur ekki","Einkarekin fyrirtæki eru grunnur alls"],answer:null},{question:"Hvað fær þig til að fara í kröfugöngu?",answers:["Krefjast þess að kapítalisminn verði brotinn niður","Krefjast hækkun lægstu launa","Krefjast jafnra launa kynjanna","Krefjast þess að áfengi sé selt í matvörubúðum"],answer:null},{question:"Ætti starfsfólk að eiga fulltrúa í stjórnum fyrirtækja?",answers:["Fyrirtæki ættu að vera undir fullri stjórn starfsfólksins","Já, starfsfólk ætti í það minnsta að eiga tvo af fimm stjórnarmönnum","Tja, þetta er falleg hugmynd en myndi kannski ekki virka í öllum fyrirtækjum","Nei, aðeins hluthafa eiga að hafa fulltrúa í stjórn"],answer:null},{question:"Hvað finnst þér um verkalýðsfélög?",answers:["Þau verða óþörf þegar alþýðan hefur náð völdum","Þau eru mikilvægustu baráttutæki alþýðunnar","Þau eru mikilvæg í kjaraviðræðum en ættu að láta kjörna fulltrúa um að marka stefnu fyrir ríkisvaldið","Tímaskekkja, hver starfsmaður á að semja sjálfur um kaup og kjör"],answer:null},{question:"Hvernig sérðu heilbrigðiskerfið fyrir þér?",answers:["Heilbrigðisþjónusta undir stjórn alþýðunnar","Gjaldfrjáls opinber heilbrigðisþjónusta","Hófleg gjaldtaka í blönduðu kerfi þar sem kostir opinbers rekstur og einkareksturs vinna saman","Einkarekin heilbrigðisfyrirtæki og tryggingafélög"],answer:null}],l=!1,n=0;const i=(a,t)=>{s(0,r[a].answer=t,r)};return a.$$.update=()=>{1&a.$$.dirty&&s(2,n=r.filter((a=>null!==a.answer)).length),3&a.$$.dirty&&r.every((a=>null!==a.answer))&&(s(1,l=r.map((a=>a.answer)).reduce(((a,t)=>a+t),0)/(3*r.length)),s(1,l=100*(1-l)))},[r,l,n,i,(a,t)=>{i(a,t)}]}export default class extends a{constructor(a){super(),t(this,a,q,K,s,{})}}export{M as prerender};
