import { useState } from "react";
import DriverCard from "../component/DriverCard";

const mockDrivers = [
  { id: 1, name: "Rajesh Kumar", rating: 4.8, status: "Available", location: "Downtown", vehicle: "Honda Activa" },
  { id: 2, name: "Anita Singh", rating: 4.5, status: "On Delivery", location: "Sector 45", vehicle: "Royal Enfield", },
  { id: 3, name: "Vikram Mehta", rating: 4.9, status: "Available", location: "City Center", vehicle: "Suzuki Access", },
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
    <div className="p-6 bg-gray-100 min-h-screen max-w-screen-xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">🚚 Driver Management</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
