import React, { useEffect, useState } from 'react';
import { getListRoom } from '../../service/roomsService';
import './ListRoom.css';
import { Badge, Card, Col, Row } from 'antd';

function ListRoom() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListRoom();
            setRooms(response);
        };
        fetchApi();
    }, []);

    console.log("rooms:", rooms);

    return (
        <>
            <Row gutter={[20, 20]}>

                {rooms.map((item) => (
                    <Col span={12} key={item.id}>
                        <Badge.Ribbon text={item.typeroom ? "VIP" : "Thường"} color={item.typeroom ? "purple" : "gray"} >
                            <Card title={item.username}>
                                <p>Số giường: <strong>{item.quantityBed}</strong></p>
                                <p>Số giường: <strong>{item.quantityPeople}</strong></p>
                                <p>Số giường: <strong>{item.utils.join(', ')}</strong></p>
                                <p>Số giường: <strong>
                                {item.status ? (
                                            <Badge status='success' text="Còn phòng" />
                                        ) : (
                                            <Badge status='error' text="Hết phòng" />
                                        )}
                                    </strong></p>
                               
                            </Card>
                        </Badge.Ribbon>
                    </Col>
                ))}
            </Row>

        </>
    );
}

export default ListRoom;
