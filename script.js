ImageArray = new Array();
    ImageArray[0] = '1.png';
    ImageArray[1] = '2.png';
    ImageArray[2] = '3.png';
    ImageArray[3] = '4.png';


// Durstenfeld shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getRandom() {
	shuffleArray(ImageArray);
	document.getElementById("randImage").innerHTML = ('<img src="' + 'bilder/' + ImageArray[0] + '"style= "margin-left: 2vw;margin-top: 1vw;height: 22vw;"">')
	document.getElementById("randImage2").innerHTML = ('<img src="' + 'bilder/' + ImageArray[1] + '"style= "margin-left: 1.5vw;height: 6vw;"">')
	document.getElementById("randImage3").innerHTML = ('<img src="' + 'bilder/' + ImageArray[2] + '"style= "margin-left: 1.5vw;height: 6vw;"">')
	document.getElementById("randImage4").innerHTML = ('<img src="' + 'bilder/' + ImageArray[3] + '"style= "margin-left: 1.5vw;height: 6vw;"">')
}