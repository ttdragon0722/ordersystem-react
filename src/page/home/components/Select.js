import { useEffect, useState } from "react";

const Select = ({setCompanySelect}) => {
    // eslint-disable-next-line
    const [company, setCompany] = useState()
    useEffect(() => {
        fetch("/api/getCompany")
            .then(res => res.json())
            .then(
                data => {
                    setCompany(data);
                }
            )
    }, [])

    const selectChange = (e) => {
        setCompanySelect(e.target.value);
    }

    return (
        
        <select id="compony" className="select px-5 py-1 rounded-lg font-bold shadow-lg bg-white/50 mx-2" onChange={selectChange}>
            <option disabled selected>選擇廠商</option>
            {company &&
                company.map((value, index) => (
                    <option key={index} value={value}>
                        {value}
                    </option>
                ))}
        </select>
    )
}

export default Select;