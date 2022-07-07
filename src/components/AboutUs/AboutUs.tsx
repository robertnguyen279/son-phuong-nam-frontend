import React from 'react';
import BreadCrumb from 'components/BreadCrumb';
import AboutUsImage from 'assets/images/gioi-thieu.jpg';
import Services from 'components/Services';

const AboutUs = (): React.ReactElement => {
  return (
    <div>
      <BreadCrumb picture={AboutUsImage} text="Giới thiệu" />
      <div className="page_container my-10">
        <div className="into font-bold text-center">
          Công ty TNHH MTV XD Sơn Phương Nam Chuyên phân phối & thi công các sản phẩm sơn epoxy Hàn quốc, Đài Loan...
          chính hãng giá rẻ ở HCM, Đồng Nai & các khu vực lân cận.
        </div>
        <div className="text py-5">
          Chúng tôi luôn cam kết mang lại cho khách hàng sản phẩm sơn epoxy chất lượng tốt nhất với giá thành rẻ nhất
          giúp các doanh nghiệp công ty tiết kiệm triệt để chi phí đầu tư nhà xưởng ban đầu. Các dòng sản phẩm sơn epoxy
          do Công ty sơn epoxy Phương Nam bán và phân phối trên thị trường gồm:
          <br />
          <ul>
            <li>+ Hệ thống sơn nền epoxy</li>
            <li>+ Hệ thống sơn dầu</li>
            <li>+ Hệ thống sơn chống thấm</li>
            <li>+ Đại lý cung ứng sơn epoxy</li>
          </ul>
          <br />
          Quý Khách hàng có nhu cầu vui lòng liên hệ ngay chúng tôi để nhận được giá tốt nhất
        </div>
        <Services />
      </div>
    </div>
  );
};

export default AboutUs;
