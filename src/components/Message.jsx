import Button from "./Button"

const AuthMessage = ({loginWithRedirect, setShowMessage}) => {
  return (
    <dialog className="grid modal gap-3 py-3 px-5">
      <h1 className="text-center text-4xl">Please Authorize!</h1>
      <p>if you want to leave a comment you need to pass authorization secured by <span className="font-bold text-accentClr-lighter">Auth0</span></p>
      <div className="row || flex justify-center gap-4">
        <Button clickHandler={loginWithRedirect}>Login</Button>
        <Button clickHandler={() => setShowMessage(false)}>Close</Button>
      </div>
  </dialog>
  )
}

export default AuthMessage