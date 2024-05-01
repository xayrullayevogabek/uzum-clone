import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const setItem = (type: string, value: any) =>
  window.localStorage.setItem(type, JSON.stringify(value));

export const getItem = (type: string) => window.localStorage.getItem(type);

export const removeItem = (type: string) =>
  window.localStorage.removeItem(type);

export const addSpaceToNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
