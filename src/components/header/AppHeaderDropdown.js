import React, { useContext } from "react";
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";

import avatar8 from "./../../assets/images/avatars/8.jpg";
import { Data } from "../../Context/DataContext";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AppHeaderDropdown = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(Data);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">
          Email
        </CDropdownHeader>
        <CDropdownItem href="#">{userInfo?.data?.email_id}</CDropdownItem>
        <CDropdownHeader className="bg-light fw-semibold py-2">
          Mobile No.
        </CDropdownHeader>
        <CDropdownItem href="#">{userInfo?.data?.mobile_no}</CDropdownItem>
        <CDropdownHeader className="bg-light fw-semibold py-2">
          Logout
        </CDropdownHeader>
        <CDropdownItem href="#">
          <Button
            variant="danger"
            className="my-2 w-100"
            onClick={() => {
              localStorage.removeItem("userInfo");
              setAuth(false);
              navigate("/login");
            }}
          >
            Logout
          </Button>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;
