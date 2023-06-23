import ecommerce from '../../portfolioImages/ecommerce.jpeg';
import todoAdvance from '../../portfolioImages/todoadvance.png';
import todoBasic from '../../portfolioImages/todobasic.png';

const initialState = [
        {
            title:'e-commerce',
           description:`An e-commerce website is an online platform that enables businesses and individuals to buy and sell products and services over the internet.`,
            image:ecommerce,
            link:''
        },
        {
            title:'todo Advance',
           description:`Advance todo list with good features to use it. A todo list app is a digital tool designed to help individuals organize, manage, and track their tasks and responsibilities.`,
            image:todoAdvance,
            link:'https://6495286f5110e000078812a8--singular-arithmetic-c1d366.netlify.app/'
        },
        {
            title:'todo Basic',
           description:`A todo list app is a digital tool designed to help individuals organize, manage, and track their tasks and responsibilities.`,
            image:todoBasic,
            link:'https://649578707fd4e9000855f0ab--lucky-khapse-aad440.netlify.app/'
        },
        {
            title:'e-commerce',
           description:`An e-commerce website is an online platform that enables businesses and individuals to buy and sell products and services over the internet.`,
            image:ecommerce,
            link:''
        },
        {
            title:'todo Advance',
           description:`Advance todo list with good features to use it. A todo list app is a digital tool designed to help individuals organize, manage, and track their tasks and responsibilities.`,
            image:todoAdvance,
            link:'https://6495286f5110e000078812a8--singular-arithmetic-c1d366.netlify.app/'
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