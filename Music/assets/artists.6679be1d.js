import{_ as e,P as a,r as s,z as t,j as u,M as r,N as l,O as i,U as o,W as n,Q as d,a2 as v,X as c,Y as y,R as m,$ as p,aa as f,bq as k,S as g,by as h,aM as _}from"./index.8c222edc.js";import{A as j}from"./ArtistLists.491e4419.js";import{_ as q}from"./Space.03a5017b.js";import"./Grid.633dfea7.js";import"./get-slot.65c4337d.js";import"./Skeleton.2af31e85.js";import"./use-houdini.316adbdf.js";const b={class:"artists"},C={class:"menu"},R=e({__name:"artists",setup(e){const R=a();let N=[{key:"-1",value:"热门"},...Array.from({length:26},((e,a)=>String.fromCharCode(a+65))).map((e=>({key:e,value:e}))),{key:"0",value:"#"}],S=s(R.currentRoute.value.query.initial?R.currentRoute.value.query.initial:N[0].key),A=["全部","华语","华语男","华语女","华语组合","欧美","欧美男","欧美女","欧美组合","日本","日本男","日本女","日本组合","韩国","韩国男","韩国女","韩国组合","其他"],$=[-1,-1,1,2,3,-1,1,2,3,-1,1,2,3,-1,1,2,3,-1],x=[-1,7,7,7,7,96,96,96,96,8,8,8,8,16,16,16,16,0],z=s(R.currentRoute.value.query.type?Number(R.currentRoute.value.query.type):0),D=s([]),M=s(0),U=s(!0),w=s(!1);const E=(e=-1,a=-1,s=30,t=0,u=-1)=>{v(e,a,s,t,u).then((e=>{e.artists[0]?(e.more?U.value=!0:U.value=!1,w.value=!1,e.artists.forEach((e=>{D.value.push({id:e.id,name:e.name,cover:e.img1v1Url})}))):(U.value=!1,$message.error("歌手内容为空"))}))},G=()=>{w.value=!0,M.value+=30,M.value>=300&&$message.info("太多了吧 😲"),E($[z.value],x[z.value],30,M.value,S.value)};return t((()=>R.currentRoute.value),(e=>{z.value=Number(e.query.type),S.value=e.query.initial,M.value=0,"dsc-artists"==e.name&&E($[z.value],x[z.value],30,0,S.value)})),u((()=>{E($[z.value],x[z.value],30,0,S.value)})),(e,a)=>{const s=h,t=q,u=_;return r(),l("div",b,[i("div",C,[o(t,{class:"initial"},{default:n((()=>[(r(!0),l(c,null,y(d(N),(e=>(r(),m(s,{round:"",key:e,bordered:!1,type:e.key==d(S)?"primary":"default",onClick:a=>{return s=e.key,D.value=[],void R.push({path:"/discover/artists",query:{type:z.value,initial:s}});var s}},{default:n((()=>[p(f(e.value),1)])),_:2},1032,["type","onClick"])))),128))])),_:1}),o(t,{class:"category"},{default:n((()=>[(r(!0),l(c,null,y(d(A),((e,a)=>(r(),m(s,{round:"",class:k(e.length>2?"hidden":"show"),key:e,bordered:!1,type:a==d(z)?"primary":"default",onClick:e=>(e=>{D.value=[],R.push({path:"/discover/artists",query:{type:e,initial:S.value}})})(a)},{default:n((()=>[p(f(e),1)])),_:2},1032,["class","type","onClick"])))),128))])),_:1})]),o(j,{listData:d(D),loadingNum:30},null,8,["listData"]),o(t,{justify:"center"},{default:n((()=>[d(U)?(r(),m(u,{key:0,class:"more",size:"large",strong:"",secondary:"",round:"",loading:d(w),onClick:G},{default:n((()=>[p(" 加载更多 ")])),_:1},8,["loading"])):g("",!0)])),_:1})])}}},[["__scopeId","data-v-0c3ddfcf"]]);export{R as default};
