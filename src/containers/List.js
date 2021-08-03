// import logo from './logo.svg';
import React, { Component } from 'react';
import Card from '.././components/Card/Card';
// import fetch from "isomorphic-fetch"
class List extends Component {
  constructor(){
    super()
    this.state = {
      data: [],
      loading: true,
    }
  }

  async componentDidMount () {
    // const movies = await fetch('./Media/data.json')
    let items = await require('./Media/data');
    var mov = items;
    
    // console.log(mov)

    // const moviesJSON = await movies.json()
    if(mov){
      this.setState({
        data:mov,
        loading:false,
      })
    console.log(`Movie Data:`,this.state.data)
    }
  }

  render() {
    // return <Card/>;
    const {data, loading} = this.state;
    if (loading) {
      return <div>Loading...</div>
    }

    return data.map(movie => <Card key = { movie.id } movie = {movie} />)
  }
}

export default List;
