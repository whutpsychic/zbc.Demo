//语言识别器
const LangDistinguish = lang => {
	switch (lang) {
		case "CN":
			return "中文";
		case "EN":
			return "English";
		default:
			return "";
	}
};

export { LangDistinguish };
