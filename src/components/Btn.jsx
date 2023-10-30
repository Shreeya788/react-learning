function Btn() {
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt("type a number");
    alert(`Computer number : ${randomNum}, Your guess: ${userInput}`);
  }
  return <button onClick={handleClick}>Guess the no. between 1-3</button>;
}
export default Btn;
