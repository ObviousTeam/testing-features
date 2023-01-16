"use strict";

window.onload = function() {

  function realert() {
      console.clear();
      console.warn(
          "%cNote!",
          "color: purple; font-weight: 600; background: yellow; padding: 0 5px; border-radius: 5px",
          "Be careful when you are in here. You can accidentally do some dangerous stuff."
      );
  }


  document.addEventListener("DOMContentLoaded", function(){
    var button = document.querySelectorAll('[data-id="button"]');
    var username = document.querySelectorAll('[data-id="username"]');
    var password = document.querySelectorAll('[data-id="password"]');
    
    function login(username, secret) {
        var hash = sha256(secret);
        var usernameHash = sha256(username);
        var url = hash + "/set.html";
        var url2 = usernameHash + "/set2.html";
    
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
    
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                var request2 = new XMLHttpRequest();
                request2.open('GET', url2, true);
                request2.onload = function() {
                    if (request2.status >= 200 && request2.status < 400) {
                        let nva = new Date().getTime() + 1_000;
                        window.location = '../protected.html' + "?nva=" + nva;
                    } else {
                        parent.location.hash = usernameHash;
                    }
                };
                request2.onerror = function() {
                    parent.location.hash = usernameHash;
                };
                request2.send();
            } else {
                parent.location.hash = hash;
            }
        };
        request.onerror = function() {
            parent.location.hash = hash;
        };
        request.send();
    }
    
    button[0].addEventListener("click", function() {
        login(username[0].value, password[0].value)
    });
    
    document.onkeydown = function(e) {
        e = e || window.event;
        if (e.keyCode == 13) {
            login(username[0].value, password[0].value)
        }
    };
  }
)}