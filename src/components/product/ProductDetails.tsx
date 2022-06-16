const style = {}

const ProductDetails = () => {
  return (
    <div className="flex-col h-full cursor-pointer">
      <div className="flex-col w-[416px] pr-[16px] pl-[12px]">
        <div className="m-0 p-0 block">
          <span className="block font-[700] text-[1.25rem] text-[#253238] mt-[10px] mb-[2px]">
            Precio
          </span>
        </div>
        <span className="block mb-[2px] text-[1rem] text-[#253238] overflow-hidden">
          Nombre del producto
        </span>
        <ul className="flex overflow-hidden text-[.875rem] list-none gap-2">
          <li>Tags</li>
          <li>Tags</li>
        </ul>
        <p className="relative overflow-hidden text-[#90A4AE] text-[.875rem]">
          Descripción del producto.
        </p>
      </div>
    </div>
  )
}

export default ProductDetails