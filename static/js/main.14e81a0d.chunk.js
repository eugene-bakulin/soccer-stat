(this["webpackJsonpsoccer-stat-app"]=this["webpackJsonpsoccer-stat-app"]||[]).push([[0],{48:function(e,t,a){},61:function(e,t,a){},68:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(49),s=a.n(n),r=(a(61),a(5)),i=a(8),l=a(6),o=a(17),u=a(1),d=15,j=10,h=a(31),m=h.b,b=h.c,O=a(11),g=Object(O.b)({name:"paginationPage",initialState:{matchesPage:1,leaguesPage:1,teamsPage:1},reducers:{setMatchesPage:function(e,t){e.matchesPage=t.payload},setMatchesFirstPage:function(e){e.matchesPage=1},setLeaguesPage:function(e,t){e.leaguesPage=t.payload},setLeaguesFirstPage:function(e){e.leaguesPage=1},setTeamsPage:function(e,t){e.teamsPage=t.payload},setTeamsFirstPage:function(e){e.teamsPage=1}}}),x=g.actions,p=x.setMatchesPage,f=x.setMatchesFirstPage,v=x.setLeaguesPage,I=x.setLeaguesFirstPage,y=x.setTeamsPage,w=x.setTeamsFirstPage,N=function(e){return e.paginationPage},A=g.reducer,M=function(e){var t,a,n=m(),s=b(N),r="matches"===e.type?s.matchesPage:"leagues"===e.type?s.leaguesPage:s.teamsPage;return Object(c.useEffect)((function(){var t=document.querySelector(".pagination-pages");t&&t.addEventListener("click",(function(t){var a=t.target;a!==t.currentTarget&&"..."!==a.innerText&&("matches"===e.type?n(p(+a.innerText)):"leagues"===e.type?n(v(+a.innerText)):n(y(+a.innerText)))}))})),Object(u.jsx)("div",{className:"pagination-pages",children:(t=function(){for(var t=["..."],a="matches"===e.type?Math.ceil(e.respCount/d):"leagues"===e.type?Math.ceil(e.respCount/j):Math.ceil(e.respCount/9),c=[],n=1;n<=a;n++)c.push("".concat(n));return a<=5?c:1===r||2===r?c.slice(0,3).concat(t,c[c.length-1]):r===a||r===a-1?c.slice(0,1).concat(t,c.slice(c.length-3,c.length)):3===r?c.slice(0,1).concat(c.slice(r-2,r+1),t,c[c.length-1]):r===a-2?c.slice(0,1).concat(t,c.slice(r-2,r+1),c[c.length-1]):c.slice(0,1).concat(t,c.slice(r-2,r+1),t,c[c.length-1])}(),a=r,t.map((function(e,t){return Object(u.jsx)("div",{className:"..."===e?"rest":"pagination-page page-".concat(e),style:a===+e?{fontWeight:"bolder",color:"rgb(255, 255, 1)"}:{},children:"".concat(e)},"".concat(e,"_").concat(t,"}"))})))})},C=a(4),k=Object(O.b)({name:"matchId",initialState:{leagueName:null,teamName:null,type:null,id:null},reducers:{setMatchId:function(e,t){e.id=t.payload},setMatchType:function(e,t){e.type=t.payload},setTeamName:function(e,t){e.teamName=t.payload},setLeagueName:function(e,t){e.leagueName=t.payload}}}),L=k.actions,S=L.setMatchId,Y=L.setMatchType,G=L.setTeamName,F=L.setLeagueName,D=function(e){return e.matchId},E=k.reducer,T=function(e){var t=Object(C.m)(),a=m();return Object(u.jsxs)("div",{className:"league-card",onClick:function(){localStorage.setItem("idForMatchDisplay","".concat(e.id)),localStorage.setItem("typeForMatchDisplay","league"),localStorage.setItem("nameForMatchDisplay","".concat(e.name)),a(S(e.id)),a(Y("league")),a(F(e.name)),t("/matches")},children:[Object(u.jsxs)("div",{className:"league-info",children:[Object(u.jsx)("div",{className:"league-name",children:Object(u.jsx)("h3",{children:"".concat(e.name)})}),Object(u.jsx)("div",{className:"league-emblem",children:e.emblem&&Object(u.jsx)("img",{src:e.emblem,alt:"league emblem"})})]}),Object(u.jsxs)("div",{className:"league-area-info",children:[Object(u.jsx)("div",{className:"league-area-name",children:Object(u.jsx)("h4",{children:"".concat(e.area.name)})}),Object(u.jsx)("div",{className:"league-area-flag",children:e.area.flag&&Object(u.jsx)("img",{src:e.area.flag,alt:"area flag"})})]})]})},R=(a(68),function(e){var t=m(),a=b(N).leaguesPage,c=e.leaguesData,n=e.leaguesData?e.leaguesData.count:0;return Object(u.jsxs)("div",{className:"leagues",children:[Object(u.jsx)("div",{className:"leagues-container",children:c&&c.competitions.map((function(e,t){if(t>=(a-1)*j&&t<=a*j-1)return Object(u.jsx)(T,Object(o.a)({},e),"".concat(e.id))}))}),c&&Object(u.jsxs)("div",{className:"leagues-pagination",children:[Object(u.jsx)("div",{className:"double-arrow left-double-arrow ".concat(1===a&&"disabled"),onClick:function(){return t(I())},children:"\u226a"}),Object(u.jsx)("div",{className:"arrow left-arrow ".concat(1===a&&"disabled"),onClick:function(){return t(v(a-1))},children:"<"}),Object(u.jsx)(M,{type:"leagues",respCount:n}),Object(u.jsx)("div",{className:"arrow right-arrow ".concat(a===Math.ceil(n/j)&&"disabled"),onClick:function(){return t(v(a+1))},children:">"}),Object(u.jsx)("div",{className:"double-arrow right-double-arrow ".concat(a===Math.ceil(n/j)&&"disabled"),onClick:function(){return t(v(Math.ceil(n/j)))},children:"\u226b"})]})]})}),W=a(23),Z=(a(73),"https://morning-temple-18735.herokuapp.com/http://api.football-data.org/v4/"),P={headers:{"X-Auth-Token":"f7e09c42ac024933bc182388642a69b1"}},z=function(){var e=Object(i.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get(Z+"competitions/",P);case 2:if(200!==(t=e.sent).status){e.next=9;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(i.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get(Z+"teams/",P);case 2:if(200!==(t=e.sent).status){e.next=9;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(i.a)(Object(r.a)().mark((function e(t,a){var c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=20;break}if("league"!==t){e.next=7;break}return e.next=4,W.a.get(Z+"competitions/"+String(a)+"/matches/",P);case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,W.a.get(Z+"teams/"+String(a)+"/matches/",P);case 9:e.t0=e.sent;case 10:if(200!==(c=e.t0).status){e.next=17;break}return e.next=14,c.data;case 14:return e.abrupt("return",e.sent);case 17:return e.abrupt("return",null);case 18:e.next=21;break;case 20:return e.abrupt("return",null);case 21:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),H=function(){var e=Object(i.a)(Object(r.a)().mark((function e(t,a,c,n){var s;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=20;break}if("league"!==t){e.next=7;break}return e.next=4,W.a.get(Z+"competitions/"+String(a)+"/matches?dateFrom="+c+"&dateTo="+n,P);case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,W.a.get(Z+"teams/"+String(a)+"/matches?dateFrom="+c+"&dateTo="+n,P);case 9:e.t0=e.sent;case 10:if(200!==(s=e.t0).status){e.next=17;break}return e.next=14,s.data;case 14:return e.abrupt("return",e.sent);case 17:return e.abrupt("return",null);case 18:e.next=21;break;case 20:return e.abrupt("return",null);case 21:case"end":return e.stop()}}),e)})));return function(t,a,c,n){return e.apply(this,arguments)}}(),J=a(16),Q=function(e){var t=e.utcDate.split("T")[0],a=e.utcDate.split("T")[1].slice(0,5);return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{width:"80px",align:"center",children:t}),Object(u.jsx)("td",{width:"40px",align:"center",children:a}),Object(u.jsx)("td",{align:"center",children:function(){switch(e.status){case"SCHEDULED":return"\u0417\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d";case"IN_PLAY":return"\u0412 \u0438\u0433\u0440\u0435";case"PAUSED":return"\u041f\u0430\u0443\u0437\u0430";case"FINISHED":return"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d";case"POSTPONED":return"\u041e\u0442\u043b\u043e\u0436\u0435\u043d";case"SUSPENDED":return"\u041f\u0440\u0438\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d";case"CANCELLED":return"\u041e\u0442\u043c\u0435\u043d\u0435\u043d";case"PENALTY_SHOOTOUT":return"\u041f\u0435\u043d\u0430\u043b\u044c\u0442\u0438";case"TIMED":return"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043d";case"AWARDED":return"\u041f\u0440\u0438\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435"}return"-"}()}),Object(u.jsx)("td",{align:"center",children:e.homeTeam.name?e.homeTeam.name:"-"}),Object(u.jsx)("td",{align:"center",children:e.awayTeam.name?e.awayTeam.name:"-"}),Object(u.jsx)("td",{align:"center",children:function(){if(e.score.winner){if("EXTRA_TIME"===e.score.duration||"PENALTY_SHOOTOUT"===e.score.duration)return!e.score.regularTime||Object.is(e.score.regularTime.home,null)||Object.is(e.score.regularTime.away,null)?"-":"".concat(e.score.regularTime.home," : ").concat(e.score.regularTime.away);if(!Object.is(e.score.fullTime.home,null)&&!Object.is(e.score.fullTime.away,null))return"".concat(e.score.fullTime.home," : ").concat(e.score.fullTime.away)}return"-"}()}),Object(u.jsx)("td",{align:"center",children:!e.score.winner||"EXTRA_TIME"!==e.score.duration&&!e.score.extraTime||Object.is(e.score.extraTime.home,null)||Object.is(e.score.extraTime.away,null)?"-":"".concat(e.score.extraTime.home," : ").concat(e.score.extraTime.away)}),Object(u.jsx)("td",{align:"center",children:!e.score.winner||"PENALTY_SHOOTOUT"!==e.score.duration&&!e.score.penalties||Object.is(e.score.penalties.home,null)||Object.is(e.score.penalties.away,null)?"-":"".concat(e.score.penalties.home," : ").concat(e.score.penalties.away)})]})},X=(a(81),Object(O.b)({name:"isLoading",initialState:{isLoading:!1},reducers:{setLoading:function(e,t){e.isLoading=t.payload}}})),U=X.actions.setLoading,K=function(e){return e.isLoading},q=X.reducer,_=Object(O.b)({name:"modalSlice",initialState:{manyReqModalDisplay:!1,deniedModalDisplay:!1},reducers:{setManyReqModal:function(e){e.manyReqModalDisplay=!0},closeManyReqModal:function(e){e.manyReqModalDisplay=!1},setDeniedModal:function(e){e.deniedModalDisplay=!0},closeDeniedModal:function(e){e.deniedModalDisplay=!1}}}),$=_.actions,ee=$.setManyReqModal,te=$.closeManyReqModal,ae=$.setDeniedModal,ce=$.closeDeniedModal,ne=function(e){return e.modalSlice},se=_.reducer,re=function(e){var t=m(),a=b(N).matchesPage,n=Object(c.useState)(null),s=Object(l.a)(n,2),j=s[0],h=s[1],O=Object(c.useState)(null),g=Object(l.a)(O,2),x=g[0],v=g[1],I=Object(c.useState)(null),y=Object(l.a)(I,2),w=y[0],A=y[1],C=Object(c.useState)(null),k=Object(l.a)(C,2),L=k[0],S=k[1],Y=Object(c.useState)(0),G=Object(l.a)(Y,2),F=G[0],D=G[1];Object(c.useEffect)((function(){Object(i.a)(Object(r.a)().mark((function a(){var c,n,s,i,l,o;return Object(r.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t(U(!0)),a.prev=1,c=e.search,!e.id){a.next=9;break}return a.next=6,B(e.type,e.id);case 6:a.t0=a.sent,a.next=10;break;case 9:a.t0=null;case 10:(n=a.t0)&&c?(s=n.matches.filter((function(e){return!!(e.area.name.toLowerCase().includes(c.toLowerCase())||e.competition.name.toLowerCase().includes(c.toLowerCase())||e.homeTeam.name.toLowerCase().includes(c.toLowerCase())||e.homeTeam.shortName.toLowerCase().includes(c.toLowerCase())||e.awayTeam.name.toLowerCase().includes(c.toLowerCase())||e.awayTeam.shortName.toLowerCase().includes(c.toLowerCase())||e.status.toLowerCase().includes(c.toLowerCase()))})),h(s),D(s.length),A(n.resultSet.first),S(n.resultSet.last)):n&&(h(n.matches),D(n.resultSet.count),A(n.resultSet.first),S(n.resultSet.last)),a.next=19;break;case 14:a.prev=14,a.t1=a.catch(1),o=a.t1,429===(null===(i=o.response)||void 0===i?void 0:i.status)&&t(ee()),403===(null===(l=o.response)||void 0===l?void 0:l.status)&&t(ae());case 19:return a.prev=19,t(U(!1)),a.finish(19);case 22:case"end":return a.stop()}}),a,null,[[1,14,19,22]])})))()}),[t,e.id,e.search,e.type]);var E=function(){var a=Object(i.a)(Object(r.a)().mark((function a(){var c,n,s,i,l;return Object(r.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t(U(!0)),a.prev=1,c=document.getElementById("date-start").value,n=document.getElementById("date-end").value,!e.id){a.next=10;break}return a.next=7,H(e.type,e.id,c,n);case 7:a.t0=a.sent,a.next=11;break;case 10:a.t0=null;case 11:(s=a.t0)&&(v(s.matches),D(s.resultSet.count)),t(f()),a.next=20;break;case 16:a.prev=16,a.t1=a.catch(1),l=a.t1,429===(null===(i=l.response)||void 0===i?void 0:i.status)&&t(ee());case 20:return a.prev=20,t(U(!1)),a.finish(20);case 23:case"end":return a.stop()}}),a,null,[[1,16,20,23]])})));return function(){return a.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"matches-container",children:[j&&Object(u.jsxs)("div",{className:"matches-breadcrumbs",children:[Object(u.jsx)(J.b,{className:"breadcrumbs-leagues-link",to:"league"===e.type?"/leagues":"/teams",children:"league"===e.type?"\u041b\u0438\u0433\u0438":"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"}),Object(u.jsx)("div",{className:"breadcrumbs-delimeter",children:"-"}),Object(u.jsx)(J.b,{className:"breadcrumbs-current",to:"",children:"league"===e.type?e.leagueName:e.teamName})]}),j&&Object(u.jsx)("div",{className:"matches-header",children:Object(u.jsx)("h2",{children:"\u041c\u0430\u0442\u0447\u0438"})}),j&&Object(u.jsxs)("div",{className:"matches-date-select",children:[Object(u.jsx)("span",{children:"C"}),Object(u.jsx)("div",{className:"date-select-start",children:Object(u.jsx)("input",{id:"date-start",type:"date",name:"trip-start",defaultValue:w||"",min:w||"",max:L||""})}),Object(u.jsx)("span",{children:"\u043f\u043e"}),Object(u.jsx)("div",{className:"date-select-end",children:Object(u.jsx)("input",{id:"date-end",type:"date",name:"trip-start",defaultValue:L||"",min:w||"",max:L||""})}),Object(u.jsx)("div",{className:"set-button-wrapper",children:Object(u.jsx)("button",{className:"set-date",onClick:E,children:"\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c"})})]}),j&&Object(u.jsxs)("div",{className:"matches-content",children:[0!==F?Object(u.jsxs)("table",{className:"matches-table",children:[Object(u.jsxs)("thead",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{rowSpan:2,children:"\u0414\u0430\u0442\u0430"}),Object(u.jsx)("th",{rowSpan:2,children:"\u0412\u0440\u0435\u043c\u044f"}),Object(u.jsx)("th",{rowSpan:2,children:"\u0421\u0442\u0430\u0442\u0443\u0441"}),Object(u.jsx)("th",{rowSpan:2,children:"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u0410"}),Object(u.jsx)("th",{rowSpan:2,children:"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u0411"}),Object(u.jsx)("th",{colSpan:3,children:"\u0421\u0447\u0435\u0442"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f"}),Object(u.jsx)("th",{children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f"}),Object(u.jsx)("th",{children:"\u041f\u0435\u043d\u0430\u043b\u044c\u0442\u0438"})]})]}),Object(u.jsx)("tbody",{children:(x||j).map((function(t,a){if(a>=(e.page-1)*d&&a<=e.page*d-1)return Object(u.jsx)(Q,Object(o.a)({},t),"".concat(t.id))}))})]}):Object(u.jsx)("h4",{style:{textAlign:"center"},children:"\u043d\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 :("}),0!==F&&Object(u.jsxs)("div",{className:"matches-pagination",children:[Object(u.jsx)("div",{className:"double-arrow left-double-arrow ".concat(1===a&&"disabled"),onClick:function(){return t(f())},children:"\u226a"}),Object(u.jsx)("div",{className:"arrow left-arrow ".concat(1===a&&"disabled"),onClick:function(){return t(p(a-1))},children:"<"}),Object(u.jsx)(M,{type:"matches",respCount:F}),Object(u.jsx)("div",{className:"arrow right-arrow ".concat(a===Math.ceil(F/d)&&"disabled"),onClick:function(){return t(p(a+1))},children:">"}),Object(u.jsx)("div",{className:"double-arrow right-double-arrow ".concat(a===Math.ceil(F/d)&&"disabled"),onClick:function(){return t(p(Math.ceil(F/d)))},children:"\u226b"})]})]})]})},ie=Object(O.b)({name:"searchSlice",initialState:{search:null},reducers:{setSearch:function(e,t){e.search=t.payload},clearSearch:function(e){e.search=null}}}),le=ie.actions,oe=le.setSearch,ue=le.clearSearch,de=function(e){return e.searchSlice},je=ie.reducer,he=(a(82),function(){var e=m(),t=Object(C.m)(),a=Object(C.j)(),n=b(de).search,s=localStorage.getItem("userSearch");return Object(c.useEffect)((function(){var a=document.getElementById("search_field"),c=document.getElementById("search_button");a&&(c&&c.addEventListener("click",(function(){a.value&&""!==a.value.trim()&&("https://eugene-bakulin.github.io/soccer-stat/matches"!==window.location.href&&t("/soccer-stat/search"),e(oe(a.value.trim())),localStorage.setItem("userSearch",a.value.trim()))})),a.addEventListener("search",(function(){(n||s)&&("https://eugene-bakulin.github.io/soccer-stat/matches"!==window.location.href&&t("/soccer-stat"),e(ue()),localStorage.removeItem("userSearch"))})))}),[e,t,a.pathname,n,s]),Object(u.jsx)("div",{className:"search-bar",children:Object(u.jsxs)("form",{className:"search-form ".concat(n||s?"highlighted":""),children:[Object(u.jsx)("input",{id:"search_field",className:"search-field",type:"search",name:"search",placeholder:"/matches"===a.pathname?"\u043f\u043e\u0438\u0441\u043a \u043f\u043e \u043c\u0430\u0442\u0447\u0430\u043c":"\u043f\u043e\u0438\u0441\u043a \u043f\u043e \u043b\u0438\u0433\u0430\u043c \u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u043c",defaultValue:n||(s||""),autoComplete:"off"}),Object(u.jsxs)("div",{className:"search-button-container",children:[Object(u.jsx)("input",{id:"search_button",className:"search-button",type:"button"}),Object(u.jsx)("label",{className:"search-button-label",htmlFor:"search_button",children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAAELCAYAAADOVaNSAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAALiMAAC4jAXilP3YAAAZhaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTAtMDVUMTQ6Mjk6MzMrMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEwLTI4VDIwOjQxOjU1KzA0OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEwLTI4VDIwOjQxOjU1KzA0OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkFkb2JlIFJHQiAoMTk5OCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Y2MwMTAzMzctNTMzNS0wMDRkLWE3YjgtODUzNmY1ZDc0NjRiIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MjAwNjk5YjAtNGVjNS05NTQ4LWI0ODUtNTkzMmEwYjEyNWQ2IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OTNlZDRlZmUtMWRiZC03ODQxLThhNmMtNmUwZGJhN2NiMWEyIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5M2VkNGVmZS0xZGJkLTc4NDEtOGE2Yy02ZTBkYmE3Y2IxYTIiIHN0RXZ0OndoZW49IjIwMjItMTAtMDVUMTQ6Mjk6MzMrMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjYzAxMDMzNy01MzM1LTAwNGQtYTdiOC04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",alt:"search"})})]})]})})}),me=(a(83),function(e){var t=Object(C.m)(),a=m();return Object(u.jsxs)("div",{className:"team-card",onClick:function(){localStorage.setItem("idForMatchDisplay","".concat(e.id)),localStorage.setItem("typeForMatchDisplay","team"),localStorage.setItem("nameForMatchDisplay","".concat(e.name)),a(S(e.id)),a(Y("team")),a(G(e.name)),t("/matches")},children:[Object(u.jsx)("div",{className:"team-name",children:Object(u.jsx)("h3",{children:"".concat(e.name)})}),Object(u.jsx)("div",{className:"team-emblem",children:e.crest&&Object(u.jsx)("img",{src:e.crest,alt:"".concat(e.name," emblem")})})]})}),be=(a(84),function(e){var t=m(),a=b(N).teamsPage,c=e.teamsData,n=e.teamsData?e.teamsData.count:0;return Object(u.jsxs)("div",{className:"teams",children:[Object(u.jsx)("div",{className:"teams-container",children:c&&c.teams.map((function(e,t){if(t>=9*(a-1)&&t<=9*a-1)return Object(u.jsx)(me,Object(o.a)({},e),e.id)}))}),c&&Object(u.jsxs)("div",{className:"teams-pagination",children:[Object(u.jsx)("div",{className:"double-arrow left-double-arrow ".concat(1===a&&"disabled"),onClick:function(){return t(w())},children:"\u226a"}),Object(u.jsx)("div",{className:"arrow left-arrow ".concat(1===a&&"disabled"),onClick:function(){return t(y(a-1))},children:"<"}),Object(u.jsx)(M,{type:"teams",respCount:n}),Object(u.jsx)("div",{className:"arrow right-arrow ".concat(a===Math.ceil(n/9)&&"disabled"),onClick:function(){return t(y(a+1))},children:">"}),Object(u.jsx)("div",{className:"double-arrow right-double-arrow ".concat(a===Math.ceil(n/9)&&"disabled"),onClick:function(){return t(y(Math.ceil(n/9)))},children:"\u226b"})]})]})}),Oe=(a(85),function(){return Object(u.jsx)("div",{className:"loading-overlay",children:Object(u.jsx)("div",{className:"spinner-loader"})})}),ge=(a(86),function(e){var t=e.leaguesData&&e.leaguesData.competitions.filter((function(t){return!(!e.search||!t.area.name.toLowerCase().includes(e.search.toLowerCase())&&!t.name.toLowerCase().includes(e.search.toLowerCase()))})),a=e.teamsData&&e.teamsData.teams.filter((function(t){return!(!e.search||!t.name.toLowerCase().includes(e.search.toLowerCase())&&!t.shortName.toLowerCase().includes(e.search.toLowerCase()))}));return Object(u.jsxs)("div",{className:"search-results-container",children:[Object(u.jsxs)("div",{className:"search-results-leagues",children:[Object(u.jsx)("h3",{className:"search-results-name",children:"\u041b\u0438\u0433\u0438 (".concat(t&&0!==t.length?t.length:0,")")}),Object(u.jsx)("div",{className:"search-results-wrapper",children:t?t.map((function(e){return Object(u.jsx)(T,Object(o.a)({},e),"".concat(e.id))})):Object(u.jsx)("h4",{children:"\u043d\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 :("})})]}),Object(u.jsxs)("div",{className:"search-results-teams",children:[Object(u.jsx)("h3",{className:"search-results-name",children:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b (".concat(a?a.length:0,")")}),Object(u.jsx)("div",{className:"search-results-wrapper",children:a&&0!==a.length?a.map((function(e){return Object(u.jsx)(me,Object(o.a)({},e),"".concat(e.id))})):Object(u.jsx)("h4",{children:"\u043d\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 :("})})]})]})}),xe=(a(48),function(){var e=m();return Object(u.jsx)("div",{className:"modal-overlay",onClick:function(){e(te())},children:Object(u.jsxs)("div",{className:"many-requests-modal",children:[Object(u.jsx)("h3",{children:"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 :("}),Object(u.jsx)("h4",{children:"\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 60 \u0441\u0435\u043a\u0443\u043d\u0434, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430."})]})})}),pe=function(){var e=m(),t=Object(C.m)();return Object(u.jsx)("div",{className:"modal-overlay",onClick:function(){e(ce()),t("/teams")},children:Object(u.jsx)("div",{className:"denied-modal",children:Object(u.jsx)("h3",{children:"\u041d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u044b :("})})})},fe=a.p+"static/media/soccer_ball.2f940714.svg";var ve=function(){var e=b(D).type,t=b(D).id,a=b(N).matchesPage,n=b(D).teamName,s=b(D).leagueName,o=b(K).isLoading,d=b(de).search,j=b(ne).manyReqModalDisplay,h=b(ne).deniedModalDisplay,O=m(),g=Object(C.j)(),x=Object(c.useState)(null),p=Object(l.a)(x,2),f=p[0],v=p[1],I=Object(c.useState)(null),y=Object(l.a)(I,2),w=y[0],A=y[1],M=localStorage.getItem("idForMatchDisplay"),k=localStorage.getItem("typeForMatchDisplay"),L=localStorage.getItem("nameForMatchDisplay"),S=localStorage.getItem("userSearch"),Y=function(){O(ue()),localStorage.removeItem("userSearch")};return Object(c.useEffect)((function(){Object(i.a)(Object(r.a)().mark((function e(){var t,a,c,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(U(!0)),e.prev=1,e.next=4,z();case 4:return t=e.sent,e.next=7,V();case 7:a=e.sent,t&&v(t),a&&A(a),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),n=e.t0,429===(null===(c=n.response)||void 0===c?void 0:c.status)&&O(ee());case 16:return e.prev=16,O(U(!1)),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,12,16,19]])})))()}),[O]),Object(u.jsxs)("div",{className:"App",children:[o&&Object(u.jsx)(Oe,{}),j&&Object(u.jsx)(xe,{}),h&&Object(u.jsx)(pe,{}),Object(u.jsxs)("header",{className:"header-container",children:[Object(u.jsx)("div",{className:"header-logo",children:Object(u.jsx)("img",{src:fe,alt:"soccer ball"})}),Object(u.jsx)("div",{className:"header-leagues",children:Object(u.jsx)(J.b,{className:"header-link ".concat(("/leagues"===g.pathname||"/"===g.pathname)&&"active-link"),to:"/leagues",onClick:Y,children:"\u041b\u0438\u0433\u0438"})}),Object(u.jsx)("div",{className:"header-teams",children:Object(u.jsx)(J.b,{className:"header-link ".concat("/teams"===g.pathname&&"active-link"),to:"/teams",onClick:Y,children:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"})}),Object(u.jsx)(he,{})]}),Object(u.jsx)("main",{children:Object(u.jsxs)(C.c,{children:[Object(u.jsx)(C.a,{path:"/*",element:Object(u.jsx)(R,{leaguesData:f})}),Object(u.jsx)(C.a,{path:"/teams",element:Object(u.jsx)(be,{teamsData:w})}),Object(u.jsx)(C.a,{path:"/matches",element:Object(u.jsx)(re,{search:d||(S||null),teamName:n||(L||null),leagueName:s||(L||null),type:e||(k||null),id:t||(M?+M:null),page:a})}),Object(u.jsx)(C.a,{path:"/search",element:Object(u.jsx)(ge,{leaguesData:f,teamsData:w,search:d||(S||null)})})]})}),o||j||h||!f||!w?null:Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("div",{className:"footer-info",children:Object(u.jsx)("a",{href:"https://eugene-bakulin.github.io/cv/build/",target:"_blank",rel:"noreferrer",children:"Eugene Bakulin, 2022"})})})]})},Ie=Object(O.b)({name:"matchesCount",initialState:{count:0},reducers:{setMatchesCount:function(e,t){e.count=t.payload}}}),ye=(Ie.actions.setMatchesCount,Ie.reducer),we=Object(O.a)({reducer:{matchId:E,paginationPage:A,matchesCount:ye,isLoading:q,searchSlice:je,modalSlice:se}});s.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(h.a,{store:we,children:Object(u.jsx)(J.a,{children:Object(u.jsx)(ve,{})})}))}},[[87,1,2]]]);
//# sourceMappingURL=main.14e81a0d.chunk.js.map