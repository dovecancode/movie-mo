export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function shorterTitle(title: string) {
  return title?.substring(0, 15)
}
