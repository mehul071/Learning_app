import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import StudentScreen from "./Screens/StudentScreen";
import TeacherScreen from "./Screens/TeacherScreen";
import Login from "./Screens/Login";
import StudnetRegister from "./Screens/student/StudentRegister";
import TeacherRegister from "./Screens/teacher/TeacherRegister";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/teacher" exact component={TeacherScreen} />
        <Route path="/student" exact component={StudentScreen} />
        <Route path="/login" exact component={Login} />
        <Route path="/Studentregister" exact component={StudnetRegister} />
        <Route path="/Teacherregister" exact component={TeacherRegister} />
      </BrowserRouter>
    </div>
  );
}

export default App;
