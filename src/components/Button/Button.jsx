import style from "./Button.module.css"

const Button = (props) => {
    return(
        <button className={props.gender == "Male" ? style.male : style.female}>{props.gender}</button>
    )
}

export default Button