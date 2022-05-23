import React from 'react';
import ProfessionalIcon from 'assets/icons/engineer.png';
import MachineIcon from 'assets/icons/conveyor.png';
import QualityIcon from 'assets/icons/quality.png';

const WhyUs = (): React.ReactElement => {
  return (
    <div className="why_us mt-10 w-full">
      <div className="title text-lg font-bold text-center text-secondary uppercase">Tại sao chọn chúng tôi</div>
      <div className="box__wrapper md:flex flex-col md:flex-row justify-center items-start my-5">
        <div className="item flex flex-col items-center justify-center lg:mx-10 md:mx-5 my-5 p-5 rounded-lg md:h-72 h-60">
          <div className="icon w-20 h-20">
            <img src={ProfessionalIcon} alt="professional" />
          </div>
          <div className="title py-5 uppercase text-primary ">Chuyên nghiệp</div>
          <div className="text text-center">Đội ngũ thi công lành nghề chuyên nghiệp</div>
        </div>
        <div className="item flex flex-col items-center justify-center lg:mx-10 md:mx-5 my-5 p-5 rounded-lg md:h-72 h-60">
          <div className="icon w-20 h-20">
            <img src={MachineIcon} alt="machine" />
          </div>
          <div className="title py-5 uppercase text-primary ">Máy móc hiện đại</div>
          <div className="text text-center">Hỗ trợ máy móc, nhân công khi khách hàng mua số lượng lớn</div>
        </div>
        <div className="item flex flex-col items-center justify-center lg:mx-10 md:mx-5 my-5 p-5 rounded-lg md:h-72 h-60">
          <div className=" w-20 h-20">
            <img src={QualityIcon} alt="quality" />
          </div>
          <div className="title py-5 uppercase text-primary ">Chất lượng</div>
          <div className="text text-center">
            Thời gian thi công nhanh, bảo hành tốt, đem lại sự tin tưởng đối với khách hàng
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
