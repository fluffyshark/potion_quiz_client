"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[843],{78843:function(e,n,a){a.r(n),a.d(n,{default:function(){return b}});var r=a(42982),s=a(70885),t=a(72791),i=a(29689),c=a(59434),d=a(66050),o=a(10971),l=a(69670),p=a(30823),u=a(72395),m=a(80184);var f=function(){var e=(0,t.useState)([{name:"NO PLAYER",coins:0,cards:[0,0,0],points:0},{name:"NO PLAYER",coins:0,cards:[0,0,0],points:0},{name:"NO PLAYER",coins:0,cards:[0,0,0],points:0},{name:"NO PLAYER",coins:0,cards:[0,0,0],points:0},{name:"NO PLAYER",coins:0,cards:[0,0,0],points:0},{name:"NO PLAYER",coins:0,cards:[0,0,0],points:0}]),n=(0,s.Z)(e,2),a=n[0],r=n[1],f=(0,c.I0)(),h=(0,t.useState)(!0),T=(0,s.Z)(h,2),v=T[0],j=T[1],b=(0,c.v9)((function(e){return e.GameData.value})),g=(0,c.v9)((function(e){return e.powers.value})),E=["leaderboard_containter_rank01","leaderboard_containter_rank02","leaderboard_containter_rank03","leaderboard_containter_rank04","leaderboard_containter_rank05","leaderboard_containter_rank06"],R=function(e){for(var n=["winCardTransparent","winCardTransparent","winCardTransparent","winCardTransparent","winCardTransparent","winCardTransparent","winCardTransparent","winCardTransparent","winCardTransparent","winCardTransparent","winCardTransparent","winCardTransparent","winCardTransparent","winCardTransparent","winCardTransparent","winCardTransparent","winCardTransparent","winCardTransparent","winCardTransparent","winCardTransparent"],r=0;r<a[e].cards[2];r++)n.push("winCardSolid");n.reverse();for(var s=[],t=0;t<20;t++)s.push((0,m.jsx)("img",{src:"data:image/png;base64,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",className:n[t],alt:""}));return(0,m.jsx)("div",{className:"leaderboard_rank_container_cards_winmode",children:s})};return(0,t.useEffect)((function(){!function(){var e=[];b.map((function(n){var a=20*n.cards[0]+50*n.cards[1]+150*n.cards[2];e.push({name:n.playerName,coins:n.coins,cards:n.cards,points:a})})),e.sort((function(e,n){return n.points-e.points})),console.log("playersPointsAndNames: ",e);for(var n=0;n<e.length;n++)e.length>6&&e.pop();if(e.length<6)for(var a=0;e.length<6;a++)e.push({name:"NO PLAYER",coins:0,cards:[0,0,0],points:0});r(e)}()}),[b]),(0,t.useEffect)((function(){"active"===g[20].leaderboard_card&&j(!0),g[20].counter20_card>15&&(f((0,d.mx)({power_name:"LEADERBOARD STATS"})),f((0,d.Tn)({power_name:"LEADERBOARD CARDS"})))}),[g[20].counter20_card]),(0,t.useEffect)((function(){"active"===g[21].leaderboard_stats&&j(!1),g[21].counter21_stats>15&&(f((0,d.Tn)({power_name:"LEADERBOARD STATS"})),f((0,d.mx)({power_name:"LEADERBOARD CARDS"})))}),[g[21].counter21_stats]),(0,m.jsxs)("div",{className:"leaderboardView",children:[(0,m.jsx)("div",{className:"leaderboard_middle",children:(0,m.jsx)("div",{className:"leaderboard_middle_container",children:(0,m.jsxs)("div",{className:"leaderboard_image_container",children:[(0,m.jsx)("img",{src:i,alt:""}),v?(0,m.jsx)("div",{children:a.map((function(e,n){return(0,m.jsxs)("div",{className:"leaderboard_rank_container",id:E[n],children:[(0,m.jsx)("div",{className:"leaderboard_rank_container_name_winmode",children:(0,m.jsx)("p",{children:e.name})}),R(n)]},n)}))}):(0,m.jsx)("div",{children:a.map((function(e,n){return(0,m.jsxs)("div",{className:"leaderboard_rank_container",id:E[n],children:[(0,m.jsx)("div",{className:"leaderboard_rank_container_name",children:(0,m.jsx)("p",{children:e.name})}),(0,m.jsxs)("div",{className:"leaderboard_rank_container_cards",children:[(0,m.jsxs)("p",{className:"leaderboard_bronze_cards",children:[e.cards[0],"x"]}),(0,m.jsx)("img",{src:o,alt:""}),(0,m.jsxs)("p",{className:"leaderboard_silver_cards",children:[e.cards[1],"x"]}),(0,m.jsx)("img",{src:l,alt:""}),(0,m.jsxs)("p",{className:"leaderboard_gold_cards",children:[e.cards[2],"x"]}),(0,m.jsx)("img",{src:p,alt:""})]}),(0,m.jsxs)("div",{className:"leaderboard_rank_container_coins",children:[(0,m.jsx)("p",{children:e.coins}),(0,m.jsx)("img",{src:u,alt:""})]})]},n)}))})]})})}),(0,m.jsx)("div",{className:"leaderboard_footer"})]})};var h=function(e){var n=(0,t.useRef)(null),a=(0,t.useState)("00:00:00"),r=(0,s.Z)(a,2),i=r[0],c=r[1],d=(0,t.useState)(0),o=(0,s.Z)(d,2),l=o[0],p=o[1];function u(e){var a=function(e){var n=Date.parse(e)-Date.parse(new Date),a=Math.floor(n/1e3%60),r=Math.floor(n/1e3/60%60),s=Math.floor(n/1e3*60*60%24);return{total:n,days:Math.floor(n/864e5),hours:s,minutes:r,seconds:a}}(e),r=a.total,s=a.hours,t=a.minutes,i=a.seconds;r>=0?c((s>9?s:"0"+s)+":"+(t>9?t:"0"+t)+":"+(i>9?i:"0"+i)):clearInterval(n.current)}return(0,t.useEffect)((function(){!0===e.startTimer&&(0!==l&&(n.current&&clearInterval(n.current),function(e){c("00:00:00"),n.current&&clearInterval(n.current);var a=setInterval((function(){u(e)}),1e3);n.current=a}(function(){var e=new Date;return e.setSeconds(e.getSeconds()+60*l),e}()),console.log("TIMER START")),document.getElementById("timer_container").style.display="none",0!==l&&(document.getElementById("actual_timer").style.display="inherit"))}),[e]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{id:"timer_container",children:[(0,m.jsx)("p",{className:"timer_text",children:"END QUIZ IN"}),(0,m.jsx)("input",{type:"text",placeholder:"0",onChange:function(e){return p(e.target.value)}}),(0,m.jsx)("p",{className:"timer_text",children:"MINUTES"})]}),(0,m.jsx)("div",{id:"actual_timer",children:i})]})},T=a(95360),v=a(31938),j=a(32556);var b=function(e){var n=e.socket,a=(0,c.I0)(),i=(0,c.v9)((function(e){return e.playerStats.value})),o=(0,t.useState)(!1),l=(0,s.Z)(o,2),p=l[0],u=l[1],b=(0,t.useState)([]),g=(0,s.Z)(b,2),E=g[0],R=g[1],x=(0,t.useState)(!1),O=(0,s.Z)(x,2),D=O[0],w=O[1];return(0,t.useEffect)((function(){n.on("player_accepted",(function(e){console.log("player_accepted",e),R((function(n){return[].concat((0,r.Z)(n),[e.nickname])}))})),n.on("start_game",(function(e){console.log("Start Game Host",e)})),n.on("sending_server_gameData",(function(e){console.log("FROM SERVER TO HOST.JS: ",e),n.emit("gameData_from_host",e)})),n.on("sending_jukebox_to_host",(function(e){console.log("FROM JUKEBOX: ",e),(0,v.G)(e.melody)}))}),[n]),(0,m.jsxs)("div",{className:"hostingView",children:[(0,m.jsxs)("div",{className:"hostingView_top",children:[(0,m.jsx)(h,{startTimer:p}),D?(0,m.jsx)(T.E.button,{whileHover:{scale:1.05},whileTap:{scale:.9},transition:{type:"spring",stiffness:400,damping:17},className:"hostView_startBtn",onClick:function(){return n.emit("host_end_game",i.gameCode),void(0,j.i)(n,i.gameCode)},children:"END GAME"}):(0,m.jsx)(T.E.button,{whileHover:{scale:1.05},whileTap:{scale:.9},transition:{type:"spring",stiffness:400,damping:17},className:"hostView_startBtn",onClick:function(){return n.emit("ready_game",i.gameCode),u(!0),w(!0),void a((0,d.mx)({power_name:"LEADERBOARD CARDS"}))},children:"START GAME"})]}),D?(0,m.jsx)(f,{}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"hostingView_middle",children:[(0,m.jsx)("p",{className:"joinDesc",children:"Go to potionquiz.com and enter:"}),(0,m.jsx)("p",{className:"joinCode",children:i.displayCode})]}),(0,m.jsx)("div",{className:"hostingView_bottom",children:E.map((function(e,n){if(E.length>0)return(0,m.jsx)("div",{className:"playerTags",children:e},n)}))})]})]})}},29689:function(e,n,a){e.exports=a.p+"static/media/leaderboard.8b91956a8f11ca7fe9a5.webp"},10971:function(e,n,a){e.exports=a.p+"static/media/bronze_card_display.3fa2ce9b4685ed132f53.png"},30823:function(e,n,a){e.exports=a.p+"static/media/gold_card_display.dd91cafb0261b8fc2746.png"},69670:function(e,n,a){e.exports=a.p+"static/media/silver_card_display.769a92187d71da62794c.png"}}]);
//# sourceMappingURL=843.6d4620f6.chunk.js.map