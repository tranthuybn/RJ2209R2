import React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import classNames from 'classnames/bind';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
const cx = classNames.bind(styles);

// type LayoutProps = {
//     children: React.ReactNode;
// };
const DefaultLayout = ({ children }: any) => {
    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
            <Header />
            <div className={cx('wrap')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </ThemeProvider>
    );
};
export default DefaultLayout;
