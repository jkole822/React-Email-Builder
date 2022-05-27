interface Card {
  copy: string;
  headline: string;
  icon: string;
}

export interface CardRowProps {
  cards: Card[];
}
