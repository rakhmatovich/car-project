import React from "react";
import { MdCall } from "react-icons/md";

export default function DealerItem({ name, description }) {
  return (
    <div className="dealer-item">
      <p className="dealer-item-name">{name}</p>
      <p className="dealer-item-description">{description}</p>
      <p className="dealer-item-phone">
        <MdCall />
        <span>1333</span>
      </p>
    </div>
  );
}
