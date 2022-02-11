import { useSelector} from 'react-redux';

const Another = () => {

    const user = useSelector(store => store.user);
    console.log('In AnotherComponent.js, User:', user);

    return (
        <div></div>
    );
};

export default Another;