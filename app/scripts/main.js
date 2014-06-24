"use strict";
/*global _,token */

/* Use this variable to change the content. */
var username = "maswhitaker";

/* First AJAX call to request user information */
var template = $('#information').html();
var user = $.getJSON("https://api.github.com/users/" + username + "?client_id=" + token, function(data){
  console.log("starting process");
});
  user.done(function(){
  console.log( "success" );
  $('#target').html(_.template(template,{user:user}));
});
  user.fail(function() {
    console.log( "error" );
});

/* Second AJAX call to request repository information */
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
