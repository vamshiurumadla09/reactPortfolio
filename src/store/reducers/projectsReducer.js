import ecommerce from '../../portfolioImages/ecommerce.jpeg';
import todoAdvance from '../../portfolioImages/todoAdvance.png';
import todoBasic from '../../portfolioImages/todoBasic.png';
import cricket from '../../portfolioImages/cricket.jpg';
const initialState = [
        {
            title:'e-commerce',
           description:`An e-commerce website is an online platform that enables businesses and individuals to buy and sell products and services over the internet.`,
            image:ecommerce
        },
        {
            title:'todo Advance',
           description:`Advance todo list with good features to use it. A todo list app is a digital tool designed to help individuals organize, manage, and track their tasks and responsibilities.`,
            image:todoAdvance
        },
        {
            title:'todo Basic',
           description:`A todo list app is a digital tool designed to help individuals organize, manage, and track their tasks and responsibilities.`,
            image:todoBasic
        },
        {
            title:'cricket',
           description:`A cricket score app is a mobile application that provides real-time updates and information about cricket matches.`,
            image:cricket
        },
    ]


function projects(state=initialState){
    return([...state])
}

export default projects;