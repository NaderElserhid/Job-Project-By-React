import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage"
import JobsPages from "./pages/JobsPages";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage , {jobLoader} from "./pages/JobPage"
import AddJobPage from "./pages/AddJobPage";


function App() {
  const addJob = (newJob) =>{
    console.log(newJob);
  }
  
  const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<MainLayout/>}>
  <Route index element = { <HomePage/> }  />
  <Route path="/jobs" element = { <JobsPages/> }  />
  <Route path="/add-job" element = { <AddJobPage addJobSubmit={addJob} />  }  />
  <Route path="/jobs/:id"  element = { <JobPage/> } loader={jobLoader} />
  <Route path="*" element = { <NotFoundPage/> }  />
  </Route>
   )
  );
  
  return ( <RouterProvider router={router} />
  )
}

export default App
