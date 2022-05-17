import React, { useState } from "react";
import styled from "styled-components";

import { MdOutlineEditNote } from "react-icons/md";

//for admin use
import Form from "./Form";

const GeneralProfile = ({ user, profileType, firstLetter, style }) => {
  const [edit, setEdit] = useState(true);

  return (
    <Wrapper style={style}>
      <Content>
        <Info>
          <Personal>
            <Edit onClick={() => setEdit(!edit)} />
            <Header>
              <Photo>{firstLetter}</Photo>
              <Name>
                {user.firstName} {user.lastName}
              </Name>
            </Header>
            <Detail>
              <DataContainer>
                <Data>Email:</Data>
                <Value>{user.email}</Value>
              </DataContainer>
              <DataContainer>
                <Data>Phone:</Data>
                <Value>{user.phone}</Value>
              </DataContainer>
              <DataContainer>
                <Data>Address:</Data>
                <Value>{user.address}</Value>
              </DataContainer>
              <DataContainer>
                <Data>City:</Data>
                <Value>{user.city}</Value>
              </DataContainer>
              <DataContainer>
                <Data>Password:</Data>
                <Value>{user.password}</Value>
              </DataContainer>
            </Detail>
          </Personal>
          <Academic>
            <h1>Academic</h1>
            {profileType === "admin" && (
              <>
                <AcademicDetail>
                  <DataContainer>
                    <Data>Position:</Data>
                    <Value>{user.position}</Value>
                  </DataContainer>
                  <DataContainer>
                    <Data>Faculty:</Data>
                    <Value>{user.faculty}</Value>
                  </DataContainer>
                </AcademicDetail>
              </>
            )}
            {profileType === "student" && (
              <>
                <AcademicDetail>
                  <DataContainer>
                    <Data>Inscr. No:</Data>
                    <Value>{user.inscription}</Value>
                  </DataContainer>
                  <DataContainer>
                    <Data>Deprt:</Data>
                    <Value>{user.department}</Value>
                  </DataContainer>
                  <DataContainer>
                    <Data>Level:</Data>
                    <Value>{user.level}</Value>
                  </DataContainer>
                  <DataContainer>
                    {user.department === "MI" ? (
                      <Data>Scetion/Group:</Data>
                    ) : (
                      <Data>Speciality/Group:</Data>
                    )}
                    <Value>
                      {user.section_speciality} / {user.student_group}
                    </Value>{" "}
                  </DataContainer>
                </AcademicDetail>
              </>
            )}
            {profileType === "teacher" && (
              <>
                <AcademicDetail>
                  <DataContainer>
                    <Data>Dept:</Data>
                    <Value>{user.department}</Value>
                  </DataContainer>
                  <DataContainer>
                    <Data>Level:</Data>
                    <Value>{user.level}</Value>
                  </DataContainer>
                  <DataContainer>
                    <Data>Module:</Data>
                    <Value>{user.module}</Value>
                  </DataContainer>
                  <DataContainer>
                    <Data>Group(s):</Data>
                    <Value>{user.groups}</Value>
                  </DataContainer>
                </AcademicDetail>
              </>
            )}
          </Academic>
        </Info>
        <Form user={user} profileType={profileType} edit={edit} />
      </Content>
    </Wrapper>
  );
};

export default GeneralProfile;

const Wrapper = styled.div`
  margin-top: 20px;
`;

const Content = styled.div`
  display: flex;
  height: 75vh;
`;
const Info = styled.div`
  width: 35%;
  height: 100%;
  margin-right: 30px;
`;
const Personal = styled.div`
  background-color: #ffffff;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 20px;
  height: 60%;
  padding: 10px;
`;

const Edit = styled(MdOutlineEditNote)`
  position: absolute;
  font-size: 30px;
  margin-left: 23%;
  color: #777b86;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #adb1c0;
  border-radius: 5px;
  padding: 10px;
`;

const Photo = styled.div`
  height: 60px;
  width: 60px;
  font-size: 35px;
  margin-bottom: 5px;
  border-radius: 50%;
  background: #dbffdb;
  color: #29d129;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = styled.h1`
  font-size: 20px;
  color: #777b86;
`;

const Detail = styled.div`
  padding: 20px 20px;
`;
const DataContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;
const Data = styled.h1`
  font-size: 16px;
  margin-right: 10px;
  color: #000000;
  opacity: 0.8;
`;
const Value = styled.p`
  font-size: 14px;
  color: #777b86;
  font-weight: 500;
`;

const Academic = styled.div`
  background-color: #ffffff;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 20px;
  margin-top: 10px;
  height: 30%;
  padding: 10px 20px;

  & > h1 {
    font-size: 18px;
    color: #c4c4c4;
    margin-bottom: 10px;
    border-radius: 2px;
    border-bottom: 1px solid #adb1c0;
  }
`;

const AcademicDetail = styled.div`
  padding: 3px 10px;
`;
