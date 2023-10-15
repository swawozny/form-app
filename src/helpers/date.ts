import moment from "moment";

export const isDateAfterToday = (date: Date) => date > new Date();

export const calculateYearsDiff = (date: Date) => moment().diff(moment(date.toISOString()), "years", true);
