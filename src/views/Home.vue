<template>
  <div class="home">
    <div class="container w-xxl relative m-auto">

      <div class="grid grid-cols-4 gap-4 mb-3">
        <select class="h-12 p-4" v-model="genre" @change="getMovies">
          <option v-for="(genre, index) in genres" :key="index" :value="genre.id">{{ genre.name }}</option>
        </select>
        <select class="h-12 p-4" v-model="sortBy" @change="getMovies">
          <option value></option>
          <option value="popularity.asc">popularity.asc</option>
          <option value="popularity.desc">popularity.desc</option>
          <option value="release_date.asc">release_date.asc</option>
          <option value="release_date.desc">release_date.desc</option>
          <option value="revenue.asc">revenue.asc</option>
          <option value="revenue.desc">revenue.desc</option>
          <option value="primary_release_date.asc">primary_release_date.asc</option>
          <option value="primary_release_date.desc">primary_release_date.desc</option>
          <option value="original_title.asc">original_title.asc</option>
          <option value="original_title.desc">original_title.desc</option>
          <option value="vote_average.asc">vote_average.asc</option>
          <option value="vote_average.desc">vote_average.desc</option>
          <option value="vote_count.asc">vote_count.asc</option>
          <option value="vote_count.desc">vote_count.desc</option>
        </select>
        <input class="h-12 p-4" type="text" placeholder="Date from: 2016-01-15" v-model="dateFrom" />
        <input class="h-12 p-4" type="text" placeholder="Date to: 2016-04-25" v-model="dateTo" />
      </div>

      <div class="grid grid-cols-6 gap-4">
        <div v-for="(movie, index) in movies" :key="index" class="rounded-sm overflow-hidden">
          <figure class="bg-white relative pb-80 mb-2">
            <img
              :src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + movie.poster_path"
              :alt="movie.original_title"
              class="absolute top-0 right-0 bottom-0 left-0 w-full h-full"
            >
          </figure>
          <div class="flex">
            <span class="flex-1 text-white text-3">{{ movie.release_date }}</span>
            <span class="text-white text-3">{{ movie.vote_average }}</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      genre: '',
      sortBy: 'vote_average.desc',
      dateFrom: '',
      dateTo: '',
      genres: [],
      movies: [],
      api: 'https://api.themoviedb.org/3',
      apiKey: '?api_key=7b764a94ba025431ac8cc8398a69b025'
    }
  },
  methods: {
    getGenres () {
      const genreEndPoint = '/genre/movie/list'
      axios
        .get(this.api + genreEndPoint + this.apiKey)
        .then(response => {
          const results = response.data.genres
          if (results.length > 1) this.genres = results
        })
    },
    getMovies () {
      const discover = '/discover/movie/'
      axios
        .get(this.api + discover + this.apiKey + '&with_genres=' + this.genre + '&sort_by=' + this.sortBy + '&region=US&include_video=true&primary_release_date.gte=2018-01-01&primary_release_date.lte=2020-12-31&vote_average.lte=5&vote_average.gte=0&vote_count.lte=100&vote_count.gte=0&page=1')
        .then(response => {
          const results = response.data.results
          if (results.length > 1) this.movies = results
          console.log(results)
        })
    }
  },
  mounted () {
    this.getGenres()
    this.getMovies()
    this.$store.dispatch('user/read')
  }

}
</script>
