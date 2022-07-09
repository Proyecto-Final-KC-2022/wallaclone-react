import Avatar from "../../images/avatar.png";

const AccountButton = () => {
  return (
    <a className="h-[65px] mr-[20px] relative flex items-center whitespace-nowrap cursor-pointer hover:border-b-[3px] border-black">
      <div className="ml-[8px] inline-block">
        <div className="block relative">
          <img
            className="bg-cover bg-center rounded-[50%] object-cover min-w-[32px] h-[32px] align-middle whitespace-nowrap"
            src={Avatar}
          />
        </div>
      </div>

      <div className="left-[30px] top-[17px] h-[8px] w-[8px] rounded-[8px] bg-[#fd6c67] absolute block"></div>
      <span className="text-[.875rem] mr-[4px] ml-[12px] whitespace-nowrap">
        Tú
      </span>
    </a>
  );
};

export default AccountButton;
