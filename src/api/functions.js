// import { ImgConfigs } from '@/api/config'
import NoImageAvailable from "@/images/no-image/no-image-available.jpg";

const imgUrl = "https://image.tmdb.org/t/p/";
const posterSize = "original";
const backdropSize = "original";
const profileSize = "original";

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
};

function getTrendingItems() {
  const url = "/.netlify/functions/getTrend";
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.status_message) {
        throw new Error(data.status_message);
      } else {
        return data.results.map(item => ({
          id: item.id,
          title: item.title || item.name,
          media: item.media_type,
          backdrop: `${imgUrl}${backdropSize}${item.backdrop_path}`,
          poster: `${imgUrl}${posterSize}${item.poster_path}`,
          overview: item.overview,
          score: item.vote_average,
          genres: item.genre_ids.map(id => genres[id]),
        }));
      }
    })
    .catch(err => {
      console.log(err);
      return null;
    });
}

function getPopularItems(media = "movie") {
  const url = `/.netlify/functions/getPopular?media=${media}`;
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.status_message) {
        throw new Error(data.status_message);
      } else {
        return data.results.map(item => ({
          id: item.id,
          title: item.title || item.name,
          poster: `${imgUrl}${posterSize}${item.poster_path}`,
          score: item.vote_average,
          media: media,
          date: item.release_date || item.first_air_date,
          genres: item.genre_ids.map(id => genres[id]),
        }));
      }
    })
    .catch(err => {
      console.log(err);
      return null;
    });
}

function getTopRatedItems(media = "movie") {
  const url = `/.netlify/functions/getTopRated?media=${media}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.status_message) {
        throw new Error(data.status_message);
      } else {
        return data.results.map(item => ({
          id: item.id,
          title: item.title || item.name,
          poster: `${imgUrl}${posterSize}${item.poster_path}`,
          score: item.vote_average,
          media: media,
          date: item.release_date || item.first_air_date,
          genres: item.genre_ids.map(id => genres[id]),
        }));
      }
    })
    .catch(err => {
      console.log(err);
      return null;
    });
}

function getDetail(media = "movie", id) {
  const url = `/.netlify/functions/getDetail?media=${media}&id=${id}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.status_message) {
        throw new Error(data.status_message);
      } else {
        if (media === "movie") {
          return {
            id: data.id,
            title: data.title,
            poster: `${imgUrl}${posterSize}${data.poster_path}`,
            backdrop: `${imgUrl}${backdropSize}${data.backdrop_path}`,
            genres: data.genres.map(genre => genre.name),
            overview: data.overview,
            scoreAverage: data.vote_average,
            scoreCount: data.vote_count,
            runtime: data.runtime,
            tagline: data.tagline,
            release: data.release_date.split("-")[0],
            media,
          };
        } else {
          return {
            id: data.id,
            title: data.name,
            poster: `${imgUrl}${posterSize}${data.poster_path}`,
            backdrop: `${imgUrl}${backdropSize}${data.backdrop_path}`,
            genres: data.genres.map(genre => genre.name),
            overview: data.overview,
            scoreAverage: data.vote_average,
            scoreCount: data.vote_count,
            runtime: data.episode_run_time,
            tagline: data.tagline,
            first_air: data.first_air_date.split("-")[0],
            last_air: data.last_air_date.split("-")[0],
            seasons: data.seasons,
            seasons_num: data.number_of_seasons,
            episodes_num: data.number_of_episodes,
            in_production: data.in_production,
            media,
          };
        }
      }
    })
    .catch(err => {
      console.log(err);
      return null;
    });
}

function searchItems(searchTerm) {
  const url = `/.netlify/functions/search?searchTerm=${searchTerm}`;

  if (!searchTerm) {
    const promise = new Promise(resolve => resolve(null));
    return promise;
  }

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.status_message) {
        throw new Error(data.status_message);
      } else {
        return data.results.map(item => ({
          id: item.id,
          media: item.media_type,
          title: item.title || item.name,
          date: item.release_date || item.first_air_date,
          genres: item.genre_ids
            ? item.genre_ids.map(id => genres[id])
            : undefined,
          poster:
            (item.poster_path && `${imgUrl}${posterSize}${item.poster_path}`) ||
            (item.profile_path &&
              `${imgUrl}${profileSize}${item.profile_path}`) ||
            NoImageAvailable,
          release: (item.release_date || item.first_air_date || "").split(
            "-"
          )[0],
          known_for: item.known_for_department,
          score: item.vote_average || item.popularity,
        }));
      }
    })
    .catch(err => {
      console.log(err);
      return null;
    });
}

function getCast(media = "movie", id) {
  const url = `/.netlify/functions/getCast?media=${media}&id=${id}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.status_message) {
        throw new Error(data.status_message);
      } else {
        return data.cast.map(item => ({
          id: item.id,
          name: item.name,
          profile: `${imgUrl}${profileSize}${item.profile_path}`,
          character: item.character,
          order: item.order,
        }));
      }
    })
    .catch(err => {
      console.log(err);
      return null;
    });
}

export {
  getTrendingItems,
  getPopularItems,
  getTopRatedItems,
  getDetail,
  searchItems,
  getCast,
};
