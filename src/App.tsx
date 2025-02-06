import toaster from "./utils/toast";

function App() {
  return (
    <div>
      <button
        onClick={() =>
          toaster({
            message: "toast!",
          })
        }
      >
        toast
      </button>
    </div>
  );
}

export default App;
