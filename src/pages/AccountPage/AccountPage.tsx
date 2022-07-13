import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import AccountNavbar from "./AccountNavbar";
import Layout2 from "../../components/layout/Layout2";
import AccountProducts from "./AccountProducts";
import UploadPage from "../UploadPage/UploadPage";

const AccountPage = () => {
  return (
    <>
      <Layout2>
        <div className="min-h-[100vh] bg-gray-200 flex">
          <AccountNavbar />
          <Routes>
            <Route index element={<Profile />} />
            <Route path="products" element={<AccountProducts />} />
            <Route path="upload" element={<UploadPage />} />
          </Routes>
        </div>
      </Layout2>
    </>
  );
};

export default AccountPage;
