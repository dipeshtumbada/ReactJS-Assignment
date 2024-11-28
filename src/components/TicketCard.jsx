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

const getStatusIcon = (status) => {
  switch (status) {
    case "Done":
      return require("../assets/icons/Done.svg").default; 
    case "Todo":
      return require("../assets/icons/To-do.svg").default; 
    case "Inprogress":
      return require("../assets/icons/in-progress.svg").default; 
      case "Cancelled":
        return require("../assets/icons/Cancelled.svg").default;
        case "Backlog":
      return require("../assets/icons/Backlog.svg").default; 
    default:
      return null;
  }
};

const TicketCard = ({ ticket }) => {
  const icon = getIcon(ticket.priority);
  const statusIcon = getStatusIcon(ticket.status);

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <h3 style={{ color: 'rgba(169, 169, 169, 1)' }}>{ticket.id}</h3>
      </div>

<div className="p-row">
    {statusIcon && <img src={statusIcon} alt={ticket.status} className="status-icon" />}
    <p>{ticket.title}</p>
  </div>  

      
      <div className="row-card">

      
      <img src={icon} alt={`Priority ${ticket.priority}`} className="priority-icon" />
      
      <div className="tags">
        {ticket.tag.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default TicketCard;
