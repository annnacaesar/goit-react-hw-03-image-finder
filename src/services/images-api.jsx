function fetchImages(name, page) {
	return (
				fetch(
				`https://pixabay.com/api/?q=${name}&page=${page}&key=27616591-ea38afb15630e129e17ab0ac4&image_type=photo&orientation=horizontal&per_page=12`
			)
				.then(res => {
					if (res.ok) {
						return res.json()
					}

					return Promise.reject(
						new Error(`Немає картинки з ім'ям '${name}'`)
					)

				})
)
}


export default fetchImages;