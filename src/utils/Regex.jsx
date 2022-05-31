export const validTextArea = new RegExp(
  /.*\S.*/,
);
export const validPhoneNum = new RegExp(
  /^[ 0-9/+()-]{8,20}$/,
);
export const validPrice = new RegExp(
  /^\d*[.]?\d*$/,
);
export const positiveNum = new RegExp(
  /^[1-9]\d*$/,
);
export const positiveNum0 = new RegExp(
  /^[0-9]\d*$/,
);
export const validTime = new RegExp(
  /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
);
export const validName = new RegExp(
  /^[a-z ,.'-]+$/i,
);
export const validEmail = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);
