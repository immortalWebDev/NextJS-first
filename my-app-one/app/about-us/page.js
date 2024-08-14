import Link from 'next/link';

const developers = [
  { id: 1, name: 'Yash' },
  { id: 2, name: 'Vaibhav' },
  { id: 3, name: 'Suresh' },
];

const AboutUs = () => {
  return (
    <div>
      <h1>Our Team</h1>
      <ul>
        {developers.map(dev => (
          <li key={dev.id}>
            <Link href={`/about-us/${dev.id}`}>{dev.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutUs;
