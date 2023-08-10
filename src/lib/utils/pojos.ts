// load function has problem in +page.server.ts
// when returning a non Plain Old Javascript.
// This fix it.
// e.g.
// Data returned from `load` while rendering /api/posts/[slug] is not serializable:
// Cannot stringify arbitrary non-POJOs (data.post)
export const serializeNonPOJOs = (value: object | null) => {
	return JSON.parse(JSON.stringify(value));
};
