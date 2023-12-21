const initialState = {
        megaMenu : ['about', 'skills', 'projects', 'contact'],
        name:'vamshi urumadla',
        summary:`passionate about leveraging my expertise in Frontend to create innovative and engaging e-commerce experiences. As a seasoned Frontend Developer with 1 year+ of hands-on experience, I am seeking opportunities to contribute my skills in JavaScript, React.js, Bootstrap, Sass, jQuery, HTML, and CSS to dynamic and innovative projects. I am passionate about crafting visually appealing and user-centric web applications to enhance the digital experience.`
}

function header(state=initialState){
 return ({...state})
}

export default header;