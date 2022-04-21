export enum AlignEnum {
  left = "left",
  right = "right",
  center = "center",
  justify = "justify",
  char = "char",
}

export type AlignType =
  | AlignEnum.left
  | AlignEnum.right
  | AlignEnum.center
  | AlignEnum.justify
  | AlignEnum.char;
