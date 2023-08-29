export interface SelectEvent<T> {
  select: SelectDetail<T>;
}

export interface SelectDetail<T> {
  selectedValue: T;
}