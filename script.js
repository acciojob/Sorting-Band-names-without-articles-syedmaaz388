let bandNames = ["The Beatles", "Led Zeppelin", "Pink Floyd", "The Who", "Queen"];

		function sortBandNames(bandNames) {
			const articles = ['a', 'an', 'the'];
			return bandNames.sort((a, b) => {
				const aName = a.split(' ').filter(name => !articles.includes(name.toLowerCase())).join(' ');
				const bName = b.split(' ').filter(name => !articles.includes(name.toLowerCase())).join(' ');
				return aName.localeCompare(bName);
			});
		}

		const sortedBandNames = sortBandNames(bandNames);
		const bandList = document.getElementById('band');
		sortedBandNames.forEach(name => {
			const listItem = document.createElement('li');
			listItem.innerText = name;
			bandList.appendChild(listItem);
		});