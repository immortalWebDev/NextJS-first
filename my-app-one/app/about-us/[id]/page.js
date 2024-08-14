"use client"; 

import { useParams } from 'next/navigation';

const DeveloperDetails = () => {
  const { id } = useParams();

  const details = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' },
  ];

  const developer = details.find(dev => dev.id === parseInt(id));

  if (!developer) {
    return <h1>Developer doesn't exist</h1>;
  }

  return (
    <div>
      <h1>{developer.name}</h1>
      <p>{developer.role}</p>
    </div>
  );
};

export default DeveloperDetails;
