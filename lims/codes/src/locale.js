import moment from "moment";

const locale = {};

locale.CN = () => {
	import("moment/locale/zh-cn").then(res => {
		moment.locale("zh-cn");
	});
};

locale.EN = () => {
	import("moment/locale/en-gb").then(res => {
		moment.locale("en-gb");
	});
};

export default locale;
