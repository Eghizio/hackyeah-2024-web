import { Benefit, Project } from "../types";

export const projectMock: Project = {
  ID: 42,
  user_id: "user_67890",
  user_name: "Emily Brown",
  title: "Community Library and Learning Hub",
  photo: "https://picsum.photos/400/400",
  category: "Education",
  abstract:
    "Establishment of a community library with a learning hub to provide access to books, computers, and educational resources.",
  detailed_desc:
    "This project focuses on building a community library equipped with thousands of books, study rooms, and a technology center with computers and free internet access. It will serve as a learning hub for students and community members, offering workshops, classes, and tutoring programs to enhance education in the neighborhood.",
  location: "321 Birch Ave, Maplewood",
  coordinates: "37.774929, -122.419418",
  is_verified: true,
  status_of_project: "In Progress",
  date_added: "2023-09-01",
  date_ended: "2024-12-30",
  cost: 80_000,
  gathered_money: 50_000,
  funded_money: 20_000,
};

export const benefitMock: Benefit = {
  id: "unique_id",
  name: "Name",
  category: "Category",
  description: "Lorem ipsum coś tam coś tam",
  expirationDate: "21.01.2025",
  imageUrl: "https://picsum.photos/400/400",
  inStock: 42,
  price: 693.14,
};
