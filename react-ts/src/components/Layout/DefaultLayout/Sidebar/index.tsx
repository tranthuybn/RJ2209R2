import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faCalendarWeek, faCalendarDay, faGrip } from '@fortawesome/free-solid-svg-icons';

import { ListGroup, Badge } from 'react-bootstrap';
const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrap')}>
            <ListGroup className={cx('listGroup')}>
                <Link className={cx('category')} to="/inbox">
                    <ListGroup.Item className={cx('listGroup-item')}>
                        <div className="d-flex align-items-center ms-2 me-auto">
                            <FontAwesomeIcon className="text-primary" icon={faInbox} />
                            <div className={cx('ms-2')}>Inbox</div>
                        </div>
                        <Badge className={cx('number')} bg="transparent" pill></Badge>
                    </ListGroup.Item>
                </Link>
                <Link className={cx('category')} to="/today">
                    <ListGroup.Item className={cx('listGroup-item')}>
                        <div className="d-flex align-items-center ms-2 me-auto">
                            <FontAwesomeIcon className="text-success" icon={faCalendarWeek} />
                            <div className={cx('ms-2')}>Today</div>
                        </div>
                        <Badge className={cx('number')} bg="transparent" pill></Badge>
                    </ListGroup.Item>
                </Link>
                <Link className={cx('category')} to="/upcoming">
                    <ListGroup.Item className={cx('listGroup-item')}>
                        <div className="d-flex align-items-center ms-2 me-auto">
                            <FontAwesomeIcon className="text-danger" icon={faCalendarDay} />
                            <div className={cx('ms-2')}>Upcoming</div>
                        </div>
                        <Badge className={cx('number')} bg="transparent" pill></Badge>
                    </ListGroup.Item>
                </Link>
                <Link className={cx('category')} to="/filterLabels">
                    <ListGroup.Item className={cx('listGroup-item')}>
                        <div className="d-flex align-items-center ms-2 me-auto">
                            <FontAwesomeIcon className="text-warning" icon={faGrip} />
                            <div className={cx('ms-2')}>Filters & Labels</div>
                        </div>
                        <Badge className={cx('number')} bg="transparent" pill>
                            2
                        </Badge>
                    </ListGroup.Item>
                </Link>
            </ListGroup>
        </div>
    );
}

export default Sidebar;
