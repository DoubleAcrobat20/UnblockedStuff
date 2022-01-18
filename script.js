var games = {"Slope" : "https://games.techysharif.live/full/slope-unblocked-online", "Google" : "https://google.com"}
var current = "";


function changeGame(gamename, btn)
{
    current.className = "";
    document.getElementById("gameembed").src = games[gamename];
    btn.className = "active";
    current = btn;
}