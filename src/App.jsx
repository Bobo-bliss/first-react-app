import './App.css';
import './Style.css';
import './Reset.css';
import './Header.css';
import './CharacterRatings.css';
import './CharacterCards.css';
import { Header } from './Components/htmlHeader.jsx'
import { CharTable } from './Components/htmlCharTable.jsx'
import { CharCard } from './Components/htmlCharCards.jsx'
import { characterTable } from './Data.jsx';
import { characterCards } from './Data.jsx';

function App() {

  return (
    <>
      {Header()}

      {CharTable(characterTable)}
      
      {CharCard(characterCards)}
    </>
  )
}

export default App
