import { useState } from "react"

export default function useUpdateGames() {
  const [games, setGames] = useState(() => {
    const allGames = localStorage.getItem('allGames')
    if (!allGames) return []
    return JSON.parse(allGames)
  })
  

  function addGame({title, cover}) {
    const id = Math.floor(Math.random() * 1000000)
    const game = {id, title, cover}
    setGames(state => {
      const newState = [...state, game]
      localStorage.allGames = JSON.stringify(newState)
      return newState
    })
  }

  function removeGame(id) {
    setGames(state => {
      const newState = state.filter((game) => game.id != id)
      localStorage.allGames = JSON.stringify(newState)
      return newState
    })
  }

  return {games, addGame, removeGame}
}