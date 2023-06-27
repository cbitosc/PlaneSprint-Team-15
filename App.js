import react from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Courseupload from './Pages/Courseupload';
import Footer from './components/Footer';
// import Qpage from './Pages/AddQuestions';
import AllcoursesAdmin from './Pages/AllcoursesAdmin';
import AddQuestions from './Pages/AddQuestions';
import AllCoursesUser from './Pages/AllCoursesUser';
import SingleQuestionUser from './components/SingleQuestionUser';
import SingleQuestionAdmin from './components/SingleQuestionAdmin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Signup/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Courseupload' element={<Courseupload/>}></Route>
          <Route path='/addquestion' element={<AddQuestions/>}></Route>
          <Route path='/allcourses' element={<AllcoursesAdmin/>}></Route>
          <Route path='/allcoursesuser' element={<AllCoursesUser/>}></Route>
          <Route path='/singlequser/:id' element={<SingleQuestionUser/>}></Route>
          <Route path='/singleqadmin/:id' element={<SingleQuestionAdmin/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
