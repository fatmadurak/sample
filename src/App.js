import Header from "./components/Header/Index";
import Content from "./components/Content/List"
import "./index.css"
import { TodoProvider } from "./Context/Context";
import Footer from "./components/Footer";

function App() {
  return (
  <TodoProvider>
  
  <section className="todoapp">
   
   <Header/>
   <Content/>


  </section>
  <Footer/>
  
  
  </TodoProvider>
  );
}

export default App;
