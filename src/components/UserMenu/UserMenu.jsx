import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../Redux/auth/auth-selectors';
import authOperations from '../../Redux/auth/auth-operations';
import { Navbar, Button } from 'react-bootstrap';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text className="me-3">Welcome, {name}!</Navbar.Text>
      <Button
        variant="outline-success"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
    </Navbar.Collapse>
  );
}
