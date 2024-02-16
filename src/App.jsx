import './App.css';
import './Style.css';
import './Reset.css';
import './Header.css';
import './CharacterRatings.css';
import './CharacterCards.css';
import { Header } from './Components/htmlHeader'
import { CharTable } from './Components/htmlCharTable.jsx'
import { CharCard } from './Components/htmlCharCards.jsx'
import {data} from './fma-data.ts'

function App() {

  return (
    <>
      <Header />

      <CharTable data={data} />

      <CharCard data={data} />
    </>
  )
}

export default App
