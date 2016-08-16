var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function(){
//     var {temp, city} = this.props;
//     if(city.length > 0){
//     var message = 'It\'s ' + temp + ' in ' + city + '.';
//   } else {
//     message = '';
//   }
//     return (
//       <h3>{message}</h3>
//     );
//   }
// });

// var WeatherMessage = (props) => {
//   var {temp, city} = props;
//   return (
//     <h3>It's {temp} in {city}.</h3>
//   );
// };

var WeatherMessage = ({temp, city}) => {
  return (
    <h3 className="text-center">It's {temp} in {city}.</h3>
  );
};

module.exports = WeatherMessage;
