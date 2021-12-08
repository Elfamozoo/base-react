import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { TmdbService } from "../../services/TmdbService";

export class HomePage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      listMovies: [],
      movieListByGenre: {},
      genreList: [],
      loaded: false,
    };
  }
  componentDidMount = async () => {
    let movieListByGenre: { [k: string]: any } = {};
    let genreList: any[] = [];
    TmdbService.fetchlistGenres().then((res) => {
      genreList = res.genres.map( (res: any) => res);
      res.genres.map((genre: { id: string; name: string }) => {
        movieListByGenre[`${genre.id}`] = [];
        TmdbService.fetchMoviesListByGenre(genre.id, genre.name).then((res) => {
          movieListByGenre[`${genre.id}`] = res.results;
          console.log(movieListByGenre[`${genre.id}`]);
        });
      });
    });
    this.setState({
      movieListByGenre: movieListByGenre,
      genreList: genreList,
      loaded: true,
    });
  };
  render() {
    const { loaded } = this.state;
    if (!loaded) {
      return <CircularProgress />;
    }
    return <div></div>;
  }
}
