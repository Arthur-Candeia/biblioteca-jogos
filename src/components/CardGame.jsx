export default function CardGame({cover, title, removeGame}) {
  return (
    <>
      <img src={cover} alt={title} />
      <div>
        <h2>{title}</h2>
        <button onClick={removeGame}>Remover</button>
      </div>
    </>
  )
}