import { Tab } from "bootstrap";
import { useState } from "react";
import {
  Card,
  CardText,
  CardTitle,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";

function TabsStrap() {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div style={{ width: "800px" }}>
      <Nav tabs>
        <NavItem>
          {/* 선택된 애한테 active 속성을 넣어줌 */}
          <NavLink
            className={activeTab === "1" ? "active" : ""}
            onClick={() => setActiveTab("1")}
          >
            Tab1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => setActiveTab("2")}
          >
            Tab2
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId={"1"}>
          <Row style={{ marginTop: "10px" }}>
            <Col sm="12">
              <h4>Tab 1 content</h4>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId={"2"}>
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Tab 2 Card</CardTitle>
                <CardText>두번째 탭의 카드 내용이 나온다.</CardText>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Tab 2 Card</CardTitle>
                <CardText>두번째 탭의 카드 내용이 나온다.</CardText>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default TabsStrap;
