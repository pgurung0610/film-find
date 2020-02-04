(this.webpackJsonpfilm_find=this.webpackJsonpfilm_find||[]).push([[0],{28:function(e,t,a){e.exports=a(64)},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),i=a.n(o),c=(a(33),a(6)),l=a(12),s=(a(34),function(){return r.a.createElement("header",null,r.a.createElement(c.b,{to:"/",className:"title"},r.a.createElement("h1",null,"Film Find")))}),m=a(15),u=a(26),g=a(7),v=a(8),p=a(10),h=a(9),d=a(11),f=(a(40),a(41),a(42),function(e){var t=e.label,a=e.selectedOption,n=e.options,o=e.onSelection;return r.a.createElement("div",{className:"selection"},r.a.createElement("label",null,t),r.a.createElement("select",{value:a,onChange:o},n.map((function(e){return r.a.createElement("option",{key:e.id,value:e.name},e.name)}))))}),E=a(27),_=a.n(E),b=(a(58),a(59),function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).onChange=function(e){a.props.onChange({type:a.props.data.label,value:e})},a}return Object(d.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.min,a=e.max,n=e.step,o=e.value,i=e.label;return r.a.createElement("div",{className:"slider"},r.a.createElement("label",null,i),r.a.createElement(_.a,{minValue:t,maxValue:a,step:n,onChange:this.onChange,value:o}))}}]),t}(r.a.Component)),y=(a(60),function(e){var t=e.onClick,a=e.children;return r.a.createElement("div",{className:"search-button"},r.a.createElement("button",{onClick:t},a))}),C=function(e){function t(){return Object(g.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://api.themoviedb.org/3/genre/movie/list?api_key=".concat("66802b130cc43375f6ae04c5e44d1670","&language=en-US");fetch(t).then((function(e){return e.json()})).then((function(t){t.genres.unshift({id:0,name:"All"}),e.props.setGenres(t.genres)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.props,t=e.genre,a=e.genres,n=e.onGenreChange,o=e.sort_by_category,i=e.sort_by_categories,c=e.onSortByChange,l=e.onChange,s=e.year,m=e.rating,u=e.runtime;return r.a.createElement("section",{className:"navigation"},r.a.createElement(f,{label:"Genre",selectedOption:t,options:a,onSelection:n}),r.a.createElement(b,{data:s,onChange:l}),r.a.createElement(b,{data:m,onChange:l}),r.a.createElement(b,{data:u,onChange:l}),r.a.createElement(f,{label:"Sort By",selectedOption:o,options:i,onSelection:c}),r.a.createElement(y,{onClick:this.props.onSearchButtonClick},"Search"))}}]),t}(r.a.Component),k=(a(61),a(62),function(e){var t=e.movie,a=t.id,n=t.title,o=t.poster_path,i=t.release_date,l=t.vote_average,s="https://image.tmdb.org/t/p/w342/".concat(o),m=i.substring(0,4);return r.a.createElement("li",{className:"movie-item"},r.a.createElement(c.b,{to:"/movie/".concat(a),className:"thumbnail"},r.a.createElement("img",{src:s,alt:n}),r.a.createElement("div",{className:"movie-description"},r.a.createElement("h2",null,n),r.a.createElement("section",{className:"movie-details"},r.a.createElement("div",{className:"movie-year"},r.a.createElement("span",{className:"title"},"Year"),r.a.createElement("span",null,m)),r.a.createElement("div",{className:"movie-rating"},r.a.createElement("span",{className:"title"},"Rating"),r.a.createElement("span",null,l))))))}),S=function(e){var t=e.movies,a=e.page,n=e.onPageIncrease,o=e.onPageDecrease;return r.a.createElement("section",null,r.a.createElement("ul",{className:"movies"},t.map((function(e){return r.a.createElement(k,{key:e.id,movie:e})}))),r.a.createElement("div",{className:"pagination"},r.a.createElement(y,{onClick:o},"Previous"),r.a.createElement("span",null,"Page ".concat(a)),r.a.createElement(y,{onClick:n},"Next")))},w=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[],total_pages:1,page:1,moviesUrl:"https://api.themoviedb.org/3/discover/movie?api_key=".concat("66802b130cc43375f6ae04c5e44d1670","&language=en-US&sort_by=popularity.desc&with_genres=&primary_release_date.gte=1990-01-01&primary_release_date.lte=2020-12-31&vote_average.gte=8&vote_average.lte=10&with_runtime.gte=60&with_runtime.lte=240&page=1"),genre:"All",genres:[],sort_by_category:"Popularity",sort_by_categories:[{id:0,name:"Popularity",value:"popularity"},{id:1,name:"Release Date",value:"primary_release_date"},{id:2,name:"Title",value:"original_title"},{id:3,name:"Rating",value:"vote_average"}],sort_by_ordering:"desc",year:{label:"year",min:1950,max:(new Date).getFullYear(),step:1,value:{min:(new Date).getFullYear()-30,max:(new Date).getFullYear()}},rating:{label:"rating",min:0,max:10,step:1,value:{min:8,max:10}},runtime:{label:"runtime",min:0,max:300,step:15,value:{min:60,max:240}}},a.onPageIncrease=function(){var e=a.state,t=e.page+1;t<=e.total_pages&&a.setState({page:t})},a.onPageDecrease=function(){var e=a.state.page-1;e>0&&a.setState({page:e})},a.onGenreChange=function(e){a.setState({genre:e.target.value})},a.onSortByChange=function(e){a.setState({sort_by_category:e.target.value})},a.setGenres=function(e){a.setState({genres:e})},a.onChange=function(e){a.setState(Object(m.a)({},e.type,Object(u.a)({},a.state[e.type],{value:e.value})))},a.fetchMovies=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){return a.storeMovies(e)})).catch((function(e){return console.log(e)}))},a.storeMovies=function(e){var t=e.results.map((function(e){return{vote_count:e.vote_count,id:e.id,genre_ids:e.genre_ids,poster_path:e.poster_path,title:e.title,vote_average:e.vote_average,release_date:e.release_date}}));a.setState({movies:t,total_pages:e.total_pages})},a.generateUrl=function(){var e,t=a.state,n=t.genres,r=t.sort_by_categories,o=t.sort_by_ordering,i=t.year,c=t.rating,l=t.runtime,s=t.page;"All"===a.state.genre?e="":e=n.find((function(e){return e.name===a.state.genre})).id;var m=r.find((function(e){return e.name===a.state.sort_by_category})).value+"."+o,u="https://api.themoviedb.org/3/discover/movie?"+"api_key=".concat("66802b130cc43375f6ae04c5e44d1670","&")+"language=en-US&"+"sort_by=".concat(m,"&")+"with_genres=".concat(e,"&")+"primary_release_date.gte=".concat(i.value.min,"-01-01&")+"primary_release_date.lte=".concat(i.value.max,"-12-31&")+"vote_average.gte=".concat(c.value.min,"&")+"vote_average.lte=".concat(c.value.max,"&")+"with_runtime.gte=".concat(l.value.min,"&")+"with_runtime.lte=".concat(l.value.max,"&")+"page=".concat(s);a.setState({moviesUrl:u})},a.onSearchButtonClick=function(){a.setState({page:1}),a.generateUrl()},a}return Object(d.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.fetchMovies(this.state.moviesUrl)}},{key:"UNSAFE_componentWillUpdate",value:function(e,t){this.state.moviesUrl!==t.moviesUrl&&this.fetchMovies(t.moviesUrl),this.state.page!==t.page&&this.generateUrl()}},{key:"render",value:function(){return r.a.createElement("section",{className:"main"},r.a.createElement(C,Object.assign({onChange:this.onChange,onGenreChange:this.onGenreChange,setGenres:this.setGenres,onSortByChange:this.onSortByChange,onSearchButtonClick:this.onSearchButtonClick},this.state)),r.a.createElement(S,{movies:this.state.movies,page:this.state.page,onPageIncrease:this.onPageIncrease,onPageDecrease:this.onPageDecrease}))}}]),t}(r.a.Component),O=function(){return r.a.createElement("h2",null,"Loading Movie")},j=(a(63),function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movie:{}},a}return Object(d.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieId,a="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=651925d45022d1ae658063b443c99784&language=en-US");fetch(a).then((function(e){return e.json()})).then((function(t){return e.setState({movie:t,isLoading:!1})})).catch((function(e){return console.log("Error:",e)}))}},{key:"render",value:function(){var e=this.state.isLoading,t=this.state.movie,a=t.title,n=t.backdrop_path,o=t.release_date,i=t.genres,c=t.overview,l=t.vote_average,s=t.runtime,m=o?o.substring(0,4):null,u={backgroundImage:"url(http://image.tmdb.org/t/p/w1280/".concat(n,")")};return r.a.createElement("div",{className:"movie-page"}," ",e?r.a.createElement(O,null):r.a.createElement("div",null,r.a.createElement("div",{className:"movie-image",style:u}),r.a.createElement("div",{className:"movie-details"},r.a.createElement("h1",null,a,r.a.createElement("span",null," (",m,") ")),r.a.createElement("section",{className:"genres"},i.map((function(e,t){return r.a.createElement("div",{key:e.id},r.a.createElement("span",null,e.name),t<i.length-1&&r.a.createElement("span",{className:"separator"},"|"))}))),r.a.createElement("h5",null,"Rating:",r.a.createElement("span",null,l)),r.a.createElement("h5",null,"Runtime:",r.a.createElement("span",null,"".concat(s," min"))),r.a.createElement("h4",null,"Overview"),r.a.createElement("p",null,c))))}}]),t}(r.a.Component)),N=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"We couldn't find what you were looking for :("),r.a.createElement(c.b,{to:"/"},"Here you can browse some movies"))},U=function(){return r.a.createElement(c.a,{basename:"/"},r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:w}),r.a.createElement(l.a,{path:"/movie/:movieId",component:j}),r.a.createElement(l.a,{component:N}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.4a86748a.chunk.js.map