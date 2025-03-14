import React from 'react';
import Banner from './Banner';
import MarathonSection from './MarathonSection';
import UpcomingMarathon from './UpcomingMarathon';
import Another2Section from './Another2Section';
import Members from './Members';
import About from './About';

const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
           <About></About>
           <MarathonSection></MarathonSection>
           <UpcomingMarathon></UpcomingMarathon>
           <Members></Members>
           <Another2Section></Another2Section>

        </div>
    );
};

export default Home;