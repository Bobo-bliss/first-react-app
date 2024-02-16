export function CharTable({data}){
  const sortedCharacters = [...data].sort((a, b) => b.votes - a.votes)
  const topFive = sortedCharacters.slice(0, 5)
  
    return (
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Skillset</th>
              <th>Votes</th>
            </tr>
            {topFive.map((character, index) => {
              return (
                <tr key={index} className={index % 2 === 0 ? 'dark' : 'light'}>
                  <td>{character.name}</td>
                  <td>{character.skillset.join(', ')}</td>
                  <td>{character.votes}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    )
}