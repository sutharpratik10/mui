import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Theme from "./Theme";
 
export default function Themeswitcher() {
    const [colorTheme, setTheme] = Theme();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );
 
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };
 
    return (
        <>
           <DarkModeSwitch
                checked={darkSide}
                onChange={toggleDarkMode}
                size={25}
            />
        </>
    );
}