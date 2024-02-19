import defaultProps from "../defaultProps";
import { Link, useParams } from 'react-router-dom';

const DogDetail = () => {
    const { name } = useParams();
    const { dogs } = defaultProps;

    let chosenDog

    for (let i = 0; i < dogs.length; i++){
        if(dogs[i].name === name)
            chosenDog = dogs[i]
    }

    return(
        <ul>
            <li>Name: {chosenDog.name}</li>
            <li>Age: {chosenDog.age}</li>
            <img alt="" src={chosenDog.src}></img>
            <li><Link to={`/dogs/${name}/facts`}>Facts</Link></li>
        </ul>
    )
}

export default DogDetail;