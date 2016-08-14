var React = require('react');


var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var city = this.refs.city.value;
    if(typeof city === 'string' && city.length > 0){
      this.refs.city.value = '';
      this.props.onNewCity(city);
    }
  },
  render: function(){
    return (
      <div>

        <form onSubmit={this.onFormSubmit}>
          <div>
          <input type="text" ref="city" placeholder="Enter city name"/>
          </div>
          <div>
          <button>Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
