import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import GenderSplitGraph from './SplitGraph/Gender/GenderSplitGraph';
import WaterSplitGraph from './SplitGraph/Water/WaterSplitGraph';
import FoodSplitGraph from './SplitGraph/Food/FoodSplitGraph';
import ElectricitySplitGraph from './SplitGraph/Electricity/ElectricitySplitGraph';
import EducationSplitGraph from './SplitGraph/Education/EducationSplitGraph';
import EqualitySplitGraph from './SplitGraph/Equality/EqualitySplitGraph';
import HealthSplitGraph from './SplitGraph/Health/HealthSplitGraph';
import watericon from './SplitGraph/Water/img/watericon.svg';
import educationicon from './SplitGraph/Education/education.svg';
import electricityicon from './SplitGraph/Electricity/electricity.svg';
import foodicon from './SplitGraph/Food/foodicon.svg';
import healthicon from './SplitGraph/Health/health.svg';
import equalityicon from './SplitGraph/Equality/equalitylogo.svg';
import gendericon from './SplitGraph/Gender/gender.svg';
import ageicon from './SplitGraph/Ages/Ageicon.svg';
import ModalVideo from 'react-modal-video';
import VideoView from './VideoView';
import helpbutton from './images/seehear.svg';
import AgeVideoGraph from './SplitGraph/Ages/AgesVideoGraph.js';
import video from './images/video.mp4'

function genderSplitGraph()
{
  return <GenderSplitGraph
      men={20}
      women={20}
      others={10}
    />;
}

function waterSplitGraph()
{
  return <WaterSplitGraph
      yes={16}
      partially={10}
      no={19}
      idontknow={5}
    />;
}

function foodSplitGraph()
{
  return <FoodSplitGraph
      yes={15}
      partially={15}
      no={10}
      idontknow={10}
    />;
}

function educationSplitGraph()
{
  return <EducationSplitGraph
      yes={10}
      partially={20}
      no={15}
      idontknow={5}
    />;
}
function electricitySplitGraph()
{
  return <ElectricitySplitGraph
      yes={20}
      partially={15}
      no={10}
      idontknow={5}
    />;
}

function healthSplitGraph()
{
  return <HealthSplitGraph
      yes={20}
      partially={10}
      no={10}
      idontknow={10}
    />;
}

function equalitySplitGraph()
{
  return <EqualitySplitGraph
      yes={20}
      partially={20}
      no={5}
      idontknow={5}
    />;
}

function agesVideoGraph()
{
  return <AgeVideoGraph/>;
}


const DivCircle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GenderCircle = styled(DivCircle)`
background:#506E82  ;
`;

const AgesCircle = styled(DivCircle)`
    background:#7185A1  ;
`;

const WaterCircle = styled(DivCircle)`
    background:  #60576B;
`;

const FoodCircle = styled(DivCircle)`
    background:  #A87B8C ;
`;
const EducationCircle = styled(DivCircle)`
    background:  #E8898B  ;
`;
const ElectricityCircle = styled(DivCircle)`
    background:#BF5E6E ;
`;

const HealthCircle = styled(DivCircle)`
    background: #B87888 ;
`;

const EqualityCircle = styled(DivCircle)`
    background: #DBC8D9;
`;


const CustomLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  text-align: center;
  &> div {
    transition: opacity 0.2s;
  }

  &:hover > div{
    opacity: 0.3;
  }

  &.activeLink > div {
     opacity: 100%;
     border: 10px solid black;
  }  
`;

const FlexUl = styled.ul`
  list-style:none;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const AudioVisualHelp = styled.img`
  border-radius: 15px;
  position: absolute;
  top: 0%;
  left: 0%;
  height: 80px;
  width: 50px;
`;

class App extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
 
  openModal () {
    this.setState({isOpen: true})
  }
  
  render() {
    return <Router>
      <FlexDiv>
        <h1>The Survey Report</h1>
        <AudioVisualHelp onClick={this.openModal} src={helpbutton} 
          height='50px' width='50px' alt='gender'/>
      </FlexDiv>
    
      <div>
        <ModalVideo channel= 'youtube' autoplay isOpen={this.state.isOpen} 
          videoId= 'XE5E1ilTMnw' onClose={() => this.setState({isOpen: false})} autoplay/>
      </div>
      <div className='links'>
        <nav>
          <FlexUl>
          <li> 
              <CustomLink to="/gender/" activeClassName='activeLink'>
                <GenderCircle>
                <img src={gendericon} height='80px' width='70px' alt='gender'/>
                </GenderCircle>
                <p>Gender</p> 
              </CustomLink>
            </li>
            <li> 
              <CustomLink to="/ages/" activeClassName='activeLink'>
                <AgesCircle>
                  <img src={ageicon} height='130px' width='100px' alt='ages'/>
                </AgesCircle>
                <p>Ages</p> 
              </CustomLink>
            </li>
            <li> 
              <CustomLink to="/water/" activeClassName='activeLink'>
                <WaterCircle>
                <img src={watericon} height='100px' width='80px' alt='Water'/>
                </WaterCircle>
                <p>Water</p> 
              </CustomLink>
            </li>
            <li> 
              <CustomLink to="/food/" activeClassName='activeLink'>
                <FoodCircle>
                 <img src={foodicon} height='100px' width='100px' alt='food'/>
                </FoodCircle>
                <p>Food</p>
              </CustomLink>
            </li>
            <li> 
              <CustomLink to="/education/" activeClassName='activeLink'>
                <EducationCircle>
                <img src={educationicon} height='90px' width='90px' alt='education'/>
                </EducationCircle>
                <p>Education</p>
              </CustomLink>
            </li>
            <li> 
              <CustomLink to="/electricity/" activeClassName='activeLink'>
                <ElectricityCircle>
                  <img src={electricityicon} height='90px' width='90px' alt='electricity'/>
                </ElectricityCircle>
                <p>Electricity</p>
              </CustomLink>
            </li>
            <li> 
              <CustomLink to="/health/" activeClassName='activeLink'>
                <HealthCircle>
                  <img src={healthicon} height='70px' width='70px' alt='health'/>
                </HealthCircle>
                <p>Health Access</p>
              </CustomLink>
            </li>
            <li> 
              <CustomLink to="/equality/" activeClassName='activeLink'>
                <EqualityCircle>
                  <img src={equalityicon} height='90px' width='100px' alt='equality'/>
                </EqualityCircle>
                <p>Gender</p> 
                  <p>Equality</p>
              </CustomLink>
            </li>
          </FlexUl>
        </nav>
        
        <Route path="/gender/" component={genderSplitGraph} />
        <Route path="/water/" component={waterSplitGraph} />
        <Route path="/food/" component={foodSplitGraph} />
        <Route path="/education/" component={educationSplitGraph} />
        <Route path="/electricity/" component={electricitySplitGraph} />
        <Route path="/health/" component={healthSplitGraph} />
        <Route path="/equality/" component={equalitySplitGraph} />
        <Route path="/ages/" component={agesVideoGraph} />
      </div>
    </Router>;
  }
}

export default App;
