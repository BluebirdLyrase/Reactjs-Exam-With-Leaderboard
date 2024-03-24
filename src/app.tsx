import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './screen/Home/Home';

export default function App() {
  console.log('TEST');
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<Exam />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

function Exam() {
  return (
    <div>
      <h2>Exam</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to='/'>Go to the home page</Link>
      </p>
    </div>
  );
}
