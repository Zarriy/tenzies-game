function Die(props) {
  const styles = props.hold ? { backgroundColor: "#59E391" } : {};

  return (
    <div
      className="dice-div"
      onClick={() => props.holdDice(props.id)}
      style={styles}
    >
      <h2>{props.value}</h2>
    </div>
  );
}
export default Die;
