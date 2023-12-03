const testComponent = (data,setData,index) => {
    
    const change = (e) => {
        setData((prev) => {
            let newData = prev ;
            newData[index] = e.target.value;
            return newData;
        });
    }

    return (
        <input onChange={change} value={data[index]} />
    )
}

export default testComponent;