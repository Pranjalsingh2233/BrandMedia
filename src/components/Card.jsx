import React from "react";

export default function Card({ title, para, image }) {
  return (
    <>
      <div
        className="custom-card mt-5 move-up"
        style={{
          backgroundImage: image,
        }}
      >
        <div className="card-content text-center">
          <h5>{title}</h5>
          <p>{para}</p>
        </div>
      </div>
    </>
  );
}
