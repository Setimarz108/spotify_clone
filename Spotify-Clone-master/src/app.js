


window.onload = () => {

    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "20b74dadd4msh868d3bed084b2c9p1052e3jsn745d7ab10a9e"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});



  };