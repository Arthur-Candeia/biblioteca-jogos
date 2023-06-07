import useUpdateGames from "./hooks/useUpdateGames"
import Form from "./components/Form"
import CardGame from "./components/CardGame"

export default function App() {
  const {games, addGame, removeGame} = useUpdateGames()

  return (
    <div id="app">
      <h1>Biblioteca de Jogos</h1>
      <Form addGame={addGame}></Form>
      {console.log(games)}
      { games.length > 0 ?
        <div className="games">
        {games.map((game) => {
          return (
            <div key={game.id}>
              <CardGame title={game.title} cover={game.cover}
              removeGame={() => removeGame(game.id)}/>
            </div>
          )
        })}
        </div>
      : (<h2 style={{color: '#aaa'}}>Não há jogos salvos aqui, tente adicionar um! :)</h2>)}
    </div>
  )
}