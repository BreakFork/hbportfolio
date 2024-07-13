import Router from './components/router/singlePage/Router';


function App() {
  const data = "https://github.com/BreakFork/src/blob/main/public/data";
  
  return (
    <Router data={data} />
  )
};

export default App;
