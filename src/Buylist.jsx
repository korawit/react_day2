import { useState } from "react";
function Item({ name }) {
    const [isBuy, SetisBuy] = useState(false);
    if (isBuy == true) {
        return (<li onClick={() => SetisBuy(!isBuy)}><s>{name}</s>✅</li>);
    }
    return (<li onClick={() => SetisBuy(!isBuy)}>{name}</li>);

}
function Item2({ name }) {
    const [isBuy, SetisBuy] = useState(false);
    return (<li onClick={() => SetisBuy(!isBuy)}>
        {isBuy ? name + "✅" : name}
    </li>);

}
function Item3({ name }) {
    const [isBuy, SetisBuy] = useState(false);
    return (<li onClick={() => SetisBuy(!isBuy)}>
        {name}{isBuy && "✅"}
    </li>);

}
export default function Buylist() {
    const products = [{id:0, name:"Pork"},
                      {id:1, name:"Egg"}, 
                      {id:2, name:"Milk"},
                      {id:3, name:"Salad"},
                      {id:4, name:"Peper"},
                      {id:5, name:"Pepsi"}];
    const [value,setValue]=useState("");
    const filter_product=products.filter(p=>p.name.toLowerCase().includes(value.toLowerCase()));
    //const product_list = products.map(p => <Item3 name={p} />);
    return (<><h4>To buy list</h4>
        <label for="keyword">Product name:</label>
    <input type="text" id="keyword" value={value} onChange={e=>setValue(e.target.value)}/>
        <ul>
            {/* product_list*/}
            {filter_product.map(p => <Item3 key={p.id} name={p.name} />)}
        </ul>
    </>);
}