import { useState } from "react";
import DriverCard from "./DriverCard";

const mockDrivers = [
  { id: 1, name: "Rajesh Kumar", rating: 4.8, status: "Available", location: "Downtown", vehicle: "Honda Activa", image: "/driver1.jpg" },
  { id: 2, name: "Anita Singh", rating: 4.5, status: "On Delivery", location: "Sector 45", vehicle: "Royal Enfield", image: "/driver2.jpg" },
  { id: 3, name: "Vikram Mehta", rating: 4.9, status: "Available", location: "City Center", vehicle: "Suzuki Access", image: "/driver3.jpg" },
];

export default function DriverDashboard() {
  const [drivers, setDrivers] = useState(mockDrivers);

  const assignOrder = (id) => {
    setDrivers((prev) =>
      prev.map((driver) =>
        driver.id === id ? { ...driver, status: "On Delivery" } : driver
      )
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold">🚚 Driver Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {drivers.map((driver) => (
          <DriverCard
            key={driver.id}
            {...driver}
            onAssign={() => assignOrder(driver.id)}
          />
        ))}
      </div>
    </div>
  );
}
