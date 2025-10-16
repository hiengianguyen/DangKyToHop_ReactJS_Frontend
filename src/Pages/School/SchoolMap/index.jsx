import classNames from "classnames/bind";
import style from "./SchoolMap.module.scss";

const cx = classNames.bind(style);

function SchoolMap() {
  return (
    <div className={cx("box-content-6", "d-flex", "justify-content-center", "align-items-center", "flex-column")}>
      <div className={cx("content")}>
        <h3 id="map-title" className="mb-4">
          Bản đồ vị trí trường THPT Duy Tân
        </h3>
      </div>
      <iframe
        id="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.6758102883787!2d108.51776259105357!3d15.608960482582859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169db8400000001%3A0xc4af2f531194cbc1!2zVHLGsOG7nW5nIFRIUFQgRHV5IFTDom4!5e0!3m2!1svi!2s!4v1752226085649!5m2!1svi!2s"
        className="w-100 h-lvh"
        title="Bản đồ THPT Duy Tân"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default SchoolMap;
