import { useState, useEffect } from "react";

import AdvertisementsSrv from "../../api/service/Advertisement.service";

import useMutation from "../../hooks/useMutation";
import useComponentVisible from "../../hooks/useComponentVisible";

import TagsFilterResponsive from "./TagsFilterResponsive";

export type TagWithStatus = {
  active: boolean;
  name: string;
};
const TagsFilter = ({
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
        className="hidden lg:block md:block fixed top-[130px] mx-[1rem] bg-white rounded-[10px] shadow-md overflow-hidden min-w-[380px]"
      >
        <div className="flex h-[70px] px-[1.5rem] items-center">
          <p className="font-bold m-0 block">Tags disponibles</p>
        </div>
        <div className="max-h-[calc(100% - 158px)] overflow-auto px-[1.5rem] block">
          <div className="block">
            <form className="w-full block">
              <div className="max-w-[720px] px-[15px] mx-auto block">
                <div className="flex flex-wrap">
                  <div
                    className="flex max-w-[25%] rounded-[10px] items-center justify-center mx-2"
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
                          className="flex max-w-[25%] rounded-[10px] items-center justify-center mx-2"
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

        <div className="h-full px-[1.5rem] items center justify-end flex my-4">
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

      {/* <TagsFilterResponsive /> */}
    </>
  );
};

export default TagsFilter;
