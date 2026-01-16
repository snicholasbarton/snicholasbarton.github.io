export interface Reference {
  text: string;
  author: string;
  role: string;
}

export const references: Reference[] = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Jane Doe",
    role: "CTO, TechCorp",
  },
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "John Smith",
    role: "VP of Engineering, DataSystems",
  },
  {
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Emily White",
    role: "Senior Product Manager, InnovateInc",
  },
];
