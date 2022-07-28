import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import AccountNavbar from "./AccountNavbar";
import Layout2 from "../../components/layout/Layout2";
import AccountProducts from "./AccountProducts";
import NewAdvertPage from "../UploadPage/NewAdvertPage";
import ChatPage from "./ChatPage";
import storage from "../../utils/storage";
import { parseJwt } from "../../utils/utils";
import ChatContainer from "./ChatContainer";

const AccountPage = () => {
  const auth = storage.get("auth") || storage.getSession("auth");
  const jwtToken = auth?.replace('"', "");
  const userId = parseJwt<{ _id?: string }>(jwtToken)?._id;
  return (
    <>
      <Layout2>
        <div className="min-h-[100vh] bg-gray-200 flex">
          <AccountNavbar />
          <Routes>
            <Route index element={<Profile />} />
            <Route path="products" element={<AccountProducts />} />
            <Route path="upload" element={<NewAdvertPage />} />
            <Route path="chat" element={<ChatPage currentUserId={userId}/>} />
            <Route path="chat/:currentUserId/:chatId" element={<ChatContainer />} />
          </Routes>
        </div>
      </Layout2>
    </>
  );
};

export default AccountPage;
