import './index.css';

const Button = ({textContent, color, type, onClick}) => {
  return (
    <button type={ type } onClick={onClick} className="Button" style={{ backgroundColor: color }}>{ textContent }</button>
  )
}

export default Button;