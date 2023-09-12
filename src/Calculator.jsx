import { useState } from "react";
import { Theme, Display, Button } from './components';

export const Calculator = () => {
    const [value, setValue] = useState("0");
    const [calculationHistory, setCalculationHistory] = useState("");

    const buttonLabels = [
        "7", "8", "9", "DEL",
        "4", "5", "6", "+",
        "1", "2", "3", "-",
        ".", "0", "/", "*"
    ];

    const handleButtonClick = (buttonValue) => {
        if (buttonValue === "DEL") {
            if (value.length === 1) {
                setValue("0");
            } else {
                const newValue = value.slice(0, -1);
                setValue(newValue);
            }
        } else if (buttonValue === "=") {
            try {
                const result = eval(value);
                setCalculationHistory(`${calculationHistory}${value}=${result}\n`);
                setValue(result.toString());
            } catch (error) {
                setValue("Error");
            }
        } else {
            if (value === "0" || value === "Error") {
                setValue(buttonValue);
            } else {
                const newValue = value + buttonValue;
                setValue(newValue);
            }
        }
    };

    return (
        <>

            <div className="bg-blue-800 mx-auto h-screen">
                <div className="flex flex-col items-center justify-center h-full">

                    <div className="w-[30%]">
                        <Theme />
                        <Display value={value} />
                        <div className="p-8 mt-4 bg-red-700 rounded-xl ">
                            <div className="grid grid-cols-4 gap-6 mt-4 cursor-pointer">
                                {buttonLabels.map((label) => (
                                    <Button key={label} label={label} onClick={() => handleButtonClick(label)} />
                                ))}
                            </div>

                            <div className="mt-8 flex justify-between">
                                <button onClick={() => setValue("0")} className="bg-blue-700 border-b-4 w-[280px] border-blue-400 text-white rounded-lg px-8 py-2">
                                    <p className="text-white text-[50px] font-ibm-plex-mono px-8">RESET</p>
                                </button>
                                <button onClick={() => handleButtonClick("=")} className="bg-blue-700 border-b-4 w-[280px] border-blue-400 text-white rounded-lg px-8 py-2">
                                    <p className="text-white text-[50px] font-ibm-plex-mono px-8">=</p>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};