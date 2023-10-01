const Button = ({children, clickHandler}) => {
  return (
        <button onClick={clickHandler} className="py-2 px-3 rounded-lg bg-accentClr-darker text-white">{children}</button>
    )
}

export default Button