import{P as e,r as a,z as s,j as t,M as u,N as o,U as r,Q as l,R as n,S as i,aP as v,a1 as d,aR as m}from"./index.8c222edc.js";import{V as c}from"./VideoLists.0cb12bf1.js";import{P as p}from"./index.7a5ed3e2.js";import"./Grid.633dfea7.js";import"./get-slot.65c4337d.js";import"./Skeleton.2af31e85.js";import"./use-houdini.316adbdf.js";import"./Select.8d76d25a.js";const y={class:"videos"},h={__name:"videos",setup(h){const g=e();let f=a(g.currentRoute.value.query.keywords),j=a([]),C=a(0),b=a(30),q=a(g.currentRoute.value.query.page?Number(g.currentRoute.value.query.page):1);const R=(e,a=30,s=0,t=1004)=>{v(e,a,s,t).then((e=>{C.value=e.result.mvCount,j.value=[],e.result.mvs?e.result.mvs.forEach((e=>{j.value.push({id:e.id,cover:e.cover,name:e.name,artist:e.artists,playCount:d(e.playCount),duration:m(e.duration)})})):$message.error("搜索内容为空"),$mainContent&&$mainContent.scrollIntoView({behavior:"smooth"})}))};s((()=>g.currentRoute.value),(e=>{f.value=e.query.keywords,q.value=Number(e.query.page),"s-videos"==e.name&&R(f.value,b.value,(q.value-1)*b.value)}));const k=e=>{b.value=e,R(f.value,e,(q.value-1)*b.value)},P=e=>{g.push({path:"/search/videos",query:{keywords:f.value,page:e}})};return t((()=>{R(f.value,b.value,(q.value-1)*b.value)})),(e,a)=>(u(),o("div",y,[r(c,{listData:l(j)},null,8,["listData"]),l(j)[0]?(u(),n(p,{key:0,totalCount:l(C),onPageSizeChange:k,onPageNumberChange:P},null,8,["totalCount"])):i("",!0)]))}};export{h as default};
