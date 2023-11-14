import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar";

const HomeLayout = () => {
  const navigation = useNavigation();
  const loadingPage = navigation.state === "loading";
  
  return (
    <>
      <NavBar />
      <section className="page">
        {loadingPage ? (
          <div className="loading" style={{ margin: "5rem auto" }}></div>
        ) : (
          <Outlet />
        )}
      </section>
    </>
  );
};

export default HomeLayout;
