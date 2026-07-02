import { n as fetchEventPosts } from "./event-api-BLNrnj_3.mjs";
import { h as createFileRoute, m as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-Dc_B9_Pw.js
var $$splitComponentImporter = () => import("./events-DcqRYSpm.mjs");
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
