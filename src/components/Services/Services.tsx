import React from 'react';
import EngineerIcon from 'assets/icons/engineers.png';
import RoofIcon from 'assets/icons/roof.png';
import PaintRollerIcon from 'assets/icons/paint-roller.png';
import CleanIcon from 'assets/icons/clean.png';
import WaterResistanceIcon from 'assets/icons/water-resistant.png';

const Services = (): React.ReactElement => {
  return (
    <div className="mt-20">
      <div className="title font-bold text-lg text-center text-secondary uppercase">Dịch vụ chúng tôi cung cấp</div>
      <div className="services_wrapper flex flex-wrap items-center justify-between p-10">
        <div className="item flex items-center justify-between p-5 my-5">
          <div className="name uppercase">Thi công sơn epoxy</div>
          <div className="icon w-14">
            <img src={EngineerIcon} alt="engineer" />
          </div>
        </div>
        <div className="item flex items-center justify-between p-5 my-5">
          <div className="name uppercase">Sơn mái tôn nhà xưởng</div>
          <div className="icon w-14">
            <img src={RoofIcon} alt="roof" />
          </div>
        </div>
        <div className="item flex items-center justify-between p-5 my-5">
          <div className="name uppercase">Sơn nước nhà xưởng</div>
          <div className="icon w-14">
            <img src={PaintRollerIcon} alt="paint-roller" />
          </div>
        </div>
        <div className="item flex items-center justify-between p-5 my-5">
          <div className="name uppercase">Đánh bóng sàn bê tông nhà xưởng</div>
          <div className="icon w-14">
            <img src={CleanIcon} alt="clean" />
          </div>
        </div>
        <div className="item flex items-center justify-between p-5 my-5">
          <div className="name uppercase">Chống thấm</div>
          <div className="icon w-14">
            <img src={WaterResistanceIcon} alt="water-resistance" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
