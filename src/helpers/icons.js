import { faTrash, faSignOutAlt, faPencilAlt, faSpinner, faPlusSquare} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
return library.add(faTrash, faSignOutAlt, faPencilAlt, faSpinner, faPlusSquare);
};

export default Icons;
