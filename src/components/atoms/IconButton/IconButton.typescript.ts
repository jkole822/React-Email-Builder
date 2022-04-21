export interface Link {
  href: string;
  text: string;
}

export interface IconButtonProps {
  cellStyles?: any;
  icon: string;
  iconStyles?: any;
  link: Link;
  tableStyles?: any;
  tableRowStyles?: any;
}
