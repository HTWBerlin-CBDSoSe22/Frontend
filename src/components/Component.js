import React, {useState} from 'react';

// not used...
function Component(props) {
    const [componentDetails, setComponentDetails] = useState({
        componentId: null,
        name: "monkey",
        price: 0.0,
        height: 0.0,
        weight: 0.0,
        color: null,
        countryOfOrigin: null,
        grade: null,
        category: null,
        classification: null,
        harvestSeason: null
    });

    setComponentDetails({
        componentId: props.componentDetails.componentId,
        name: "lionKing",
        price: props.componentDetails.price,
        height: props.componentDetails.height,
        weight: props.componentDetails.weight,
        color: props.componentDetails.color,
        countryOfOrigin: props.componentDetails.countryOfOrigin,
        grade: props.componentDetails.grade,
        category: props.componentDetails.category,
        classification: props.componentDetails.classification,
        harvestSeason: props.componentDetails.harvestSeason
    })

    return componentDetails;
}

export default Component;
