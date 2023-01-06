export const CalculatorItem = ({ splits, results, handleChange }) => {
    return (
        <div>
            {splits.map((element, i) => (
                <div key={Math.floor(Math.random() * 66535)} className={"horizontal-stack"}>
                    <div className={"horizontal-stack"}>
                        <h3>Name (optional)</h3>
                        <input className={"stack-item fit-content"} />
                    </div>
                    <div className={"horizontal-stack"}>
                        <h3 className={"stack-item fit-content"}>Split %</h3>
                        <input className={"stack-item fit-content"} placeholder={"Eg. 15%"} name={`split-value.${i}`} type={"number"} onChange={e => handleChange(e)} />
                    </div>
                    <div className={"horizontal-stack"}>
                        <h3 className={"stack-item fit-content"}>Result: {results[i]}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}