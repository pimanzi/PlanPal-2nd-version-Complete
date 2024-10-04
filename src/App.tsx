import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import MyTasks from "./pages/MyTasks";
import MyProject from "./pages/MyProject";
import UserSettings from "./pages/UserSettings";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="myTasks" element={<MyTasks />} />
            {/* <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<MyTeam />} />
            </Route> */}
            <Route path="projects" element={<Projects />}></Route>
            <Route path="/projects/:projectId" element={<MyProject />} />
            <Route path="user" element={<UserSettings />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff;",
            color: "#374151",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
