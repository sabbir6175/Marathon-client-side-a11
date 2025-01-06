import React from 'react';
import Banner from './Banner';
import MarathonSection from './MarathonSection';
import UpcomingMarathon from './UpcomingMarathon';
import Another2Section from './Another2Section';

const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
           <MarathonSection></MarathonSection>
           <UpcomingMarathon></UpcomingMarathon>
           <Another2Section></Another2Section>
        </div>
    );
};

export default Home;