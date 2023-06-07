import { useState } from "react"

export default function Form({addGame}) {
  const [title, setTitle] = useState('')
  const [cover, setCover] = useState('')

  function handleSubmit(ev) {
    ev.preventDefault()
    addGame({title, cover})
    setTitle('')
    setCover('')
  }

  return(
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="title">Título:</label>
      <input type="text" name="title" id="title" value={title} onChange={(element) => setTitle(element.target.value)} required/>
      <label htmlFor="cover">Capa (URL):</label>
      <input type="text" name="cover" id="cover" value={cover} onChange={(element) => setCover(element.target.value)} required/>
      <input type="submit" value="Adicionar" style={{cursor: 'pointer'}}/>
    </form>
  )
}