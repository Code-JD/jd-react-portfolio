import { faTrash, faSignOutAlt, faPencilAlt, faSpinner, faPlusSquare, faEnvelope, faLock} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
return library.add(faTrash, faSignOutAlt, faPencilAlt, faSpinner, faPlusSquare, faEnvelope, faLock);
};

export default Icons;
