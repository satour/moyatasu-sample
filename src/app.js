import React  from 'react';
import Header from './components/Block/header.js';
import Feed   from './components/Block/Feed.js';
import Footer from './components/Block/Footer.js';

class App extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        <Feed/>
        <Footer/>
      </div>
    );
  }
}

export default App;