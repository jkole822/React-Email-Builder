export enum AlignEnum {
  left = "left",
  right = "right",
  center = "center",
  justify = "justify",
  char = "char",
}

export enum VAlignEnum {
  top = "top",
  middle = "middle",
  bottom = "bottom",
}

export type AlignType =
  | AlignEnum.left
  | AlignEnum.right
  | AlignEnum.center
  | AlignEnum.justify
  | AlignEnum.char;

export type VAlignType = VAlignEnum.bottom | VAlignEnum.middle | VAlignEnum.top;
