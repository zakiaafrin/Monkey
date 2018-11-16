function jump() {
    var myMonkey = document.getElementById("monkeyPic");
        myMonkey.src="Up_and_down.gif";
    var score = document.getElementById("lilBox");
        score.innerHTML = parseInt(score.innerHTML) + 1;
    }
    
    function stop() {
        var myMonkey = document.getElementById("monkeyPic");
        myMonkey.src="monkey.gif";
    }