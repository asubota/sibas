"use strict";angular.module("sibasApp",["ui.bootstrap"]),angular.module("sibasApp").controller("MainCtrl",["$http","$scope",function(a,b){a.get("data/data.wiki.json").success(function(a){b.data=a,b.types=_.uniq(_.map(a,function(a){return a.type})).sort()}),b.byType=function(){b.filtered=_.filter(b.data,function(a){return a.type===b.type})}}]);