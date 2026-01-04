import { Outlet } from "react-router";
import EventsNavigation from "../components/EventsNavigation";
import MainNavigation from "../components/MainNavigation";

function EventsRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default EventsRootLayout;
