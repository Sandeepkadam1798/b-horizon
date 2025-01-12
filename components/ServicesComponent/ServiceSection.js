import { FaLaptopCode, FaDatabase, FaCloud, FaShieldAlt, FaNetworkWired, FaChartLine } from 'react-icons/fa';
import { MdScience, MdBusinessCenter } from 'react-icons/md';

const ServicesSection = () => {
  const services = [
    {
      icon: <FaLaptopCode className="text-blue-600 text-4xl" />,
      title: 'IT Application Development and Integration',
      details: [
        'Software Design and Architecture',
        'Application Design',
        'Usecase Design',
      ],
    },
    {
      icon: <MdScience className="text-green-600 text-4xl" />,
      title: 'Artificial Intelligence, Machine Learning, and Data Science',
      details: ['AI and Machine Learning Solutions', 'Data Science'],
    },
    {
      icon: <MdBusinessCenter className="text-orange-500 text-4xl" />,
      title: 'Business Intelligence and Business Analytics',
      details: ['Business Intelligence', 'Business Analytics'],
    },
    {
      icon: <FaChartLine className="text-purple-500 text-4xl" />,
      title: 'Geospatial Development, Analytics, and GeoAI',
      details: [
        'Geospatial Application Development',
        'Geospatial Analytics',
        'GeoAI',
      ],
    },
    {
      icon: <FaDatabase className="text-red-500 text-4xl" />,
      title: 'Database Development and Report Generation',
      details: [
        'Database Design and Development',
        'Relational Database Management Systems',
        'NoSQL Database Solutions',
        'Report Generation and Data Reporting',
      ],
    },
    {
      icon: <FaNetworkWired className="text-teal-500 text-4xl" />,
      title: 'IT Infrastructure, Networking, and Continuity',
      details: [
        'IT Infrastructure Setup and Management',
        'Networking Solutions',
        'Data Backup, Disaster Recovery, and Business Continuity',
        'Digital Transformation Services',
      ],
    },
    {
      icon: <FaShieldAlt className="text-yellow-500 text-4xl" />,
      title: 'Cybersecurity and IT Governance',
      details: [
        'Cybersecurity Solutions',
        'IT Audit and Compliance Services',
        'IT Risk and Governance Consulting',
      ],
    },
    {
      icon: <FaCloud className="text-cyan-600 text-4xl" />,
      title: 'Cloud Computing and IT-Enabled Services (ITES)',
      details: [
        'Cloud Computing Services',
        'IT Support and Managed Services',
        'Application Support and Maintenance (AMC)',
        'Hardware and Software Procurement',
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg backdrop-blur-md bg-opacity-60 border border-gray-200 hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                {service.title}
              </h3>
              <ul className="text-gray-600 text-sm space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx}>• {detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
