import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Corpo from './components/Corpo/Corpo'
import Home from './components/Home/Home'



export default class App extends React.Component {




  render() {
    return (
      <div>
        <div>
          <Header/>
        </div>
        <div>
          <Corpo/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    )
  }
}
