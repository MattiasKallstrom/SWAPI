import "./Button.css";

const Button = ({ open, children }) => {
  return (
    <button className="viewButton" type="button" onClick={open}>
      {children}
    </button>
  );
}

export default Button;