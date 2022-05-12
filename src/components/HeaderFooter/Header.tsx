import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Logo from 'assets/icons/logo.svg';
import { Collapse } from 'antd';
import Menu from 'assets/icons/menu.svg';
import { Link } from 'react-router-dom';
const { Panel } = Collapse;

const Header = (): React.ReactElement => {
  const isSmallDevice = useMediaQuery({ maxWidth: 768 });
  const [currentActive, setCurrentActive] = React.useState(window.location.pathname);
  const renderLogo = (): React.ReactElement => (
    <Link className="flex items-center justify-center cursor-pointer" to="/">
      <div className="logo w-14">
        <img src={Logo} alt="logo" />
      </div>
      <div className="text text-white text-sm">
        <div className="name font-bold">PHƯƠNG NAM</div>
        <div className="slogan">Thách thức thời gian</div>
      </div>
    </Link>
  );

  const collapseHeader = (): React.ReactElement => (
    <div className="flex items-center justify-between w-full cursor-pointer">
      <div className="text-white font-bold">MENU</div>
      <div className="icon w-6">
        <img src={Menu} alt="menu" />
      </div>
    </div>
  );

  const renderSmallDevice = (): React.ReactElement => (
    <div className="small flex items-center justify-center h-full flex-col">
      {renderLogo()}
      <div className="pb-5 w-10/12">
        <Collapse destroyInactivePanel={true}>
          <Panel header={collapseHeader()} key="1" showArrow={false}>
            <div className={`item${currentActive === '/' ? '--active' : ''} w-full text-center py-3`}>
              <Link to="/" onClick={() => setCurrentActive('/')} className="cursor-pointer">
                Trang chủ
              </Link>
            </div>
            <div className={`item${currentActive.includes('/gioi-thieu') ? '--active' : ''} w-full text-center py-3`}>
              <Link to="/gioi-thieu" onClick={() => setCurrentActive('/gioi-thieu')} className="cursor-pointer">
                Giới thiệu
              </Link>
            </div>
            <div className={`item${currentActive.includes('/san-pham') ? '--active' : ''} w-full text-center py-3`}>
              <Link to="/san-pham" onClick={() => setCurrentActive('/san-pham')} className="cursor-pointer">
                Sản phẩm
              </Link>
            </div>
            <div className={`item${currentActive.includes('/bai-viet') ? '--active' : ''} w-full text-center py-3`}>
              <Link to="/bai-viet" onClick={() => setCurrentActive('/bai-viet')} className="cursor-pointer">
                Bài Viết
              </Link>
            </div>
            <div className={`item${currentActive.includes('/lien-he') ? '--active' : ''} w-full text-center py-3`}>
              <Link to="/lien-he" onClick={() => setCurrentActive('/lien-he')} className="cursor-pointer">
                Liên Hệ
              </Link>
            </div>
          </Panel>
        </Collapse>
      </div>
    </div>
  );

  const renderLargeDevice = (): React.ReactElement => (
    <div className="header__container flex items-center justify-between px-5">
      {renderLogo()}
      <div className="flex">
        <Link
          className={`item${currentActive === '/' ? '--active' : ''} text-white uppercase font-bold mx-3`}
          to="/"
          onClick={() => setCurrentActive('/')}
        >
          Trang chủ
        </Link>
        <Link
          className={`item${
            currentActive.includes('/gioi-thieu') ? '--active' : ''
          } text-white uppercase font-bold mx-3`}
          to="/gioi-thieu"
          onClick={() => setCurrentActive('/gioi-thieu')}
        >
          Giới thiệu
        </Link>
        <Link
          className={`item${currentActive.includes('/san-pham') ? '--active' : ''} text-white uppercase font-bold mx-3`}
          to="/san-pham"
          onClick={() => setCurrentActive('/san-pham')}
        >
          Sản phẩm
        </Link>
        <Link
          className={`item${currentActive.includes('/bai-viet') ? '--active' : ''} text-white uppercase font-bold mx-3`}
          to="/bai-viet"
          onClick={() => setCurrentActive('/bai-viet')}
        >
          Bài Viết
        </Link>
        <Link
          className={`item${currentActive.includes('/lien-he') ? '--active' : ''} text-white uppercase font-bold mx-3`}
          to="/lien-he"
          onClick={() => setCurrentActive('/lien-he')}
        >
          Liên Hệ
        </Link>
      </div>
    </div>
  );

  return <div className="header md:h-20 w-full">{isSmallDevice ? renderSmallDevice() : renderLargeDevice()}</div>;
};

export default Header;
