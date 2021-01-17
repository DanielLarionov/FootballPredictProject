import React,{Component} from 'react';
import Navigation from './components/nav';
import Footer from './components/footer';
import Games from './components/games';
import About from './components/about';

import './App.css';

class App extends Component {
    constructor(){
      super();
      this.state={
        gfixtures:[],
        gpastfixtures:[]
      }
    }
    componentDidMount(){
      this.changeLeague("England");
    }
    changeLeague=(league)=>{
      var getFixtures=[];
      var getPastFixtures=[];
      var i;
      var temp;
      fetch('https://limitless-journey-52226.herokuapp.com/getFixtures',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
            league: league,
            typetable: "N"
        })
      })
      .then(response => response.json())
      .then(fixtures => {
            //If successfull
                //Get information and put in array
              if(fixtures.length){
                  for (i = 0; i < fixtures.length; i++){
                      temp={
                          Date:fixtures[i][0],
                          homeTeam:fixtures[i][1],
                          awayTeam:fixtures[i][2],
                          hwc:fixtures[i][3],
                          awc:fixtures[i][4],
                          dc:fixtures[i][5],
                          res:fixtures[i][6]
                          };
                          getFixtures.push(temp);
                          }
              }
              this.setState({gfixtures:getFixtures})
      })
      fetch('https://limitless-journey-52226.herokuapp.com/getFixtures',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
            league: league,
            typetable: "P"
        })
      })
      .then(response => response.json())
      .then(fixtures => {
            //If successfull
                //Get information and put in array
              if(fixtures.length){
                  for (i = 0; i < fixtures.length; i++){
                      temp={
                          Date:fixtures[i][0],
                          homeTeam:fixtures[i][1],
                          awayTeam:fixtures[i][2],
                          tp:fixtures[i][3],
                          tpr:fixtures[i][4],
                          ar:fixtures[i][5],
                          pc:fixtures[i][6]
                          };
                          getPastFixtures.push(temp);
                          }
              }
              this.setState({gpastfixtures:getPastFixtures})
      })
    }
    onLeagueChange=(league)=>{
      this.changeLeague(league);
    }
  render(){
    return (
      <div className="App">
        <Navigation/>
        <Games getFixtures={this.state.gfixtures} getPastFixtures={this.state.gpastfixtures} onLeagueChange={this.onLeagueChange} />
        <About/>
        <Footer/>
      </div>
      )
  }
}

export default App;
