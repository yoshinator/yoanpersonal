(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),o=a.n(s),i=a(1),c=a(2),l=a(4),m=a(3),u=a(5),d=a(6),h=a(10),p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).drag=function(e,t){var n=document.getElementById("memory-".concat(a.state.id)).parentElement,r={x:"".concat(e.clientX/n.offsetWidth*100,"%"),y:"".concat(e.clientY/n.offsetHeight*100,"%")},s=r.x,o=r.y;a.setState({x:s,y:o}),t(r,a.state.id)},a.state={id:a.props.memory.id,x:a.props.memory.x,y:a.props.memory.y,text:a.props.memory.text},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{draggable:"true",onDragEnd:function(t){return e.drag(t,e.props.updateMemory)},className:"memory",id:"memory-".concat(this.state.id),style:{left:"".concat(this.state.x),top:"".concat(this.state.y)}}," ",this.state.text,r.a.createElement("button",{className:"delete-memory",onClick:function(){return e.props.deleteMemory(e.state.id)}},"X"))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).renderMemories=function(){return a.props.memories.map(function(e){return r.a.createElement(p,{memory:e,key:e.id,deleteMemory:a.props.deleteMemory,updateMemory:a.props.updateMemory})})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.renderMemories())}}]),t}(n.Component),f=a(7),y=function(){function e(t){Object(i.a)(this,e),this.endpoint="https://memory-castle.herokuapp.com/".concat(t),this.headers={Accept:"application/json","Content-Type":"application/json"}}return Object(c.a)(e,[{key:"getAll",value:function(){return fetch(this.endpoint,{method:"GET",headers:Object(f.a)({},this.headers,{Authorization:localStorage.getItem("jwt")})}).then(function(e){return e.json()})}},{key:"getSingle",value:function(e){return fetch("".concat(this.endpoint,"/").concat(e),{headers:Object(f.a)({},this.headers,{Authorization:localStorage.getItem("jwt")})}).then(function(e){return e.json()})}},{key:"createItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return fetch("".concat(this.endpoint,"/").concat(t),{method:"POST",headers:Object(f.a)({},this.headers,{Authorization:localStorage.getItem("jwt")}),body:JSON.stringify(e)})}},{key:"updateItem",value:function(e,t){return fetch("".concat(this.endpoint,"/").concat(t),{method:"PATCH",headers:Object(f.a)({},this.headers,{Authorization:localStorage.getItem("jwt")}),body:JSON.stringify(e)})}},{key:"deleteItem",value:function(e){return fetch("".concat(this.endpoint,"/").concat(e),{method:"DELETE",headers:Object(f.a)({},this.headers,{Authorization:localStorage.getItem("jwt")})}).then(function(e){return e.json()})}}]),e}(),v=new y("api/v1/memories/"),b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={text:"",castle_id:a.props.castle.id,x:"".concat(a.props.x,"%"),y:"".concat(a.props.y,"%")},a.createMemory=function(e){e.preventDefault(),v.createItem(a.state).then(function(e){return e.ok||console.error(e),e.json()}).then(function(e){a.props.updateCastle(e),a.setState({x:"",y:"",text:""})})},a.handleChange=function(e){a.setState({text:e.target.value})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({x:"".concat(e.x,"%"),y:"".concat(e.y,"%")})}},{key:"render",value:function(){return console.log(this.state),""===this.state.x?void 0:r.a.createElement("div",{className:"create-memory-form",style:{left:"".concat(this.state.x),top:"".concat(this.state.y)}},r.a.createElement("form",{onSubmit:this.createMemory},r.a.createElement("input",{type:"text",onChange:this.handleChange,placeholder:"What do you want to remember?",name:"text",value:this.state.text,autoFocus:!0}),r.a.createElement("button",{type:"submit"},"Create Memory")))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:a.props.name,image:a.props.image},a.updateCastle=function(e){e.preventDefault(),a.props.ApiAdapter.updateItem(a.state,a.props.castleId).then(a.props.handleEdit(e,a.state.name,a.state.image))},a.handleChange=function(e){a.setState(Object(d.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"edit-castle-form"},r.a.createElement("form",{onSubmit:function(t){return e.updateCastle(t)}},r.a.createElement("input",{onChange:this.handleChange,type:"text",name:"name",value:this.state.name}),r.a.createElement("input",{onChange:this.handleChange,type:"text",name:"image",value:this.state.image}),r.a.createElement("br",null),r.a.createElement("button",null,"Update")))}}]),t}(n.Component),E=new y("api/v1/castles"),C=new y("api/v1/memories"),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleExpand=function(){a.setState({expanded:!a.state.expanded})},a.handleDelete=function(){E.deleteItem(a.props.castle.id).then(function(e){return a.props.updateCurrentUser(e)})},a.handleEdit=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.state.name,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.state.image;a.setState({name:t,image:n,editing:!a.state.editing})},a.updateCastle=function(e){var t=a.state.memories;t.push(e),a.setState({memories:t})},a.addMemory=function(e){isNaN(e.target.width)||0===e.target.width||a.setState({newMem:!0,x:e.clientX/e.target.width*100,y:e.clientY/e.target.height*100})},a.updateMemory=function(e,t){C.updateItem(e,t).then(function(e){return e.json()}).then(function(e){var t=a.state.memories.filter(function(t){return t.id!==e.id});a.setState({memories:[].concat(Object(h.a)(t),[e]),newMem:!1})})},a.deleteMemory=function(e){var t=a.state.memories.filter(function(t){return t.id!==e});a.setState({memories:t}),C.deleteItem(e)},a.jsxBuilder=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"castle-card-header"},a.state.name," "),r.a.createElement("button",{className:"expand-castle",onClick:a.handleExpand},"Min"),r.a.createElement("button",{className:"edit-castle",onClick:a.handleEdit}," Edit"),!a.state.expanded&&r.a.createElement("label",{className:"delete-castle",onClick:a.handleDelete},r.a.createElement("i",{className:"far fa-times-circle"})))},a.state={name:a.props.castle.name,image:a.props.castle.castle_image,memories:[],x:null,y:null,expanded:!1,editing:!1,newMem:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.getSingle(this.props.castle.id).then(function(t){return e.setState({memories:t.memories})})}},{key:"render",value:function(){if(!1===this.state.expanded&&!1===this.state.editing){var e={background:"url(".concat(this.state.image,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",zIndex:"1"};return r.a.createElement("div",{className:"castle-card",style:e},this.jsxBuilder())}return!0===this.state.expanded&&!1===this.state.editing?r.a.createElement("div",{className:"castle-card-expanded",onClick:this.addMemory},r.a.createElement("img",{src:this.state.image,alt:this.state.name}),this.state.newMem&&r.a.createElement(b,{x:this.state.x,y:this.state.y,castle:this.props.castle,updateCastle:this.updateCastle}),r.a.createElement(g,{memories:this.state.memories,ApiAdapter:E,deleteMemory:this.deleteMemory,updateMemory:this.updateMemory}),this.jsxBuilder()):r.a.createElement("div",{className:"castle-card-expanded editing",onClick:this.addMemory},r.a.createElement("img",{src:this.state.image,alt:this.state.name}),r.a.createElement(j,{handleEdit:this.handleEdit,ApiAdapter:E,name:this.state.name,image:this.state.image,castleId:this.props.castle.id}),this.jsxBuilder())}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).renderCastles=function(){return a.props.castles.map(function(e){return r.a.createElement(w,{castle:e,key:e.id+Math.random(),updateCurrentUser:a.props.updateCurrentUser,user:a.props.user})})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"castles-container"},this.renderCastles())}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).createCastle=function(e){e.preventDefault();var t=new FormData;return t.append("castle_image",a.state.castle_image,a.state.castle_image.name),t.append("name",a.state.name),t.append("user_id",localStorage.getItem("id")),fetch("https://memory-castle.herokuapp.com//api/v1/castles",{method:"POST",headers:{Accept:"application/json",Authorization:localStorage.getItem("jwt")},body:t}).then(function(e){return e.json()}).then(function(e){var t=a.props.user;t.castles=a.props.user.castles.concat(e),a.props.updateCurrentUser(t),a.setState({name:"",user_id:a.props.user.id,castle_image:null})})},a.handleChange=function(e){a.setState(Object(d.a)({},e.target.name,e.target.value))},a.onFileChange=function(e){a.setState({castle_image:e.target.files[0]})},a.signOut=function(){a.props.updateCurrentUser({}),localStorage.clear()},a.state={name:"",user_id:a.props.user.id,castle_image:null},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"create-castle-form"},r.a.createElement("button",{onClick:this.signOut},"Sign out"),r.a.createElement("form",{onSubmit:this.createCastle},r.a.createElement("input",{type:"text",onChange:this.handleChange,placeholder:"castle name",name:"name",value:this.state.name}),r.a.createElement("label",{className:"custom-file-upload",htmlFor:"file-upload"},this.state.castle_image?this.state.castle_image.name:"Upload Image",r.a.createElement("input",{type:"file",id:"file-upload",onChange:this.onFileChange})),r.a.createElement("button",{type:"submit"},"Create Castle"))))}}]),t}(n.Component),x=function(e){var t=e.user;return r.a.createElement("div",{className:"user-welcome"},"Welcome, ",t.name,"!")},k=function(e){var t=e.user,a=e.updateCurrentUser;return t.castles&&t.castles.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{user:t}),r.a.createElement(S,{user:t,updateCurrentUser:a}),r.a.createElement(O,{castles:t.castles,updateCurrentUser:a,user:t})):r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{user:t}),r.a.createElement("div",{className:"no-castle-splash"},"You don't have any castles create one."),r.a.createElement(S,{user:t,updateCurrentUser:a}))},U=new y("api/v1/users"),I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",password:"",passwordConfirmation:"",signUp:!1,currentUser:{}},a.isEmpty=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},a.handleChange=function(e){" "!==e.target.value&&a.setState(Object(d.a)({},e.target.name,e.target.value))},a.setCurrentUser=function(e){U.getSingle(e).then(function(e){a.setState({currentUser:e})})},a.updateCurrentUser=function(e){a.setState({currentUser:e,email:"",password:"",passwordConfirmation:""})},a.createNewUser=function(){if(a.state.password===a.state.passwordConfirmation)return U.createItem({name:a.state.name,email:a.state.email,password:a.state.password}).then(function(e){return e.ok||console.error(e),e.json()}).then(function(e){localStorage.setItem("jwt",e.jwt),localStorage.setItem("id",e.user.id),a.setCurrentUser(e.user.id)});alert("Passwords don't  match please try again")},a.loginUser=function(e){return e.preventDefault(),U.createItem({user:{email:a.state.email,password:a.state.password}},"login").then(function(e){return e.ok||console.error(e),e.json()}).then(function(e){e.user?(localStorage.setItem("jwt",e.jwt),localStorage.setItem("id",e.user.id),a.setCurrentUser(e.user.id)):alert("Username and Password not found")})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("jwt")&&localStorage.getItem("id")&&this.setCurrentUser(localStorage.getItem("id"))}},{key:"render",value:function(){var e=this;return console.log(this.state),this.isEmpty(this.state.currentUser)?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"sign-in-form",onSubmit:this.state.signUp?this.createNewUser:this.loginUser},this.state.signUp&&r.a.createElement("input",{onChange:this.handleChange,type:"text",name:"name",value:this.state.name,placeholder:"your name"}),r.a.createElement("input",{onChange:this.handleChange,type:"email",name:"email",value:this.state.email,placeholder:"your@email.com"}),r.a.createElement("input",{onChange:this.handleChange,type:"password",name:"password",value:this.state.password,placeholder:"password 6 characters"}),this.state.signUp&&r.a.createElement("input",{onChange:this.handleChange,type:"password",name:"passwordConfirmation",value:this.state.passwordConfirmation,placeholder:"password 6 characters"}),r.a.createElement("button",{type:"submit",name:"submit"},this.state.signUp?"Sign up":"Sign in"),this.state.signUp?r.a.createElement("label",{className:"link",onClick:function(){return e.setState({signUp:!1})}},"Login"):r.a.createElement("label",{className:"link",onClick:function(){return e.setState({signUp:!0})}},"Sign Up"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{user:this.state.currentUser,updateCurrentUser:this.updateCurrentUser,ApiAdapter:U}))}}]),t}(n.Component),M=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"Welcome to Memory Castle"),r.a.createElement("div",{className:"intro"},"A memory palace is an imaginary location in your mind where you can store mnemonic images. The most common type of memory palace involves making a journey through a place you know well, like a building or town. Along that journey there are specific locations that you always visit in the same order.",r.a.createElement("a",{href:"https://sansforgetica.rmit/",rel:"noopener noreferrer",target:"_blank"},"On your journey you will see this crazy font. Its a font developed by MIT. It's scientifically designed to help you remember things. ")),r.a.createElement(I,null))}}]),t}(n.Component);a(17),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.86743a53.chunk.js.map