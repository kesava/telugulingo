export default function Card({character}) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10"><img src={character.image} alt={character.iast.sound}/></figure>
            <div className="card-body items-center text-center">
                <p className="sound text-4xl italic">{character.iast.sound}</p>
                <p className="pronunciation text-xl" dangerouslySetInnerHTML={{__html: character.pronunciation}}></p>
                <p className="pronunciation">{character.iast.beginning}<b className="text-xl">{character.iast.sound}</b>{character.iast.end} -- {character.telugu.beginning}<b>{character.telugu.sound}</b>{character.telugu.end} -- {character.meaning}</p>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Telugu</th>
                                <th>English</th>
                            </tr>
                        </thead>
                        <tbody>
                            {character
                                .telugu
                                .examples
                                .map((example) => (
                                    <tr className="bg-base-200">
                                        <td className="italic">{example[0]}</td>
                                        <td>{example[1]}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};
