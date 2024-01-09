export function MiniCard({key, char, navigate}) {
    console.log({ key, char, navigate });
    return (
        <div className="card w-24 bg-neutral text-neutral-content" onClick={() => navigate('/cards')}>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{char}</h2>
            </div>
        </div>
    )
}
