import { Outlet, Route, Routes } from "react-router-dom";
import { CompleteRecipe } from "./pages/CompleteRecipe";
import { HomePage } from "./pages/HomePage";
import "./index.css";
// import { MainMenu } from "./components/MainMenu";
import { Profile } from "./pages/Profile";
// import SearchPage from "./pages/SearchPage";
import { NotificationPage } from "./pages/NotificationPage";
import { MainMenu } from "./components/MainMenu";
// import Container from "./components/wrapper/Container";
import { Box } from "@chakra-ui/react";
// import { connect } from "react-redux";
const RootElement = () => {
  return (
    <Box
      position={"relative"}
      overflow={"hidden"}
      maxW={"100vw"}
      display={"grid"}
      gridTemplateColumns={["1fr", "max-content calc(100vw - 93.16px)"]}
      // gap={10}
      height={"100vh"}
    >
      <MainMenu />
      <Box height={"100%"} overflow={"scroll"}>
        <Outlet />
      </Box>
    </Box>
  );
};
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootElement />}>
          <Route index element={<HomePage />} />
          <Route path="notification" element={<NotificationPage />} />
          <Route path="completeRecipe" element={<CompleteRecipe />} />
          <Route path="user" element={<Profile />} />
        </Route>
        {/* <Route path="search" element={<SearchPage store={store} />} /> */}
      </Routes>
      {/* <MainMenu /> */}
    </>
  );
}

// const mapStateToProps = (store: unknown) => {
//   return {
//     store: store,
//   };
// };

// const App = connect(mapStateToProps)(A);
export default App;
