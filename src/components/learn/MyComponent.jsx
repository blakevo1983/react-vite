import './style.css';

const MyComponent = () => {
  //const blake = "Quang"; //string
  //const blake = 113; //number
  //const blake = true; //boolean
  //const blake = undefined;
  //const blake = null;
  const blake = [1, 2, 3]; //array
  // const blake = {
  //   name: "Blake Vo",
  //   age: 35
  // }

  return (
    <>
    <div> {JSON.stringify(blake)} & Blake Hoc Lap Trinh Day1</div>
    <div>{console.log("BLAKE")}</div>
    <div className ="child" 
        style={{borderRadius:"10px"}}
    >Bom</div>
    <div className = "parent">Quang</div>
    </>
  );
}

export default MyComponent;