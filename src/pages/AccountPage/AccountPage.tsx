import Profile from "./Profile";
import AccountNavbar from "./AccountNavbar";
import Layout2 from "../../components/layout/Layout2";
import AccountProducts from "./AccountProducts";

const AccountPage = () => {
  return (
    <>
      <Layout2>
        <div className="min-h-[100vh] bg-gray-200 flex">
          <AccountNavbar />
          {/* <Profile /> */}
          <AccountProducts />
        </div>
      </Layout2>
    </>
  );
};

export default AccountPage;
