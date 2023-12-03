import { useState } from "react";
import FunctionButton from "./FunctionButton";
import NumberInput from "./NumberInput";

const InputGroup = ({ data: { name, price }}) => {
    const [amount,setAmount] = useState(0);

    return (
        <div className="product w-1/2 my-3">
            <div className="mb-1">
                <div className="product-name font-bold">{name}</div>
                <div className="product-price text-sm after:content-['$']">{price}</div>
            </div>
            <div>
                <FunctionButton direction="left" setAmount={setAmount}>-</FunctionButton>
                <NumberInput amount={amount} setAmount={setAmount} />
                <FunctionButton direction="right" setAmount={setAmount}>+</FunctionButton>
            </div>
        </div>
    )
}   

export default InputGroup;