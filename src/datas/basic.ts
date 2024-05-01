export interface SelectOption {
  value: string;
  label: string;
}

export type CustomSelectHook = [string, () => JSX.Element];
