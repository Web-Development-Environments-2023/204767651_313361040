
var users = {}
var shotKey = ' '
let timerCount = 120000;  //in seconds
users['p'] = {
    'username': 'p',
    'pass': 'p',
    'firstname': 'P',
    'lastname': 'Test',
    'Email': 'test@gmail.com',
    'Birthdate': '01/01/2000',
}


$(document).ready(function() {
    welcome();
});


function welcome() {
    hide();
    $("#welcome").show();
}




const pageSwitch = (tab) => {
	hide();
	$(tab).show();
  };


  const hide = () => {
	$('#welcome').hide();
	$('#register').hide();
	$('#login').hide();
    $('#Configuration').hide();
    $('#game').hide();



	// $('#settings').hide();
	// $('#game-section').hide();
	// if(gameOn){
    //     if(!song.paused){
    //         song.pause();
    //         song.currentTime = 0;

    //     }
    //     Stop();
	// 	gameOn = false;
    //     ghostsLocs={};
    //     ghostsCounter=0;
    //     lives=5;
    //     maxScore=0;
    //     score=0;
	// }
  };


  async function setKey(){
	return new Promise((resolve) => {
		document.addEventListener("keydown", onKeyHandler);
		function onKeyHandler(e){
			document.removeEventListener("keydown", onKeyHandler);
			resolve();
            shotKey = String.fromCharCode(e.which).toLowerCase();
            // console.log(shotKey)
            if(shotKey === 'space'){
                shotKey = ' ';
            }


            // shotKey = e.which;
            if (e.which === 32) {
                $("#key-shot").text("Space");
            }
            else
            $("#key-shot").text(e.key);
		}
	});
}

function setSettings(){
    const timer = parseInt(document.getElementById('rangeVal').value)*1000;
    timerCount = timer;
    pageSwitch("#game");
    setupGame();
    return false;

}

