import { Link,useHistory } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import classes from './MainNavigation.module.css';
import { authAction } from '../store';

const MainNavigation = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogin = useSelector(state=>state.isLogin);
  const logoutButtonHandler = () => {
    dispatch(authAction.loggedOut());
    history.push('/auth');
  };  
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLogin && <li>
            <Link to='/auth'>Login</Link>
          </li>}
          {isLogin&&<li>
            <Link to='/profile'>Profile</Link>
          </li>}
          {isLogin&&<li>
            <button onClick={logoutButtonHandler}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
