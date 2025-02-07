import { addToast as onToast } from "@/core/store";

function App() {
  const handle = () => {
    onToast({
      type: "success",
      variants: "outlined",
      message: "hello",
    });
  };
  return (
    <div>
      <button onClick={handle}>toast</button>
    </div>
  );
}

export default App;
