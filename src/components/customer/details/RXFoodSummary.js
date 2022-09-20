import React from 'react'
import RxfoodDateFilter from './datefilters/RxfoodDateFilter'


const RXFoodSummary = (props) => {
    return (
        <div>
            <div className="dateSelect">
                <RxfoodDateFilter getDate={props.getDate} datePeriods={props.datePeriods} />     
            </div>
            
            <div className="nutrients">
                <div className="meals" >
                    <h2>Meals Report</h2>
                    <div >
                        <ul>
                            <li><b>breakfast:</b> {parseInt(props.mealsCount.breakfast)*props.numDays[0]}</li>
                            <li><b>Dinner: </b>{parseInt(props.mealsCount.dinner)*props.numDays[0]}</li>
                            <li><b>Lunch:</b> {parseInt(props.mealsCount.lunch)*props.numDays[0]}</li>
                            <li><b>Snacks:</b> {parseInt(props.mealsCount.snack)*props.numDays[0]}</li>
                        </ul> 
                    </div>
                </div>

                <div className="macronutrients">
                    <h2>Macronutrients</h2>
                    <ul>
                        <li><b>Calories:</b> {props.calories} KCAL</li>
                        <li><b>Carbohydrates:</b> {props.avgCarbohydrates} grams ({props.carboPct}% of total calories)</li>
                        <li><b>Fibre: </b>{props.avgFibre} grams of fibre</li>
                        <li><b>Protein:</b> {props.avgProtein} grams ({props.proteinPct}% of total calories)</li>
                        <li><b>Fat:</b> {props.avgFat} grams ({props.fatPct}% of total calories)</li>
                    </ul> 
                </div>
                <div className="micronutrients">
                    <h2>Micronutrients</h2>
                    <ul>
                        <li><b>Sodium:</b> {parseInt(props.avgSodium).toFixed(0)} mg</li>
                        <li><b>Calcium:</b> {parseInt(props.avgCalcium).toFixed(0)} mg</li>
                        <li><b>Iron:</b> {parseInt(props.avgIron).toFixed(0)} g</li>
                        <li><b>Potassium:</b> {parseInt(props.avgPotassium).toFixed(0)} mg</li>
                    </ul>  
                </div>
            </div>
            
        </div>
        )
}

export default RXFoodSummary