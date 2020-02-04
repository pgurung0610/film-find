import React from "react";
import "./Main.css"
import Navigation from "./navigation/Navigation";
import Movies from "./movies/Movies";

class Main extends React.Component {
  state = {
    movies: [],
    total_pages: 1,
    page: 1,
    moviesUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=&primary_release_date.gte=1990-01-01&primary_release_date.lte=2020-12-31&vote_average.gte=8&vote_average.lte=10&with_runtime.gte=60&with_runtime.lte=240&page=1`,
    genre: "All",
    genres: [],
    sort_by_category: 'Popularity',
    sort_by_categories: [
        {id: 0, name: 'Popularity', value: 'popularity'},
        {id: 1, name: 'Release Date', value: 'primary_release_date'},
        {id: 2, name: 'Title', value: 'original_title'},
        {id: 3, name: 'Rating', value: 'vote_average'}],
    sort_by_ordering: 'desc',
    year: {
      label: "year",
      min: 1950,
      max: new Date().getFullYear(),
      step: 1,
      value: { min: new Date().getFullYear() - 30, max: new Date().getFullYear() }
    },
    rating: {
      label: "rating",
      min: 0,
      max: 10,
      step: 1,
      value: { min: 8, max: 10 }
    },
    runtime: {
      label: "runtime",
      min: 0,
      max: 300,
      step: 15,
      value: { min: 60, max: 240 }
    }
}

componentDidMount() {
  this.fetchMovies(this.state.moviesUrl);
}

UNSAFE_componentWillUpdate(nextProps, nextState) {
  if (this.state.moviesUrl !== nextState.moviesUrl) {
    this.fetchMovies(nextState.moviesUrl);
  }
  if (this.state.page !== nextState.page) {
    this.generateUrl();
  }
}

onPageIncrease = () => {
  const { page, total_pages } = this.state
  const nextPage = page + 1;
  if (nextPage <= total_pages) {
    this.setState({ page: nextPage })
  }
}

onPageDecrease = () => {
  const nextPage = this.state.page - 1;
  if ( nextPage > 0 ) {
    this.setState({ page: nextPage })
  }
}

onGenreChange = event => {
  this.setState({ genre: event.target.value });
}

onSortByChange = event => {
  this.setState({ sort_by_category: event.target.value });
}

setGenres = genres => {
  this.setState({ genres });
}

onChange = data => {
    this.setState({
        [data.type]: {
            ...this.state[data.type],
            value: data.value
        }
    })
}

fetchMovies = (url) => {
  fetch(url)
    .then(response => response.json())
    .then(data => this.storeMovies(data))
    .catch(error => console.log(error));
}

storeMovies = data => {
  const movies = data.results.map( result => {
    const  { vote_count, id, genre_ids, poster_path, title, vote_average, release_date } = result;
    return { vote_count, id, genre_ids, poster_path, title, vote_average, release_date };
  });

  this.setState({ movies, total_pages: data.total_pages });
}

generateUrl = () => {
  const {genres, sort_by_categories, sort_by_ordering, year, rating, runtime, page } = this.state;

  let genreId;
  if(this.state.genre === "All") {
    genreId = "";
  }
  else {
    const selectedGenre = genres.find( genre => genre.name === this.state.genre);
    genreId = selectedGenre.id;
  }

  const sort_by_obj = sort_by_categories.find( category => category.name === this.state.sort_by_category);
  const sort_by = sort_by_obj.value + "." + sort_by_ordering;

  const moviesUrl = `https://api.themoviedb.org/3/discover/movie?` +
    `api_key=${process.env.REACT_APP_TMDB_API_KEY}&` +
    `language=en-US&` +
    `sort_by=${sort_by}&` +
    `with_genres=${genreId}&` +
    `primary_release_date.gte=${year.value.min}-01-01&` +
    `primary_release_date.lte=${year.value.max}-12-31&` +
    `vote_average.gte=${rating.value.min}&` +
    `vote_average.lte=${rating.value.max}&` +
    `with_runtime.gte=${runtime.value.min}&` +
    `with_runtime.lte=${runtime.value.max}&` +
    `page=${page}`;

  this.setState({ moviesUrl });
}

onSearchButtonClick = () => {
  this.setState({page: 1});
  this.generateUrl();
}

  render() {
    return (
      <section className="main">
          <Navigation
            onChange={this.onChange}
            onGenreChange={this.onGenreChange}
            setGenres={this.setGenres}
            onSortByChange={this.onSortByChange}
            onSearchButtonClick={this.onSearchButtonClick}
            {...this.state}
          />

          <Movies
            movies={this.state.movies}
            page={this.state.page}
            onPageIncrease={this.onPageIncrease}
            onPageDecrease={this.onPageDecrease}
          />
      </section>
    )
  }
}

export default Main;