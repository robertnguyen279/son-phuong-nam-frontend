import React from 'react';
import BreadCrumb from 'components/BreadCrumb';
import ContactImage from 'assets/images/lien-he.jpg';
import { message, Skeleton } from 'antd';
import { SiteInfo } from 'types';
import axios from 'services/axios.service';
import PhoneIcon from 'assets/icons/phone.png';
import MailIcon from 'assets/icons/gmail.png';
import AddressIcon from 'assets/icons/map.png';
import TaxIcon from 'assets/icons/tax.png';

const ContactPage = (): React.ReactElement => {
  const [siteInfo, setSiteInfo] = React.useState<SiteInfo>();

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
    <div className="contact_page">
      <BreadCrumb picture={ContactImage} text="Liên hệ" />
      <div className="page_container">
        {!siteInfo ? (
          <Skeleton />
        ) : (
          <div className="site_info my-10">
            <div className="info_wrapper">
              <div className="item flex items-center justify-start">
                <div className="icon w-8 mx-1">
                  <img src={PhoneIcon} alt="phone" className="w-8" />
                </div>
                <div className="name mx-1 font-bold">Số điện thoại:</div>
                <div className="value mx-1">{siteInfo.phone}</div>
              </div>
              <div className="item flex items-center justify-start py-3">
                <div className="icon w-8 mx-1">
                  <img src={MailIcon} alt="mail" className="w-8" />
                </div>
                <div className="name mx-1 font-bold">Email:</div>
                <div className="value mx-1">{siteInfo.email}</div>
              </div>
              <div className="item flex items-center justify-start py-3">
                <div className="icon w-8 mx-1">
                  <img src={AddressIcon} alt="address" className="w-8" />
                </div>
                <div className="value mx-1">{siteInfo.address}</div>
              </div>
              <div className="item flex items-center justify-start py-3">
                <div className="icon w-8 mx-1">
                  <img src={TaxIcon} alt="tax" className="w-8" />
                </div>
                <div className="name mx-1 font-bold">Mã số thuế:</div>
                <div className="value mx-1">{siteInfo.taxCode}</div>
              </div>
            </div>
            <div className="location mt-10">
              <div className="title text-center font-bold text-xl uppercase mb-5">Vị trí</div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.841328270969!2d106.87448781515945!3d10.899660792238018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174dfc6f80b5cf9%3A0xd5fa1e4243fa4d0b!2zQ8O0bmcgVHkgVE5ISCBNVFYgWMOieSBE4buxbmcgU8ahbiBQaMawxqFuZyBOYW0!5e0!3m2!1svi!2s!4v1654228429747!5m2!1svi!2s"
                width="100%"
                height="500px"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
