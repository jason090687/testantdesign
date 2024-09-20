import { Line, Bar, Pie } from "react-chartjs-2";  // Correctly import Line component
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Data from "./Data"; // Import your actual event data
// import EventListData from "./EventListData";
import './Chart.css'

// Register the components required for the Line chart
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Chart = () => {
  // Extract event titles for labels and total attendees for data points
  const labels = Data.map(event => event.eventTittle);
  const dataPoints = Data.map(event => parseInt(event.totalAttendees, 10));

  // Set up the data structure required by chart.js for the Line chart
  const data = {
    labels, // X-axis labels (event titles)
    datasets: [
      {
        label: 'Total Attendees',
        data: dataPoints, // Y-axis data (total attendees per event)
        backgroundColor: 'rgba(75, 192, 192, 0.4)', // Line color with some transparency
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        tension: 0.1, // Smooth the line
        fill: true, // Fill the area under the line
        pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Color of the data points
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Total Attendees per Event',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line options={options} data={data} />; // Render Line chart
};





const eventData = [
  { event: 'PATHFIT', attendees: 324 },
  { event: 'Larong Pinoy', attendees: 310 },
  { event: 'Intrams', attendees: 500 },
  { event: 'Lycan fest', attendees: 432 },
  { event: 'Basketball', attendees: 233 },
];

export const BarCharts = () => {
  // Data for Bar chart
  const barData = {
    labels: eventData.map((item) => item.event),
    datasets: [
      {
        label: 'Attendees',
        data: eventData.map((item) => item.attendees),
        backgroundColor: 'rgba(25, 20, 50, 0.8)',
        borderRadius: 10,
      },
    ],
  };

  // Options for Bar chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return ` ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Attendees',
          color: '#333',
        },
        ticks: {
          color: '#333',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Event',
          color: '#333',
        },
        ticks: {
          color: '#333',
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <div className="bar-chart">
        <Bar data={barData} options={options} />
      </div>
      <div className="arrow-button">
        <button className="next-button">
          <span>&#8594;</span>
        </button>
      </div>
    </div>
  );
};


export const PieChart = () => {
  // Data for the Pie chart
  const pieData = {
    labels: eventData.map((item) => item.event),
    datasets: [
      {
        label: 'Attendees',
        data: eventData.map((item) => item.attendees),
        backgroundColor: [
          'rgba(25, 20, 50, 0.8)',
          'rgba(75, 50, 200, 0.6)',
          'rgba(150, 100, 250, 0.6)',
          'rgba(100, 150, 200, 0.6)',
          'rgba(50, 100, 150, 0.6)',
        ],
        borderColor: [
          'rgba(25, 20, 50, 1)',
          'rgba(75, 50, 200, 1)',
          'rgba(150, 100, 250, 1)',
          'rgba(100, 150, 200, 1)',
          'rgba(50, 100, 150, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // We'll customize the legend using CSS
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            let sum = 0;
            eventData.forEach(data => {
              sum += data.attendees;
            });
            let percentage = ((tooltipItem.raw / sum) * 100).toFixed(1) + '%';
            return `${tooltipItem.label}: ${percentage}`;
          },
        },
      },
    },
  };

  return (
    <div className="pie-chart-container">
      <Pie data={pieData} options={options} />
      <div className="custom-legend">
        {eventData.map((item, index) => (
          <div key={index} className="legend-item">
            <span
              className="legend-color"
              style={{ backgroundColor: pieData.datasets[0].backgroundColor[index] }}
            ></span>
            <span className="legend-label">{item.event}</span>
          </div>
        ))}
      </div>
    </div>
  );
};