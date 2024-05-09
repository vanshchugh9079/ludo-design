import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
export default function Col({ coltype, color }) {
    const [colclass, setColClass] = useState()
    const [circleColor, setCircleColor] = useState()
    let [unique, setUnique] = useState(1)
    useEffect(() => {
        if (coltype === "corner-col") {
            switch (color) {
                case "red":
                    setColClass("corner-col bg-danger")
                    setCircleColor("bg-danger")
                    break;
                case "yellow":
                    setColClass("corner-col bg-warning")
                    setCircleColor("bg-warning")
                    break;
                case "green":
                    setColClass("corner-col bg-success")
                    setCircleColor("bg-success")
                    break;
                case "blue":
                    setColClass("corner-col bg-info")
                    setCircleColor("bg-info")
                    break;
                default:
                    // setColClass("v-col bg-danger")
                    break;
            }
        }
        else if (coltype === "center-col") {
            setColClass("center-col")
        }
        else if (coltype === "main-col") {
            setColClass("main-col")
        }
        else {
            setColClass("rowcenter-col")
        }
    }, [coltype, color])
    // ludo logic
    useEffect(() => {
        let bottomcol = Array.from(document.querySelectorAll(".pos-bottom"))
        bottomcol.forEach((e,id)=>{
            if(parseInt(e.innerHTML)%10===0 && parseInt(e.innerHTML)<50){
                e.classList.add(`id-${unique}`)
                unique++;
            }
        }) 
    },[])
    return (
        <div className={`${colclass}`}>
            {coltype === "center-col" && (
                Array.from({ length: 6 }).map((e, key) => (
                    <Row className="" key={key}>
                        {Array.from({ length: 3 }).map((e, innerKey) => (
                            <div key={innerKey} className={`col-4 v-border v-col row-${key} v-col-${innerKey} pos-${(color === "green") ? "top" : "bottom"}`}>{`${key}${innerKey}`}</div>
                        ))}
                    </Row>
                ))
            )}
            {coltype === "rowcenter-col" &&
                Array.from({ length: 3 }).map((e, key) => (
                    <Row key={key}>
                        {Array.from({ length: 6 }).map((e, innerKey) => (
                            <div key={innerKey} className={`col-2 v-border v-col row-${key} v-col-${innerKey}`}>{`${key}${innerKey}`}</div>
                        ))}
                    </Row>
                ))
            }
            {coltype === "corner-col" &&
                <div className=' bg-white corner-div d-flex justify-content-center gap-4 align-items-center  flex-wrap ms-auto me-auto'>
                    {
                        coltype === "corner-col" &&
                        Array.from({ length: 4 }).map((e, key) => (
                            <div className={`corner-circel rounded-circle  ${circleColor}`}></div>
                        ))
                    }
                </div>
            }
        </div>
    )
}
