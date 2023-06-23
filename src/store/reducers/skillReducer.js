const initialState = {
    frontend: [{
            name: 'HTML5',
            percentage: '70'
        },
        {
            name: 'CSS3',
            percentage: '80'
        },
        {
            name: 'Javascript',
            percentage: '85'
        },
        {
            name: 'React',
            percentage: '75'
        },
        {
            name: 'jQuery',
            percentage: '70'
        },
        {
            name: 'Bootstrap',
            percentage: '70'
        },
    ],
    backend: [{
            name: 'nodejs',
            percentage: '60'
        },
        {
            name: 'expressjs',
            percentage: '60'
        },
    ],
    sfcc: [{
            name: 'isml',
            percentage: '90'
        },
        {
            name: 'scss',
            percentage: '90'
        },
        {
            name: 'page designer',
            percentage: '80'
        },
        {
            name: 'controllers',
            percentage: '90'
        },
        {
            name: 'jobs',
            percentage: '80'
        },
        {
            name: 'forms',
            percentage: '80'
        },
        {
            name: 'services',
            percentage: '80'
        },
    ]
}

function names( state=initialState){
    return ({...state})
}

export default names;