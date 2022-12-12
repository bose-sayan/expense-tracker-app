import "./Card.css";

function Card(props) {
  const classes = props.className;
  return (
    <div className={"card " + classes} style={props.style}>
      {" "}
      {props.children}{" "}
    </div>
  );
}

export default Card;
