function WordCard(props) {
  return (
    <div>
      <h2>{props.word}</h2>
      <p>{props.translation}</p>
    </div>
  );
}

export default WordCard;