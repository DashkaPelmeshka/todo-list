(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(9),c=n.n(o),r=n(1),i=n(10),s=n(7),u=n(2),m=n(3),d=n(5),b=n(4),f=n(6),p=(n(17),n(18),function(e){var t=e.onDelete;return l.a.createElement("button",{type:"button",className:"btn delete-button",onClick:function(){t()}},l.a.createElement("i",{className:"material-icons"},"delete"))}),g=function(e){var t=e.onDelete;return l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"TODO list"),l.a.createElement(p,{onDelete:t}))},h=n(11),v=(n(19),function(e){var t=e.done,n=e.label,a=e.onToggleDone;return l.a.createElement("span",{onClick:a,className:"list-item"},l.a.createElement("button",{type:"button",className:"btn item-status-button"},l.a.createElement("i",{className:"material-icons"},t?"check_circle_outline":"panorama_fish_eye")),l.a.createElement("span",{className:(t?"text-italic":null)+" list-item-label"},n))}),E=(n(20),function(e){var t=e.items,n=(e.onToggleImportant,e.onToggleDone),a=e.onDelete,o=t.map((function(e){var t=e.id,o=Object(h.a)(e,["id"]);return l.a.createElement("li",{key:t},l.a.createElement(v,Object.assign({},o,{onToggleDone:function(){return n(t)},onDelete:function(){return a(t)}})))}));return l.a.createElement("ul",{className:"list"},o)}),O=(n(21),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(l)))).state={label:""},n.onLabelChange=function(e){n.setState({label:e.target.value})},n.onSubmit=function(e){e.preventDefault();var t=n.state.label,a=t.replace(/ /g,"").length;if(/^\s+$/.test(t)||!t)alert("Please enter non-empty task name");else if(a<3)alert("Please enter task name longer than 3 symbols");else{n.setState({label:""}),(n.props.onItemAdded||function(){})(t)}},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("form",{className:"item-add-form",onSubmit:this.onSubmit},l.a.createElement("button",{type:"submit",className:"btn delete-button"},l.a.createElement("i",{className:"material-icons add-task-icon"},"add")),l.a.createElement("input",{type:"text",className:"task-input",value:this.state.label,onChange:this.onLabelChange}))}}]),t}(a.Component)),y=(n(22),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(l)))).maxId=10,n.state={items:[{label:"\u041f\u043e\u043a\u043e\u0440\u043c\u0438\u0442\u044c \u0441\u043e\u0431\u0430\u043a\u0443",done:!1,id:1},{label:"\u041f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u043e\u043c",done:!1,id:2},{label:"\u041f\u043e\u043c\u044b\u0442\u044c \u043c\u0430\u0448\u0438\u043d\u0443",done:!1,id:3},{label:"\u041a\u0443\u043f\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u043c\u043e\u043b\u043e\u043a\u043e, \u0441\u043e\u043b\u044c, \u0441\u0430\u0445\u0430\u0440, \u0432\u043e\u0434\u0430, \u043c\u0430\u043a\u0430\u0440\u043e\u043d\u044b, \u043c\u044f\u0441\u043e, \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430",done:!1,id:4},{label:"\u0421\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a",done:!0,id:5}]},n.onItemAdded=function(e){n.setState((function(t){var a=n.createItem(e);return{items:[].concat(Object(s.a)(t.items),[a])}}))},n.toggleProperty=function(e,t,n){var a=e.findIndex((function(e){return e.id===t})),l=!e[a][n],o=Object(i.a)({},e[a],Object(r.a)({},n,l));return[].concat(Object(s.a)(e.slice(0,a)),[o],Object(s.a)(e.slice(a+1)))},n.onToggleDone=function(e){n.setState((function(t){return{items:n.toggleProperty(t.items,e,"done")}}))},n.onDelete=function(){n.setState((function(e){return{items:e.items.filter((function(e){return!e.done}))}}))},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"createItem",value:function(e){return{id:++this.maxId,label:e,done:!1}}},{key:"render",value:function(){var e=this.state.items;return l.a.createElement("div",{className:"app"},l.a.createElement(g,{onDelete:this.onDelete}),l.a.createElement("div",{className:"content"},l.a.createElement(E,{items:e,onToggleDone:this.onToggleDone}),l.a.createElement(O,{onItemAdded:this.onItemAdded})))}}]),t}(a.Component));c.a.render(l.a.createElement(y,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.6a00a15b.chunk.js.map