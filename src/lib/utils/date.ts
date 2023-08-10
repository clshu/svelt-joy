export const formatDate = (date: Date) => {
	return new Intl.DateTimeFormat('en', {
		dateStyle: 'long'
	}).format(date);
};
