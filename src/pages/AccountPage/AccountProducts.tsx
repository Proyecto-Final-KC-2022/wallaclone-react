import AdvertisementsSrv from "../../api/service/Advertisement.service";
import Modal from "@mui/material/Modal";
import { BsPencil, BsTrash } from "react-icons/bs";
import useQuery from "../../hooks/useQuery";
import { Advert } from "../../models/Advert.model";
import NotFoundImg from "../../images/placeholder.png";
import { useCallback, useState } from "react";
import Spinner from "../../components/spinner/Spinner";

const AccountProducts = () => {
  const [refreshList, setRefreshList] = useState(undefined);
  const {
    isLoading,
    error,
    data: userAdverts = [],
  } = useQuery(AdvertisementsSrv.getUserAdvertisements, null, refreshList);
  const [open, setOpen] = useState(false);
  const [advertIdsToDelete, setAdvertIdsToDelete] = useState<Array<string>>([]);
  const allAdvertsIds = userAdverts.map((ad) => ad._id);
  const allAdvertsAreSelected =
    allAdvertsIds.filter((ad) => !advertIdsToDelete.includes(ad))?.length === 0;
  const { isLoadingDeletion, hasErrorDeletion, executeMultipleCalls } =
    useDeleteMultipleAdverts(advertIdsToDelete);
  const executeDeletion = () => {
    setRefreshList(false);
    executeMultipleCalls()
      .then((result) => {
        console.log(result);
        setOpen(false);
        setRefreshList(true);
        setAdvertIdsToDelete([]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addIdsToDelete =
    (overwriteIds = false, ...ids: Array<string>) =>
    () => {
      overwriteIds
        ? setAdvertIdsToDelete((prevIds) => [...prevIds, ...ids])
        : setAdvertIdsToDelete([...ids]);
    };
  const handleOpen =
    (...ids: Array<string>) =>
    () => {
      addIdsToDelete(false, ...ids)();
      setOpen(true);
    };
  const handleClose = () => setOpen(false);
  const toggleSelectedAdvertsToDelete =
    (id: string, toggleAll = false) =>
    () => {
      if (!toggleAll) {
        const idAlreadySelected = advertIdsToDelete.find((e) => e === id);
        idAlreadySelected
          ? setAdvertIdsToDelete(
              advertIdsToDelete.filter((id) => id !== idAlreadySelected)
            )
          : addIdsToDelete(true, id)();
      } else {
        allAdvertsAreSelected
          ? setAdvertIdsToDelete([])
          : addIdsToDelete(false, ...allAdvertsIds)();
      }
    };

  return (
    <div className="max-w-full w-full flex-1 block text-left">
      {!isLoading && !isLoadingDeletion && !error && (
        <>
          <div className="min-h-full h-full block">
            <div className="py-[32px] max-w-[960px] w-full px-[15px] mx-auto block">
              <div className="mb-[1rem] flex flex-wrap mx-[-15px]">
                <div className="flex flex-col max-w-[75%] relative w-full min-h-[1px] px-[15px]">
                  <div className="flex items-center">
                    <h1 className="text-[1.375rem] text-[#253238] font-bold flex items-center mt-0 mb-[0.5rem]">
                      <span className="mr-[12px] text-left">Tus productos</span>
                    </h1>
                  </div>
                  <div className="flex items-center">
                    <h4 className="text-[.875rem] text-[#607d8b] mb-0 leading-5 font-normal block">
                      Aquí podrás subir productos, gestionar los que ya tienes y
                      destacarlos para venderlos antes
                    </h4>
                  </div>
                </div>
              </div>

              {/* <div className="mb-[1rem] flex flex-wrap mx-[-15px]">
            <div className="flex max-w-[66.6666666667%] relative w-full min-h-[1px] px-[15px] items-center grow-0 shrink-0 basis-2/3">
              <div className="overflow-hidden leading-8 inline-block w-full">
                <a className="hover:border-b-2 border-[#13c1ac] hover:text-[#13c1ac] inline-block text-[.75rem] mr-[20px] font-bold whitespace-nowrap p-0 text-left cursor-pointer">
                  EN VENTA
                </a>
              </div>
            </div>
          </div> */}

              <div className="h-full w-full block py-2">
                <div className="h-full flex bg-gray-200 rounded-[10px]">
                  <div className="max-w-[960px] w-full px-[15px] mx-auto block container">
                    <div className="block">
                      <div className="rounded-[10px]">
                        {userAdverts?.length > 0 && (
                          <div
                            style={{ display: "flex" }}
                            className="flex mx-[-15px] mb-4"
                          >
                            <div className="items-center justify-center flex max-w-[8.3333333333%] w-full relative min-h-[1px] text-center">
                              <div className="w-[24px] h-[24px] border-2 border-[#CFD8DC] rounded-[6px] bg-transparent p-0 flex items-center justify-center cursor-pointer hover:border-[#13c1ac]">
                                <input
                                  id="selectAll"
                                  name="selectAll"
                                  className="overflow-hidden flex w-[22px] h-[22px] rounded-[6px]"
                                  type="checkbox"
                                  checked={allAdvertsAreSelected}
                                  onChange={toggleSelectedAdvertsToDelete(
                                    null,
                                    true
                                  )}
                                />
                                {/* <label htmlFor="selectAll">Seleccionar Todos</label> */}
                              </div>
                            </div>

                            <div className="inline-block text-[1rem] font-bold whitespace-nowrap p-0 text-left">
                              Seleccionar Todos
                            </div>
                          </div>
                        )}

                        {userAdverts?.length > 0 ? (
                          userAdverts.map((advert: Advert, index) => {
                            return (
                              <div key={index} className="flex mx-[-15px]">
                                <div className="items-center justify-center flex max-w-[8.3333333333%] w-full relative min-h-[1px] text-center">
                                  <div className="w-[24px] h-[24px] border-2 border-[#CFD8DC] rounded-[6px] bg-transparent p-0 flex items-center justify-center cursor-pointer hover:border-[#13c1ac]">
                                    <input
                                      className="overflow-hidden flex w-[22px] h-[22px] rounded-[6px]"
                                      type="checkbox"
                                      checked={advertIdsToDelete.some(
                                        (e) => e === advert._id
                                      )}
                                      onChange={toggleSelectedAdvertsToDelete(
                                        advert._id
                                      )}
                                    />
                                  </div>
                                </div>

                                <div className="block grow max-w-full basis-0 relative w-full min-h-[1px] text-left">
                                  <div className="bg-white rounded-[10px] border border-1 flex ">
                                    <div className="flex cursor-pointer p-0 items-center justify-center max-w-full w-full">
                                      <div className="p-[4px]">
                                        <img
                                          className="m-0 lg:w-[80px] w-full lg:h-[80px] h-full bg-cover rounded-[4px] relative hidden lg:flex"
                                          src={
                                            advert.image.includes(
                                              "https://wallaclone-s3-bucket.s3.amazonaws.com"
                                            )
                                              ? advert.image
                                              : NotFoundImg
                                          }
                                        />
                                      </div>

                                      <div className="basis-0 grow max-w-full w-full relative min-h-[1px] block">
                                        <div className="h-full items-center flex flex-wrap mx-[-15px]">
                                          <div className="cursor-pointer flex flex-col relative w-full px-[15px]">
                                            <span className="text-[1.25rem] font-bold w-full overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">
                                              {advert.name}
                                            </span>
                                            <span className="text-[1.25rem] font-bold w-full overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">
                                              {advert.price} €
                                            </span>
                                            <span className="text-[#90a4ae] max-w-[250px] xl:w-full w-[110px] overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">
                                              {advert.description}
                                            </span>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="basis-0 grow max-w-full w-full relative min-h-[1px] px-[15px] block">
                                        <div className="h-full items-center flex flex-wrap mx-[-15px]">
                                          <div className="cursor-pointer flex flex-col relative w-full px-[15px]">
                                            <span className="text-[0.875rem] w-full overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">
                                              {advert.forSale
                                                ? "En venta"
                                                : "Se busca"}
                                            </span>
                                            <span className="text-[#90a4ae] max-w-[250px] w-full overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">
                                              {advert.creationDate}
                                            </span>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="flex justify-end items-center max-w-[33.3333333333%] w-full relative min-h-[1px] px-[15px]">
                                        {/* <button className="w-[40px] h-[40px] rounded-[8px] mr-[8px] p-0 flex items-center justify-center border cursor-pointer hover:bg-[#36474f4d] hover:text-white">
                                      <div className="w-[24px] h-[24px] flex cursor-pointer items-center justify-center">
                                        <BsPencil className="text-[24px]" />
                                      </div>
                                    </button> */}

                                        <button
                                          className="w-[40px] h-[40px] rounded-[8px] mr-[8px] p-0 flex items-center justify-center border cursor-pointer hover:bg-[#fd6c67] hover:text-white"
                                          onClick={handleOpen(advert._id)}
                                        >
                                          <div className="w-[24px] h-[24px] flex cursor-pointer items-center justify-center">
                                            <BsTrash className="text-[24px]" />
                                          </div>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <p>No tienes anuncios que gestionar</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {userAdverts?.length > 0 && (
                <div className="sticky bottom-0 z-20 mt-auto block">
                  <div className="bg-white border-t-2 border-gray-200 h-[100px] block rounded-[10px]">
                    <div className="h-full max-w-[960px] w-full px-[15px] mx-auto block">
                      <div className="h-full justify-around flex">
                        <div className="ml-auto items-center justify-end flex">
                          <div className="items-center flex">
                            <button
                              disabled={advertIdsToDelete.length <= 0}
                              onClick={() => setOpen(true)}
                              className={`px-[12px] py-[12px] ${
                                advertIdsToDelete.length <= 0
                                  ? "cursor-not-allowed"
                                  : ""
                              } w-[120px] mr-[12px] border rounded-[10px] bg-white text-[.875rem] text-[#607d8b] items-center justify-center flex overflow-visible m-0`}
                            >
                              <div className="w-[24px] h-[24px] flex items-center justify-center">
                                <BsTrash className="text-[20px]" />
                              </div>
                              <span className="ml-2">Borrar</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <Modal open={open} onClose={handleClose}>
            <div className="absolute top-[30%] right-[50%] translate-x-1/2 translate-y-1/2 w-[400px] bg-white rounded-[8px] p-4">
              <div className="p-[20px] relative flex-1 block">
                <h2 className="font-bold text-[1rem] text-[#253238]">
                  Borrar productos
                </h2>
                <p className="mt-[16px] text-[.875rem] text-[#253238]">
                  {advertIdsToDelete.length && advertIdsToDelete.length > 1
                    ? `¿Estás seguro de que deseas eliminar permanentemente ${advertIdsToDelete.length} anuncios seleccionados?`
                    : `Estás seguro de que deseas eliminar permanentemente el anuncios seleccionado?`}
                </p>
              </div>
              <div className="p-[20px] flex items-center justify-end mt-4">
                <button
                  className="text-[#253238] pr-[20px] cursor-pointer"
                  onClick={handleClose}
                >
                  Cancelar
                </button>
                <span> | </span>
                <button
                  className="text-[#fd6c67] pl-[20px] cursor-pointer"
                  onClick={executeDeletion}
                >
                  Borrar
                </button>
              </div>
            </div>
          </Modal>
        </>
      )}

      {error && !isLoading && (
        // <Toast bg="danger" onClose={() => dispatch(uiResetError())}>
        //   <Toast.Header>
        <strong className="me-auto">Error </strong>
        //   </Toast.Header>
        //   <Toast.Body>Se ha producido un error en la aplicación.</Toast.Body>
        // </Toast>
      )}
      {isLoading && (
        <div className="flex justify-center bg-gray-200 py-4 h-full">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default AccountProducts;
function useDeleteMultipleAdverts(advertIdsToDelete: string[]) {
  const [isLoadingDeletion, setIsLoadingDeletion] = useState(false);
  const [hasErrorDeletion, setHasErrorDeletion] = useState<string>(null);
  const executeMultipleCalls = useCallback(async () => {
    if (advertIdsToDelete?.length > 0) {
      try {
        setIsLoadingDeletion(true);
        const results = await AdvertisementsSrv.deleteAdverts({
          advertisementsIds: advertIdsToDelete,
        });
        return results;
      } catch {
        setHasErrorDeletion(
          "Se ha producido un error al intentar eliminar uno o más anuncios."
        );
      } finally {
        setIsLoadingDeletion(false);
      }
    }
  }, [AdvertisementsSrv.deleteAdverts, advertIdsToDelete]);
  return {
    isLoadingDeletion,
    hasErrorDeletion,
    executeMultipleCalls,
  };
}
