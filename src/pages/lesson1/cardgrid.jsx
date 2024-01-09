import Carousel from '../../components/carousel';
import { varnamala } from '../../data/lesson1';

const inUse = (character) => character.notInUse !== true;

export function CardGrid() {
    return (
        <div className="App">
            <Carousel characters={varnamala.vowels.filter(inUse)} />
        </div>
      );
}
