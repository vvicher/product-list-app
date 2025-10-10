import React from 'react';
import { useNavigate, useParams } from "react-router";
import { Button } from '@mui/material';
import type { ProductItemType } from '../../types/types';
import { DataContext } from '../../contexts/DataContext';
import { Image } from '../../components/Image';
import { ImagePlaceholder } from '../../components/ImagePlaceholder';
import { EditDialog } from './components/EditDialog';

export const ProductDetails = () => {
  const [currentProduct, setCurrentProduct] = React.useState({} as ProductItemType);
  const [edit, setEdit] = React.useState(false);

  const { id } = useParams();
  const { items, loaded } = React.useContext(DataContext);

  const navigate = useNavigate();

  const product = items?.find((item) => item.id === id);

  React.useEffect(() => {
    if (product) {
      setCurrentProduct(product ?? {} as ProductItemType);
    };
  }, [product]);

  if (!product && loaded) {
    return (
      <div className="w-full min-h-full bg-gray-200 flex flex-col gap-5 justify-center items-center">
        <h1 className='text-2xl'>Product with id "{id}" cannot be found.</h1>
        <Button variant='contained' onClick={() => navigate("/")}>Return to Home</Button>
      </div>
    );
  };

  return (
    <>
      {loaded && (
        <>
          <div className="w-full min-h-full bg-gray-200 flex justify-center">
            <div className="w-2/3 flex flex-col gap-2">
              <div className='py-4 flex justify-between'>
                <Button variant='contained' onClick={() => navigate("/")}>{`< Back`}</Button>
                <Button variant='contained' color='success' onClick={() => setEdit(true)}>{`Edit`}</Button>
              </div>
              <div
                className="flex rounded-lg flex-row p-4 border border-gray-300 bg-white"
              >
                <div className='flex-shrink-0 flex flex-col w-72 mr-5 gap-4'>
                  {currentProduct?.images?.length ? (
                    currentProduct?.images.map((img, i) => {
                      return (
                        <div key={i}>
                          <Image image={img} className='w-[288px] h-[216px]' />
                        </div>
                      );
                    })
                  ) : (
                    <ImagePlaceholder />
                  )}
                </div>
                <div className='flex flex-col py-4'>
                  <h1 className="text-2xl text-blue-700 mb-4">Product: {currentProduct?.title}</h1>
                  <p>Description: {currentProduct?.description}</p>
                </div>
              </div>
            </div>
          </div>
          {edit && <EditDialog close={() => setEdit(false)} item={currentProduct} />}
        </>
      )}
    </>
  );
};
