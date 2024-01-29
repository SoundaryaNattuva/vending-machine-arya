const Drink = (props) => {
  return ( 
    <div>{props.drink.name}: {props.drink.fizz === 1 ? "carbonated" : "non-carbonated"}
    </div>
  );
}

export default Drink