(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"e+nr":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),a=u("pMnS"),s=u("gIcY"),i=u("Ip0R"),o=u("4GxJ"),r=u("ZYCi"),c=u("rgjJ"),b=u("BwRi"),d=u("43Ke"),g=function(){function l(l,n,u,t,e){this.apiservice=l,this.authservice=n,this.router=u,this.aroute=t,this.alerta=e,this.id=this.aroute.snapshot.paramMap.get("id"),this.ticket={},this.estados=this.apiservice.estados}return l.prototype.ngOnInit=function(){this.mostrarTicket(),this.mostrarServicios()},l.prototype.mostrarTicket=function(){var l=this;this.apiservice.getTicket(this.id).subscribe(function(n){l.ticket=n,l.ticket.tecnico=l.authservice.displayName,l.filename=l.ticket.filesattach.substring(l.ticket.filesattach.lastIndexOf("uploads/")+8)},function(n){l.alerta.toastNotification(n.name,"","red","fas fa-times")})},l.prototype.mostrarServicios=function(){var l=this;this.apiservice.getServicios().subscribe(function(n){l.servicios=n})},l.prototype.actualizarTicket=function(){var l=this;this.apiservice.updateTicket(this.id,this.ticket).subscribe(function(n){l.message=n,l.alerta.toastNotification(l.message.message,"","green","far fa-check-circle"),l.router.navigate(["admin/listado-tickets"])},function(n){l.alerta.toastNotification(n.name,"","red","fas fa-times")})},l}(),m=t.qb({encapsulation:2,styles:[],data:{}});function p(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,3,"option",[],null,null,null,null,null)),t.rb(1,147456,null,0,s.m,[t.k,t.F,[2,s.o]],{value:[0,"value"]},null),t.rb(2,147456,null,0,s.s,[t.k,t.F,[8,null]],{value:[0,"value"]},null),(l()(),t.Kb(3,null,[" "," "]))],function(l,n){l(n,1,0,n.context.$implicit.id_servicio),l(n,2,0,n.context.$implicit.id_servicio)},function(l,n){l(n,3,0,n.context.$implicit.servicio)})}function C(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,3,"option",[],null,null,null,null,null)),t.rb(1,147456,null,0,s.m,[t.k,t.F,[2,s.o]],{value:[0,"value"]},null),t.rb(2,147456,null,0,s.s,[t.k,t.F,[8,null]],{value:[0,"value"]},null),(l()(),t.Kb(3,null,[" "," "]))],function(l,n){l(n,1,0,n.context.$implicit.status),l(n,2,0,n.context.$implicit.status)},function(l,n){l(n,3,0,n.context.$implicit.status)})}function h(l){return t.Mb(0,[t.Eb(0,i.u,[]),t.Eb(0,i.d,[t.v]),(l()(),t.sb(2,0,null,null,140,"div",[["class","slim-mainpanel"]],null,null,null,null,null)),(l()(),t.sb(3,0,null,null,139,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.sb(4,0,null,null,138,"div",[["class","section-wrapper mg-t-20"]],null,null,null,null,null)),(l()(),t.sb(5,0,null,null,137,"form",[["class","form-layout form-layout-2"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0,a=l.component;return"submit"===n&&(e=!1!==t.Cb(l,7).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Cb(l,7).onReset()&&e),"submit"===n&&(e=!1!==a.actualizarTicket()&&e),e},null,null)),t.rb(6,16384,null,0,s.t,[],null,null),t.rb(7,4210688,[["updateTicketForm",4]],0,s.k,[[8,null],[8,null]],null,null),t.Hb(2048,null,s.b,null,[s.k]),t.rb(9,16384,null,0,s.j,[[4,s.b]],null,null),(l()(),t.sb(10,0,null,null,111,"div",[["class","row no-gutters"]],null,null,null,null,null)),(l()(),t.sb(11,0,null,null,2,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t.sb(12,0,null,null,1,"div",[["class","form-group text-center border-0"]],null,null,null,null,null)),(l()(),t.sb(13,0,null,null,0,"img",[["alt","logouppe"],["src","./assets/img/logo_uppe.png"],["width","100"]],null,null,null,null,null)),(l()(),t.sb(14,0,null,null,2,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t.sb(15,0,null,null,1,"h6",[["class","position-name text-center tx-teal tx-20 font-weight-light"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[" R1PI6 | SERVICIO DE SOPORTE T\xc9CNICO "])),(l()(),t.sb(17,0,null,null,4,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),t.sb(18,0,null,null,3,"div",[["class","form-group border-0"]],null,null,null,null,null)),(l()(),t.sb(19,0,null,null,2,"label",[["class","form-control-label text-left"]],null,null,null,null,null)),(l()(),t.sb(20,0,null,null,1,"span",[["class","tx-danger"]],null,null,null,null,null)),(l()(),t.Kb(21,null,["TICKET ID: U-",""])),(l()(),t.sb(22,0,null,null,5,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),t.sb(23,0,null,null,4,"div",[["class","form-group text-right border-0"]],null,null,null,null,null)),(l()(),t.sb(24,0,null,null,3,"label",[["class","form-control-label tx-primary"]],null,null,null,null,null)),(l()(),t.Kb(25,null,["Fecha de creaci\xf3n: ",""])),t.Gb(26,2),t.Gb(27,1),(l()(),t.sb(28,0,null,null,11,"div",[["class","col-md-4 mg-t--1"]],null,null,null,null,null)),(l()(),t.sb(29,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.sb(30,0,null,null,3,"label",[["class","form-control-label tx-primary"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Solicitante: "])),(l()(),t.sb(32,0,null,null,1,"span",[["class","tx-danger"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["*"])),(l()(),t.sb(34,0,null,null,5,"input",[["class","form-control section-label tx-normal"],["name","solicitante"],["placeholder","Inserta tu nombre"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,a=l.component;return"input"===n&&(e=!1!==t.Cb(l,35)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,35).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Cb(l,35)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Cb(l,35)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(a.ticket.displayName=u)&&e),e},null,null)),t.rb(35,16384,null,0,s.c,[t.F,t.k,[2,s.a]],null,null),t.Hb(1024,null,s.g,function(l){return[l]},[s.c]),t.rb(37,671744,null,0,s.l,[[2,s.b],[8,null],[8,null],[6,s.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,s.h,null,[s.l]),t.rb(39,16384,null,0,s.i,[[4,s.h]],null,null),(l()(),t.sb(40,0,null,null,11,"div",[["class","col-md-4 mg-t--1"]],null,null,null,null,null)),(l()(),t.sb(41,0,null,null,10,"div",[["class","form-group mg-md-l--1"]],null,null,null,null,null)),(l()(),t.sb(42,0,null,null,3,"label",[["class","form-control-label tx-primary"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Correo electr\xf3nico: "])),(l()(),t.sb(44,0,null,null,1,"span",[["class","tx-danger"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["*"])),(l()(),t.sb(46,0,null,null,5,"input",[["class","form-control section-label tx-normal"],["name","email"],["placeholder","Inserta tu correo institucional"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,a=l.component;return"input"===n&&(e=!1!==t.Cb(l,47)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,47).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Cb(l,47)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Cb(l,47)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(a.ticket.email=u)&&e),e},null,null)),t.rb(47,16384,null,0,s.c,[t.F,t.k,[2,s.a]],null,null),t.Hb(1024,null,s.g,function(l){return[l]},[s.c]),t.rb(49,671744,null,0,s.l,[[2,s.b],[8,null],[8,null],[6,s.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,s.h,null,[s.l]),t.rb(51,16384,null,0,s.i,[[4,s.h]],null,null),(l()(),t.sb(52,0,null,null,11,"div",[["class","col-md-4 mg-t--1"]],null,null,null,null,null)),(l()(),t.sb(53,0,null,null,10,"div",[["class","form-group mg-md-l--1"]],null,null,null,null,null)),(l()(),t.sb(54,0,null,null,3,"label",[["class","form-control-label tx-primary"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Departamento: "])),(l()(),t.sb(56,0,null,null,1,"span",[["class","tx-danger"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["*"])),(l()(),t.sb(58,0,null,null,5,"input",[["class","form-control section-label tx-normal"],["name","departamento"],["placeholder","Inserta tu departamento"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,a=l.component;return"input"===n&&(e=!1!==t.Cb(l,59)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,59).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Cb(l,59)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Cb(l,59)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(a.ticket.departamento=u)&&e),e},null,null)),t.rb(59,16384,null,0,s.c,[t.F,t.k,[2,s.a]],null,null),t.Hb(1024,null,s.g,function(l){return[l]},[s.c]),t.rb(61,671744,null,0,s.l,[[2,s.b],[8,null],[8,null],[6,s.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,s.h,null,[s.l]),t.rb(63,16384,null,0,s.i,[[4,s.h]],null,null),(l()(),t.sb(64,0,null,null,13,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),t.sb(65,0,null,null,12,"div",[["class","form-group bd-t-0-force"]],null,null,null,null,null)),(l()(),t.sb(66,0,null,null,3,"label",[["class","form-control-label tx-primary"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Tipo de servicio: "])),(l()(),t.sb(68,0,null,null,1,"span",[["class","tx-danger"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["*"])),(l()(),t.sb(70,0,null,null,7,"select",[["class","form-control section-label tx-normal"],["id","select2-a"],["name","servicio"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var e=!0,a=l.component;return"change"===n&&(e=!1!==t.Cb(l,71).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,71).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(a.ticket.servicio_id=u)&&e),e},null,null)),t.rb(71,16384,null,0,s.o,[t.F,t.k],null,null),t.Hb(1024,null,s.g,function(l){return[l]},[s.o]),t.rb(73,671744,null,0,s.l,[[2,s.b],[8,null],[8,null],[6,s.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,s.h,null,[s.l]),t.rb(75,16384,null,0,s.i,[[4,s.h]],null,null),(l()(),t.ib(16777216,null,null,1,null,p)),t.rb(77,278528,null,0,i.k,[t.Q,t.N,t.t],{ngForOf:[0,"ngForOf"]},null),(l()(),t.sb(78,0,null,null,17,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),t.sb(79,0,null,null,16,"div",[["class","form-group mg-md-l--1 bd-t-0-force"]],null,null,null,null,null)),(l()(),t.sb(80,0,null,null,3,"label",[["class","form-control-label tx-primary"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Descripci\xf3n: "])),(l()(),t.sb(82,0,null,null,1,"span",[["class","tx-danger"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["*"])),(l()(),t.sb(84,0,null,null,5,"textarea",[["class","form-control section-label tx-normal"],["name","descripcion"],["placeholder","Describe tu problema presentado."],["rows","5"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,a=l.component;return"input"===n&&(e=!1!==t.Cb(l,85)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,85).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Cb(l,85)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Cb(l,85)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(a.ticket.descripcion=u)&&e),e},null,null)),t.rb(85,16384,null,0,s.c,[t.F,t.k,[2,s.a]],null,null),t.Hb(1024,null,s.g,function(l){return[l]},[s.c]),t.rb(87,671744,null,0,s.l,[[2,s.b],[8,null],[8,null],[6,s.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,s.h,null,[s.l]),t.rb(89,16384,null,0,s.i,[[4,s.h]],null,null),(l()(),t.sb(90,0,null,null,1,"label",[["class","form-control-label tx-primary"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Archivo adjunto: "])),(l()(),t.sb(92,16777216,null,null,3,"a",[["class","file"],["ngbTooltip","Descargar"],["placement","top"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),t.rb(93,212992,null,0,o.O,[t.k,t.F,t.r,t.j,t.Q,o.P,t.A,i.c,t.h],{placement:[0,"placement"],ngbTooltip:[1,"ngbTooltip"]},null),(l()(),t.sb(94,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Kb(95,null,["",""])),(l()(),t.sb(96,0,null,null,11,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),t.sb(97,0,null,null,10,"div",[["class","form-group bd-t-0-force  mg-md-l--1"]],null,null,null,null,null)),(l()(),t.sb(98,0,null,null,3,"label",[["class","form-control-label tx-primary"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Diagn\xf3stico: "])),(l()(),t.sb(100,0,null,null,1,"span",[["class","tx-danger"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["*"])),(l()(),t.sb(102,0,null,null,5,"textarea",[["class","form-control section-label tx-normal"],["name","diagnostico"],["placeholder","Detalles de la soluci\xf3n al problema."],["rows","5"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,a=l.component;return"input"===n&&(e=!1!==t.Cb(l,103)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,103).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Cb(l,103)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Cb(l,103)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(a.ticket.diagnostico=u)&&e),e},null,null)),t.rb(103,16384,null,0,s.c,[t.F,t.k,[2,s.a]],null,null),t.Hb(1024,null,s.g,function(l){return[l]},[s.c]),t.rb(105,671744,null,0,s.l,[[2,s.b],[8,null],[8,null],[6,s.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,s.h,null,[s.l]),t.rb(107,16384,null,0,s.i,[[4,s.h]],null,null),(l()(),t.sb(108,0,null,null,13,"div",[["class","col-md-4 mg-t--1"]],null,null,null,null,null)),(l()(),t.sb(109,0,null,null,12,"div",[["class","form-group mg-md-l--1"]],null,null,null,null,null)),(l()(),t.sb(110,0,null,null,3,"label",[["class","form-control-label tx-primary"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Status: "])),(l()(),t.sb(112,0,null,null,1,"span",[["class","tx-danger"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["*"])),(l()(),t.sb(114,0,null,null,7,"select",[["class","form-control section-label tx-normal"],["id","select2-a"],["name","stat"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var e=!0,a=l.component;return"change"===n&&(e=!1!==t.Cb(l,115).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,115).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(a.ticket.status=u)&&e),e},null,null)),t.rb(115,16384,null,0,s.o,[t.F,t.k],null,null),t.Hb(1024,null,s.g,function(l){return[l]},[s.o]),t.rb(117,671744,null,0,s.l,[[2,s.b],[8,null],[8,null],[6,s.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,s.h,null,[s.l]),t.rb(119,16384,null,0,s.i,[[4,s.h]],null,null),(l()(),t.ib(16777216,null,null,1,null,C)),t.rb(121,278528,null,0,i.k,[t.Q,t.N,t.t],{ngForOf:[0,"ngForOf"]},null),(l()(),t.sb(122,0,null,null,20,"div",[["class","form-layout-footer bd pd-20 bd-t-0"]],null,null,null,null,null)),(l()(),t.sb(123,0,null,null,19,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.sb(124,0,null,null,11,"div",[["class","col-md-6 text-left"]],null,null,null,null,null)),(l()(),t.sb(125,0,null,null,10,"div",[["class","form-group border-0"]],null,null,null,null,null)),(l()(),t.sb(126,0,null,null,3,"label",[["class","form-control-label tx-primary"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Atendio: "])),(l()(),t.sb(128,0,null,null,1,"span",[["class","tx-danger"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["*"])),(l()(),t.sb(130,0,null,null,5,"input",[["class","form-control section-label tx-normal"],["name","tecnico"],["readonly",""],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,a=l.component;return"input"===n&&(e=!1!==t.Cb(l,131)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,131).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Cb(l,131)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Cb(l,131)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(a.ticket.tecnico=u)&&e),e},null,null)),t.rb(131,16384,null,0,s.c,[t.F,t.k,[2,s.a]],null,null),t.Hb(1024,null,s.g,function(l){return[l]},[s.c]),t.rb(133,671744,null,0,s.l,[[2,s.b],[8,null],[8,null],[6,s.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,s.h,null,[s.l]),t.rb(135,16384,null,0,s.i,[[4,s.h]],null,null),(l()(),t.sb(136,0,null,null,6,"div",[["class","col-6 text-right"]],null,null,null,null,null)),(l()(),t.sb(137,0,null,null,1,"button",[["class","btn btn-teal bd-0 tx-normal"]],[[8,"disabled",0]],null,null,null,null)),(l()(),t.Kb(-1,null,[" Cerrar ticket "])),(l()(),t.sb(139,0,null,null,3,"button",[["class","btn btn-secondary bd-0 ml-2 tx-normal"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Cb(l,140).onClick()&&e),e},null,null)),t.rb(140,16384,null,0,r.l,[r.k,r.a,[8,null],t.F,t.k],{routerLink:[0,"routerLink"]},null),t.Db(141,1),(l()(),t.Kb(-1,null,[" Cancelar "]))],function(l,n){var u=n.component;l(n,37,0,"solicitante",u.ticket.displayName),l(n,49,0,"email",u.ticket.email),l(n,61,0,"departamento",u.ticket.departamento),l(n,73,0,"servicio",u.ticket.servicio_id),l(n,77,0,u.servicios),l(n,87,0,"descripcion",u.ticket.descripcion),l(n,93,0,"top","Descargar"),l(n,105,0,"diagnostico",u.ticket.diagnostico),l(n,117,0,"stat",u.ticket.status),l(n,121,0,u.estados),l(n,133,0,"tecnico",u.ticket.tecnico);var t=l(n,141,0,"/listado-tickets");l(n,140,0,t)},function(l,n){var u=n.component;l(n,5,0,t.Cb(n,9).ngClassUntouched,t.Cb(n,9).ngClassTouched,t.Cb(n,9).ngClassPristine,t.Cb(n,9).ngClassDirty,t.Cb(n,9).ngClassValid,t.Cb(n,9).ngClassInvalid,t.Cb(n,9).ngClassPending),l(n,21,0,u.ticket.id_ticket);var e=t.Lb(n,25,0,l(n,27,0,t.Cb(n,0),t.Lb(n,25,0,l(n,26,0,t.Cb(n,1),u.ticket.created_at,"mediumDate"))));l(n,25,0,e),l(n,34,0,t.Cb(n,39).ngClassUntouched,t.Cb(n,39).ngClassTouched,t.Cb(n,39).ngClassPristine,t.Cb(n,39).ngClassDirty,t.Cb(n,39).ngClassValid,t.Cb(n,39).ngClassInvalid,t.Cb(n,39).ngClassPending),l(n,46,0,t.Cb(n,51).ngClassUntouched,t.Cb(n,51).ngClassTouched,t.Cb(n,51).ngClassPristine,t.Cb(n,51).ngClassDirty,t.Cb(n,51).ngClassValid,t.Cb(n,51).ngClassInvalid,t.Cb(n,51).ngClassPending),l(n,58,0,t.Cb(n,63).ngClassUntouched,t.Cb(n,63).ngClassTouched,t.Cb(n,63).ngClassPristine,t.Cb(n,63).ngClassDirty,t.Cb(n,63).ngClassValid,t.Cb(n,63).ngClassInvalid,t.Cb(n,63).ngClassPending),l(n,70,0,t.Cb(n,75).ngClassUntouched,t.Cb(n,75).ngClassTouched,t.Cb(n,75).ngClassPristine,t.Cb(n,75).ngClassDirty,t.Cb(n,75).ngClassValid,t.Cb(n,75).ngClassInvalid,t.Cb(n,75).ngClassPending),l(n,84,0,t.Cb(n,89).ngClassUntouched,t.Cb(n,89).ngClassTouched,t.Cb(n,89).ngClassPristine,t.Cb(n,89).ngClassDirty,t.Cb(n,89).ngClassValid,t.Cb(n,89).ngClassInvalid,t.Cb(n,89).ngClassPending),l(n,92,0,t.ub(1,"",u.ticket.filesattach,"")),l(n,95,0,u.filename),l(n,102,0,t.Cb(n,107).ngClassUntouched,t.Cb(n,107).ngClassTouched,t.Cb(n,107).ngClassPristine,t.Cb(n,107).ngClassDirty,t.Cb(n,107).ngClassValid,t.Cb(n,107).ngClassInvalid,t.Cb(n,107).ngClassPending),l(n,114,0,t.Cb(n,119).ngClassUntouched,t.Cb(n,119).ngClassTouched,t.Cb(n,119).ngClassPristine,t.Cb(n,119).ngClassDirty,t.Cb(n,119).ngClassValid,t.Cb(n,119).ngClassInvalid,t.Cb(n,119).ngClassPending),l(n,130,0,t.Cb(n,135).ngClassUntouched,t.Cb(n,135).ngClassTouched,t.Cb(n,135).ngClassPristine,t.Cb(n,135).ngClassDirty,t.Cb(n,135).ngClassValid,t.Cb(n,135).ngClassInvalid,t.Cb(n,135).ngClassPending),l(n,137,0,!t.Cb(n,7).form.valid)})}function v(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,"app-editar-ticket-admin",[],null,null,null,h,m)),t.rb(1,114688,null,0,g,[c.a,d.a,r.k,r.a,b.a],null,null)],function(l,n){l(n,1,0)},null)}var f=t.ob("app-editar-ticket-admin",g,v,{},{},[]),k=u("9AJC"),x=function(){return function(){}}();u.d(n,"EditarTicketAdminModuleNgFactory",function(){return y});var y=t.pb(e,[],function(l){return t.zb([t.Ab(512,t.j,t.db,[[8,[a.a,f,k.a,k.b,k.f,k.g,k.c,k.d,k.e]],[3,t.j],t.y]),t.Ab(4608,i.n,i.m,[t.v,[2,i.F]]),t.Ab(4608,s.r,s.r,[]),t.Ab(4608,o.t,o.t,[t.j,t.r,o.db,o.u]),t.Ab(1073742336,i.b,i.b,[]),t.Ab(1073742336,r.n,r.n,[[2,r.s],[2,r.k]]),t.Ab(1073742336,x,x,[]),t.Ab(1073742336,s.q,s.q,[]),t.Ab(1073742336,s.e,s.e,[]),t.Ab(1073742336,o.c,o.c,[]),t.Ab(1073742336,o.f,o.f,[]),t.Ab(1073742336,o.g,o.g,[]),t.Ab(1073742336,o.k,o.k,[]),t.Ab(1073742336,o.l,o.l,[]),t.Ab(1073742336,o.q,o.q,[]),t.Ab(1073742336,o.r,o.r,[]),t.Ab(1073742336,o.v,o.v,[]),t.Ab(1073742336,o.z,o.z,[]),t.Ab(1073742336,o.A,o.A,[]),t.Ab(1073742336,o.D,o.D,[]),t.Ab(1073742336,o.G,o.G,[]),t.Ab(1073742336,o.J,o.J,[]),t.Ab(1073742336,o.N,o.N,[]),t.Ab(1073742336,o.Q,o.Q,[]),t.Ab(1073742336,o.R,o.R,[]),t.Ab(1073742336,o.w,o.w,[]),t.Ab(1073742336,e,e,[]),t.Ab(1024,r.i,function(){return[[{path:"",component:g}]]},[])])})}}]);