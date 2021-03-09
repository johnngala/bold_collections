import './App.css';
import { BrowserRouter as Router ,Switch ,Route} from  'react-router-dom'

//import Home from './containers/Home'
import Navbar from './components/Navbar'
import About from './containers/About'
import Contact from './containers/Contact'
import Listing from './containers/Listings'
import ListingDetail from './containers/ListingDetail'
//import Layout from './hoc/Layout'
import NotFound from './components/NotFound'
import Landing from './containers/Landing'
import Footer from './containers/Footer'
import SideDrawer from './components/SideDrawer/SideDrawer'
import BackDrop from './components/BackDrop/BackDrop'

import {Provider} from 'react-redux'
import store from './store'
import { Component } from 'react';

class App extends Component {
  state = {
    sideDrawerOpen :false
  }

drawerToggleClickHandler = () => {
  this.setState((prevState) => {
    return { sideDrawerOpen : !prevState.sideDrawerOpen}
  })
}

backDropClickHandler = () => {
  this.setState({sideDrawerOpen : false})
}
  render(){
    let backDrop;

    if(this.state.sideDrawerOpen){
      backDrop = <BackDrop click = {this.backDropClickHandler}/>
    }

    return(
    <Provider store = {store}>
      <Router>
        {/* <Layout> */}
        <Navbar drawerClickHandler = {this.drawerToggleClickHandler}/>
          <SideDrawer show = {this.state.sideDrawerOpen}/>
          {backDrop}
          <Switch>
            {/* <Route exact path = '/' component= {Home} /> */}
            <Route exact path = '/' component= {Landing} />
            <Route  path = '/about' component= {About} />
            <Route  path = '/contact' component= {Contact} />
            <Route  exact path = '/listings/:id' component= {ListingDetail} />
            <Route  path = '/listings' component= {Listing} />
            <Route  component = {NotFound} />
          </Switch>
        {/* </Layout> */}
      </Router>
      <Footer />
    </Provider>
  )
}
}

export default App;
