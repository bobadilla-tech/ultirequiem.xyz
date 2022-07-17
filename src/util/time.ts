const birthDay = new Date("6 October 2006 00:07:00 GMT");
const ageMilliseconds = Date.now() - birthDay.getTime();

export const MILLISECOND = 1;
export const SECOND = MILLISECOND * 1000;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const YEAR = DAY * 365;

export const age = ageMilliseconds / YEAR;
export const timeToFinishHighSchool = Math.abs(
  ~(
    (new Date("30 December 2023 00:07:00 GMT").getTime() - Date.now()) /
    (1000 * 3600 * 24)
  )
);
