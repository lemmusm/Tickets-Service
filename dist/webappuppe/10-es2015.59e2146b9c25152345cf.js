(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Whmb:function(l,n,t){"use strict";t.r(n);var u=t("8Y7J");class e{}var a=t("pMnS"),i=t("iInd"),r=t("SVse"),s=t("G0yt"),o=t("K+Kt"),b=t("XNiG"),c=t("rgjJ"),p=t("BwRi"),d=t("GAup");class m{constructor(l,n){this.apiservice=l,this.alerta=n,this.dtOptions={},this.dtTrigger=new b.a}ngOnInit(){this.mostrarDepartamentos()}mostrarDepartamentos(){this.dtOptions={pagingType:"full_numbers",pageLength:10},this.apiservice.getCompleteDepartamentos().subscribe(l=>{this.departamentos=l,this.dtTrigger.next()},l=>{this.alerta.toastNotification(l.name,"","red","fas fa-times")})}eliminarDepartamento(l){d.a.fire({title:"\xbfDeseas eliminar el registro?",text:"Ser\xe1 borrado de forma permanente",type:"warning",showCancelButton:!0,confirmButtonColor:"#88D2F7",cancelButtonColor:"#FC9297",confirmButtonText:"Confirmar",cancelButtonText:"Cancelar"}).then(n=>{n.value&&this.apiservice.deleteDepartamento(l).subscribe(l=>{this.message=l,this.alerta.toastNotification(this.message.message,"","yellow","far fa-check-circle"),this.recargaDataTable()},l=>{this.alerta.toastNotification(l.statusText,"","red","fas fa-times")})})}recargaDataTable(){$("#listadoDepartamentos").DataTable().destroy(),this.mostrarDepartamentos()}}var y=u.ob({encapsulation:2,styles:[],data:{}});function g(l){return u.Kb(0,[(l()(),u.qb(0,0,null,null,22,"tr",[],null,null,null,null,null)),(l()(),u.qb(1,0,null,null,1,"td",[["class","text-center fixLineHeightText tx-normal"]],null,null,null,null,null)),(l()(),u.Ib(2,null,["",""])),(l()(),u.qb(3,0,null,null,1,"td",[["class","fixLineHeightText tx-normal"]],null,null,null,null,null)),(l()(),u.Ib(4,null,[" "," "])),(l()(),u.qb(5,0,null,null,1,"td",[["class","fixLineHeightText tx-normal"]],null,null,null,null,null)),(l()(),u.Ib(6,null,[" "," "])),(l()(),u.qb(7,0,null,null,1,"td",[["class","text-center fixLineHeightText tx-normal"]],null,null,null,null,null)),(l()(),u.Ib(8,null,[" "," "])),(l()(),u.qb(9,0,null,null,13,"td",[],null,null,null,null,null)),(l()(),u.qb(10,0,null,null,12,"div",[["class","row fixMarginRow"]],null,null,null,null,null)),(l()(),u.qb(11,0,null,null,6,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),u.qb(12,0,null,null,5,"div",[["class","btn-demo"]],null,null,null,null,null)),(l()(),u.qb(13,0,null,null,4,"a",[["class","btn btncustom"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.Ab(l,14).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u.pb(14,671744,null,0,i.m,[i.k,i.a,r.i],{routerLink:[0,"routerLink"]},null),u.Bb(15,2),(l()(),u.qb(16,16777216,null,null,1,"i",[["class","btnsuccess far fa-edit"],["ngbTooltip","Editar"],["placement","top"]],null,null,null,null,null)),u.pb(17,212992,null,0,s.O,[u.k,u.D,u.q,u.j,u.O,s.P,u.y,r.c,u.h],{placement:[0,"placement"],ngbTooltip:[1,"ngbTooltip"]},null),(l()(),u.qb(18,0,null,null,4,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),u.qb(19,0,null,null,3,"div",[["class","btn-demo"]],null,null,null,null,null)),(l()(),u.qb(20,0,null,null,2,"a",[["class","btn btncustom"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.eliminarDepartamento(l.context.$implicit.id_departamento)&&u),u},null,null)),(l()(),u.qb(21,16777216,null,null,1,"i",[["class","btndanger far fa-trash-alt"],["ngbTooltip","Eliminar"],["placement","top"]],null,null,null,null,null)),u.pb(22,212992,null,0,s.O,[u.k,u.D,u.q,u.j,u.O,s.P,u.y,r.c,u.h],{placement:[0,"placement"],ngbTooltip:[1,"ngbTooltip"]},null)],function(l,n){var t=l(n,15,0,"/admin/editar-departamento",n.context.$implicit.id_departamento);l(n,14,0,t),l(n,17,0,"top","Editar"),l(n,22,0,"top","Eliminar")},function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,n.context.$implicit.departamento),l(n,6,0,null==n.context.$implicit.ubicacion?null:n.context.$implicit.ubicacion.ubicacion),l(n,8,0,n.context.$implicit.usuarios.length),l(n,13,0,u.Ab(n,14).target,u.Ab(n,14).href)})}function h(l){return u.Kb(0,[(l()(),u.qb(0,0,null,null,20,"div",[["class","slim-mainpanel"]],null,null,null,null,null)),(l()(),u.qb(1,0,null,null,19,"div",[["class","container"]],null,null,null,null,null)),(l()(),u.qb(2,0,null,null,1,"label",[["class","section-title text-primary mb-3"]],null,null,null,null,null)),(l()(),u.Ib(-1,null,["Listado departamentos"])),(l()(),u.qb(4,0,null,null,16,"table",[["class","row-border hover table"],["datatable",""],["id","listadoDepartamentos"]],null,null,null,null,null)),u.pb(5,212992,null,0,o.a,[u.k],{dtOptions:[0,"dtOptions"],dtTrigger:[1,"dtTrigger"]},null),(l()(),u.qb(6,0,null,null,11,"thead",[],null,null,null,null,null)),(l()(),u.qb(7,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),u.qb(8,0,null,null,1,"th",[["class","text-center tx-bold"],["style","width: 5%"]],null,null,null,null,null)),(l()(),u.Ib(-1,null,["#"])),(l()(),u.qb(10,0,null,null,1,"th",[["class","text-center tx-bold"],["style","width: 50%"]],null,null,null,null,null)),(l()(),u.Ib(-1,null,["Departamento"])),(l()(),u.qb(12,0,null,null,1,"th",[["class","text-center tx-bold"],["style","width: 20%"]],null,null,null,null,null)),(l()(),u.Ib(-1,null,["Ubicaci\xf3n"])),(l()(),u.qb(14,0,null,null,1,"th",[["class","text-center tx-bold"],["style","width: 10%"]],null,null,null,null,null)),(l()(),u.Ib(-1,null,["Integrantes"])),(l()(),u.qb(16,0,null,null,1,"th",[["class","text-center tx-bold"],["style","width: 15%"]],null,null,null,null,null)),(l()(),u.Ib(-1,null,["Acciones"])),(l()(),u.qb(18,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),u.gb(16777216,null,null,1,null,g)),u.pb(20,278528,null,0,r.k,[u.O,u.L,u.r],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,5,0,t.dtOptions,t.dtTrigger),l(n,20,0,t.departamentos)},null)}function f(l){return u.Kb(0,[(l()(),u.qb(0,0,null,null,1,"app-lista-departamento",[],null,null,null,h,y)),u.pb(1,114688,null,0,m,[c.a,p.a],null,null)],function(l,n){l(n,1,0)},null)}var x=u.mb("app-lista-departamento",m,f,{},{},[]),q=t("9AJC"),v=t("s7LF");class w{}var T=t("axVG");t.d(n,"ListaDepartamentoModuleNgFactory",function(){return D});var D=u.nb(e,[],function(l){return u.xb([u.yb(512,u.j,u.bb,[[8,[a.a,x,q.a,q.b,q.f,q.g,q.c,q.d,q.e]],[3,u.j],u.w]),u.yb(4608,r.n,r.m,[u.t,[2,r.F]]),u.yb(4608,v.r,v.r,[]),u.yb(4608,s.t,s.t,[u.j,u.q,s.db,s.u]),u.yb(1073742336,r.b,r.b,[]),u.yb(1073742336,i.n,i.n,[[2,i.s],[2,i.k]]),u.yb(1073742336,w,w,[]),u.yb(1073742336,T.a,T.a,[]),u.yb(1073742336,s.c,s.c,[]),u.yb(1073742336,s.f,s.f,[]),u.yb(1073742336,s.g,s.g,[]),u.yb(1073742336,s.k,s.k,[]),u.yb(1073742336,s.l,s.l,[]),u.yb(1073742336,v.q,v.q,[]),u.yb(1073742336,v.e,v.e,[]),u.yb(1073742336,s.q,s.q,[]),u.yb(1073742336,s.r,s.r,[]),u.yb(1073742336,s.v,s.v,[]),u.yb(1073742336,s.z,s.z,[]),u.yb(1073742336,s.A,s.A,[]),u.yb(1073742336,s.D,s.D,[]),u.yb(1073742336,s.G,s.G,[]),u.yb(1073742336,s.J,s.J,[]),u.yb(1073742336,s.N,s.N,[]),u.yb(1073742336,s.Q,s.Q,[]),u.yb(1073742336,s.R,s.R,[]),u.yb(1073742336,s.w,s.w,[]),u.yb(1073742336,e,e,[]),u.yb(1024,i.i,function(){return[[{path:"",component:m}]]},[])])})}}]);