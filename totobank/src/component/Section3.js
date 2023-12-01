import React from 'react';
import { Badge, Button } from 'reactstrap';

const Section3 = () => {
  return (
    <div className='secDiv'>
      <div className="section_left">
        <div className="imgBox attachRight" style={{paddingTop:'2%'}}>
          <img src='/img/main-moim.png' height='680px' width='480px' alt=''/>
        </div>
      </div>
      <div className="section_right">
        <div className="textBox attachLeft" style={{paddingTop:'45%'}}>
          <span className='L-text'>
            함께 쓰고 같이 보는 <br/>
            <Badge color='warning'><b style={{color:'white'}}>B</b></Badge>모임통장
          </span>
          <span className='S-text'>
            토토톡 친구들 바로 모임통장으로 초대하고<br/>
            친구들과 함께 잔액과 입출금 현황을 확인할 수 있습니다.<br/>
            재미있는 메시지 카드로 회비 입금 요청도 해보세요.
          </span><br/>
          <Button color='light' size='md'>모임통장&gt;</Button>
        </div>
      </div>
    </div>
  );
};

export default Section3;