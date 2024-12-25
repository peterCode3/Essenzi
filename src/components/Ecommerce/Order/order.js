const ordersData = [
  {
    "id": "ORD011",
    "customer": "Emily Carter",
    "total": "AED 5330.25",
    "date": "2024-12-11",
    "status": "Shipped",
    "productName": "A Goodnight Kiss",
    "bookingDate": "2024-12-06",
    "deliveryDate": "2024-12-12",
    "address": {
      "street": "101 Rose Ave",
      "city": "Chicago",
      "state": "IL",
      "zipCode": "60605",
      "country": "USA"
    }
  },
  {
    "id": "ORD012",
    "customer": "Jacob Lee",
    "total": "AED 5330.25",
    "date": "2024-12-12",
    "status": "Pending",
    "productName": "Ch Men Sport",
    "bookingDate": "2024-12-07",
    "deliveryDate": "2024-12-14",
    "address": {
      "street": "202 Maple Dr",
      "city": "Los Angeles",
      "state": "CA",
      "zipCode": "90002",
      "country": "USA"
    }
  },
  {
    "id": "ORD013",
    "customer": "Lucas Scott",
    "total": "AED 241.5",
    "date": "2024-12-13",
    "status": "Delivered",
    "productName": "Chance Eau Tendre Deodorant Spray",
    "bookingDate": "2024-12-08",
    "deliveryDate": "2024-12-12",
    "address": {
      "street": "303 Pine Blvd",
      "city": "Miami",
      "state": "FL",
      "zipCode": "33102",
      "country": "USA"
    }
  },
  {
    "id": "ORD014",
    "customer": "Avery King",
    "total": "AED 5330.25	",
    "date": "2024-12-14",
    "status": "Shipped",
    "productName": "A Goodnight Kiss",
    "bookingDate": "2024-12-09",
    "deliveryDate": "2024-12-15",
    "address": {
      "street": "404 Oak Rd",
      "city": "Seattle",
      "state": "WA",
      "zipCode": "98102",
      "country": "USA"
    }
  },
  {
    "id": "ORD015",
    "customer": "Isabella Moore",
    "total": "AED 812.57",
    "date": "2024-12-15",
    "status": "Delivered",
    "productName": "Prevage Glow",
    "bookingDate": "2024-12-10",
    "deliveryDate": "2024-12-16",
    "address": {
      "street": "505 Elm Dr",
      "city": "Dallas",
      "state": "TX",
      "zipCode": "75202",
      "country": "USA"
    }
  },
  {
    "id": "ORD016",
    "customer": "Zoe Adams",
    "total": "AED 45",
    "date": "2024-12-16",
    "status": "Shipped",
    "productName": "Enchanting Brow Eyebrow Duo",
    "bookingDate": "2024-12-10",
    "deliveryDate": "2024-12-17",
    "address": {
      "street": "123 Magnolia St",
      "city": "San Francisco",
      "state": "CA",
      "zipCode": "94107",
      "country": "USA"
    }
  },
  {
    "id": "ORD017",
    "customer": "Charlotte Miller",
    "total": "AED 52",
    "date": "2024-12-17",
    "status": "Pending",
    "productName": "Crème Touch Liq Matte Lipstick",
    "bookingDate": "2024-12-11",
    "deliveryDate": "2024-12-18",
    "address": {
      "street": "789 Willow Rd",
      "city": "New York",
      "state": "NY",
      "zipCode": "10002",
      "country": "USA"
    }
  },
  {
    "id": "ORD018",
    "customer": "Benjamin Evans",
    "total": "AED 185.15",
    "date": "2024-12-18",
    "status": "Shipped",
    "productName": "Antaeus Deodorant Stick",
    "bookingDate": "2024-12-13",
    "deliveryDate": "2024-12-19",
    "address": {
      "street": "234 Pine Ave",
      "city": "Houston",
      "state": "TX",
      "zipCode": "77002",
      "country": "USA"
    }
  },
  {
    "id": "ORD019",
    "customer": "Amelia White",
    "total": "AED 241.5",
    "date": "2024-12-19",
    "status": "Delivered",
    "productName": "Chance Eau Tendre Deodorant Spray",
    "bookingDate": "2024-12-14",
    "deliveryDate": "2024-12-20",
    "address": {
      "street": "567 Oak Dr",
      "city": "Phoenix",
      "state": "AZ",
      "zipCode": "85003",
      "country": "USA"
    }
  },
  {
    "id": "ORD020",
    "customer": "Elijah Brown",
    "total": "AED 185.15",
    "date": "2024-12-20",
    "status": "Pending",
    "productName": "Antaeus Deodorant Stick",
    "bookingDate": "2024-12-15",
    "deliveryDate": "2024-12-21",
    "address": {
      "street": "808 Cedar St",
      "city": "Los Angeles",
      "state": "CA",
      "zipCode": "90003",
      "country": "USA"
    }
  }
];

export default ordersData;
