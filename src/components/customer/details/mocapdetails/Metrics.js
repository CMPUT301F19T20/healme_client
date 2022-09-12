export const cols = [
    {name:'Age', selector:row=>row.ageRange, sortable:true, right:true},
    {name:'Below Average', selector:row=>row.belowAverage, sortable:true, right:true},
    {name:'Average', selector:row=>row.average, sortable:true, right:true},
    {name:'Above Average', selector:row=>row.aboveAverage, sortable:true, right:true},
]

export const tugCols = [
    {name:'Mobility', selector:row=>row.mobility, sortable:true, right:true},
    {name:'Significantly Reduced', selector:row=>row.significantlyReduced, sortable:true, right:true},
    {name:'Somewhat Reduced', selector:row=>row.somewhatReduced, sortable:true, right:true},
    {name:'Reasonably Good', selector:row=>row.reasonablyGood, sortable:true, right:true},
]

export const tugEvalCols = [
    {name:'Poor Performers', selector:row=>row.poor, sortable:true, right:true},
    {name:'Moderate Performers', selector:row=>row.moderate, sortable:true, right:true},
    {name:'Good Performers', selector:row=>row.good, sortable:true, right:true},
]
export const womenSitToStandData = [
    {
        ageRange: '60-64',
        belowAverage: '<12',
        average: '12-17',
        aboveAverage: '>17'
    },
    {
        ageRange: '64-69',
        belowAverage: '<11',
        average: '11-16',
        aboveAverage: '>16'
    },
    {
        ageRange: '70-74',
        belowAverage: '<10',
        average: '10-15',
        aboveAverage: '>15'
    },
    {
        ageRange: '75-79',
        belowAverage: '<10',
        average: '10-15',
        aboveAverage: '>15'
    },
    {
        ageRange: '80-84',
        belowAverage: '<9',
        average: '9-14',
        aboveAverage: '>14'
    },
    {
        ageRange: '85-89',
        belowAverage: '<8',
        average: '8-13',
        aboveAverage: '>13'
    },
    {
        ageRange: '90-94',
        belowAverage: '<4',
        average: '4-11',
        aboveAverage: '>11'
    },

]

export const menSitToStandData = [
    {
        ageRange: '60-64',
        belowAverage: '<14',
        average: '14-19',
        aboveAverage: '>19'
    },
    {
        ageRange: '64-69',
        belowAverage: '<12',
        average: '12-18',
        aboveAverage: '>18'
    },
    {
        ageRange: '70-74',
        belowAverage: '<12',
        average: '12-17',
        aboveAverage: '>17'
    },
    {
        ageRange: '75-79',
        belowAverage: '<11',
        average: '11-17',
        aboveAverage: '>17'
    },
    {
        ageRange: '80-84',
        belowAverage: '<10',
        average: '10-15',
        aboveAverage: '>15'
    },
    {
        ageRange: '85-89',
        belowAverage: '<8',
        average: '8-14',
        aboveAverage: '>14'
    },
    {
        ageRange: '90-94',
        belowAverage: '<7',
        average: '7-12',
        aboveAverage: '>12'
    },

]

export const menSLBdata = [
    {
        ageRange: '18-39',
        belowAverage: '<44.1',
        average: '44.1',
        aboveAverage: '>44.1'
    },
    {
        ageRange: '40-49',
        belowAverage: '<41.6',
        average: '41.6',
        aboveAverage: '>41.6'
    },
    {
        ageRange: '50-59',
        belowAverage: '<41.5',
        average: '41.5',
        aboveAverage: '>41.5'
    },
    {
        ageRange: '60-69',
        belowAverage: '<33.8',
        average: '33.8',
        aboveAverage: '>33.8'
    },
]

export const womenSLBdata = [
    {
        ageRange: '18-39',
        belowAverage: '<45.0',
        average: '45.0',
        aboveAverage: 'N/A'
    },
    {
        ageRange: '40-49',
        belowAverage: '<42.1',
        average: '42.1',
        aboveAverage: '>42.1'
    },
    {
        ageRange: '50-59',
        belowAverage: '<40.9',
        average: '40.9',
        aboveAverage: '>40.9'
    },
    {
        ageRange: '60-69',
        belowAverage: '<30.4',
        average: '30.4',
        aboveAverage: '>30.4'
    },
]

export const womenGaitdata = [
    {
        ageRange: '50-59',
        belowAverage: '<0.9',
        average: '0.9-1.3',
        aboveAverage: '>1.3'
    },
    {
        ageRange: '60-69',
        belowAverage: '<0.7',
        average: '0.7-1.2',
        aboveAverage: '>1.2'
    },
    {
        ageRange: '70-79',
        belowAverage: '<0.7',
        average: '0.7-1.2',
        aboveAverage: '>1.2'
    },
    {
        ageRange: '80+',
        belowAverage: '<0.5',
        average: '0.5-1.0',
        aboveAverage: '>1.0'
    },
]

