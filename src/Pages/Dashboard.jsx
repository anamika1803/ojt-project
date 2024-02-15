import React from 'react'
import Notice from './Notice';
// import User from './User';
import { IconBell, IconChartPie, IconFileText,IconLogout,IconSettings } from '@tabler/icons-react';

export const Dashboard = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-64 fixed left-0 top-0 overflow-y-auto">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <ul className="mt-4">
          <li className="py-2">
            <a href="Notice" className="block hover:bg-gray-700">
              <IconBell className="inline-block w-6 h-6 mr-2" /> Notice
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="block hover:bg-gray-700">
              <IconChartPie className="inline-block w-6 h-6 mr-2" /> Analytics
            </a>
          </li>
          <li className="py-2">
            <a href="User" className="block hover:bg-gray-700">
              <IconFileText className="inline-block w-6 h-6 mr-2" /> User
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="block hover:bg-gray-700">
              <IconSettings className="inline-block w-6 h-6 mr-2" /> Settings
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="block hover:bg-gray-700">
              <IconLogout className="inline-block w-6 h-6 mr-2" /> Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;





// import React from 'react';
// import { IconBell, IconChartPie, IconFileText, IconSettings } from '@tabler/icons-react';
// export const Dashboard=()=> {
//   return (
//     <div className="bg-gray-800 text-white h-screen w-64 fixed left-0 top-0 overflow-y-auto">
//       <div className="p-4">
//         <h1 className="text-2xl font-bold">Dashboard</h1>
//         <ul className="mt-4">
//           <li className="py-2">
//             <a href="#" className="block hover:bg-gray-700">Notice</a>
//           </li>
//           <li className="py-2">
//             <a href="#" className="block hover:bg-gray-700">Analytics</a>
//           </li>
//           <li className="py-2">
//             <a href="#" className="block hover:bg-gray-700">Reports</a>
//           </li>
//           <li className="py-2">
//             <a href="#" className="block hover:bg-gray-700">Settings</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;



// // import { useState } from "react";
// // import {
// //   createStyles,
// //   Navbar,
// //   Group,
// //   Code,
// //   getStylesRef,
// //   rem,
// //   UnstyledButton,
// // } from "@mantine/core";
// // import {
// //   IconLogout,
// //   IconHome2,
// //   IconUser,
// //   IconHistory,
// //   IconFile3d,
// //   IconBrandProducthunt,
// //   IconListCheck,
// //   IconCategory2,
// //   IconRating12Plus,
// //   IconNewSection,
// //   IconTag,
// //   IconCode,
// //   IconLogin,
// // } from "@tabler/icons-react";
// // import React from "react";
// // import { Routes, Route, useNavigate } from "react-router-dom";

// // import { Link, Navigate, Outlet } from "react-router-dom";
// // import Home from "./Home";

// // const useStyles = createStyles((theme) => ({
// //   header: {
// //     paddingBottom: theme.spacing.md,
// //     marginBottom: `calc(${theme.spacing.md} * 1.5)`,
// //     borderBottom: `${rem(1)} solid ${
// //       theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
// //     }`,
// //   },

// //   footer: {
// //     paddingTop: theme.spacing.md,
// //     marginTop: theme.spacing.md,
// //     borderTop: `${rem(1)} solid ${
// //       theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
// //     }`,
// //   },

// //   link: {
// //     ...theme.fn.focusStyles(),
// //     display: "flex",
// //     alignItems: "center",
// //     textDecoration: "none",
// //     fontSize: theme.fontSizes.sm,
// //     color:
// //       theme.colorScheme === "dark"
// //         ? theme.colors.dark[1]
// //         : theme.colors.gray[7],
// //     padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
// //     borderRadius: theme.radius.sm,
// //     fontWeight: 500,

// //     "&:hover": {
// //       backgroundColor:
// //         theme.colorScheme === "dark"
// //           ? theme.colors.dark[6]
// //           : theme.colors.gray[0],
// //       color: theme.colorScheme === "dark" ? theme.white : theme.black,

// //       [`& .${getStylesRef("icon")}`]: {
// //         color: theme.colorScheme === "dark" ? theme.white : theme.black,
// //       },
// //     },
// //   },

// //   linkIcon: {
// //     ref: getStylesRef("icon"),
// //     color:
// //       theme.colorScheme === "dark"
// //         ? theme.colors.dark[2]
// //         : theme.colors.gray[6],
// //     marginRight: theme.spacing.sm,
// //   },

// //   linkActive: {
// //     "&, &:hover": {
// //       backgroundColor: theme.fn.variant({
// //         variant: "light",
// //         color: theme.primaryColor,
// //       }).background,
// //       color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
// //         .color,
// //       [`& .${getStylesRef("icon")}`]: {
// //         color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
// //           .color,
// //       },
// //     },
// //   },
// // }));

// // const data = [
// //   { link: "/Dashboard/home", label: "Home", icon: IconHome2 },
// //   { link: "/Dashboard/user", label: "User", icon: IconUser },
// //   { link: "/Dashboard/login", label: "Login", icon: IconLogin },
  
  
  
// // ];

// // export default function Dashboard({ active, setActive }) {
// //   const { classes, cx } = useStyles();

// //   const navigate = useNavigate();
// //   const links = data.map((item) => (
// //     <Link
// //       to={item.link}
// //       className={cx(classes.link, {
// //         [classes.linkActive]: item.label === active,
// //       })}
// //       key={item.label}
// //       onClick={(event) => {
// //         event.preventDefault();
// //         setActive(item.label);
// //         navigate(item.link);
// //       }}
// //     >
// //       <item.icon className={classes.linkIcon} stroke={1.5} />
// //       <span>{item.label}</span>
// //     </Link>
// //   ));
  

// //   return (
// //     <div className="flex">
// //       <Navbar
// //         className="overflow-auto"
// //         height={700}
// //         width={{ sm: 300 }}
// //         p="md"
// //         style={{ position: "fixed", left: 0 }}
// //       >
// //         <Navbar.Section grow>
// //           <Group className={classes.header} position="apart">
// //             <Code sx={{ fontWeight: 700 }}>Super Admin Dashboard</Code>
// //           </Group>
// //           {links}
// //         </Navbar.Section>

// //         <Navbar.Section className={classes.footer}>
// //           <UnstyledButton
// //             className={classes.link}
// //             onClick={(event) => {
// //               localStorage.removeItem("user");
// //               localStorage.removeItem("userToken");
// //               localStorage.removeItem("userType");
// //               window.location.reload();
// //             }}
// //           >
// //             <IconLogout className={classes.linkIcon} stroke={1.5} />
// //             <span>Logout</span>
// //           </UnstyledButton>
// //         </Navbar.Section>
// //       </Navbar>
// //       <div
// //         style={{
// //           width: "-webkit-fill-available",
// //           marginLeft: 300,
// //           padding: "1rem",
// //           height: "100vh",
// //           overflowY: "auto",
// //         }}
// //       >
// //         <Routes>
// //           <Route path="/home" element={<Home />} />
// //         </Routes>
// //       </div>
// //     </div>
// //   );
// // }
