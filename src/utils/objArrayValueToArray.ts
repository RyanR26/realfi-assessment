export default function objArrayValueToArray(input: object[], key: string): any[] {
  const output = input.map((obj: object) => obj[key as keyof typeof obj])
  return output;
};