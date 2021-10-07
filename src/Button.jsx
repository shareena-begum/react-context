import React from "react"
import PropTypes from "prop-types"
import ThemeContext from "./themeContext"

 function Button(props)  {   
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <button className= {`${props.theme}-theme`}>
                        Switch Theme
                    </button>   
                )}
            </ThemeContext.Consumer>
        )
}

Button.PropTypes = {
    theme: PropTypes.oneOf(["light", "dark"])
}

Button.defaultProps = {
    theme: "light"
}



export default Button