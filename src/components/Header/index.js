import './style.scss';
import logo from '../../assets/images/logo-github.png'

export default function Header() {
    return (
        <div className='app-header'>
            <img src={logo} alt="github logo" />
        </div>
    );
}