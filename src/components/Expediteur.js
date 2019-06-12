import React from "react";
import { Input, Form, Select } from "antd";
import countryList from "react-select-country-list";

class Expeditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  isValid = () => {
    var val = false;
    this.props.form.validateFields((errors, values) => {
      if (!errors) {
        val = true;
      }
    });

    return val;
  };

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const { getFieldDecorator } = this.props.form;
    return (
      <div {...formItemLayout}>
        <Form.Item label="Nom">
          {getFieldDecorator("expeditor.name", {
            rules: [
              {
                required: true,
                message: "Entrez le nom de l'expediteur!"
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Prenom">
          {getFieldDecorator("expeditor.lastname", {
            rules: [
              {
                required: false,
                message: "Entrez le prenom du destinataire !"
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Email">
          {getFieldDecorator("expeditor.email", {
            rules: [
              {
                type: "email",
                message: "email l'expediteur!"
              },
              {
                required: true,
                message: "Entrez l'email !"
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Pays">
          {getFieldDecorator("expeditor.country", {
            rules: [
              {
                required: true,
                message: "Entrez le pays de l'expediteur !"
              }
            ]
          })(
            <Select
              showSearch
              placeholder="choisir un pays"
              optionFilterProp="children"
              style={{ width: "100%" }}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {countryList()
                .getLabels()
                .map((elt, index) => (
                  <Select.Option key={index}>{elt}</Select.Option>
                ))}
            </Select>
          )}
        </Form.Item>

        <Form.Item label="Numero de telephone">
          {getFieldDecorator("expeditor.phone", {
            rules: [
              {
                required: true,
                message: "Entrez le numero !"
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Ville">
          {getFieldDecorator("expeditor.city", {
            rules: [
              {
                required: true,
                message: "Entrez la ville de l'expediteur !"
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Quatier">
          {getFieldDecorator("expeditor.street", {
            rules: [
              {
                required: true,
                message: "Entrez le quatier de l'expediteur !"
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Secteur">
          {getFieldDecorator("expeditor.sector", {
            rules: [
              {
                required: true,
                message: "Entrez le secteur de l'expediteur !"
              }
            ]
          })(<Input />)}
        </Form.Item>
      </div>
    );
  }
}
const ExpediteurForm = Form.create({ name: "exeditor" })(Expeditor);

export default ExpediteurForm;
