import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./Table";

const mockProjects = [
  {
    "s.no": 0,
    "amt.pledged": 15823,
    blurb:
      "'Catalysts, Explorers & Secret Keepers: Women of Science Fiction' is a take-home exhibit & anthology by the Museum of Science Fiction.",
    by: "Museum of Science Fiction",
    country: "US",
    currency: "usd",
    "end.time": "2016-11-01T23:59:00-04:00",
    location: "Washington, DC",
    "percentage.funded": 186,
    "num.backers": "219382",
    state: "DC",
    title: "Catalysts, Explorers & Secret Keepers: Women of SF",
    type: "Town",
    url: "/projects/1608905146/catalysts-explorers-and-secret-keepers-women-of-sf?ref=discovery",
  },
  {
    "s.no": 1,
    "amt.pledged": 6859,
    blurb:
      "A unique handmade picture book for kids & art lovers about a nervous monster who finds his courage with the help of a brave little girl",
    by: "Tyrone Wells & Broken Eagle, LLC",
    country: "US",
    currency: "usd",
    "end.time": "2016-11-25T01:13:33-05:00",
    location: "Portland, OR",
    "percentage.funded": 8,
    "num.backers": "154926",
    state: "OR",
    title: "The Whatamagump (a hand-crafted story picture book)",
    type: "Town",
    url: "/projects/thewhatamagump/the-whatamagump-a-hand-crafted-story-picture-book?ref=discovery",
  },
];

test("renders table headers", () => {
  render(<Table projects={mockProjects} currentPage={1} itemsPerPage={5} />);
  expect(screen.getByText("S. No.")).toBeInTheDocument();
  expect(screen.getByText("Percentage Funded")).toBeInTheDocument();
  expect(screen.getByText("Amount Pledged")).toBeInTheDocument();
});

test("renders table rows", () => {
  render(<Table projects={mockProjects} currentPage={1} itemsPerPage={5} />);
  expect(screen.getByText(/186%/)).toBeInTheDocument();
  expect(screen.getByText(/\$15823/)).toBeInTheDocument();
});
