import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone' 
import isLeapYear from 'dayjs/plugin/isLeapYear';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import localizedFormat from 'dayjs/plugin/localizedFormat' 
import localeData from 'dayjs/plugin/localeData'

dayjs.extend(localeData);
dayjs.extend(localizedFormat);
    dayjs.extend(utc)
    dayjs.extend(timezone)
	dayjs.extend(isLeapYear);
	dayjs.extend(dayOfYear);
    dayjs.tz.setDefault("Asia/Saigon")


const timezonedDayjs = (...args: any[]) => {
    return dayjs(...args).tz();
};

const timezonedUnix = (value: number) => {
    return dayjs.unix(value).tz();
};

export default timezonedDayjs;