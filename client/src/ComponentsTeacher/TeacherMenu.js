import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../asserts/images/logoNav.png";
import MenuLinkIcon from "../components/MenuLinkIcon";

//icons and images
import { BiUser } from "react-icons/bi";
import { HiOutlineLogout, HiHome } from "react-icons/hi";

const TeacherMenu = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(sessionStorage.getItem("MenuActiveIcon"));
  }, []);

  const changeActiveIcon = (selected) => {
    sessionStorage.setItem("MenuActiveIcon", selected);
    setActive(selected);
  };

  const logoutButton = () => {
    sessionStorage.clear();
    setTimeout(
      () => (window.location.href = "http://localhost:3000/login"),
      500
    );
  };

  return (
    <Wrapper>
      <Content>
        <Logo src={logo} alt="logo" />
        <Menu>
          <MenuLinkIcon
            Name="Home"
            path="/teacher/home"
            Icon={HiHome}
            Active={active === "home" ? true : false}
            onClick={() => {
              changeActiveIcon("home");
            }}
          />
          <MenuLinkIcon
            Name="Profile"
            path="/teacher/profile"
            Icon={BiUser}
            Active={active === "Profile" ? true : false}
            onClick={() => {
              changeActiveIcon("Profile");
            }}
          />
          <LogoutDivider />
          <MenuLinkIcon
            Name="Logout"
            path="/login"
            Icon={HiOutlineLogout}
            Active={active === "Logout" ? true : false}
            onClick={() => {
              logoutButton();
            }}
          />
        </Menu>
      </Content>
    </Wrapper>
  );
};

export default TeacherMenu;

const Wrapper = styled.div`
  background-color: #f1f3f7;
  width: 300px;
  height: 100vh;
  //border-right: 1px solid #ffffff;
`;

const Content = styled.div`
  //  border: 1px solid red ;
  padding: 20px 40px 0 35px;
`;

const Logo = styled.img`
  width: 130px;
`;

const Menu = styled.div`
  margin-top: 30px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-right: 2px solid white;
  border-radius: 20px;
`;

const LogoutDivider = styled.div`
  width: 100%;
  background-color: #ffffff;
  margin-bottom: 10px;
`;
