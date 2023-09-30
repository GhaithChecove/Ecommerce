// //// this is an example of short if 
// //////     ar.length >= 1 ? (ar.map((e,i) => {})): if false;
// //////////  


// // {
// // ar.length >= 1 ? (ar.map((e, i) => {
// //     return (
// //       <Card key={i} title={e.title}
// //         summary={e.summary} image={e.image}
// //         click={click_btn1}>

// //         {/*  these ate where we put the childrens
// //               of the card */}
// //         <h3>This is Child of the card</h3>
// //       </Card>
// //     )
// //   })) : <Alert/>

// // }





// //// the main scene of the Rotuers in react 

// {/* <BrowserRouter>
// //// this routes should contain many routes each one work as toggle key
// <Routes>  // this in older versions called switch 
//    //// this is a route which like urls in django
//   <Route path="/the path"   element = {<Component/>}  /> 
// </Routes>
// </BrowserRouter>
//  */}




// //// this is how to route and show page content using 
// //// the window.location.pathname   =='/header'
//  const Header =() => {
//   if (window.location.pathname ==='/header')
//   return  <h2>Header section</h2>
// }





// ///   use effect it works many times depending on the array which is the second param of arrow function
 
// useEffect(()=>{
//   ///  here we write our code that we want to execute by the userEffect 
//   ////  the array 

//   console.log("useeffect");
//  },)



// //// useEffect could run with  each run of and event in the handeled in the
// /// same page 



// ///////////////////   Example of useState   //////////// 

// const [salary, setSalary] = useState(0);
//     const addSalary = () => {
      
//         setSalary(salary + 1000);

//     }

//     const removeSalary = () => {
//         setSalary(salary - 1000);
//     }


//     /////////// in the useState contains two main parameters defined 
//     /////////  in the array [first_element   ,   action_on_element]  = useState( initial value)



//     ///////////////////////////////////////////////////////////////////////////////////
//     ///////////////////////////  
//     ////////////////////////////  How to create our own hooks 


    