const timestamp = new Date().setFullYear(new Date().getFullYear(), 0, 1);
const yearFirstDay = Math.floor(timestamp / 86400000);

const timestampZodiac = new Date().setFullYear(new Date().getFullYear(), 2, 21);
const zodiacYearFirstDay = Math.floor(timestampZodiac / 86400000);

const today = Math.ceil(new Date().getTime() / 86400000);

const zodiacYearDifferential = zodiacYearFirstDay - yearFirstDay

const dayOfYear = today - yearFirstDay;
const zodiacDayOfYear = dayOfYear - zodiacYearDifferential


module.exports = { dayOfYear: zodiacDayOfYear };