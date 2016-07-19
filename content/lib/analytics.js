// Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-80903842-2', 'auto');
ga('send', 'pageview');


// insert border
var body = document.getElementsByTagName("body")[0];

var div = document.createElement("div");
div.id = "border-top"
body.insertBefore(div, body.firstChild);

div = document.createElement("div");
div.id = "border-bottom"
body.insertBefore(div, body.firstChild);
