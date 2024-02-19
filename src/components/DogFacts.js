import defaultProps from "../defaultProps";
import { useParams } from 'react-router-dom';

const DogFacts = () => {
    const { name } = useParams();
    const { dogs } = defaultProps;

    let chosenDog
    
    for (let i = 0; i < dogs.length; i++){
        if(dogs[i].name === name)
            chosenDog = dogs[i]
    }

    console.log(chosenDog.facts)

    return(
        <div>
            <ul>
            {chosenDog.facts.map((dogFact, index) => (
                <li key={index}>{dogFact}</li>
            ))}
            </ul>
            <img alt="" src={chosenDog.src}></img>
        </div>
    )
}

export default DogFacts;