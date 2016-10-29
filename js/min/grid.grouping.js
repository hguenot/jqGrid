var $jscomp={scope:{},findInternal:function(b,u,e){b instanceof String&&(b=String(b));for(var c=b.length,k=0;k<c;k++){var g=b[k];if(u.call(e,g,k,b))return{i:k,v:g}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(b,u,e){if(e.get||e.set)throw new TypeError("ES3 does not support getters and setters.");b!=Array.prototype&&b!=Object.prototype&&(b[u]=e.value)};
$jscomp.getGlobal=function(b){return"undefined"!=typeof window&&window===b?b:"undefined"!=typeof global?global:b};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(b,u,e,c){if(u){e=$jscomp.global;b=b.split(".");for(c=0;c<b.length-1;c++){var k=b[c];k in e||(e[k]={});e=e[k]}b=b[b.length-1];c=e[b];u=u(c);u!=c&&null!=u&&$jscomp.defineProperty(e,b,{configurable:!0,writable:!0,value:u})}};
$jscomp.polyfill("Array.prototype.find",function(b){return b?b:function(b,e){return $jscomp.findInternal(this,b,e).v}},"es6-impl","es3");
(function(b){"function"===typeof define&&define.amd?define(["jquery","./grid.base"],b):"object"===typeof exports?b(require("jquery")):b(jQuery)})(function(b){var u=b.jgrid,e=b.fn.jqGrid;u.extend({groupingSetup:function(){return this.each(function(){var c,k;k=this.p;var g=k.colModel,a=k.groupingView,f,t,d=function(){return""};if(null===a||"object"!==typeof a&&!b.isFunction(a))k.grouping=!1;else if(a.groupField.length){void 0===a.visibiltyOnNextGrouping&&(a.visibiltyOnNextGrouping=[]);a.lastvalues=
[];a._locgr||(a.groups=[]);a.counters=[];for(c=0;c<a.groupField.length;c++)a.groupOrder[c]||(a.groupOrder[c]="asc"),a.groupText[c]||(a.groupText[c]="{0}"),"boolean"!==typeof a.groupColumnShow[c]&&(a.groupColumnShow[c]=!0),"boolean"!==typeof a.groupSummary[c]&&(a.groupSummary[c]=!1),a.groupSummaryPos[c]||(a.groupSummaryPos[c]="footer"),f=g[k.iColByName[a.groupField[c]]],!0===a.groupColumnShow[c]?(a.visibiltyOnNextGrouping[c]=!0,null!=f&&!0===f.hidden&&e.showCol.call(b(this),a.groupField[c])):(a.visibiltyOnNextGrouping[c]=
b("#"+u.jqID(k.id+"_"+a.groupField[c])).is(":visible"),null!=f&&!0!==f.hidden&&e.hideCol.call(b(this),a.groupField[c]));a.summary=[];a.hideFirstGroupCol&&(a.formatDisplayField[0]=function(a){return a});c=0;for(k=g.length;c<k;c++)f=g[c],a.hideFirstGroupCol&&!f.hidden&&a.groupField[0]===f.name&&(f.formatter=d),f.summaryType&&(t={nm:f.name,st:f.summaryType,v:"",sr:f.summaryRound,srt:f.summaryRoundType||"round"},f.summaryDivider&&(t.sd=f.summaryDivider,t.vd=""),a.summary.push(t))}else k.grouping=!1})},
groupingPrepare:function(c,k){this.each(function(){var g=this.p.groupingView,a=g.groups,f=g.counters,t=g.lastvalues,d=g.isInTheSameGroup,B=g.groupField.length,h,p,u,n,r,m,A=!1,G=e.groupingCalculations.handler;for(h=0;h<B;h++)if(n=g.groupField[h],p=g.displayField[h],r=c[n],m=null==p?null:c[p],null==m&&(m=r),void 0!==r){u=[];for(p=0;p<=h;p++)u.push(c[g.groupField[p]]);p={idx:h,dataIndex:n,value:r,displayValue:m,startRow:k,cnt:1,keys:u,summary:[]};n={cnt:1,pos:a.length,summary:b.extend(!0,[],g.summary)};
0===k?(a.push(p),t[h]=r,f[h]=n):"object"===typeof r||(b.isArray(d)&&b.isFunction(d[h])?d[h].call(this,t[h],r,h,g):t[h]===r)?A?(a.push(p),t[h]=r,f[h]=n):(n=f[h],n.cnt+=1,a[n.pos].cnt=n.cnt):(a.push(p),t[h]=r,A=!0,f[h]=n);r=a[n.pos];var z;for(u=0;u<n.summary.length;u++)m=n.summary[u],z=b.isArray(m.st)?m.st[p.idx]:m.st,b.isFunction(z)?m.v=z.call(this,m.v,m.nm,c,p):(m.v=G.call(b(this),z,m.v,m.nm,m.sr,m.srt,c),"avg"===z.toLowerCase()&&m.sd&&(m.vd=G.call(b(this),z,m.vd,m.sd,m.sr,m.srt,c)));r.summary=n.summary;
for(p=n.pos-1;0<=p;p--)if(a[p].idx<a[n.pos].idx){a[n.pos].parentGroupIndex=p;a[n.pos].parentGroup=a[p];break}}});return this},getGroupHeaderIndex:function(c,k){var g=this[0].p,a=k?b(k).closest("tr.jqgroup"):b("#"+u.jqID(c)),f=parseInt(a.data("jqgrouplevel"),10),g=g.id+"ghead_"+f+"_";return isNaN(f)||!a.hasClass("jqgroup")||c.length<=g.length?-1:parseInt(c.substring(g.length),10)},groupingToggle:function(c,k){this.each(function(){var g=this.p,a=g.groupingView,f=a.minusicon,t=a.plusicon,d=k?b(k).closest("tr.jqgroup"):
b("#"+u.jqID(c)),e,h,p=!0,w=!1,n=[],r=function(a){var b,c=a.length;for(b=0;b<c;b++)n.push(a[b])},m=parseInt(d.data("jqgrouplevel"),10);g.frozenColumns&&0<d.length&&(h=d[0].rowIndex,d=b(this.rows[h]),d=d.add(this.grid.fbRows[h]));e=d.find(">td>span.tree-wrap");u.hasAllClasses(e,f)?(e.removeClass(f).addClass(t),w=!0):e.removeClass(t).addClass(f);for(d=d.next();d.length;d=d.next())if(d.hasClass("jqfoot"))if(e=parseInt(d.data("jqfootlevel"),10),w){if(e=parseInt(d.data("jqfootlevel"),10),(!a.showSummaryOnHide&&
e===m||e>m)&&r(d),e<m)break}else{if((e===m||a.showSummaryOnHide&&e===m+1)&&r(d),e<=m)break}else if(d.hasClass("jqgroup"))if(e=parseInt(d.data("jqgrouplevel"),10),w){if(e<=m)break;r(d)}else{if(e<=m)break;e===m+1&&(d.find(">td>span.tree-wrap").removeClass(f).addClass(t),r(d));p=!1}else(w||p)&&r(d);b(n).css("display",w?"none":"");g.frozenColumns&&b(this).triggerHandler("jqGridResetFrozenHeights",[{header:{resizeDiv:!1,resizedRows:{iRowStart:-1,iRowEnd:-1}},resizeFooter:!1,body:{resizeDiv:!0,resizedRows:{iRowStart:h,
iRowEnd:d.length?d[0].rowIndex-1:-1}}}]);this.fixScrollOffsetAndhBoxPadding();b(this).triggerHandler("jqGridGroupingClickGroup",[c,w]);b.isFunction(g.onClickGroup)&&g.onClickGroup.call(this,c,w)});return!1},groupingRender:function(c,k){function g(a,c,k,g,e){var l=n[a],d,v="",p,q,y,C=0,w,z,A,B=!0;if(0!==c&&0!==n[a].idx)for(d=a;0<=d;d--)if(n[d].idx===n[a].idx-c){l=n[d];break}a=l.cnt;for(w=void 0===e?g:0;w<m;w++){c="&#160;";d=r[w];for(p=0;p<l.summary.length;p++)if(q=l.summary[p],z=b.isArray(q.st)?q.st[k.idx]:
q.st,A=b.isArray(d.summaryTpl)?d.summaryTpl[k.idx]:d.summaryTpl||"{0}",q.nm===d.name){"string"===typeof z&&"avg"===z.toLowerCase()&&(q.sd&&q.vd?q.v/=q.vd:q.v&&0<a&&(q.v/=a));try{q.groupCount=l.cnt,q.groupIndex=l.dataIndex,q.groupValue=l.value,y=f.formatter("",q.v,w,q)}catch(J){y=q.v}c=u.format(A,y);d.summaryFormat&&(c=d.summaryFormat.call(f,k,c,y,d,q));break}q=p=!1;void 0!==e&&B&&!d.hidden&&(c=e,B=!1,1<g&&(p=!0,C=g-1),q=d.align,d.align="rtl"===t.direction?"right":"left",h.iconColumnName=d.name);0<
C&&!d.hidden&&"&#160;"===c?(q&&(d.align=q),C--):(v+="<td role='gridcell' "+f.formatCol(w,1,"")+(p?"colspan='"+g+"'":"")+">"+c+"</td>",q&&(d.align=q))}return v}var a="",f=this[0],t=f.p,d=0,B=[],h=t.groupingView,p=b.makeArray(h.groupSummary),w=h.groupField.length,n=h.groups,r=t.colModel,m=r.length,A=t.page,G=e.getGuiStyles.call(f,"gridRow","jqgroup ui-row-"+t.direction),z=e.getGuiStyles.call(f,"gridRow","jqfoot ui-row-"+t.direction);b.each(r,function(a,c){var b;for(b=0;b<w;b++)if(h.groupField[b]===
c.name){B[b]=a;break}});p.reverse();b.each(n,function(e,l){var v,y=t.id+"ghead_"+l.idx,C=y+"_"+e,E=b.isFunction(h.groupCollapse)?h.groupCollapse.call(f,{group:l,rowid:C}):h.groupCollapse,F,x;x=0;var D,q;D=w-1===l.idx;var H=null!=l.parentGroup?l.parentGroup.collapsed:!1;q="<span style='cursor:pointer;margin-"+("rtl"===t.direction?"right:":"left:")+12*l.idx+"px;' class='"+h.commonIconClass+" "+(E?h.plusicon:h.minusicon)+" tree-wrap' onclick=\"jQuery('#"+u.jqID(t.id).replace("\\","\\\\")+"').jqGrid('groupingToggle','"+
C+"', this);return false;\"></span>";if(h._locgr&&!(l.startRow+l.cnt>(A-1)*k&&l.startRow<A*k))return!0;H&&(E=!0);void 0!==E&&(l.collapsed=E);d++;try{b.isArray(h.formatDisplayField)&&b.isFunction(h.formatDisplayField[l.idx])?(l.displayValue=h.formatDisplayField[l.idx].call(f,l.displayValue,l.value,r[B[l.idx]],l.idx,h),v=l.displayValue):v=f.formatter(C,l.displayValue,B[l.idx],l.value)}catch(I){v=l.displayValue}a+="<tr id='"+C+"' data-jqgrouplevel='"+l.idx+"' "+(E&&H?"style='display:none;' ":"")+"role='row' class='"+
G+" "+y+"'>";y=b.isFunction(h.groupText[l.idx])?h.groupText[l.idx].call(f,v,l.cnt,l.summary):u.template(h.groupText[l.idx],v,l.cnt,l.summary);"string"!==typeof y&&"number"!==typeof y&&(y=v);"header"===h.groupSummaryPos[l.idx]?(v=1,"cb"!==r[0].name&&"cb"!==r[1].name||v++,"subgrid"!==r[0].name&&"subgrid"!==r[1].name||v++,a+=g(e,0,l,v,q+"<span class='cell-wrapper'>"+y+"</span>")):a+="<td role='gridcell' style='padding-left:"+12*l.idx+"px;' colspan='"+m+"'>"+q+y+"</td>";a+="</tr>";if(D){D=n[e+1];v=l.startRow;
q=void 0!==D?D.startRow:n[e].startRow+n[e].cnt;h._locgr&&(x=(A-1)*k,x>l.startRow&&(v=x));for(;v<q&&c[v-x];v++)a+=c[v-x].join("");if("header"!==h.groupSummaryPos[l.idx]){if(void 0!==D){for(F=0;F<h.groupField.length&&D.dataIndex!==h.groupField[F];F++);d=h.groupField.length-F}for(x=0;x<d;x++)p[x]&&(a+="<tr data-jqfootlevel='"+(l.idx-x)+(E&&(0<l.idx-x||!h.showSummaryOnHide)?"' style='display:none;'":"'")+" role='row' class='"+z+"'>",a+=g(e,x,n[l.idx-x],0),a+="</tr>");d=F}}});this.off("jqGridShowHideCol.groupingRender").on("jqGridShowHideCol.groupingRender",
function(){var a=t.iColByName[h.iconColumnName],c,d,k;if(0<=b.inArray("header",h.groupSummaryPos)){for(c=0;c<r.length;c++)if(!r[c].hidden){k=c;break}if(void 0!==k&&a!==k){for(c=0;c<f.rows.length;c++)d=f.rows[c],b(d).hasClass("jqgroup")&&(b(d.cells[k]).html(d.cells[a].innerHTML),b(d.cells[a]).html("&nbsp;"));h.iconColumnName=r[k].name}}});return a},groupingGroupBy:function(c,k){return this.each(function(){var g=this.p,a=g.groupingView,f,t;"string"===typeof c&&(c=[c]);g.grouping=!0;a._locgr=!1;void 0===
a.visibiltyOnNextGrouping&&(a.visibiltyOnNextGrouping=[]);for(f=0;f<a.groupField.length;f++)t=g.colModel[g.iColByName[a.groupField[f]]],!a.groupColumnShow[f]&&a.visibiltyOnNextGrouping[f]&&null!=t&&!0===t.hidden&&e.showCol.call(b(this),a.groupField[f]);for(f=0;f<c.length;f++)a.visibiltyOnNextGrouping[f]=b(g.idSel+"_"+u.jqID(c[f])).is(":visible");g.groupingView=b.extend(g.groupingView,k||{});a.groupField=c;b(this).trigger("reloadGrid")})},groupingRemove:function(c){return this.each(function(){var k=
this.p,g=this.tBodies[0],a=k.groupingView;void 0===c&&(c=!0);k.grouping=!1;if(!0===c){for(k=0;k<a.groupField.length;k++)!a.groupColumnShow[k]&&a.visibiltyOnNextGrouping[k]&&e.showCol.call(b(this),a.groupField);b("tr.jqgroup, tr.jqfoot",g).remove();b("tr.jqgrow",g).filter(":hidden").show()}else b(this).trigger("reloadGrid")})},groupingCalculations:{handler:function(c,b,g,a,f,e){var d={sum:function(){return parseFloat(b||0)+parseFloat(e[g]||0)},min:function(){return""===b?parseFloat(e[g]||0):Math.min(parseFloat(b),
parseFloat(e[g]||0))},max:function(){return""===b?parseFloat(e[g]||0):Math.max(parseFloat(b),parseFloat(e[g]||0))},count:function(){""===b&&(b=0);return e.hasOwnProperty(g)?b+1:0},avg:function(){return d.sum()}};if(!d[c])throw"jqGrid Grouping No such method: "+c;c=d[c]();null!=a&&("fixed"===f?c=c.toFixed(a):(a=Math.pow(10,a),c=Math.round(c*a)/a));return c}}})});
//# sourceMappingURL=grid.grouping.map
