import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../components/LoginPage/LoginPage';
import { BookInterview } from '../components/BookInterView/BookInterview';
import { CvPage } from '../components/CvPage/CvPage';
import { AdminPage } from '../components/AdminPage/AdminPage';
import { AvailableStudents } from '../components/AvailableStudents/AvailableStudents';
import { StudentPage } from '../components/StudentPage/StudentPage';
import { MainTemplate } from '../components/templates/MainTemplate';
import { Account } from '../components/Account/Account';
import { HrProvider } from '../providers/HrProvider';

export const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/interview" element={<BookInterview />} />
        <Route
          path="/admin"
          element={
            <HrProvider>
              <AdminPage />
            </HrProvider>
          }
        />
        <Route path="/hr/available-students" element={<AvailableStudents />} />
        <Route path="/students/:id" element={<CvPage />} />
        <Route path="/student" element={<StudentPage />} />
      </Routes>
    </MainTemplate>
  );
};
