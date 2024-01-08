import Card from "./card";

export default function Carousel({ characters }) {
    return (
        <div className="carousel carousel-center rounded-box">
            <div className="carousel-item">
            {characters.map((character) => (
                <Card key={character.id} character={character} />
            ))}
            </div>
        </div>
    );
}
