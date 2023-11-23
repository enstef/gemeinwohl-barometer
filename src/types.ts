interface Quote {
  id: number;
  title: string;
  text: string;
}

interface Category {
  id: number;
  name: string;
  quotes: Quote[];
}