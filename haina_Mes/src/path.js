
import { pathNameCN } from './data/CN';

const path = [
	{ name: "panel", route: "/main/panel" },
	{ name: "quality", route: "/main/quality" },
	{ name: "plan", route: "/main/plan" },
	{ name: "energy", route: "/main/energy" },
	{ name: "grades", route: "/main/grades" },
	{ name: "tools", route: "/main/tools" },
	{ name: "device", route: "/main/device" },
	{ name: "statistics", route: "/main/statistics" },

	//{ name: "quality-query", route: "/main/quality/query" },
	//{ name: "quality-analyze", route: "/main/quality/analyze" },
	//{ name: "quality-standard", route: "/main/quality/standard" },
	//{ name: "quality-score", route: "/main/quality/score" },








];

//扩展菜单中文名
for (let i = 0; i < path.length; i++) {

	for (let j = 0; j < pathNameCN.length; j++) {
		if (pathNameCN[j].name === path[i].name) {
			path[i].text = pathNameCN[j].text;
			break;
		}
	}

}





export default path;