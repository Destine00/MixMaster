import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  CockTail,
  Error,
  HomeLayout,
  Landing,
  NewsLetter,
  SinglePageError,
} from "./pages";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCockTailLoader } from "./pages/CockTail";
import { action as newsLetterAction } from "./pages/NewsLetter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const App = () => {
  const router = createBrowserRouter([
    {
      element: <HomeLayout />,
      path: "/",
      errorElement: <Error />,
      children: [
        {
          element: <Landing />,
          index: true,
          errorElement: <SinglePageError />,
          loader: landingLoader(queryClient),
        },
        {
          element: <CockTail />,
          path: "cocktail/:id",
          errorElement: <SinglePageError />,
          loader: singleCockTailLoader(queryClient),
        },
        {
          element: <NewsLetter />,
          path: "newsletter",
          action: newsLetterAction,
        },
        {
          element: <About />,
          path: "about",
        },
      ],
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};
export default App;
