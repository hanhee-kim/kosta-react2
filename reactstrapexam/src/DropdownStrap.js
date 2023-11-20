import { useState } from "react";
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

function DropdownStrap(){

    const [open,setOpen] = useState(false);
   
    return(
        <>
        {/* caret이 기본이 밑으로 향하지만 바꾸려면 dropdown에 direction을 주면 바꿀 수 있다.(up/left/right/down) */}
            <ButtonDropdown direction="right" isOpen={open} toggle={()=>setOpen(!open)}>
                <DropdownToggle caret color="info" size="lg">버튼 Dropdown</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>헤더</DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem disabled>비활성화 버튼</DropdownItem>
                    <a href="http://naver.com">
                        <DropdownItem>네이버로 이동</DropdownItem>
                    </a>
                    <DropdownItem onClick={()=>alert('Alert버튼')}>Alert버튼</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        </>
    )
}

export default DropdownStrap;