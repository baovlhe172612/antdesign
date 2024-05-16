import { CheckOutlined } from "@ant-design/icons"
import { Button, Checkbox, Col, Input, Row, Space, DatePicker, Radio, Select } from "antd"
import { useState } from "react"
import { bookRoom } from "../../service/bookRoomService";

const { RangePicker } = DatePicker;
function BookRoom() {
    const [data, setData] = useState({});


    const optionsTime = []

    for (let i = 7; i <= 24; i++) {
        optionsTime.push({
            value: i > 9 ? `${i} giờ` : `0${i} giờ`,
            label: i > 9 ? `${i} giờ` : `0${i} giờ`,
        })
    }

    const handleChangeInput = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        const objectNew = {
            ...data,
            [e.target.name]: e.target.value
        }
        setData(objectNew);

    }

    const handleChangeCheckbox = (e) => {
        console.log(e)
        const objectNew = {
            ...data,
            service: e
        };
        setData(objectNew);

    }

    const handleChangeDate = (dates, dateStrings) => {
        // console.log(dates);
        console.log(dateStrings);
        const objectNew = {
            ...data,
            date: dateStrings
        };
        setData(objectNew);


    }

    const handlChangeHours = (e) => {
        const objectNew = {
            ...data,
            time: e
        };
        setData(objectNew);
    }



    const handleSubmit = async () => {
       
        const response = await bookRoom(data)
        if(response){
            alert("Đặt phòng thành công")
        }else{
            alert("Có lỗi xảy ra vui lòng thử lại")
        }
        console.log("submit to json-server", response)
    }

    console.log(data)

    return (
        <>
            <h2>Đặt phòng</h2>


            <Row gutter={[20, 20]}>

                <Col span={24}>
                    <p>Họ tên</p>
                    <Input name="fullName" placeholder="Enter the name"
                        onChange={handleChangeInput}
                    />
                </Col>

                <Col span={12}>
                    <p>Số điện thoại</p>
                    <Input name="phoneNumber" placeholder="Enter the phone number"
                        onChange={handleChangeInput}
                    />
                </Col>

                <Col span={12}>
                    <p>Email</p>
                    <Input name="email" placeholder="Enter the email"
                        onChange={handleChangeInput}
                    />
                </Col>

                <Col span={12}>
                    <p>Dịch vụ thêm</p>
                    <Checkbox.Group name="service" onChange={handleChangeCheckbox}>
                        {/* <Row>
                            <Col span={8}>
                                <Checkbox value="A">A</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="B">B</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="C">C</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="D">D</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="E">E</Checkbox>
                            </Col>
                        </Row> */}
                        <Space.Compact direction="vertical"  >
                            <Checkbox value="Thuê xe máy">Thuê xe máy</Checkbox>
                            <Checkbox value="Thuê ô tô 4 chỗ">Thuê ô tô 4 chỗ</Checkbox>
                            <Checkbox value="Thuê ô tô 7 chỗ">Thuê ô tô 7 chỗ</Checkbox>
                            <Checkbox value="Thuê ô tô 16 chỗ">Thuê ô tô 16 chỗ</Checkbox>

                        </Space.Compact>
                    </Checkbox.Group>
                </Col>

                <Col span={12}>
                    <p>Quà tặng</p>
                    <Radio.Group name="gift" onChange={handleChangeInput} >

                        <Space.Compact direction="vertical"  >
                            <Radio value="Áo du lịch">Áo du lịch</Radio>
                            <Radio value="Mũ">Mũ</Radio>
                            <Radio value="Móc khoá">Móc khoá</Radio>
                            <Radio value="Tranh">Tranh</Radio>

                        </Space.Compact>
                    </Radio.Group>
                </Col>

                <Col span={12}>
                    <p>Chọn ngày</p>
                    <RangePicker placeholder={["Ngày đến", "Ngày đi"]} format="DD-MM-YYYY" onChange={handleChangeDate} />
                </Col>

                <Col span={12}>
                    <p>Chọn giờ</p>
                    <Select onChange={handlChangeHours} style={{
                        width: 120,
                    }}
                        // defaultValue={"14 giờ"}
                        options={optionsTime}>

                    </Select>
                </Col>




                <Col span={24}>
                    <Button type="primary" icon={<CheckOutlined />} onClick={handleSubmit}>
                        Đặt phòng
                    </Button>

                </Col>



            </Row>


        </>
    )
}
export default BookRoom