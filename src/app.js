//! DONT TOUCH. Fix for __dirname on es module scope
export const __dirname = import.meta.dirname;
import "./start/prompt.js";
