const initialState = {
        megaMenu : ['about', 'skills', 'projects', 'contact'],
        name:'vamshi urumadla',
        summary:`Salesforce Certified commerce cloud developer with over 1 year of experience in developing and customizing eCommerce solutions.
        Proficient in Salesforce Commerce Cloud. Worked on designing and developing responsive and user-friendly storefronts using SFRA (Storefront Reference Architecture).
        Developed multiple components for different pages using page designer and skilled in analyzing requirements, designing, developing, and maintaining web applications. For development, utilized Agile-Scrum methodology.`
}

function header(state=initialState){
 return ({...state})
}

export default header;