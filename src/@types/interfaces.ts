interface UserType {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  company: string;
  followers: number;
}

export interface PostType {
  number: number;
  user: UserType;
  title: string;
  body: string;
  comments: number;
  created_at: string;
  html_url: string;
}