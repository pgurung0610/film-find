import React from "react";
import "./Navigation.css";
import Selection from "./Selection";
import Slider from "./Slider.js"
import Button from "./Button";

class Navigation extends React.Component {
    componentDidMount() {
        const genresURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`

        fetch(genresURL)
            .then(response => response.json())
            .then(data => {
                data.genres.unshift({id: 0, name: "All"});
                this.props.setGenres( data.genres );
            })
            .catch(error => console.log(error));
    }
    
    render() {
        const { genre, genres, onGenreChange, sort_by_category, sort_by_categories, onSortByChange, onChange, year, rating, runtime } = this.props;
        return (
            <section className="navigation">
                <Selection
                    label='Genre'
                    selectedOption={genre}
                    options={genres}
                    onSelection={onGenreChange} 
                />

                <Slider data={year} onChange={onChange} />
                <Slider data={rating} onChange={onChange} />
                <Slider data={runtime} onChange={onChange} />

                <Selection
                    label='Sort By'
                    selectedOption={sort_by_category}
                    options={sort_by_categories}
                    onSelection={onSortByChange} 
                />

                <Button onClick={this.props.onSearchButtonClick}>
                    Search
                </Button>

            </section>
        )
    }
}

export default Navigation;