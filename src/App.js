import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./admin_template/Layouts/Sidebar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import './admin_template/asset/css/dashboard.css'
import "./admin_template/asset/css/custom.css"
import Navbar from "./admin_template/Layouts/Navbar";
import Footer from './admin_template/Layouts/Footer'
import Form from "./admin_template/component/Form";
import Task from "./admin_template/component/Task";
import TaskDetail from "./admin_template/component/TaskDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <HashRouter> */}
        <div className="wrapper">
          <Sidebar />
          <div className="main">
            <Navbar />
            <main className="content">
              <Routes>
                <Route>
                  <Route path="/form" element={<Form />} />
                  <Route path="/task" element={<Task />} />
                  <Route path="/taskdetail" element={<TaskDetail />} />
                  {/* <Route path="/users/about" element={< />} >
                    <Route path="/users/about/education" element={<EducationComponent />} />
                    <Route path="/users/about/job" element={<JobComponent />} />
                  </Route> */}
                  {/* <Route path="/posts" element={<PostComponent />} />
                  <Route path="/create-post" element={<PostForm />} />
                  <Route path="/counter" element={<Counter />} /> */}
                </Route>
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
        {/* </HashRouter> */}
      </BrowserRouter >

    </>
  );
}

export default App;
