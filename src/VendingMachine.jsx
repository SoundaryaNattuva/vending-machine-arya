import Candy from './Candy';
import Drink from './Drink';

const VendingMachine = (props) => {
  return ( 
    <div>
      <h1>Vending Machine</h1>
      <div> <h2>Candy</h2>
        <Candy candy={{name: "Bruno", size: "large", quantity: "30"}}  />
        <Candy candy={{name: "Skittles", size: "small", quantity: "25"}}  />
        <Candy candy={{name: "Reese's", size: "large", quantity: "35"}}  />
      </div>
      <div> <h2>Drinks</h2>
        <Drink drink={{name: "Sprite", fizz:1}}/>
        <Drink drink={{name: "Water", fizz:0}}/>
        <Drink drink={{name: "Orange Juice", fizz:0}}/>
      </div>

    </div>
  );
}

export default VendingMachine;