import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'assets/icons/logo.svg';
import axios from 'services/axios.service';
import { Skeleton, message } from 'antd';
import PhoneIcon from 'assets/icons/phone.svg';
import EmailIcon from 'assets/icons/email.svg';
import ZaloIcon from 'assets/icons/zalo.svg';

const Footer = (): React.ReactElement => {
  const [siteInfo, setSiteInfo] = React.useState<{ phone: string; email: string }>();
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

  React.useEffect(() => {
    axios
      .get('/site')
      .then((response) => {
        if (response.data.statusCode === 200) {
          setSiteInfo(response.data.siteInfo);
        }
      })
      .catch(() => {
        message.error('Lấy thông tin liên hệ thất bại');
      });
  }, []);

  return (
    <div className="footer mt-10">
      <div className="footer__container flex sm:flex-row flex-col items-center justify-between w-full h-full md:px-10 py-5">
        <div className="logo">{renderLogo()}</div>
        <div className="company_name text-white">&copy; 2022 Công ty TNHH MTV XD Sơn Phương Nam</div>
        <div className="contact">
          {!siteInfo ? (
            <Skeleton />
          ) : (
            <div className="contact__right">
              <div className="item flex items-center justify-center my-2">
                <div className="icon">
                  <img src={PhoneIcon} alt="phone" className="w-5" />
                </div>
                <div className="text text-white mx-3">{siteInfo.phone}</div>
              </div>
              <div className="item flex items-center md:justify-end justify-center my-2">
                <div className="icon">
                  <img src={EmailIcon} alt="email" className="w-5" />
                </div>
                <div className="text text-white mx-3">{siteInfo.email}</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="call_to_action z-10">
        <div className="item cursor-pointer my-5">
          <div className="icon w-12">
            <a href="tel:+84988698989">
              <div className="phone_wrapper">
                <div className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                  <div className="coccoc-alo-ph-circle-fill"></div>
                  <div className="coccoc-alo-ph-img-circle"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="item cursor-pointer my-5">
          <div className="icon w-12">
            <a href="https://zalo.me/0907009389">
              <img src={ZaloIcon} alt="zalo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
