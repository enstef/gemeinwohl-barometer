interface Quote {
  id: number;
  title: string;
  text: string;
}

interface Category {
  id: number;
  name: string;
  description: string;
  quotes: Quote[];
}