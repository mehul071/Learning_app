import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header";
import Studentlogin from "./Screens/student/Studentlogin";
import Teacherlogin from "./Screens/teacher/Teacherlogin";
import StudnetRegister from "./Screens/student/StudentRegistration";
import TeacherRegister from "./Screens/teacher/TeacherRegisteration";
import TeacherScreen from "./Screens/teacher/Teacherscreen";
import StudentScreen from "./Screens/student/Studentscreen";
import AddCourse from "./Screens/teacher/Addcourse";
import EditCourse from "./Screens/teacher/Editcoursescreen";
import HomeScreen from "./Screens/HomeScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route path="/home" exact component={HomeScreen} />
        <Route path="/teacherlogin" exact component={Teacherlogin} />
        <Route path="/studentlogin" exact component={Studentlogin} />
        <Route path="/Studentregister" exact component={StudnetRegister} />
        <Route path="/Teacherregister" exact component={TeacherRegister} />
        <Route path="/studentscreen" exact component={StudentScreen} />
        <Route path="/teacherscreen" exact component={TeacherScreen} />
        <Route path="/addcourse" exact component={AddCourse} />
        <Route path="/editcourse/:courseid" exact component={EditCourse} />
      </BrowserRouter>
    </div>
  );
}

export default App;
