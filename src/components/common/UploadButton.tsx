import { AiFillPlusCircle }from 'react-icons/ai'

const style = {
  uploadButtonWrapper: "flex w-full items-center justify-center text-center bg-[#13c1ac] hover:bg-[#0f9989] text-white rounded-[21px] border border-[#13c1ac] px-2 h-[42px]",
  uploadText: "flex text-center text-md px-2"
}

const UploadButton = () => {
  return (
    <button className={style.uploadButtonWrapper}>
      <div className="flex mr-2">
        <AiFillPlusCircle />
      </div>
      <span className={style.uploadText}>Subir producto</span>
    </button>
  )
}

export default UploadButton