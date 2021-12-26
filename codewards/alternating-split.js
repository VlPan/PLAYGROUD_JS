// https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript

function encrypt(text, n) {
	if (text == null) {
		return null;
	}
	for (let i = 0; i < n; i++) {
		let odds = "";
		let evens = "";
		for (let j = 0; j < text.length; j++) {
			const isOdd = j % 2 !== 0;
			const symbol = text[j];
			if (isOdd) {
				odds = odds.concat(symbol);
			} else {
				evens = evens.concat(symbol);
			}

			const isLastIteration = j === text.length - 1;
			if (isLastIteration) {
				text = odds + evens;
			}
		}
	}

	return text;
}

function decrypt(encryptedText, n) {
	if (encryptedText == null) {
		return null;
	}
	for (let i = 0; i < n; i++) {
		const res = [];
		const oddsL = Math.floor(encryptedText.length / 2);

		for (let o = 0, oi = 1; o < oddsL; o++, oi += 2) {
			res[oi] = encryptedText[o];
		}

		for (let e = oddsL, ei = 0; e < encryptedText.length; e++, ei += 2) {
			res[ei] = encryptedText[e];
		}

		encryptedText = res.join("");
	}

	return encryptedText;
}
