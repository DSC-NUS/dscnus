const currDateTime = new Date();
const appCloseDateTime = new Date(2021, 8, 22, 0, 0, 0, 0);
export const appOpen = currDateTime < appCloseDateTime;