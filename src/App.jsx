import { useState } from 'react';
import Comments from './Comments';
import Star from './Star';
import './global.css';
function App() {
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

    function onSubmit(e) {
      e.preventDefault()
      setComments([...comments, 
        {
          profile: '',
          content: inputValue,
          rate: starSelected + '/5'
        },
      ])
      setInputValue('')
    }

  function displayStars() {
    let stars = []
    for(let id = 1; id < 6; id++) {
      stars.push(<Star key={id} id={id} isSelected={id <= starSelected} setStarSelected={setStarSelected}/>)
    }
    return stars
  }
  
  const [inputValue, setInputValue] = useState('')
  const [starSelected, setStarSelected] = useState(0)
  return (
      <div className="page || min-h-screen m-auto  bg-backgroundClr text-grey">
      <div className='wrapper || w-full md:w-4/5 2xl:w-4/6 m-auto py-28 px-6'>
      <div className="rate_block || flex justify-center gap-3 py-8">
        {displayStars()}
      </div>
        <form onSubmit={(e) => onSubmit(e)} className="formContainer || flex justify-between gap-4 text-white">
          <input type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className='w-6/3 basis-full rounded-sm pl-2 bg-accentClr-lighter' placeholder='Your comment...' required/>
          <button type='submit' id='addCommentBtn' className='py-2 px-3 rounded-lg bg-accentClr-darker'>Add comment</button>
        </form>
        <div className="commentsContainer || mt-24 grid gap-5 self-center">
          <Comments comments={comments} />
        </div>
      </div>
    </div>
  );
}

export default App