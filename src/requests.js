/* eslint-disable no-template-curly-in-string */

const requests ={

    fetchTrending: '/trending/all/week?api_key=f7b5de4cead73248cda6038258344fe5&language=en-US',
    fetchNetflixOriginals: '/discover/tv?api_key=f7b5de4cead73248cda6038258344fe5&with_networks213',
    fetchTopRated: '/movie/top_rated?api_key=f7b5de4cead73248cda6038258344fe5&language=en-US',
    fetchActionMovies: '/discover/movie?api_key=f7b5de4cead73248cda6038258344fe5&with_genres=28',
    fetchComedyMovies: '/discover/movie?api_key=f7b5de4cead73248cda6038258344fe5&with_genres=35',
    fetchHorrorMovies: '/discover/movie?api_key=f7b5de4cead73248cda6038258344fe5&with_genres=27',
    fetchRomanceMovies: '/discover/movie?api_key=f7b5de4cead73248cda6038258344fe5&with_genres=10749',
    fetchDocumentaries: '/discover/movie?api_key=f7b5de4cead73248cda6038258344fe5&with_genres=99',


}

export default requests;