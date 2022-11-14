import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleQuestion, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './InputSeach.module.scss';

const cx = classNames.bind(styles);

const InputSearchNavbar = () => {
    const [focus, setFocus] = useState(false);
    const handleFocus = () => {
        setFocus(!focus);
    };
    return (
        <>
            {focus ? (
                <InputGroup
                    className={cx('inputSearchWrap', 'inputSearch--focus', 'rounded-1')}
                    size="sm"
                    onBlur={handleFocus}
                    onFocus={handleFocus}
                >
                    <Button size="sm" variant="outline-light" className={cx('btnSearch', 'btnNav')} id="btnSearch">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button>
                    <Form.Control
                        className={cx('quickSearchInput', 'formControl')}
                        placeholder="Search"
                        aria-label="Example text with button addon"
                        aria-describedby="basicSearch"
                    />
                    <Button className={cx('btnNav')} variant="outline-light">
                        <FontAwesomeIcon icon={faCircleQuestion} />
                    </Button>
                    <Button className={cx('btnNav')} variant="outline-light">
                        <FontAwesomeIcon icon={faXmark} />
                    </Button>
                </InputGroup>
            ) : (
                <InputGroup
                    className={cx('inputSearchWrap', 'rounded-1')}
                    size="sm"
                    onBlur={handleFocus}
                    onFocus={handleFocus}
                >
                    <Button size="sm" variant="outline-light" className={cx('btnSearch', 'btnNav')} id="btnSearch">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button>
                    <Form.Control
                        className={cx('quickSearchInput', 'formControl')}
                        placeholder="Search"
                        aria-label="Example text with button addon"
                        aria-describedby="basicSearch"
                    />
                </InputGroup>
            )}
        </>
    );
};
export default InputSearchNavbar;
