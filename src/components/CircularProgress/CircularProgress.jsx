import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = ({ user }) => {
  // Example: Profile completion as progress
  const calculateProfileCompletion = (user) => {
    const fields = [
      "name", "lastName", "image", "age", "religion", "fatherName",
      "motherName", "city", "dob", "maritalStatus", "gender", 
      "address", "occupation", "description", "email", "phone",
    ];
    const filledFields = fields.filter((field) => user[field]);
    return Math.round((filledFields.length / fields.length) * 100);
  };

  const progressValue = calculateProfileCompletion(user);

  return (
    <div className="text-center">
      <CircularProgressbar
        value={progressValue}
        text={`${progressValue}%`}
        styles={{
          path: { stroke: '#4B49AC' },
          trail: { stroke: '#E4E4E4' },
          text: { fill: '#4B49AC', fontSize: '16px' },
        }}
      />
      <p className="mt-2 text-gray-600">{user.name}'s Profile Completion</p>
    </div>
  );
};

export default CircularProgress;
