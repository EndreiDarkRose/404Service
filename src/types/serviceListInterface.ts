export type JSONData = Array<{
  category: string;
  service: Array<{ title: string; price: string }>;
}>;

export interface FormData {
  name: string;
  phone_number: string;
  description?: string;
}
