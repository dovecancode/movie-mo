export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function shorterTitle(title) {
  return title?.substring(0, 15)
}
