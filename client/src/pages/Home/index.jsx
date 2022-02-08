import axios from "axios";
import Container from "containers/Home/testfile";

function Home() {
  return (
    <>
      <Container />
      <button
        onClick={async () => {
          const response = await axios.post("/users/login", {
            email: 123,
            password: 123,
          });

          // const response2 = await axios.get("/auth");
          // console.log(response2);
          console.log(response);
        }}
      >
        Proxy
      </button>
    </>
  );
}

export default Home;
