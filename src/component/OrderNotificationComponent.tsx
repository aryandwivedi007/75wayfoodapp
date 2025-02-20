import React, { useEffect } from "react";

interface OrderNotificationProps {
  orderStage: "confirmed" | "prepared" | "delivered";
}

const OrderNotificationComponent: React.FC<OrderNotificationProps> = ({ orderStage }) => {
  useEffect(() => {
    if ("Notification" in window && Notification.permission === "granted") {
      let title = "";
      let body = "";

      switch (orderStage) {
        case "confirmed":
          title = "Order Confirmed";
          body = "Your order has been confirmed!";
          break;
        case "prepared":
          title = "Order Prepared";
          body = "Your order is prepared and will be on its way soon.";
          break;
        case "delivered":
          title = "Order Delivered";
          body = "Your order has been delivered. Enjoy your meal!";
          break;
        default:
          break;
      }

      if (title && body) {
        new Notification(title, { body });
      }
    }
  }, [orderStage]);

  return null;
};

export default OrderNotificationComponent;
