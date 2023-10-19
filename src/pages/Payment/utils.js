export const nameMask = (text) =>
  text
    .replace(/\d/g, "")
    .replace(/[^A-Za-z0-9áéíóúàèìòùâêîôûãõç\s]/i, "")
    .replace(/^\s/, "");

export const cellphoneMask = (text) =>
  text
    .replace(/\D/g, "")
    .slice(0, 11)
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{1,4})/, "$1-$2");

export const cepMask = (text) =>
  text
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{3})\d+?$/, "$1");

export const cityMask = (text) =>
  text
    .replace(/\d/g, "")
    .replace(/[^A-Za-z0-9áéíóúàèìòùâêîôûãõç\s]/i, "")
    .replace(/^\s/, "");

export const streetMask = (text) =>
  text.replace(/[^A-Za-z0-9áéíóúàèìòùâêîôûãõç\s]/i, "").replace(/^\s/, "");

export const numberMask = (text) => text.replace(/\D/g, "").slice(0, 5);
