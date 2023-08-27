import React from 'react';
import VideoSlider from '../Components/VideoSlider/VideoSlider.jsx';
import Subtitle from '../Components/Subtitle/Subtitle.jsx';
import EventTypes from '../Components/EventTypes/EventTypes.jsx';

const Home = () => {

  return (
    <>
    {/* ----------------------------------- VideoSlider section ------------------------------------------- */}
    <VideoSlider/>
    {/* ------------------x---------------- VideoSlider section --------------x---------------------------- */}
    {/* ----------------------------------- Event-types section ------------------------------------------- */}
    <Subtitle title={'Events We Organize'}/>
    <EventTypes/>
    {/* ------------------x---------------- Event-types section --------------x---------------------------- */}
    </>
  );
}

export default Home;
