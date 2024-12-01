import React from 'react';

interface AddressProps {
  address: string;
}

const Address: React.FC<AddressProps> = ({ address }) => <p>Adres: {address}</p>;

export default Address;
