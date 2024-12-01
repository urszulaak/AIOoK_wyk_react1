import React from 'react';
import Student from './Student';

const studentsData = [
  {
    name: "Jan",
    surname: "Kowalski",
    address: "Warszawa, ul. Krakowska 10",
    group: "Grupa A",
    grades: [5, 4, 3, 5],
  },
  {
    name: "Marcin",
    surname: "Nowak",
    address: "Kraków, ul. Grodzka 20",
    group: "Grupa B",
    grades: [4, 4, 4, 5],
  },
];

const Students: React.FC = () => {
  return (
    <div>
      {studentsData.map((student, index) => (
        <Student key={index} {...student} />
      ))}
    </div>
  );
};

export default Students;
