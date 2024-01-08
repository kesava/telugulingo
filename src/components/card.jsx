export default function Card({character}) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img
                src={ character.image }
                alt={ character.iast.sound }/></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{character.iast.sound}</h2>
                <p>{character.iast.beginning}<b>{character.iast.sound}</b>{character.iast.end}</p>
                <p>{character.telugu.beginning}<b>{character.telugu.sound}</b>{character.telugu.end}</p>
            </div>
        </div>
    )
};
