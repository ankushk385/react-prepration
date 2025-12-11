import "./App.css";
import Hello from "./component/Hello";

function App() {
  const withLogger = (WrappedComponent) => {
    return function (props) {
      console.log(`redering componet with props`, props);
      return <WrappedComponent {...props} />;
    };
  };

  const Ankush = withLogger(Hello);
  const Kumar = withLogger(Hello);

  return (
    <>
      <Ankush name="Ankush" />
      <Kumar name="kumar" />
    </>
  );
}

export default App;
