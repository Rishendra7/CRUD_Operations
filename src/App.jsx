// import React from 'react'

// const App = () => {
//     // let ele = React.createElement("div" , {id:"demo"} ,
//     //     React.createElement("h1" ,null ,"Header"),
//     //     React.createElement("p" ,null, "para")
//     //  )
//     let x =1000;
//   return (
//  <div>
//       <h1>React</h1>
//       <p>Lorem ipsum dolor sit amet.</p>
//       {x}<br/>
//       {100*2}
//  </div>
//   )
// }

// export default App


// class Parent{
//     constructor(name , age){
//         this.name = name;
//         this.age=age;
//     }
// }

// class Child extends Parent{
//     constructor(name , age  ,city){
//         super(name , age);
//         this.city=city;
//     }
// }

// ! class based component
// import React from "react";
// class App extends React.Component{
//     render(){
//         return(
//             <h1>Class Component</h1>
//         )
//     }
// };
// export default App;

// function App(){
//     return(
//         <h1>Function component</h1>
//     )
// }
// export default App;

// ! component composition example
// import Navbar from "./components/Navbar";
// import Main from "./components/Main"
// import Sidebar1 from "./components/Sidebar1";
// import Sidebar2 from "./components/Sidebar2";
// import Footer from "./components/Footer";
// const App=()=>{
//     return(
//         <div className="app">
//           <Navbar/>
//           <Main></Main>
//           <div className="sidebar">
//             <Sidebar1/>
//             <Sidebar2/>
//           </div>
//           <Footer/>
//         </div>
//     )
// }

// export default App;




// // // import React, {Component} from 'react';
// // // // import './App.css';
// // // import CBCPropsex from './propsexample/CBCPropsex';

// // // class App extends Component {
// // //   render() {
// // //     return(
// // //       <div>App
// // //         <hr/>
// // //         <CBCPropsex
// // //         username="Shan"
// // //         age={21}
// // //         desig={['Developer', 'Designer']}
// // //         userDetails={{city: "Hyd", area: "Maisammaguda"}}
// // //         sendFun={function(){alert('Hello this is from parent component')}}
// // //         />
// // //       </div>
// // //     )
// // //   }
// // // }
// // // export default App;


// // import React from 'react'
// // import FBCPropsex from './propsexample/FBCPropsex';

// // const App = () => {
// //   return (
// //     <div>
// //       <FBCPropsex
// //       username="Shan"
// //       isLoggedIn={true}
// //       hobbies={['Playing', 'Travelling', 'Watching series']}
// //       />
// //     </div>
// //   )
// // }

// // export default App


// import React from 'react'
// import PropsChildrenEx from './propsexample/PropsChildrenEx'
// import Childprops from './propsexample/Childprops'

// const App = () => {
//   return (
//     <div>
//       <PropsChildrenEx username="Shan" company="Meta">
//         <h1>This data is passed as props children</h1>
//         <Childprops/>
//       </PropsChildrenEx>
//     </div>
//   )
// }

// export default App

import React from 'react'
// import CBCStateEx from './Stateexamples/CBCStateEx';
import RefExamples from './hooks/RefExamples';
const App = () => {
  return (
    <div>
      <hr />
      {/* <h1>App</h1> */}
      {/* <CBCStateEx/> */}
      <RefExamples/>
    </div>
  )
}

export default App






// import React from 'react'
// import FBCStateEx from './Stateexamples/FBCStateEx';

// const App = () => {
//   return (
//     <div>
//       <hr />
//       <h1>App</h1>
//       <FBCStateEx/>
//     </div>
//   )
// }

// export default App
