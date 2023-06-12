const initialState = {
    education: [{
            collegeName: 'MLR Institute of Technology',
            specialization: 'Bachelor of Technoloy in Civil Engineering',
            year: 'July 2021'
        },
        {
            collegeName: 'SRRS govt.polytechnic',
            specialization: 'Diploma in Civil Engineering',
            year: 'may 2018'
        }
    ],
    experience: {
        companyName:'cloud odyssey',
        role:'Associate Software Engineer',
        year:'around 1 year',
    }
}

function resume(state = initialState) {
    return ({
        ...state
    })
}

export default resume;