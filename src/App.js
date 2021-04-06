import FeedMain from "./components/Feed/FeedMain";

function App() {
  return (
    <>
      {
        [...Array(10)].map((i, index) => {
          return (
            <FeedMain />
          )
        })
      }
    </>
  );
}

export default App;
