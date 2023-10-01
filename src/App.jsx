import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
import Button from "./components/Button";
import Comments from './components/Comments';
import Message from "./components/Message";
import Star from './components/Star';
import './global.css';


function App() {

  function displayStars() {
    let stars = []
    for(let id = 1; id < 6; id++) {
      stars.push(<Star key={id} id={id} isSelected={id <= starSelected} setStarSelected={setStarSelected}/>)
    }
    return stars
  }
  
  function onSubmit(e) {
    e.preventDefault()
    if (!isAuthenticated) {
      setShowMessage(true)
      return
    }
    setComments([...comments, 
      {
        profile: user?.picture,
        content: inputValue,
        rate: starSelected + '/5'
      },
    ])
    setInputValue('')
    setStarSelected(0)
  }


  const [comments, setComments] = useState(
    [{
      profile: '',
      content: "The best app I've ever seen",
      rate: '5/5'
    },
    {
      profile: '',
      content: "I like it",
      rate: '4/5'
    },
    ])
  const [inputValue, setInputValue] = useState('')
  const [starSelected, setStarSelected] = useState(0)
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [showMessage, setShowMessage] = useState(false)

  return (
      <div className="page || min-h-screen bg-backgroundClr text-grey">
        <header className="flex justify-end gap-5 py-5 px-5">
          {isAuthenticated
              ? (
                <>
                <Button clickHandler={() => logout({
                  logoutParams: {
                    returnTo: window.location.origin
                  }
                })}>Logout</Button>
                <span className="profile || rounded-full overflow-hidden w-12 aspect-square"><img src={user.picture} alt="" /></span>
                </>
              )
              : <Button clickHandler={loginWithRedirect}>Login</Button>
          }
        </header>
      {showMessage &&
        <Message  loginWithRedirect={loginWithRedirect} setShowMessage={setShowMessage} />
      }
      <div className='wrapper || w-full md:w-4/5 2xl:w-4/6 m-auto px-6'>
      <div className="rate_block || flex justify-center gap-3 py-8">
        {displayStars()}
      </div>
        <form onSubmit={(e) => onSubmit(e)} className="formContainer || flex justify-between gap-4 text-white">
          <input type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className='w-6/3 basis-full rounded-sm pl-2 bg-accentClr-lighter' placeholder='Your comment...' required/>
          <Button>Add comment</Button>
        </form>
        <div className="commentsContainer || mt-16 grid gap-5 self-center ">
          <Comments comments={comments} />
        </div>
      </div>
    </div>
  );
}

export default App