(this["webpackJsonpreminder-app"]=this["webpackJsonpreminder-app"]||[]).push([[0],{112:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(13),c=n.n(i),o=(n(61),n(44)),l=n(45),m=n(54),s=n(46),d=n(55),u=n(28),p=n(48),E=n.n(p),b=(n(110),n(51)),h=n.n(b),f=n(52),v=n.n(f),R=(n(112),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state={text:"",date:new Date},n.handleReminders=function(){var e=n.props.reminders;return r.a.createElement("ul",{className:"list-group"},e.map((function(e){return r.a.createElement("li",{className:"list-group-item",key:e.id},r.a.createElement("div",null,e.text),r.a.createElement("div",null,h()(new Date(e.date)).fromNow()),r.a.createElement("button",{className:"btn btn-danger text-capitalize",onClick:function(){return n.props.Remove(e.id)}},"remove"))})))},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement("img",{src:v.a,className:"d-block",alt:"Reminder"})),r.a.createElement("div",{className:"title mt-3 mb-3 text-center"},r.a.createElement("h2",{className:"text-capitalize"},"what should i do?")),r.a.createElement("input",{type:"text",placeholder:"Enter What U Think ....?",value:this.state.text,className:"form-control mb-3",onChange:function(t){return e.setState({text:t.target.value})}}),r.a.createElement(E.a,{value:this.state.date,placeholderText:"Enter Date",className:"form-control",selected:this.state.date,onChange:function(t){return e.setState({date:t})},showTimeSelect:!0,timeFormat:"HH:mm",timeCaption:"time",dateFormat:"MMMM d, yyyy h:mm aa"}),r.a.createElement("button",{className:"btn btn-primary text-capitalize btn-block mb-3 mt-3",onClick:function(){e.props.Add(e.state.text,e.state.date),e.setState({text:"",date:""})}},"add reminder"),this.handleReminders(),r.a.createElement("button",{className:"btn btn-danger text-capitalize btn-block mt-2",onClick:function(){return e.props.Clear()}},"clear reminder"))}}]),t}(a.Component)),k=Object(u.b)((function(e){return{reminders:e}}),{Add:function(e,t){return{type:"ADD_REMINDER",text:e,date:t}},Remove:function(e){return{type:"REMOVE_REMINDER",id:e}},Clear:function(){return{type:"CLEAR_REMINDER"}}})(R),x=n(21),y=n(53),N=n(19),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=null;return e=Object(N.read_cookie)("reminder"),"ADD_REMINDER"===t.type?(n=[].concat(Object(y.a)(e),[{text:t.text,date:t.date,id:Math.random()}]),Object(N.bake_cookie)("reminder",n),n):"REMOVE_REMINDER"===t.type?(n=e.filter((function(e){return e.id!==t.id})),Object(N.bake_cookie)("reminder",n),n):"CLEAR_REMINDER"===t.type?(n=[],Object(N.bake_cookie)("reminder",n),n):e};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(113);var w=Object(x.b)(g);c.a.render(r.a.createElement(u.a,{store:w},r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},52:function(e,t,n){e.exports=n.p+"static/media/Reminders.2c51f81e.png"},56:function(e,t,n){e.exports=n(115)},61:function(e,t,n){}},[[56,1,2]]]);
//# sourceMappingURL=main.6c9061e1.chunk.js.map