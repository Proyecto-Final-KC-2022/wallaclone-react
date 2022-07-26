import AdvertisementService from "../../api/service/Advertisement.service";
import CheckboxGroup from "./CheckboxGroup";
import useQuery from "../../hooks/useQuery";

function SelectTags(props) {
  const { data: tags = [] } = useQuery(AdvertisementService.getTags);
  return <CheckboxGroup options={tags} {...props} />;
}

export default SelectTags;
