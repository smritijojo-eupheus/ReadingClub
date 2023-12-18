import React from 'react'
import Topnavbar from "./component/Topnavbar";
import Icon1 from "../assets/img/icon/icon-1.png";
import Icon2 from "../assets/img/icon/icon-2.png";
import Icon3 from "../assets/img/icon/icon-3.png";
import Icon4 from "../assets/img/icon/icon-4.png";
import Icon5 from "../assets/img/icon/icon-5.png";

export default function Session() {
    return (
        <div>
            <Topnavbar/>
            <div className="flex flex-wrap lg:px-10 md:px-8  min-h-[90vh] max-h-[100%] bg-light-purple w-[100%]">
                <div className="mx-auto">
                    <div className="w-[90vw] md:w-[80vw] lg:w-[60vw]">
                        <div className="flex justify-around p-3 bg-black-500 text-white font-bold my-5">
                            <h3>Session History</h3>
                            <h3>Total score: 0</h3>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
