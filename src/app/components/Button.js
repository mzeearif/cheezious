import  Styles from './Button.module.css'
const Button = ({ label, onClick }) => {
    return(
        <button onClick={onClick}
  className={Styles.button}
  tabIndex={0}
  type="button"
  aria-label="Add To Cart"
>
            {label}
  <span className="MuiTouchRipple-root blink-style-w0pj6f" />
</button>

    )
}
export default Button;