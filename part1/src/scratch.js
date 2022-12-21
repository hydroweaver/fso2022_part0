// const Header = (props) => {
//   return(
//     <h1>{props.course.name}</h1>
//   );
// };

// import { time } from "console"

// const Part = (props) => {
//   return(
//     <p>
//       {props.part} {props.exercise}
//     </p>
//   );
// }

// const Content = (props) => {
//   return (
//     <div>
//       <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
//       <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
//       <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
//     </div>
//   );
// };

// const Total = (props) => {
//   return(
//     <div>
//       <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
//     </div>
//   )
// }

// const App = () => {
//   const course={
//     name: "Half Stack application development",
//     parts:[
//       {
//         name: "Fundamentals of React",
//         exercises: 10
//       }, 
//       {
//         name: "Using props to pass data",
//         exercises: 7
//       },
//       {
//         name: "State of a component",
//         exercises: 14
//       }
//     ]
//   }
//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={course.parts}/>
//       <Total  parts={course.parts} />
//     </div>
//   );
// };

// export default App;


// const Hello = ({name, age}) => {
//   const bornYear = () =>  new Date().getFullYear() - age

//   return(
//     <p>
//       Hi {name}, you are {age} years old! You were born in {bornYear()}
//     </p>
//   )
// }

// const App = () => {
//   return(
//     <div>
//       <Hello name = 'Karan' age={35} />
//     </div>
//   )
// }

// import { useState } from "react";

// const Display = ({counter}) => <div>{counter}</div>

// const Button = ({name, functiondefinition}) => <button onClick={functiondefinition}>{name}</button>

// const App = () => {
//   const [counter, ButtonClick] = useState(0)

//   const add = () => {ButtonClick(counter + 1)}
//   const subtract = () => {ButtonClick(counter - 1)}
//   const reset = () => {ButtonClick(0)}

