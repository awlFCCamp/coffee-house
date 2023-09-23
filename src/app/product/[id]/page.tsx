import { singleProduct } from "@/data";
import Image from "next/image";

const SingleProduct = () => {
  return (
    <div>
      {singleProduct.img && (
        <div>
          <Image
            src={singleProduct.img}
            alt=""
            className="oject-contain"
            fill
          />
        </div>
      )}
      <div>
        <h1>{singleProduct.title}</h1>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default SingleProduct;
