import React, { useState, useEffect } from 'react';

export const Theme = () => {
    const [selectedTheme, setSelectedTheme] = useState('1');

    const handleThemeChange = (theme) => {
        setSelectedTheme(theme);

    };

    const handleRadioChange = ({ target }) => {
        const selectedValue = target.value;
        setSelectedTheme(selectedValue);
    };

    return (
        <div className="py-2">
            <p className="text-white text-right font-bold text-[25px]">1 &nbsp;2 &nbsp;3 &nbsp;</p>
            <div className="flex items-center">
                <p className="text-white font-bold text-[25px] ml-auto">THEME &nbsp; &nbsp;</p>
                <div className="relative inline-flex w-24 h-10 bg-gray-200 dark:bg-gray-800 rounded-full p-2">
                    <input
                        type="radio"
                        className="h-full flex-grow radio-input"
                        name="theme"
                        value="1"
                        onChange={handleRadioChange}
                        checked={selectedTheme === '1'}
                    />
                    <input
                        type="radio"
                        className="h-full flex-grow radio-input"
                        name="theme"
                        value="2"
                        onChange={handleRadioChange}
                        checked={selectedTheme === '2'}
                    />
                    <input
                        type="radio"
                        className="h-full flex-grow radio-input"
                        name="theme"
                        value="3"
                        onChange={handleRadioChange}
                        checked={selectedTheme === '3'}
                    />
                </div>
            </div>
        </div>
    );
};
