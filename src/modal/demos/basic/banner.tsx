import React, { useState } from 'react';
import { Button } from 'antd';
import { Modal } from 'dt-react-component';

export default function Banner() {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Modal
                title="dt-react-component"
                visible={visible}
                banner="模态框可以支持 banner 属性"
                onCancel={() => setVisible(false)}
                onOk={() => setVisible(false)}
            >
                testssss
            </Modal>
            <Button type="primary" onClick={() => setVisible(true)}>
                Banner
            </Button>
        </>
    );
}
