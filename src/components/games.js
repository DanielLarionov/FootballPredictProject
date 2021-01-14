import React from 'react';
import * as ReactBootstrap from "react-bootstrap";
import './styles.css'
import Eng from './logos/England.png'
import Ger from './logos/Germany.png'
import Frc from './logos/France.png'
import Itl from './logos/Italy.png'
import Spn from './logos/Spain.png'

const games = ({getFixtures,getPastFixtures,onLeagueChange}) =>  {
    //Mapping function for the table
    const renderFixtures = (fixtures,index)=>{
        return(
            <tr key={index}>
                <td>{fixtures.Date}</td>
                <td>{fixtures.homeTeam}</td>
                <td>{fixtures.awayTeam}</td>
                <td>{fixtures.hwc}</td>
                <td>{fixtures.awc}</td>
                <td>{fixtures.dc}</td>
                <td>{fixtures.res}</td>
            </tr>
            )
        }
        try {
            if(!getFixtures.length){
                document.getElementById("error1").style.visibility= "visible";
                document.getElementById("error1").innerHTML = `No available fixtures currently`;
        
            }
            else{
                document.getElementById("error1").style.visibility= "hidden";
            }
          }
          catch(err) {
            console.log("Something went wrong" + err)
        }

        const renderPastFixtures = (fixtures,index)=>{
            //if(fixtures.lenght)
            if(fixtures.pc){
                return(      
                    <tr style={{backgroundColor: "#8CC152"}} key={index}>
                        <td>{fixtures.Date}</td>
                        <td>{fixtures.homeTeam}</td>
                        <td>{fixtures.awayTeam}</td>
                        <td>{fixtures.tp}</td>
                        <td>{fixtures.tpr}</td>
                        <td >{fixtures.ar}</td>
                    </tr>
                    )
            }
            else{
                return(      
                    <tr style={{backgroundColor: "#E9573F"}} key={index}>
                        <td >{fixtures.Date}</td>
                        <td>{fixtures.homeTeam}</td>
                        <td>{fixtures.awayTeam}</td>
                        <td>{fixtures.tp}</td>
                        <td>{fixtures.tpr}</td>
                        <td >{fixtures.ar}</td>
                    </tr>
                    )
            }
            }
            try {
                if(!getPastFixtures.length){
                    document.getElementById("error2").style.visibility= "visible";
                    document.getElementById("error2").innerHTML = `No available past fixtures currently`;
            
                }
                else{
                    document.getElementById("error2").style.visibility= "hidden";
                }
            }
            catch(err) {
                console.log("Something went wrong" + err)
            }
    return(
    <section className="page-section portfolio" id="games">
            <div className="container">
                <br></br><br></br><br></br>
                <div>
                <button className="myButton" onClick={()=>onLeagueChange('England')}><img alt='eng' src={Eng}/><br></br>England</button>
                <button className="myButton" onClick={()=>onLeagueChange('Germany')}><img alt='ger' src={Ger}/><br></br>Germany</button>
                <button className="myButton" onClick={()=>onLeagueChange('Spain')}><img alt='esp' src={Spn}/><br></br>Spain</button>
                <button className="myButton" onClick={()=>onLeagueChange('France')}><img alt='frc' src={Frc}/><br></br>France</button>
                <button className="myButton" onClick={()=>onLeagueChange('Italy')}><img alt='itl' src={Itl}/><br></br>Italy</button>
                </div>
                <br></br>
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Todays predictions</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div>
                <ReactBootstrap.Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>Date</th>
                        <th>Home Team</th>
                        <th>Away Team</th>
                        <th>Home win chances</th>
                        <th>Away win chances</th>
                        <th>Draw chances</th>
                        <th>Most likely result</th>
                        </tr>
                    </thead>
                    <tbody>
                    {getFixtures.map(renderFixtures)}
                    </tbody>
                </ReactBootstrap.Table>
                <p id='error1' style={{visibility:"hidden"}} className="f3 link dim red db"></p>
                </div>
                <br></br>
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Past predictions</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div>
                <ReactBootstrap.Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>Date</th>
                        <th>Home Team</th>
                        <th>Away Team</th>
                        <th>Game Prediction</th>
                        <th>Result Prediction</th>
                        <th>Actual result</th>
                        </tr>
                    </thead>
                    <tbody>
                    {getPastFixtures.map(renderPastFixtures)}
                    </tbody>
                </ReactBootstrap.Table>
                </div>
                <p id='error2' style={{visibility:"hidden"}}></p>
            </div>
        </section>
    );
}
export default games;