// requests: localhost:3000/palindrome

const express = require("express");
const app = express();

// middleware
app.use(express.json());

function isPalindrome(string) {
	// Removemos la ñ por n y todos los acentos
	string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	// Quitamos signos de puntuacion y espacios /g es para quitar todos los que hagan match
	string = string.replace(/[.,; ]|_/g, "");

	const str = string.toLowerCase();
	const reversedString = str.split("").reverse().join("");
	if (str == reversedString) {
		return true;
	} else {
		return false;
	}
}

app.post("/palindrome", function (req, res) {
	const possiblePalindrome = req.body.phrase;
	res.status(200).json({ palindrome: isPalindrome(possiblePalindrome) });
});

app.listen(3000, () => {
	console.log(`Sample API running`);
});
