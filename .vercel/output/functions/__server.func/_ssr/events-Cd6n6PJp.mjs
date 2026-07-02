import { n as fetchEventPosts } from "./event-api-BJA_0s-U.mjs";
import { h as createFileRoute, m as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-Cd6n6PJp.js
var $$splitComponentImporter = () => import("./events-DNzWoK_E.mjs");
var Route = createFileRoute("/events")({
	loader: async () => {
		return (await fetchEventPosts("69280bcd5ec9adaee4326afc", 1)).posts;
	},
	head: () => ({ meta: [{ title: "Events - Mukundhapuram Socity Limited" }, {
		name: "description",
		content: "Upcoming and recent events, meetings, and member programs from Mukundhapuram Socity Limited."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
