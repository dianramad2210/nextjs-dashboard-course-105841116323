"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { name: "Jan", revenue: 2000 },
  { name: "Feb", revenue: 3800 },
  { name: "Mar", revenue: 3500 },
  { name: "Apr", revenue: 5000 },
  { name: "May", revenue: 3100 },
  { name: "Jun", revenue: 1800 },
  { name: "Jul", revenue: 2500 },
  { name: "Aug", revenue: 2700 },
  { name: "Sep", revenue: 2200 },
  { name: "Oct", revenue: 3000 },
  { name: "Nov", revenue: 2600 },
  { name: "Dec", revenue: 3400 },
];

const latestInvoices = [
  { name: "Michael Novotny", email: "michael@novotny.com", amount: 448.0 },
  { name: "Delba de Oliveira", email: "delba@oliveira.com", amount: 5.0 },
  { name: "Balazs Orban", email: "balazs@orban.com", amount: 345.77 },
  { name: "Lee Robinson", email: "lee@robinson.com", amount: 542.46 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-500">Collected</h3>
          <p className="text-2xl font-bold">$1,006.26</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-500">Pending</h3>
          <p className="text-2xl font-bold">$1,256.32</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-500">Total Invoices</h3>
          <p className="text-2xl font-bold">13</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-500">Total Customers</h3>
          <p className="text-2xl font-bold">6</p>
        </div>
      </div>

      {/* Chart + Latest Invoices */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Revenue</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Latest Invoices */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Latest Invoices</h3>
          <ul className="divide-y divide-gray-200">
            {latestInvoices.map((invoice, idx) => (
              <li key={idx} className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium">{invoice.name}</p>
                  <p className="text-sm text-gray-500">{invoice.email}</p>
                </div>
                <p className="font-semibold">${invoice.amount.toFixed(2)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
