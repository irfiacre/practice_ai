import moment from "moment";

export const emailValidate = (email: string) => {
  if (!email) return "No Email Provided!";
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email).toLowerCase())) {
    return email;
  } else {
    return "Invalid Email!";
  }
};

export const formatDate = (date: Date, format?: string): string => {
  const formatToUse = format ? format : "MMM Do YY";
  return moment(date).format(formatToUse);
};

export const generateId = (text?: string): string => {
  const baseText = text ? text.split(" ").join("_").toLowerCase() : "";
  return `${baseText}-${new Date().getTime()}`;
};

export const generateFileName = (text?: string): string => {
  const baseText = text ? text.split(" ").join("_").toLowerCase() : "";
  return `${new Date().getTime()}-${baseText}`;
};
