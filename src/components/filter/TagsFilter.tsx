import { useState, useEffect } from "react";

import AdvertisementsSrv from "../../api/service/Advertisement.service";
import useMutation from "../../hooks/useMutation";
import useComponentVisible from "../../hooks/useComponentVisible";

import TagsFilterResponsive from "./TagsFilterResponsive";
import TagsFilterStyles from "../../styles/TagsFilterStyles";

export type TagWithStatus = {
  active: boolean;
  name: string;
};
const TagsFilter = ({
  getTagsSelected,
  closeFilter,
  initialValues,
}: {
  getTagsSelected: (tagsSelected: Array<TagWithStatus>) => void;
  closeFilter: () => void;
  initialValues: Array<TagWithStatus>;
}) => {
  const mutation = useMutation(AdvertisementsSrv.getTags);
  const [tagsStatus, setTagsStatus] = useState<Array<TagWithStatus>>([]);
  const [allTagsEnabled, setAllTagsEnabled] = useState(false);
  const { ref, isComponentVisible } = useComponentVisible(true);
  useEffect(() => {
    (async () => {
      const tagsData = await mutation.execute();
      if (tagsStatus?.length <= 0) {
        const tagsWithStatus = tagsData.map((tag) => {
          return {
            active: false,
            name: tag,
          };
        });
        if (initialValues?.length > 0 && tagsWithStatus?.length > 0) {
          tagsWithStatus.forEach((tws) => {
            initialValues.forEach((t) => {
              if (tws.name === t.name) {
                tws.active = t.active;
              }
            });
          });
        }
        setTagsStatus(tagsWithStatus);
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
      <div ref={ref} className={TagsFilterStyles.tagsFilterWrapper}>
        <div className={TagsFilterStyles.tagsFilterHeader}>
          <p className={TagsFilterStyles.tagsHeaderText}>Tags disponibles</p>
        </div>
        <div className={TagsFilterStyles.tagsFormWrapper}>
          <div className={TagsFilterStyles.tagsFormContainer}>
            <form className={TagsFilterStyles.formWrapper}>
              <div className={TagsFilterStyles.formContainer}>
                <div className={TagsFilterStyles.tagsForm}>
                  <div
                    className={TagsFilterStyles.tagsContainer}
                    onClick={toggleAllTagsStatus}
                    style={{
                      background: allTagsEnabled ? "#13c1ac" : "none",
                    }}
                  >
                    <div className={TagsFilterStyles.tagsTextContainer}>
                      <span className={TagsFilterStyles.tagsText}>Todos</span>
                    </div>
                  </div>

                  {tagsStatus?.length > 0 ? (
                    tagsStatus.map((tag, index) => {
                      return (
                        <div
                          key={index}
                          className={TagsFilterStyles.tagsContainer}
                          onClick={() => {
                            updateTagsStatus(index, !tag.active);
                          }}
                          style={{
                            background:
                              tag.active || allTagsEnabled ? "#13c1ac" : "none",
                          }}
                        >
                          <div className={TagsFilterStyles.tagsTextContainer}>
                            <span className={TagsFilterStyles.tagsText}>
                              {tag.name}
                            </span>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className={TagsFilterStyles.warningContainer}>
                      No se han podido recuperar los tags disponibles en este
                      momento.
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className={TagsFilterStyles.buttonsWrapper}>
          <button
            className={TagsFilterStyles.cancelButton}
            onClick={closeFilter}
          >
            Cancelar
          </button>
          <button
            className={TagsFilterStyles.applyButton}
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
