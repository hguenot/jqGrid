!function(r){"use strict";"function"==typeof define&&define.amd?define(["jquery","./jquery.fmatter","./grid.grouping"],r):"object"==typeof module&&module.exports?module.exports=function(e,t){return e=e||window,void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),require("./jquery.fmatter"),require("./grid.grouping"),r(t),t}:r(jQuery)}(function(de){"use strict";var ye=de.jgrid;function he(e,t,r){if(!(this instanceof he))return new he(e);this.aggregator=e,this.finilized=!1,this.context=t,this.pivotOptions=r}function xe(e,t,r,o,n){function i(e,t){var r=e,o=t;if(null==r&&(r=""),null==o&&(o=""),r=String(r),o=String(o),this.caseSensitive||(r=r.toUpperCase(),o=o.toUpperCase()),r===o){if(e===t)return 0;if(void 0===e)return-1;if(void 0===t)return 1;if(null===e)return-1;if(null===t)return 1}return r<o?-1:1}function a(e,t){return(e=Number(e))===(t=Number(t))?0:e<t?-1:1}function s(e,t){return(e=Math.floor(Number(e)))===(t=Math.floor(Number(t)))?0:e<t?-1:1}var u,l,f=o.length,g=this;for(g.items=[],g.indexesOfSourceData=[],g.trimByCollect=e,g.caseSensitive=t,g.skipSort=r,g.fieldLength=f,g.fieldNames=new Array(f),g.fieldSortDirection=new Array(f),g.fieldCompare=new Array(f),u=0;u<f;u++){switch(l=o[u],g.fieldNames[u]=l[n||"dataName"],l.sorttype){case"integer":case"int":g.fieldCompare[u]=s;break;case"number":case"currency":case"float":g.fieldCompare[u]=a;break;default:g.fieldCompare[u]=de.isFunction(l.compare)?l.compare:i}g.fieldSortDirection[u]="desc"===l.sortorder?-1:1}}he.prototype.calc=function(e,t,r,o,n){var i=this;if(void 0!==e)switch(i.result=i.result||0,e=parseFloat(e),i.aggregator){case"sum":i.result+=e;break;case"count":i.result++;break;case"avg":i.finilized?(i.count=i.count||0,i.result=(i.result*i.count+e)/(i.count+1)):(i.result+=e,i.count=i.count||0),i.count++;break;case"min":i.result=Math.min(i.result,e);break;case"max":i.result=Math.max(i.result,e);break;default:de.isFunction(i.aggregator)&&(i.result=i.aggregator.call(i.context,{previousResult:i.result,value:e,fieldName:t,item:r,iItem:o,items:n}))}},he.prototype.getResult=function(e,t,r){var o=this;void 0===o.result&&!r||(r&&void 0!==o.result&&(o.result=0,o.count=0),void 0===o.result||o.finilized||"avg"!==o.aggregator||(o.result=o.result/o.count,o.finilized=!0),e[t]=o.result)},xe.prototype.compareVectorsEx=function(e,t){for(var r,o=this.fieldLength,n=0;n<o;n++)if(0!==(r=this.fieldCompare[n](e[n],t[n])))return{index:n,result:r};return{index:-1,result:0}},xe.prototype.getIndexOfDifferences=function(e,t){return null===t||null===e?0:this.compareVectorsEx(e,t).index},xe.prototype.compareVectors=function(e,t){e=this.compareVectorsEx(e,t);return 0<(0<=e.index?this.fieldSortDirection[e.index]:1)?e.result:-e.result},xe.prototype.getItem=function(e){return this.items[e]},xe.prototype.getIndexLength=function(){return this.items.length},xe.prototype.getIndexesOfSourceData=function(e){return this.indexesOfSourceData[e]},xe.prototype.createDataIndex=function(e){for(var t,r,o,n,i,a,s,u,l=this,f=e.length,g=l.fieldLength,p=l.fieldNames,c=l.indexesOfSourceData,m=l.items,d=0;d<f;d++){for(a=e[d],t=new Array(g),o=0;o<g;o++)void 0!==(r=a[p[o]])&&("string"==typeof r&&l.trimByCollect&&(r=de.trim(r)),t[o]=r);if((u=m.length-1)<(s=0))m.push(t),c.push([d]);else if(0===(n=l.compareVectors(t,m[u])))c[u].push(d);else if(1===n||l.skipSort)m.push(t),c.push([d]);else if(1===(n=l.compareVectors(m[0],t)))m.unshift(t),c.unshift([d]);else if(0===n)c[0].push(d);else for(;;){if(u-s<2){m.splice(u,0,t),c.splice(u,0,[d]);break}if(i=Math.floor((s+u)/2),0===(n=l.compareVectors(m[i],t))){c[i].push(d);break}1===n?u=i:s=i}}},ye.extend({pivotSetup:function(o,t){function Y(e,t,r){return t=new xe(I.trimByCollect,I.caseSensitive,t,e),de.isFunction(r)&&(t.compareVectorsEx=r),t.createDataIndex(o),t}function e(e,t,r){for(var o,n=0;n<A;n++)void 0===(o=C[n]).template&&void 0===o.formatter&&I.defaultFormatting&&(o.template="count"===o.aggregator?"integer":"number"),oe.push(se(e,o,n,t,r))}function B(e,t,r){for(var o,n,i,a=T-1;t<=a;a--)if(F[a]){for(o=0;o<=a;o++)(Q=k[o].groupHeaders)[Q.length-1].numberOfColumns+=A;for(n=(s=O[a]).totalHeader,i=s.headerOnTop,o=a+1;o<=T-1;o++)k[o].groupHeaders.push({titleText:i&&o===a+1||!i&&o===T-1?de.isFunction(n)?n.call(S,r,a):ye.template.call(S,String(n||""),r[a],a):"",startColumnName:"y"+(e-1)+"t"+a+(1===A?"":"a0"),numberOfColumns:A})}}function q(e,t,r,o){var n,i,a,s=w.getIndexOfDifferences(t,r);if(null!==r)for(s=Math.max(s,0),n=T-1;s<=n;n--)i="y"+e+"t"+n+(1<A?"a"+o:""),F[n]&&void 0===x[i]&&((a=N[n][o]).getResult(x,i),x.pivotInfos[i]={colType:1,iA:o,a:C[o],level:n,iRows:a.groupInfo.iRows,rows:a.groupInfo.rows,ys:a.groupInfo.ys,iYs:a.groupInfo.iYs},t!==r&&(N[n][o]=ue(o)))}var r,n,i,P,a,s,u,l,f,g,L,z,M,p,X,c,E,G,m,d,U,y,h,x,v,Q,J,K,w,b,S=this[0],W=de.isArray,Z={},$={groupField:[],groupSummary:[],groupSummaryPos:[]},_={grouping:!0,groupingView:$},I=de.extend({totals:!1,useColSpanStyle:!1,trimByCollect:!0,skipSortByX:!1,skipSortByY:!1,caseSensitive:!1,footerTotals:!1,groupSummary:!0,groupSummaryPos:"header",frozenStaticCols:!1,defaultFormatting:!0,data:o},t||{}),ee=(o.length,I.xDimension),O=I.yDimension,C=I.aggregates,te=I.totalText||I.totals||I.rowTotals||I.totalHeader,D=W(ee)?ee.length:0,re=W(O)?O.length:0,A=W(C)?C.length:0,T=re-(1===A?1:0),k=[],F=[],oe=[],ne=[],ie=["pivotInfos"],ae=new Array(A),N=new Array(re),se=function(e,t,r,o,n){var i,a;switch(e){case 1:i=O[o].totalText||"{0} {1} {2}",a="y"+n+"t"+o;break;case 2:i=I.totalText||"{0}",a="t";break;default:i=1<A?t.label||"{0}":de.isFunction(O[o].label)?O[o].label:w.getItem(n)[o],a="y"+n}return delete(e=de.extend({},t,{name:a+(1<A?"a"+r:""),label:de.isFunction(i)?i.call(S,2===e?{aggregate:t,iAggregate:r,pivotOptions:I}:1===e?{yIndex:w.getItem(n),aggregate:t,iAggregate:r,yLevel:o,pivotOptions:I}:{yData:w.getItem(n)[o],yIndex:w.getItem(n),yLevel:o,pivotOptions:I}):ye.template.apply(S,2===e?[String(i),t.aggregator,t.member,r]:[String(i),t.aggregator,t.member,w.getItem(n)[o],o])})).member,delete e.aggregator,e},ue=function(e){e=new he("count"===C[e].aggregator?"sum":C[e].aggregator,S,t);return e.groupInfo={iRows:[],rows:[],ys:[],iYs:[]},e};if(0===D||0===A)throw"xDimension or aggregates options are not set!";for(K=Y(ee,I.skipSortByX,I.compareVectorsByX),w=Y(O,I.skipSortByY,I.compareVectorsByY),t.xIndex=K,t.yIndex=w,n=0;n<D;n++)u={name:"x"+n,label:null!=(a=ee[n]).label?de.isFunction(a.label)?a.label.call(S,a,n,I):a.label:a.dataName,frozen:I.frozenStaticCols},n<D-1&&!a.skipGrouping&&!a.additionalProperty&&($.groupField.push(u.name),$.groupSummary.push(I.groupSummary),$.groupSummaryPos.push(I.groupSummaryPos)),delete(u=de.extend(u,a)).dataName,delete u.footerText,a.additionalProperty?ie.push(u.name):(oe.push(u),_.sortname=u.name);for(D<2&&(_.grouping=!1),$.hideFirstGroupCol=!0,n=0;n<re;n++)s=O[n],F.push(!!(s.totals||s.rowTotals||s.totalText||s.totalHeader));for(v=w.getItem(0),e(0,re-1,0),b=w.getIndexLength(),m=1;m<b;m++){for(d=w.getItem(m),n=w.getIndexOfDifferences(d,v),i=T-1;n<=i;i--)F[i]&&e(1,i,m-1);v=d,e(0,re-1,m)}for(n=T-1;0<=n;n--)F[n]&&e(1,n,b-1);for(te&&e(2),v=w.getItem(0),i=0;i<T;i++)k.push({useColSpanStyle:I.useColSpanStyle,groupHeaders:[{titleText:de.isFunction(O[i].label)?O[i].label.call(S,{yData:v[i],yIndex:v,yLevel:i,pivotOptions:I}):v[i],startColumnName:1===A?"y0":"y0a0",numberOfColumns:A}]});for(m=1;m<b;m++){for(d=w.getItem(m),B(m,n=w.getIndexOfDifferences(d,v),v),i=T-1;n<=i;i--)k[i].groupHeaders.push({titleText:de.isFunction(O[i].label)?O[i].label.call(S,{yData:d[i],yIndex:d,yLevel:i,pivotOptions:I}):d[i],startColumnName:"y"+m+(1===A?"":"a0"),numberOfColumns:A});for(i=0;i<n;i++)(Q=k[i].groupHeaders)[Q.length-1].numberOfColumns+=A;v=d}if(B(b,0,v),te)for(n=0;n<T;n++)k[n].groupHeaders.push({titleText:!(n<T-1)&&I.totalHeader||"",startColumnName:"t"+(1===A?"":"a0"),numberOfColumns:A});for(E=K.getIndexLength(),g=0;g<E;g++){for(L=K.getItem(g),x={pivotInfos:z={iX:g,x:L}},n=0;n<D;n++)x["x"+n]=L[n];if(G=K.getIndexesOfSourceData(g),te)for(i=0;i<A;i++)ae[i]=ue(i);v=null,R=H=void 0;for(var R,H=T-1;0<=H;H--)if(F[H])for(null==N[H]&&(N[H]=new Array(A)),R=0;R<A;R++)N[H][R]=ue(R);for(m=0;m<b;m++){for(d=w.getItem(m),U=w.getIndexesOfSourceData(m),i=0;i<A;i++){for(null!==v&&q(m-1,d,v,i),y=[],n=0;n<U.length;n++)J=U[n],0<=de.inArray(J,G)&&y.push(J);if(0<y.length){for(M=new Array(y.length),p=new he((h=C[i]).aggregator,S,t),l=0;l<y.length;l++){n=y[l],r=o[n],M[l]=r,p.calc(r[h.member],h.member,r,n,o),te&&((X=ae[i]).calc(r[h.member],h.member,r,n,o),c=X.groupInfo,de.inArray(n,c.iYs)<0&&(c.iYs.push(m),c.ys.push(d)),de.inArray(n,c.iRows)<0&&(c.iRows.push(n),c.rows.push(r))),j=j=V=void 0;var V,j,le=d,fe=h,ge=i,pe=r,ce=n,me=m;if(le!==v)for(V=T-1;0<=V;V--)F[V]&&((j=N[V][ge]).calc(pe[fe.member],fe.member,pe,ce,o),j=j.groupInfo,de.inArray(me,j.iYs)<0&&(j.iYs.push(me),j.ys.push(le)),de.inArray(ce,j.iRows)<0&&(j.iRows.push(ce),j.rows.push(pe)))}p.getResult(x,f="y"+m+(1===A?"":"a"+i)),z[f]={colType:0,iY:m,y:d,iA:i,a:h,iRows:y,rows:M}}}v=d}if(null!==v)for(i=0;i<A;i++)q(b-1,v,v,i);if(te)for(i=0;i<A;i++)(X=ae[i]).getResult(x,f="t"+(1===A?"":"a"+i)),c=X.groupInfo,z[f]={colType:2,iA:i,a:C[i],iRows:c.iRows,rows:c.rows,iYs:c.iYs,ys:c.ys};ne.push(x)}if(I.footerTotals||I.colTotals){for(P=ne.length,n=0;n<D;n++)Z["x"+n]=ee[n].footerText||"";for(n=D;n<oe.length;n++){for(f=oe[n].name,p=new he(I.footerAggregator||"sum",S,t),l=0;l<P;l++)x=ne[l],p.calc(x[f],f,x,l,ne);p.getResult(Z,f)}}return t.colHeaders=k,{colModel:oe,additionalProperties:ie,options:t,rows:ne,groupOptions:_,groupHeaders:k,summary:Z}},jqPivot:function(l,f,g,r){return this.each(function(){var a=this,s=de(a),u=de.fn.jqGrid;function t(){var e,t=u.pivotSetup.call(s,l,f),r=t.groupHeaders,o=0<function(e){var t,r=0;for(t in e)e.hasOwnProperty(t)&&r++;return r}(t.summary),n=t.groupOptions.groupingView,i=ye.from.call(a,t.rows);if(!f.skipSortByX)for(e=0;e<n.groupField.length;e++)i.orderBy(n.groupField[e],null!=g&&g.groupingView&&null!=g.groupingView.groupOrder&&"desc"===g.groupingView.groupOrder[e]?"d":"a","text","");if(f.data=l,u.call(s,de.extend(!0,{datastr:de.extend(i.select(),o?{userdata:t.summary}:{}),datatype:"jsonstring",footerrow:o,userDataOnFooter:o,colModel:t.colModel,additionalProperties:t.additionalProperties,pivotOptions:t.options,viewrecords:!0,sortname:f.xDimension[0].dataName},t.groupOptions,g||{})),r.length)for(e=0;e<r.length;e++)r[e]&&r[e].groupHeaders.length&&u.setGroupHeaders.call(s,r[e]);f.frozenStaticCols&&u.setFrozenColumns.call(s)}"string"==typeof l?de.ajax(de.extend({url:l,dataType:"json",success:function(e){l=ye.getAccessor(e,r&&r.reader?r.reader:"rows"),t()}},r||{})):t()})}})});
//# sourceMappingURL=grid.pivot.js.map