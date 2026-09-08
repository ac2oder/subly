function WordCard(props) {
  return (
    <div className="word-card">
      <h2 className="word">{props.word}</h2>
      <p className="count">{props.count} times</p>
    </div>
  );
}

export default WordCard;