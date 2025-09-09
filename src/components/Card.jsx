import React from "react";

export default function Card({ title, para, icon }) {
  return (
    <>
      <div className="custom-card mt-3 mt-md-5">
        <div className="card-content text-center">
          <i className={`${icon} profile`}></i>
          <div>
            <h5>{title}</h5>
            <p>{para}</p>
          </div>
        </div>
      </div>
    </>
  );
}
