import { useState, useEffect } from "react";

import AdvertisementsSrv from "../../api/service/Advertisement.service";

import useMutation from "../../hooks/useMutation";
import useComponentVisible from "../../hooks/useComponentVisible";

export type TagWithStatus = {
  active: boolean;
  name: string;
};

const TagsFilterResponsive = ({
  getTagsSelected,
  closeFilter,
}: {
  getTagsSelected: (tagsSelected: Array<TagWithStatus>) => void;
  closeFilter: () => void;
}) => {
  const mutation = useMutation(AdvertisementsSrv.getTags);
  const [tagsStatus, setTagsStatus] = useState<Array<TagWithStatus>>([]);
  const [allTagsEnabled, setAllTagsEnabled] = useState(false);
  const { ref, isComponentVisible } = useComponentVisible(true);
  useEffect(() => {
    (async () => {
      const tagsData = await mutation.execute();
      if (tagsStatus?.length <= 0) {
        setTagsStatus(
          tagsData.map((tag) => {
            return {
              active: false,
              name: tag,
            };
          })
        );
      }
    })();
  }, []);

  useEffect(() => {
    if (!isComponentVisible) {
      closeFilter();
    }
  }, [isComponentVisible]);

  const updateTagsStatus = (index: number, isActive: boolean) => {
    const tagsCopy = [...tagsStatus];
    tagsCopy[index].active = isActive;
    setTagsStatus(tagsCopy);
    setAllTagsEnabled(false);
  };
  const toggleAllTagsStatus = () => {
    const tagsCopy = [...tagsStatus];
    tagsCopy.forEach((tag) => (tag.active = !allTagsEnabled));
    setTagsStatus(tagsCopy);
    setAllTagsEnabled(!allTagsEnabled);
  };

  const emitTagsSelected = () => {
    const tagsSelected = tagsStatus.filter((t) => t.active);
    getTagsSelected(tagsSelected);
  };
  return (
    <>
      <div
        ref={ref}
        className="block md:hidden left-0 right-0 top-[66px] w-full h-full min-w-auto fixed bg-white overflow-hidden"
      >
        <div className="flex h-[70px] px-[1.5rem] items-center">
          <p className="text-black font-bold m-0 block">Tags disponibles</p>
        </div>
        <div className="max-h-[calc(100% - 158px)] overflow-auto px-[1.5rem] block">
          <div className="block">
            <form className="w-full block">
              <div className="max-w-[540px] w-full px-[15px] mx-auto block">
                <div className="flex flex-wrap">
                  <div
                    className="flex max-w-[25%]"
                    onClick={toggleAllTagsStatus}
                    style={{
                      background: allTagsEnabled ? "#13c1ac" : "none",
                    }}
                  >
                    <div className="min-h-[96px] cursor-pointer p-[0.5rem] items-center justify-center flex-col flex hover:bg-[#13c1ac] rounded-[10px] hover:text-white">
                      <span className="mt-[5px] text-[.875rem] text-center cursor-pointer">
                        Todos
                      </span>
                    </div>
                  </div>

                  {tagsStatus?.length > 0 ? (
                    tagsStatus.map((tag, index) => {
                      return (
                        <div
                          key={index}
                          className="flex max-w-[25%]"
                          onClick={() => {
                            updateTagsStatus(index, !tag.active);
                          }}
                          style={{
                            background:
                              tag.active || allTagsEnabled ? "#13c1ac" : "none",
                          }}
                        >
                          <div className="min-h-[96px] cursor-pointer p-[0.5rem] items-center justify-center flex-col flex hover:bg-[#13c1ac] rounded-[10px] hover:text-white">
                            <span className="mt-[5px] text-[.875rem] text-center cursor-pointer">
                              {tag.name}
                            </span>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="flex items-center rounded-[10px] border p-[0.5rem] text-red-400">
                      No se han podido recuperar los tags disponibles en este
                      momento.
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="h-[48px] px-[1.5rem] items center justify-end flex">
          <button
            className="bg-transparent py-[8px] cursor-pointer mr-4"
            onClick={closeFilter}
          >
            Cancelar
          </button>

          <button
            className="py-[8px] cursor-pointer text-white px-[20px] rounded-[25px] bg-[#13c1ac] hover:bg-[#0f9989] border border-[#13c1ac]"
            onClick={emitTagsSelected}
          >
            Aplicar
          </button>
        </div>
      </div>
    </>
  );
};

export default TagsFilterResponsive;
