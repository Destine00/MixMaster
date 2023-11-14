import { useRouteError } from "react-router-dom";

const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);
    // console.log(error.message);
  return (
    <div>
      <h3>{error.message}</h3>

    </div>
  );
};

export default SinglePageError;
