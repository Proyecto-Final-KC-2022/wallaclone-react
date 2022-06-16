import { MdOutlineEmail } from 'react-icons/md'

const style = {
    mailButtonWrapper: "flex w-full items-center justify-center text-center",
    mailButtonText: "flex text-center text-md px-2"
}

const MailBoxButton = () => {
  return (
    <div className={style.mailButtonWrapper}>
      <div className="flex mr-2">
        <MdOutlineEmail />
      </div>
      <span>Buzón</span>
    </div>
  )
}

export default MailBoxButton