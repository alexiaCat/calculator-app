import { useState } from 'react';

export const Theme = ({ onThemeChange }) => {
    const [selectedTheme, setSelectedTheme] = useState('theme-three');

    const handleThemeChange = (theme) => {
        setSelectedTheme(theme);
        onThemeChange(theme);
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
                        value="theme-one"
                        onChange={() => handleThemeChange('theme-one')}
                        checked={selectedTheme === 'theme-one'}
                    />
                    <input
                        type="radio"
                        className="h-full flex-grow radio-input"
                        name="theme"
                        value="theme-two"
                        onChange={() => handleThemeChange('theme-two')}
                        checked={selectedTheme === 'theme-two'}
                    />
                    <input
                        type="radio"
                        className="h-full flex-grow radio-input"
                        name="theme"
                        value="theme-three"
                        onChange={() => handleThemeChange('theme-three')}
                        checked={selectedTheme === 'theme-three'}
                    />
                </div>
            </div>
        </div>
    );
};
