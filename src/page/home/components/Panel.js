import { useEffect, useRef, useState } from "react";
import InputGroup from "./InputForm/InputGroup";
import { v4 } from "uuid";
import { gsap } from "gsap";

const Panel = ({ companySelect }) => {
    const [src, setSrc] = useState();
    const panel = useRef(null);
    useEffect(() => {
        gsap.to(panel.current,{opacity:0,duration:0.3,ease:"power1",onComplete:()=>{
            fetch("/api/getProduct?company=" + companySelect)
                .then(res => res.json())
                .then(
                    data => {
                        // todo del
                        if (data !== "false") {
                            setSrc(data);
                            gsap.to(panel.current,{
                                opacity:1,duration:0.3,ease:"power1"
                            })
                        }
                    }
                )
        }})
        // eslint-disable-next-line
    }, [companySelect])

    return (
        <div ref={panel} className="flex flex-wrap px-4 py-2 pb-[13vh]">
            {src &&
                src.goods.map((v) => {
                    return <InputGroup key={v4()} data={v}/>
                })
            }
        </div>
    )
}

export default Panel;