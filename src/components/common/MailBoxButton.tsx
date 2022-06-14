
import { MdOutlineEmail } from 'react-icons/md'

const style = {
    mailButtonWrapper: "flex items-center justify-center",
}

const MailBoxButton = () => {
  return (
    <div className={style.mailButtonWrapper}>
        <MdOutlineEmail />
        <div>
            Buzón
        </div>
    </div>
  )
}

export default MailBoxButton