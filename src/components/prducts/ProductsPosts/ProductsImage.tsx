import React, { MouseEvent, useEffect, useState } from 'react';
import { supabase } from '../../../api/supabase/supabaseClient';
import { v4 as uuid } from 'uuid';
import * as St from '../../../styles/products/productsPosts/StProductsImageUpload';
import * as Stc from '../../../styles/products/productsPosts/StProductsWriteForm';
import FileResizer from 'react-image-file-resizer';

interface Props {
  uploadedFileUrl: string[];
  setUploadedFileUrl: React.Dispatch<React.SetStateAction<string[]>>;
}

const ProductsImage = ({ uploadedFileUrl, setUploadedFileUrl }: Props) => {
  const [files, setFiles] = useState<File[]>([]);

  // 웹 페이지에서 파일 등록하기
  const handleFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList) {
      const filesArray = Array.from(fileList);
      // if (uploadedFileUrl.length + filesArray.length > 12) {
      //   alert('이미지는 최대 12개까지 업로드 가능합니다.');
      //   return;
      // }
      filesArray.forEach((file) => {
        handleAddImages(file);
      });
    }
  };

  // 업로드된 파일이 12개가 초과되면 그 뒤에 들어오는 파일은 없앰
  if (uploadedFileUrl.length > 12 && files.length > 12) {
    uploadedFileUrl.pop() && files.pop();
    alert('이미지는 최대 12개까지 업로드 가능합니다.');
  }

  const handleAddImages = async (file: File) => {
    try {
      const newFileName = uuid();

      // 사진 resize 해주는 함수
      const resizeFile = (file: File) =>
        new Promise((res) => {
          FileResizer.imageFileResizer(
            file,
            1500,
            1500,
            'WEBP',
            20,
            0,
            (uri) => res(uri),
            'file'
          );
        });
      const resize = await resizeFile(file);

      const { data, error } = await supabase.storage
        .from('images')
        .upload(`products/${newFileName}`, resize as File);

      if (error) {
        console.log('파일이 업로드 되지 않습니다.', error);
        return;
      }
      // 위의 resize 변수로 대체함.
      // const res = supabase.storage.from('images').getPublicUrl(data.path, {
      //   transform: {
      //     width: 500,
      //     resize: 'contain',
      //     format: 'origin'
      //   }
      // });
      const res = supabase.storage.from('images').getPublicUrl(data.path);
      setFiles((prevFiles) => [file, ...prevFiles]);
      setUploadedFileUrl((prev: any) => [...prev, res.data.publicUrl]);
    } catch (error) {
      console.error(
        '알 수 없는 문제가 발생하였습니다. 다시 시도하여 주십시오.',
        error
      );
    }
  };

  // 이미지 클릭 시 순서 맨 앞으로
  const handleImageOrder = (e: MouseEvent<HTMLElement>) => {
    const url = e.currentTarget.id;

    // 클릭된 아이템 인덱스 번호
    const clickedItem = uploadedFileUrl.indexOf(url);
    // 클릭 된 아이템을 제외한 배열
    const updatedArr = uploadedFileUrl.filter(
      (item) => item !== uploadedFileUrl[clickedItem]
    );
    // 클릭 된 아이템을 맨 앞으로 해서 state를 변경하는 부분
    setUploadedFileUrl([uploadedFileUrl[clickedItem], ...updatedArr]);
  };

  // X 버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (idx: any) => {
    setUploadedFileUrl(uploadedFileUrl.filter((_, index) => index !== idx));
    setFiles(files.filter((_, index) => index !== idx));
  };

  // useEffect(() => {
  //   console.log(files);
  // },[files])

  return (
    <>
      <St.UpLoadImageContainer>
        <Stc.SemiTitle>
          사진
          <Stc.Required>*</Stc.Required>
          <St.ImgCount>{uploadedFileUrl.length}/12</St.ImgCount>
        </Stc.SemiTitle>
        <St.ImageWrapper>
          <St.ImageOrderWrapper></St.ImageOrderWrapper>
          {uploadedFileUrl.map((img: string, idx: number) => (
            <St.ImageCard id={img} key={idx}>
              <St.Image src={img} alt={`${img}-${idx}`} />
              <St.ImageOrderBtn id={img} onClick={handleImageOrder}>
                <St.ImageOrder $idx={idx}>대표사진</St.ImageOrder>
              </St.ImageOrderBtn>
              <St.ImageDeleteBtn onClick={() => handleDeleteImage(idx)}>
                <St.ImageDeleteIcon />
              </St.ImageDeleteBtn>
            </St.ImageCard>
          ))}
          {uploadedFileUrl.length >= 12 ? (
            <></>
          ) : (
            <St.UpLoadBox htmlFor="file">
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFiles}
                multiple
                hidden
              />
              +
            </St.UpLoadBox>
          )}
        </St.ImageWrapper>
      </St.UpLoadImageContainer>
    </>
  );
};

export default ProductsImage;
