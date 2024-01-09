import { MiniCard } from "../../components/minicard";
import { varnamala } from '../../data/lesson1';

const inUse = (character) => character.notInUse !== true;

export function Varnamala({ navigate }) {
    return (
        <>
            <h2 className="text-2xl p-8">Telugu Vowels</h2>
            <div className="grid grid-cols-4 gap-4">
                {varnamala.vowels.filter(inUse).map((character) => (<MiniCard char={character.iast.sound} navigate={navigate} />))}
            </div>
            <h2 className="text-2xl p-8">Telugu Consonants</h2>
            <div className="grid grid-cols-4 gap-4">
                {varnamala.consonants.filter(inUse).map((character) => (<MiniCard char={character.iast.sound} navigate={navigate} />))}
            </div>
        </>
    )
}
