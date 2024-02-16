export function CharCard(character) {
  return (
    <section id="character-cards">
        {character.map((character, index) => {
          return (
            <div key={index} className="card">
              <div className="card-titles">
                <h3>{character.name}</h3>
                <h4>{character.title}</h4>
              </div>
              <img src={character.img} alt="" />
              <p>{character.description}</p>
            </div>
          )
        })}
      </section>
  )
}