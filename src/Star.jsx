

const Star = ({id, isSelected, setStarSelected}) => {
  isSelected = isSelected ? 'yellow' : 'white'
  return (
      <svg 
      onClick={() => setStarSelected(id)}
      xmlns="http://www.w3.org/2000/svg" fill={isSelected} width="122.88px" height="116.864px" ><g><polygon points="61.44,0 78.351,41.326 122.88,44.638 88.803,73.491 99.412,116.864 61.44,93.371 23.468,116.864 34.078,73.491 0,44.638 44.529,41.326 61.44,0"/ ></g></svg>
  )
}


export default Star