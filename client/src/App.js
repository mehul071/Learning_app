import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Studentlogin from "./Screens/student/Studentlogin";
import Teacherlogin from "./Screens/teacher/Teacherlogin";
import StudnetRegister from "./Screens/student/StudentRegistration";
import TeacherRegister from "./Screens/teacher/TeacherRegisteration";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/teacherlogin" exact component={Teacherlogin} />
        <Route path="/studentlogin" exact component={Studentlogin} />
        <Route path="/Studentregister" exact component={StudnetRegister} />
        <Route path="/Teacherregister" exact component={TeacherRegister} />
      </BrowserRouter>
    </div>
  );
}

export default App;
