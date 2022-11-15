import './GlobalStyles.scss';
type Globalprops = {
    children: JSX.Element;
};
function GlobalStyles({ children }: Globalprops) {
    return children;
}

export default GlobalStyles;
