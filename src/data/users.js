// src/data/users.js

const users = [
  {
    id: 1,
    firstname: "Sarah",
    lastName: "Khan",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    age: 30,
    city: "Lahore",
    dob: "1993-05-10",
    gender: "Female",
    address: "456 Park Avenue, Lahore",
    customerByfrom: "POS",
    description: "A project manager with 8+ years of experience in managing cross-functional teams.",
    email: "sarah.khan@example.com",
    phone: "03214567890",
    purchaseOrders: 5, // New field added
  },
  {
    id: 2,
    firstname: "Ali",
    lastName: "Ahmed",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    age: 28,
    city: "Karachi",
    dob: "1995-08-22",
    gender: "Male",
    address: "789 Elm Street, Karachi",
    customerByfrom: "POS", // Replaced 'Customer' with 'POS'
    description: "A seasoned professional with expertise in marketing and sales.",
    email: "ali.ahmed@example.com",
    phone: "03451234567",
    purchaseOrders: 15, // New field added
  },
  {
    id: 3,
    firstname: "Zainab",
    lastName: "Fatima",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    age: 26,
    city: "Rawalpindi",
    dob: "1997-02-13",
    gender: "Female",
    address: "123 Main Road, Rawalpindi",
    customerByfrom: "Website", // New role added
    description: "A passionate developer specializing in full-stack development with a keen interest in AI.",
    email: "zainab.fatima@example.com",
    phone: "03111223344",
    purchaseOrders: 2, // New field added
  },
  {
    id: 4,
    firstname: "Ahmed",
    lastName: "Raza",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    age: 35,
    city: "Islamabad",
    dob: "1988-03-01",
    gender: "Male",
    address: "456 Green Street, Islamabad",
    customerByfrom: "POS", // Existing role
    description: "An entrepreneur with a strong background in business development and finance.",
    email: "ahmed.raza@example.com",
    phone: "03098765432",
    purchaseOrders: 8, // New field added
  },
  {
    id: 5,
    firstname: "Mariam",
    lastName: "Iqbal",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    age: 29,
    city: "Karachi",
    dob: "1994-11-25",
    gender: "Female",
    address: "987 Ocean Drive, Karachi",
    customerByfrom: "Website", // Existing role
    description: "A creative designer with expertise in UX/UI and graphic design.",
    email: "mariam.iqbal@example.com",
    phone: "03011223344",
    purchaseOrders: 6, // New field added
  },
  {
    id: 6,
    firstname: "Usman",
    lastName: "Javed",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    age: 32,
    city: "Lahore",
    dob: "1991-07-19",
    gender: "Male",
    address: "321 Crescent Street, Lahore",
    customerByfrom: "Website", // Existing role
    description: "A data science consultant specializing in analytics and machine learning.",
    email: "usman.javed@example.com",
    phone: "03344556677",
    purchaseOrders: 4, // New field added
  },
  {
    id: 7,
    firstname: "Nadia",
    lastName: "Syed",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    age: 27,
    city: "Karachi",
    dob: "1996-09-30",
    gender: "Female",
    address: "654 Blueberry Lane, Karachi",
    customerByfrom: "POS", // Existing role
    description: "A marketing specialist with a focus on social media and digital campaigns.",
    email: "nadia.syed@example.com",
    phone: "03451234999",
    purchaseOrders: 10, // New field added
  },
  {
    id: 8,
    firstname: "Bilal",
    lastName: "Sharif",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    age: 24,
    city: "Islamabad",
    dob: "1999-04-11",
    gender: "Male",
    address: "321 Sunset Boulevard, Islamabad",
    customerByfrom: "Website", // Existing role
    description: "A recent graduate looking to gain experience in web development and coding.",
    email: "bilal.sharif@example.com",
    phone: "03123456789",
    purchaseOrders: 1, // New field added
  },
  {
    id: 9,
    firstname: "Sana",
    lastName: "Saleem",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    age: 33,
    city: "Lahore",
    dob: "1990-01-12",
    gender: "Female",
    address: "432 Oak Road, Lahore",
    customerByfrom: "POS", // Existing role
    description: "An experienced HR manager with a focus on talent acquisition and employee development.",
    email: "sana.saleem@example.com",
    phone: "03023456789",
    purchaseOrders: 7, // New field added
  },
  {
    id: 10,
    firstname: "Faisal",
    lastName: "Rashid",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    age: 27,
    city: "Karachi",
    dob: "1996-06-05",
    gender: "Male",
    address: "741 River Street, Karachi",
    customerByfrom: "POS", // Existing role
    description: "A software engineer specializing in backend development and cloud technologies.",
    email: "faisal.rashid@example.com",
    phone: "03112233445",
    purchaseOrders: 12, 
  },
];

export default users;
