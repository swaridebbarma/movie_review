import Delete from './Delete.js'
import Action from './Action.js'

const Movierow=({movie,handleLike,onDelete})=>{
    return(
        <>
            <div class="movie_details">
                <div class="pic_box">
                    <img src={movie.poster}class="img"/>
                </div>
                <div class="name_box">
                    <div class="box">
                        <h1>{movie. Movie_name}</h1>
                        <p1>{movie.Y_H_M} | {movie.Type}</p1>
                    </div>
                    <div class="box1">
                        <h3>{movie.description}</h3>
                        <p1>{movie.Description}</p1>
                    </div>
                </div>  
                <div class="like_box">
                    <Action
                        movie={movie} 
                        handleLike={handleLike}
                    />
                    <Delete
                        onDelete={onDelete}
                    />
                  
                </div>  
            </div> 
            <div class="bottom"></div>
        </>
    );
};
export default Movierow;
