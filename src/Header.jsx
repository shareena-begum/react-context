import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

function Header(props) {
    const context = useContext(ThemeContext)
    return (
        <header className={`${context.theme}-theme`}>
            <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
        </header>           
    ) 
}  

// function Header(props) {
//     const {theme} = useContext(ThemeContext)
//     return (
//         <header className={`${theme}-theme`}>
//             <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
//         </header>
//     )    
// }Another method

export default Header   

// OLD CODE
// import React, {Component} from "react"
// import {ThemeContextConsumer} from "./themeContext"

// function Header(props) {
//     return (
//         <ThemeContextConsumer>
//             {context => (
//                 <header className={`${context.theme}-theme`}>
//                     <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
//                 </header>
//             )}
//         </ThemeContextConsumer>
//     )    
// }

// export default Header
