(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{uJLv:function(t,o,a){"use strict";a.r(o),a.d(o,"ion_backdrop",function(){return r});var i=a("fWOU"),s=(a("TJLY"),a("2RtJ")),e=a("EQwm");class r{constructor(t){Object(i.m)(this,t),this.lastClick=-1e4,this.blocker=s.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0,this.ionBackdropTap=Object(i.e)(this,"ionBackdropTap",7)}componentDidLoad(){this.stopPropagation&&this.blocker.block()}componentDidUnload(){this.blocker.destroy()}onTouchStart(t){this.lastClick=Object(e.i)(t),this.emitTap(t)}onMouseDown(t){this.lastClick<Object(e.i)(t)-2500&&this.emitTap(t)}emitTap(t){this.stopPropagation&&(t.preventDefault(),t.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}hostData(){return{tabindex:"-1",class:{[Object(i.d)(this)]:!0,"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}}}render(){return Object(i.i)(i.a,this.hostData())}static get style(){return":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color,#000)}"}}}}]);