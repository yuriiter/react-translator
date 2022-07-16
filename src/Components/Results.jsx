import React from "react"

const Results = (props) => {
    const [data, setData] = React.useState(props.data)
    React.useEffect(() => {
        setData(props.data)
        console.log(data)
    }, [props.data]);

    let results
    if(data.query != undefined) {
        results = (
            <>
                <h2>{data.query}</h2>
                <ul>
                    {data.result.map((val, idx) => {
                        return (<li key={'data_' + idx}>
                            <h3>{val.variant}</h3>
                            <ul>
                                {val.variantMeanings.map((val2, idx2) => {
                                    return (
                                    <li key={'variant_' + idx2}>
                                        {val2}
                                    </li>)
                                })}
                            </ul>
                        </li>)
                    })}
                </ul>
            </>
        )
    }

    return (
        <div style={{paddingTop: '100px'}}>
            <div className="container">
                {results}
            </div>
        </div>
    )
}

export default Results