import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import EditTheme from "../../edit-theme";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import INPUT from "@lugia/lugia-web/dist/input/lugia.input.zh-CN.json";
import TEXTAREA from "@lugia/lugia-web/dist/input/lugia.textarea.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BaseInput = require("./BaseInput").default;
const DefaultValueInput = require("./DefaultValueInput").default;
const SizeInput = require("./SizeInput").default;
const DisableInput = require("./DisableInput").default;
const PrefixInput = require("./PrefixInput").default;
const TransformInput = require("./TransformInput").default;
const ValidateTypeInput = require("./ValidateTypeInput").default;
const Textarea = require("./Textarea").default;

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
                title={"文本输入框"}
                subTitle={"Input"}
                desc={"常用于昵称,名称,表格内容等填写."}
              />
              <Demo
                title={"输入框基本用法"}
                titleID={"input-0"}
                code={
                  <code>{`import React from \"react\";\nimport { Input } from \"@lugia/lugia-web\";\n\nexport default class BaseInput extends React.Component<any, any> {\n  constructor(props: any) {\n    super(props);\n    this.state = { value: \"\" };\n  }\n\n  onChange = ({ newValue: value }: any) => {\n    this.setState({ value });\n  };\n\n  render() {\n    return <Input value={this.state.value} onChange={this.onChange} />;\n  }\n}\n`}</code>
                }
                desc={"输入框基本用法"}
                demo={<BaseInput />}
              ></Demo>
              <Demo
                title={"显示默认值"}
                titleID={"input-1"}
                code={
                  <code>{`import React from \"react\";\nimport { Input } from \"@lugia/lugia-web\";\n\nexport default class DefaultValueInput extends React.Component<any, any> {\n  render() {\n    return (\n      <div>\n        <Input defaultValue=\"hello world\" />\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"显示默认值的输入框"}
                demo={<DefaultValueInput />}
              ></Demo>
              <Demo
                title={"尺寸"}
                titleID={"input-2"}
                code={
                  <code>{`import React from \"react\";\nimport { Input } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\n\nconst Wrapper = styled.div\`\n  display: inline-block;\n\`;\nconst InputWrapper = styled.div\`\n  margin-right: 10px;\n  display: inline-block;\n\`;\nconst onChange = cmpName => (value: any) => {};\nexport default class SizeInput extends React.Component<any, any> {\n  constructor(props: any) {\n    super(props);\n    this.state = { value: \"\" };\n  }\n\n  onChange = ({ newValue: value }: any) => {\n    this.setState({ value });\n  };\n\n  render() {\n    return (\n      <Wrapper>\n        <InputWrapper>\n          <Input size={\"small\"} placeholder={\"请填写金额\"} />\n        </InputWrapper>\n        <InputWrapper>\n          <Input size={\"default\"} placeholder={\"请填写金额\"} />\n        </InputWrapper>\n        <InputWrapper>\n          <Input size={\"large\"} placeholder={\"请填写金额\"} />\n        </InputWrapper>\n      </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={"三种不同尺寸的输入框"}
                demo={<SizeInput />}
              ></Demo>
              <Demo
                title={"禁用状态"}
                titleID={"input-3"}
                code={
                  <code>{`import React from \"react\";\nimport { Input, Button } from \"@lugia/lugia-web\";\n\nexport default class DisableInput extends React.Component<any, any> {\n  constructor(props: any) {\n    super(props);\n  }\n  state = {\n    disabled: false\n  };\n\n  toggle = () => {\n    const disabled = !this.state.disabled;\n    this.setState({\n      disabled\n    });\n  };\n\n  render() {\n    return (\n      <div>\n        <div style={{ marginBottom: 10 }}>\n          <Button onClick={this.toggle} type=\"primary\">\n            点击切换禁用状态\n          </Button>\n        </div>\n        <Input disabled={this.state.disabled} />\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"点击切换禁用状态"}
                demo={<DisableInput />}
              ></Demo>
              <Demo
                title={"前缀后缀组合"}
                titleID={"input-4"}
                code={
                  <code>{`import React from \"react\";\nimport { Input, Icon } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\n\nconst Wrapper = styled.div\`\n  display: inline-block;\n\`;\nconst InputWrapper = styled.div\`\n  margin-right: 10px;\n  display: inline-block;\n\`;\nclass ClearIcon extends React.Component<IconProps> {\n  static displayName = Widget.ClearIcon;\n\n  render() {\n    return (\n      <Icon\n        iconClass=\"lugia-icon-reminder_close_circle_o\"\n        key=\"refresh\"\n        {...this.props}\n      />\n    );\n  }\n}\n\nclass SearchIcon extends React.Component<IconProps> {\n  static displayName = Widget.SearchIcon;\n\n  render() {\n    return (\n      <Icon\n        iconClass=\"lugia-icon-financial_search\"\n        key=\"refresh\"\n        {...this.props}\n      />\n    );\n  }\n}\nclass PullIcon extends React.Component<IconProps> {\n  static displayName = Widget.PullIcon;\n\n  render() {\n    return (\n      <Icon\n        iconClass=\"lugia-icon-direction_down\"\n        key=\"refresh\"\n        {...this.props}\n      />\n    );\n  }\n}\nexport default class PrefixInput extends React.Component<any, any> {\n  render() {\n    return (\n      <Wrapper>\n        <InputWrapper>\n          <Input viewClass=\"register\" prefix={<SearchIcon />} />\n        </InputWrapper>\n        <InputWrapper>\n          <Input\n            prefix={<SearchIcon />}\n            viewClass=\"register\"\n            suffix={<ClearIcon />}\n          />\n        </InputWrapper>\n        <InputWrapper>\n          <Input viewClass=\"register\" suffix={<PullIcon />} />\n        </InputWrapper>\n      </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={"结合不同前缀,后缀的组件配合使用"}
                demo={<PrefixInput />}
              ></Demo>
              <Demo
                title={"格式化"}
                titleID={"input-5"}
                code={
                  <code>{`import React from \'react\';\nimport { Input } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst Wrapper = styled.div\`\n\`;\n\nexport default class TransformInput extends React.Component<any, any> {\n  constructor(props: any) {\n    super(props);\n  }\n  render() {\n    const formatter = value => {\n      return \`\$ \${value}\`.replace(/\B(?=(\d{3})+(?!\d))/g, \',\');\n    };\n    const parser = value => {\n      return value.replace(/\\$\s?|(,*)/g, \'\');\n    };\n    return (\n      <Wrapper>\n        <Input\n          placeholder={\'请填写金额\'}\n          formatter={formatter}\n          parser={parser}\n        />\n      </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={"配置一套格式化与解析的规则 显示出来"}
                demo={<TransformInput />}
              ></Demo>
              <Demo
                title={"校验"}
                titleID={"input-6"}
                code={
                  <code>{`import React from \"react\";\nimport { Input, Theme } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nimport { fixControlledValue } from \"@lugia/lugia-web/dist/utils\";\n\nconst Wrapper = styled.div\`\n  display: inline-block;\n  margin-right: 10px;\n  margin-top: 10px;\n\`;\nconst OutWrapper = styled.div\`\n  display: flex;\n\`;\n\nconst onChange = cmpName => (value: any) => {};\n\nexport class ValidateInput extends React.Component<any, any> {\n  constructor(props: any) {\n    super(props);\n  }\n\n  static getDerivedStateFromProps(nextProps: Object, preState: Object) {\n    let { value } = nextProps;\n    const hasValueInprops = \"value\" in nextProps;\n    value = fixControlledValue(value);\n    if (!preState) {\n      return {\n        value: hasValueInprops ? value : \"\"\n      };\n    }\n    if (hasValueInprops) {\n      return { value };\n    }\n  }\n  onChange = ({ newValue: value }: any) => {\n    this.setState({ value });\n    this.props.onChange({ newValue: value });\n  };\n\n  render() {\n    const { validateType } = this.props;\n    const value = this.state.value;\n    const validateStatus = value.indexOf(\"a\") === -1 ? \"success\" : \"error\";\n\n    return (\n      <Input\n        onChange={this.onChange}\n        validateType={validateType}\n        validateStatus={validateStatus}\n      />\n    );\n  }\n}\nexport class TopInput extends React.Component<any, any> {\n  constructor(props: any) {\n    super(props);\n  }\n\n  static getDerivedStateFromProps(nextProps: Object, preState: Object) {\n    let { value } = nextProps;\n    const hasValueInprops = \"value\" in nextProps;\n    value = fixControlledValue(value);\n    if (!preState) {\n      return {\n        value: hasValueInprops ? value : \"\",\n        validateStatus: \"success\"\n      };\n    }\n    if (hasValueInprops) {\n      return { value };\n    }\n  }\n  onChange = (param: any) => {\n    const { newValue: value } = param;\n    this.props.onChange({ newValue: value });\n    const validateStatus = value.indexOf(\"a\") === -1 ? \"success\" : \"error\";\n    this.setState({ value, validateStatus });\n  };\n  render() {\n    const { validateType } = this.props;\n    return (\n      <Input\n        onChange={this.onChange}\n        validateType={validateType}\n        validateStatus={this.state.validateStatus}\n      />\n    );\n  }\n}\n\nexport default class ValidateTypeInput extends React.Component<any, any> {\n  constructor(props: any) {\n    super(props);\n    this.state = { value: \"\" };\n  }\n\n  onChange = ({ newValue: value }: any) => {\n    this.setState({ value });\n  };\n\n  render() {\n    return (\n      <OutWrapper>\n        <Wrapper>\n          <TopInput validateType=\"top\" onChange={onChange(\"limit\")} />\n        </Wrapper>\n        <Wrapper>\n          <ValidateInput validateType=\"bottom\" onChange={onChange(\"limit\")} />\n        </Wrapper>\n        <Wrapper>\n          <ValidateInput validateType=\"inner\" onChange={onChange(\"limit\")} />\n        </Wrapper>\n      </OutWrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={"三种不同风格校验(校验输入值是否含有'a')。"}
                demo={<ValidateTypeInput />}
              ></Demo>
              <Demo
                title={"段落文本输入框"}
                titleID={"input-7"}
                code={
                  <code>{`import React from \"react\";\nimport { Input } from \"@lugia/lugia-web\";\nconst Textarea = Input.Textarea;\n\nexport default class BaseInput extends React.Component<any, any> {\n  constructor(props: any) {\n    super(props);\n    this.state = { value: \"\" };\n  }\n\n  onChange = ({ newValue: value }: any) => {\n    this.setState({ value });\n  };\n\n  render() {\n    return <Textarea value={this.state.value} onChange={this.onChange} />;\n  }\n}\n`}</code>
                }
                desc={"适用于输入文字段落"}
                demo={<Textarea />}
              ></Demo>
              <EditTables dataSource={INPUT} />
              <EditTables dataSource={TEXTAREA} />
              <EditTheme dataSource={{ INPUT, TEXTAREA }} />
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
                <Link title={"输入框基本用法"} href={"#input-0"} />
                <Link title={"显示默认值"} href={"#input-1"} />
                <Link title={"尺寸"} href={"#input-2"} />
                <Link title={"禁用状态"} href={"#input-3"} />
                <Link title={"前缀后缀组合"} href={"#input-4"} />
                <Link title={"格式化"} href={"#input-5"} />
                <Link title={"校验"} href={"#input-6"} />
                <Link title={"段落文本输入框"} href={"#input-7"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
