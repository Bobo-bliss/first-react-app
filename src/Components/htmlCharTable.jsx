export function CharTable(table) {
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
          {table.map((character, index) => {
            return (
              <tr key={index} className={character.className}>
                <td>{character.name}</td>
                <td>{character.skillset}</td>
                <td>{character.votes}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}