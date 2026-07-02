//#region node_modules/.nitro/vite/services/ssr/assets/event-api-BJA_0s-U.js
var BASE_URL = "https://backbin.colaber.in/business_website/class_room/customer/posts";
async function fetchEventPosts(accountTypeId, page = 1) {
	try {
		const response = await fetch(`${BASE_URL}/get_event_posts?accountTypeId=${encodeURIComponent(accountTypeId)}&page=${page}`);
		if (!response.ok) return {
			success: false,
			message: `Failed to load event posts: ${response.status}`,
			total: 0,
			currentPage: page,
			totalPages: 0,
			posts: []
		};
		return await response.json();
	} catch (error) {
		return {
			success: false,
			message: error instanceof Error ? error.message : "Failed to load event posts",
			total: 0,
			currentPage: page,
			totalPages: 0,
			posts: []
		};
	}
}
async function fetchEventPostDetails(slug) {
	try {
		const response = await fetch(`${BASE_URL}/get_event_post_details?slug=${encodeURIComponent(slug)}`);
		if (!response.ok) return {
			success: false,
			message: `Failed to load event details: ${response.status}`,
			post: null
		};
		return await response.json();
	} catch (error) {
		return {
			success: false,
			message: error instanceof Error ? error.message : "Failed to load event details",
			post: null
		};
	}
}
//#endregion
export { fetchEventPosts as n, fetchEventPostDetails as t };
