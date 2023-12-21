import todoAdvance from '../../portfolioImages/todoAdvance.png';
import todoBasic from '../../portfolioImages/todoBasic.png';
import dataFetch from '../../portfolioImages/dataFetch.png';
import fastrack  from '../../portfolioImages/FastrackSite.png';
import sonata from '../../portfolioImages/SonataSite.png';
import titan from '../../portfolioImages/TitanSite.png';
import tanishq from '../../portfolioImages/tanishq.png';

const initialState = [
        {
            title:'Fastrack Watches',
           description:`As a key player in the Fastrack Watches website development team. My responsibilities include the footer for improved navigation, enhancing the product search experience, and optimizing the cart functionality for a seamless buying journey. this is yet to go live`,
            image:fastrack,
            link:''
        },
        {
            title:'Sonata Watches',
           description:`Excited to share my role in transforming the Sonata Watches online shopping experience through my contribution to the Salesforce Commerce Cloud platform. I focused on shaping the footer, page designer components, and cart-related sections to elevate Sonata Watches' digital presence.
           `,
            image:sonata,
            link:'https://www.sonatawatches.in/'
        },
        {
            title:'Titan Watches',
           description:`As a key contributor to the Titan Watches website development team, I played an excellent role in enhancing the user experience through the implementation and optimization of the account and order-related sections.`,
            image:titan,
            link:'https://www.titan.co.in/homepage?lang=en_IN'
        },
        {
            title:'Tanishq',
           description:`As a key player in the Fastrack Watches website development team. My responsibilities include the footer for improved navigation, enhancing the product search experience, and optimizing the cart functionality for a seamless buying journey.`,
            image:tanishq,
            link:'https://www.tanishq.co.in/homepage?lang=en_IN'
        },
        {
            title:'todo Advance',
           description:`Advance todo list with good features to use it. A todo list app is a digital tool designed to help individuals organize, manage, and track their tasks and responsibilities.`,
            image:todoAdvance,
            link:'https://6495286f5110e000078812a8--singular-arithmetic-c1d366.netlify.app/'
        },
        {
            title:'data fetch app',
           description:`app to fetch the data for api call. this app fetch the data from the api and display it on screen. its easy to fetch the data of any api by using this app`,
            image:dataFetch,
            link:'https://64995f4adf9c3f1e42a9445e--loquacious-valkyrie-dc1072.netlify.app/'
        },
        {
            title:'todo Basic',
           description:`A todo list app is a digital tool designed to help individuals organize, manage, and track their tasks and responsibilities.`,
            image:todoBasic,
            link:'https://649578707fd4e9000855f0ab--lucky-khapse-aad440.netlify.app/'
        }
    ]


function projects(state=initialState){
    return([...state])
}

export default projects;