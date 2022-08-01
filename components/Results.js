import Thumbnail from "./Thumbnail";

function Results({results}) {
  return (
    <ul className="px-5 my-12 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result) => {
        return <Thumbnail key={result.id} result={result}/>
      })}
    </ul>
  )
}

export default Results;