const Card = ({comments}) => {
  return (
    <>
        {comments.map((comment, index) => {
          return (
            <div key={index} className="container || flex items-center justify-between gap-2 py-3 px-3 bg-cardClr">
            <div className="user_content || flex gap-4 items-center overflow-y-hidden">
              <span className="icon || w-12 aspect-square rounded-full overflow-hidden bg-accentClr-lighter"><img src={comment.profile} alt=""/></span>
              <span className="comment || overflow-hidden whitespace-nowrap text-clip">{comment.content}</span>
            </div>
              <span className="rating || justify-self-end">{comment.rate}</span>
            </div>
          )
        })}
    </>
  )
}

export default Card