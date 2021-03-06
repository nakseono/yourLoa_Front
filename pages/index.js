import React from "react";
import styled from "styled-components";
import { Divider, Row } from "antd";

import AppLayout from "../components/AppLayout.js";
import Coupon from "../components/mainCoupon";

const BannerWrapper = styled.div`
  /* width: 900px; */
  height: 7em;
  border: solid 1px;
  margin-bottom: 1em;
  //! side
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InLayoutContent = styled.div`
  padding: 1em;
`;

const DividerWrapper = styled(Divider)`
  margin-top: 2em !important;
`;

const Main = () => {
  return (
    <AppLayout>
      <InLayoutContent>
        <Divider>이벤트 쿠폰 코드</Divider>
        <Row style={{ display: "flex", justifyContent: "space-around" }}>
          <Coupon
            title="로아온 미니"
            date="2021.06.19(토) ~ 09.22(수)"
            code="로아와함께하는특별한여름"
          />
          <Coupon
            title="모코코 맘스 세트 출시 기념"
            date="2021.07.14(수) ~ 09.30(목)"
            code="함께나누는모코코맘스세트"
          />
          <Coupon
            title="CGV 콜라보 기념"
            date="2021.07.28(수) ~ 09.30(목)"
            code="모코코만큼가득담아드려요"
          />
          <Coupon
            title="이디야 콜라보 기념"
            date="2021.08.11(수) ~ 09.30(목)"
            code="모코코지금어디야이디야"
          />
          <Coupon
            title="소서리스 출시 기념"
            date="2021.08.11(수) ~ 09.28(화)"
            code="원소의지배자소서리스"
          />
          <Coupon
            title="우리가함께하는특별한여름"
            date="2021.08.13(금) ~ 09.29(수) "
            code="우리가함께하는특별한여름"
          />
        </Row>
        <Divider>이벤트 알림</Divider>
        <BannerWrapper>이벤트 배너</BannerWrapper>
        <BannerWrapper>이벤트 배너</BannerWrapper>
        <DividerWrapper>읽어보면 좋은 꿀팁</DividerWrapper>
        <BannerWrapper>꿀팁 배너</BannerWrapper>
        <BannerWrapper>꿀팁 배너</BannerWrapper>
      </InLayoutContent>
    </AppLayout>
  );
};

export default Main;
