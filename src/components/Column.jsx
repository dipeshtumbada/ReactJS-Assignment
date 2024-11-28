import React from "react";
import TicketCard from "./TicketCard";

import { ReactComponent as BacklogIcon } from "../assets/icons/Backlog.svg";
import { ReactComponent as TodoIcon } from "../assets/icons/To-do.svg";
import { ReactComponent as InProgressIcon } from "../assets/icons/in-progress.svg";
import { ReactComponent as DoneIcon } from "../assets/icons/Done.svg";
import { ReactComponent as CancelledIcon } from "../assets/icons/Cancelled.svg";

import { ReactComponent as UrgentIcon } from "../assets/icons/SVG-Urgent-Priority-colour.svg";
import { ReactComponent as HighPriorityIcon } from "../assets/icons/Img-High-Priority.svg";
import { ReactComponent as MediumPriorityIcon } from "../assets/icons/Img-Medium-Priority.svg";
import { ReactComponent as LowPriorityIcon } from "../assets/icons/Img-Low-Priority.svg";
import { ReactComponent as NoPriorityIcon } from "../assets/icons/No-priority.svg";

import { ReactComponent as AddIcon } from "../assets/icons/add.svg";
import { ReactComponent as ThreeDotMenuIcon } from "../assets/icons/3-dot-menu.svg";

const Column = ({ title, tickets }) => {
  const getHeaderIcon = (header) => {
    switch (header) {
      case "Backlog":
        return <BacklogIcon />;
      case "Todo":
        return <TodoIcon />;
      case "Inprogress":
        return <InProgressIcon />;
      case "Done":
        return <DoneIcon />;
      case "Cancelled":
        return <CancelledIcon />;

      case "No Priority":
        return <NoPriorityIcon />;
      case "Urgent":
        return <UrgentIcon />;
      case "High":
        return <HighPriorityIcon />;
      case "Medium":
        return <MediumPriorityIcon />;
      case "Low":
        return <LowPriorityIcon />;

      default:
        return null;
    }
  };

  return (
    <div className="column">
      {/* Column Header */}
      <div className="column-header">
        <div className="column-header-content">
          {/* Icon and Title */}
          <div className="icon-before">{getHeaderIcon(title)}</div>
          <h2>
            {title} {tickets.length}
          </h2>
        </div>

        {/* Action Icons */}
        <div className="icons-after">
          <AddIcon className="add-icon" />
          <ThreeDotMenuIcon className="three-dot-icon" />
        </div>
      </div>

      {/* Tickets */}
      {tickets.length > 0 ? (
        tickets.map((ticket) => <TicketCard key={ticket.id} ticket={ticket} />)
      ) : (
        <div className="no-tickets-placeholder">No tickets available</div>
      )}
    </div>
  );
};

export default Column;
