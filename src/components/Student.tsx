import React from 'react';
import Address from './Address';
import Group from './Group';
import Grades from './Grades';
import Name from './Name';
import Surname from './Surname';

interface StudentProps {
  name: string;
  surname: string;
  address: string;
  group: string;
  grades: number[];
}

const Student: React.FC<StudentProps> = ({ name, surname, address, group, grades }) => {
  return (
    <div>
      <Name name={name} />
      <Surname surname={surname} />
      <Address address={address} />
      <Group group={group} />
      <Grades grades={grades} />
    </div>
  );
};

export default Student;
