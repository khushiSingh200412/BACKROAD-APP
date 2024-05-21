import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
// import Test from "./components/Test";
import Tours from "./components/Tours";

const App = () => {
//   const user ={
// fname: "hello",
// lname:"bye",
// age:22,
// grade:"A+",
//   };
  return (
    <>
    {/* <Test {...user}/> */}
    
      <Navbar/>
      <Header/>
      <About />
      <Services />
      <Tours />
      <Footer/>
      <script src="./js/app.js"></script>

    </>
  )
};
export default App;