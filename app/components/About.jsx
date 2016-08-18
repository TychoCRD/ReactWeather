var React = require('react');
//
// var About = React.createClass({
//   render: function(){
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p className="text-justify">This is a simple single-page web app built on the JavaScript library React as a part of Andrew Mead's <i>The Complete Web App Developer Course</i>. Links for the technologies used and its github repository can be found below. </p>
      <div className="menu-centered">
        <ul className="menu">
          <li><a href="https://github.com/TychoCRD/ReactWeather" target="_blank">Github</a></li>
          <li><a href="https://www.udemy.com/the-complete-react-web-app-developer-course" target="_blank">Udemy Course</a></li>
        </ul>
        <ul className="menu">
          <li><a href="https://facebook.github.io/react/" target="_blank">React</a></li>
          <li><a href="http://foundation.zurb.com/" target="_blank">Foundation</a></li>
          <li><a href="https://openweathermap.org" target="_blank">Open Weather Map</a></li>
        </ul>
      </div>
    </div>
  );
};

module.exports = About;
