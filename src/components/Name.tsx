import React from 'react';

interface NameProps {
  name: string;
}

const Name: React.FC<NameProps> = ({ name }) => <p>Imię: {name}</p>;

export default Name;
