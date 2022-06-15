const Button = ({onClick, name}) => 
  <button 
    name={name} 
    onClick={onClick}
  >
    {name}
  </button>

export default Button;