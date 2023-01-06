import { useState } from "react"
import { CalculatorItem } from "../CalculatorItem"

export const Calculator = () => {
    const [formState, setFormState] = useState({
        total: 0,
        splits: [0.0, 0.0],
        splitsTotal: 0.0,
        results: [0.0, 0.0],
    })
    const onFormUpdate = event => {
        // event.preventDefault()
        const name = event.target.name.split(".")
        // console.log("event name: ", event.name, " event value: ", event.value)
        if (name[0] === "total" && event.target.value !== isNaN) {
            const results = formState.results.map((item, i) => {
                return (event.target.value * (formState.splits[i] / 100)).toFixed(2)
            })
            let splitsTotal = 0
            results.forEach(val => {
                splitsTotal += Number(val)
            })
            setFormState({ ...formState, total: Number(event.target.value), splitsTotal, results })
        }
        else if (name[0] === "split-value") {
            // let results = formState.results
            const splits = formState.splits.map((item, i) => {
                if (Number(name[1]) === i) {
                    return Number(event.target.value)
                }
                else {
                    return item
                }
            })
            const results = formState.results.map((item, i) => {
                return (formState.total * (splits[i] / 100)).toFixed(2)
            })
            let splitsTotal = 0
            results.forEach(val => {
                splitsTotal += Number(val)
            })
            setFormState({ ...formState, splits, splitsTotal, results })
        }
        // let splits = formState.splits
        // splits[name[1]] = event.target.value
        // setFormState({...formState, splits})
    }

    const onAddSplit = e => {
        e.preventDefault()
        const splits = formState.splits
        const results = formState.results
        splits.push(0)
        results.push(0)
        setFormState({ ...formState, splits, results })
    }

    const onRemoveSplit = e => {
        e.preventDefault()
        if (formState.splits.length > 2) {
            const splits = formState.splits
            const results = formState.results
            splits.pop()
            results.pop()
            setFormState({ ...formState, splits, results })
        }
    }

    const calculateResult = () => {
        let resultTotal = 0
        formState.results.forEach(val => {
            resultTotal += Number(val)
        })
        return resultTotal
    }

    return (
        <div className="content-flex">
            <form className={"align-self-center"}>
                <div className={"horizontal-stack justify-center m-y-1"}>
                    <h2 className={"stack-item fit-content"}>Total to Split</h2>
                    <input className={"stack-item fit-content"} name={"total"} placeholder={"Eg. 30"} type={"number"} onChange={e => onFormUpdate(e)} />
                    <h2 className={"stack-item fit-content"}>Result Total: {calculateResult()}</h2>
                </div>
                {formState.total !== calculateResult() ? (
                    <div className={"warning-container align-self-center"}>
                        <p className={"warning-text"}>
                            Warning: Calculated totals do not equal total to split.
                        </p>
                    </div>
                ) : ""}
                {formState.splits.map((element, i) => (
                    <div key={i} className={"horizontal-stack"}>
                        <div className={"horizontal-stack"}>
                            <h3>Name (optional)</h3>
                            <input className={"stack-item fit-content"} />
                        </div>
                        <div className={"horizontal-stack"}>
                            <h3 className={"stack-item fit-content"}>Split %</h3>
                            <input className={"stack-item fit-content"} placeholder={"Eg. 15%"} name={`split-value.${i}`} type={"number"} onChange={onFormUpdate} />
                        </div>
                        <div className={"horizontal-stack"}>
                            <h3 className={"stack-item fit-content"}>Result: {formState.results[i]}</h3>
                        </div>
                    </div>
                ))}
                <div className={"horizontal-stack"}>
                    <button onClick={onAddSplit} className={"stack-item fit-content button"}>Add a split</button>
                    {formState.splits.length > 2 ? (
                        <button onClick={onRemoveSplit} className={"stack-item fit-content button"}>Remove a split</button>
                    ) : ''}
                </div>
            </form>
        </div>
    )
}