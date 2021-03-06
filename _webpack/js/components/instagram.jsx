import React, { Component } from 'react';
import axios from 'axios';

class Instagram extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  componentWillMount() {
    axios
      .get(
        'https://api.instagram.com/v1/users/self/media/recent?access_token=1116678100.6291bc8.b212a52780a3477bb68f956af87b7c56&client_id=6291bc814f1d4ed88014e701c86ff7b3'
      )
      .then(
        response => {
          this.setState({ images: response.data.data });
        },
        () => {
          // console.log('Instagram error', error);
        }
      );
  }

  render() {
    return (
      <span>
        {this.state.images.slice(0, 5).map(image => (
          <a key={image.id} href={image.link}>
            <img src={image.images.standard_resolution.url} alt="Yellow Instagram" />
          </a>
        ))}
      </span>
    );
  }
}

export default Instagram;
