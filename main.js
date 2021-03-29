var variable1 = document.getElementById("passion");
if(variable1 != null){
  var egg = new Egg();
  egg.addCode("p, a, s, s, i, o, n", function() {
        window.location.href="http://technigres.com/";
    }).listen();
}

var variable2 = document.getElementById("osu");
if(variable2 != null){
  var egg = new Egg();
  egg.addCode("o, s, u", function() {
    window.location.href="https://osu.ppy.sh/users/9910665";
  }).listen();
}
  