import Thumbnail from "./Thumbnail";

function Results({results}) {
  return (
    <div>
      {results.map((result) => {
        return <Thumbnail key={result.id} result={result}/>
      })}
    </div>
  )
}

export default Results;