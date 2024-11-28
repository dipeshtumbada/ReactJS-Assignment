import React from "react";

const getIcon = (priority) => {
  switch (priority) {
    case 4:
      return require("../assets/icons/SVG-Urgent-Priority-colour.svg").default;
    case 3:
      return require("../assets/icons/Img-High-Priority.svg").default;
    case 2:
      return require("../assets/icons/Img-Medium-Priority.svg").default;
    case 1:
      return require("../assets/icons/Img-Low-Priority.svg").default;
    case 0:
      return require("../assets/icons/No-priority.svg").default;
    default:
      return require("../assets/icons/To-do.svg").default;
  }
};

const TicketCard = ({ ticket }) => {
  const icon = getIcon(ticket.priority);

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <h3>{ticket.id}</h3>
        <img src={icon} alt={`Priority ${ticket.priority}`} className="priority-icon" />
      </div>
      <p>{ticket.title}</p>
      <div className="tags">
        {ticket.tag.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TicketCard;
