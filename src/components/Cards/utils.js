;const formatDate = (dateString) => {
  const date = new Date(dateString);
  try {
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
    return formattedDate;
  } catch (err) {
    console.error(err);
    return 'Soon';
  }
};

const calculateRating = (data) => Math.ceil(data * 10);

export { formatDate, calculateRating };
