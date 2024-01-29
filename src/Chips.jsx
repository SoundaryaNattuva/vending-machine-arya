const Chip = (props) => {
  return ( 
    <div>
      {props.chip.name}: {props.chip.vegan && props.chip.gluten ? "Vegan and Gluten Free" : (props.chip.vegan ? "Vegan" : (props.chip.gluten ? "Gluten Free" : "Avoid at all costs" ))}
    </div>
  );
}

export default Chip;