import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../contexts/userContext';

const useProtectedRoutes = () => {
  const [user] = useContext(UserContext);

  if (user) {
    return;
  }

  const navigate = useNavigate();

  navigate('/');
};

export default useProtectedRoutes;
