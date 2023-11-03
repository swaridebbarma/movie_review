const Action = ({movie,handleLike}) => {
    return (
        <>
            <div class="like">
                <img 
                    class="like-icon" 
                    src="Vector.png"
                    onClick ={() => handleLike(movie.id, movie.votes + 1)}
                />
            </div>
            <div class="count">
                <div class="votes">{movie.votes}</div>
            </div>
            <div class="dislike">
                <img 
                    class="dislike-icon" 
                    src="Vector(1).png"
                    onClick ={() => handleLike(movie.id, movie.votes - 1)}
                />
            </div>
        </>
    );
};
export default Action;
