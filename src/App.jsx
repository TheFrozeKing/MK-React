import FlexContainer from './shared/ui/FlexContainer'
import Panel from './shared/ui/Panel'
import './App.css'
import coffeeImg from '../public/coffee.jpg';

function App() {

  return (
    <main className="app">
      <Panel>
        <FlexContainer gap="20px" alignItems="stretch">
          <img
            src={coffeeImg}
          />

            <FlexContainer alignItems='left' gap='20px'>
              <p>ДЛЯ ДОМА</p>
              <h2>Чашка «Утро»</h2>
              <p>Простая керамическая чашка для любимого напитка.</p>
            </FlexContainer>

            <FlexContainer direction="row" justifyContent="space-between" gap="12px">
              <h3>790 Р</h3>
              <button>Купить</button>
            </FlexContainer>

        </FlexContainer>
      </Panel>
    </main>
  )
}

export default App
