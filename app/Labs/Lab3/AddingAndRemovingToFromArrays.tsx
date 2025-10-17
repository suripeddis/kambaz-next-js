export default function AddingAndRemovingToFromArrays() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2"];
    let todoArray = [
      <li key="buy-milk">Buy milk</li>,
      <li key="feed-pets">Feed the pets</li>,
    ];
  
    numberArray1.push(6);
    stringArray1.push("string3");
    todoArray.push(<li key="walk-dogs">Walk the dogs</li>);
  
    return (
      <div id="wd-adding-and-removing-to-from-arrays">
        <h4>Adding and Removing to/from Arrays</h4>
        numberArray1 = {numberArray1.join(", ")} <br />
        stringArray1 = {stringArray1.join(", ")} <br />
        Todo list:
        <ol>{todoArray}</ol>
        <hr />
      </div>
    );
  }