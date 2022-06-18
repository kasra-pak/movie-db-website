function preventOverflow(num, limit) {
  if (num === limit)
    return 0
  else if (num < 0)
    return (limit - 1)
  else 
    return num
} 

export { preventOverflow }