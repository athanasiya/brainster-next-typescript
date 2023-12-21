type User = {
  id: number
  name: string
  email: string
  age: number
}

export function extractEmails(users: User[]): string[] {
  const emails: string[] = []
  if (users.length == 0) return []
  for (const user of users) {
    if (user && user.email && typeof user.email === 'string') {
      if (!emails.includes(user.email)) {
        emails.push(user.email)
      }
    }
  }
  return emails
}
