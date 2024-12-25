const invoices = [
    {
      id: "ORD001",
      customer: "John Doe",
      total: "$120.50",
      date: "2024-12-01",
      status: "Shipped",
      productName: "Chanel No. 5 Eau de Parfum",
      brand: "Chanel",
      bookingDate: "2024-11-25",
      deliveryDate: "2024-12-05",
      address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "USA",
      },
    },
    {
      id: "ORD002",
      customer: "Jane Smith",
      total: "$250.00",
      date: "2024-12-02",
      status: "Paid",
      productName: "Dior Sauvage Eau de Toilette",
      brand: "Dior",
      bookingDate: "2024-11-28",
      deliveryDate: "2024-12-06",
      address: {
        street: "456 Elm St",
        city: "Los Angeles",
        state: "CA",
        zipCode: "90001",
        country: "USA",
      },
    },
    {
      id: "ORD003",
      customer: "Emily Johnson",
      total: "$100.00",
      date: "2024-12-03",
      status: "Canceled",
      productName: "Tom Ford Black Orchid",
      brand: "Tom Ford",
      bookingDate: "2024-11-27",
      deliveryDate: "2024-12-07",
      address: {
        street: "789 Oak St",
        city: "Chicago",
        state: "IL",
        zipCode: "60601",
        country: "USA",
      },
    },
    {
      id: "ORD004",
      customer: "David Brown",
      total: "$50.00",
      date: "2024-12-04",
      status: "In-progress",
      productName: "Creed Aventus",
      brand: "Creed",
      bookingDate: "2024-12-01",
      deliveryDate: "2024-12-10",
      address: {
        street: "101 Pine St",
        city: "Houston",
        state: "TX",
        zipCode: "77001",
        country: "USA",
      },
    },
    {
      id: "ORD005",
      customer: "Sophie Green",
      total: "$300.00",
      date: "2024-12-05",
      status: "Paid",
      productName: "Jo Malone London Wood Sage & Sea Salt",
      brand: "Jo Malone",
      bookingDate: "2024-11-30",
      deliveryDate: "2024-12-08",
      address: {
        street: "202 Birch St",
        city: "San Francisco",
        state: "CA",
        zipCode: "94101",
        country: "USA",
      },
    },
    {
      id: "ORD006",
      customer: "Michael White",
      total: "$75.50",
      date: "2024-12-06",
      status: "Shipped",
      productName: "Giorgio Armani Acqua di Gio",
      brand: "Giorgio Armani",
      bookingDate: "2024-12-02",
      deliveryDate: "2024-12-09",
      address: {
        street: "303 Maple St",
        city: "Boston",
        state: "MA",
        zipCode: "02101",
        country: "USA",
      },
    },
    {
      id: "ORD007",
      customer: "Olivia Black",
      total: "$600.00",
      date: "2024-12-07",
      status: "In-progress",
      productName: "Yves Saint Laurent Black Opium",
      brand: "Yves Saint Laurent",
      bookingDate: "2024-12-03",
      deliveryDate: "2024-12-12",
      address: {
        street: "404 Cedar St",
        city: "Miami",
        state: "FL",
        zipCode: "33101",
        country: "USA",
      },
    },
    {
      id: "ORD008",
      customer: "Chris Gray",
      total: "$420.75",
      date: "2024-12-08",
      status: "Paid",
      productName: "Chloé Nomade Eau de Parfum",
      brand: "Chloé",
      bookingDate: "2024-12-04",
      deliveryDate: "2024-12-13",
      address: {
        street: "505 Pineapple St",
        city: "Las Vegas",
        state: "NV",
        zipCode: "89101",
        country: "USA",
      },
    },
    {
      id: "ORD009",
      customer: "Emma Blue",
      total: "$200.00",
      date: "2024-12-09",
      status: "Shipped",
      productName: "Hermès Terre d’Hermès",
      brand: "Hermès",
      bookingDate: "2024-12-05",
      deliveryDate: "2024-12-10",
      address: {
        street: "606 Ocean Ave",
        city: "Seattle",
        state: "WA",
        zipCode: "98101",
        country: "USA",
      },
    },
    {
      id: "ORD010",
      customer: "Liam Yellow",
      total: "$80.00",
      date: "2024-12-10",
      status: "Canceled",
      productName: "Chanel Coco Mademoiselle",
      brand: "Chanel",
      bookingDate: "2024-12-06",
      deliveryDate: "2024-12-11",
      address: {
        street: "707 Sunset Blvd",
        city: "Austin",
        state: "TX",
        zipCode: "73301",
        country: "USA",
      },
    },
  ];
  
  export default invoices;
  