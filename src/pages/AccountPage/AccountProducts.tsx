import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AdvertisementsSrv from "../../api/service/Advertisement.service";
import { BsPencil, BsTrash } from "react-icons/bs";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import useQuery from "../../hooks/useQuery";
import { Advert } from "../../models/Advert.model";
import NotFoundImg from "../../images/placeholder.png";
import useMutation from "../../hooks/useMutation";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AccountProducts = () => {
  const [refreshList, setRefreshList] = useState(undefined);
  const {
    isLoading,
    error,
    data: userAdverts = [],
  } = useQuery(AdvertisementsSrv.getUserAdvertisements, null, refreshList);
  const [open, setOpen] = useState(false);
  const [advertIdsToDelete, setAdvertIdsToDelete] = useState<Array<string>>([]);

  const { isLoadingDeletion, hasErrorDeletion, executeMultipleCalls } =
    useDeleteMultipleAdverts(advertIdsToDelete);
  const executeDeletion = () => {
    setRefreshList(false);
    executeMultipleCalls()
      .then((result) => {
        console.log(result);
        setOpen(false);
        setRefreshList(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addIdsToDelete =
    (...ids: Array<string>) =>
    () => {
      setAdvertIdsToDelete((prevIds) => [...prevIds, ...ids]);
    };
  const handleOpen =
    (...ids: Array<string>) =>
    () => {
      addIdsToDelete(...ids)();
      setOpen(true);
    };
  const handleClose = () => setOpen(false);
  const toggleSelectedAdvertsToDelete = (id: string) => () => {
    const idAlreadySelected = advertIdsToDelete.find((e) => e === id);
    idAlreadySelected
      ? setAdvertIdsToDelete(
          advertIdsToDelete.filter((id) => id !== idAlreadySelected)
        )
      : addIdsToDelete(id)();
  };
  return (
    <div className="max-w-full w-full flex-1 block text-left">
      <div className="min-h-full block">
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

          <div className="mb-[1rem] flex flex-wrap mx-[-15px]">
            <div className="flex max-w-[66.6666666667%] relative w-full min-h-[1px] px-[15px] items-center grow-0 shrink-0 basis-2/3">
              <div className="overflow-hidden leading-8 inline-block w-full">
                <a className="hover:border-b-2 border-[#13c1ac] hover:text-[#13c1ac] inline-block text-[.75rem] mr-[20px] font-bold whitespace-nowrap p-0 text-left cursor-pointer">
                  EN VENTA
                </a>
              </div>
            </div>
          </div>

          {/* Meter esto en un bucle */}
          {userAdverts?.length > 0 ? (
            userAdverts.map((advert: Advert, index) => {
              return (
                <div key={index} className="h-full w-full block">
                  <div className="h-full flex flex-col bg-gray-200 rounded-[10px]">
                    <div className="max-w-[960px] w-full px-[15px] mx-auto block container">
                      <div className="block">
                        <div className="rounded-[10px]">
                          <div className="flex flex-wrap mx-[-15px]">
                            <div className="items-center justify-center flex max-w-[8.3333333333%] w-full relative min-h-[1px]">
                              <button
                                onClick={toggleSelectedAdvertsToDelete(advert._id)}
                                className="w-[24px] h-[24px] border-2 border-[#CFD8DC] rounded-[6px] bg-transparent p-0 flex items-center justify-center cursor-pointer hover:border-[#13c1ac]"
                              >
                                {/* TODO:  */}
                                {advertIdsToDelete.find(
                                  (e) => e === advert._id
                                ) ? (
                                  <ImCheckboxChecked className="overflow-hidden flex w-[23px] h-[23px] text-transparent rounded-[6px]" />
                                ) : (
                                  <ImCheckboxUnchecked className="overflow-hidden flex w-[23px] h-[23px] text-transparent rounded-[6px]" />
                                )}
                              </button>
                            </div>

                            <div className="block grow max-w-full basis-0 relative w-full min-h-[1px] px-[15px] text-left">
                              <div className="bg-white rounded-[10px] border border-1 flex flex-wrap mx-[15px]">
                                <div className="flex cursor-pointer p-0 items-center justify-center max-w-full w-full">
                                  <div className="p-[4px]">
                                    <img
                                      className="m-0 w-[80px] h-[80px] bg-cover rounded-[4px] flex relative"
                                      src={
                                        advert.image.includes(
                                          "https://wallaclone-s3-bucket.s3.amazonaws.com"
                                        )
                                          ? advert.image
                                          : NotFoundImg
                                      }
                                    />
                                  </div>

                                  <div className="basis-0 grow max-w-full w-full relative min-h-[1px] px-[15px] block">
                                    <div className="h-full items-center flex flex-wrap mx-[-15px]">
                                      <div className="cursor-pointer flex flex-col relative w-full px-[15px]">
                                        <span className="text-[1.25rem] font-bold w-full overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">
                                          {advert.name}
                                        </span>
                                        <span className="text-[1.25rem] font-bold w-full overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">
                                          {advert.price} €
                                        </span>
                                        <span className="text-[#90a4ae] max-w-[250px] w-full overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">
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
                                    <button className="w-[40px] h-[40px] rounded-[8px] mr-[8px] p-0 flex items-center justify-center border cursor-pointer hover:bg-[#36474f4d] hover:text-white">
                                      <div className="w-[24px] h-[24px] flex cursor-pointer items-center justify-center">
                                        <BsPencil className="text-[24px]" />
                                      </div>
                                    </button>

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

          {/* Fin Meter esto en un bucle */}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Borrar productos
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Se borrará el producto seleccionado.
          </Typography>
          <div className="flex gap-2 mt-4">
            <button
              className="py-[8px] px-[20px] cursor-pointer"
              onClick={handleClose}
            >
              Cancelar
            </button>
            <span> | </span>
            <button
              className="w-[40px] h-[40px] rounded-[8px] mr-[8px] p-0 flex items-center justify-center border cursor-pointer hover:bg-[#fd6c67] hover:text-white"
              onClick={executeDeletion}
            >
              <span>Borrar</span>
            </button>
          </div>
        </Box>
      </Modal>
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
