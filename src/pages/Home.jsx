import Header from "../components/Header";
import MyComponent from "../components/MyComponent";
import UserCard from "../components/UserCard";
const Home = () => {
  return (
    <>
      <Header></Header>
      <UserCard
        name="Pravesh Chapagain"
        githubUrl={"https://github.com/spravesh1818"}
      />
    </>
  );
};

export default Home;
