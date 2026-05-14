import IntroLoader from "./components/IntroLoader";
import AutoJourney from "./components/AutoJourney";
import AmbientSound from "./components/AmbientSound";
import BookingRequest from "./components/BookingRequest";
import "./App.css";

function App() {
  const currentPath = window.location.pathname;

  if (currentPath === "/appointments" || currentPath === "/book") {
    return (
      <>
        <BookingRequest />
        <AmbientSound />
      </>
    );
  }

  return (
    <>
      <IntroLoader />
      <AutoJourney />
      <AmbientSound />
    </>
  );
}

export default App;
