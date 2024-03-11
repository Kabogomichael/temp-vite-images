import Gallery from "./components/Gallery";
import SearchForm from "./components/SearchForm";
import ThemToggle from "./components/ThemToggle";

const App = () => {
  return <main>
    <ThemToggle />
    <SearchForm />
    <Gallery />
  </main>
};
export default App;
