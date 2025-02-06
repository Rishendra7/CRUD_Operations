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
import CBCStateEx from './Stateexamples/CBCStateEx';

const App = () => {
  return (
    <div>
      <hr />
      <h1>App</h1>
      <CBCStateEx/>
    </div>
  )
}

export default App
