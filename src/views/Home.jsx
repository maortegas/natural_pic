import Gallery from "../components/Gallery";

const Home = () => {

  return (
    <div className="App" >
      <h1>Natural Pic</h1>
      <Gallery  isHome={true} />
    </div>
  );
};
export default Home;