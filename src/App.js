import "./App.css";
import MiscNotes from "./components/MiscNotes";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  offset: 200,
});

const App = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
      <MiscNotes />
    </div>
  );
};

export default App;
