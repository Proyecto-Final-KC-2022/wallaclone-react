import { AiOutlinePlusCircle }from 'react-icons/ai'

const style = {
  uploadButtonWrapper: "flex items-center justify-center rounded-[21px] bg-blue-light border",
  uploadText: "flex"
}

const UploadButton = () => {
  return (
    <div className={style.uploadButtonWrapper}>
      <AiOutlinePlusCircle />
      <button className={style.uploadText}>
        Subir producto
      </button>
    </div>
  )
}

export default UploadButton