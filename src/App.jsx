import './App.css'
import './Style.css'
import './Reset.css'
import './Header.css'
import './CharacterRatings.css'
import './CharacterCards.css'
import { characterTable } from './Data.jsx'
import { characterCards } from './Data.jsx'

function App() {

  return (
    <>
      <header>
        <h1>Fullmetal Alchemist</h1>
        <nav>
          <li>about us</li>
          <li>info</li>
          <li>support us</li>
        </nav>
      </header>

      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Skillset</th>
              <th>Votes</th>
            </tr>
            {characterTable.map((character, index) => {
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
      <section id="character-cards">
        {characterCards.map((character, index) => {
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
    </>
  )
}

export default App
