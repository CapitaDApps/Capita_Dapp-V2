"use client";

import React, { useState } from "react";

type Notification = {
  id: string;
  title: string;
  time: string;
  description: string;
  amount?: string;
  currency?: string;
  destination?: string;
  type?: string;
  read?: boolean;
  iconEmoji?: string;
  iconBg?: string;
};

const initialNotifications: Notification[] = [
  {
    id: "1",
    title: "New Contribution Received",
    time: "1 day ago",
    description:
      '"Medical Expenses Support campaign" received a 0.5 ETH contribution',
    amount: "0.5 ETH",
    currency: "ETH",
    destination: "Anonymous",
    iconEmoji: "💚",
    iconBg: "bg-emerald-500",
    read: false,
  },
  {
    id: "2",
    title: "Campaign Milestone Reached",
    time: "1 day ago",
    description:
      '"Medical Expenses Support campaign" has reached 100% of its funding goal',
    iconEmoji: "🏁",
    iconBg: "bg-violet-500",
    read: false,
  },
  {
    id: "3",
    title: "Awaiting approval",
    time: "1 day ago",
    description:
      '"Medical Expenses Support campaign" has been created and is awaiting approval',
    iconEmoji: "⏳",
    iconBg: "bg-amber-400",
    read: false,
  },
  {
    id: "4",
    title: "Campaign Approved",
    time: "1 day ago",
    description: '"Medical Expenses Support campaign" has been approved',
    iconEmoji: "✅",
    iconBg: "bg-emerald-400",
    read: false,
  },
  {
    id: "5",
    title: "Campaign Cancellation",
    time: "1 day ago",
    description: '"Medical Expenses Support campaign" has been cancelled',
    iconEmoji: "⚠️",
    iconBg: "bg-rose-400",
    read: false,
  },
  {
    id: "6",
    title: "Contribution Refunded",
    time: "1 day ago",
    description:
      "A contribution of 100 USDT was refunded due to campaign cancellation",
    amount: "100 USDT",
    iconEmoji: "💸",
    iconBg: "bg-rose-300",
    read: false,
  },
  {
    id: "7",
    title: "Campaign Ended",
    time: "1 day ago",
    description:
      '"Medical Expenses Support campaign" has reached its completion',
    iconEmoji: "🏁",
    iconBg: "bg-emerald-400",
    read: false,
  },
  {
    id: "8",
    title: "Weekly Summary",
    time: "1 day ago",
    description: "You received 15 contributions totaling $1,000 this week",
    amount: "0.5 ETH",
    currency: "ETH",
    destination: "Anonymous",
    iconEmoji: "📊",
    iconBg: "bg-indigo-500",
    read: false,
  },
];

export default function Notifications() {
  const [notifications, setNotifications] =
    useState<Notification[]>(initialNotifications);

  function markAllAsRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }

  return (
    <div className="p-6 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-[100px] md:mb-0">
          <div className="min-w-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Notifications
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              All recent activity related to your campaigns and contributions.
            </p>
          </div>

          <div className=" md:ml-4  md:w-auto">
            <button
              onClick={markAllAsRead}
              className=" inline-flex text-base justify-center items-center gap-2 bg-white text-black px-4 py-2 rounded-md shadow-sm hover:shadow-md transition"
            >
              Mark all as read
            </button>
          </div>
        </div>

        <div className="mt-6  border border-[#172028] rounded-2xl p-4 sm:p-6">
          <div className="divide-y divide-[#172028]">
            {notifications.map((n, idx) => (
              <div
                key={n.id}
                className={`flex gap-4 items-start py-4 sm:py-5 ${
                  n.read ? "opacity-80" : ""
                }`}
              >
                <div className="flex-shrink-0">
                  <div
                    className={`h-10 w-10 sm:h-11 sm:w-11 rounded-full flex items-center justify-center text-sm sm:text-base text-white ${n.iconBg}`}
                    aria-hidden
                  >
                    <span>{n.iconEmoji}</span>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex flex-col items-start gap-1">
                        <h3 className="text-sm sm:text-base font-semibold text-white truncate">
                          {n.title}
                        </h3>
                        <span className="text-xs text-slate-400">{n.time}</span>
                      </div>
                      <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                        {n.description}
                      </p>
                      {n.amount && (
                        <div className="flex-shrink-0 gap-4 mt-3">
                          <span className="inline-flex items-center px-3 py-1 border border-slate-600 rounded-full text-xs font-medium text-white">
                            {n.amount}
                          </span>
                          <span className="text-base ml-3">
                            From {""}
                            {n.destination}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button
              className="text-sm text-slate-400 hover:text-white transition"
              onClick={() => alert("Load more (mock)")}
            >
              Load more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
