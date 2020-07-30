import React from 'react';

const HackForGoodArticleContent = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <React.Fragment>
            <p>On Saturday, 21 March 2020, DSC NUS hosted the finale for our virtual hackathon - Hack for Good. Participants had the opportunity to explore the various pillars backed by WWF, Conservation International, Singapore Council Of Women's Organisations, Aphasia SG and SACAC Counselling Pte. Ltd. - Environment, Health, and equality, and come up with creative technological solutions for existing social issues. We had the honour of having judges Corrine Ong, Esther Goh, Marcus Wong, Chuan-Hoo Tan and Michelle Quek with us to judge the amazing presentations from our finalists!</p>
            <p>For the pillar of Environment, video games were developed to raise awareness among students on the vital role of mangrove systems in mitigating climate change. Meanwhile, multiple teams also looked into incorporating technology into their solutions to reduce food wastage. </p>
            <p>Whereas for the pillar of Health, the teams recognised that people with Aphasia experience stress when overwhelmed with information. To enhance the comprehension of webpages, the teams focused on customising and simplifying of complex web pages, as well as translating texts into emojis so that the community can communicate better with the rest of the world. Furthermore, various teams explored improving the mental wellness of people with depression and anxiety. Using touch-sensitive lamps and positive reinforcement, the teams hope to ease stress anxiety. Another team also looked into providing companionship through a virtual pet. </p>
            <p>While all of the ideas were unique, thoughtful and creative, ultimately the teams who emerged as winners were: </p>
            <ul className="list margin-bottom-small">
                <li><b>Winner:</b> Shuenonkit</li>
                <li><b>1st runner-up:</b> FoodBlocks</li>
                <li><b>2nd runner-up:</b> TanHaus</li>
            </ul>
            <p>We strongly believe that these ideas will be able to make a positive difference in society in some way or another. Through Hack for Good, we sincerely hope that our participants have gained new insights, be it through their experience or from others. This event was made possible by NUS Office of Student Affairs. Lastly, we are grateful for the generosity and support from Holmusk, Grab, Google, Quest Ventures and NUS Computing. We hope that it has been a good experience for all, just as it has been for us! </p>
            <p>Click <a href="https://dsc.comp.nus.edu.sg/hackathon-teams">here</a> to know more about the teams!</p>
        </React.Fragment>
    );
}

export default HackForGoodArticleContent;