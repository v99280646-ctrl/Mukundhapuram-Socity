const BASE_URL = "https://backbin.colaber.in/business_website/class_room/customer/posts";

export type EventPostMedia = {
  url: string;
  type?: string;
  name?: string;
};

export type EventPostListItem = {
  _id: string;
  title: string;
  content?: string;
  category?: string;
  media?: EventPostMedia[];
  slug: string;
  metaTitle?: string;
  createdAt?: string;
  updatedAt?: string;
  visibility?: string;
};

export type EventPostDetails = EventPostListItem & {
  userId?: { _id?: string };
  tags?: string[];
  views?: number;
  likes?: unknown[];
  comments?: unknown[];
  featured?: boolean;
  featuredTitle?: string;
  sortKey?: string;
  __v?: number;
};

export type EventPostsListResponse = {
  success: boolean;
  message: string;
  total: number;
  currentPage: number;
  totalPages: number;
  posts: EventPostListItem[];
};

export type EventPostDetailsResponse = {
  success: boolean;
  message: string;
  post: EventPostDetails | null;
};

export async function fetchEventPosts(accountTypeId: string, page = 1) {
  const response = await fetch(
    `${BASE_URL}/get_event_posts?accountTypeId=${encodeURIComponent(accountTypeId)}&page=${page}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to load event posts: ${response.status}`);
  }

  return (await response.json()) as EventPostsListResponse;
}

export async function fetchEventPostDetails(slug: string) {
  const response = await fetch(
    `${BASE_URL}/get_event_post_details?slug=${encodeURIComponent(slug)}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to load event details: ${response.status}`);
  }

  return (await response.json()) as EventPostDetailsResponse;
}

