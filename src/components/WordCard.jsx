function WordCard(props) {
  return (
    <div>
      <h2>{props.word}</h2>
      <p>{props.count}</p>
    </div>
  );
}

export default WordCard;