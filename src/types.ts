interface Category {
  id: number;
  name: string;
  description: string;
}

interface Aim {
  name: string;
  topics: Topic[];
}

interface Topic {
  categoryId: number;
  id: number;
  title: string;
  quotes: string[];
}
