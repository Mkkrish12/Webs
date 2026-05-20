export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface PostMeta {
  title: string;
  description: string;
  date: string;
  tags: string[];
  type: "blog" | "podcast";
  published: boolean;
  slug: string;
  readingTime?: string;
  spotify?: string;
}
