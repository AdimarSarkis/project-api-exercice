import "./styles.css"

export const Button = ({text, onClick}) => {
  return(
    <button onClick={onClick}>
      {text}
    </button>
  );
}