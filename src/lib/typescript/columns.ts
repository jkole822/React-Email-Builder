export enum ColumnEnum {
  oneThird = "oneThird",
  twoThirds = "twoThirds",
  oneHalf = "oneHalf",
}

export type ColumnSize =
  | ColumnEnum.oneThird
  | ColumnEnum.twoThirds
  | ColumnEnum.oneHalf;
