import FlexContainer from './shared/ui/FlexContainer'
import Panel from './shared/ui/Panel'
import './App.css'
import coffeeImg from '../public/coffee.jpg';

function App() {

  return (
    <main className="app">
      <Panel>
        <FlexContainer gap="20px" alignItems="stretch">
          {/* <img 
            src={coffeeImg}
          />

            <h2>Чашка «Утро»</h2>
            <p>Простая керамическая чашка для любимого напитка.</p>

            <p><strong>720p</strong></p>
            <button>купить</button>
          */}
        </FlexContainer>
      </Panel>
    </main>
  )
}

export default App
