import { useEffect, useState } from "react";

const App = () => {
    // eslint-disable-next-line
    const [test, setTest] = useState([{}]);

    useEffect(() => {
        fetch("/members")
            .then(
                res => res.json()
            ).then(
                data => {
                    setTest(data);
                    console.log(data);
                }
            )
        // eslint-disable-next-line
    }, [])

    return (
        <div>haha
        </div>
    )
}

export default App;