import React from 'react';
import Iframe from 'react-iframe'

const HackForGoodPage = () => (
    <div>       
        <Iframe url="https://www.tutorialrepublic.com"
                width="100%"
                height="100%"
                id="myId"
                className="myClassname"
                display="initial"
                position="absolute"/>
    </div>
);

export default HackForGoodPage;