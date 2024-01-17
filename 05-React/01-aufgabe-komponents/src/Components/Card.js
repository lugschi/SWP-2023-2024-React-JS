export default function Card({firstName, lastName, job}){
    return(
        <div class="card">
            <img className="cardImage" alt="" src="https://www.w3schools.com/howto/img_avatar.png"></img>
            <p className="cardName">{firstName} {lastName}</p>
            <p>{job}</p>
        </div>
    )
}

