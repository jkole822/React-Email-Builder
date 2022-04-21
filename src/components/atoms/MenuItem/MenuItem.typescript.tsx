export interface Link {
    href: string;
    text: string;
}

export interface MenuItemProps {  
    link: Link;
    linkStyles?: any;
}