import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import DROPMENU from "@lugia/lugia-web/dist/dropmenu/lugia.dropmenu.zh-CN.json";
import DROPMENUBUTTON from "@lugia/lugia-web/dist/dropmenu/lugia.dropmenuButton.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const DefaultDropmenu = require("./DefaultDropmenu").default;
const AlignDropmenu = require("./AlignDropmenu").default;
const CascaderDropmenu = require("./CascaderDropmenu").default;
const OtherDropmenu = require("./OtherDropmenu").default;

const { Link } = Anchor;
const { Row, Col } = Grid;

export default PageNavHoC(
  widgetrouter,
  class ComDemo extends React.Component {
    handleLinkClick = (e, href) => {
      if (href) {
        const name = href.slice(1);
        const anchorElement = document.getElementById(name);
        if (anchorElement) {
          anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      }
    };

    render() {
      const { next, prev, isMobile = false } = this.props;
      const span = isMobile ? 24 : 20;
      const style = isMobile ? {} : { paddingRight: "50px" };
      return (
        <Row>
          <Col span={span}>
            <div style={style}>
              <Title
                title={"下拉菜单"}
                subTitle={"Dropmenu"}
                desc={"选项过多时，弹出下拉菜单给用户选择操作"}
              />
              <Demo
                title={"基本用法"}
                titleID={"dropmenu-0"}
                code={
                  <code>{`import * as React from \'react\';\nimport { Dropmenu, Theme, Menu } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst data = [];\n\nfor (let i = 0; i < 10; i++) {\n  const title = \'选项\' + i;\n  data.push({ value: title, text: title });\n}\n\nconst Box = styled.div\`\n  display: inline-block;\n  margin: 0 10px;\n\`;\n\nconst menu = <Menu data={data} />;\n\nexport default class extends React.Component<any, any> {\n  render() {\n    const defaultView = {\n      [Widget.DropMenuButton]: { width: 120 },\n      [Widget.DropMenu]: { width: 80 }\n    };\n\n    return (\n      <div>\n        <Theme config={defaultView}>\n          <Box>\n            <Dropmenu menus={menu}>\n              <Dropmenu.Button type=\"basic\" onClick={this.onClick}>\n                Click me\n              </Dropmenu.Button>\n            </Dropmenu>\n          </Box>\n\n          <Box>\n            <Dropmenu menus={menu}>\n              <Dropmenu.Button divided={false}>Click me</Dropmenu.Button>\n            </Dropmenu>\n          </Box>\n\n          <Box>\n            <Dropmenu action={\'hover\'} menus={menu}>\n              <Dropmenu.Button>Hover arrow</Dropmenu.Button>\n            </Dropmenu>\n          </Box>\n\n          <Box>\n            <Dropmenu action={\'hover\'} menus={menu}>\n              <Dropmenu.Button type=\"primary\" divided={false}>\n                Hover me\n              </Dropmenu.Button>\n            </Dropmenu>\n          </Box>\n\n          <Box>\n            <Dropmenu menus={menu}>\n              <Dropmenu.Button type=\"primary\">Click arrow</Dropmenu.Button>\n            </Dropmenu>\n          </Box>\n        </Theme>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={
                  "通过type：customs | basic | primary 和 divided: true | false 实现不同风格的DropmenuButton"
                }
                demo={<DefaultDropmenu />}
              ></Demo>
              <Demo
                title={"弹出位置"}
                titleID={"dropmenu-1"}
                code={
                  <code>{`import * as React from \'react\';\nimport { Dropmenu, Theme, Menu } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst data = [];\n\nfor (let i = 0; i < 10; i++) {\n  const title = \'选项\' + i;\n  data.push({ value: title, text: title });\n}\n\nconst Box = styled.div\`\n  display: inline-block;\n  margin: 5px 10px;\n\`;\n\nconst menu = <Menu data={data} />;\n\nexport default class extends React.Component<any, any> {\n  render() {\n    const defaultView = {\n      [Widget.DropMenuButton]: { width: 120 },\n      [Widget.DropMenu]: { width: 80 }\n    };\n\n    return (\n      <div>\n        <Theme config={defaultView}>\n          <Box>\n            <Dropmenu menus={menu} align={\'bottomLeft\'}>\n              <Dropmenu.Button divided={false}>向下左对齐</Dropmenu.Button>\n            </Dropmenu>\n          </Box>\n          <Box>\n            <Dropmenu menus={menu} align={\'bottom\'}>\n              <Dropmenu.Button divided={false}>向下居中对齐</Dropmenu.Button>\n            </Dropmenu>\n          </Box>\n          <Box>\n            <Dropmenu menus={menu} align={\'bottomRight\'}>\n              <Dropmenu.Button divided={false}>向下右对齐</Dropmenu.Button>\n            </Dropmenu>\n          </Box>\n          <div>\n            <Box />\n          </div>\n\n          <Box>\n            <Dropmenu menus={menu} align={\'topLeft\'} action={\'hover\'}>\n              <Dropmenu.Button direction={\'up\'} divided={false}>\n                向上左对齐\n              </Dropmenu.Button>\n            </Dropmenu>\n          </Box>\n          <Box>\n            <Dropmenu menus={menu} align={\'top\'} action={\'hover\'}>\n              <Dropmenu.Button direction={\'up\'} divided={false}>\n                向上居中对齐\n              </Dropmenu.Button>\n            </Dropmenu>\n          </Box>\n          <Box>\n            <Dropmenu menus={menu} align={\'topRight\'} action={\'hover\'}>\n              <Dropmenu.Button direction={\'up\'} divided={false}>\n                向上右对齐\n              </Dropmenu.Button>\n            </Dropmenu>\n          </Box>\n        </Theme>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={
                  "通过align: topLeft | top | topRight | bottomLeft | bottom | bottomRight控制六种弹出方式"
                }
                demo={<AlignDropmenu />}
              ></Demo>
              <Demo
                title={"多级菜单"}
                titleID={"dropmenu-2"}
                code={
                  <code>{`import * as React from \'react\';\nimport { Dropmenu, Theme, Menu } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst data = [\n  { value: \'参数设置一\', text: \'参数设置一\' },\n  {\n    value: \'参数设置二\',\n    text: \'参数设置二\',\n    children: [\n      { value: \'二级信息1\', text: \'二级信息1\' },\n      { value: \'二级信息2\', text: \'二级信息2\' }\n    ]\n  },\n  { value: \'参数设置三\', text: \'参数设置三\', disabled: true }\n];\n\nconst Box = styled.div\`\n  display: inline-block;\n  margin: 30px;\n\`;\n\nexport default class extends React.Component<any, any> {\n  render() {\n    const menu = <Menu data={data} action={\'hover\'} autoHeight />;\n    const defaultView = {\n      [Widget.DropMenuButton]: { width: 180 },\n      [Widget.Dropmenu]: { width: 120, height: 160 }\n    };\n\n    return (\n      <div>\n        <Theme config={defaultView}>\n          <Box>\n            <Dropmenu menus={menu} action={\'hover\'}>\n              <Dropmenu.Button type=\"basic\">Basic</Dropmenu.Button>\n            </Dropmenu>\n          </Box>\n        </Theme>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"给Menu传入嵌套的数据,生成菜单"}
                demo={<CascaderDropmenu />}
              ></Demo>
              <Demo
                title={"其他元素"}
                titleID={"dropmenu-3"}
                code={
                  <code>{`import * as React from \'react\';\nimport { Dropmenu, Theme, Menu } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst data = [\n  { value: \'参数设置一\', text: \'参数设置一\' },\n  {\n    value: \'参数设置二\',\n    text: \'参数设置二\',\n    children: [\n      { value: \'二级信息1\', text: \'二级信息1\' },\n      { value: \'二级信息2\', text: \'二级信息2\' }\n    ]\n  },\n  { value: \'参数设置三\', text: \'参数设置三\', disabled: true, divided: true }\n];\n\nconst Box = styled.div\`\n  display: inline-block;\n  margin: 30px;\n\`;\n\nexport default class extends React.Component<any, any> {\n  render() {\n    const menu = <Menu data={data} action={\'hover\'} autoHeight />;\n    const defaultView = {\n      [Widget.DropMenuButton]: { width: 180 },\n      [Widget.Dropmenu]: { width: 120, height: 160 }\n    };\n\n    return (\n      <div>\n        <Theme config={defaultView}>\n          <Box>\n            <Dropmenu menus={menu} action={\'hover\'}>\n              <Dropmenu.Button type=\"basic\">Basic</Dropmenu.Button>\n            </Dropmenu>\n          </Box>\n        </Theme>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"给选择项添加divided属性"}
                demo={<OtherDropmenu />}
              ></Demo>
              <EditTables dataSource={DROPMENU} />
              <EditTables dataSource={DROPMENUBUTTON} />
              <FooterNav prev={prev} next={next} />
            </div>
          </Col>
          {!isMobile && (
            <Col span={4}>
              <Anchor
                slideType="line"
                onClick={this.handleLinkClick}
                useHref={false}
              >
                <Link title={"基本用法"} href={"#dropmenu-0"} />
                <Link title={"弹出位置"} href={"#dropmenu-1"} />
                <Link title={"多级菜单"} href={"#dropmenu-2"} />
                <Link title={"其他元素"} href={"#dropmenu-3"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
