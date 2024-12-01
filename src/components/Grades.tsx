import React from 'react';

interface GradesProps {
  grades: number[];
}

const Grades: React.FC<GradesProps> = ({ grades }) => (
  <p>Oceny: {grades.join(', ')}</p>
);

export default Grades;
