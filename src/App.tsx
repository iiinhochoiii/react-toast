import onToast from "@/core/handler";

function App() {
  return (
    <div>
      <button
        onClick={() =>
          onToast({
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
