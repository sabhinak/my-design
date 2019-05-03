import React, { Component, Children, useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import SplitGraph from './SplitGraph/SplitGraph';
import WaterSplitGraph from './SplitGraph/Water/WaterSplitGraph';
import FoodSplitGraph from './SplitGraph/Food/FoodSplitGraph';
import ElectricitySplitGraph from './SplitGraph/Electricity/ElectricitySplitGraph';
import EducationSplitGraph from './SplitGraph/Education/EducationSplitGraph';
import EqualitySplitGraph from './SplitGraph/Equality/EqualitySplitGraph';
import HealthSplitGraph from './SplitGraph/Health/HealthSplitGraph';
import {testConfig} from './SplitGraph/splitGraphConfig';
import watericon from './SplitGraph/Water/img/watericon.svg';
import educationicon from './SplitGraph/Education/education.svg';
import electricityicon from './SplitGraph/Electricity/electricity.svg';
import foodicon from './SplitGraph/Food/foodicon.svg';
import healthicon from './SplitGraph/Health/health.svg';
import equalityicon from './SplitGraph/Equality/equalitylogo.svg'

function waterSplitGraph()
{
  return <WaterSplitGraph
      yes={2}
      partially={1}
      no={1}
      idontknow={1}
    />;
}

function foodSplitGraph()
{
  return <FoodSplitGraph
      yes={50}
      partially={20}
      no={30}
      idontknow={40}
    />;
}

function educationSplitGraph()
{
  return <EducationSplitGraph
      yes={50}
      partially={40}
      no={10}
      idontknow={50}
    />;
}
function electricitySplitGraph()
{
  return <ElectricitySplitGraph
      yes={50}
      partially={40}
      no={10}
      idontknow={50}
    />;
}

function healthSplitGraph()
{
  return <HealthSplitGraph
      yes={50}
      partially={40}
      no={10}
      idontknow={50}
    />;
}

function equalitySplitGraph()
{
  return <EqualitySplitGraph
      yes={20}
      partially={30}
      no={30}
      idontknow={50}
    />;
}


const WaterCircle = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 100%;
    background: #CEA682;
`;

const FoodCircle = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 100%;
    background: #C0B01F;
`;
const EducationCircle = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 100%;
    background: #F8A8A8;
`;
const ElectricityCircle = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 100%;
    background: #B2E4F8;
`;

const HealthCircle = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 100%;
    background: beige;
`;


const EqualityCircle = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 100%;
   background: #D091FF;
`;

const CustomLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  text-align: center;

  &.activeLink > div {
    :hover {opacity: 80%};
  }  
`;

const FlexUl = styled.ul`
  list-style:none;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;



class App extends Component {
  render() {
    return <Router>
     <h1>The Survey Report</h1>

      <div className='links'>
        <nav>
          <FlexUl>
            <li> 
              <CustomLink to="/water/" activeClassName='activeLink'>
                <WaterCircle>
                  <img src={watericon} height='80px' width='70px' alt='Water'/>
                </WaterCircle>
                <p>Water</p> 
              </CustomLink>
            </li>
            <li> 
              <CustomLink to="/food/" activeClassName='activeLink'>
                <FoodCircle>
                  <img src={foodicon} height='80px' width='70px' alt='food'/>
                </FoodCircle>
                <p>Food</p>
              </CustomLink>
            </li>
            <li> 
              <CustomLink to="/education/" activeClassName='activeLink'>
                <EducationCircle>
                  <img src={educationicon} height='80px' width='50px' alt='education'/>
                </EducationCircle>
                <p>Education</p>
              </CustomLink>
            </li>
            <li> 
              <CustomLink to="/electricity/" activeClassName='activeLink'>
                <ElectricityCircle>
                  <img src={electricityicon} height='80px' width='70px' alt='electricity'/>
                </ElectricityCircle>
                <p>Electricity</p>
              </CustomLink>
            </li>
            <li> 
              <CustomLink to="/health/" activeClassName='activeLink'>
                <HealthCircle>
                  <img src={healthicon} height='80px' width='70px' alt='health'/>
                </HealthCircle>
                <p>Health Access</p>
              </CustomLink>
            </li>
            <li> 
              <CustomLink to="/equality/" activeClassName='activeLink'>
                <EqualityCircle>
                  <img src={equalityicon} height='80px' width='100px' alt='equality'/>
                </EqualityCircle>
                <p>Gender</p> 
                  <p>Equality</p>
              </CustomLink>
            </li>
          </FlexUl>
        </nav>
        
        <Route path="/water/" component={waterSplitGraph} />
        <Route path="/food/" component={foodSplitGraph} />
        <Route path="/education/" component={educationSplitGraph} />
        <Route path="/electricity/" component={electricitySplitGraph} />
        <Route path="/health/" component={healthSplitGraph} />
        <Route path="/equality/" component={equalitySplitGraph} />
      </div>
    </Router>;
  }
}

export default App;
