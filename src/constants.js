export const API_URL = "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";

export const TABLE_HEADERS = {
  S_NO: "S. No.",
  PERCENTAGE_FUNDED: "Percentage Funded",
  AMOUNT_PLEDGED: "Amount Pledged",
};

export const PAGINATION = {
  PREVIOUS: "Previous Page",
  NEXT: "Next Page",
  PAGE_INFO: (current, total) => `Page ${current} of ${total}`,
};
