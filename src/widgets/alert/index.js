import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import ALERT from "@lugia/lugia-web/dist/alert/lugia.alert.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BasicDemo = require("./BasicDemo").default;
const TypeDemo = require("./TypeDemo").default;
const ClosableDemo = require("./ClosableDemo").default;
const CustomClosableDemo = require("./CustomClosableDemo").default;
const DescType = require("./DescType").default;
const IconDemo = require("./IconDemo").default;
const CustomIconDemo = require("./CustomIconDemo").default;
const ThemeDemo = require("./ThemeDemo").default;

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
                title={"警告提示"}
                subTitle={"Alert"}
                desc={"警告提示信息。"}
              />
              <Demo
                title={"基本"}
                titleID={"alert-0"}
                code={
                  <code>{`import * as React from \'react\';\nimport {Alert} from \'@lugia/lugia-web\';\n\nexport default class AlertDemo extends React.Component {\n  render(){\n    return (\n      <Alert message=\"Alert-info\" />\n    );\n  }\n}\n`}</code>
                }
                desc={"最简单的用法"}
                demo={<BasicDemo />}
              ></Demo>
              <Demo
                title={"不同样式"}
                titleID={"alert-1"}
                code={
                  <code>{`import * as React from \'react\';\nimport {Alert} from \'@lugia/lugia-web\';\n\nexport default class AlertDemo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Alert message=\"Alert-info\" />\n        <br />\n        <Alert type=\"success\" message=\"Alert-success\" />\n        <br />\n        <Alert type=\"error\" message=\"Alert-error\" />\n        <br />\n        <Alert type=\"warning\" message=\"Alert-warning\" />\n        <br />\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"提供四种不同的样式可供选择"}
                demo={<TypeDemo />}
              ></Demo>
              <Demo
                title={"可关闭"}
                titleID={"alert-2"}
                code={
                  <code>{`import * as React from \'react\';\nimport {Alert} from \'@lugia/lugia-web\';\n\nexport default class AlertDemo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Alert message=\"Alert-info\" closable />\n        <br />\n        <Alert type=\"success\" message=\"Alert-success\" closable />\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"可以关闭的警告提示"}
                demo={<ClosableDemo />}
              ></Demo>
              <Demo
                title={"自定义关闭文案"}
                titleID={"alert-3"}
                code={
                  <code>{`import * as React from \'react\';\nimport {Alert} from \'@lugia/lugia-web\';\n\nexport default class AlertDemo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Alert type=\"error\" message=\"Alert-error\" closable closeText=\"确定\" />\n        <br />\n        <Alert type=\"warning\" message=\"Alert-warning\" closable closeText=\"ok\" />\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"自定义关闭文案，会替换默认的 icon"}
                demo={<CustomClosableDemo />}
              ></Demo>
              <Demo
                title={"辅助性文字介绍"}
                titleID={"alert-4"}
                code={
                  <code>{`import * as React from \'react\';\nimport {Alert} from \'@lugia/lugia-web\';\n\nexport default class AlertDemo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Alert message=\"Alert-info\" closable description=\"这是辅助性文字介绍\" /><br />\n        <Alert type=\"success\" message=\"Alert-success\" closable description=\"这是辅助性文字介绍\" /><br />\n        <Alert\n          type=\"error\"\n          message=\"Alert-error\"\n          closable\n          closeText=\"确定\"\n          description=\"这是辅助性文字介绍\"\n        /><br />\n        <Alert\n          type=\"warning\"\n          message=\"Alert-warning\"\n          closable\n          closeText=\"ok\"\n          description=\"这是辅助性文字介绍\"\n        />\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"含有辅助性文字介绍"}
                demo={<DescType />}
              ></Demo>
              <Demo
                title={"带图标"}
                titleID={"alert-5"}
                code={
                  <code>{`import * as React from \'react\';\nimport {Alert} from \'@lugia/lugia-web\';\n\nexport default class AlertDemo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Alert message=\"Alert-info\" showIcon />\n        <br />\n        <Alert type=\"success\" message=\"Alert-success\" showIcon />\n        <br />\n        <Alert type=\"error\" message=\"Alert-error\" showIcon />\n        <br />\n        <Alert type=\"warning\" message=\"Alert-warning\" showIcon />\n        <br />\n        <Alert message=\"Alert-info\" closable description=\"这是辅助性文字介绍\" showIcon />\n        <br />\n        <Alert\n          type=\"success\"\n          message=\"Alert-success\"\n          closable\n          description=\"这是辅助性文字介绍\"\n          showIcon\n        />\n        <br />\n        <Alert\n          type=\"error\"\n          message=\"Alert-error\"\n          closable\n          closeText=\"确定\"\n          description=\"这是辅助性文字介绍\"\n          showIcon\n        />\n        <br />\n        <Alert\n          type=\"warning\"\n          message=\"Alert-warning\"\n          closable\n          closeText=\"ok\"\n          description=\"这是辅助性文字介绍\"\n          showIcon\n        />\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"带图标的警告提示"}
                demo={<IconDemo />}
              ></Demo>
              <Demo
                title={"自定义图标"}
                titleID={"alert-6"}
                code={
                  <code>{`import * as React from \'react\';\nimport {Alert} from \'@lugia/lugia-web\';\n\nexport default class AlertDemo extends React.Component {\n  render() {\n    return <Alert showIcon icon=\"lugia-icon-logo_twitter\" message=\"Alert-info\" />;\n  }\n}\n`}</code>
                }
                desc={"自定义图标的警告提示"}
                demo={<CustomIconDemo />}
              ></Demo>
              <Demo
                title={"可配置theme属性"}
                titleID={"alert-7"}
                code={
                  <code>{`import * as React from \'react\';\nimport {Alert, Theme} from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts/index\';\n\nexport default class AlertDemo extends React.Component {\n  render() {\n    const view = {\n      [Widget.Alert]: {\n        width: 200,\n        color: \'#ffa500\',\n      },\n    };\n    return (\n      <div>\n        <Theme config={view}>\n          <Alert message=\"Alert-info\" />\n        </Theme>\n        <br />\n        <Theme config={view}>\n          <Alert showIcon message=\"Alert-info\" />\n        </Theme>\n        <br />\n        <Theme config={view}>\n          <Alert showIcon closable closeText=\"ok\" message=\"Alert-info\" />\n        </Theme>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"根据需要单独配置警告提示样式，可配置 width color"}
                demo={<ThemeDemo />}
              ></Demo>
              <EditTables dataSource={ALERT} />
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
                <Link title={"基本"} href={"#alert-0"} />
                <Link title={"不同样式"} href={"#alert-1"} />
                <Link title={"可关闭"} href={"#alert-2"} />
                <Link title={"自定义关闭文案"} href={"#alert-3"} />
                <Link title={"辅助性文字介绍"} href={"#alert-4"} />
                <Link title={"带图标"} href={"#alert-5"} />
                <Link title={"自定义图标"} href={"#alert-6"} />
                <Link title={"可配置theme属性"} href={"#alert-7"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
