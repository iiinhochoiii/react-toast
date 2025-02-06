import toaster from "./utils/toast";

function App() {
  return (
    <div>
      <button
        onClick={() =>
          toaster({
            message: "toast!",
            variants: "outlined",
          })
        }
      >
        toast
      </button>
    </div>
  );
}

export default App;
