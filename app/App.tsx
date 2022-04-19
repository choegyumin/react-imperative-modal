import AppProvider from "./AppProvider";
import MyComponent from "./MyComponent";
import "./styles.css";

export default function App() {
  return (
    <AppProvider>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <MyComponent />
      </div>
    </AppProvider>
  );
}
