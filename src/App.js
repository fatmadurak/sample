import Header from "./components/Header/Index";
import Content from "./components/Content/Index"
import "./index.css"
import { TodoProvider } from "./Context/Context";

function App() {
  return (
  <TodoProvider>
  
  <section className="todoapp">
   
   <Header/>
   <Content/>


  </section>
  
  
  
  </TodoProvider>
  );
}

export default App;
