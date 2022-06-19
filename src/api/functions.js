// import { ImgConfigs } from '../api/config'

const imgUrl = 'https://image.tmdb.org/t/p/'
const posterSize = 'original'
const backdropSize = 'original'

const genres = {
  12: "Adventure",
  14: "Fantasy",
  16: "Animation",
  18: "Drama",
  27: "Horror",
  28: "Action",
  35: "Comedy",
  36: "History",
  37: "Western",
  53: "Thriller",
  80: "Crime",
  99: "Documentary",
  878: "Science Fiction",
  9648: "Mystery",
  10402: "Music",
  10749: "Romance",
  10751: "Family",
  10759: "Action & Adventure",
  10762: "Kids",
  10763: "News",
  10764: "Reality",
  10765: "Sci-Fi & Fantasy",
  10766: "Soap",
  10767: "Talk",
  10768: "War & Politics",
  10752: "War",
  10770: "TV Movie",
  
}

function getTrendingItems() {
  const url = 'http://localhost:8000/movie_api?method=/trending/movie,tv/week'

  return (
    fetch(url)
    .then(res => res.json())
    .then(data => {

      if (data.status_message) {
        throw new Error(data.status_message)
      } else {
        return data.results.slice(0, 5).map(item => ({
          id: item.id,
          title: item.title || item.name ,
          media: item.media_type,
          backdrop: `${imgUrl}${backdropSize}${item.backdrop_path}`,
          poster: `${imgUrl}${posterSize}${item.poster_path}`,
          overview: item.overview,
          score: item.vote_average,
          genres: item.genre_ids.map(id => genres[id])
        }))
      }
      
    })
    .catch((err => {
      console.log(err)
      return null
    }))
  )
}


function getPopularItems(media='movie') {
  const url = `http://localhost:8000/movie_api?method=/${media}/popular`

  return (
    fetch(url)
    .then(res => res.json())
    .then(data => {

      if (data.status_message) {
        throw new Error(data.status_message)
      } else {
        return data.results.slice(0, 5).map(item => ({
          id: item.id,
          title: item.title || item.name,
          poster: `${imgUrl}${posterSize}${item.poster_path}`,
          score: item.vote_average,
          media: media,
        }))
      }
      
    })
    .catch((err => {
      console.log(err)
      return null
    }))
  )
}


function getTopRatedItems(media='movie') {
  const url = `http://localhost:8000/movie_api?method=/${media}/top_rated`


  return (
    fetch(url)
    .then(res => res.json())
    .then(data => {

      if (data.status_message) {
        throw new Error(data.status_message)
      } else {
        return data.results.slice(0, 5).map(item => ({
          id: item.id,
          title: item.title || item.name,
          poster: `${imgUrl}${posterSize}${item.poster_path}`,
          score: item.vote_average,
          media: media,
        }))
      }
      
    })
    .catch((err => {
      console.log(err)
      return null
    }))
  )
}


function getDetail(media='movie', id) {
  const url = `http://localhost:8000/movie_api?method=/${media}/${id}`

  return (
    fetch(url)
    .then(res => res.json())
    .then(data => {

      if (data.status_message) {
        throw new Error(data.status_message)
      } else {
        return {
          title: data.title || data.name,
          // id: data.id,
          // poster: `${imgUrl}${posterSize}${data.poster_path}`,
          // score: data.vote_average,
          // ...data
        }
      }
    })
    .catch((err => {
      console.log(err)
      return null
    }))
  )
}


export { getTrendingItems, getPopularItems, getTopRatedItems, getDetail }