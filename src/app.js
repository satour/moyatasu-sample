import React  from 'react';
import Header from './components/Block/Header.js';
import Menu   from './components/Block/Menu.js';
import Feed   from './components/Block/Feed.js';
import Footer from './components/Block/Footer.js';

class App extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        <Menu/>
        <Feed/>
        <Footer/>
      </div>
    );
  }
}

/*
  App 全体の状態としては ["logged-in", "not logged-in"] の２つの状態をとるかと思われる。
  上記の状態の二値に応じて、各 Component は 挙動を変える。
  ただし、ひとつの状態しか取らない Static な Component はその限りではない。
*/

export default App;