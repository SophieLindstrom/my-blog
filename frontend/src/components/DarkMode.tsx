import { useEffect, useState } from "react";
import './darkMode.css';

export default function DarkMode(){
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
        }
        else {
            setTheme("light")
        } 
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className ={`DarkMode ${theme}`}>
            <button className="p-4" onClick={toggleTheme}>Zzz</button>
        </div>
    )

    

}