//   return(
//     <div>
//       <Display counter={counter}/>
//       <Button name={'Add'} functiondefinition={add}/>
//       <Button name={'Subtract'} functiondefinition={subtract}/>
//       <Button name={'Reset'} functiondefinition={reset}/>
//     </div>
//   )
// }

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   setTimeout(
//     () => setCounter(counter + 1),
//     1000
//   )

//   console.log('rendering...', counter)

//   return (
//     <div>{counter}</div>
//   )
// }


// import { useState } from "react";

// const App = () =>{

//   const [clicks, setClicks] = useState({
//     left:0, right:0
//   })

//   console.log(clicks)

//   const handleLeftClick = () =>{
//     setClicks({
//       ...clicks,
//       left: clicks.left+1,
//     })
//   }

//   const handleRightClick = () =>{
//     setClicks({
//       ...clicks,
//       right: clicks.right+1
//     })
//   }

//   return(
//     <div>
//       <p>
//       {clicks.left}
//       </p>
//       <button onClick={handleLeftClick}>
//         left
//       </button>
//       <p>
//         {clicks.right}
//       </p>
//       <button onClick={handleRightClick}>
//         right
//       </button>
//     </div>
//   )
// }

// export default App;


// import { useState } from "react";

// const History = (props) => {
//   if(props.allClicks.length === 0){
//     return(
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return(
//     <p>{props.allClicks.join(' ')}</p>
//   )
// }

// const Button = ({handler, name}) => {
//   return(
//     <button onClick={handler}>
//       {name}
//     </button>
//   )
// }

// const App = () => {

//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setLeft(left+1)
//     setAll(allClicks.concat('L'))
//   }

//   const handleRightClick = () => {
//     setRight(right+1)
//     setAll(allClicks.concat('R'))
//   }

//   return (
//     <div>
//       <p>{left}</p>
//       <Button name={'left'} handler={handleLeftClick} />
//       <p>{right}</p>
//       <Button name={'right'} handler={handleRightClick} />
//       <History allClicks={allClicks}/>
//     </div>
//   );
// };

// export default App;


// import { useState } from "react"

// const App = () => {
//   const [value, setValue] = useState(10)

//   const setToValue = (newVal) => () => setValue(newVal)

//   return(
//     <div>
//       {value}
//       <button onClick={setToValue(1000)}>Thousand</button>
//       <button onClick={setToValue(0)}>Zero</button>
//       <button onClick={setToValue(value+1)}>Increment by 1</button>
//     </div>
//   )
// }

// export default App;



// import { useState } from "react";

// const Button = (props) => {
//   return <button onClick={props.onClick}>{props.name}</button>;
// };

// const App = () => {
//   const [value, setValue] = useState(10);

//   const setToValue = (val) => {
//     setValue(val);
//   };

//   //Define component inside App component - Do Not Do This

//   const Display = (props) => {
//     return(
//       <p>
//         {props.value}
//       </p>
//     )
//   }

//   return (
//     <div>
//       <Display value={value}/>
//       <Button onClick={() => setToValue(1000)} name={"Thousand"} />
//       <Button onClick={() => setToValue(0)} name={"Zero"} />
//       <Button onClick={() => setToValue(value + 1)} name={"Increment by 1"} />
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";

// const Button = (props) => {
//   return <button onClick={props.onClick}>{props.name}</button>;
// };

// const Display = (props) => {
//   return(
//     <p>
//       {props.value}
//     </p>
//   )
// }

// const App = () => {
//   const [value, setValue] = useState(10);

//   const setToValue = (val) => {
//     setValue(val);
//   };

//   return (
//     <div>
//       <Display value={value}/>
//       <Button onClick={() => setToValue(1000)} name={"Thousand"} />
//       <Button onClick={() => setToValue(0)} name={"Zero"} />
//       <Button onClick={() => setToValue(value + 1)} name={"Increment by 1"} />
//     </div>
//   );
// };

// export default App;


// import { useState } from "react";

// const Header = (props) => {
//   return <h1>{props.value}</h1>;
// };

// const Button = (props) => {
//   return <button onClick={props.onClickHandler}>{props.text}</button>;
// };

// const StatisticLine = (props) => {
//   return (
//     <p>
//       {props.feedbackName}
//       {props.feedbackType}
//     </p>
//   );
// };

// const Statistics = (props) => {
//   return (
//     <tbody>
//       <tr>
//         <td>
//           <StatisticLine feedbackName={"Good"} />
//         </td>
//         <td>
//           <StatisticLine feedbackType={props.good} />
//         </td>
//       </tr>
//       <tr>
//         <td>
//           <StatisticLine feedbackName={"Neutral"} />
//         </td>
//         <td>
//           <StatisticLine feedbackType={props.neutral} />
//         </td>
//       </tr>
//       <tr>
//         <td>
//           <StatisticLine feedbackName={"Bad"} />
//         </td>
//         <td>
//           <StatisticLine feedbackType={props.bad} />
//         </td>
//       </tr>
//       <tr>
//         <td>
//           <p>All</p>
//         </td>
//         <td>
//           <p>{props.good + props.neutral + props.bad}</p>
//         </td>
//       </tr>
//       <tr>
//         <td>
//           <p>Average</p>
//         </td>
//         <td>
//           <p>{((props.good + props.neutral + props.bad) / 3).toFixed(2)}</p>
//         </td>
//       </tr>
//       <tr>
//         <td>
//           <p>Postive</p>
//         </td>
//         <td>
//           <p>
//             {((props.good / (props.good + props.neutral + props.bad)) * 100).toFixed(2)} %
//           </p>
//         </td>
//       </tr>
//     </tbody>
//   );
// };

// const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const googleClickHandler = () => {
//     setGood(good + 1);
//   };

//   const neutralClickHandler = () => {
//     setNeutral(neutral + 1);
//   };

//   const badClickHandler = () => {
//     setBad(bad + 1);
//   };

//   if (good + neutral + bad === 0) {
//     return (
//       <div>
//         <Header value={"Give Feedback"} />
//         <Button text={"Good"} onClickHandler={googleClickHandler} />
//         <Button text={"Neutral"} onClickHandler={neutralClickHandler} />
//         <Button text={"Bad"} onClickHandler={badClickHandler} />
//         <p>No feedback given</p>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <Header value={"Give Feedback"} />
//       <Button text={"Good"} onClickHandler={googleClickHandler} />
//       <Button text={"Neutral"} onClickHandler={neutralClickHandler} />
//       <Button text={"Bad"} onClickHandler={badClickHandler} />
//       <Header value={"Statistics"} />
//       <Statistics good={good} neutral={neutral} bad={bad} />
//     </div>
//   );
// };

// export default App;
