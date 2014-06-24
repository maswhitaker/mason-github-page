
"use strict";
/*global _,token */
var template = $('#information').html();
var user = $.getJSON("https://api.github.com/users/maswhitaker?client_id=" + token, function(data){
  console.log("starting process");
});
  user.done(function(){
  console.log( "success" );
  $('#target').html(_.template(template,{user:user}));
});
  user.fail(function() {
    console.log( "error" );
});

//
// var boop = _.each(repoInfo,function(){
//   for(i=0;i<repoInfo;i++){
//     return repoInfo[i];
//   };
// });

var template2 = $('#repo-information').html();
var repoInfo = $.getJSON("https://api.github.com/users/maswhitaker/repos?client_id=" + token, function(date){
  console.log("starting second process")
  repoInfo.done(function(){
    console.log("second success");
    $('#second-target').html(_.template(template2,repoInfo));
  });
  repoInfo.fail(function(){
    console.log("error");
  });
});








//
// var repolog = $("#repo-information").html();
// var dumdum = _.each(repos, function(word){
//   for(i= 0; i < repos.length; i++){
//     return repos[i];
//   };
// });
// $('#second-target').append(_.template(repolog,dumdum));
