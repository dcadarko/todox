(this.webpackJsonptodox=this.webpackJsonptodox||[]).push([[12],{219:function(e,a,t){"use strict";t.r(a);var s=t(35),n=t(41),c=t(42),i=t(45),r=t(47),l=t(46),o=t(0),p=t.n(o),d=t(5),m=t(234),u=t(220),h=t(157),b=t(222),g=t(158),k=t(223),f=t(106),E=t(221),v=t(224),y=t(225),N=t(159),D=function(e){Object(r.a)(o,e);var a=Object(l.a)(o);function o(e){var t;return Object(n.a)(this,o),(t=a.call(this,e)).state={isOpen:!1},t.toggleStar=t.toggleStar.bind(Object(i.a)(t)),t.toggleState=t.toggleState.bind(Object(i.a)(t)),t.markAsDone=t.markAsDone.bind(Object(i.a)(t)),t.task=t.props.task,t}return Object(c.a)(o,[{key:"markAsDone",value:function(){var e=this,a=function(){e.task.done=!0,e.task.status=2,window.database.update("tasks",e.task.id,e.task,(function(){e.props.unMount&&e.props.unMount()}))};window.database?a():t.e(0).then(t.bind(null,120)).then((function(e){console.log("[indexedDB] Creating database instance"),(new e.default).onsuccess=function(e){window.database=e.target.result,a()}}))}},{key:"toggleStar",value:function(){this.setState(Object(s.a)(Object(s.a)({},this.state),{},{starred:!this.state.starred}))}},{key:"parseDate",value:function(e){var a,t=new Date(e),s=function(e){return e<10?"0"+e:e};switch(t.getMonth()){case 0:a="Jan";break;case 1:a="Feb";break;case 2:a="Mar";break;case 3:a="Apr";break;case 4:a="May";break;case 5:a="Jun";break;case 6:a="Jul";break;case 7:a="Aug";break;case 8:a="Sep";break;case 9:a="Oct";break;case 10:a="Nov";break;case 11:a="Dec"}return"".concat(s(t.getDate())," ").concat(a," ").concat(s(t.getHours()),":").concat(s(t.getMinutes()))}},{key:"parseNotifDelta",value:function(e){var a=10*e;return a<60?"".concat(a," min before"):a/60<24?"".concat(Math.round(a/60)," hr(s) before"):"".concat(Math.round(a/1440)," day(s) before")}},{key:"toggleState",value:function(){this.setState(Object(s.a)(Object(s.a)({},this.state),{},{isOpen:!this.state.isOpen}))}},{key:"render",value:function(){return p.a.createElement("div",{className:this.props.classes.root},p.a.createElement(m.a,{expanded:this.state.isOpen},p.a.createElement(u.a,{expandIcon:p.a.createElement(E.a,null),onClick:this.toggleState},p.a.createElement(h.a,{className:this.props.classes.heading},this.task.title),p.a.createElement("div",{className:this.props.classes.grow}),p.a.createElement("div",{className:this.props.classes.reminderTiming},p.a.createElement(h.a,{className:this.props.classes.secondaryHeading},this.task.reminder?this.parseDate(this.task.deadline):""))),p.a.createElement(b.a,{className:this.props.classes.details},p.a.createElement("div",{className:this.props.classes.fullWidth},p.a.createElement(h.a,{variant:"button",className:this.props.classes.secHeading3},"Description"),p.a.createElement("br",null),p.a.createElement("div",{className:this.props.classes.description},this.task.description||p.a.createElement("i",null,"No description provided"))),p.a.createElement("div",{className:this.props.classes.othDetails},p.a.createElement("div",{className:this.props.classes.column},p.a.createElement(h.a,{variant:"button",className:this.props.classes.secHeading3},"Due At"),p.a.createElement("br",null),p.a.createElement("div",{className:this.props.classes.description},this.parseDate(this.task.deadline))),p.a.createElement("div",{className:this.props.classes.column},p.a.createElement(h.a,{variant:"button",className:this.props.classes.secHeading3},"Reminder"),p.a.createElement("br",null),p.a.createElement("div",{className:this.props.classes.description},this.parseNotifDelta(this.task.notifTimeDelta))))),p.a.createElement(g.a,null),p.a.createElement(k.a,null,p.a.createElement(f.a,{startIcon:p.a.createElement(v.a,null),size:"small"},"Delete"),p.a.createElement(f.a,{startIcon:p.a.createElement(y.a,null),size:"small",color:"secondary"},"Edit"),p.a.createElement(f.a,{startIcon:p.a.createElement(N.a,null),size:"small",color:"primary",onClick:this.markAsDone},"Mark as done"))))}}]),o}(p.a.Component);a.default=Object(d.a)((function(e){return{root:{width:"100%",marginBottom:e.spacing(1)},grow:{flexGrow:1,minWidth:e.spacing(1)},heading:{fontSize:e.typography.pxToRem(15)},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},secHeading3:{fontSize:e.typography.pxToRem(12),color:e.palette.text.secondary},icon:{verticalAlign:"bottom",height:20,width:20},details:{alignItems:"center",display:"block"},column:{flexBasis:"33.33%"},reminderTiming:{minWidth:"fit-content"},fullWidth:{width:"100%"},othDetails:{display:"flex"},description:{marginLeft:e.spacing(1)}}}))(D)}}]);
//# sourceMappingURL=12.66c6b700.chunk.js.map