function validAbbreviation(str, abbr) {
	let i = j = 0

	while (i < str.length && j < abbr.length) {
		if (Number.isInteger(parseInt(abbr[j]))) {
			if (abbr[j] === '0') return false
			let steps = 0
			while (j < abbr.length && Number.isInteger(parseInt(abbr[j]))) {
				steps = steps * 10 + parseInt(abbr[j])
				j++
			}
			i += steps
		} else if (str[i] !== abbr[j]) {
			return false
		} else {
			j++
			i++
		}
	}

	return i === str.length && j === abbr.length
}
