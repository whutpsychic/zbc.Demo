// ********************************************
// 此脚本的目的在于根据menu.js自动生成默认新页面模板
// ********************************************
const fs = require("fs");

// 读取文件的位置
const position = "./menu.js";

// 写入文件的位置
const writePosition = "./src/pages";

// 创建新页的基本模板
const createTemplate = title => {
	return `import React from "react";\n\nclass Default extends React.Component {\n
	render() {
		return <p>${title}</p>;
	}
}

export default Default;`;
};

// 创建新页群index目录
const createIndexTemplate = obj => {
	return `import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

${obj.children
	.map(item => {
		// console.log(`\n`);
		// console.log(`==================================`);
		// console.log(item);
		// console.log(`==================================`);
		// console.log(`\n`);

		if (item.hasOwnProperty("children")) {
			return item.children
				.map(_item => {
					return `import ${obj.address}${item.address}${_item.address} from './${obj.address}-${item.address}-${_item.address}'`;
				})
				.join("\n");
		} else {
			return `import ${obj.address}${item.address} from './${obj.address}-${item.address}'`;
		}
	})
	.join("\n")}

class Default extends React.Component {
	render() {
		return (
			<Switch>
			${obj.children
				.map((item, i) => {
					if (item.hasOwnProperty("children")) {
						return item.children
							.map(_item => {
								return `<Route path={'/${obj.address}/${item.address}/${_item.address}'} component={${obj.address}${item.address}${_item.address}} />`;
							})
							.join("\n");
					} else {
						return `<Route path={'/${obj.address}/${item.address}'} component={${obj.address}${item.address}} />`;
					}
				})
				.join("\n")}
	<Redirect from={"/${obj.address}"} to={"/${obj.address}/${
		obj.children[0].address
	}"} />
			</Switch>
		);
	}
}

export default Default;
`;
};

// 写入一个文件
const createFile = ({ url, title }) => {
	// 路径类型
	let fileUrl = `${url[0]}`;
	let urlAddons = "";
	for (let i = 0; i < url.length; i++) {
		i ? (urlAddons += `-${url[i]}`) : (urlAddons += `/${url[i]}`);
	}
	fileUrl += urlAddons;
	// console.log(`\n`);
	// console.log(`===================================65`);
	// console.log(fileUrl);
	// console.log("===================================68");
	// console.log(`\n`);
	// 写入之前先判断是否已存在
	// 如果文件已经存在
	if (fs.existsSync(`${writePosition}/${fileUrl}/index.js`)) {
		// console.log(`${writePosition}/${fileUrl}/index.js文件已存在`);
		return;
	}
	// 如果有下级目标文件夹但是却没有文件
	else if (fs.existsSync(`${writePosition}/${fileUrl}`)) {
		// console.log(
		// 	`${writePosition}/${fileUrl}目标存在但是${writePosition}/${fileUrl}/index.js文件不存在`
		// );

		//写入文件
		fs.writeFile(
			`${writePosition}/${fileUrl}/index.js`,
			createTemplate(title),
			err => {
				if (err) throw err;
				// console.log(`已成功写入文件${writePosition}/${fileUrl}/index.js`);
			}
		);
		return;
	}
	// 如果都没有
	else {
		fs.mkdir(`${writePosition}/${fileUrl}/`, null, err => {
			if (url[1]) {
				fs.mkdir(`${writePosition}/${fileUrl}/`, null, err => {
					if (err) throw new Error(err);
					fs.writeFile(
						`${writePosition}/${fileUrl}/index.js`,
						createTemplate(title),
						err => {
							if (err) throw err;
							// console.log(`已成功写入文件${writePosition}/${fileUrl}/index.js`);
						}
					);
				});
			} else {
				fs.writeFile(
					`${writePosition}/${fileUrl}/index.js`,
					createTemplate(title),
					err => {
						if (err) throw err;
						// console.log(`已成功写入文件${writePosition}/${fileUrl}/index.js`);
					}
				);
			}
		});
	}
	return;
};

// 操作开始
fs.readFile(position, (err, data) => {
	if (err) throw new Error(err);
	let menuData = JSON.parse(data.toString("utf-8"));

	menuData.forEach(item => {
		// 如果没有children
		if (!item.children || !item.children.length) {
			// 在这里写入一个文件
			createFile({ url: [`${item.address}`], title: `${item.title}` });
		}
		// 如果有children
		else {
			// 先写入全部子文件夹及文件
			item.children.forEach(_item => {
				if (_item.hasOwnProperty("children")) {
					_item.children.forEach(__item => {
						createFile({
							url: [`${item.address}`, `${_item.address}`, `${__item.address}`],
							title: `${__item.title}`
						});
					});
				} else {
					// 在这里写入一个文件
					createFile({
						url: [`${item.address}`, `${_item.address}`],
						title: `${_item.title}`
					});
				}
			});
			// 再写入整个的根目录(不判定是否存在，直接覆盖)
			fs.writeFile(
				`${writePosition}/${item.address}/index.js`,
				createIndexTemplate(item),
				err => {
					if (err) throw err;
					// console.log(
					// 	`已成功写入文件${writePosition}/${item.address}/index.js`
					// );
				}
			);
		}
	});

	// 删除掉临时文件
	fs.unlink("./menu.js", () => {
		console.log("已删除临时文件");
	});
});
