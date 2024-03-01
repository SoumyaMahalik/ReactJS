import Movie from "../Movie"
import comady from "../data/comedy"

function Cmovies()
{
    return(
        <div className="movies">
            {comady.map((c,index) =>(
                <Movie url={c.img} title={c.title} key={index} />
            ))}
        </div>
    )
    
}
export default Cmovies