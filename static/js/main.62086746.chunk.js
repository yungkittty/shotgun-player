(this["webpackJsonpshotgun-player"]=this["webpackJsonpshotgun-player"]||[]).push([[0],{56:function(e,n,t){e.exports=t(71)},70:function(e,n,t){},71:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(46),i=t.n(c),o=t(13),u=t(38),l=t(8),d=t(4),s=t(5);function f(){var e=Object(d.a)(["\n  box-sizing: border-box;\n"]);return f=function(){return e},e}var m=s.a.div(f());function p(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  background-color: #212330;\n"]);return p=function(){return e},e}var b=Object(s.a)(m)(p()),g=t(23),h=t(14),k=t(26),v=t(29);function x(){var e=Object(d.a)(["\n  {\n    me {\n      id\n    }\n  }\n"]);return x=function(){return e},e}var j=Object(k.b)(x()),O=function(){var e=Object(v.a)(j),n=e.loading,t=e.error,r=e.data;return n||t?{loading:n,error:t}:Object(h.a)({loading:n,error:t},r.me)},w=function(e){var n=e.children,t=Object(g.a)(e,["children"]),r=O(),c=r.loading,i=r.id;return a.a.createElement(l.b,Object.assign({},t,{render:function(){return c?null:i?n:a.a.createElement(l.a,{to:"/shotgun-player/sign-in"})}}))},E=t(6),y=t.n(E);function T(){var e=Object(d.a)(["\n  ","\n"]);return T=function(){return e},e}var C=s.a.div(T(),(function(e){var n=e.size,t=e.weight,r=e.color;return"\n      margin: 0px;\n      padding: 0px;\n      font-family: Roboto;\n      font-size: ".concat(n,"px;\n      font-weight: ").concat(t,";\n      line-height: 1.5;\n      color: ").concat(r,";\n    ")}));C.defaultProps={size:16,weight:400,color:"white"},C.propTypes={size:y.a.oneOf([16,18,24]),weight:y.a.oneOf([400,700]),color:y.a.oneOf(["white","grey"])};var L=C;function z(){var e=Object(d.a)(["\n  flex-shrink: 0;\n  width: 100vw;\n  height: 100px;\n  padding-left: 10%;\n  padding-right: 10%;\n  background-color: #1a1b26;\n"]);return z=function(){return e},e}function I(){var e=Object(d.a)(["\n  ","\n"]);return I=function(){return e},e}var S=Object(s.a)(m)(I(),(function(e){var n=e.eventImages,t="\n      background-image: linear-gradient(rgba(26, 27, 38, 0.2), rgb(26, 27, 38)), url(".concat(((n||[])[0]||{}).url,");\n      background-size: cover;\n      background-position: center center;\n      background-repeat: no-repeat;\n    ");return"\n      display: flex;\n      flex-shrink: 0;\n      flex-direction: column;\n      justify-content: flex-end;\n      width: 100%;\n      height: 300px;\n      padding-left: 10%;\n      padding-right: 10%;\n      ".concat(n?t:"","\n      background-color: #1a1b26;\n  ")})),P=Object(s.a)(m)(z()),A=function(e){var n=e.eventName,t=e.eventImages;return a.a.createElement(a.a.Fragment,null,a.a.createElement(S,{eventImages:t},a.a.createElement(L,{size:32,weight:700},n),a.a.createElement(L,{size:16,color:"grey"},"Mon 6 July")),a.a.createElement(P,null))};function D(){var e=Object(d.a)(["\n  display: flex;\n  flex-shrink: 0;\n  flex-direction: column;\n  width: 50%;\n  margin-right: 50px;\n  margin-bottom: 50px;\n"]);return D=function(){return e},e}var N=Object(s.a)(m)(D());function B(){var e=Object(d.a)(["\n  width: 100%;\n  height: 1px;\n  margin-bottom: 50px;\n  background-image: linear-gradient(\n    to right,\n    rgb(108, 19, 221),\n    rgb(253, 48, 154)\n  );\n"]);return B=function(){return e},e}function R(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: fit-content;\n"]);return R=function(){return e},e}var F=Object(s.a)(m)(R()),W=Object(s.a)(m)(B()),$=function(e){var n=e.children;return a.a.createElement(F,null,a.a.createElement(L,{size:24,weight:700},n),a.a.createElement(W,null))},q=function(){return a.a.createElement(N,null,a.a.createElement($,null,"Tickets"))},J=t(21);function M(){var e=Object(d.a)(["\n  display: flex;\n  margin: 0px;\n  padding: 0px;\n  border: unset;\n  border-radius: 8px;\n  outline: unset;\n  cursor: pointer;\n  background-color: unset;\n\n  &:hover {\n    filter: brightness(105%);\n  }\n"]);return M=function(){return e},e}var _=s.a.button(M());function U(){var e=Object(d.a)(["\n  ","\n"]);return U=function(){return e},e}function X(){var e=Object(d.a)(["\n  ","\n"]);return X=function(){return e},e}var G=Object(s.a)(_)(X(),(function(e){var n=e.checked,t=e.checkedColor,r=e.uncheckedColor,a=e.disabled;return"\n      display: flex;\n      flex-direction: row;\n      width: 35px;\n      height: 20px;\n      border-radius: 10px;\n      ".concat(a?"cursor: unset;":"","\n      background-color: ").concat(n?t:r,";\n      transition: background-color 0.1s ease;\n    ")})),Z=Object(s.a)(m)(U(),(function(e){var n=e.checked;return"\n      position: relative;\n      left: ".concat(n?"15":"0","px;\n      transition: left 0.1s ease;\n      width: 20px;\n      height: 20px;\n      border-radius: 10px;\n      background-color: white;\n    ")})),H=function(e){e.className;var n=e.checked,t=e.checkedColor,r=e.uncheckedColor,c=(e.style,e.onClick),i=Object(g.a)(e,["className","checked","checkedColor","uncheckedColor","style","onClick"]);return a.a.createElement(G,Object.assign({},i,{checked:n,checkedColor:t,uncheckedColor:r,onClick:c}),a.a.createElement(Z,{checked:n}))};H.defaultProps={className:void 0,style:void 0};var K=H,Q=t(42),V=t(27),Y=t(19),ee=t.n(Y),ne=t(22),te=t(54),re=function(e){var n=e.size,t=Object(g.a)(e,["size"]);return a.a.createElement(te.a,Object.assign({},t,{style:{width:n,height:n}}))},ae=function(e){var n=e.style,t=e.onClick,r=Object(g.a)(e,["style","onClick"]);return a.a.createElement(_,{style:n,onClick:t},a.a.createElement(re,r))};ae.defaultProps={style:void 0,onClick:void 0};var ce=ae;function ie(){var e=Object(d.a)(["\n  ","\n"]);return ie=function(){return e},e}function oe(){var e=Object(d.a)(["\n  ","\n"]);return oe=function(){return e},e}var ue=Object(s.a)(m)(oe(),(function(e){var n=e.currentTrackPercentage;return"\n    display: flex;\n    flex: 1;\n    flex-direction: row;\n    align-items: center;\n    height: 6px;\n    border-radius: 3px;\n    cursor: pointer;\n    background: linear-gradient(\n      to right,\n      white ".concat(n,"%,\n      grey 0px\n    );\n  ")})),le=Object(s.a)(m)(ie(),(function(e){var n=e.currentTrackPercentage;return"\n    position: relative;\n    left: ".concat(n-1,"%;\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n    cursor: grab;\n    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.25);\n    background-color: white;\n  ")})),de=function(e){var n=e.currentTrackDuration,t=e.currentTrackTime,r=e.setAudioTime,c=a.a.useRef(),i=t/n*100,o=function(e){var t=c.current.getBoundingClientRect().left+window.scrollX,a=c.current.offsetWidth,i=e.pageX;r(n/a*(i-t))};return a.a.createElement(ue,{ref:c,currentTrackPercentage:i,onMouseDown:function(e){o(e),document.addEventListener("mousemove",o),document.addEventListener("mouseup",(function(){return document.removeEventListener("mousemove",o)}))}},a.a.createElement(le,{currentTrackPercentage:i}))};function se(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-top: 5px;\n"]);return se=function(){return e},e}var fe=Object(s.a)(m)(se()),me=function(e){return a.a.createElement(ce,Object.assign({},e,{size:10,color:"#fc0082"}))},pe=function(e){var n=e.currentTrackDuration,t=e.currentTrackTime,r=e.stepBackwardCurrentTrack,c=e.stepForwardCurrentTrack,i=e.setAudioTime;return a.a.createElement(fe,null,a.a.createElement(me,{icon:ne.d,style:{marginRight:5},onClick:r}),a.a.createElement(de,{currentTrackDuration:n,currentTrackTime:t,setAudioTime:i}),a.a.createElement(me,{icon:ne.e,style:{marginLeft:8},onClick:c}))};function be(){var e=Object(d.a)(["\n  white-space: nowrap;\n  text-align: left;\n  text-overflow: ellipsis;\n  overflow: hidden;\n"]);return be=function(){return e},e}function ge(){var e=Object(d.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  min-width: 0px;\n  height: 100%;\n"]);return ge=function(){return e},e}function he(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  margin-right: 25px;\n  border-radius: 30px;\n  border-style: solid;\n  border-color: #fc0082;\n  border-width: 1px;\n  background-color: unset;\n"]);return he=function(){return e},e}function ke(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  height: 80px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 25px;\n  padding-right: 25px;\n  background-color: rgba(255, 255, 255, 0.1);\n"]);return ke=function(){return e},e}var ve=Object(s.a)(m)(ke()),xe=Object(s.a)(_)(he()),je=Object(s.a)(m)(ge()),Oe=Object(s.a)(L)(be()),we=function(e){var n=e.currentTrackName,t=e.currentTrackArtists,r=e.currentTrackPlayed,c=e.currentTrackDuration,i=e.currentTrackTime,o=e.playCurrentTrack,u=e.pauseCurrentTrack,l=e.stepBackwardCurrentTrack,d=e.stepForwardCurrentTrack,s=e.setAudioTime,f=ee.a.map(t,(function(e){return e.name}));return a.a.createElement(ve,null,a.a.createElement(xe,{style:{paddingLeft:r?0:2},onClick:function(){r?u():o()}},a.a.createElement(re,{icon:r?ne.b:ne.c,size:20,color:"#fc0082"})),a.a.createElement(je,null,a.a.createElement(Oe,{size:16,weight:700},n),a.a.createElement(Oe,{size:12},ee.a.join(f,", ")),a.a.createElement(pe,{currentTrackDuration:c,currentTrackTime:i,stepBackwardCurrentTrack:l,stepForwardCurrentTrack:d,setAudioTime:s})))};function Ee(){var e=Object(d.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  width: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n"]);return Ee=function(){return e},e}var ye=Object(s.a)(m)(Ee()),Te=t(55);function Ce(){var e=Object(d.a)(["\n  white-space: nowrap;\n  text-align: left;\n  text-overflow: ellipsis;\n  overflow: hidden;\n"]);return Ce=function(){return e},e}function Le(){var e=Object(d.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  min-width: 0px;\n  height: 100%;\n  padding-left: 10px;\n"]);return Le=function(){return e},e}function ze(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 100%;\n"]);return ze=function(){return e},e}function Ie(){var e=Object(d.a)(["\n  display: flex;\n  flex-shrink: 0;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  height: 50px;\n  border-radius: unset;\n  background-color: rgba(255, 255, 255, 0.05);\n\n  // This isn't following the default behavior!\n\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.175);\n  }\n"]);return Ie=function(){return e},e}var Se=Object(s.a)(_)(Ie()),Pe=Object(s.a)(m)(ze()),Ae=Object(s.a)(m)(Le()),De=Object(s.a)(L)(Ce()),Ne=function(e){var n=e.currentTrackIndex,t=e.currentTrackPlayed,r=e.trackIndex,c=e.trackName,i=e.trackArtists,o=e.trackLiked,u=e.playTrack,l=e.addTrackToLiked,d=e.removeTrackToLiked,s=ee.a.map(i,(function(e){return e.name}));return a.a.createElement(Se,{onClick:function(){return u(r)}},a.a.createElement(Pe,null,n===r&&t?a.a.createElement(re,{icon:ne.f,color:"#fc0082"}):a.a.createElement(L,{size:12,color:"grey"},"".concat(r+1,"."))),a.a.createElement(Ae,null,a.a.createElement(De,{size:14,weight:700},c),a.a.createElement(De,{size:12,color:"grey"},ee.a.join(s,", "))),a.a.createElement(Pe,null,a.a.createElement(ce,{icon:o?ne.a:Te.a,color:"#fc0082",onClick:function(e){e.stopPropagation(),o?d(r):l(r)}})))};function Be(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  height: 500px;\n"]);return Be=function(){return e},e}var Re=Object(s.a)(m)(Be()),Fe=function(e){var n=e.eventTracks,t=e.eventTracksLiked,c=e.setEventTracksLiked,i=e.setEventTracksLikable,o=a.a.useRef(),u=a.a.useState({}),l=Object(J.a)(u,2),d=l[0],s=l[1],f=a.a.useState([]),m=Object(J.a)(f,2),p=m[0],b=m[1],g=a.a.useState(0),k=Object(J.a)(g,2),v=k[0],x=k[1],j=a.a.useState(!1),O=Object(J.a)(j,2),w=O[0],E=O[1],y=a.a.useState(0),T=Object(J.a)(y,2),C=T[0],L=T[1],z=a.a.useState(0),I=Object(J.a)(z,2),S=I[0],P=I[1],A=a.a.useRef(0),D=function(){E(!0),o.current.play()},N=a.a.useCallback((function(e){x(e),o.current.load(),D()}),[]);a.a.useEffect((function(){s((function(e){var r=[];if(t){var a=ee.a.reduce(e,(function(e,n,t){return n.liked?(r.push(t),Object(h.a)(Object(h.a)({},e),{},Object(V.a)({},t,n))):e}),{});return b(r),a}var c=ee.a.reduce(n,(function(n,t){var a=t.track,c=(e[a.id]||{}).liked||!1,i=Object(h.a)(Object(h.a)({},a),{},{liked:c});return r.push(a.id),Object(h.a)(Object(h.a)({},n),{},Object(V.a)({},a.id,i))}),{});return b(r),c})),x(0),E(!1),o.current.pause(),o.current.load()}),[n,t]);var B=d[p[v]]||{},R=a.a.useCallback((function(){N(v+1>=p.length?0:v+1)}),[N,v,p]),F=function(e,n,t){s((function(r){var a;return n||(a=Object(h.a)(Object(h.a)({},r[p[e]]),{},{liked:t})),Object(h.a)(Object(h.a)({},r),{},Object(V.a)({},p[e],a))}))},W=function(e){A.current+=1,1===A.current&&i(!0),F(e,!1,!0)},$=function(e){if(A.current-=1,A.current||(A.current=0,i(!1)),t){var n=[].concat(Object(Q.a)(p.slice(0,e)),Object(Q.a)(p.slice(e+1)));F(e,!0),ee.a.isEmpty(n)?c(!1):(b(n),v===e?w?N(v>=n.length?0:v):x(v>=n.length?0:v):v>e&&x(v-1<0?n.length-1:v-1))}else F(e,!1,!1)},q=function(){L(o.current.duration),P(o.current.currentTime)},M=function(){P(o.current.currentTime)},_=Object(r.useCallback)((function(){w&&R()}),[w,R]);return a.a.useEffect((function(){return o.current.addEventListener("loadeddata",q),o.current.addEventListener("timeupdate",M),o.current.addEventListener("ended",_),function(){o.current.removeEventListener("loadeddata",q),o.current.removeEventListener("timeupdate",M),o.current.removeEventListener("ended",_)}}),[_]),a.a.createElement(Re,null,a.a.createElement(we,{currentTrackName:B.name,currentTrackArtists:B.artists,currentTrackPlayed:w,currentTrackDuration:C,currentTrackTime:S,playCurrentTrack:D,pauseCurrentTrack:function(){E(!1),o.current.pause()},stepBackwardCurrentTrack:function(){N(v-1<0?p.length-1:v-1)},stepForwardCurrentTrack:R,setAudioTime:function(e){o.current.currentTime=e}}),a.a.createElement(ye,null,ee.a.map(p,(function(e,n){var t=d[p[n]]||{},r=t.name,c=t.artists,i=t.liked;return a.a.createElement(Ne,{key:e,currentTrackIndex:v,currentTrackPlayed:w,trackIndex:n,trackName:r,trackArtists:c,trackLiked:i,playTrack:N,addTrackToLiked:W,removeTrackToLiked:$})}))),a.a.createElement("audio",{ref:o},a.a.createElement("source",{src:B.preview_url})))};function We(){var e=Object(d.a)(["\n  margin-right: 10px;\n"]);return We=function(){return e},e}function $e(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 50%;\n  margin-bottom: 20px;\n"]);return $e=function(){return e},e}var qe=Object(s.a)(m)($e()),Je=Object(s.a)(L)(We()),Me=function(e){var n=e.eventTracks,t=a.a.useState(!1),r=Object(J.a)(t,2),c=r[0],i=r[1],o=a.a.useState(!1),u=Object(J.a)(o,2),l=u[0],d=u[1];return a.a.createElement(N,null,a.a.createElement($,null,"Line Up"),a.a.createElement(qe,null,a.a.createElement(Je,{size:12},"Show liked tracks only :"),a.a.createElement(K,{checked:c,checkedColor:"#fc0082",uncheckedColor:"grey",onClick:function(){i((function(e){return!e}))},disabled:!l})),a.a.createElement(Fe,{eventTracks:n,eventTracksLiked:c,setEventTracksLiked:i,setEventTracksLikable:d}))};function _e(){var e=Object(d.a)(["\n  query getEvent($id: String!, $userId: String!) {\n    playlist(id: $id, userId: $userId) {\n      id\n      name\n      owner {\n        id\n        display_name\n      }\n      images {\n        url\n      }\n      description\n      tracks {\n        track {\n          id\n          name\n          artists {\n            name\n          }\n          preview_url\n        }\n      }\n    }\n  }\n"]);return _e=function(){return e},e}var Ue=Object(k.b)(_e()),Xe=function(e){var n=O().id,t=Object(v.a)(Ue,{variables:{id:e,userId:n}}),r=t.loading,a=t.error,c=t.data;return r||a?{loading:r,error:a}:Object(h.a)({loading:r,error:a},c.playlist)};function Ge(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding-top: 50px;\n  padding-left: 10%;\n  padding-right: 10%;\n"]);return Ge=function(){return e},e}function Ze(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n"]);return Ze=function(){return e},e}var He=Object(s.a)(m)(Ze()),Ke=Object(s.a)(m)(Ge()),Qe=function(){var e=Xe("7Cy3wdbRlZqW22fUDGWpwk"),n=e.loading,t=e.name,r=e.images,c=e.tracks;return n?null:a.a.createElement(He,null,a.a.createElement(A,{eventName:t,eventImages:r}),a.a.createElement(Ke,null,a.a.createElement(q,null),a.a.createElement(Me,{eventTracks:c})))};function Ve(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 500px;\n  height: 50px;\n  background-color: #1db954;\n"]);return Ve=function(){return e},e}function Ye(){var e=Object(d.a)(["\n  margin-bottom: 20px;\n"]);return Ye=function(){return e},e}function en(){var e=Object(d.a)(["\n  margin: auto;\n"]);return en=function(){return e},e}var nn=Object(s.a)(m)(en()),tn=Object(s.a)(L)(Ye()),rn=Object(s.a)(_)(Ve()),an=function(){return a.a.createElement(nn,null,a.a.createElement(L,{size:24,weight:700,color:"white"},"Sign In"),a.a.createElement(tn,{color:"grey"},"Discover the event line up and more!"),a.a.createElement(rn,{onClick:function(){window.location.href="".concat("https://shotgun-player-api.herokuapp.com","/auth/connect")}},a.a.createElement(L,{size:18,weight:700},"Continue with Spotify")))},cn=function(){return new k.a({uri:"".concat("https://shotgun-player-api.herokuapp.com","/graphql"),credentials:"include"})}(),on=function(){return a.a.createElement(o.a,{client:cn},a.a.createElement(b,null,a.a.createElement(u.a,null,a.a.createElement(l.d,null,a.a.createElement(w,{exact:!0,path:"/shotgun-player"},a.a.createElement(Qe,null)),a.a.createElement(l.b,{exact:!0,path:"/shotgun-player/sign-in"},a.a.createElement(an,null)),a.a.createElement(l.a,{to:"/shotgun-player"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(70);i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(on,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.62086746.chunk.js.map