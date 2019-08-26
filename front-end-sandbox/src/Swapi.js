import React from 'react';

// SWAPIから情報を取得するためのAPIを持っているComponent
class Swapi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
    }
  }

  componentDidMount(){
    fetch(process.env.REACT_APP_SWAPI_API_KEY, {
      mode: 'cors',
      method: 'GET',
    })
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          name: result.name,
        });
      },
      (error) => {
        this.setState({
          name: null,
        })
      }
    )
  }

  render() {
    return (
      <div>{this.state.name}</div>
    )
  }
}

export default Swapi;
