// import { BotMessageSquare } from "lucide-react";
// import { BatteryCharging } from "lucide-react";
// import { Fingerprint } from "lucide-react";
// import { ShieldHalf } from "lucide-react";
// import { PlugZap } from "lucide-react";
// import { GlobeLock } from "lucide-react";
// import { AlarmClock } from "lucide-react";
// import { CircleAlert } from "lucide-react";
// import { Ambulance } from "lucide-react";


import dashboard from "../assets/dashboard.png";
// import privacy from "../assets/privacy.png";
import privacy from "../assets/privacy.png";
import edit_tools from "../assets/edit_tools.png";
import conference from "../assets/conference.png";

import vijay from "../assets/vijay.png"

import private_concern from "../assets/private_concern.png"
import public_concern from "../assets/public_concern.png"
import concern_around from "../assets/concern_around.png"

export const sidebarInfo = [
      {
        icon: dashboard,
        title: "DASHBOARD",
        text: "SHOW ALL THE RELAVANT INFORMATION",
      },
      {
        icon: dashboard,
        title: "DASHBOARD",
        text: "Show all the relevent information",
      },
      {
        icon: privacy,
        title: "PRIVATE CONCERN",
        text: "YOUR PERSONAL PROBLEM NOT VISIBLE TO ANYONE ELSE",
      },
      {
        icon: edit_tools,
        title: "CREATE CONCERN",
        text: "CREATE YOUR PRIVATE CONCERN OR PUBLIC VOICE",
      },
      {
        icon: conference,
        title: "MY PUBLIC VOICE",
        text: "PUBLIC VOICE YOU CAN CREATE WHILE REMAIN ANONYMOUS",
      },
      
    ];

export const students = [
  {
    student1: {
      firstName:"Vijay",
      lastName:"Kumar",
      idNo :"21F-BSCS-30",
      img: vijay
    },
  },
];

export const stats =[
 {
    icon: private_concern,
    number:254,
    text: "PRIVATE CONCERN"
 },
 {
    icon: public_concern,
    number:254,
    text: "PUBLIC CONCERN"
  },
  {
    icon: concern_around,
    number:254,
    text: "CONCERN AROUND UNIVERSITY"
  },
];