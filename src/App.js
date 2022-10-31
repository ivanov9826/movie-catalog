import { Header } from "./components/Header/Header";
import { Router } from "./Router";
import { Footer } from "./components/Footer/Footer";
import UserProvider from "./context/UserProvider";

function App() {
  return (
    <UserProvider>
      <Header />
      <Router />
      <Footer />
    </UserProvider>
  );
}

export default App;
