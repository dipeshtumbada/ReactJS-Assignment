import React, { useState, useEffect } from 'react';
import Column from './Column';
import Navbar from './Navbar';
import axios from 'axios';

const PRIORITY_LABELS = {
  0: "No Priority",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Urgent",
};

const PRIORITY_ORDER = ["No Priority", "Urgent", "High", "Medium", "Low"];

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState('status'); 
  const [sortBy, setSortBy] = useState('priority'); 

  const DEFAULT_STATUSES = ['Backlog', 'Todo', 'Inprogress', 'Done', 'Cancelled'];

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
      setTickets(response.data.tickets);
      setUsers(response.data.users);
    };
    fetchData();
  }, []);

  const normalizeStatus = (status) => {
    if (!status) return 'Backlog';
    return status
      .toLowerCase()
      .replace(/\s+/g, '')
      .replace(/^(.)/, (match) => match.toUpperCase());
  };

  const groupTickets = () => {
    return tickets.reduce((acc, ticket) => {
      const key =
        groupBy === "priority"
          ? PRIORITY_LABELS[ticket.priority] || "No Priority"
          : groupBy === "status"
          ? normalizeStatus(ticket.status)
          : users.find((user) => user.id === ticket.userId)?.name || "Unassigned";
      (acc[key] = acc[key] || []).push(ticket);
      return acc;
    }, {});
  };
  
  const sortedTickets = (tickets) =>
    tickets.sort((a, b) =>
      sortBy === 'priority'
        ? b.priority - a.priority
        : a.title.localeCompare(b.title)
    );

  const groupedTickets = groupTickets();

  const headers =
  groupBy === "priority"
    ? PRIORITY_ORDER
    : groupBy === "status"
    ? DEFAULT_STATUSES
    : Object.keys(groupedTickets);


  return (
    <div className="kanban-board">
      <Navbar groupBy={groupBy} setGroupBy={setGroupBy} sortBy={sortBy} setSortBy={setSortBy} />

      <div className="columns">
        {headers.map((key) => (
          <Column
            key={key}
            title={key}
            tickets={sortedTickets(groupedTickets[key] || [])}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;


