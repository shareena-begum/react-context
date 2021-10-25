import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

 function Button(props)  {   
     const context = useContext(ThemeContext)
        return (
            <button
                onClick={context.toggleTheme} 
                className= {`${context.theme}-theme`}
            >
                    Switch Theme
            </button>   
        
        )
}

// function Button(props) {
//     const {theme, toggleTheme} = useContext(ThemeContext)
//     return (
//         <button 
//             onClick={toggleTheme} 
//             className={`${theme}-theme`}
//         >
//             Switch Theme
//         </button>
//     )    
// }Another method


 export default Button



// OLD CODE
// import React from "react"
// import {ThemeContextConsumer} from "./themeContext"

// function Button(props) {
//     return (
//         <ThemeContextConsumer>
//             {context => (
//                 <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>
//             )}
//         </ThemeContextConsumer>
//     )    
// }

// export default Button