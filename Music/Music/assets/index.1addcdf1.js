import{d as a,M as s,N as t,O as e,_ as n,R as c,W as l,S as o,aa as m,U as i,Q as r,$ as p,cm as u,a1 as v,ag as d,bz as w}from"./index.8c222edc.js";const g={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},h=[e("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z",fill:"currentColor"},null,-1),e("path",{d:"M12.5 7H11v6l5.25 3.15l.75-1.23l-4.5-2.67z",fill:"currentColor"},null,-1)],x=a({name:"AccessTimeFilled",render:function(a,e){return s(),t("svg",g,h)}}),k={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},D=[e("path",{d:"M12 12c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14c4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2c0 3.32-2.67 7.25-8 11.8c-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z",fill:"currentColor"},null,-1)],R=a({name:"FmdGoodOutlined",render:function(a,e){return s(),t("svg",k,D)}}),f={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},C=[e("path",{d:"M21 8h-6.31l.95-4.57l.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2zm0 4l-3 7H9V9l4.34-4.34L12.23 10H21v2zM1 9h4v12H1z",fill:"currentColor"},null,-1)],z=a({name:"ThumbUpAltOutlined",render:function(a,e){return s(),t("svg",f,C)}}),b={class:"user"},M={class:"avatar"},y=["src"],L=["src"],_={key:0,class:"associator"},U=["src"],H={class:"review"},O={class:"content"},B={class:"name"},P={class:"text"},j={key:0,class:"beReplied"},A={class:"name"},F={class:"text"},I={class:"num"},S={class:"time"},T={key:0,class:"ip"},V={class:"like"},G=n({__name:"index",props:{commentData:{type:Object,default:[]}},setup:a=>(n,g)=>{const h=d,k=w;return s(),c(k,{class:"comment",hoverable:""},{default:l((()=>[e("div",b,[e("div",M,[e("img",{class:"avatarImg",src:a.commentData.user.avatarUrl.replace(/^http:/,"https:")+"?param=50y50",alt:"avatar"},null,8,y),a.commentData.user.vipRights&&a.commentData.user.vipRights.musicPackage?(s(),t("img",{key:0,class:"musicPackage",src:a.commentData.user.vipRights.musicPackage.iconUrl,alt:"vip"},null,8,L)):o("",!0)]),a.commentData.user.vipRights&&a.commentData.user.vipRights.redVipLevel?(s(),t("div",_,[a.commentData.user.vipRights.associator?(s(),t("img",{key:0,src:a.commentData.user.vipRights.associator.iconUrl,alt:"associator"},null,8,U)):o("",!0)])):o("",!0)]),e("div",H,[e("div",O,[e("span",B,m(a.commentData.user.nickname)+"：",1),e("span",P,m(a.commentData.content),1)]),a.commentData.beReplied[0]?(s(),t("div",j,[e("span",A," @"+m(a.commentData.beReplied[0].user.nickname)+"： ",1),e("span",F,m(a.commentData.beReplied[0].content),1)])):o("",!0),e("div",I,[e("span",S,[i(h,{component:r(x)},null,8,["component"]),p(" "+m(r(u)(a.commentData.time)),1)]),a.commentData.ipLocation.location?(s(),t("span",T,[i(h,{component:r(R)},null,8,["component"]),p(" "+m(a.commentData.ipLocation.location),1)])):o("",!0),e("span",V,[i(h,{component:r(z)},null,8,["component"]),p(" "+m(r(v)(a.commentData.likedCount)),1)])])])])),_:1})}},[["__scopeId","data-v-f19eed1e"]]);export{G as C};
