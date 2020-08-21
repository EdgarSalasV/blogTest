const ButtonAction = ({ children, ...props }) => {
    return (
        <button className={classes.button} {...props}>
            { children }
        </button>
    )
}
export default ButtonAction