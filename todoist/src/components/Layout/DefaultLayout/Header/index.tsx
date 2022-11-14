import { Container, Navbar, Button, Image } from 'react-bootstrap';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faPlus, faChartLine, faCircleQuestion, faBell } from '@fortawesome/free-solid-svg-icons';
import InputSearchNavbar from './InputSeach';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

const Header = (): JSX.Element => {
    return (
        <Navbar className={cx('navbarWeb', 'primaryBg', 'sticky-top')}>
            <Container fluid>
                <div className="d-flex justify-content-between align-items-center w-100">
                    <div className="d-flex">
                        <Button variant="outline-light" className={cx('navbarBtn')}>
                            <FontAwesomeIcon icon={faBars} />
                        </Button>
                        <Button variant="outline-light" className={cx('navbarBtn')}>
                            <FontAwesomeIcon icon={faHouse} />
                        </Button>
                        <InputSearchNavbar />
                    </div>
                    <div>
                        <Button variant="outline-light" className={cx('navbarBtn')}>
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                        <Button variant="outline-light" className={cx('navbarBtn')}>
                            <FontAwesomeIcon icon={faChartLine} />
                            <span className="ms-1">0/5</span>
                        </Button>
                        <Button variant="outline-light" className={cx('navbarBtn')}>
                            <FontAwesomeIcon icon={faCircleQuestion} />
                        </Button>
                        <Button variant="outline-light" className={cx('navbarBtn')}>
                            <FontAwesomeIcon icon={faBell} />
                        </Button>
                        <Image
                            src="https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146"
                            roundedCircle
                            style={{ width: 35 }}
                        />
                    </div>
                </div>
            </Container>
        </Navbar>
    );
};
export default Header;
