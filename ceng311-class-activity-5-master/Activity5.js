var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("name").focus();
};

function addScore() {
	var name = $("name").value;
	var score = parseInt($("score").value);

	if (name.length > 0 && (!isNaN(score) && ((score > 0 || score == 0) && score < 101))) {
		names.push(name);
		scores.push(score);
		$("name").value = "";
		$("score").value = "";
		$("name").focus();

	} else {
		alert("You must enter a name and a valid score.");
	}
}

function displayResults() {
	var average = 0;
	for (var i = 0; i < scores.length; i++) {
		average = (average * (i) + scores[i]) / (i + 1);
	}

	var maxValue = scores[0];
	var maxIndex = 0;

	for (var i = 1; i < scores.length; i++) {
		if (scores[i] > maxValue) {
			maxIndex = i;
			maxValue = scores[i];
		}
	}

	var maxName = names[maxIndex];

	document.getElementById("results").innerHTML =
		"<h2> Results </h2><br /> Average score is " + average + "<br \> High Score = " + maxName + " with a score of " + maxValue;
}

function displayScores() {
	var head = "<tr><th>Name</th><th>Score</th></tr>"
	var body = "";

	for (var i = 0; i < names.length; i++) {
		body += `<tr><td>${names[i]}</td><td>${scores[i]}</td></tr>`;
	}

	document.getElementById("scores_table").innerHTML = "<h2>Scores</h2><br/>" + head + body;

}
