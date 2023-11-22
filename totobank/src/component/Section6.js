import React from 'react';
import { Button } from 'reactstrap';

const Section6 = () => {
  return (
    <div className='secDiv'>
      <div className="componentBox HoverCom">
      <span className="L-text">
        복잡한 서류 제출을 간편하게, 내가 원하는 시간에
      </span><br/>
      <span className='S-text'>
        이사 날짜가 주말이나 공휴일이여도 전월세보증금 대출을 신청할 수 있습니다.<br/>
      </span><br/>
      <Button color='light' size='md'>마이너스 통장대출&gt;</Button>&nbsp;
      <Button color='light' size='md'>신용대출&gt;</Button>&nbsp;
      <Button color='light' size='md'>개인사업자 대출&gt;</Button>&nbsp;
      <Button color='light' size='md'>전월세 보증금 대출&gt;</Button>&nbsp;<br/>
      <img src='/img/main-loan.png' width='280px' height='300px' alt=''/>
      </div>
    </div>
  );
};

export default Section6;