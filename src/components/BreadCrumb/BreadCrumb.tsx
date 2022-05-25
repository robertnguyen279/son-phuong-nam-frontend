import React from 'react';
import { IBreadCrumb } from 'types';

const BreadCrumb = ({ text, picture }: IBreadCrumb): React.ReactElement => {
  return (
    <div className="breadcrumb">
      <div className="text z-10">{text}</div>
      <div className="image">
        <img src={picture} alt="breadcrumb" />
      </div>
      <div className="blur" />
    </div>
  );
};

export default BreadCrumb;
