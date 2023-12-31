import { useState } from "react";
import { Theme, Display, Button } from './components';

export const Calculator = () => {
    const [value, setValue] = useState("0");
    const [calculationHistory, setCalculationHistory] = useState("");
    const [selectedTheme, setSelectedTheme] = useState('theme-three');

    const hoverColors = {
        'theme-one': 'hover:bg-[#ffbf48]',
        'theme-two': 'hover:bg-[#398d6b]',
        'theme-three': 'hover:bg-[#210836]',
    };

    const hoverColor = hoverColors[selectedTheme];

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

    const handleThemeChange = (theme) => {
        setSelectedTheme(theme);
    };

    return (
        <>
            <div className={`mx-auto h-screen ${selectedTheme}`}>
                <div className="flex flex-col items-center justify-center h-full">
                <div className="sm:w-[90%] md:w-[90%] lg:w-[70%] xl:w-[40%] 2xl:w-[30%]">
                        <Theme onThemeChange={handleThemeChange} />
                        <Display
                            value={value}
                            themeClass={selectedTheme}
                        />
                        <div className={`md:p-8 p-4  mt-4 rounded-xl body ${selectedTheme}`}>
                        <div className="grid grid-cols-4 md:gap-3 gap-2 mt-4 cursor-pointer">
                                {buttonLabels.map((label) => (
                                    <Button key={label}
                                        label={label}
                                        onClick={() => handleButtonClick(label)}
                                        themeClass={selectedTheme}
                                        isDeleteButton={label === 'DEL'}
                                    />
                                ))}
                            </div>

                            <div className="mt-8 flex justify-between">
                                <button
                                    onClick={() => setValue("0")}
                                    className={`md:px-8 px-1 rounded-[15px] ${hoverColor} w-[110px]  md:w-[230px] mr-2 md:mr-0  py-2 reset ${selectedTheme}`}
                                >
                                    <p className="text-white font-ibm-plex-mono font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl px-6 md:px-2">RESET</p>
                                </button>
                                <button
                                    onClick={() => handleButtonClick("=")}
                                    className={`md:px-8 px-1 rounded-[15px] w-[110px]  md:w-[230px]  ${hoverColor}  py-2 enter ${selectedTheme}`}
                                >
                                    <p className="text-white font-ibm-plex-mono font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl px-6 md:px-2">=</p>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};