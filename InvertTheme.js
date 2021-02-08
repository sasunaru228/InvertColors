

let button = document.getElementById('changeTheme');
button.onclick = () => {
	$('*').map((id, result) => {
		let matchRGB = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
		let matchRGBA = /rgba\((\d{1,3}), (\d{1,3}), (\d{1,3}), (\d{1,3})\)/;

		let match = matchRGB.exec(getComputedStyle(result).color);
		match[1] = 255-match[1];
		match[2] = 255-match[2];
		match[3] = 255-match[3];
		let resultColor = 'rgb(' + match[1] + ',' + match[2] + ',' + match[3] + ')';
		result.style.color = resultColor;

		match = matchRGBA.exec(getComputedStyle(result).backgroundColor);
		if (match == null) {
			match = matchRGB.exec(getComputedStyle(result).backgroundColor);
			match[1] = 255-match[1];
			match[2] = 255-match[2];
			match[3] = 255-match[3];
			resultColor = 'rgb(' + match[1] + ',' + match[2] + ',' + match[3] + ',' + '1' + ')';
			result.style.backgroundColor = resultColor;
		}
		else {
			match[1] = 255-match[1];
			match[2] = 255-match[2];
			match[3] = 255-match[3];
			match[4] = 0;////сомнительное решение, если заменить '0' на  '1-match[4]' то получится интереснее))
			resultColor = 'rgba(' + match[1] + ',' + match[2] + ',' + match[3] + ',' + match[4] + ')';
			result.style.backgroundColor = resultColor;
		}

	});
}
