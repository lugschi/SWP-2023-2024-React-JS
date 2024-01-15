export default function Card({firstName, lastName, job}){
    return(
        <div class="card">
            <img src="C:\Users\Luca\Documents\4. Klasse\SWP\05-React\aufgabe-komponents\src\Images\img_avatar.png"></img>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{job}</p>
        </div>
    )
}

