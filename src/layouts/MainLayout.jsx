import Topbar from "./Topbar";

const MainLayout = ({children}) => {
  return (
    <>
    <Topbar />
    {children}
  </>
  );
}

export default MainLayout;
