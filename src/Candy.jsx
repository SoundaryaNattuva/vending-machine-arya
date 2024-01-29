const Candy = (props) => {
  return ( 
    <div>{props.candy.name}: 
      <li>Quantity - {props.candy.quantity}</li>
      <li>Size - {props.candy.size}</li>
    </div>
  );
}

export default Candy