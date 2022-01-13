// spotify api
import { getTokenFromResponse } from "./spotify";

// components
import Login from "./components/Login";

function App() {

  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
