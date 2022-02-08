import axios from "axios";
import Container from "containers/Home/testfile";

function Home() {
  return (
    <>
      <Container />
      <button
        onClick={async () => {
          const response = await axios.get("/user");
          console.log(response);
        }}
      >
        Proxy
      </button>
    </>
  );
}

export default Home;
