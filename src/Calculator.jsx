import { useState } from "react";

import { Display } from "./components/Display"


export const Calculator = () => {
    const [value, setValue] = useState(0);

    return (
        <>
            <div className="bg-red-400 w-[80%] mx-auto h-screen">
                <div className="flex items-center justify-center h-full">
                    <Display value={value} />
                </div>
            </div>



        </>
    )
}
