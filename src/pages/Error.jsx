import Wrapper from "../assets/wrappers/ErrorPage";
import { useRouteError, Link } from "react-router-dom";
import ErrorImg from '../assets/not-found.svg'

const Error = () => {
  const error = useRouteError()
  if (error.status === 404) {
    return <Wrapper>
      <div>
        <img src={ErrorImg} alt="not-found" />
        <h3>Oops!</h3>
        <p>Sorry the page you are looking for is not available</p>
        <Link to="/">back to home</Link>
      </div>
    </Wrapper>
  }
  return (
    <h1></h1>
  );
};

export default Error;
