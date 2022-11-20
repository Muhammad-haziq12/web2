
import { clearAuthenticatedUser } from '../../utils/auths';
import Navbar from '../Navbar/Navbar';
import Navigate from '../Routeur/Navigate';

const Logout = () => {
    clearAuthenticatedUser();
    Navbar();
    Navigate('/login');
  };

  export default Logout;