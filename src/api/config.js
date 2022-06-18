function ImgConfigs() {
  const url = 'http://localhost:8000/movie_api?method=/configuration'

  return fetch(url)
    .then(res => res.json())
    .then(data => ({
      base_url: data.images.secure_base_url,
      poster_size: data.images.poster_sizes.pop(),
      backdrop_size: data.images.backdrop_sizes.pop(),
    }))
}


export { ImgConfigs }