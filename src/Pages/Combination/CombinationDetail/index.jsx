import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CombinationStep1R from "./../CombinationSteps/CombinationResult/Components/CombinationStep1R";
import CombinationStep2R from "./../CombinationSteps/CombinationResult/Components/CombinationStep2R";
import CombinationStep3R from "./../CombinationSteps/CombinationResult/Components/CombinationStep3R";
import CombinationStep4R from "./../CombinationSteps/CombinationResult/Components/CombinationStep4R";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import BoxRadius from "../../../Components/BoxRadius";
import Loading from "../../../Components/Loading";

function CombinationDetail() {
  const [submitedDetail, setSubmitedDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigator = useNavigate();
  const { auth } = useAuth();

  useEffect(() => {
    document.title = "Đăng ký tổ hợp | Hồ sơ đã nộp";
  }, []);

  useEffect(() => {
    axios.get("http://localhost:4001/combination/submited-detail/" + auth.user.userId).then((axiosData) => {
      if (axiosData.data.isSuccess) {
        setSubmitedDetail(axiosData.data.submitedCombinationDetail);
        setIsLoading(false);
      } else {
        navigator("/auth/signin");
      }
    });
  }, [navigator, auth.user.userId]);

  return (
    <BoxRadius>
      {isLoading && <Loading title="Đang tải hồ sơ" />}
      <Tabs defaultActiveKey="profile" className="mb-3">
        <Tab eventKey="home" title="1. Thông tin chung">
          <CombinationStep1R valueStudent={submitedDetail} />
        </Tab>
        <Tab eventKey="profile" title="2. Đơn xin nhập học">
          <CombinationStep2R valueStudent={submitedDetail} />
        </Tab>
        <Tab eventKey="longer-tab" title="3. Chọn tổ hợp">
          <CombinationStep3R valueStudent={submitedDetail} />
        </Tab>
        <Tab eventKey="contact" title="4. Lý lịch học sinh">
          <CombinationStep4R valueStudent={submitedDetail} />
        </Tab>
      </Tabs>
    </BoxRadius>
  );
}

export default CombinationDetail;
