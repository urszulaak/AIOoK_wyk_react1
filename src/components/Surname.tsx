import React from 'react';

interface SurnameProps {
  surname: string;
}

const Surname: React.FC<SurnameProps> = ({ surname }) => <p>Nazwisko: {surname}</p>;

export default Surname;
