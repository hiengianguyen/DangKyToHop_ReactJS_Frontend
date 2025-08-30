import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import CombinationStep1R from "./Components/CombinationStep1R";
import Button from "react-bootstrap/esm/Button";
import CombinationStep2R from "./Components/CombinationStep2R";
import CombinationStep3R from "./Components/CombinationStep3R";
import CombinationStep4R from "./Components/CombinationStep4R";
import { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../../../Contexts/AuthContext";

function CombinationResult({ valueStudent = {}, setCurrPage = () => {} }) {
  const { auth } = useAuth();
  useEffect(() => {
    document.title = "Đăng ký tổ hợp | Xác nhận thông tin";
  }, []);

  const handleSubmit = () => {
    valueStudent.userId = auth.user.userId;
    axios.post("http://localhost:4001/combination/submited", valueStudent).then((axiosData) => alert(axiosData.data.message));
  };

  return (
    <>
      <div className="d-flex justify-content-end">
        <Button primary="true" onClick={handleSubmit} className="fs-3 px-4">
          Gữi đi
        </Button>
      </div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2} style={{ borderRight: "2px solid #ccc" }}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link className="py-3" eventKey="main-info">
                  1. Thông tin chung
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="py-3" eventKey="main-info-2">
                  2. Đơn xin nhập học
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="py-3" eventKey="main-info-3">
                  3. Chọn tổ hợp
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="py-3" eventKey="main-info-4">
                  4. Lý lịch học sinh
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="main-info">
                <CombinationStep1R valueStudent={valueStudent} />
                <div className="d-flex justify-content-end">
                  <Button primary="true" onClick={() => setCurrPage(1)} className="fs-3 px-4 mt-3">
                    Chỉnh sửa
                  </Button>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="main-info-2">
                <CombinationStep2R valueStudent={valueStudent} />
                <div className="d-flex justify-content-end">
                  <Button primary="true" onClick={() => setCurrPage(2)} className="fs-3 px-4 mt-3">
                    Chỉnh sửa
                  </Button>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="main-info-3">
                <CombinationStep3R valueStudent={valueStudent} />
                <div className="d-flex justify-content-end">
                  <Button primary="true" onClick={() => setCurrPage(3)} className="fs-3 px-4 mt-3">
                    Chỉnh sửa
                  </Button>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="main-info-4">
                <CombinationStep4R valueStudent={valueStudent} />
                <div className="d-flex justify-content-end">
                  <Button primary="true" onClick={() => setCurrPage(4)} className="fs-3 px-4 mt-3">
                    Chỉnh sửa
                  </Button>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}

export default CombinationResult;
