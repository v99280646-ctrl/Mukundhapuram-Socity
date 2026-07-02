//#region node_modules/.nitro/vite/services/ssr/assets/event-api-BLNrnj_3.js
var BASE_URL = "https://backbin.colaber.in/business_website/class_room/customer/posts";
async function fetchEventPosts(accountTypeId, page = 1) {
	const response = await fetch(`${BASE_URL}/get_event_posts?accountTypeId=${encodeURIComponent(accountTypeId)}&page=${page}`);
	if (!response.ok) throw new Error(`Failed to load event posts: ${response.status}`);
	return await response.json();
}
async function fetchEventPostDetails(slug) {
	const response = await fetch(`${BASE_URL}/get_event_post_details?slug=${encodeURIComponent(slug)}`);
	if (!response.ok) throw new Error(`Failed to load event details: ${response.status}`);
	return await response.json();
}
//#endregion
export { fetchEventPosts as n, fetchEventPostDetails as t };
