import { useRef,useState } from "react";
function ShowImage({bmi}){
    if(bmi<18.5) return <img src="under.png" width="80"/>
    if(bmi>30) return <img src="over.png"width="80" />
    return <img src="normal.png"width="80"/>
}
export default function Bmi(){
    const w_inputref=useRef(null);
    const h_inputref=useRef(null);
    const [bmi,setBmi]=useState(0.0);
    function calBmi(){
        let w=w_inputref.current.value;
        let h=h_inputref.current.value/100;
        setBmi(w/(h*h));
    }
    return (<>
        <h4>BMI Calculator</h4>
        <label for="weight">Weight: </label>
        <input type="text" id="weight" ref={w_inputref}/> kg.<br/>
        <label for="height">Height: </label>
        <input type="text" id="height" ref={h_inputref}/> cm.<br/>
        <button onClick={()=>calBmi()}>Calculate!</button>
        <p>BMI value:{bmi.toFixed(2)}</p>
        <ShowImage bmi={bmi}/>
    </>);
}