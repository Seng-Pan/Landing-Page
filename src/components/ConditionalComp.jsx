import React from 'react'
import Welcome from './Welcome';
import Code from './Code';

function ConditionalComp() {
    const display = false;

    return display ? <Welcome/> : <Code/>

}

export default ConditionalComp


// let ishappy = true
// let message = ishappy ? "I am happy" : "No, I am not."