export const menGaitdata = [
    {
        ageRange: '50-59',
        belowAverage: '<0.9',
        average: '0.9-1.4',
        aboveAverage: '>1.4'
    },
    {
        ageRange: '60-69',
        belowAverage: '<0.8',
        average: '0.8-1.3',
        aboveAverage: '>1.3'
    },
    {
        ageRange: '70-79',
        belowAverage: '<0.7',
        average: '0.7-1.2',
        aboveAverage: '>1.2'
    },
    {
        ageRange: '80+',
        belowAverage: '<0.6',
        average: '0.6-1.1',
        aboveAverage: '>1.1'
    },
]

export const womenStepdata = [
    {
        ageRange: '60-64',
        belowAverage: '<61',
        average: '61-110',
        aboveAverage: '>110'
    },
    {
        ageRange: '65-69',
        belowAverage: '<61',
        average: '61-109',
        aboveAverage: '>109'
    },
    {
        ageRange: '70-74',
        belowAverage: '<61',
        average: '61-105',
        aboveAverage: '>105'
    },
    {
        ageRange: '75-79',
        belowAverage: '<60',
        average: '60-106',
        aboveAverage: '>106'
    },
    {
        ageRange: '80-84',
        belowAverage: '<59',
        average: '59-98',
        aboveAverage: '>98'
    },
    {
        ageRange: '85-89',
        belowAverage: '<55',
        average: '55-93',
        aboveAverage: '>93'
    },
    {
        ageRange: '90-94',
        belowAverage: '<38',
        average: '38-82',
        aboveAverage: '>82'
    },
]

export const menStepdata = [
    {
        ageRange: '60-64',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '65-69',
        belowAverage: '<64',
        average: '64-114',
        aboveAverage: '>114'
    },
    {
        ageRange: '70-74',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '75-79',
        belowAverage: '<63',
        average: '63-117',
        aboveAverage: '>117'
    },
    {
        ageRange: '80-84',
        belowAverage: '<54',
        average: '54-108',
        aboveAverage: '>108'
    },
    {
        ageRange: '85-89',
        belowAverage: '<47',
        average: '47-104',
        aboveAverage: '>104'
    },
    {
        ageRange: '90-94',
        belowAverage: '<38',
        average: '38-82',
        aboveAverage: '>82'
    },
]

export const womenLeftShoulderData = [
    {
        ageRange: '20-24',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '25-29',
        belowAverage: '<64',
        average: '64-114',
        aboveAverage: '>114'
    },
    {
        ageRange: '30-34',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '40-44',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '45-49',
        belowAverage: '<64',
        average: '64-114',
        aboveAverage: '>114'
    },
    {
        ageRange: '50-54',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '55-59',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '60-64',
        belowAverage: '<64',
        average: '64-114',
        aboveAverage: '>114'
    },
    {
        ageRange: '65-69',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '70-74',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '75-79',
        belowAverage: '<64',
        average: '64-114',
        aboveAverage: '>114'
    },
    {
        ageRange: '80-84',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '85+',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },

]

export const womenRightShoulderData = [
    {
        ageRange: '20-24',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '25-29',
        belowAverage: '<64',
        average: '64-114',
        aboveAverage: '>114'
    },
    {
        ageRange: '30-34',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '40-44',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '45-49',
        belowAverage: '<64',
        average: '64-114',
        aboveAverage: '>114'
    },
    {
        ageRange: '50-54',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '55-59',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '60-64',
        belowAverage: '<64',
        average: '64-114',
        aboveAverage: '>114'
    },
    {
        ageRange: '65-69',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '70-74',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '75-79',
        belowAverage: '<64',
        average: '64-114',
        aboveAverage: '>114'
    },
    {
        ageRange: '80-84',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '85+',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },

]

export const menLeftShoulderData = [
    {
        ageRange: '20-24',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '25-29',
        belowAverage: '<64',
        average: '64-114',
        aboveAverage: '>114'
    },
    {
        ageRange: '30-34',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '40-44',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '45-49',
        belowAverage: '<64',
        average: '64-114',
        aboveAverage: '>114'
    },
    {
        ageRange: '50-54',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '55-59',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '60-64',
        belowAverage: '<64',
        average: '64-114',
        aboveAverage: '>114'
    },
    {
        ageRange: '65-69',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '70-74',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '75-79',
        belowAverage: '<64',
        average: '64-114',
        aboveAverage: '>114'
    },
    {
        ageRange: '80-84',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '85+',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },

]

export const menRightShoulderData = [
    {
        ageRange: '20-24',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '25-29',
        belowAverage: '<64',
        average: '64-114',
        aboveAverage: '>114'
    },
    {
        ageRange: '30-34',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '40-44',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '45-49',
        belowAverage: '<64',
        average: '64-114',
        aboveAverage: '>114'
    },
    {
        ageRange: '50-54',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '55-59',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '60-64',
        belowAverage: '<64',
        average: '64-114',
        aboveAverage: '>114'
    },
    {
        ageRange: '65-69',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '70-74',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '75-79',
        belowAverage: '<64',
        average: '64-114',
        aboveAverage: '>114'
    },
    {
        ageRange: '80-84',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },
    {
        ageRange: '85+',
        belowAverage: '<72',
        average: '72-113',
        aboveAverage: '>113'
    },

]

