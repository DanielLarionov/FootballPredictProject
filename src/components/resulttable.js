import React from 'react';
import * as ReactBootstrap from "react-bootstrap";
//Family table component gets information from search and puts in table from
const resTable = () => {
    var getFixtures=[];
    var temp;
    var i;
    console.log("cheese");
    fetch('http://localhost:3000/', {
        method: 'get',
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(fixtures => {
          //If successfull
              //Get information and put in array
            if(fixtures.length){
                for (i = 0; i < fixtures.length; i++){
                    temp={
                        homeTeam:fixtures[i][0],
                        awayTeam:fixtures[i][1],
                        hwc:fixtures[i][2],
                        awc:fixtures[i][3],
                        dc:fixtures[i][4],
                        res:fixtures[i][5]
                        };
                    getFixtures.push(temp);
                        }
            }
          //this.setState({fixtures:fixturesRet})
    })
    console.log(getFixtures)
    //Mapping function for the table
    const renderFixtures = (fixtures,index)=>{
        return(
            <tr key={index}>
                <td>{fixtures.homeTeam}</td>
                <td>{fixtures.awayTeam}</td>
                <td>{fixtures.hwc}</td>
                <td>{fixtures.awc}</td>
                <td>{fixtures.dc}</td>
                <td>{fixtures.res}</td>
            </tr>
            )
        }
    return(
        <div>
        {getFixtures[0]}
        <ReactBootstrap.Table striped bordered hover size="sm" variant="dark">
            <thead>
                <tr>
                <th>Home Team</th>
                <th>Away Team</th>
                <th>Home win chances</th>
                <th>Away win chances</th>
                <th>Draw chances</th>
                <th>Likely result</th>
                </tr>
            </thead>
            <tbody>
            {getFixtures.map(renderFixtures)}
            </tbody>
        </ReactBootstrap.Table>
        </div>
    );
}

export default resTable;