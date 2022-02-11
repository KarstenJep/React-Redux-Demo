import { useSelector} from 'react-redux';

const Header = () => {

    const user = useSelector(store => store.user);
    console.log('In Header.js, User:', user);

    return (
        <div>
            <h1>Awesome App</h1>
            <hr />
        </div>
    );
};

export default Header;