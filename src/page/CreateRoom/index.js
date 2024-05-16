import { Button, Form, Input, InputNumber, Select, Space, Switch } from "antd";
import { createRoom } from "../../service/roomsService";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const { Option } = Select;

function CreateRoom() {
    const [form] = Form.useForm();

    const handleSubmit = async (values) => {
        const response = await createRoom(values);
        console.log(response);
        if (response) {
            form.resetFields();
        }
    };

    return (
        <>
            <h2>Thêm phòng mới</h2>

            <Form
                name="create-room"
                onFinish={handleSubmit}
                form={form}
               
            >
                <Form.Item
                    label="Tên phòng"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name room!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Số lượng giường"
                    name="quantityBed"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the quantity of beds!',
                        },
                    ]}
                >
                    <InputNumber min={1} max={10} />
                </Form.Item>

                <Form.Item
                    label="Số người tối đa"
                    name="quantityPeople"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the maximum number of people!',
                        },
                    ]}
                >
                    <InputNumber min={1} max={10} />
                </Form.Item>

                <Form.Item
                    label="Mô tả"
                    name="description"
                >
                    <Input.TextArea rows={6} showCount maxLength={100} />
                </Form.Item>

                <Form.Item
                    name="utils"
                    label="Tiện ích"
                    rules={[{ required: true, message: 'Please select the utilities!' }]}
                >
                    <Select mode="multiple" allowClear placeholder="Select your utilities">
                        <Option value="Wifi">Wifi</Option>
                        <Option value="Nóng Lạnh">Nóng Lạnh</Option>
                        <Option value="Điều hoà">Điều hoà</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="typeroom"
                    label="Loại phòng"
                    valuePropName="checked"
                    initialValue={true} // Giá trị mặc định là VIP
                >
                    <Switch checkedChildren="VIP" unCheckedChildren="Thường" defaultChecked />
                </Form.Item>

                <Form.Item
                    name="status"
                    label="Trạng thái"
                    valuePropName="checked"
                    initialValue={true} // Giá trị mặc định là Còn phòng
                >
                    <Switch checkedChildren="Còn phòng" unCheckedChildren="Hết phòng" defaultChecked />
                </Form.Item>

              

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default CreateRoom;
