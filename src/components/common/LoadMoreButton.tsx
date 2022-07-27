import LoadMoreButtonStyles from "../../styles/LoadMoreButtonStyles";

export const LoadMoreButton = ({ onClickFn }) => {
  return (
    <button onClick={onClickFn} className={LoadMoreButtonStyles.loadMoreButton}>
      Ver más productos
    </button>
  );
};
