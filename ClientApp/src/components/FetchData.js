import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
              <tr key={forecast}>
                  <td>{forecast.coursename}</td>
                  <td>{forecast.coursedomain}</td>
                  <td>{forecast.courserating}</td>
                  <td>{forecast.courseurl}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading..</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tabelLabel" >List of users</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
       /*const response = await fetch('Course');*/
      const response = await fetch('Course/getbydomain/Backend');
      /*const response = await fetch('Course/getbydomain/Frontend');*/

      const data = await response.json();
      console.log(data)
    this.setState({ forecasts: data, loading: false });
  }
}
