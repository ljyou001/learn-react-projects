import React from "react"

export default function App() {
    /**
     * Challenge: move our ternary directly inside of the JSX
     * so the "Yes" and "No" are determined inside the <h1>
     * 
     * Hint: you will no longer need the `answer` variable
     */
    const [isGoingOut, changeState] = React.useState(true)
    
    // function buttonClick() {
    //     changeState(function(oldStatus){
    //         return !oldStatus
    //     })
    // }

    function buttonClick() {
        changeState(prevState => !prevState)
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value">
                <h1 onClick={buttonClick}>{isGoingOut ? "Yes":"No"}</h1>
            </div>
        </div>
    )
}