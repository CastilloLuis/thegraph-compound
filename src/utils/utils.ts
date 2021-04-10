
export const generateAvatar = (id: string) => `
https://robohash.org/${id}
`

export const getShorterAddress = (address: string): string => {
  return `0x1a...${address.substring(address.length - 3, address.length)}`;
}
