import React from "react";
import "./App.css";
import ImageLoad from "./hooks/ImageLoad";
function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {[...new Array(50)].map((val) => (
          <div style={{ flex: 0.5 }}>
            <ImageLoad
              src="https://s3-hady-prd-images.s3.ap-southeast-1.amazonaws.com/prod/B/F-SLC-102S1647855789955.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAREZIHUZNLTUQ452Q%2F20220728%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20220728T152254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1200&X-Amz-Signature=5395ec9b167d54ab68c933f9e1d832da7eefb349addcec55e5043cc9ce85fcfc"
              placeholder="https://res.cloudinary.com/ruparupa-com/image/upload/w_360,h_360,f_auto,q_auto/f_auto,q_auto:eco/v1527783043/Products/10146877_1.jpg"
              alt="Dekripsi"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
