import { useState, useEffect } from "react";
import { Table, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import axios from "axios";

const PElecChargeStatList = () => {
  // 인증키
  const serviceKey =
    // "eqayAa0NqZ/gn+HGNj+SqmeUuyH3A/XssXsylY+jP+Uui/lJmRshYAutkiK8+obqBOCIVijqyegxKzntMYmtjA==";
    "eqayAa0NqZ%2Fgn%2BHGNj%2BSqmeUuyH3A%2FXssXsylY%2BjP%2BUui%2FlJmRshYAutkiK8%2BobqBOCIVijqyegxKzntMYmtjA%3D%3D";
  // 전기차 충전소 목록
  const [chargeList, setChargeList] = useState([]);
  const [pageBtn, setPageBtn] = useState([]);
  // 페이지 정보
  const [pageInfo, setPageInfo] = useState({
    totalCount: 0,
    curPage: 0,
    perPage: 0,
    allPage: 0,
    startPage: 0,
    endPage: 0,
  });

  const reqApi = (page) => {
    axios
      .get(
        `https://api.odcloud.kr/api/EvInfoServiceV2/v1/getEvSearchList?page=${page}&perPage=10&serviceKey=${serviceKey}`
      )
      .then((res) => {
        console.log(res);
        let data = res.data;
        const totalCount = data.totalCount;
        const curPage = data.page;
        const perPage = data.perPage;
        const allPage = Math.ceil(totalCount / perPage);
        const startPage = Math.floor((curPage - 1) / 10) * 10 + 1;
        const endPage = Math.min(allPage, startPage + 10 - 1);
        setPageInfo({
          totalCount,
          curPage,
          perPage,
          allPage,
          startPage,
          endPage,
        });
        setChargeList(data.data);

        let btn = [];
        for (let i = startPage; i <= endPage; i++) {
          btn.push(i);
        }
        setPageBtn(btn);
      });
  };

  useEffect(() => {
    reqApi(1); //1은 처음 보여질 페이지 (311이 끝 페이지)
  }, []);

  // 첫 화면에 나올 정보
  // 뒤에 []를 작성하지 않으면, 계속 요청함
  //   useEffect(() => {}, []);

  const trClick = (e) => {
    //
    console.log(e);
    const lat = e.target.parentNode.dataset.lat;
    const longi = e.target.parentNode.dataset.longi;
    console.log(lat);
    console.log(longi);
  };

  return (
    <div>
      <Table bordered>
        <thead>
          <tr>
            <th>충전소 명</th>
            <th>주소</th>
            <th>위도</th>
            <th>경도</th>
            <th>충전기 명칭</th>
            <th>충전기 타입</th>
            <th>충전 방식</th>
            <th>충전기 상태</th>
          </tr>
        </thead>
        <tbody>
          {chargeList.map((charge) => (
            <tr
              key={charge.cpId}
              data-lat={charge.lat}
              data-longi={charge.longi}
              onClick={trClick}
            >
              <th>{charge.csNm}</th>
              <th>{charge.addr}</th>
              <th>{charge.lat}</th>
              <th>{charge.longi}</th>
              <th>{charge.cpNm}</th>
              <th>{charge.chargeTp == 1 ? "완속" : "급속"}</th>
              <th>
                {charge.cpTp == 1
                  ? "B타입(5핀)"
                  : charge.cpTp == 2
                  ? "C타입(5핀)"
                  : charge.cpTp == 3
                  ? "BC타입(5핀)"
                  : charge.cpTp == 4
                  ? "BC타입(7핀)"
                  : charge.cpTp == 5
                  ? "DC차 데모"
                  : charge.cpTp == 6
                  ? "AB 3상"
                  : charge.cpTp == 7
                  ? "DC콤보"
                  : charge.cpTp == 8
                  ? "DC차데모 + DC콤보"
                  : charge.cpTp == 9
                  ? "DC차데모 + AC3상"
                  : charge.cpTp == 10
                  ? "DC차데모 + DC콤보"
                  : ""}
              </th>
              <th>
                {charge.cpStat == 0
                  ? "상태확인 불가"
                  : charge.cpStat == 1
                  ? "충전 가능"
                  : charge.cpStat == 2
                  ? "충전중"
                  : charge.cpStat == 3
                  ? "고장/점검"
                  : charge.cpStat == 4
                  ? "통신 장애"
                  : charge.cpStat == 5
                  ? "통신 미연결"
                  : charge.cpStat == 9
                  ? "충전 예약"
                  : ""}
              </th>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </Table>

      <Pagination style={{ justifyContent: "center", marginTop: "200px" }}>
        {/* 현재페이지가 1이면 #으로 아니면 현재페이지-1로 */}
        {pageInfo.curPage === 1 ? (
          <PaginationItem disabled>
            <PaginationLink previous href="#" />
          </PaginationItem>
        ) : (
          <PaginationItem>
            <PaginationLink
              previous
              onClick={() => reqApi(pageInfo.curPage - 1)}
            />
          </PaginationItem>
        )}
        {pageBtn.map((i) => (
          <PaginationItem
            key={i}
            className={i === pageInfo.curPage ? "active" : ""}
          >
            <PaginationLink onClick={() => reqApi(i)}>{i}</PaginationLink>
          </PaginationItem>
        ))}
        {pageInfo.curPage === pageInfo.allPage ? (
          <PaginationItem disabled>
            <PaginationLink next href="#" />
          </PaginationItem>
        ) : (
          <PaginationItem>
            <PaginationLink next onClick={() => reqApi(pageInfo.curPage + 1)} />
          </PaginationItem>
        )}
      </Pagination>
    </div>
  );
};

export default PElecChargeStatList;
