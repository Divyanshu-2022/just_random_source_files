function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function closePop() {
  document.getElementById("pop").style.display = "none";
}
window.addEventListener("load", function () {
  setTimeout(function open(event) {
    document.querySelector(".popup").style.display = "block";
  }, 15000);
});


// var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

const download=document.querySelector('#download-pdf');

const submitForm=document.querySelector("#submit-form");

download.addEventListener('click',()=>{
  let element =document.createElement("a");
  element.href="./M3MGolf79InfoDock.pdf"
  element.download="M3MGolf79InfoDock.pdf"
   document.documentElement.appendChild(element);


   element.click();

   document.documentElement.removeChild(element);
   submitForm.click();


})
  

function postForm(){
  console.log("clicked");
}




