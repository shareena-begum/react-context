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

// OLD CODE
// export default Header

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
