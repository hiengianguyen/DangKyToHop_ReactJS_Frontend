import Placeholder from "react-bootstrap/Placeholder";
import classNames from "classnames/bind";
import style from "../CardStudent/CardStudent.module.scss";

const cx = classNames.bind(style);

function LoadingCard() {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className="d-flex">
          <div className={cx("d-flex flex-column col-md-4")}>
            <Placeholder as="h6" animation="glow" className="mt-4">
              <Placeholder xs={12} size="lg" style={{ height: "8pc" }} />
            </Placeholder>
          </div>
          <div className={cx("col-md-8 px-0 position-relative")}>
            <div className={cx("card-body pt-2 pb-3 px-2")}>
              <div className={cx("name-status", "mb-2")}>
                <Placeholder as="h6" animation="glow" className="mb-0 mt-4">
                  <Placeholder xs={12} size="lg" />
                </Placeholder>
              </div>

              <div className={cx("details")}>
                <Placeholder as="p" animation="glow" className="mb-1">
                  <Placeholder xs={12} />
                  <Placeholder xs={12} />
                  <Placeholder xs={12} />
                </Placeholder>
                <span className={cx("time")}>
                  <Placeholder as="p" animation="glow" className="mb-0">
                    <Placeholder xs={5} />
                  </Placeholder>
                </span>
              </div>
              <Placeholder.Button xs={4} aria-hidden="true" className={cx("btn-loading")} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingCard;
