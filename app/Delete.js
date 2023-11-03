const Delete=(props)=>{
    return (
        <div class="delete">
            <img class="delete-icon" 
                src="Vector(2).png" onClick={props.onDelete}
            />
        </div>
    );
};

export default Delete;
