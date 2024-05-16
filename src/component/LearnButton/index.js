
 
import { useState } from 'react';
import { CheckOutlined, GooglePlusOutlined } from "@ant-design/icons"

function LearnButton() {
    
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]); // Define the result state

  const handleClick = () => {

    setLoading(true)

    setTimeout(() => {
      const newResult = {
        code: 200,
        data: []
      };

      setResult([newResult]);
      setLoading(false);
    }, 3000)
  }
    return (
        <>
            <Button type="primary">Primary</Button>
            {/* <Button onClick={handleClick} type="dashed" loading={loading}>Dashed</Button> */}
            <Button loading={loading} onClick={handleClick} disabled={loading}>Dashed</Button>
            <div>
                {result ? (
                    result.map(item => (
                        <div key={item.id}> {/* Make sure to add a unique key for each rendered item */}
                            <p>{item.code}</p>
                        </div>
                    ))
                ) : ""}

            </div>

            <Button icon={<GooglePlusOutlined />} >Component: Icon</Button>
            <Button icon={<CheckOutlined />} >Component: Icon</Button>
        </>
    )
}
export default LearnButton