import React, { useEffect, useState } from 'react';
import { DetailedStudentDataRes } from 'types';
import { MainWrapper } from './MainWrapper';
import { GoBack } from './GoBack';
import { StudentInfo } from './StudentInfo';
import { CvContent } from './CvContent';
import { TopPanel } from '../TopPanel/TopPanel';
import { Spinner } from '../Spinner/Spinner';

export const CvPage = () => {
  const [studentData, getStudentData] = useState<DetailedStudentDataRes | null>(null);
  const getStudentDetails = async () => {
    getStudentData(null);

    const res = await fetch(`http://localhost:3001/api/student/detailed`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log(res);
    const data = await res.json();
    getStudentData(data);
    console.log(data);
  };

  useEffect(() => {
    getStudentDetails();
  }, []);

  if (studentData === null) return <Spinner />;

  return (
    <>
      {/* <TopPanel /> */}
      <MainWrapper>
        <GoBack />
        <StudentInfo />
        <CvContent
          courseCompletion={studentData.courseCompletion}
          courseEngagement={studentData.courseEngagement}
          projectDegree={studentData.projectDegree}
          teamProjectDegree={studentData.teamProjectDegree}
          targetWorkCity={studentData.studentInfo.targetWorkCity}
          expectedTypeWork={studentData.studentInfo.expectedTypeWork}
          expectedContractType={studentData.studentInfo.expectedContractType}
          expectedSalary={studentData.studentInfo.expectedSalary}
          canTakeApprenticeship={studentData.studentInfo.canTakeApprenticeship}
          monthsOfCommercialExp={studentData.studentInfo.monthsOfCommercialExp}
          education={studentData.studentInfo.education}
          courses={studentData.studentInfo.courses}
          workExperience={studentData.studentInfo.workExperience}
        />
      </MainWrapper>
    </>
  );
};
