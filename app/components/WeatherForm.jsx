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
          <input type="search" ref="city" placeholder="Search weather by city"/>
          </div>
          <div>
          <button className="button hollow expanded">Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
