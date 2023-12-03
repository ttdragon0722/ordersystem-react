import { useState } from "react";
import testComponent from "./TestComponent";

const Test = () => {
    const [data, setData] = useState([]);

    return (
        <div>
            <testComponent data={data} setData={setData} index={0} />
            <testComponent data={data} setData={setData} index={1} />
        </div>
    )
}

export default Test;