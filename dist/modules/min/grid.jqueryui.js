!function(t,i){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base","free-jqgrid-plugins/ui.multiselect","jquery-ui/dialog","jquery-ui/draggable","jquery-ui/droppable","jquery-ui/resizable","jquery-ui/sortable"],function(e){return i(e,t,t.document)}):"object"==typeof module&&module.exports?module.exports=function(e,t){return e=e||window,void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),require("./grid.base"),require("free-jqgrid-plugins/ui.multiselect"),require("jquery-ui/dialog"),require("jquery-ui/draggable"),require("jquery-ui/droppable"),require("jquery-ui/resizable"),require("jquery-ui/sortable"),i(t,e,e.document),t}:i(jQuery,t,t.document)}("undefined"!=typeof window?window:this,function(_,j,a){"use strict";function q(i){if(null!=this.grid&&null!=this.grid.p){var o,e,t,r,n,a=this,d=this.grid.p,l=this.gh,s=this.selectedList,u=this.inGroup,c=s.find("li"),p=c.length-1,h=function(e,t,i){for(var o,r=s.find("li"),n=t=void 0===t?i?r.length-1:0:t;i?0<=n:n<r.length;i?n--:n++)if((o=_(r[n]).data("optionLink"))&&e.call(r[n],parseInt(o.val(),10),n))return n},g=function(){0<=(n=_.inArray(d.colModel[i].name,a.newColOrder))&&a.newColOrder.splice(n,1),c=s.find("li"),o=0,h(function(e,t){if(e===i){for(p=t;0<=o&&o<d.colModel.length&&o!==i&&(d.colModel[o].hidden||d.colModel[o].hidedlg)&&(null==u||u[o]===u[i]);)o++;return a.newColOrder.splice(o,0,d.colModel[i].name),!0}(o=_.inArray(d.colModel[e].name,a.newColOrder,o))<0&&(o=_.inArray(d.colModel[e].name,a.newColOrder)),o++})},f=function(e){if(u[e]===u[i])return _(this).after(c[p]),g(),!0},m=function(e){if(u[e]===u[i])return _(this).before(c[p]),g(),!0},b=function(e){if(u[e]===u[i]&&void 0!==u[e])return l[u[e]].startColumnName=d.colModel[e].name,!0};if(g(),l&&void 0!==l[u[i]]){for(e=l[u[i]],n=0;n<e.numberOfColumns;n++)if(o=d.iColByName[e.startColumnName]+n,!d.colModel[o].hidden&&!d.colModel[o].hidedlg){h(f,p-1,!0),h(m,p+1),h(b);break}}else l&&(c=s.find("li"),(n=h(function(e){if(e===i)return!0}))+1>=c.length||n<0||(t=_(c[n+1]).data("optionLink"))&&void 0!==(r=u[parseInt(t.val(),10)])&&(t=_(c[n-1]).data("optionLink"))&&u[parseInt(t.val(),10)]===r&&(t=h(function(e){if(u[e]!==r)return!0},n+1),_(c[void 0===t||t>=c.length?c.length-1:t-1]).after(c[p]),g()))}}var r,G=_.jgrid,x=G.jqID,C=null!=_.ui?_.ui.multiselect:null;G.msie&&8===G.msiever()&&(_.expr[":"].hidden=function(e){return 0===e.offsetWidth||0===e.offsetHeight||"none"===e.style.display}),G._multiselect=!1,C&&(C.prototype._setSelected&&(r=C.prototype._setSelected,C.prototype._setSelected=function(e,t){var i=r.call(this,e,t),o=this.element,e=parseInt(e.data("optionLink").val(),10);return t&&this.selectedList&&(q.call(this,e),this.selectedList.find("li").each(function(){_(this).data("optionLink")&&_(this).data("optionLink").remove().appendTo(o)})),i}),C.prototype.destroy&&(C.prototype.destroy=function(){var e=this;e.element.show(),e.container.remove(),(void 0===_.Widget?_.widget:_.Widget).prototype.destroy.apply(e,arguments)}),G._multiselect=!0),G.extend({sortableColumns:function(t){return this.each(function(){var i,r=this,n=r.p,e=x(n.id);function o(){n.disableClick=!0}n&&n.sortable&&_.isFunction(_.fn.sortable)&&(e={tolerance:"pointer",axis:"x",scrollSensitivity:"1",items:">th:not(:has(#jqgh_"+e+"_cb,#jqgh_"+e+"_rn,#jqgh_"+e+"_subgrid),:hidden)",placeholder:{element:function(e){return _(a.createElement(e[0].nodeName)).addClass(e[0].className+" ui-sortable-placeholder ui-state-highlight").removeClass("ui-sortable-helper")[0]},update:function(e,t){t.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),t.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10))}},start:function(){r.grid.hDiv.scrollLeft=r.grid.bDiv.scrollLeft},update:function(e,t){var t=_(">th",_(t.item).parent()),i=n.id+"_",o=[];t.each(function(){var e=_(">div",this).get(0).id.replace(/^jqgh_/,"").replace(i,""),e=n.iColByName[e];void 0!==e&&o.push(e)}),_(r).jqGrid("remapColumns",o,!0,!0),_.isFunction(n.sortable.update)&&n.sortable.update(o),setTimeout(function(){n.disableClick=!1},50)}},n.sortable.options?_.extend(e,n.sortable.options):_.isFunction(n.sortable)&&(n.sortable={update:n.sortable}),e.start?(i=e.start,e.start=function(e,t){o(),i.call(this,e,t)}):e.start=o,n.sortable.exclude&&(e.items+=":not("+n.sortable.exclude+")"),null!=(e=(e=t.sortable(e)).data("sortable")||e.data("uiSortable")||e.data("ui-sortable"))&&(e.floating=!0))})},columnChooser:function(n){function i(e){return C&&C.prototype&&e.data(C.prototype.widgetFullName||C.prototype.widgetName)||e.data("ui-multiselect")||e.data("multiselect")}var t,a,d,e,l=this,o=l[0],s=o.p,u=s.colModel,r=u.length,c=s.colNames;if(!_("#colchooser_"+x(s.id)).length){if(t=_('<div id="colchooser_'+s.id+'" style="position:relative;overflow:hidden"><div><select multiple="multiple"></select></div></div>'),a=_("select",t),n=_.extend({width:400,height:240,classname:null,done:function(e){e&&l.jqGrid("remapColumns",e,!0)},msel:"multiselect",dlog:"dialog",dialog_opts:{minWidth:470,dialogClass:"ui-jqdialog"},dlog_opts:function(e){var t={};return t[e.bSubmit]=function(){e.apply_perm(),e.cleanup(!1)},t[e.bCancel]=function(){e.cleanup(!0)},_.extend(!0,{buttons:t,close:function(){e.cleanup(!0)},modal:e.modal||!1,resizable:e.resizable||!0,width:e.width+70,resize:function(){var e=i(a),t=e.container.closest(".ui-dialog-content");0<t.length&&"object"==typeof t[0].style?t[0].style.width="":t.css("width",""),e.selectedList.height(Math.max(e.selectedContainer.height()-e.selectedActions.outerHeight()-1,1)),e.availableList.height(Math.max(e.availableContainer.height()-e.availableActions.outerHeight()-1,1))}},e.dialog_opts||{})},apply_perm:function(){for(var e,t=new Array(s.colModel.length),i={notSkipFrozen:void 0!==n.notSkipFrozen&&n.notSkipFrozen,skipSetGridWidth:!0,skipSetGroupHeaders:!0},o=0;o<s.colModel.length;o++)t[o]=s.iColByName[d.newColOrder[o]];if(_("option",a).each(function(){_(this).is(":selected")?l.jqGrid("showCol",u[this.value].name,i):l.jqGrid("hideCol",u[this.value].name,i)}),n.done&&n.done.call(l,t),s.groupHeader&&("object"==typeof s.groupHeader||_.isFunction(s.groupHeader)))if(l.jqGrid("destroyGroupHeader",!1),s.groupHeader.groupHeaders=d.gh,null!=s.pivotOptions&&null!=s.pivotOptions.colHeaders&&1<s.pivotOptions.colHeaders.length)for(e=s.pivotOptions.colHeaders,o=0;o<e.length;o++)e[o]&&e[o].groupHeaders.length&&l.jqGrid("setGroupHeaders",e[o]);else l.jqGrid("setGroupHeaders",s.groupHeader);var r=s.autowidth||void 0!==s.widthOrg&&"auto"!==s.widthOrg&&"100%"!==s.widthOrg?s.width:s.tblwidth;r!==s.width&&l.jqGrid("setGridWidth",r,s.shrinkToFit)},cleanup:function(e){w(n.dlog,t,"destroy"),w(n.msel,a,"destroy"),t.remove(),e&&n.done&&n.done.call(l)},msel_opts:{}},l.jqGrid("getGridRes","col"),G.col,n||{}),_.ui&&C&&C.defaults){if(!G._multiselect)return void(null!=G.defaults&&_.isFunction(G.defaults.fatalError)?G.defaults.fatalError:alert)("Multiselect plugin loaded after jqGrid. Please load the plugin before the jqGrid!");n.msel_opts=_.extend(C.defaults,n.msel_opts)}n.caption&&t.attr("title",n.caption),n.classname&&(t.addClass(n.classname),a.addClass(n.classname)),n.width&&(_(">div",t).css({width:n.width,margin:"0 auto"}),a.css("width",n.width)),n.height&&(_(">div",t).css("height",n.height),a.css("height",n.height-10)),a.empty();var p,h,g,f,m,b,v=null!=s.groupHeader?s.groupHeader.groupHeaders:0,y={};if(v)for(p=0;p<v.length;p++)for(f=v[p],h=0;h<f.numberOfColumns;h++)g=s.iColByName[f.startColumnName]+h,y[g]=_.isFunction(n.buildItemText)?n.buildItemText.call(l[0],{iCol:g,cm:u[g],cmName:u[g].name,colName:c[g],groupTitleText:f.titleText}):_.jgrid.stripHtml(f.titleText)+": "+_.jgrid.stripHtml(""===c[g]?u[g].name:c[g]);for(g=0;g<r;g++)void 0===y[g]&&(y[g]=_.isFunction(n.buildItemText)?n.buildItemText.call(l[0],{iCol:g,cm:u[g],cmName:u[g].name,colName:c[g],groupTitleText:null}):_.jgrid.stripHtml(c[g]));if(_.each(u,function(e){this.hidedlg||a.append("<option value='"+e+"'"+(s.headertitles||this.headerTitle?" title='"+G.stripHtml("string"==typeof this.headerTitle?this.headerTitle:y[e])+"'":"")+(this.hidden?"":" selected='selected'")+">"+y[e]+"</option>")}),e=_.isFunction(n.dlog_opts)?n.dlog_opts.call(l,n):n.dlog_opts,w(n.dlog,t,e),e=_.isFunction(n.msel_opts)?n.msel_opts.call(l,n):n.msel_opts,w(n.msel,a,e),(e=_("#colchooser_"+x(s.id))).css({margin:"auto"}),e.find(">div").css({width:"100%",height:"100%",margin:"auto"}),d=i(a)){if(d.grid=o,v)for(d.gh=_.extend(!0,[],v),d.inGroup=new Array(s.colModel.length),m=0;m<v.length;m++)for(b=v[m],g=0;g<b.numberOfColumns;g++)d.inGroup[s.iColByName[b.startColumnName]+g]=m;d.newColOrder=_.map(u,function(e){return e.name}),d.container.css({width:"100%",height:"100%",margin:"auto"}),d.selectedContainer.css({width:100*d.options.dividerLocation+"%",height:"100%",margin:"auto",boxSizing:"border-box"}),d.availableContainer.css({width:100-100*d.options.dividerLocation+"%",height:"100%",margin:"auto",boxSizing:"border-box"}),d.selectedList.css("height","auto"),d.availableList.css("height","auto"),e=Math.max(d.selectedList.height(),d.availableList.height()),e=Math.min(e,_(j).height()),d.selectedList.css("height",e),d.availableList.css("height",e),null!=d.options&&d.options.sortable&&d.selectedList.on("sortupdate",function(e,t){q.call(d,parseInt(t.item.data("optionLink").val(),10)),t.item.css({width:"",height:""}),_.isFunction(n.sortUpdate)&&n.sortUpdate.call(o,e,t)}),_.isFunction(n.init)&&n.init.call(o,d)}}function w(e,t){e&&("string"==typeof e?_.fn[e]&&_.fn[e].apply(t,_.makeArray(arguments).slice(2)):_.isFunction(e)&&e.apply(t,_.makeArray(arguments).slice(2)))}},sortableRows:function(a){return this.each(function(){var o=this,r=o.grid,n=o.p;r&&!n.treeGrid&&_.fn.sortable&&((a=_.extend({cursor:"move",axis:"y",items:">tbody>.jqgrow"},a||{})).start&&_.isFunction(a.start)?(a._start_=a.start,delete a.start):a._start_=!1,a.update&&_.isFunction(a.update)?(a._update_=a.update,delete a.update):a._update_=!1,a.start=function(e,t){if(_(t.item).css("border-width","0"),_("td",t.item).each(function(e){this.style.width=r.cols[e].style.width}),n.subGrid){var i=_(t.item).attr("id");try{_(o).jqGrid("collapseSubGridRow",i)}catch(e){}}a._start_&&a._start_.apply(this,[e,t])},a.update=function(e,t){_(t.item).css("border-width",""),!0===n.rownumbers&&_("td.jqgrid-rownum",o.rows).each(function(e){_(this).html(e+1+(parseInt(n.page,10)-1)*parseInt(n.rowNum,10))}),a._update_&&a._update_.apply(this,[e,t])},_(o).sortable(a))})},gridDnD:function(o){return this.each(function(){var e,t,g=this;if(g.grid&&!g.p.treeGrid&&_.fn.draggable&&_.fn.droppable)if(void 0===_("#jqgrid_dnd")[0]&&_("body").append("<table id='jqgrid_dnd' class='ui-jqgrid-dnd'></table>"),"string"==typeof o&&"updateDnD"===o&&!0===g.p.jqgdnd)i();else if((o=_.extend({drag:function(r){return _.extend({start:function(e,t){var i,o;if(g.p.subGrid){o=_(t.helper).attr("id");try{_(g).jqGrid("collapseSubGridRow",o)}catch(e){}}for(i=0;i<_.data(g,"dnd").connectWith.length;i++)0===_(_.data(g,"dnd").connectWith[i]).jqGrid("getGridParam","reccount")&&_(_.data(g,"dnd").connectWith[i]).jqGrid("addRowData","jqg_empty_row",{});t.helper.addClass("ui-state-highlight"),_("td",t.helper).each(function(e){this.style.width=g.grid.headers[e].width+"px"}),r.onstart&&_.isFunction(r.onstart)&&r.onstart.call(_(g),e,t)},stop:function(e,t){var i,o;for(t.helper.dropped&&!r.dragcopy&&(void 0===(o=_(t.helper).attr("id"))&&(o=_(this).attr("id")),_(g).jqGrid("delRowData",o)),i=0;i<_.data(g,"dnd").connectWith.length;i++)_(_.data(g,"dnd").connectWith[i]).jqGrid("delRowData","jqg_empty_row");r.onstop&&_.isFunction(r.onstop)&&r.onstop.call(_(g),e,t)}},r.drag_opts||{})},drop:function(h){return _.extend({accept:function(e){var t;return _(e).hasClass("jqgrow")?0<(t=_(e).closest("table.ui-jqgrid-btable")).length&&void 0!==_.data(t[0],"dnd")&&(t=_.data(t[0],"dnd").connectWith,-1!==_.inArray("#"+x(this.id),t)):e},drop:function(e,t){if(_(t.draggable).hasClass("jqgrow")){var i,o=_(t.draggable).attr("id"),r=t.draggable.parent().parent(),n=r.jqGrid("getRowData",o);if(!h.dropbyname){var a,d,l,s,u={},c=r.jqGrid("getGridParam","colModel"),p=_("#"+x(this.id)).jqGrid("getGridParam","colModel");try{for(d=a=0;a<c.length&&d<p.length;a++)if("cb"!==(l=c[a].name)&&"rn"!==l&&"subgrid"!==l){for(;d<p.length;d++)if("cb"!==(s=p[d].name)&&"rn"!==s&&"subgrid"!==s){u[s]=n[l];break}d++}n=u}catch(e){}}t.helper.dropped=!0,h.beforedrop&&_.isFunction(h.beforedrop)&&(null!=(r=h.beforedrop.call(this,e,t,n,_("#"+x(g.p.id)),_(this)))&&"object"==typeof r&&(n=r)),t.helper.dropped&&(h.autoid&&(i=_.isFunction(h.autoid)?h.autoid.call(this,n,{rowid:o,ev:e,ui:t}):(i=Math.ceil(1e3*Math.random()),h.autoidprefix+i)),_("#"+x(this.id)).jqGrid("addRowData",i,n,h.droppos),n[g.p.localReader.id]=i),h.ondrop&&_.isFunction(h.ondrop)&&h.ondrop.call(this,e,t,n)}}},h.drop_opts||{})},onstart:null,onstop:null,beforedrop:null,ondrop:null,drop_opts:{},drag_opts:{revert:"invalid",helper:"clone",cursor:"move",appendTo:"#jqgrid_dnd",zIndex:5e3},dragcopy:!1,dropbyname:!1,droppos:"first",autoid:!0,autoidprefix:"dnd_"},o||{})).connectWith)for(o.connectWith=o.connectWith.split(","),o.connectWith=_.map(o.connectWith,function(e){return _.trim(e)}),_.data(g,"dnd",o),0===g.p.reccount||g.p.jqgdnd||i(),g.p.jqgdnd=!0,e=0;e<o.connectWith.length;e++)t=o.connectWith[e],_(t).droppable(_.isFunction(o.drop)?o.drop.call(_(g),o):o.drop);function i(){var e=_.data(g,"dnd");_("tr.jqgrow:not(.ui-draggable)",g).draggable(_.isFunction(e.drag)?e.drag.call(_(g),e):e.drag)}})},gridResize:function(s){return this.each(function(){var i,e,o=this,r=o.grid,n=o.p,a=n.gView+">.ui-jqgrid-bdiv",d=!1,l=n.height;r&&_.fn.resizable&&((s=_.extend({},s||{})).alsoResize?(s._alsoResize_=s.alsoResize,delete s.alsoResize):s._alsoResize_=!1,s.stop&&_.isFunction(s.stop)?(s._stop_=s.stop,delete s.stop):s._stop_=!1,s.stop=function(e,t){_(o).jqGrid("setGridWidth",t.size.width,s.shrinkToFit),_(n.gView+">.ui-jqgrid-titlebar").css("width",""),d?(_(i).each(function(){_(this).css("height","")}),"auto"!==l&&"100%"!==l||_(r.bDiv).css("height",l)):_(o).jqGrid("setGridParam",{height:_(a).height()}),o.fixScrollOffsetAndhBoxPadding&&o.fixScrollOffsetAndhBoxPadding(),s._stop_&&s._stop_.call(o,e,t)},i=a,"auto"!==l&&"100%"!==l||void 0!==s.handles||(s.handles="e,w"),s.handles&&2===(e=_.map(String(s.handles).split(","),function(e){return _.trim(e)})).length&&("e"===e[0]&&"w"===e[1]||"e"===e[1]&&"w"===e[1])&&(i=n.gView+">div:not(.frozen-div)",d=!0,n.pager&&(i+=","+n.pager)),s._alsoResize_?s.alsoResize=i+","+s._alsoResize_:s.alsoResize=i,delete s._alsoResize_,_(n.gBox).resizable(s))})}})});
//# sourceMappingURL=grid.jqueryui.js.map