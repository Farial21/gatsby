import * as React from 'react'

const wineImage = {
    height: '20%'
}
export default function Wine() {
    /*
    1. Fetch from https://api.sampleapis.com/wines/reds
    2. Trsnsform into JSX
    */
    let items = []
    let [wineNames, setWineNames] = React.useState([])

    React.useEffect(async () => {
        // Run once after the page finished loading
        // Fetch from https://api.sampleapis.com/wines/reds
        let res = await fetch('https://api.sampleapis.com/wines/reds')
        let wine = await res.json()
        for (let i = 0; i < wine.length; i++) {
            console.log(wine[i].name)
            items.push(<li><tr><td>
                <div style={{  width:"40rem",overflow: "hidden" }} >
                    <div style={{ width: "11rem", float: "left" }}> <img style={wineImage} src={wine[i].image} /> </div>
                    <div >  
                        <b>{wine[i].wine}</b><br></br>
                        Winery - {wine[i].winery}<br></br>
                        Avg Rating - {wine[i].rating.average}<br></br>
                        Total Reviews - {wine[i].rating.reviews}<br></br>
                        Location - {wine[i].location}<br></br>
                    </div>
                </div>
            </td></tr></li >)
        }

        setWineNames(items)
    }, [])

    return (
        <>
            <h1>Wine</h1>
            <table border = "1">
            <ul>
                {wineNames}
            </ul>
            </table>
        </>
    )
}




