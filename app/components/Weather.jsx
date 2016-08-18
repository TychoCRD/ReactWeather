var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    };
  },
  handleNewCity: function(city){
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });
    openWeatherMap.getTemp(city).then(function(temp){
      that.setState({
        city: city,
        temp: temp,
        isLoading: false

      });
    }, function(e){
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });

    });

  },
  render: function(){
    var {isLoading, city, temp, errorMessage} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className="text-cente">Fetching weather...</h3>;
      } else if(city && temp) {
        return <WeatherMessage city={city} temp={temp}/>;
      }
    }

    function renderError(){
      if(typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
      <h1 className="text-center page-title">Get Weather</h1>
      <WeatherForm onNewCity={this.handleNewCity}/>
      {renderMessage()}
      {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
