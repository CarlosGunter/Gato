import { TURNS, SYMBOLS } from '../assets/dictionary.js'
import { User, Machine, X, Circle } from '../assets/svg.jsx'

export default function Create ({ setTurn, setSymbol, assign }) {
  function click (symb) {
    if (symb === SYMBOLS.x) {
      assign.current = {
        x: TURNS.User,
        user: SYMBOLS.x,
        o: TURNS.Machine,
        machine: SYMBOLS.o
      }
    } else if (symb === SYMBOLS.o) {
      assign.current = {
        x: TURNS.Machine,
        machine: SYMBOLS.x,
        o: TURNS.User,
        user: SYMBOLS.o
      }
    }
  }

  return (
    <>
      <h2>¿Quién iniciará la partida?</h2>
      <section className='turn'>
        <div className="cell_turn" onClick={() => { setTurn(TURNS.User) }}>
          <User></User>
        </div>
        <div className="cell_turn" onClick={() => { setTurn(TURNS.Machine) }}>
          <Machine></Machine>
        </div>
      </section>
      <h2>Elige tu símbolo:</h2>
      <section className="turn">
        <div className="cell_turn"
        onClick={() => {
          setSymbol(SYMBOLS.x)
          click(SYMBOLS.x)
        }}>
          <X></X>
        </div>
        <div className="cell_turn"
        onClick={() => {
          setSymbol(SYMBOLS.o)
          click(SYMBOLS.o)
        }}>
          <Circle></Circle>
        </div>
      </section>
    </>
  )
}
