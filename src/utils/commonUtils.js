import { v4 as uuidv4 } from "uuid";

export function setItemInLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getItemFromLS(key) {
  const value = localStorage.getItem(key);
  if (!value) {
    return [];
  }

  return JSON.parse(value);
}

export function DeleteItemFromLS(key) {
  localStorage.removeItem(key);
  return;
}

export function getUUID() {
  return uuidv4();
}
